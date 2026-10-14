/*
 * Hamilton subject data — Miranda's musical, the Schuyler sisters, and the Cabinet Battles.
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

/* ---------- Root / creators / works ---------- */

entity(
    "hamilton",
    "Hamilton",
    "topic",
    "Lin-Manuel Miranda's musical of Hamilton, Burr, the Schuyler sisters, and the Cabinet Battles.",
    "Hamilton is the hip-hop history musical Lin-Manuel Miranda built from Ron Chernow's biography: Alexander Hamilton and Aaron Burr as paired narrators, Eliza and Angelica as the Schuyler sisters, Washington's cabinet as rap battles, and a Broadway run at the Richard Rodgers Theatre.",
    "documented"
);

entity(
    "lin-manuel-miranda",
    "Lin-Manuel Miranda",
    "person",
    "Composer, lyricist, and original Hamilton who wrote the score from Chernow.",
    "Lin-Manuel Miranda wrote the book, music, and lyrics of Hamilton, originated the title role Off-Broadway and on Broadway, and turned Chernow's Alexander Hamilton into a sung-through cabinet and duel.",
    "documented"
);

entity(
    "ron-chernow",
    "Ron Chernow",
    "person",
    "Biographer whose Alexander Hamilton book is the musical's source.",
    "Ron Chernow wrote the 2004 biography Alexander Hamilton that Miranda read on vacation and adapted into Hamilton, remaining the credited historical spine of the show.",
    "documented"
);

entity(
    "thomas-kail",
    "Thomas Kail",
    "person",
    "Director who staged Hamilton at the Public and the Richard Rodgers.",
    "Thomas Kail directed Hamilton from the Vassar workshop through the Public Theater and the Broadway opening, shaping the turntable staging and the cabinet-as-battle grammar.",
    "documented"
);

entity(
    "alexander-hamilton-biography",
    "Alexander Hamilton (Chernow)",
    "work",
    "Chernow's 2004 biography that Miranda adapted into the musical.",
    "Alexander Hamilton is Ron Chernow's biography of the Treasury secretary, the source book Miranda carried into Hamilton and the work the musical is officially adapted from.",
    "documented"
);

entity(
    "hamilton-the-musical",
    "Hamilton (musical)",
    "work",
    "2015 musical that opened at the Public and then the Richard Rodgers Theatre.",
    "Hamilton the musical is Miranda, Kail, and company's sung-through piece: Off-Broadway at the Public Theater in 2015, then Broadway at the Richard Rodgers, Tony-winning, later filmed for Disney+.",
    "documented"
);

entity(
    "hamilton-mixtape",
    "The Hamilton Mixtape",
    "work",
    "2016 album of covers and leftovers that extended the show offstage.",
    "The Hamilton Mixtape is the Atlantic Records album of outside artists covering Hamilton songs, plus cut material, that kept the score in pop rotation after the Broadway opening.",
    "documented"
);

entity(
    "the-public-theater",
    "The Public Theater",
    "place",
    "Downtown house where Hamilton premiered before Broadway.",
    "The Public Theater on Lafayette Street is where Hamilton opened Off-Broadway in February 2015, the downtown workshop stage before the Richard Rodgers transfer.",
    "documented"
);

entity(
    "richard-rodgers-theatre",
    "Richard Rodgers Theatre",
    "place",
    "Broadway house of Hamilton's New York run.",
    "The Richard Rodgers Theatre on 46th Street is the Nederlander house where Hamilton opened in August 2015 and became the musical's canonical Broadway address.",
    "documented"
);

/* ---------- Characters ---------- */

entity(
    "alexander-hamilton",
    "Alexander Hamilton",
    "person",
    "Title immigrant, Treasury secretary, and Miranda's original role.",
    "Alexander Hamilton is the orphan from Nevis who writes his way into Washington's war, the Federalist Papers, and the first Cabinet, then dies in the duel with Aaron Burr that the musical treats as its ending."
);

entity(
    "aaron-burr",
    "Aaron Burr",
    "person",
    "Narrator, rival, and the man who waits — then shoots Hamilton.",
    "Aaron Burr is Hamilton's foil and the show's storyteller: the man who waits, loses the Cabinet and the presidency, and fires the shot at Weehawken that the opening number already promised."
);

entity(
    "george-washington",
    "George Washington",
    "person",
    "General and president who fathers Hamilton in the war and the Cabinet.",
    "George Washington is the commander who makes Hamilton his aide, later the president who runs the Cabinet Battles, and the father figure who sings Hamilton down from the field."
);

entity(
    "schuyler-sisters",
    "the Schuyler sisters",
    "organization",
    "Angelica, Eliza, and Peggy — the Albany sisters who rewrite Hamilton's private life.",
    "The Schuyler sisters are Angelica, Eliza, and Peggy Schuyler, the trio who greet New York in 'The Schuyler Sisters' and then split Hamilton's heart between Eliza's marriage and Angelica's matching mind."
);

entity(
    "eliza-schuyler",
    "Eliza Schuyler Hamilton",
    "person",
    "Wife who burns the letters, survives Hamilton, and asks who tells his story.",
    "Eliza Schuyler is the sister who marries Hamilton, bears Philip, burns the correspondence after the Reynolds pamphlet, and closes the musical by outliving everyone and founding the orphan story."
);

entity(
    "angelica-schuyler",
    "Angelica Schuyler Church",
    "person",
    "Wit who matches Hamilton's mind and cedes him to Eliza.",
    "Angelica Schuyler is the eldest sister who trades verses with Hamilton, reads him at speed, and steps back so Eliza can marry him — the intellectual pairing the show will not let rest."
);

entity(
    "peggy-schuyler",
    "Peggy Schuyler",
    "person",
    "Youngest Schuyler sister in the New York greeting trio.",
    "Peggy Schuyler is the third sister in 'The Schuyler Sisters,' the lighter voice of the Albany trio who then recedes as Eliza and Angelica take the plot."
);

entity(
    "king-george",
    "King George III",
    "person",
    "Comic monarch who pops in to remind the revolution it still has a king.",
    "King George III is the British monarch of the musical's asides, a golden-coated commentator who sings the colonies a breakup song and later watches the Cabinet from across the ocean."
);

entity(
    "thomas-jefferson",
    "Thomas Jefferson",
    "person",
    "Secretary of State who spars with Hamilton in the Cabinet Battles.",
    "Thomas Jefferson returns from France as the show's second-act foil, a Democratic-Republican in purple who faces Hamilton across Washington's Cabinet Battle desks."
);

entity(
    "james-madison",
    "James Madison",
    "person",
    "Jefferson's ally who helps write Hamilton out of the Cabinet.",
    "James Madison is Jefferson's quieter partner, the co-author of opposition who later helps steer the Reynolds scandal and the election that strands Burr."
);

entity(
    "marquis-de-lafayette",
    "Marquis de Lafayette",
    "person",
    "French officer of the war quartet who then goes home to his own revolution.",
    "Lafayette is the French aristocrat in Hamilton's wartime friend group — with Laurens, Mulligan, and Hamilton — who ships home after Yorktown to fight another revolution."
);

entity(
    "hercules-mulligan",
    "Hercules Mulligan",
    "person",
    "Tailor-spy of the war quartet who stays in the city.",
    "Hercules Mulligan is the tailor and spy in Hamilton's young quartet, the man who stays in New York gathering intelligence while Lafayette and Laurens take the field."
);

entity(
    "john-laurens",
    "John Laurens",
    "person",
    "Abolitionist friend who dies in the war before Hamilton's later rise.",
    "John Laurens is Hamilton's closest wartime friend, the officer who wants to arm Black battalions, and the ghost the second act cannot bring back."
);

entity(
    "philip-hamilton",
    "Philip Hamilton",
    "person",
    "Son who duels to defend his father's name and dies first.",
    "Philip Hamilton is Eliza and Alexander's son, taught the ten duel commandments, who fires too high and dies — the private cost the public man pays before Weehawken."
);

/* ---------- Songs / events as works ---------- */

entity(
    "cabinet-battle",
    "Cabinet Battle",
    "work",
    "Rap-debate songs in which Hamilton and Jefferson argue policy before Washington.",
    "Cabinet Battle is the pair of songs that turn Washington's Cabinet into a rap battle: assumption and the debt in the first, France and neutrality in the second, Jefferson versus Hamilton at the desks.",
    "documented"
);

entity(
    "my-shot",
    "My Shot",
    "work",
    "Hamilton's I-want song with Laurens, Lafayette, and Mulligan.",
    "My Shot is the early number in which Hamilton, Laurens, Lafayette, and Mulligan swear they are not throwing away their shot — the thesis song of the first act.",
    "documented"
);

entity(
    "the-room-where-it-happens",
    "The Room Where It Happens",
    "work",
    "Burr's number about the dinner-table Compromise of 1790.",
    "The Room Where It Happens is Aaron Burr's second-act showpiece: the dinner at which Hamilton, Jefferson, and Madison trade the capital for assumption, and Burr is left outside the door.",
    "documented"
);

entity(
    "yorktown",
    "Yorktown (The World Turned Upside Down)",
    "work",
    "Siege number that ends the war act with Lafayette and Hamilton.",
    "Yorktown is the battle song that closes the Revolution half of Hamilton: Lafayette and Hamilton take the redoubt, Cornwallis surrenders, and King George returns to ask what comes next.",
    "documented"
);

entity(
    "ten-duel-commandments",
    "Ten Duel Commandments",
    "work",
    "Rule-book number that teaches the code Philip and Hamilton later use.",
    "Ten Duel Commandments is the instructional song that lays out the paces, the seconds, and the firing rules the show will spend twice — once for Philip, once for Hamilton and Burr.",
    "documented"
);

entity(
    "leslie-odom-jr",
    "Leslie Odom Jr.",
    "person",
    "Original Broadway Aaron Burr, Tony winner for the role.",
    "Leslie Odom Jr. originated Aaron Burr on Broadway, won the Tony for the part, and made 'The Room Where It Happens' the second-act showstopper opposite Miranda's Hamilton.",
    "documented"
);

entity(
    "daveed-diggs",
    "Daveed Diggs",
    "person",
    "Original Lafayette and Jefferson, the dual-role whirlwind of both acts.",
    "Daveed Diggs originated Marquis de Lafayette in act one and Thomas Jefferson in act two, a double that won him a Tony and set the show's French-to-Cabinet pivot.",
    "documented"
);

entity(
    "phillipa-soo",
    "Phillipa Soo",
    "person",
    "Original Eliza Schuyler, the voice that closes Who Lives, Who Dies, Who Tells Your Story.",
    "Phillipa Soo originated Eliza Schuyler at the Public and on Broadway, the performer who holds the final breath of the musical after Hamilton is gone.",
    "documented"
);

/* ---------- Relationships ---------- */

rel("lin-manuel-miranda", "hamilton-the-musical", "created", "Lin-Manuel Miranda wrote the book, music, and lyrics of Hamilton.", 0.99, 0.99);
rel("lin-manuel-miranda", "hamilton", "created", "Lin-Manuel Miranda is the author-star at the center of Hamilton.", 0.98, 0.97);
rel("ron-chernow", "alexander-hamilton-biography", "created", "Ron Chernow wrote the biography Alexander Hamilton.", 0.98, 0.96);
rel("hamilton-the-musical", "alexander-hamilton-biography", "adapted_from", "Hamilton the musical is adapted from Ron Chernow's biography.", 0.98, 0.97);
rel("alexander-hamilton-biography", "hamilton-the-musical", "adapted_into", "Chernow's Alexander Hamilton was adapted into the musical.", 0.97, 0.95);
rel("thomas-kail", "hamilton-the-musical", "produced", "Thomas Kail directed Hamilton from the Public to Broadway.", 0.97, 0.94);
rel("hamilton-the-musical", "hamilton", "part_of", "Hamilton the musical is the central work of this subject.", 0.99, 0.98);
rel("hamilton-mixtape", "hamilton-the-musical", "adapted_from", "The Hamilton Mixtape covers and extends songs from the musical.", 0.94, 0.9);

rel("hamilton-the-musical", "the-public-theater", "occurred_at", "Hamilton premiered Off-Broadway at the Public Theater.", 0.97, 0.95);
rel("hamilton-the-musical", "richard-rodgers-theatre", "occurred_at", "Hamilton's Broadway run is at the Richard Rodgers Theatre.", 0.98, 0.96);
rel("the-public-theater", "richard-rodgers-theatre", "preceded", "The Public Theater run came before the Richard Rodgers transfer.", 0.95, 0.92);

rel("lin-manuel-miranda", "alexander-hamilton", "involved", "Miranda originated Alexander Hamilton on stage.", 0.98, 0.96);
rel("leslie-odom-jr", "aaron-burr", "involved", "Leslie Odom Jr. originated Aaron Burr on Broadway.", 0.97, 0.95);
rel("daveed-diggs", "marquis-de-lafayette", "involved", "Daveed Diggs originated Lafayette in the first act.", 0.96, 0.93);
rel("daveed-diggs", "thomas-jefferson", "involved", "Daveed Diggs originated Jefferson in the second act.", 0.96, 0.93);
rel("phillipa-soo", "eliza-schuyler", "involved", "Phillipa Soo originated Eliza Schuyler.", 0.97, 0.94);

rel("alexander-hamilton", "hamilton-the-musical", "involved", "Alexander Hamilton is the title figure of the musical.", 0.99, 0.97);
rel("aaron-burr", "hamilton-the-musical", "involved", "Aaron Burr narrates Hamilton and fires the last shot.", 0.98, 0.96);
rel("aaron-burr", "alexander-hamilton", "opposed_by", "Burr's rivalry with Hamilton ends in the Weehawken duel.", 0.97, 0.95);
rel("george-washington", "alexander-hamilton", "leads", "Washington makes Hamilton his aide and later his Treasury secretary.", 0.96, 0.93);
rel("george-washington", "hamilton-the-musical", "involved", "George Washington is the general and president of the musical.", 0.95, 0.92);

rel("eliza-schuyler", "schuyler-sisters", "member_of", "Eliza is the sister who marries Hamilton.", 0.98, 0.96);
rel("angelica-schuyler", "schuyler-sisters", "member_of", "Angelica is the sister who matches Hamilton's mind.", 0.98, 0.96);
rel("peggy-schuyler", "schuyler-sisters", "member_of", "Peggy is the third Schuyler sister in the greeting trio.", 0.96, 0.93);
rel("schuyler-sisters", "hamilton-the-musical", "part_of", "The Schuyler sisters are the family trio at the center of Hamilton's private plot.", 0.97, 0.95);
rel("eliza-schuyler", "alexander-hamilton", "connected_to", "Eliza marries Hamilton and outlives him to tell the story.", 0.97, 0.95);
rel("angelica-schuyler", "alexander-hamilton", "connected_to", "Angelica trades verses with Hamilton and cedes him to Eliza.", 0.96, 0.93);
rel("philip-hamilton", "eliza-schuyler", "connected_to", "Philip is Eliza and Alexander's son.", 0.96, 0.93);
rel("philip-hamilton", "alexander-hamilton", "connected_to", "Philip dies in a duel defending his father's name.", 0.95, 0.92);

rel("king-george", "hamilton-the-musical", "involved", "King George III is the comic monarch of Hamilton's asides.", 0.94, 0.9);
rel("thomas-jefferson", "cabinet-battle", "involved", "Jefferson faces Hamilton across the Cabinet Battle desks.", 0.96, 0.93);
rel("alexander-hamilton", "cabinet-battle", "involved", "Hamilton argues assumption and neutrality in the Cabinet Battles.", 0.96, 0.93);
rel("james-madison", "thomas-jefferson", "supports", "Madison stands with Jefferson against Hamilton's Treasury.", 0.95, 0.91);
rel("cabinet-battle", "hamilton-the-musical", "part_of", "The Cabinet Battles are set-piece songs inside Hamilton.", 0.97, 0.94);
rel("george-washington", "cabinet-battle", "leads", "Washington referees the Cabinet Battles.", 0.95, 0.92);

rel("my-shot", "hamilton-the-musical", "part_of", "My Shot is Hamilton's first-act I-want song.", 0.96, 0.93);
rel("alexander-hamilton", "my-shot", "involved", "Hamilton leads My Shot with Laurens, Lafayette, and Mulligan.", 0.96, 0.93);
rel("john-laurens", "my-shot", "involved", "John Laurens stands in the My Shot quartet.", 0.94, 0.9);
rel("marquis-de-lafayette", "my-shot", "involved", "Lafayette stands in the My Shot quartet.", 0.94, 0.9);
rel("hercules-mulligan", "my-shot", "involved", "Hercules Mulligan stands in the My Shot quartet.", 0.94, 0.9);
rel("the-room-where-it-happens", "hamilton-the-musical", "part_of", "The Room Where It Happens is Burr's second-act showpiece.", 0.96, 0.93);
rel("aaron-burr", "the-room-where-it-happens", "involved", "Burr sings The Room Where It Happens from outside the bargain.", 0.97, 0.94);
rel("yorktown", "hamilton-the-musical", "part_of", "Yorktown closes the Revolution half of Hamilton.", 0.95, 0.92);
rel("marquis-de-lafayette", "yorktown", "involved", "Lafayette takes the Yorktown redoubt beside Hamilton.", 0.94, 0.9);
rel("ten-duel-commandments", "hamilton-the-musical", "part_of", "Ten Duel Commandments teaches the code the later duels use.", 0.95, 0.91);
rel("philip-hamilton", "ten-duel-commandments", "uses", "Philip follows the Ten Duel Commandments and dies by them.", 0.94, 0.9);
rel("john-laurens", "alexander-hamilton", "supports", "Laurens is Hamilton's closest friend in the war quartet.", 0.94, 0.9);

module.exports = { entities, relationships };
