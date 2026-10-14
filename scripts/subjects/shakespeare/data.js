/*
 * Shakespeare subject data — the author, the plays, and the casts nested under each work.
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

/* ---------- Root / author / places ---------- */

entity(
    "shakespeare",
    "Shakespeare",
    "topic",
    "William Shakespeare's plays, the Globe, the First Folio, and the casts inside Hamlet, Macbeth, and the rest.",
    "Shakespeare is the subject of the Stratford playwright, the Lord Chamberlain's Men, the Globe and Blackfriars, the 1623 First Folio, and the tragedies and comedies whose characters — Hamlet, Lady Macbeth, Romeo and Juliet, Prospero — still tour every season."
);

entity(
    "william-shakespeare",
    "William Shakespeare",
    "person",
    "Stratford actor and playwright of Hamlet, Macbeth, and the sonnets.",
    "William Shakespeare was the Warwickshire-born actor-shareholder who wrote for the Lord Chamberlain's Men and, later, the King's Men: Hamlet, Macbeth, Romeo and Juliet, The Tempest, the histories, and a book of sonnets."
);

entity(
    "anne-hathaway",
    "Anne Hathaway",
    "person",
    "Shakespeare's wife, married in Stratford upon Avon.",
    "Anne Hathaway of Shottery married William Shakespeare in 1582 and kept a household in Stratford while he worked the London stages and the Globe."
);

entity(
    "ben-jonson",
    "Ben Jonson",
    "person",
    "Rival poet who prefaced the First Folio and called Shakespeare not of an age.",
    "Ben Jonson was the playwright and critic who competed with Shakespeare on the London stage and wrote the Folio preface that fixed him as a national poet."
);

entity(
    "stratford-upon-avon",
    "Stratford-upon-Avon",
    "place",
    "Warwickshire market town of Shakespeare's birth and retirement.",
    "Stratford-upon-Avon is the town of Shakespeare's baptism, marriage to Anne Hathaway, property, and burial in Holy Trinity — the home pole opposite the Globe's London."
);

entity(
    "globe-theatre",
    "Globe Theatre",
    "place",
    "Bankside polygonal playhouse the Chamberlain's Men built in 1599.",
    "The Globe Theatre was the open-air house the Lord Chamberlain's Men raised on Bankside from the timbers of the Theatre, the stage of Hamlet, Henry V, and much of Shakespeare's mature work."
);

entity(
    "blackfriars-theatre",
    "Blackfriars Theatre",
    "place",
    "Indoor hall playhouse the King's Men used for winter and candlelit shows.",
    "The Blackfriars Theatre was the company's enclosed hall stage, a candlelit room that suited late romances such as The Tempest better than the Globe's yard."
);

entity(
    "lord-chamberlains-men",
    "Lord Chamberlain's Men",
    "organization",
    "Playing company Shakespeare wrote for and later held shares in.",
    "The Lord Chamberlain's Men were the troupe under the Lord Chamberlain that employed Shakespeare as actor and principal playwright, then rebuilt as the King's Men when James I took the patronage."
);

entity(
    "kings-men",
    "King's Men",
    "organization",
    "Royal company the Chamberlain's Men became under James I.",
    "The King's Men are the same fellowship after 1603: Shakespeare, Burbage, and the Globe and Blackfriars houses, now wearing the king's livery."
);

entity(
    "first-folio",
    "First Folio",
    "work",
    "1623 collected plays that saved Macbeth, The Tempest, and eighteen others.",
    "Mr. William Shakespeares Comedies, Histories, & Tragedies — the First Folio — is the 1623 volume Heminges and Condell printed, with a Jonson preface, that first gathered thirty-six plays and kept half of them from vanishing."
);

entity(
    "sonnets",
    "Shakespeare's Sonnets",
    "work",
    "1609 quarto of 154 sonnets to the fair youth and dark lady.",
    "Shakespeare's Sonnets is the 1609 sequence of 154 poems that sits beside the plays as the author's other canonical book, addressed to a fair youth, a rival poet, and a dark lady."
);

entity(
    "shakespearean-tragedy",
    "Shakespearean tragedy",
    "concept",
    "The pattern of Hamlet, Macbeth, King Lear, and Othello: a fall that takes a state with it.",
    "Shakespearean tragedy is the late-Elizabethan and Jacobean form in which a prince, thane, king, or general — Hamlet, Macbeth, Lear, Othello — destroys a household or a kingdom from the inside."
);

/* ---------- Plays (works) and casts nested under each ---------- */

entity(
    "hamlet",
    "Hamlet",
    "work",
    "Revenge tragedy of the prince, the ghost, Claudius, and Ophelia at Elsinore.",
    "Hamlet is the Denmark play: a prince charged by his father's ghost to kill King Claudius, a court that includes Ophelia and Polonius, and the most quoted soliloquies in the Folio."
);

entity(
    "hamlet-prince",
    "Hamlet (prince)",
    "person",
    "Prince of Denmark who delays, feigns madness, and kills Claudius at the last.",
    "Hamlet is the student-prince of the play that bears his name, son of the dead king, nephew of Claudius, and the voice of the 'To be or not to be' soliloquy.",
    "fiction"
);

entity(
    "ophelia",
    "Ophelia",
    "person",
    "Polonius's daughter whose songs and drowning follow Hamlet's rejection.",
    "Ophelia is the court daughter Hamlet loved and then cast off; her mad songs and death by water are the play's second tragedy beside the prince's revenge.",
    "fiction"
);

entity(
    "claudius",
    "Claudius",
    "person",
    "King of Denmark who murdered Hamlet's father and married Gertrude.",
    "Claudius is the usurping king of Hamlet, the target of the ghost's charge and of the play-within-the-play that catches his conscience.",
    "fiction"
);

entity(
    "macbeth",
    "Macbeth",
    "work",
    "Scottish tragedy of the thane, the witches, and Lady Macbeth.",
    "Macbeth is the shortest Folio tragedy: a thane who kills a king after the weird sisters prophesy, a wife who washes imagined blood, and a Scotland that answers with Birnam Wood."
);

entity(
    "macbeth-thane",
    "Macbeth (thane)",
    "person",
    "Thane of Glamis and Cawdor who murders Duncan to take the crown.",
    "Macbeth is the soldier-thane whose ambition, the witches' speech, and Lady Macbeth's urging turn a loyal subject into the tyrant Macduff finally kills.",
    "fiction"
);

entity(
    "lady-macbeth",
    "Lady Macbeth",
    "person",
    "Macbeth's wife who goads the murder and later sleepwalks with a stain.",
    "Lady Macbeth is the partner who calls on spirits to unsex her, plans Duncan's death, and then walks the castle at night trying to wash a spot that will not leave.",
    "fiction"
);

entity(
    "romeo-and-juliet",
    "Romeo and Juliet",
    "work",
    "Verona tragedy of the Montague and Capulet lovers.",
    "Romeo and Juliet is the young-lovers play: a street feud, a balcony, Mercutio's death, and the tomb that ends both houses' children."
);

entity(
    "romeo",
    "Romeo",
    "person",
    "Montague who loves Juliet and dies beside her in the Capulet tomb.",
    "Romeo is the Montague youth who leaves Rosaline for Juliet, kills Tybalt after Mercutio dies, and drinks poison when he thinks Juliet is dead.",
    "fiction"
);

entity(
    "juliet",
    "Juliet",
    "person",
    "Capulet who loves Romeo and wakes to find him dead.",
    "Juliet is the Capulet daughter whose balcony scene, secret marriage, and dagger in the tomb make her the other half of the play's title.",
    "fiction"
);

entity(
    "mercutio",
    "Mercutio",
    "person",
    "Romeo's friend whose Queen Mab speech and death turn the play.",
    "Mercutio is the kinsman of the Prince who mocks Romeo's love, speaks the Queen Mab fantasy, and dies cursing both houses after Tybalt's thrust.",
    "fiction"
);

entity(
    "the-tempest",
    "The Tempest",
    "work",
    "Late romance of Prospero, Miranda, Ariel, and an island storm.",
    "The Tempest is the island play: Prospero raises a storm, rules by book and spirit, frees Ariel, and breaks his staff in a plot many readers take as Shakespeare's farewell to the stage."
);

entity(
    "prospero",
    "Prospero",
    "person",
    "Exiled Duke of Milan who rules the island by magic and then drowns his book.",
    "Prospero is the magician-duke of The Tempest, father of Miranda, master of Ariel and Caliban, who uses the storm to recover his dukedom and then abjures the art.",
    "fiction"
);

entity(
    "ariel",
    "Ariel",
    "person",
    "Airy spirit who serves Prospero and earns freedom at the play's end.",
    "Ariel is the spirit Prospero freed from a tree and bound to service: the agent of the tempest, the harpies, and the songs, released when the duke drowns his book.",
    "fiction"
);

entity(
    "king-lear",
    "King Lear",
    "work",
    "Tragedy of the king who divides a kingdom and walks into the storm.",
    "King Lear is the abdication play: a king who asks his daughters how much they love him, casts out Cordelia, and goes mad on a heath while the state splits around him."
);

entity(
    "lear",
    "King Lear (character)",
    "person",
    "Aged king who gives away Britain and learns what love was worth.",
    "Lear is the title king who splits his realm between Goneril and Regan, banishes Cordelia, and carries her body in the last scene of the tragedy.",
    "fiction"
);

entity(
    "cordelia",
    "Cordelia",
    "person",
    "Youngest daughter who will not flatter Lear and later dies for him.",
    "Cordelia is the daughter who answers 'Nothing' when Lear demands a speech of love, is cast out, and returns with an army only to die in the play's last movement.",
    "fiction"
);

entity(
    "othello",
    "Othello",
    "work",
    "Tragedy of the Moor of Venice, Desdemona, and Iago's lie.",
    "Othello is the jealousy play: a general who loves Desdemona, a lieutenant who hates him, and a handkerchief that Iago turns into proof."
);

entity(
    "othello-moor",
    "Othello (the Moor)",
    "person",
    "Venetian general who kills Desdemona after Iago poisons his trust.",
    "Othello is the Moor of Venice, the soldier-husband whose dignity Iago unravels until he smothers Desdemona and then learns the lie.",
    "fiction"
);

entity(
    "iago",
    "Iago",
    "person",
    "Ensign who engineers Othello's jealousy with a handkerchief and a hint.",
    "Iago is the ancient who says he hates the Moor, uses Cassio and the handkerchief, and refuses to speak a motive once the plot is open.",
    "fiction"
);

entity(
    "a-midsummer-nights-dream",
    "A Midsummer Night's Dream",
    "work",
    "Athens comedy of lovers, rustics, and Oberon's wood.",
    "A Midsummer Night's Dream is the midsummer comedy: four Athenian lovers lost in a wood, a rude mechanicals' play, and Oberon and Titania's quarrel over a changeling."
);

entity(
    "henry-v",
    "Henry V",
    "work",
    "History play of Agincourt, the once-wild prince now king.",
    "Henry V is the Agincourt history: the king who once was Hal, the Crispin's Day speech, and a Chorus that asks the Globe's yard to stand for France."
);

/* ---------- Relationships ---------- */

rel("william-shakespeare", "shakespeare", "created", "William Shakespeare is the playwright at the center of this subject.", 0.99, 0.99);
rel("william-shakespeare", "stratford-upon-avon", "located_in", "Shakespeare was born, married, and buried in Stratford-upon-Avon.", 0.98, 0.96);
rel("anne-hathaway", "william-shakespeare", "connected_to", "Anne Hathaway was William Shakespeare's wife.", 0.97, 0.94);
rel("anne-hathaway", "stratford-upon-avon", "located_in", "Anne Hathaway kept the Stratford household.", 0.94, 0.9);
rel("william-shakespeare", "lord-chamberlains-men", "member_of", "Shakespeare wrote for and held shares in the Lord Chamberlain's Men.", 0.98, 0.96);
rel("lord-chamberlains-men", "kings-men", "preceded", "The Lord Chamberlain's Men became the King's Men under James I.", 0.97, 0.95);
rel("william-shakespeare", "kings-men", "member_of", "Shakespeare remained a King's Man after the royal patent.", 0.96, 0.93);
rel("lord-chamberlains-men", "globe-theatre", "uses", "The Lord Chamberlain's Men built and played the Globe.", 0.97, 0.95);
rel("kings-men", "blackfriars-theatre", "uses", "The King's Men used Blackfriars as their indoor winter house.", 0.95, 0.92);
rel("globe-theatre", "shakespeare", "part_of", "The Globe is the Bankside house most tied to Shakespeare's working life.", 0.96, 0.93);

rel("william-shakespeare", "hamlet", "created", "William Shakespeare wrote Hamlet.", 0.99, 0.98);
rel("william-shakespeare", "macbeth", "created", "William Shakespeare wrote Macbeth.", 0.99, 0.98);
rel("william-shakespeare", "romeo-and-juliet", "created", "William Shakespeare wrote Romeo and Juliet.", 0.99, 0.98);
rel("william-shakespeare", "the-tempest", "created", "William Shakespeare wrote The Tempest.", 0.98, 0.96);
rel("william-shakespeare", "king-lear", "created", "William Shakespeare wrote King Lear.", 0.98, 0.96);
rel("william-shakespeare", "othello", "created", "William Shakespeare wrote Othello.", 0.98, 0.96);
rel("william-shakespeare", "a-midsummer-nights-dream", "created", "William Shakespeare wrote A Midsummer Night's Dream.", 0.97, 0.95);
rel("william-shakespeare", "henry-v", "created", "William Shakespeare wrote Henry V.", 0.97, 0.95);
rel("william-shakespeare", "sonnets", "created", "William Shakespeare wrote the 1609 sonnet sequence.", 0.97, 0.94);

rel("first-folio", "william-shakespeare", "adapted_from", "The First Folio collects Shakespeare's plays after his death.", 0.98, 0.96);
rel("ben-jonson", "first-folio", "involved", "Ben Jonson wrote the preface that frames the First Folio.", 0.96, 0.93);
rel("first-folio", "macbeth", "contains", "The First Folio is the first printing of Macbeth.", 0.97, 0.94);
rel("first-folio", "the-tempest", "contains", "The First Folio is the first printing of The Tempest.", 0.97, 0.94);
rel("hamlet", "globe-theatre", "occurred_at", "Hamlet was staged at the Globe by Shakespeare's company.", 0.94, 0.9);
rel("henry-v", "globe-theatre", "occurred_at", "Henry V's Chorus asks the Globe's yard to stand for Agincourt.", 0.93, 0.89);
rel("the-tempest", "blackfriars-theatre", "occurred_at", "The Tempest suits the candlelit indoor stage at Blackfriars.", 0.92, 0.88);

rel("hamlet-prince", "hamlet", "part_of", "The prince is the title figure of Hamlet.", 0.99, 0.97);
rel("ophelia", "hamlet", "part_of", "Ophelia is the court daughter whose death follows Hamlet's revenge plot.", 0.97, 0.94);
rel("claudius", "hamlet", "part_of", "Claudius is the usurping king Hamlet is charged to kill.", 0.97, 0.94);
rel("hamlet-prince", "claudius", "opposed_by", "Hamlet's revenge is aimed at King Claudius.", 0.96, 0.93);
rel("hamlet-prince", "ophelia", "connected_to", "Hamlet's rejection of Ophelia precedes her madness and death.", 0.95, 0.91);

rel("macbeth-thane", "macbeth", "part_of", "The thane is the title figure of Macbeth.", 0.99, 0.97);
rel("lady-macbeth", "macbeth", "part_of", "Lady Macbeth is the partner who plans Duncan's murder.", 0.98, 0.96);
rel("lady-macbeth", "macbeth-thane", "supports", "Lady Macbeth goads Macbeth into killing the king.", 0.97, 0.94);

rel("romeo", "romeo-and-juliet", "part_of", "Romeo is the Montague lover of Romeo and Juliet.", 0.99, 0.97);
rel("juliet", "romeo-and-juliet", "part_of", "Juliet is the Capulet lover of Romeo and Juliet.", 0.99, 0.97);
rel("mercutio", "romeo-and-juliet", "part_of", "Mercutio is Romeo's friend whose death turns the comedy toward the tomb.", 0.96, 0.93);
rel("romeo", "juliet", "connected_to", "Romeo and Juliet are the secret married lovers of the play.", 0.98, 0.96);

rel("prospero", "the-tempest", "part_of", "Prospero is the magician-duke of The Tempest.", 0.99, 0.97);
rel("ariel", "the-tempest", "part_of", "Ariel is the spirit who serves Prospero in The Tempest.", 0.97, 0.94);
rel("ariel", "prospero", "supports", "Ariel works the storm and the masques at Prospero's command.", 0.96, 0.93);

rel("lear", "king-lear", "part_of", "Lear is the title king of King Lear.", 0.99, 0.97);
rel("cordelia", "king-lear", "part_of", "Cordelia is the daughter Lear casts out and later mourns.", 0.97, 0.94);
rel("lear", "cordelia", "connected_to", "Lear's demand for love and Cordelia's 'Nothing' open the tragedy.", 0.96, 0.93);

rel("othello-moor", "othello", "part_of", "Othello is the title general of Othello.", 0.99, 0.97);
rel("iago", "othello", "part_of", "Iago is the ensign who engineers the jealousy plot.", 0.98, 0.96);
rel("iago", "othello-moor", "opposed_by", "Iago works to destroy Othello's trust in Desdemona.", 0.97, 0.94);

rel("hamlet", "shakespearean-tragedy", "part_of", "Hamlet is a central Shakespearean tragedy.", 0.96, 0.93);
rel("macbeth", "shakespearean-tragedy", "part_of", "Macbeth is a central Shakespearean tragedy.", 0.96, 0.93);
rel("king-lear", "shakespearean-tragedy", "part_of", "King Lear is a central Shakespearean tragedy.", 0.96, 0.93);
rel("othello", "shakespearean-tragedy", "part_of", "Othello is a central Shakespearean tragedy.", 0.96, 0.93);
rel("romeo-and-juliet", "shakespearean-tragedy", "part_of", "Romeo and Juliet is an early Shakespearean tragedy of the two houses.", 0.94, 0.9);

module.exports = { entities, relationships };
