/*
 * NJPW subject data — Strong Style, factions, and the Tokyo Dome calendar.
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
    "njpw",
    "NJPW",
    "topic",
    "New Japan Pro-Wrestling — Strong Style, the G1, and Wrestle Kingdom.",
    "New Japan Pro-Wrestling is the Tokyo promotion Antonio Inoki founded in 1972. Its modern lore runs through the IWGP title, the G1 Climax, Wrestle Kingdom at the Tokyo Dome, and factions such as CHAOS, Los Ingobernables de Japón, Bullet Club, and United Empire."
);

entity(
    "antonio-inoki",
    "Antonio Inoki",
    "person",
    "Founder who built New Japan around Strong Style and the fighting spirit.",
    "Antonio Inoki left the JWA and founded New Japan in 1972, mixing catch wrestling with the martial-arts crossover that became Strong Style and the IWGP idea."
);

entity(
    "bushiroad",
    "Bushiroad",
    "organization",
    "Card-game company that bought New Japan and expanded NJPW World.",
    "Bushiroad acquired New Japan in 2012, funding the Wrestle Kingdom stadium era, NJPW World streaming, and the international tours that carried Okada, Naito, and Ospreay abroad."
);

/* ---------- Figures ---------- */

entity(
    "hiroshi-tanahashi",
    "Hiroshi Tanahashi",
    "person",
    "The Ace who rebuilt New Japan after the dark 2000s.",
    "Hiroshi Tanahashi is the Ace whose Rainmaker-era rivalries, multiple IWGP Heavyweight reigns, and later presidency pulled New Japan from decline into the Wrestle Kingdom boom."
);

entity(
    "kazuchika-okada",
    "Kazuchika Okada",
    "person",
    "The Rainmaker — CHAOS ace and record IWGP champion.",
    "Kazuchika Okada, CHAOS's Rainmaker, held the IWGP Heavyweight Championship for a company-record reign and headlined repeated Wrestle Kingdom main events against Tanahashi, Omega, and Naito."
);

entity(
    "tetsuya-naito",
    "Tetsuya Naito",
    "person",
    "Tranquilo leader of Los Ingobernables de Japón.",
    "Tetsuya Naito turned from failed Ace into the LIJ destrozando-star who chased, then won, the IWGP Heavyweight and Intercontinental double, and later the IWGP World Heavyweight Championship."
);

entity(
    "kota-ibushi",
    "Kota Ibushi",
    "person",
    "Golden Star whose tournament runs peaked at Wrestle Kingdom.",
    "Kota Ibushi's Golden Star act, Golden Lovers history, and G1 / New Japan Cup wins led to an IWGP Heavyweight and Intercontinental unification chapter that birthed the IWGP World Heavyweight title."
);

entity(
    "will-ospreay",
    "Will Ospreay",
    "person",
    "Aerial assassin whose New Japan chapter ran through United Empire.",
    "Will Ospreay's New Japan years — junior ace, then heavyweight, then United Empire leader — produced IWGP United States and IWGP World Heavyweight title runs before his AEW move."
);

entity(
    "jay-white",
    "Jay White",
    "person",
    "Switchblade who led Bullet Club after the Elite departed.",
    "Jay White, the Switchblade, took Bullet Club's Tokyo chapter after Omega and the Bucks left, holding the IWGP Heavyweight Championship and feuding with Okada and Tanahashi."
);

entity(
    "hiromu-takahashi",
    "Hiromu Takahashi",
    "person",
    "The Bomber of LIJ's junior heavyweight wing.",
    "Hiromu Takahashi is Los Ingobernables de Japón's junior ace, a multi-time IWGP Junior Heavyweight Champion whose returns from injury became Tokyo Dome stories."
);

entity(
    "shingo-takagi",
    "Shingo Takagi",
    "person",
    "The Dragon of LIJ who moved from junior king to heavyweight.",
    "Shingo Takagi crossed from Dragon Gate into LIJ, won the NEVER Openweight Championship, and later chased the IWGP World Heavyweight Championship as Naito's heavyweight enforcer."
);

entity(
    "jushin-thunder-liger",
    "Jushin Thunder Liger",
    "person",
    "Masked junior who defined New Japan's undercard for decades.",
    "Jushin Thunder Liger was New Japan's long-running junior heavyweight ace, a mask-and-shooting-star figure whose IWGP Junior lineage later fighters still claim."
);

entity(
    "tatsumi-fujinami",
    "Tatsumi Fujinami",
    "person",
    "Inoki disciple and early IWGP Heavyweight Champion.",
    "Tatsumi Fujinami was among Inoki's first stars, a Dragon who held the early IWGP Heavyweight Championship and carried Strong Style into the 1980s national era."
);

/* ---------- Factions ---------- */

entity(
    "los-ingobernables-de-japon",
    "Los Ingobernables de Japón",
    "organization",
    "Naito's ungovernable unit — destrozando the Ace system.",
    "Los Ingobernables de Japón is the New Japan unit Naito imported from CMLL's LI idea: Tranquilo heels who rejected the Ace path and built a Tokyo Dome following."
);

entity(
    "bullet-club",
    "Bullet Club",
    "organization",
    "Foreign heel stable that became New Japan's global export.",
    "Bullet Club began as a gaijin heel unit and grew into New Japan's most exported faction — Styles, Omega, the Young Bucks, then Jay White's Switchblade chapter."
);

entity(
    "chaos",
    "CHAOS",
    "organization",
    "Okada's long-running anti-establishment unit.",
    "CHAOS was the faction that housed Kazuchika Okada's Rainmaker years, a black-gear unit that opposed the Ace system before becoming New Japan's default main-event machine."
);

entity(
    "united-empire",
    "United Empire",
    "organization",
    "Ospreay's imperial unit in his New Japan heavyweight years.",
    "United Empire was the faction Will Ospreay built after leaving CHAOS, a multinational unit that chased IWGP gold through Forbidden Door season and G1 tours."
);

/* ---------- Events ---------- */

entity(
    "g1-climax",
    "G1 Climax",
    "event",
    "Summer round-robin that books the Tokyo Dome main event.",
    "The G1 Climax is New Japan's summer round-robin tournament. Winning it historically earned a Wrestle Kingdom shot at the IWGP prize."
);

entity(
    "wrestle-kingdom",
    "Wrestle Kingdom",
    "event",
    "January Tokyo Dome show — New Japan's WrestleMania.",
    "Wrestle Kingdom is New Japan's January Tokyo Dome event, the year-turning card where IWGP titles change and the G1 winner cashes the main event."
);

entity(
    "dominion",
    "Dominion",
    "event",
    "June Osaka-jo Hall card that often resets the title picture.",
    "Dominion at Osaka-jo Hall is New Japan's mid-year pay-per-view, repeatedly used for IWGP title changes between Wrestle Kingdom and the G1."
);

entity(
    "sakura-genesis",
    "Sakura Genesis",
    "event",
    "Spring Ryogoku card in cherry-blossom season.",
    "Sakura Genesis is New Japan's April Ryogoku Kokugikan event, a spring title show between New Japan Cup fallout and the summer G1."
);

entity(
    "new-japan-cup",
    "New Japan Cup",
    "event",
    "Spring single-elimination tournament for a title shot.",
    "The New Japan Cup is the March knockout tournament whose winner usually receives an IWGP title match at Sakura Genesis or Invasion Attack-era spring cards."
);

/* ---------- Places ---------- */

entity(
    "tokyo-dome",
    "Tokyo Dome",
    "place",
    "The Big Egg — January home of Wrestle Kingdom.",
    "The Tokyo Dome is New Japan's cathedral: January 4 Dome Shows that became Wrestle Kingdom, where Inoki-era cards and the modern IWGP main events share the same roof."
);

entity(
    "korakuen-hall",
    "Korakuen Hall",
    "place",
    "Tokyo fight hall that still hosts New Japan undercards.",
    "Korakuen Hall in Bunkyo is the small-room home of New Japan extras, Road to tours, and junior-heavyweight cards that feed the Dome shows."
);

entity(
    "osaka-jo-hall",
    "Osaka-jo Hall",
    "place",
    "Castle-side arena that hosts Dominion.",
    "Osaka-jo Hall is the mid-year New Japan arena, the usual site of Dominion and a second city to the Tokyo Dome calendar."
);

/* ---------- Works / titles / concepts ---------- */

entity(
    "njpw-world",
    "NJPW World",
    "work",
    "Streaming service that carried the Bushiroad-era boom abroad.",
    "NJPW World is New Japan's streaming platform, the window that let English-speaking fans follow the G1, Wrestle Kingdom, and IWGP title matches live."
);

entity(
    "iwgp-world-heavyweight-championship",
    "IWGP World Heavyweight Championship",
    "object",
    "Unified heavyweight prize after Ibushi's double-title chapter.",
    "The IWGP World Heavyweight Championship is New Japan's top title, created when the Heavyweight and Intercontinental belts were unified, then held by Ibushi, Okada, Naito, Shingo, and later champions."
);

entity(
    "iwgp-junior-heavyweight-championship",
    "IWGP Junior Heavyweight Championship",
    "object",
    "Junior prize from Liger through Hiromu's bomber years.",
    "The IWGP Junior Heavyweight Championship is New Japan's historic junior title, a lineage Jushin Thunder Liger defined and Hiromu Takahashi later made a Tokyo Dome attraction."
);

entity(
    "never-openweight-championship",
    "NEVER Openweight Championship",
    "object",
    "Openweight workhorse belt for heavy strikers.",
    "The NEVER Openweight Championship is New Japan's openweight midcard title, a belt Shingo Takagi and other heavy hitters used as a stepping stone toward IWGP gold."
);

entity(
    "strong-style",
    "Strong Style",
    "concept",
    "Inoki's fighting-spirit blend of catch, kicks, and martial-arts cred.",
    "Strong Style is New Japan's house aesthetic: stiff strikes, submissions, and the fighting-spirit ethos Inoki sold against pro-wrestling-as-entertainment."
);

/* ---------- Relationships ---------- */

rel("antonio-inoki", "njpw", "created", "Antonio Inoki founded New Japan Pro-Wrestling in 1972.", 0.99, 0.99);
rel("antonio-inoki", "strong-style", "created", "Inoki built Strong Style as New Japan's fighting-spirit identity.", 0.98, 0.96);
rel("bushiroad", "njpw", "produced", "Bushiroad bought New Japan and funded the Wrestle Kingdom boom.", 0.96, 0.94);
rel("bushiroad", "njpw-world", "created", "Bushiroad launched NJPW World to stream New Japan globally.", 0.95, 0.92);

rel("hiroshi-tanahashi", "njpw", "leads", "Tanahashi was the Ace who later became New Japan's president.", 0.97, 0.95);
rel("hiroshi-tanahashi", "iwgp-world-heavyweight-championship", "uses", "Tanahashi's Ace years were built on repeated IWGP heavyweight reigns.", 0.96, 0.93);
rel("kazuchika-okada", "chaos", "leads", "Okada was the Rainmaker ace of CHAOS.", 0.98, 0.96);
rel("kazuchika-okada", "iwgp-world-heavyweight-championship", "uses", "Okada's record IWGP reigns defined the Rainmaker era.", 0.98, 0.96);
rel("kazuchika-okada", "hiroshi-tanahashi", "opposed_by", "Okada and Tanahashi's rivalry rebuilt New Japan's main event.", 0.97, 0.95);

rel("tetsuya-naito", "los-ingobernables-de-japon", "leads", "Naito leads Los Ingobernables de Japón.", 0.99, 0.97);
rel("tetsuya-naito", "iwgp-world-heavyweight-championship", "uses", "Naito won the IWGP World Heavyweight Championship as LIJ's destrozando Ace.", 0.96, 0.93);
rel("hiromu-takahashi", "los-ingobernables-de-japon", "member_of", "Hiromu Takahashi is LIJ's junior heavyweight bomber.", 0.97, 0.94);
rel("hiromu-takahashi", "iwgp-junior-heavyweight-championship", "uses", "Hiromu made the IWGP Junior Heavyweight Championship a Dome attraction.", 0.96, 0.93);
rel("shingo-takagi", "los-ingobernables-de-japon", "member_of", "Shingo Takagi is LIJ's heavyweight dragon.", 0.96, 0.93);
rel("shingo-takagi", "never-openweight-championship", "uses", "Shingo's New Japan rise ran through the NEVER Openweight Championship.", 0.95, 0.91);

rel("kota-ibushi", "iwgp-world-heavyweight-championship", "created", "Ibushi's Heavyweight and Intercontinental unification produced the IWGP World title.", 0.96, 0.93);
rel("will-ospreay", "united-empire", "leads", "Will Ospreay led United Empire during his New Japan heavyweight chapter.", 0.97, 0.94);
rel("will-ospreay", "iwgp-world-heavyweight-championship", "uses", "Ospreay held the IWGP World Heavyweight Championship before leaving for AEW.", 0.95, 0.92);
rel("jay-white", "bullet-club", "leads", "Jay White led Bullet Club's Switchblade chapter in New Japan.", 0.97, 0.94);
rel("jay-white", "kazuchika-okada", "opposed_by", "Jay White's Switchblade run was built on feuds with Okada.", 0.94, 0.9);

rel("jushin-thunder-liger", "iwgp-junior-heavyweight-championship", "uses", "Jushin Thunder Liger defined the IWGP Junior Heavyweight Championship.", 0.96, 0.93);
rel("tatsumi-fujinami", "iwgp-world-heavyweight-championship", "preceded", "Fujinami's early IWGP Heavyweight reigns preceded the modern world-title lineage.", 0.93, 0.89);
rel("tatsumi-fujinami", "antonio-inoki", "supports", "Fujinami was an Inoki disciple who carried Strong Style into the 1980s.", 0.94, 0.9);

rel("g1-climax", "njpw", "part_of", "The G1 Climax is New Japan's summer round-robin tournament.", 0.99, 0.98);
rel("g1-climax", "wrestle-kingdom", "preceded", "Winning the G1 Climax books the Wrestle Kingdom main event.", 0.97, 0.95);
rel("wrestle-kingdom", "tokyo-dome", "occurred_at", "Wrestle Kingdom is staged at the Tokyo Dome.", 0.99, 0.98);
rel("wrestle-kingdom", "njpw", "part_of", "Wrestle Kingdom is New Japan's January showcase.", 0.99, 0.98);
rel("dominion", "osaka-jo-hall", "occurred_at", "Dominion is New Japan's June show at Osaka-jo Hall.", 0.97, 0.94);
rel("dominion", "njpw", "part_of", "Dominion is New Japan's mid-year title card.", 0.96, 0.93);
rel("sakura-genesis", "njpw", "part_of", "Sakura Genesis is New Japan's spring Ryogoku card.", 0.95, 0.91);
rel("new-japan-cup", "sakura-genesis", "preceded", "The New Japan Cup winner usually challenges at the spring title show.", 0.94, 0.9);
rel("njpw-world", "njpw", "part_of", "NJPW World is New Japan's streaming home.", 0.97, 0.94);
rel("korakuen-hall", "njpw", "connected_to", "Korakuen Hall still hosts New Japan's small-room cards.", 0.93, 0.89);
rel("strong-style", "njpw", "part_of", "Strong Style is the fighting-spirit identity of New Japan.", 0.97, 0.95);
rel("bullet-club", "njpw", "part_of", "Bullet Club is New Japan's most exported faction.", 0.96, 0.93);
rel("los-ingobernables-de-japon", "njpw", "part_of", "LIJ is the destrozando unit that remade New Japan's 2010s.", 0.96, 0.93);
rel("tokyo-dome", "njpw", "connected_to", "The Tokyo Dome is New Japan's January cathedral.", 0.95, 0.92);

module.exports = { entities, relationships };
