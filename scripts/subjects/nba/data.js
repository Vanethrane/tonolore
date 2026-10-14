/*
 * NBA subject data — dynasties, rivalries, and the championship lineage.
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
    "nba",
    "NBA",
    "topic",
    "The National Basketball Association — drafts, dynasties, and the Finals.",
    "The NBA is the U.S. and Canadian professional basketball league whose lore runs through Bill Russell's Celtics, the Lakers rivalry, the Bulls dynasty, the Warriors' shooting revolution, the draft, and the Larry O'Brien Trophy."
);

entity(
    "david-stern",
    "David Stern",
    "person",
    "Commissioner who globalized the league in the Jordan years.",
    "David Stern was NBA commissioner from 1984 to 2014, the executive who marketed Magic, Bird, and Jordan, weathered the 1998–99 lockout, and turned the Finals into a worldwide product."
);

entity(
    "adam-silver",
    "Adam Silver",
    "person",
    "Commissioner of the LeBron–Curry era.",
    "Adam Silver succeeded David Stern in 2014 and has overseen the Warriors dynasty, load management debates, and the league's media-rights expansion."
);

/* ---------- Players ---------- */

entity(
    "bill-russell",
    "Bill Russell",
    "person",
    "Celtics center whose eleven titles remain the championship standard.",
    "Bill Russell anchored the Boston Celtics of the 1950s and 1960s, winning eleven NBA championships and defining defense, shot-blocking, and Celtic Pride."
);

entity(
    "wilt-chamberlain",
    "Wilt Chamberlain",
    "person",
    "Statistical giant whose rivalry with Russell framed an era.",
    "Wilt Chamberlain scored 100 points in a game and led the league in ways no one else has, but his championship story is told against Bill Russell's Celtics."
);

entity(
    "magic-johnson",
    "Magic Johnson",
    "person",
    "Showtime Lakers point guard who revived the league with Bird.",
    "Magic Johnson led the Los Angeles Lakers' Showtime teams to five titles, a no-look rival to Larry Bird whose 1979 NCAA final and 1980s Finals packed the NBA."
);

entity(
    "larry-bird",
    "Larry Bird",
    "person",
    "Celtics forward who made the 1980s a two-coast argument.",
    "Larry Bird's Boston Celtics won three titles in the 1980s, a trash-talking counterpart to Magic Johnson that restored the Celtics–Lakers rivalry."
);

entity(
    "michael-jordan",
    "Michael Jordan",
    "person",
    "Bulls shooting guard of the first truly global dynasty.",
    "Michael Jordan led the Chicago Bulls to six NBA championships in the 1990s, two three-peats around a baseball retirement, and became the league's defining commercial face."
);

entity(
    "kobe-bryant",
    "Kobe Bryant",
    "person",
    "Lakers shooting guard who took the Jordan template into the 2000s.",
    "Kobe Bryant won five NBA titles with the Los Angeles Lakers — three beside Shaquille O'Neal, two later with Pau Gasol — and made the Mamba persona a second-generation Lakers myth."
);

entity(
    "shaquille-oneal",
    "Shaquille O'Neal",
    "person",
    "Dominant center of the three-peat Lakers.",
    "Shaquille O'Neal was the unguardable center of the 2000–02 Los Angeles Lakers, an MVP Finals force whose later Heat title added a third franchise to his ring count."
);

entity(
    "tim-duncan",
    "Tim Duncan",
    "person",
    "Spurs cornerstone of two decades of quiet contention.",
    "Tim Duncan, the Big Fundamental, won five NBA championships with the San Antonio Spurs and made Gregg Popovich's system the anti-spectacle dynasty."
);

entity(
    "lebron-james",
    "LeBron James",
    "person",
    "Heir whose titles ran through Miami, Cleveland, and the Lakers.",
    "LeBron James was the 2003 draft prize who won championships with the Miami Heat, Cleveland Cavaliers, and Los Angeles Lakers, the measuring stick of the post-Jordan era."
);

entity(
    "stephen-curry",
    "Stephen Curry",
    "person",
    "Warriors point guard who made the three-point shot the offense.",
    "Stephen Curry led the Golden State Warriors to multiple titles, two unanimous-adjacent MVP peaks, and a shooting revolution that rewrote spacing for the whole league."
);

/* ---------- Teams / factions ---------- */

entity(
    "boston-celtics",
    "Boston Celtics",
    "organization",
    "Green dynasty of Russell, Bird, and later banner hunts.",
    "The Boston Celtics are the NBA's most titled franchise, from Bill Russell's 1960s run through Larry Bird's 1980s and later Finals returns."
);

entity(
    "los-angeles-lakers",
    "Los Angeles Lakers",
    "organization",
    "Showtime, Shaq-and-Kobe, and LeBron's West chapter.",
    "The Los Angeles Lakers are the other half of the league's central rivalry: Magic's Showtime, Kobe and Shaq, Kobe's late titles, and LeBron James's 2020 championship."
);

entity(
    "chicago-bulls",
    "Chicago Bulls",
    "organization",
    "Jordan's 1990s franchise and the league's global advertisement.",
    "The Chicago Bulls of Michael Jordan, Scottie Pippen, and Phil Jackson won six titles in eight years and made the NBA a worldwide product."
);

entity(
    "golden-state-warriors",
    "Golden State Warriors",
    "organization",
    "Curry's shooting dynasty of the 2010s and after.",
    "The Golden State Warriors became the 2010s dynasty around Stephen Curry, Klay Thompson, Draymond Green, and later Kevin Durant, turning the Bay into a Finals habit."
);

entity(
    "miami-heat",
    "Miami Heat",
    "organization",
    "Pat Riley's franchise — Shaq, then the LeBron–Wade–Bosh Big Three.",
    "The Miami Heat won with Shaquille O'Neal and Dwyane Wade, then built the 2010s Big Three that took LeBron James to four straight Finals."
);

entity(
    "san-antonio-spurs",
    "San Antonio Spurs",
    "organization",
    "Duncan-era machine that won without a circus.",
    "The San Antonio Spurs won five titles around Tim Duncan, a draft-and-develop franchise that spanned the Jordan hangover through the LeBron years."
);

entity(
    "dream-team",
    "Dream Team",
    "organization",
    "1992 Olympic NBA all-stars who exported the league.",
    "The Dream Team was the 1992 U.S. Olympic squad of Jordan, Magic, Bird, and others — the first time NBA stars played the Games and sold the league abroad."
);

/* ---------- Events / places / objects / concepts ---------- */

entity(
    "nba-finals",
    "NBA Finals",
    "event",
    "June series that awards the Larry O'Brien Trophy.",
    "The NBA Finals are the championship series. Russell's Celtics, Jordan's Bulls, and the Celtics–Lakers meetings are the stories the league still indexes against."
);

entity(
    "nba-draft",
    "NBA draft",
    "event",
    "Annual entry draft that handed LeBron, Duncan, and the next era to teams.",
    "The NBA draft is how franchises are remade: Duncan to San Antonio, LeBron to Cleveland, and lottery mythology that feeds the next Finals."
);

entity(
    "nba-all-star-game",
    "NBA All-Star Game",
    "event",
    "Midseason exhibition that became a style showcase.",
    "The NBA All-Star Game is the midseason exhibition, a skills-and-dunks weekend that Stern used to market stars from Magic through Curry."
);

entity(
    "madison-square-garden",
    "Madison Square Garden",
    "place",
    "Manhattan arena billed as the world's most famous basketball house.",
    "Madison Square Garden is the Knicks' home and a neutral cathedral for big NBA nights — All-Star games, playoff atmospheres, and league events staged as theater."
);

entity(
    "boston-garden",
    "Boston Garden",
    "place",
    "Old parquet barn of Russell and Bird.",
    "Boston Garden was the Celtics' tight, dead-spot parquet home through Russell's titles and Bird's 1980s, retired when the franchise moved next door."
);

entity(
    "united-center",
    "United Center",
    "place",
    "West Side arena that inherited the Bulls dynasty's crowds.",
    "The United Center replaced Chicago Stadium as the Bulls' home late in Jordan's second three-peat and remains the house of that dynasty's banners."
);

entity(
    "larry-obrien-trophy",
    "Larry O'Brien Trophy",
    "object",
    "Silver basketball that is the NBA championship prize.",
    "The Larry O'Brien Championship Trophy is the cup raised after the Finals, named for a former commissioner and the object every dynasty is counted in."
);

entity(
    "bulls-dynasty",
    "Bulls dynasty",
    "concept",
    "Two three-peats that made Jordan the league's myth.",
    "The Bulls dynasty is the 1991–98 Chicago run: six titles, two three-peats, and the Flu Game / last-shot lore that still frames every later superteam."
);

entity(
    "celtics-lakers-rivalry",
    "Celtics–Lakers rivalry",
    "concept",
    "The league's central coast-to-coast argument.",
    "The Celtics–Lakers rivalry is the NBA's longest title argument: Russell against the Minneapolis-then-Los-Angeles Lakers, Bird against Magic, and later Finals rematches."
);

entity(
    "three-point-revolution",
    "Three-point revolution",
    "concept",
    "Spacing era Curry's Warriors made mandatory.",
    "The three-point revolution is the offensive shift that followed Stephen Curry's Warriors: more threes, more spacing, and a league that stopped treating the arc as a gimmick."
);

entity(
    "naismith-memorial-basketball-hall-of-fame",
    "Naismith Memorial Basketball Hall of Fame",
    "place",
    "Springfield shrine that inducts the league's canon.",
    "The Naismith Memorial Basketball Hall of Fame in Springfield, Massachusetts, is where Russell, Jordan, Magic, Bird, and later stars are formally placed in the sport's canon."
);

/* ---------- Relationships ---------- */

rel("david-stern", "nba", "leads", "David Stern was the commissioner who globalized the NBA.", 0.97, 0.95);
rel("adam-silver", "nba", "leads", "Adam Silver succeeded Stern as NBA commissioner.", 0.96, 0.93);
rel("adam-silver", "david-stern", "followed", "Adam Silver followed David Stern as commissioner in 2014.", 0.96, 0.93);

rel("bill-russell", "boston-celtics", "member_of", "Bill Russell was the center of the Boston Celtics dynasty.", 0.99, 0.98);
rel("larry-bird", "boston-celtics", "member_of", "Larry Bird led the 1980s Boston Celtics.", 0.98, 0.96);
rel("magic-johnson", "los-angeles-lakers", "member_of", "Magic Johnson ran the Showtime Los Angeles Lakers.", 0.98, 0.96);
rel("kobe-bryant", "los-angeles-lakers", "member_of", "Kobe Bryant spent his entire NBA career with the Lakers.", 0.99, 0.97);
rel("shaquille-oneal", "los-angeles-lakers", "member_of", "Shaquille O'Neal was the dominant center of the three-peat Lakers.", 0.96, 0.94);
rel("lebron-james", "los-angeles-lakers", "member_of", "LeBron James won a title in his Los Angeles Lakers chapter.", 0.95, 0.92);
rel("michael-jordan", "chicago-bulls", "member_of", "Michael Jordan was the face of the Chicago Bulls dynasty.", 0.99, 0.98);
rel("stephen-curry", "golden-state-warriors", "member_of", "Stephen Curry is the Golden State Warriors' shooting engine.", 0.99, 0.97);
rel("tim-duncan", "san-antonio-spurs", "member_of", "Tim Duncan was the cornerstone of the San Antonio Spurs.", 0.98, 0.96);
rel("wilt-chamberlain", "bill-russell", "opposed_by", "Wilt Chamberlain's statistical peak is measured against Russell's titles.", 0.96, 0.94);
rel("magic-johnson", "larry-bird", "opposed_by", "Magic Johnson and Larry Bird revived the NBA as paired rivals.", 0.98, 0.96);
rel("lebron-james", "miami-heat", "member_of", "LeBron James won two titles with the Miami Heat Big Three.", 0.95, 0.92);
rel("shaquille-oneal", "miami-heat", "member_of", "Shaquille O'Neal later won a title with the Miami Heat.", 0.93, 0.89);

rel("michael-jordan", "bulls-dynasty", "caused", "Michael Jordan's six titles are the Bulls dynasty.", 0.98, 0.97);
rel("bulls-dynasty", "chicago-bulls", "part_of", "The Bulls dynasty is the 1990s chapter of the Chicago Bulls.", 0.97, 0.95);
rel("bulls-dynasty", "united-center", "located_in", "The later Bulls dynasty banners hang at the United Center.", 0.94, 0.9);
rel("celtics-lakers-rivalry", "boston-celtics", "involved", "The Celtics half of the rivalry runs from Russell through Bird and after.", 0.97, 0.95);
rel("celtics-lakers-rivalry", "los-angeles-lakers", "involved", "The Lakers half of the rivalry runs from the Minneapolis move through Showtime and Kobe.", 0.97, 0.95);
rel("stephen-curry", "three-point-revolution", "caused", "Stephen Curry's Warriors made the three-point revolution league-wide.", 0.97, 0.95);
rel("three-point-revolution", "golden-state-warriors", "part_of", "The three-point revolution was proven on the Golden State Warriors.", 0.95, 0.92);

rel("bill-russell", "nba-finals", "involved", "Bill Russell's Celtics made the Finals a Boston habit.", 0.97, 0.94);
rel("michael-jordan", "nba-finals", "involved", "Michael Jordan went six-for-six in the NBA Finals.", 0.98, 0.96);
rel("lebron-james", "nba-finals", "involved", "LeBron James's career is counted in repeated NBA Finals trips.", 0.96, 0.93);
rel("stephen-curry", "nba-finals", "involved", "Stephen Curry's Warriors turned the Finals into a Bay Area series.", 0.95, 0.92);
rel("nba-finals", "larry-obrien-trophy", "uses", "The NBA Finals award the Larry O'Brien Trophy.", 0.99, 0.97);
rel("lebron-james", "nba-draft", "involved", "LeBron James was the 2003 draft prize that remade Cleveland, then the league.", 0.95, 0.92);
rel("tim-duncan", "nba-draft", "involved", "Tim Duncan's draft landing in San Antonio built two decades of contention.", 0.94, 0.9);
rel("michael-jordan", "dream-team", "member_of", "Michael Jordan starred on the 1992 Dream Team.", 0.96, 0.93);
rel("magic-johnson", "dream-team", "member_of", "Magic Johnson played on the 1992 Dream Team after HIV disclosure.", 0.95, 0.91);
rel("larry-bird", "dream-team", "member_of", "Larry Bird was a 1992 Dream Team forward in the twilight of his career.", 0.94, 0.9);

rel("boston-celtics", "boston-garden", "located_in", "The Celtics played their Russell and Bird titles in Boston Garden.", 0.96, 0.93);
rel("madison-square-garden", "nba", "connected_to", "Madison Square Garden is the NBA's most famous regular house.", 0.93, 0.89);
rel("david-stern", "dream-team", "produced", "Stern's office helped turn NBA stars loose on the 1992 Olympics.", 0.92, 0.88);
rel("naismith-memorial-basketball-hall-of-fame", "bill-russell", "contains", "The Hall of Fame canonizes Russell among the sport's first names.", 0.93, 0.89);

rel("nba-finals", "nba", "part_of", "The NBA Finals are the league's championship series.", 0.99, 0.98);
rel("nba-draft", "nba", "part_of", "The NBA draft is the league's annual entry auction.", 0.97, 0.94);
rel("nba-all-star-game", "nba", "part_of", "The All-Star Game is the NBA's midseason exhibition.", 0.95, 0.91);
rel("larry-obrien-trophy", "nba", "part_of", "The Larry O'Brien Trophy is the NBA championship prize.", 0.98, 0.96);
rel("boston-celtics", "nba", "part_of", "The Boston Celtics are the NBA's most titled franchise.", 0.97, 0.95);
rel("los-angeles-lakers", "nba", "part_of", "The Los Angeles Lakers are the other pole of the league's central rivalry.", 0.97, 0.95);
rel("chicago-bulls", "nba", "part_of", "The Chicago Bulls are the franchise of the 1990s global dynasty.", 0.96, 0.93);
rel("golden-state-warriors", "nba", "part_of", "The Golden State Warriors are the franchise of the shooting dynasty.", 0.96, 0.93);
rel("celtics-lakers-rivalry", "nba", "part_of", "The Celtics–Lakers rivalry is the NBA's longest title argument.", 0.96, 0.94);
rel("dream-team", "nba", "part_of", "The Dream Team was the NBA's Olympic export.", 0.94, 0.91);

module.exports = { entities, relationships };
