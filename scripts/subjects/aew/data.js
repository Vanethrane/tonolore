/*
 * AEW subject data — All Elite Wrestling as a living kayfabe graph.
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

/* ---------- Root / founders ---------- */

entity(
    "aew",
    "AEW",
    "topic",
    "All Elite Wrestling — factions, weekly TV, and PPV mythmaking as the modern U.S. alternative.",
    "All Elite Wrestling is the U.S. promotion founded in 2019 around The Elite, Cody Rhodes, and Tony Khan. Its lore runs through Dynamite, Collision, and the PPV calendar — Double or Nothing, All Out, Full Gear, Revolution, and All In — and through factions, title lineages, and the Forbidden Door with New Japan."
);

entity(
    "tony-khan",
    "Tony Khan",
    "person",
    "Founder, president, and lead booker of AEW.",
    "Tony Khan launched All Elite Wrestling in 2019, backing The Elite's breakaway from the independent boom and booking Dynamite as a weekly alternative to WWE."
);

entity(
    "the-elite",
    "The Elite",
    "organization",
    "Kenny Omega and the Young Bucks — the creative core that became AEW.",
    "The Elite — Kenny Omega, Matt Jackson, and Nick Jackson, later with Hangman Page and others — were the Bullet Club offshoot whose independent success and All In 2018 show led directly to AEW's founding."
);

entity(
    "cody-rhodes",
    "Cody Rhodes",
    "person",
    "Co-founder who helped launch AEW, then left for WWE.",
    "Cody Rhodes was a founding on-screen leader of AEW, an early TNT Champion, and a central figure of the company's first years before departing in 2022."
);

/* ---------- Figures ---------- */

entity(
    "kenny-omega",
    "Kenny Omega",
    "person",
    "The Cleaner — founding Elite member and former AEW World Champion.",
    "Kenny Omega is a founding Elite wrestler whose AEW World Championship reign, Hidden Blade, and partnerships with the Young Bucks and the Good Brothers defined the company's first peak."
);

entity(
    "young-bucks",
    "The Young Bucks",
    "organization",
    "Matt and Nick Jackson — EVPs and tag-team architects of AEW.",
    "The Young Bucks, Matt and Nick Jackson, are AEW executive vice presidents and the tag team whose Superkick Party style, Elite factions, and All In 2018 helped create the company."
);

entity(
    "hangman-page",
    "Hangman Adam Page",
    "person",
    "The cowboy who won the world title after breaking from The Elite.",
    "Hangman Adam Page rose from Elite tag partner to AEW World Champion by turning the cowboy loner story against Kenny Omega and the Bucks, then cycling through later factions and title hunts."
);

entity(
    "maxwell-jacob-friedman",
    "Maxwell Jacob Friedman",
    "person",
    "MJF — heel ace and former AEW World Champion.",
    "Maxwell Jacob Friedman is AEW's long-running heel star: Dynamite Diamond Ring, Salt of the Earth, a world-title reign, and feuds with Cody Rhodes, CM Punk, and Adam Cole."
);

entity(
    "jon-moxley",
    "Jon Moxley",
    "person",
    "Death Rider, multi-time AEW World Champion, and BCC cornerstone.",
    "Jon Moxley arrived from WWE as a founding AEW World Champion, later leading the Blackpool Combat Club and cycling through Death Riders chapters as one of the company's most repeated title figures."
);

entity(
    "bryan-danielson",
    "Bryan Danielson",
    "person",
    "American Dragon — BCC founder and 2024 world champion.",
    "Bryan Danielson joined AEW in 2021, founded the Blackpool Combat Club with Moxley, and won the AEW World Championship at Wembley's All In before a retirement-path program."
);

entity(
    "will-ospreay",
    "Will Ospreay",
    "person",
    "Aerial assassin who crossed the Forbidden Door into AEW stardom.",
    "Will Ospreay came through New Japan and the Forbidden Door, then became an AEW International and later world-title figure known for the Hidden Blade and Stormbreaker."
);

entity(
    "swerve-strickland",
    "Swerve Strickland",
    "person",
    "Prince of the Mid-Atlantic and a later AEW World Champion.",
    "Swerve Strickland moved from Mogul Embassy / Mogul Affiliates into a main-event run, winning the AEW World Championship and feuding through House of Black and Hangman Page programs."
);

entity(
    "mercedes-mone",
    "Mercedes Moné",
    "person",
    "CEO — TBS Champion and crossover star from WWE.",
    "Mercedes Moné debuted in AEW after WWE, captured the TBS Championship, and became a centerpiece of the women's division on Collision and PPV."
);

entity(
    "toni-storm",
    "Toni Storm",
    "person",
    "Timeless Hollywood star and multi-time AEW Women's Champion.",
    "Toni Storm's Timeless gimmick remade the AEW women's world title picture, with Mariah May, Mina Shirakawa, and the Hollywood-heel run as the core of that chapter."
);

entity(
    "cm-punk",
    "CM Punk",
    "person",
    "Second-era AEW signing whose 2021–23 run ended in controversy.",
    "CM Punk's AEW return brought All Out 2021 main events and a Real World's Champion belt, then collapsed through the 2022 All Out media scrum and a 2023 Collision-era exit."
);

/* ---------- Factions ---------- */

entity(
    "inner-circle",
    "The Inner Circle",
    "organization",
    "Jericho's first great AEW stable.",
    "The Inner Circle — Chris Jericho, Sammy Guevara, Jake Hager, Santana, and Ortiz — was AEW's first flagship heel faction, later breaking apart into Jericho Appreciation Society stories."
);

entity(
    "blackpool-combat-club",
    "Blackpool Combat Club",
    "organization",
    "Moxley and Danielson's shoot-style fighting stable.",
    "The Blackpool Combat Club began with Bryan Danielson, Jon Moxley, Wheeler Yuta, and Claudio Castagnoli as a combat-sports faction, later mutating through Death Riders chapters."
);

entity(
    "house-of-black",
    "House of Black",
    "organization",
    "Malakai Black's occult trios kingdom.",
    "House of Black — Malakai Black, Buddy Matthews, and Brody King, with Julia Hart — held the AEW World Trios Championship and staged a dark, ritual presentation against Pagano, Swerve, and The Elite."
);

entity(
    "undisputed-kingdom",
    "Undisputed Kingdom",
    "organization",
    "Adam Cole and the Undisputed Era remnants in AEW.",
    "Undisputed Kingdom gathered Adam Cole, Roderick Strong, the Kingdom, and later MJF-adjacent chapters after the Undisputed Era crossed into AEW."
);

/* ---------- Works / TV / PPV ---------- */

entity(
    "aew-dynamite",
    "AEW Dynamite",
    "work",
    "Wednesday flagship that launched the promotion on TV.",
    "AEW Dynamite is the Wednesday flagship that debuted in 2019, first from Daily's Place and arenas nationwide, carrying world-title matches, factions, and the weekly lore."
);

entity(
    "aew-collision",
    "AEW Collision",
    "work",
    "Saturday show that opened during the CM Punk / BCC era.",
    "AEW Collision launched in 2023 as a Saturday show, originally built around CM Punk's roster before becoming the second weekly pillar beside Dynamite."
);

entity(
    "double-or-nothing",
    "Double or Nothing",
    "event",
    "AEW's first PPV and Memorial Day tradition.",
    "Double or Nothing in 2019 was AEW's inaugural pay-per-view in Las Vegas, establishing the Memorial Day date and early title picture around Chris Jericho and The Elite."
);

entity(
    "all-in",
    "All In",
    "event",
    "The 2018 independent show that proved AEW, later the Wembley stadium event.",
    "All In 2018 at the Sears Centre was the sold-out independent card that convinced Tony Khan to fund AEW. All In later became AEW's stadium show at Wembley Stadium."
);

entity(
    "all-out",
    "All Out",
    "event",
    "Labor Day PPV and site of several company-defining blowups.",
    "All Out is AEW's Labor Day pay-per-view, home to early Casino Battle Royales, Punk's 2021 debut, and the 2022 media-scrum rupture."
);

entity(
    "full-gear",
    "Full Gear",
    "event",
    "Autumn PPV often used for title-change seasons.",
    "Full Gear is AEW's late-year pay-per-view, repeatedly used for world-title changes including Hangman Page and later MJF chapters."
);

entity(
    "revolution",
    "Revolution",
    "event",
    "Winter/spring PPV built around anniversary-season main events.",
    "Revolution is AEW's early-year pay-per-view, often staging stadium-scale stipulations and world-title matches as the winter climax."
);

entity(
    "forbidden-door",
    "Forbidden Door",
    "event",
    "Crossover PPV with New Japan and other partner promotions.",
    "Forbidden Door is the interpromotional pay-per-view that opened AEW's working relationship with NJPW, later widening to other partners and import stars like Will Ospreay."
);

/* ---------- Places ---------- */

entity(
    "dailys-place",
    "Daily's Place",
    "place",
    "Jacksonville amphitheater that housed pandemic-era Dynamite.",
    "Daily's Place in Jacksonville was AEW's home base during 2020–21, the empty-arena and limited-crowd stage where weekly TV and several PPVs were taped."
);

entity(
    "wembley-stadium",
    "Wembley Stadium",
    "place",
    "London stadium that hosts All In.",
    "Wembley Stadium became AEW's international stadium stage for All In, including Bryan Danielson's 2024 world-title win."
);

entity(
    "arthur-ashe-stadium",
    "Arthur Ashe Stadium",
    "place",
    "New York tennis stadium used for a landmark AEW card.",
    "Arthur Ashe Stadium hosted a major AEW show that pushed the company into a New York stadium setting beyond weekly arenas."
);

/* ---------- Titles / concepts ---------- */

entity(
    "aew-world-championship",
    "AEW World Championship",
    "object",
    "The top prize — Jericho to Moxley, Omega, Hangman, MJF, Danielson, and after.",
    "The AEW World Championship is the promotion's world title, first won by Chris Jericho at All Out 2019, then carried by Moxley, Omega, Hangman Page, MJF, Danielson, and later champions."
);

entity(
    "aew-tnt-championship",
    "AEW TNT Championship",
    "object",
    "Secondary title that launched Cody's early open-challenge era.",
    "The TNT Championship began as Cody Rhodes's open-challenge belt on Dynamite and became the workhorse midcard title for rising singles stars."
);

entity(
    "aew-womens-world-championship",
    "AEW Women's World Championship",
    "object",
    "Women's world title from Riho through Storm and after.",
    "The AEW Women's World Championship is the top women's prize, passing through Riho, Nyla Rose, Britt Baker, Thunder Rosa, Toni Storm, and later champions."
);

entity(
    "chris-jericho",
    "Chris Jericho",
    "person",
    "First AEW World Champion and Inner Circle leader.",
    "Chris Jericho was AEW's first world champion, founded the Inner Circle, and later the Jericho Appreciation Society, anchoring the company's earliest TV feuds."
);

/* ---------- Relationships ---------- */

rel("tony-khan", "aew", "created", "Tony Khan founded and books All Elite Wrestling.", 0.99, 0.99);
rel("the-elite", "aew", "created", "The Elite's independent run and All In 2018 led to AEW.", 0.98, 0.97);
rel("cody-rhodes", "aew", "created", "Cody Rhodes helped launch AEW as a founding on-screen leader.", 0.97, 0.95);
rel("all-in", "aew", "caused", "The 2018 All In show proved the market that became AEW.", 0.98, 0.96);

rel("kenny-omega", "the-elite", "member_of", "Kenny Omega is a founding member of The Elite.", 0.99, 0.97);
rel("young-bucks", "the-elite", "leads", "The Young Bucks are the tag-team core of The Elite.", 0.98, 0.96);
rel("hangman-page", "the-elite", "member_of", "Hangman Page was The Elite's cowboy before breaking away.", 0.95, 0.92);

rel("chris-jericho", "aew-world-championship", "uses", "Chris Jericho was the first AEW World Champion.", 0.98, 0.96);
rel("chris-jericho", "inner-circle", "leads", "Jericho led the Inner Circle.", 0.98, 0.95);
rel("jon-moxley", "aew-world-championship", "uses", "Jon Moxley is a multi-time AEW World Champion.", 0.97, 0.94);
rel("jon-moxley", "blackpool-combat-club", "leads", "Moxley leads later chapters of the Blackpool Combat Club.", 0.96, 0.93);
rel("bryan-danielson", "blackpool-combat-club", "created", "Bryan Danielson founded the Blackpool Combat Club.", 0.97, 0.94);
rel("bryan-danielson", "aew-world-championship", "uses", "Danielson won the AEW World Championship at All In.", 0.96, 0.93);
rel("kenny-omega", "aew-world-championship", "uses", "Kenny Omega held the AEW World Championship at AEW's first peak.", 0.97, 0.94);
rel("hangman-page", "aew-world-championship", "uses", "Hangman Page won the world title after leaving The Elite.", 0.97, 0.94);
rel("maxwell-jacob-friedman", "aew-world-championship", "uses", "MJF's world-title reign was a long heel-ace chapter.", 0.97, 0.94);
rel("swerve-strickland", "aew-world-championship", "uses", "Swerve Strickland later won the AEW World Championship.", 0.95, 0.91);

rel("cody-rhodes", "aew-tnt-championship", "uses", "Cody Rhodes launched the TNT Championship with open challenges.", 0.96, 0.93);
rel("toni-storm", "aew-womens-world-championship", "uses", "Toni Storm's Timeless run defined a women's title era.", 0.96, 0.93);
rel("mercedes-mone", "aew-collision", "involved", "Mercedes Moné became a Collision-era TBS centerpiece.", 0.94, 0.9);

rel("aew-dynamite", "aew", "part_of", "Dynamite is AEW's Wednesday flagship.", 0.99, 0.98);
rel("aew-collision", "aew", "part_of", "Collision is AEW's Saturday weekly show.", 0.97, 0.94);
rel("double-or-nothing", "aew", "part_of", "Double or Nothing was AEW's first pay-per-view.", 0.98, 0.96);
rel("all-out", "aew", "part_of", "All Out is AEW's Labor Day pay-per-view.", 0.97, 0.94);
rel("full-gear", "aew", "part_of", "Full Gear is AEW's autumn pay-per-view.", 0.96, 0.93);
rel("revolution", "aew", "part_of", "Revolution is AEW's winter/spring pay-per-view.", 0.96, 0.93);
rel("forbidden-door", "aew", "part_of", "Forbidden Door is AEW's crossover pay-per-view.", 0.96, 0.93);
rel("all-in", "wembley-stadium", "occurred_at", "Later All In cards are staged at Wembley Stadium.", 0.95, 0.92);
rel("bryan-danielson", "all-in", "involved", "Danielson won the world title at All In in Wembley.", 0.95, 0.92);
rel("cm-punk", "all-out", "involved", "Punk's AEW debut and later rupture both hit at All Out.", 0.95, 0.92);
rel("will-ospreay", "forbidden-door", "involved", "Ospreay crossed into AEW through the Forbidden Door.", 0.95, 0.91);

rel("aew-dynamite", "dailys-place", "occurred_at", "Pandemic-era Dynamite was based at Daily's Place.", 0.95, 0.91);
rel("house-of-black", "swerve-strickland", "opposed_by", "House of Black feuded through Swerve's rise.", 0.9, 0.86);
rel("maxwell-jacob-friedman", "cody-rhodes", "opposed_by", "MJF's early peak was the long feud with Cody Rhodes.", 0.94, 0.9);
rel("hangman-page", "kenny-omega", "opposed_by", "Hangman's world-title story turned on Kenny Omega.", 0.95, 0.92);
rel("undisputed-kingdom", "maxwell-jacob-friedman", "connected_to", "Undisputed Kingdom's AEW chapter crossed MJF and Adam Cole.", 0.9, 0.86);
rel("tony-khan", "aew-dynamite", "produced", "Tony Khan books and produces Dynamite.", 0.96, 0.93);
rel("young-bucks", "aew", "produced", "The Young Bucks are EVPs who help shape AEW TV.", 0.94, 0.9);
rel("will-ospreay", "aew", "part_of", "Will Ospreay became an AEW main-event figure after NJPW.", 0.93, 0.9);
rel("mercedes-mone", "aew", "part_of", "Mercedes Moné is a featured AEW women's champion.", 0.93, 0.9);
rel("toni-storm", "aew", "part_of", "Toni Storm is a multi-time AEW Women's World Champion.", 0.94, 0.91);
rel("cm-punk", "aew", "part_of", "CM Punk's 2021–23 run is a defining AEW chapter.", 0.93, 0.9);
rel("arthur-ashe-stadium", "aew", "connected_to", "Arthur Ashe Stadium hosted a landmark AEW stadium card.", 0.88, 0.84);

module.exports = { entities, relationships };
