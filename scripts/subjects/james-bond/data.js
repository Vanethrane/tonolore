/*
 * James Bond subject data — Ian Fleming's 007 spy franchise.
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
    "james-bond",
    "James Bond",
    "topic",
    "Ian Fleming's 007 spy franchise across books and film.",
    "James Bond is the espionage franchise begun by Ian Fleming's novels and continued in Eon Productions films starring 007, MI6's best-known double-O agent."
);

entity(
    "ian-fleming",
    "Ian Fleming",
    "person",
    "Creator of James Bond.",
    "Ian Fleming created James Bond in the 1950s novels and short stories that established 007, SPECTRE, and the tone of the spy thriller."
);

entity(
    "eon-productions",
    "Eon Productions",
    "organization",
    "Primary producer of Bond films.",
    "Eon Productions, founded by Albert R. Broccoli and Harry Saltzman, produces the official James Bond film series."
);

entity(
    "albert-r-broccoli",
    "Albert R. Broccoli",
    "person",
    "Producer who launched the Bond films.",
    "Albert R. 'Cubby' Broccoli co-founded Eon Productions and shaped the James Bond film franchise for decades."
);

/* ---------- Characters ---------- */

entity(
    "bond-007",
    "James Bond (007)",
    "person",
    "MI6 double-O agent with a licence to kill.",
    "James Bond, agent 007, is MI6's suave operative who confronts global villains, gadgets from Q Branch, and assignments from M."
);

entity(
    "m",
    "M",
    "person",
    "Head of MI6 who assigns Bond's missions.",
    "M is the code name for MI6's chief, the authority who briefs Bond and authorizes his most dangerous operations."
);

entity(
    "q",
    "Q",
    "person",
    "Quartermaster of Q Branch gadgets.",
    "Q is MI6's quartermaster, supplying Bond with cars, gadgets, and dry warnings about bringing the equipment back in one piece."
);

entity(
    "moneypenny",
    "Miss Moneypenny",
    "person",
    "M's secretary and Bond's flirtatious ally.",
    "Miss Moneypenny works for M, trading banter with Bond between briefings and holding the office together."
);

entity(
    "blofeld",
    "Ernst Stavro Blofeld",
    "person",
    "SPECTRE's criminal mastermind.",
    "Ernst Stavro Blofeld is the cat-stroking mastermind of SPECTRE and Bond's most enduring nemesis across novels and films."
);

entity(
    "goldfinger-character",
    "Auric Goldfinger",
    "person",
    "Gold-obsessed villain of Goldfinger.",
    "Auric Goldfinger is the wealthy smuggler whose plot against Fort Knox defines one of Bond's classic film showdowns."
);

entity(
    "oddjob",
    "Oddjob",
    "person",
    "Goldfinger's deadly bowler-hatted henchman.",
    "Oddjob is Auric Goldfinger's silent henchman, infamous for a steel-brimmed bowler hat used as a lethal weapon."
);

entity(
    "felix-leiter",
    "Felix Leiter",
    "person",
    "CIA ally who aids Bond.",
    "Felix Leiter is Bond's recurring CIA friend and ally across novels and multiple film eras."
);

entity(
    "jaws",
    "Jaws",
    "person",
    "Steel-toothed henchman of The Spy Who Loved Me.",
    "Jaws is a towering henchman with metal teeth who battles Bond in The Spy Who Loved Me and Moonraker."
);

entity(
    "sean-connery",
    "Sean Connery",
    "person",
    "First major film Bond.",
    "Sean Connery originated the screen James Bond in Dr. No and defined the role's early swagger for Eon Productions."
);

entity(
    "daniel-craig",
    "Daniel Craig",
    "person",
    "Bond of Casino Royale through No Time to Die.",
    "Daniel Craig portrayed James Bond from Casino Royale through No Time to Die, grounding the series in a grittier continuity."
);

entity(
    "roger-moore",
    "Roger Moore",
    "person",
    "Bond of the 1970s–80s lighter era.",
    "Roger Moore played James Bond across seven films, favoring wit and spectacle in the franchise's mid-classic run."
);

/* ---------- Organizations / objects ---------- */

entity(
    "mi6",
    "MI6",
    "organization",
    "British Secret Intelligence Service.",
    "MI6 (Secret Intelligence Service) employs Bond as a double-O agent under M, with Q Branch and Moneypenny in support."
);

entity(
    "spectre",
    "SPECTRE",
    "organization",
    "Special Executive for Counter-intelligence, Terrorism, Revenge and Extortion.",
    "SPECTRE is Blofeld's global criminal organization opposing Bond across novels and multiple films."
);

entity(
    "double-o",
    "00 Section",
    "concept",
    "Elite MI6 agents with a licence to kill.",
    "The 00 Section designates MI6 agents licensed to kill in the field; Bond's number is 007."
);

entity(
    "aston-martin",
    "Aston Martin",
    "object",
    "Bond's signature sports car marque.",
    "Aston Martin cars, especially the DB5, are James Bond's most iconic vehicles across the film series."
);

entity(
    "walther-ppk",
    "Walther PPK",
    "object",
    "Bond's classic sidearm.",
    "The Walther PPK is James Bond's signature pistol for much of the film series, replacing his earlier Beretta."
);

entity(
    "licence-to-kill",
    "Licence to kill",
    "concept",
    "Authority granted to double-O agents.",
    "A licence to kill is the lethal-force authority that defines Bond's 00 status within MI6."
);

/* ---------- Works ---------- */

entity(
    "casino-royale",
    "Casino Royale",
    "work",
    "First Bond novel; Craig-era film reboot.",
    "Casino Royale introduces Bond in Fleming's first novel and later relaunches Daniel Craig's film era at the baccarat table."
);

entity(
    "dr-no",
    "Dr. No",
    "work",
    "First Eon Bond film starring Sean Connery.",
    "Dr. No launched the Eon Bond films in 1962 with Sean Connery, establishing the series' tone, music, and style."
);

entity(
    "goldfinger-film",
    "Goldfinger",
    "work",
    "Classic film of gold, Oddjob, and the Aston Martin.",
    "Goldfinger is a defining Bond film featuring Auric Goldfinger, Oddjob, and the gadget-laden Aston Martin DB5."
);

entity(
    "skyfall",
    "Skyfall",
    "work",
    "Craig-era film centered on M and Bond's past.",
    "Skyfall follows Bond defending MI6 and M from a vengeful former agent, becoming one of the series' highest-acclaimed entries."
);

entity(
    "from-russia-with-love",
    "From Russia with Love",
    "work",
    "Early Connery film of SPECTRE intrigue.",
    "From Russia with Love sends Bond into a SPECTRE plot involving a Lektor decoder and Cold War romance."
);

entity(
    "no-time-to-die",
    "No Time to Die",
    "work",
    "Craig's final Bond film.",
    "No Time to Die concludes Daniel Craig's Bond arc with Spectre remnants, personal stakes, and a definitive ending."
);

entity(
    "thunderball",
    "Thunderball",
    "work",
    "SPECTRE underwater nuclear blackmail plot.",
    "Thunderball pits Bond against SPECTRE's nuclear extortion scheme in a landmark underwater adventure."
);

entity(
    "bond-theme",
    "James Bond Theme",
    "concept",
    "Iconic surf-rock theme of the films.",
    "The James Bond Theme, associated with Monty Norman and John Barry's arrangements, announces 007 across decades of film."
);

/* ---------- Relationships ---------- */

rel("ian-fleming", "james-bond", "created", "Ian Fleming created James Bond.", 0.99, 0.99);
rel("ian-fleming", "casino-royale", "created", "Fleming wrote Casino Royale, the first Bond novel.", 0.99, 0.97);
rel("eon-productions", "james-bond", "produced", "Eon Productions produces the Bond films.", 0.99, 0.98);
rel("albert-r-broccoli", "eon-productions", "leads", "Broccoli co-founded and led Eon Productions.", 0.98, 0.95);
rel("albert-r-broccoli", "dr-no", "produced", "Broccoli produced Dr. No.", 0.97, 0.93);

rel("bond-007", "james-bond", "connected_to", "007 is the central figure of James Bond.", 0.99, 0.99);
rel("bond-007", "mi6", "member_of", "Bond serves MI6.", 0.99, 0.98);
rel("bond-007", "double-o", "member_of", "Bond is a 00 agent.", 0.99, 0.97);
rel("m", "mi6", "leads", "M heads MI6.", 0.98, 0.96);
rel("q", "mi6", "member_of", "Q runs Q Branch for MI6.", 0.97, 0.94);
rel("moneypenny", "mi6", "member_of", "Moneypenny works for M at MI6.", 0.97, 0.94);
rel("blofeld", "spectre", "leads", "Blofeld leads SPECTRE.", 0.99, 0.97);
rel("bond-007", "blofeld", "opposed_by", "Bond repeatedly opposes Blofeld.", 0.98, 0.96);
rel("goldfinger-character", "oddjob", "supports", "Oddjob serves Goldfinger.", 0.98, 0.95);
rel("bond-007", "goldfinger-character", "opposed_by", "Bond confronts Goldfinger.", 0.97, 0.94);
rel("felix-leiter", "bond-007", "supports", "Felix Leiter aids Bond.", 0.96, 0.92);
rel("sean-connery", "bond-007", "connected_to", "Sean Connery portrayed Bond.", 0.98, 0.96);
rel("daniel-craig", "bond-007", "connected_to", "Daniel Craig portrayed Bond.", 0.98, 0.96);
rel("roger-moore", "bond-007", "connected_to", "Roger Moore portrayed Bond.", 0.97, 0.94);

rel("dr-no", "james-bond", "part_of", "Dr. No begins the Eon film series.", 0.99, 0.97);
rel("casino-royale", "james-bond", "part_of", "Casino Royale is foundational Bond.", 0.99, 0.97);
rel("goldfinger-film", "james-bond", "part_of", "Goldfinger is a classic Bond film.", 0.98, 0.95);
rel("skyfall", "james-bond", "part_of", "Skyfall is a major Craig-era Bond film.", 0.98, 0.95);
rel("from-russia-with-love", "james-bond", "part_of", "From Russia with Love is an early Bond film.", 0.97, 0.94);
rel("no-time-to-die", "james-bond", "part_of", "No Time to Die closes Craig's Bond era.", 0.97, 0.94);
rel("thunderball", "james-bond", "part_of", "Thunderball is a SPECTRE Bond film.", 0.96, 0.92);
rel("sean-connery", "dr-no", "involved", "Connery stars in Dr. No.", 0.98, 0.95);
rel("daniel-craig", "casino-royale", "involved", "Craig debuts as Bond in Casino Royale.", 0.98, 0.95);
rel("daniel-craig", "skyfall", "involved", "Craig stars in Skyfall.", 0.97, 0.94);
rel("aston-martin", "bond-007", "uses", "Bond drives Aston Martins.", 0.98, 0.95);
rel("walther-ppk", "bond-007", "uses", "Bond carries a Walther PPK.", 0.97, 0.93);
rel("licence-to-kill", "double-o", "part_of", "A licence to kill defines 00 status.", 0.97, 0.94);
rel("bond-theme", "james-bond", "connected_to", "The Bond Theme identifies the franchise.", 0.96, 0.92);
rel("spectre", "thunderball", "involved", "SPECTRE drives Thunderball's plot.", 0.95, 0.9);

module.exports = { entities, relationships };
