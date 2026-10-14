/*
 * Halloween subject data — Carpenter's Haddonfield slasher and its long aftermath.
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
    "halloween-franchise",
    "Halloween",
    "topic",
    "Michael Myers and Haddonfield — the slasher calendar's most durable myth.",
    "Halloween is the slasher cycle that begins with John Carpenter's 1978 film: Michael Myers escapes, walks Haddonfield on October 31, and is met by Laurie Strode and Dr. Loomis. Later films, reboots, and the 2018–2022 trilogy keep returning to that night and its survivors."
);

entity(
    "john-carpenter",
    "John Carpenter",
    "person",
    "Director and composer of Halloween (1978).",
    "John Carpenter directed, co-wrote, and scored Halloween (1978), establishing the Shape, the piano-theme stinger, and the suburban-stalker grammar later slashers copied.",
    "documented"
);

entity(
    "debra-hill",
    "Debra Hill",
    "person",
    "Co-writer and producer of the original Halloween.",
    "Debra Hill co-wrote Halloween with Carpenter, produced the film, and helped shape Laurie Strode and the Haddonfield teenager circle.",
    "documented"
);

entity(
    "jamie-lee-curtis",
    "Jamie Lee Curtis",
    "person",
    "Actress who originated Laurie Strode.",
    "Jamie Lee Curtis became a scream-queen figure as Laurie Strode in 1978 and returned for later sequels, H20, and the 2018–2022 trilogy.",
    "documented"
);

entity(
    "donald-pleasence",
    "Donald Pleasence",
    "person",
    "Actor who played Dr. Sam Loomis across early sequels.",
    "Donald Pleasence played Dr. Loomis as the psychiatrist who names Michael evil and hunts him through Haddonfield.",
    "documented"
);

entity(
    "nick-castle",
    "Nick Castle",
    "person",
    "Actor who first wore the Shape's mask in 1978.",
    "Nick Castle performed Michael Myers as the Shape in Halloween (1978), giving the walk and head-tilt that later players imitated.",
    "documented"
);

/* ---------- Works ---------- */

entity(
    "halloween-1978",
    "Halloween (1978)",
    "work",
    "Carpenter's original — The Night He Came Home.",
    "Halloween (1978) follows Michael Myers's escape from Smith's Grove and his Halloween-night hunt through Haddonfield, opposed by Laurie Strode and Dr. Loomis.",
    "documented"
);

entity(
    "halloween-ii",
    "Halloween II",
    "work",
    "1981 hospital sequel that continues the same night.",
    "Halloween II picks up after the 1978 climax, moving the hunt to Haddonfield Memorial Hospital and adding the Myers–Strode bloodline twist.",
    "documented"
);

entity(
    "halloween-2018",
    "Halloween (2018)",
    "work",
    "Direct sequel to 1978 that ignores later sequels.",
    "The 2018 Halloween returns Laurie Strode as a fortified survivor confronting Michael forty years later, with Allyson in the next generation.",
    "documented"
);

entity(
    "halloween-ends",
    "Halloween Ends",
    "work",
    "2022 close of the Blumhouse Laurie trilogy.",
    "Halloween Ends concludes the 2018–2022 Laurie Strode cycle in Haddonfield, following the aftermath of Michael's return and a new copycat violence.",
    "documented"
);

/* ---------- Places / groups ---------- */

entity(
    "haddonfield",
    "Haddonfield",
    "place",
    "Illinois town where Michael returns every Halloween myth.",
    "Haddonfield is the Midwestern town of tree-lined streets, the Myers house, and the night Laurie babysits while the Shape walks."
);

entity(
    "myers-house",
    "Myers house",
    "place",
    "Abandoned childhood home on Halloween night.",
    "The Myers house is the boarded childhood home Michael returns to, the first landmark of Haddonfield's curse."
);

entity(
    "smiths-grove-sanitarium",
    "Smith's Grove Sanitarium",
    "place",
    "Institution that held Michael from childhood to escape.",
    "Smith's Grove Sanitarium is where Michael is locked after killing Judith, and where Loomis watches him until the 1978 escape."
);

entity(
    "myers-family",
    "Myers family",
    "organization",
    "Michael, Judith, and the bloodline later films argue over.",
    "The Myers family is the Haddonfield household shattered when six-year-old Michael kills Judith — the origin later sequels expand or erase."
);

entity(
    "strode-family",
    "Strode family",
    "organization",
    "Laurie and the daughters who inherit the hunt.",
    "The Strode family begins with Laurie as the 1978 babysitter-survivor and continues through Karen and Allyson in the later timeline."
);

/* ---------- Characters / concepts ---------- */

entity(
    "michael-myers",
    "Michael Myers",
    "person",
    "The Shape — silent killer who comes home on Halloween.",
    "Michael Myers is the masked figure who murders Judith as a child, escapes Smith's Grove, and stalks Haddonfield with a kitchen knife and almost no speech."
);

entity(
    "the-shape",
    "The Shape",
    "concept",
    "Carpenter's credit for Myers as force more than man.",
    "The Shape is the film's name for Michael as an almost impersonal force — a white mask, coveralls, and a walk that reads as evil without motive."
);

entity(
    "laurie-strode",
    "Laurie Strode",
    "person",
    "Babysitter who survives the night and later fortifies against it.",
    "Laurie Strode is the bookish babysitter who fights Michael in 1978, then returns in later films as a traumatized survivor training for his next coming."
);

entity(
    "dr-sam-loomis",
    "Dr. Sam Loomis",
    "person",
    "Psychiatrist who calls Michael 'purely and simply evil.'",
    "Dr. Sam Loomis is Michael's doctor at Smith's Grove, the one adult who treats him as a force to be stopped rather than a patient to be cured."
);

entity(
    "judith-myers",
    "Judith Myers",
    "person",
    "Michael's older sister, murdered on Halloween 1963.",
    "Judith Myers is Michael's sister, killed in the opening 1963 sequence that starts the franchise's calendar of returns."
);

entity(
    "annie-brackett",
    "Annie Brackett",
    "person",
    "Laurie's friend and Sheriff Brackett's daughter.",
    "Annie Brackett is Laurie's fellow babysitter, wry and unlucky, whose night with Lindsey ends when Michael finds her."
);

entity(
    "lynda-van-der-klok",
    "Lynda Van Der Klok",
    "person",
    "Laurie's outgoing friend killed in the Wallace house.",
    "Lynda Van Der Klok is the loudest of Laurie's friends, killed after the phone-call joke that becomes one of the film's signature shocks."
);

entity(
    "karen-nelson",
    "Karen Nelson",
    "person",
    "Laurie's daughter in the 2018 timeline.",
    "Karen Nelson is Laurie's daughter in the Blumhouse timeline, caught between her mother's fortress mentality and a wish for ordinary life."
);

entity(
    "allyson-nelson",
    "Allyson Nelson",
    "person",
    "Laurie's granddaughter who faces Michael in 2018–2022.",
    "Allyson Nelson is the next Strode generation, pulled into Michael's return and into Laurie's long war with Haddonfield's night."
);

entity(
    "sheriff-leigh-brackett",
    "Sheriff Leigh Brackett",
    "person",
    "Haddonfield sheriff and Annie's father.",
    "Sheriff Leigh Brackett is the local law who underestimates the night until Loomis and the bodies force the town awake."
);

entity(
    "tommy-doyle",
    "Tommy Doyle",
    "person",
    "Boy Laurie babysits on Halloween night.",
    "Tommy Doyle is the child Laurie watches, primed by local bogeyman talk and the first to sense the Shape outside the house."
);

entity(
    "kitchen-knife",
    "Kitchen knife",
    "object",
    "Michael's chosen weapon from Judith's house onward.",
    "The kitchen knife is Michael's recurring weapon, taken from domestic rooms and carried through Haddonfield as the Shape's simplest tool."
);

entity(
    "the-mask",
    "The mask",
    "object",
    "Blank William Shatner captain face that became the Shape.",
    "The mask is a painted Captain Kirk face, emptied of expression, that turns Michael into the Shape rather than a readable man."
);

entity(
    "the-night-he-came-home",
    "The Night He Came Home",
    "event",
    "Tagline-night: October 31, 1978 in Haddonfield.",
    "The Night He Came Home is the 1978 Halloween when Michael walks from Smith's Grove to Haddonfield and the Strode babysitting jobs collide with him."
);

/* ---------- Relationships ---------- */

rel("john-carpenter", "halloween-franchise", "created", "John Carpenter created Halloween as director, co-writer, and composer.", 0.99, 0.99);
rel("john-carpenter", "halloween-1978", "created", "Carpenter directed and scored Halloween (1978).", 0.99, 0.98);
rel("debra-hill", "halloween-1978", "created", "Debra Hill co-wrote and produced Halloween (1978).", 0.98, 0.96);
rel("debra-hill", "halloween-franchise", "produced", "Hill produced the original Halloween and helped launch the cycle.", 0.96, 0.93);
rel("jamie-lee-curtis", "laurie-strode", "involved", "Jamie Lee Curtis originated and returned as Laurie Strode.", 0.99, 0.97);
rel("donald-pleasence", "dr-sam-loomis", "involved", "Donald Pleasence played Dr. Loomis across the early films.", 0.98, 0.96);
rel("nick-castle", "the-shape", "involved", "Nick Castle first embodied the Shape on screen.", 0.97, 0.94);

rel("halloween-1978", "halloween-franchise", "part_of", "Halloween (1978) is the film that starts the franchise.", 0.99, 0.98);
rel("halloween-ii", "halloween-franchise", "part_of", "Halloween II continues the original night into the hospital.", 0.97, 0.94);
rel("halloween-2018", "halloween-franchise", "part_of", "Halloween (2018) is a direct sequel to 1978.", 0.97, 0.94);
rel("halloween-ends", "halloween-franchise", "part_of", "Halloween Ends closes the 2018 Laurie trilogy.", 0.96, 0.93);
rel("halloween-1978", "halloween-ii", "followed", "Halloween II picks up the same night as the 1978 film.", 0.97, 0.94);
rel("halloween-ii", "halloween-1978", "preceded", "Halloween II is preceded by the 1978 original.", 0.97, 0.94);
rel("halloween-2018", "halloween-ends", "followed", "The 2018 film leads into the trilogy that Ends closes.", 0.94, 0.9);

rel("halloween-1978", "michael-myers", "involved", "Halloween (1978) is the night Michael comes home.", 0.99, 0.97);
rel("halloween-1978", "laurie-strode", "involved", "The 1978 film is Laurie's first fight with the Shape.", 0.99, 0.97);
rel("halloween-1978", "dr-sam-loomis", "involved", "Loomis hunts Michael through the 1978 film.", 0.98, 0.96);
rel("halloween-2018", "laurie-strode", "involved", "The 2018 film recenters Laurie as a prepared survivor.", 0.97, 0.94);
rel("halloween-2018", "allyson-nelson", "involved", "Allyson is pulled into Michael's 2018 return.", 0.95, 0.92);
rel("halloween-ends", "laurie-strode", "involved", "Halloween Ends finishes Laurie's late war with Michael.", 0.95, 0.91);

rel("michael-myers", "myers-family", "member_of", "Michael is the Myers child who becomes the Shape.", 0.99, 0.97);
rel("judith-myers", "myers-family", "member_of", "Judith is Michael's sister and first victim.", 0.98, 0.96);
rel("laurie-strode", "strode-family", "member_of", "Laurie is the Strode survivor at the center of the cycle.", 0.99, 0.97);
rel("karen-nelson", "strode-family", "member_of", "Karen is Laurie's daughter in the 2018 timeline.", 0.96, 0.93);
rel("allyson-nelson", "strode-family", "member_of", "Allyson is Laurie's granddaughter in that same line.", 0.96, 0.93);
rel("michael-myers", "the-shape", "connected_to", "Michael is billed and remembered as the Shape.", 0.99, 0.97);
rel("michael-myers", "kitchen-knife", "uses", "Michael kills with a kitchen knife taken from ordinary rooms.", 0.97, 0.94);
rel("michael-myers", "the-mask", "uses", "Michael wears the blank mask that makes him the Shape.", 0.98, 0.96);
rel("dr-sam-loomis", "michael-myers", "opposed_by", "Loomis spends the night trying to stop Michael.", 0.98, 0.96);
rel("laurie-strode", "michael-myers", "opposed_by", "Laurie is the first babysitter who fights Michael and lives.", 0.99, 0.97);

rel("the-night-he-came-home", "haddonfield", "occurred_at", "The Night He Came Home happens in Haddonfield.", 0.98, 0.96);
rel("the-night-he-came-home", "halloween-1978", "connected_to", "The tagline names the night of the 1978 film.", 0.97, 0.94);
rel("michael-myers", "haddonfield", "located_in", "Michael returns to walk Haddonfield.", 0.97, 0.94);
rel("myers-house", "haddonfield", "located_in", "The Myers house stands in Haddonfield.", 0.97, 0.94);
rel("myers-family", "myers-house", "located_in", "The Myers family lived in the house Michael comes back to.", 0.95, 0.91);
rel("strode-family", "haddonfield", "located_in", "The Strodes are a Haddonfield family.", 0.95, 0.91);
rel("annie-brackett", "haddonfield", "located_in", "Annie babysits in Haddonfield on Halloween night.", 0.94, 0.9);
rel("tommy-doyle", "laurie-strode", "supports", "Tommy is the child Laurie protects that night.", 0.95, 0.91);
rel("sheriff-leigh-brackett", "annie-brackett", "supports", "Sheriff Brackett is Annie's father and Haddonfield's law.", 0.94, 0.9);
rel("dr-sam-loomis", "smiths-grove-sanitarium", "located_in", "Loomis watched Michael for years at Smith's Grove.", 0.96, 0.93);
rel("michael-myers", "smiths-grove-sanitarium", "located_in", "Michael was held at Smith's Grove until the 1978 escape.", 0.97, 0.94);
rel("lynda-van-der-klok", "laurie-strode", "connected_to", "Lynda is one of Laurie's friends killed that night.", 0.94, 0.9);
rel("john-carpenter", "the-shape", "created", "Carpenter designed Michael as the Shape rather than a talkative killer.", 0.96, 0.93);
rel("halloween-1978", "haddonfield", "occurred_at", "The 1978 film is set on Halloween night in Haddonfield.", 0.98, 0.96);

module.exports = { entities, relationships };
