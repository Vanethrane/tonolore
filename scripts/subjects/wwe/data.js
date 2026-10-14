/*
 * WWE subject data — titles, brands, and decades of sports-entertainment lore.
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

/* ---------- Root / builders ---------- */

entity(
    "wwe",
    "WWE",
    "topic",
    "Sports entertainment's global promotion — titles, brands, and decades of character lore.",
    "WWE is the Stamford-based promotion that grew from the Capitol Wrestling / WWWF lineage into a worldwide television company. Its lore runs through Raw, SmackDown, the PPV calendar, and title lineages from the Attitude Era through The Bloodline."
);

entity(
    "vince-mcmahon",
    "Vince McMahon",
    "person",
    "Promoter who turned the WWWF into a national, then global, WWE.",
    "Vince McMahon bought the World Wide Wrestling Federation from his father and expanded it through national cable, WrestleMania, the Attitude Era, and the publicly traded WWE that later folded into TKO."
);

entity(
    "triple-h",
    "Triple H",
    "person",
    "The Game — D-Generation X leader and later head of WWE creative.",
    "Paul Levesque, Triple H, was the Cerebral Assassin of D-Generation X and a multi-time world champion before becoming the executive who books modern WWE after Vince McMahon's exit."
);

/* ---------- Figures ---------- */

entity(
    "hulk-hogan",
    "Hulk Hogan",
    "person",
    "Hulkamania's face and, later, a Hollywood nWo heel.",
    "Hulk Hogan was WWE's 1980s national face — WrestleMania main events, the red-and-yellow act — and later crossed into WCW's nWo, a chapter that still sits on WWE's imported lore."
);

entity(
    "undertaker",
    "The Undertaker",
    "person",
    "The Deadman whose WrestleMania streak became company myth.",
    "The Undertaker debuted at Survivor Series 1990 and built a two-decade WrestleMania winning streak, Ministry chapters, and American Badass runs that made him WWE's longest-running character."
);

entity(
    "stone-cold-steve-austin",
    "Stone Cold Steve Austin",
    "person",
    "The Texas Rattlesnake who defined the Attitude Era.",
    "Stone Cold Steve Austin became WWE's late-1990s antihero: Austin 3:16, the beer-can boss fights with Vince McMahon, and WrestleMania title peaks against The Rock and Shawn Michaels."
);

entity(
    "the-rock",
    "The Rock",
    "person",
    "The People's Champion — third-generation star who crossed into Hollywood.",
    "Dwayne Johnson, The Rock, rose through The Nation and a corporate-champion heel turn into WWE's most exported star, with catchphrase promos and main events opposite Austin, Hogan, and Cena."
);

entity(
    "john-cena",
    "John Cena",
    "person",
    "Hustle, Loyalty, Respect — the 2000s face of the company.",
    "John Cena carried WWE's PG-era flagship as a multi-time champion, Super Cena workhorse, and later part-time attraction whose sixteen world-title count became a running story."
);

entity(
    "roman-reigns",
    "Roman Reigns",
    "person",
    "The Tribal Chief who held the Undisputed title through The Bloodline.",
    "Roman Reigns moved from The Shield into a long Tribal Chief reign, unifying the WWE and Universal titles and centering weekly TV on The Bloodline's family politics."
);

entity(
    "becky-lynch",
    "Becky Lynch",
    "person",
    "The Man — women's-division ace of the late 2010s.",
    "Becky Lynch's The Man run, WrestleMania 35 main event, and later returns made her the face of WWE's modern women's boom on Raw and SmackDown."
);

entity(
    "rhea-ripley",
    "Rhea Ripley",
    "person",
    "Mami — Judgment Day enforcer and women's world champion.",
    "Rhea Ripley came through NXT UK and NXT into the main roster, leading later Judgment Day chapters and holding the women's world title as a dominant heel."
);

entity(
    "shawn-michaels",
    "Shawn Michaels",
    "person",
    "The Heartbreak Kid — show-stealer and D-Generation X co-founder.",
    "Shawn Michaels was the boyhood dream of the 1990s: WrestleMania classics, the Montreal chapter with Bret Hart, and the D-Generation X act that helped open the Attitude Era."
);

entity(
    "bret-hart",
    "Bret Hart",
    "person",
    "The Excellence of Execution and the Hitman of the New Generation.",
    "Bret Hart was WWE's technical ace of the early 1990s, a multi-time WWF Champion whose Montreal Screwjob exit in 1997 remains a company-defining rupture."
);

/* ---------- Factions ---------- */

entity(
    "the-bloodline",
    "The Bloodline",
    "organization",
    "Anointed Samoan family faction built around Roman Reigns.",
    "The Bloodline — Roman Reigns, Paul Heyman, and Usos/Solo chapters — was the 2020s faction that controlled the Undisputed Championship picture and weekly SmackDown lore."
);

entity(
    "judgment-day",
    "Judgment Day",
    "organization",
    "Edge-founded faction that became Rhea Ripley's house.",
    "Judgment Day began with Edge and evolved into a main-roster stable whose later chapters centered Rhea Ripley, Damian Priest, Finn Bálor, and Dominik Mysterio."
);

entity(
    "degeneration-x",
    "D-Generation X",
    "organization",
    "Attitude Era rule-breakers led by Triple H and Shawn Michaels.",
    "D-Generation X was the crotch-chop stable that mocked the office, invaded WCW on Nitro, and made Triple H and Shawn Michaels the Attitude Era's mischievous engine."
);

entity(
    "nwo",
    "nWo",
    "organization",
    "WCW's New World Order — Hogan's black-and-white heel turn, later imported.",
    "The nWo began in WCW when Hulk Hogan turned on the company. WWE later absorbed the trademarks and ran nWo nostalgia chapters, treating Hollywood Hogan as crossover lore."
);

/* ---------- Works / TV ---------- */

entity(
    "monday-night-raw",
    "Monday Night Raw",
    "work",
    "WWE's Monday flagship since 1993.",
    "Monday Night Raw is the weekly show that became the Attitude Era battleground with Nitro, then the long-running red brand that still carries world-title segments."
);

entity(
    "friday-night-smackdown",
    "Friday Night SmackDown",
    "work",
    "The blue-brand weekly that launched in 1999.",
    "SmackDown began as WWE's Thursday, later Friday, counterpart to Raw and became the television home of The Bloodline's championship era."
);

/* ---------- Events ---------- */

entity(
    "wrestlemania",
    "WrestleMania",
    "event",
    "WWE's spring showcase and the company's founding national gamble.",
    "WrestleMania I in 1985 at Madison Square Garden was Vince McMahon's closed-circuit bet. The show became the annual destination for title changes, streak myths, and stadium main events."
);

entity(
    "summerslam",
    "SummerSlam",
    "event",
    "August PPV billed as the biggest party of the summer.",
    "SummerSlam is WWE's mid-year premium event, repeatedly used for world-title matches and the second-biggest gate on the calendar after WrestleMania."
);

entity(
    "royal-rumble",
    "Royal Rumble",
    "event",
    "January over-the-top-rope battle that books WrestleMania.",
    "The Royal Rumble is the January match whose winner earns a WrestleMania world-title shot, a booking engine since 1988."
);

entity(
    "survivor-series",
    "Survivor Series",
    "event",
    "November tradition that debuted The Undertaker and later Survivor rules.",
    "Survivor Series is WWE's Thanksgiving-week event, site of The Undertaker's 1990 debut and later the brand-warfare elimination cards."
);

entity(
    "monday-night-wars",
    "Monday Night Wars",
    "event",
    "Raw versus Nitro ratings war that forced the Attitude Era.",
    "The Monday Night Wars of 1995–2001 pitted Raw against WCW Monday Nitro. WWE answered with Austin, DX, and edgier television until it bought WCW in 2001."
);

/* ---------- Places ---------- */

entity(
    "madison-square-garden",
    "Madison Square Garden",
    "place",
    "New York arena of WrestleMania I and countless title nights.",
    "Madison Square Garden is WWE's historic house: WWWF title defenses, WrestleMania I, and later returns that still treat the Garden as a cathedral date."
);

entity(
    "stamford",
    "Stamford",
    "place",
    "Connecticut city that houses WWE headquarters.",
    "Stamford, Connecticut, is the corporate home of WWE television and the office that Vince McMahon, then Triple H, booked the weekly product from."
);

/* ---------- Titles / concepts ---------- */

entity(
    "undisputed-wwe-championship",
    "Undisputed WWE Championship",
    "object",
    "Unified world title of the Bloodline era.",
    "The Undisputed WWE Championship is the prize created when Roman Reigns's Universal Title was unified with the WWE Championship, then carried by later champions after his long reign."
);

entity(
    "wwe-womens-championship",
    "WWE Women's Championship",
    "object",
    "Modern women's world title from the four-horsewomen era onward.",
    "The WWE Women's Championship (in its post-2016 form) is the top women's prize Becky Lynch, Rhea Ripley, and others have held across Raw and SmackDown brand splits."
);

entity(
    "intercontinental-championship",
    "Intercontinental Championship",
    "object",
    "Workhorse midcard title of the New Generation and after.",
    "The Intercontinental Championship is WWE's historic secondary singles title, a proving belt for Hart, Michaels, Austin, and later midcard aces."
);

entity(
    "attitude-era",
    "Attitude Era",
    "concept",
    "Late-1990s tone shift around Austin, DX, and Monday nights.",
    "The Attitude Era is the 1997–2001 booking period when WWE chased older demos with Stone Cold, The Rock, D-Generation X, and a Vince McMahon heel-boss act."
);

/* ---------- Relationships ---------- */

rel("vince-mcmahon", "wwe", "created", "Vince McMahon built WWE from the WWWF.", 0.99, 0.99);
rel("vince-mcmahon", "wrestlemania", "created", "Vince McMahon gambled the company on the first WrestleMania.", 0.98, 0.97);
rel("vince-mcmahon", "attitude-era", "produced", "Vince McMahon booked the Attitude Era that saved the ratings war.", 0.96, 0.94);
rel("triple-h", "wwe", "leads", "Triple H became the executive who books modern WWE.", 0.96, 0.93);
rel("triple-h", "degeneration-x", "leads", "Triple H led later chapters of D-Generation X.", 0.97, 0.95);
rel("shawn-michaels", "degeneration-x", "created", "Shawn Michaels co-founded D-Generation X with Triple H.", 0.97, 0.94);
rel("shawn-michaels", "bret-hart", "opposed_by", "Shawn Michaels and Bret Hart's feud ended in the Montreal Screwjob.", 0.96, 0.94);

rel("hulk-hogan", "wrestlemania", "involved", "Hulk Hogan main-evented the first WrestleMania at Madison Square Garden.", 0.98, 0.96);
rel("hulk-hogan", "nwo", "leads", "Hulk Hogan's Hollywood turn made him the face of the nWo.", 0.95, 0.92);
rel("nwo", "wwe", "connected_to", "WWE later imported nWo trademarks and nostalgia chapters after buying WCW.", 0.9, 0.86);
rel("undertaker", "survivor-series", "involved", "The Undertaker debuted at Survivor Series 1990.", 0.97, 0.95);
rel("undertaker", "wrestlemania", "involved", "The Undertaker's WrestleMania streak became company myth.", 0.98, 0.96);

rel("stone-cold-steve-austin", "attitude-era", "caused", "Stone Cold's antihero act defined the Attitude Era.", 0.98, 0.97);
rel("stone-cold-steve-austin", "vince-mcmahon", "opposed_by", "Stone Cold's weekly war with boss Vince McMahon drove Attitude Era television.", 0.97, 0.95);
rel("stone-cold-steve-austin", "the-rock", "opposed_by", "Austin and The Rock's rivalry capped the Attitude Era at WrestleMania.", 0.96, 0.94);
rel("the-rock", "wwe", "part_of", "The Rock became WWE's most exported crossover star.", 0.95, 0.92);
rel("john-cena", "undisputed-wwe-championship", "uses", "John Cena's sixteen world-title reigns include later Undisputed-era returns.", 0.93, 0.9);
rel("john-cena", "monday-night-raw", "involved", "John Cena was the long-running face of Monday Night Raw.", 0.95, 0.92);

rel("roman-reigns", "the-bloodline", "leads", "Roman Reigns leads The Bloodline as Tribal Chief.", 0.99, 0.97);
rel("roman-reigns", "undisputed-wwe-championship", "uses", "Roman Reigns unified and held the Undisputed WWE Championship.", 0.98, 0.96);
rel("roman-reigns", "friday-night-smackdown", "involved", "The Bloodline's title era was centered on Friday Night SmackDown.", 0.95, 0.92);
rel("becky-lynch", "wwe-womens-championship", "uses", "Becky Lynch's The Man run was built on the WWE Women's Championship.", 0.96, 0.93);
rel("becky-lynch", "wrestlemania", "involved", "Becky Lynch main-evented WrestleMania 35.", 0.96, 0.93);
rel("rhea-ripley", "judgment-day", "leads", "Rhea Ripley became the on-screen center of Judgment Day.", 0.96, 0.93);
rel("rhea-ripley", "wwe-womens-championship", "uses", "Rhea Ripley held the women's world title as Judgment Day's Mami.", 0.95, 0.91);

rel("monday-night-raw", "wwe", "part_of", "Monday Night Raw is WWE's longest-running weekly flagship.", 0.99, 0.98);
rel("friday-night-smackdown", "wwe", "part_of", "SmackDown is WWE's blue-brand weekly show.", 0.98, 0.96);
rel("wrestlemania", "wwe", "part_of", "WrestleMania is WWE's annual showcase event.", 0.99, 0.98);
rel("summerslam", "wwe", "part_of", "SummerSlam is WWE's August premium live event.", 0.97, 0.94);
rel("royal-rumble", "wwe", "part_of", "The Royal Rumble is WWE's January WrestleMania qualifier.", 0.97, 0.94);
rel("survivor-series", "wwe", "part_of", "Survivor Series is WWE's November tradition.", 0.96, 0.93);
rel("wrestlemania", "madison-square-garden", "occurred_at", "The first WrestleMania was staged at Madison Square Garden.", 0.98, 0.96);
rel("royal-rumble", "wrestlemania", "preceded", "Winning the Royal Rumble books a WrestleMania world-title match.", 0.96, 0.93);

rel("monday-night-wars", "monday-night-raw", "involved", "The Monday Night Wars were fought on Raw against WCW Nitro.", 0.97, 0.94);
rel("monday-night-wars", "attitude-era", "caused", "Losing early Monday Night Wars nights pushed WWE into the Attitude Era.", 0.95, 0.92);
rel("attitude-era", "wwe", "part_of", "The Attitude Era is the late-1990s chapter of WWE television.", 0.97, 0.95);
rel("intercontinental-championship", "wwe", "part_of", "The Intercontinental Championship is WWE's historic midcard prize.", 0.95, 0.91);
rel("bret-hart", "intercontinental-championship", "uses", "Bret Hart's Hitman peak ran through the Intercontinental Championship.", 0.94, 0.9);
rel("stamford", "wwe", "located_in", "WWE's headquarters sit in Stamford, Connecticut.", 0.97, 0.94);
rel("the-bloodline", "wwe", "part_of", "The Bloodline is the defining WWE faction of the 2020s.", 0.96, 0.93);
rel("judgment-day", "wwe", "part_of", "Judgment Day is a main-roster WWE stable.", 0.94, 0.9);
rel("degeneration-x", "attitude-era", "part_of", "D-Generation X was an Attitude Era engine.", 0.96, 0.93);

module.exports = { entities, relationships };
