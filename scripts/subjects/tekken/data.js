/*
 * Tekken subject data — the Mishima blood war and the King of Iron Fist.
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
    "tekken",
    "Tekken",
    "topic",
    "Bandai Namco's Mishima saga — Zaibatsu, Devil Gene, and the Iron Fist tournament.",
    "Tekken is the fighting saga of the Mishima bloodline: Heihachi, Kazuya, and Jin warring over the Mishima Zaibatsu, the Devil Gene, and the King of Iron Fist Tournament from the first arcade game through Tekken 8.",
    "fiction"
);

/* ---------- Mishima / Kazama blood ---------- */

entity(
    "heihachi-mishima",
    "Heihachi Mishima",
    "person",
    "Zaibatsu patriarch who threw his son into a ravine.",
    "Heihachi Mishima is the iron-fisted head of the Mishima Zaibatsu. He hurled Kazuya off a cliff, hosted the King of Iron Fist Tournament, and spent a lifetime trying to stamp the Devil Gene out of his bloodline.",
    "fiction"
);

entity(
    "kazuya-mishima",
    "Kazuya Mishima",
    "person",
    "Devil-marked son who took the Zaibatsu, lost it, and returned through G Corporation.",
    "Kazuya Mishima survived Heihachi's ravine, won the first King of Iron Fist Tournament, and later rebuilt power at G Corporation so he could finish the family war in Tekken 8.",
    "fiction"
);

entity(
    "jin-kazama",
    "Jin Kazama",
    "person",
    "Kazuya and Jun's son — Tekken 3's new lead and later Zaibatsu head.",
    "Jin Kazama learned Mishima karate from Heihachi, then turned on both grandfather and father. He won Tekken 3, later seized the Mishima Zaibatsu, and remains the Devil Gene heir at the center of Tekken 8.",
    "fiction"
);

entity(
    "jun-kazama",
    "Jun Kazama",
    "person",
    "Wildlife officer and Kazama-style fighter who tried to redeem Kazuya.",
    "Jun Kazama is the Kazama-style martial artist who met Kazuya at the second tournament, bore Jin, and vanished after Ogre's attack — a missing mother whose return haunts Tekken 8.",
    "fiction"
);

entity(
    "asuka-kazama",
    "Asuka Kazama",
    "person",
    "Osaka street enforcer of the Kazama dojo line.",
    "Asuka Kazama is a later Kazama relative, a hot-tempered Osaka fighter who enters the King of Iron Fist Tournament to drag family trouble — and Feng Wei — into the open.",
    "fiction"
);

entity(
    "lee-chaolan",
    "Lee Chaolan",
    "person",
    "Heihachi's adopted son and Violet-era rival to Kazuya.",
    "Lee Chaolan was adopted by Heihachi as a foil to Kazuya, then built his own fortune and Violet persona, circling the Zaibatsu war without ever being a true Mishima heir.",
    "fiction"
);

entity(
    "lars-alexandersson",
    "Lars Alexandersson",
    "person",
    "Tekken Force rebel and Heihachi's illegitimate son.",
    "Lars Alexandersson led a Tekken Force coup against the Zaibatsu, an illegitimate Mishima who fights to stop Jin and Kazuya rather than claim the company.",
    "fiction"
);

/* ---------- Circuit fighters ---------- */

entity(
    "paul-phoenix",
    "Paul Phoenix",
    "person",
    "Hot-blooded American who keeps swearing this is his tournament.",
    "Paul Phoenix is the blonde brawler who has entered almost every King of Iron Fist Tournament, forever one win short of the Mishima family ending the story without him.",
    "fiction"
);

entity(
    "marshall-law",
    "Marshall Law",
    "person",
    "Dojo owner who fights to keep a restaurant and a school alive.",
    "Marshall Law is the Bruce-styled martial artist of the first tournaments, a friend of Paul Phoenix who keeps returning when money or family honor is on the line.",
    "fiction"
);

entity(
    "nina-williams",
    "Nina Williams",
    "person",
    "Irish assassin hired around the Iron Fist circuit.",
    "Nina Williams is the cold assassin who entered the first King of Iron Fist Tournament on a Mishima contract and later became a Tekken Force / Zaibatsu operator in Jin's era.",
    "fiction"
);

entity(
    "king",
    "King",
    "person",
    "Jaguar-masked wrestler — a lineage, not one man.",
    "King is the lucha-inspired wrestler of Tekken: first a priest who fought for an orphanage, then a student who took the mask, both of them regulars at the King of Iron Fist Tournament.",
    "fiction"
);

entity(
    "ling-xiaoyu",
    "Ling Xiaoyu",
    "person",
    "Peking-opera fighter who wants to change Heihachi and save Jin.",
    "Ling Xiaoyu is the pigtail fighter introduced in Tekken 3, a Mishima Polytechnical student who chases Jin and keeps trying to talk the Mishima men out of their war.",
    "fiction"
);

entity(
    "yoshimitsu",
    "Yoshimitsu",
    "person",
    "Manji-clan space ninja who steals from the Zaibatsu to give away.",
    "Yoshimitsu is the mechanical-arm swordsman of the Manji Clan, a tournament regular who treats the Mishima fortune as something to rob for the poor.",
    "fiction"
);

entity(
    "hwoarang",
    "Hwoarang",
    "person",
    "Taekwondo rival who hunts Jin across later tournaments.",
    "Hwoarang is the long-haired taekwondo fighter introduced in Tekken 3, a Baek dojo student whose rivalry with Jin Kazama outlasted high school and several wars.",
    "fiction"
);

entity(
    "steve-fox",
    "Steve Fox",
    "person",
    "Boxing champion grown from a Mishima-related experiment.",
    "Steve Fox is the British boxer who learned his past was a Mishima / G Corporation genetic program, tying an otherwise clean sports story to the Devil Gene war.",
    "fiction"
);

entity(
    "eddy-gordo",
    "Eddy Gordo",
    "person",
    "Capoeira fighter who entered Tekken 3 to avenge his father.",
    "Eddy Gordo is the capoeira champion introduced in Tekken 3, a Brazilian fighter whose prison-taught dance style became one of the game's most copied stances.",
    "fiction"
);

/* ---------- Orgs / places / concepts / events ---------- */

entity(
    "mishima-zaibatsu",
    "Mishima Zaibatsu",
    "organization",
    "Conglomerate the family kills over — army, labs, and the tournament.",
    "The Mishima Zaibatsu is the multinational that hosts the King of Iron Fist Tournament. Heihachi, Kazuya, and Jin have each seized it, turning a company into a private army.",
    "fiction"
);

entity(
    "g-corporation",
    "G Corporation",
    "organization",
    "Biotech giant Kazuya uses as a rival throne to the Zaibatsu.",
    "G Corporation is the biotech firm that recovered Kazuya's body after Tekken 2 and later became his corporate army against Jin's Mishima Zaibatsu.",
    "fiction"
);

entity(
    "tekken-force",
    "Tekken Force",
    "organization",
    "Zaibatsu private military Lars once mutinied against.",
    "Tekken Force is the Mishima Zaibatsu's private army, used as a world-police in Jin's reign and the unit Lars Alexandersson rebelled from.",
    "fiction"
);

entity(
    "kazama-family",
    "Kazama family",
    "organization",
    "Dojo line of Jun and Asuka — the other blood in Jin's name.",
    "The Kazama family is the martial-arts household opposite the Mishimas: Jun's spiritually grounded style, Asuka's Osaka dojo, and the name Jin carries beside Devil Gene.",
    "fiction"
);

entity(
    "king-of-iron-fist-tournament",
    "King of Iron Fist Tournament",
    "event",
    "The Zaibatsu-hosted contest that opens every numbered war.",
    "The King of Iron Fist Tournament is the in-world fighting contest the Mishima Zaibatsu stages. Winning it has meant company control, revenge, or a chance to kill a father.",
    "fiction"
);

entity(
    "hon-maru",
    "Hon-Maru",
    "place",
    "Mishima temple compound where fathers and sons settle blood.",
    "Hon-Maru is the Mishima family temple: the wooden hall where Heihachi, Kazuya, and Jin have faced one another, and where Jack units and Devils have broken the floor.",
    "fiction"
);

entity(
    "yakushima",
    "Yakushima",
    "place",
    "Forest island of Jun's chapter and Jin's Tekken 8 return.",
    "Yakushima is the island tied to Jun Kazama and to Jin's attempt, in Tekken 8, to shed the Mishima war among cedar and coastline.",
    "fiction"
);

entity(
    "devil-gene",
    "Devil Gene",
    "concept",
    "Inherited power that turns Mishima blood into Devil.",
    "The Devil Gene is the curse in Kazuya and Jin: wings, lasers, and a voice that Heihachi tried to isolate, harvest, or kill rather than father.",
    "fiction"
);

entity(
    "mishima-style-karate",
    "Mishima-style karate",
    "concept",
    "Brutal house karate of Heihachi, Kazuya, and Jin.",
    "Mishima-style karate is the family's fighting art: forward dashes, electric winds, and the power game that makes the three Mishima men play like one bloodline.",
    "fiction"
);

entity(
    "kazama-style",
    "Kazama-style traditional martial arts",
    "concept",
    "Softer, spiritually framed art Jun passed toward Jin and Asuka.",
    "Kazama-style traditional martial arts is Jun and Asuka's contrasting discipline — parries, sweeping kicks, and the hope that Jin might fight as a Kazama instead of a Mishima.",
    "fiction"
);

/* ---------- Works ---------- */

entity(
    "tekken-2",
    "Tekken 2",
    "work",
    "1995 sequel where Kazuya sits the Zaibatsu throne.",
    "Tekken 2 is the arcade sequel in which Kazuya rules the Mishima Zaibatsu, Jun enters his orbit, and Heihachi returns from the ravine to take the company back.",
    "fiction"
);

entity(
    "tekken-3",
    "Tekken 3",
    "work",
    "1997 game that made Jin the new lead against Ogre.",
    "Tekken 3 introduced Jin Kazama, Ling Xiaoyu, Hwoarang, Eddy, and a world-spanning hunt for Ogre, shifting the saga from father-and-son to a third generation.",
    "fiction"
);

entity(
    "tekken-7",
    "Tekken 7",
    "work",
    "2015 chapter that finally killed the Heihachi–Kazuya stalemate.",
    "Tekken 7 staged the long-delayed last fight between Heihachi and Kazuya, explained the Devil Gene's origin, and cleared the floor for Jin versus Kazuya.",
    "fiction"
);

entity(
    "tekken-8",
    "Tekken 8",
    "work",
    "2024 climax of Jin against Kazuya's Devil.",
    "Tekken 8 is the numbered entry built around Jin Kazama versus Kazuya Mishima, with Jun's return and Yakushima as the emotional counterweight to the Zaibatsu war.",
    "fiction"
);

/* ---------- Relationships ---------- */

rel("heihachi-mishima", "mishima-zaibatsu", "leads", "Heihachi Mishima was the long-running patriarch of the Mishima Zaibatsu.", 0.98, 0.96);
rel("heihachi-mishima", "king-of-iron-fist-tournament", "created", "Heihachi hosted the King of Iron Fist Tournament to draw Kazuya out.", 0.96, 0.94);
rel("heihachi-mishima", "kazuya-mishima", "opposed_by", "Heihachi threw Kazuya into a ravine and spent decades at war with him.", 0.98, 0.97);
rel("kazuya-mishima", "g-corporation", "leads", "Kazuya rebuilt his power as the hidden head of G Corporation.", 0.97, 0.95);
rel("kazuya-mishima", "devil-gene", "uses", "Kazuya's Devil form is the first great expression of the Devil Gene.", 0.98, 0.96);
rel("jin-kazama", "mishima-zaibatsu", "leads", "Jin later seized the Mishima Zaibatsu and declared war on the world.", 0.96, 0.93);
rel("jin-kazama", "devil-gene", "uses", "Jin inherited the Devil Gene from Kazuya and Jun's line.", 0.97, 0.95);
rel("jin-kazama", "kazuya-mishima", "opposed_by", "Jin exists to end Kazuya — and the Mishima curse with him.", 0.97, 0.95);
rel("jin-kazama", "heihachi-mishima", "opposed_by", "Jin turned on Heihachi after learning the family used him.", 0.96, 0.93);

rel("jun-kazama", "kazama-family", "member_of", "Jun Kazama is the spiritual center of the Kazama family.", 0.97, 0.94);
rel("asuka-kazama", "kazama-family", "member_of", "Asuka Kazama carries the Osaka Kazama dojo line.", 0.96, 0.93);
rel("jun-kazama", "kazuya-mishima", "connected_to", "Jun tried to pull Kazuya back from the Devil Gene.", 0.95, 0.92);
rel("jin-kazama", "jun-kazama", "connected_to", "Jin is Jun Kazama's son as much as he is a Mishima.", 0.97, 0.94);
rel("lee-chaolan", "mishima-zaibatsu", "member_of", "Lee Chaolan was adopted into the Mishima Zaibatsu as Kazuya's rival.", 0.95, 0.91);
rel("lars-alexandersson", "tekken-force", "leads", "Lars led a Tekken Force rebellion against the Zaibatsu.", 0.96, 0.93);
rel("tekken-force", "mishima-zaibatsu", "part_of", "Tekken Force is the Mishima Zaibatsu's private army.", 0.97, 0.94);

rel("heihachi-mishima", "mishima-style-karate", "uses", "Heihachi fights in Mishima-style karate.", 0.97, 0.94);
rel("kazuya-mishima", "mishima-style-karate", "uses", "Kazuya's Mishima-style karate mirrors his father's, with Devil layered on.", 0.97, 0.94);
rel("jin-kazama", "mishima-style-karate", "uses", "Jin learned Mishima-style karate before mixing in Kazama and karate-do.", 0.95, 0.92);
rel("jun-kazama", "kazama-style", "uses", "Jun fights in Kazama-style traditional martial arts.", 0.96, 0.93);
rel("asuka-kazama", "kazama-style", "uses", "Asuka uses the same Kazama-style art as Jun.", 0.95, 0.91);

rel("paul-phoenix", "king-of-iron-fist-tournament", "involved", "Paul Phoenix has entered almost every King of Iron Fist Tournament.", 0.95, 0.91);
rel("marshall-law", "paul-phoenix", "supports", "Marshall Law is Paul Phoenix's long-running tournament friend.", 0.93, 0.89);
rel("nina-williams", "mishima-zaibatsu", "supports", "Nina has taken Mishima Zaibatsu contracts across several tournaments.", 0.93, 0.89);
rel("ling-xiaoyu", "jin-kazama", "supports", "Xiaoyu keeps trying to pull Jin out of the Mishima war.", 0.94, 0.9);
rel("hwoarang", "jin-kazama", "opposed_by", "Hwoarang's rivalry with Jin began in Tekken 3 and never closed.", 0.95, 0.91);
rel("yoshimitsu", "mishima-zaibatsu", "opposed_by", "Yoshimitsu steals from the Mishima Zaibatsu to fund the Manji Clan.", 0.93, 0.88);
rel("steve-fox", "g-corporation", "connected_to", "Steve Fox's past is a genetic program tied to Mishima and G Corporation labs.", 0.92, 0.88);
rel("king", "king-of-iron-fist-tournament", "involved", "King is a repeating wrestler in the King of Iron Fist Tournament.", 0.94, 0.9);

rel("king-of-iron-fist-tournament", "mishima-zaibatsu", "produced", "The Mishima Zaibatsu hosts the King of Iron Fist Tournament.", 0.98, 0.96);
rel("hon-maru", "mishima-zaibatsu", "located_in", "Hon-Maru is the Mishima family's temple compound.", 0.96, 0.93);
rel("jun-kazama", "yakushima", "located_in", "Jun's later chapter is tied to the forests of Yakushima.", 0.94, 0.9);
rel("jin-kazama", "yakushima", "located_in", "Jin returns to Yakushima in Tekken 8 to face what the Devil Gene made him.", 0.94, 0.91);

rel("tekken-2", "kazuya-mishima", "involved", "Tekken 2 is the chapter in which Kazuya sits the Zaibatsu throne.", 0.97, 0.95);
rel("tekken-2", "jun-kazama", "involved", "Tekken 2 introduced Jun Kazama into Kazuya's orbit.", 0.96, 0.93);
rel("tekken-3", "jin-kazama", "involved", "Tekken 3 made Jin Kazama the new lead against Ogre.", 0.98, 0.96);
rel("tekken-3", "ling-xiaoyu", "involved", "Tekken 3 introduced Ling Xiaoyu to the Iron Fist cast.", 0.95, 0.91);
rel("tekken-3", "eddy-gordo", "involved", "Tekken 3 introduced Eddy Gordo's capoeira.", 0.94, 0.9);
rel("tekken-7", "heihachi-mishima", "involved", "Tekken 7 staged Heihachi's last war with Kazuya.", 0.96, 0.93);
rel("tekken-8", "jin-kazama", "involved", "Tekken 8 is built around Jin's final confrontation with Kazuya.", 0.98, 0.96);
rel("tekken-8", "kazuya-mishima", "involved", "Tekken 8 casts Kazuya's Devil as the world-ending threat.", 0.97, 0.95);

rel("mishima-zaibatsu", "tekken", "part_of", "The Mishima Zaibatsu is the company the Tekken saga wars over.", 0.98, 0.96);
rel("king-of-iron-fist-tournament", "tekken", "part_of", "The King of Iron Fist Tournament is the contest every numbered Tekken opens.", 0.99, 0.98);
rel("devil-gene", "tekken", "part_of", "The Devil Gene is the curse that drives the Mishima saga.", 0.97, 0.95);
rel("tekken-2", "tekken", "part_of", "Tekken 2 is the sequel that seated Kazuya on the Zaibatsu throne.", 0.96, 0.93);
rel("tekken-3", "tekken", "part_of", "Tekken 3 is the game that passed the lead to Jin.", 0.97, 0.95);
rel("tekken-7", "tekken", "part_of", "Tekken 7 closed Heihachi's war with Kazuya.", 0.96, 0.93);
rel("tekken-8", "tekken", "part_of", "Tekken 8 is the modern climax of the Mishima blood war.", 0.97, 0.95);
rel("g-corporation", "mishima-zaibatsu", "opposed_by", "G Corporation is Kazuya's corporate rival to the Mishima Zaibatsu.", 0.95, 0.92);

module.exports = { entities, relationships };
