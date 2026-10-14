/*
 * Serial subject data — Koenig, Season 1 in Baltimore, and the true-crime podcast form.
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

/* ---------- Root / company / form ---------- */

entity(
    "serial-podcast",
    "Serial",
    "topic",
    "Sarah Koenig's season-long investigation that made the true-crime podcast a form.",
    "Serial is the This American Life spin-off Sarah Koenig and Julie Snyder launched in 2014: one case per season, starting with Adnan Syed and Hae Min Lee in Baltimore, produced by Serial Productions and later owned with the New York Times."
);

entity(
    "sarah-koenig",
    "Sarah Koenig",
    "person",
    "Host and reporter who narrates Serial from the tape and the doubt.",
    "Sarah Koenig is the host of Serial, a This American Life producer who spent a year on Adnan Syed's case, then later seasons, and whose first-person uncertainty became the show's method."
);

entity(
    "julie-snyder",
    "Julie Snyder",
    "person",
    "Co-creator and executive producer who shaped Serial beside Koenig.",
    "Julie Snyder is the longtime This American Life producer who co-created Serial with Sarah Koenig, edited the seasons, and helped build Serial Productions."
);

entity(
    "ira-glass",
    "Ira Glass",
    "person",
    "This American Life host who midwifed Serial out of that shop.",
    "Ira Glass is the host of This American Life, the weekly show whose staff, audience, and narrative style Serial came from, and whose network first distributed Season 1."
);

entity(
    "serial-productions",
    "Serial Productions",
    "organization",
    "Company that makes Serial and later New York Times audio collaborations.",
    "Serial Productions is the shop Koenig and Snyder built around the show, later in partnership with the New York Times, still the banner on Serial seasons and spin-off investigations."
);

entity(
    "this-american-life",
    "This American Life",
    "work",
    "Chicago public-radio magazine that incubated Serial and Ira Glass's style.",
    "This American Life is the WBEZ-born weekly program whose reported-essay form, Ira Glass hosting, and 2014 preview episode launched Serial as a spin-off rather than a one-off story."
);

entity(
    "wbez",
    "WBEZ",
    "organization",
    "Chicago public-radio station that housed This American Life and early Serial.",
    "WBEZ is the Chicago station that produced This American Life for years and was the institutional home from which Serial's first season was made and released."
);

entity(
    "the-new-york-times",
    "The New York Times",
    "organization",
    "Publisher that later partnered with Serial Productions on audio.",
    "The New York Times bought into Serial Productions after Season 1's breakout, folding Koenig and Snyder's company into its audio division while Sequential seasons kept the Serial name."
);

entity(
    "true-crime-podcast-form",
    "true-crime podcast form",
    "concept",
    "Season-long, serialized investigation that Serial made a template.",
    "The true-crime podcast form — one case, weekly chapters, a host who doubts out loud — is what Serial's 2014 season turned from a radio experiment into a binge-listen genre others copied."
);

entity(
    "serial-2014-debut",
    "Serial Season 1 debut",
    "event",
    "October 2014 launch that made a podcast a mass weekly appointment.",
    "The 2014 debut of Serial Season 1, previewed on This American Life, became a pop-culture event: millions of downloads, water-cooler arguments about Adnan, and a new audio chart category."
);

/* ---------- Season 1 (Baltimore) ---------- */

entity(
    "serial-season-1",
    "Serial Season 1",
    "work",
    "2014 investigation of Hae Min Lee's murder and Adnan Syed's conviction.",
    "Season 1 is the Baltimore high-school case: Hae Min Lee disappeared in 1999, Adnan Syed was convicted, and Sarah Koenig spent twelve episodes on the alibi, the cell records, and whether the jury got it right."
);

entity(
    "adnan-syed",
    "Adnan Syed",
    "person",
    "Baltimore man convicted of killing Hae Min Lee; Season 1's subject.",
    "Adnan Syed is the Woodlawn graduate Koenig interviews from prison, convicted of Hae Min Lee's 1999 murder, whose case Serial made famous and whose conviction was later vacated, then fought over again."
);

entity(
    "hae-min-lee",
    "Hae Min Lee",
    "person",
    "Woodlawn student whose 1999 murder is the crime Season 1 investigates.",
    "Hae Min Lee was an eighteen-year-old Woodlawn High student and athlete, Adnan Syed's ex-girlfriend, whose death in Baltimore is the absence Season 1 keeps trying to fill."
);

entity(
    "jay-wilds",
    "Jay Wilds",
    "person",
    "State's key witness who said he helped Adnan bury Hae.",
    "Jay Wilds is the acquaintance whose changing story — that Adnan showed him Hae's body and that they buried her in Leakin Park — became the prosecution spine Koenig keeps testing."
);

entity(
    "asia-mcclain",
    "Asia McClain",
    "person",
    "Classmate who said she saw Adnan in the library at the time of the crime.",
    "Asia McClain is the Woodlawn classmate whose letters claimed an alibi at the library, later a central figure in Adnan's appeals and in Serial's argument that the defense missed a witness."
);

entity(
    "rabia-chaudry",
    "Rabia Chaudry",
    "person",
    "Family advocate who brought Adnan's case to Koenig.",
    "Rabia Chaudry is the lawyer and family friend who asked Sarah Koenig to look at Adnan Syed's conviction, opening Season 1, and later hosted the Undisclosed podcast."
);

entity(
    "baltimore",
    "Baltimore",
    "place",
    "City of Woodlawn, Leakin Park, and the Season 1 crime and trial.",
    "Baltimore is the setting of Serial Season 1: a 1999 disappearance, a trial in city court, a park where Hae Min Lee was found, and a community Koenig keeps driving back to."
);

entity(
    "woodlawn-high-school",
    "Woodlawn High School",
    "place",
    "Baltimore County school Adnan and Hae attended.",
    "Woodlawn High School is the campus where Adnan Syed and Hae Min Lee were students, the Best Buy parking-lot lore begins, and Season 1's teenage map is drawn."
);

entity(
    "leakin-park",
    "Leakin Park",
    "place",
    "West Baltimore park where Hae Min Lee's body was found.",
    "Leakin Park is the wooded Baltimore park in which Hae Min Lee was found in February 1999, the burial site Jay Wilds described and Koenig walked for tape."
);

entity(
    "cell-tower-evidence",
    "cell-tower evidence",
    "concept",
    "Incoming-call location records the state used to place Adnan.",
    "The cell-tower evidence is the AT&T location data from Adnan's phone that the state treated as a map of the crime, and that later experts and Serial both argued was over-read."
);

entity(
    "adnan-conviction-vacated",
    "Adnan Syed conviction vacated",
    "event",
    "2022 Baltimore court decision that vacated Syed's conviction, later appealed.",
    "In 2022 a Baltimore judge vacated Adnan Syed's conviction after a state review, a post-Serial legal turn that was then appealed and left the case in a long public afterlife."
);

/* ---------- Later seasons / afterlife ---------- */

entity(
    "serial-season-2",
    "Serial Season 2",
    "work",
    "2015–16 season on Bowe Bergdahl's departure from his Afghanistan post.",
    "Season 2 leaves Baltimore for Bowe Bergdahl: a U.S. soldier who walked off a base in Afghanistan, a court-martial, and Koenig's attempt to apply the Season 1 method to a national-security story."
);

entity(
    "bowe-bergdahl",
    "Bowe Bergdahl",
    "person",
    "U.S. soldier whose leaving his post is the subject of Season 2.",
    "Bowe Bergdahl is the Army sergeant who walked off his Afghanistan post in 2009, was held by the Taliban, and became the case Serial tried to understand after Adnan Syed."
);

entity(
    "serial-season-3",
    "Serial Season 3",
    "work",
    "2018 season inside a Cleveland courthouse, a system more than a single defendant.",
    "Season 3 plants Koenig and the team in the Justice Center in Cleveland, following ordinary dockets instead of one famous name — Serial's attempt to scale the form from a person to a courthouse."
);

entity(
    "cleveland-justice-center",
    "Cuyahoga County Justice Center",
    "place",
    "Cleveland courthouse that is the setting of Season 3.",
    "The Cuyahoga County Justice Center is the downtown Cleveland complex Serial Season 3 treats as its beat: judges, defendants, and a week's worth of ordinary criminal court."
);

entity(
    "undisclosed-podcast",
    "Undisclosed",
    "work",
    "Rabia Chaudry's later podcast that kept investigating Adnan's case.",
    "Undisclosed is the podcast Rabia Chaudry launched after Serial, a more advocacy-minded second look at Adnan Syed and then other cases, born directly from Season 1's audience."
);

entity(
    "koenig-narration",
    "Koenig narration",
    "concept",
    "First-person host voice that admits what the tape cannot prove.",
    "Koenig narration is Serial's signature: the host on the phone, in the car, and in the edit, saying she does not know, which became the ethical stance later true-crime shows imitated or rejected."
);

/* ---------- Relationships ---------- */

rel("sarah-koenig", "serial-podcast", "created", "Sarah Koenig hosts and reports Serial.", 0.99, 0.99);
rel("julie-snyder", "serial-podcast", "created", "Julie Snyder co-created and produces Serial.", 0.98, 0.96);
rel("sarah-koenig", "serial-productions", "created", "Koenig built Serial Productions around the show.", 0.96, 0.93);
rel("julie-snyder", "serial-productions", "created", "Snyder built Serial Productions around the show.", 0.96, 0.93);
rel("serial-productions", "serial-podcast", "produced", "Serial Productions produces Serial.", 0.98, 0.96);
rel("this-american-life", "serial-podcast", "produced", "This American Life incubated and first distributed Serial.", 0.97, 0.95);
rel("ira-glass", "this-american-life", "leads", "Ira Glass hosts This American Life.", 0.98, 0.96);
rel("ira-glass", "serial-podcast", "produced", "Ira Glass's shop midwifed Serial as a This American Life spin-off.", 0.95, 0.92);
rel("wbez", "this-american-life", "produced", "WBEZ was the longtime station home of This American Life.", 0.95, 0.92);
rel("the-new-york-times", "serial-productions", "contains", "The New York Times later partnered with and housed Serial Productions.", 0.94, 0.9);

rel("serial-season-1", "serial-podcast", "part_of", "Season 1 is Serial's first and defining season.", 0.99, 0.98);
rel("serial-season-2", "serial-podcast", "part_of", "Season 2 is Serial's Bowe Bergdahl season.", 0.96, 0.93);
rel("serial-season-3", "serial-podcast", "part_of", "Season 3 is Serial's Cleveland courthouse season.", 0.96, 0.93);
rel("serial-season-1", "serial-season-2", "preceded", "Season 1 came before the Bergdahl season.", 0.95, 0.92);
rel("serial-season-2", "serial-season-3", "preceded", "Season 2 came before the Cleveland courthouse season.", 0.95, 0.92);
rel("serial-2014-debut", "serial-season-1", "caused", "The 2014 debut launched Season 1 as a mass weekly listen.", 0.97, 0.95);
rel("serial-2014-debut", "true-crime-podcast-form", "caused", "Serial's 2014 debut established the season-long true-crime podcast form.", 0.96, 0.94);
rel("serial-season-1", "true-crime-podcast-form", "created", "Season 1 became the template for the true-crime podcast form.", 0.96, 0.93);
rel("sarah-koenig", "koenig-narration", "created", "Koenig's first-person doubt is Serial's narrative method.", 0.96, 0.93);
rel("koenig-narration", "serial-season-1", "part_of", "Koenig's narration is the voice of Season 1.", 0.95, 0.92);
rel("this-american-life", "true-crime-podcast-form", "inspired", "This American Life's reported-essay style shaped Serial's true-crime form.", 0.93, 0.89);

rel("serial-season-1", "baltimore", "occurred_at", "Season 1 investigates a 1999 murder and trial in Baltimore.", 0.98, 0.96);
rel("adnan-syed", "serial-season-1", "involved", "Adnan Syed is the convicted man Season 1 investigates.", 0.99, 0.97);
rel("hae-min-lee", "serial-season-1", "involved", "Hae Min Lee is the murder victim at the center of Season 1.", 0.99, 0.97);
rel("sarah-koenig", "serial-season-1", "produced", "Sarah Koenig reported and hosted Season 1.", 0.98, 0.96);
rel("jay-wilds", "serial-season-1", "involved", "Jay Wilds is the state's key witness in the Season 1 case.", 0.96, 0.93);
rel("asia-mcclain", "serial-season-1", "involved", "Asia McClain is the classmate whose library alibi Season 1 examines.", 0.95, 0.92);
rel("rabia-chaudry", "serial-season-1", "caused", "Rabia Chaudry brought Adnan's case to Koenig and opened Season 1.", 0.95, 0.92);
rel("adnan-syed", "hae-min-lee", "connected_to", "Adnan Syed was Hae Min Lee's ex-boyfriend and the man convicted of her murder.", 0.97, 0.94);
rel("adnan-syed", "baltimore", "located_in", "Adnan Syed's case was tried in Baltimore.", 0.95, 0.92);
rel("hae-min-lee", "woodlawn-high-school", "located_in", "Hae Min Lee was a student at Woodlawn High School.", 0.96, 0.93);
rel("adnan-syed", "woodlawn-high-school", "located_in", "Adnan Syed was a student at Woodlawn High School.", 0.96, 0.93);
rel("woodlawn-high-school", "baltimore", "located_in", "Woodlawn High School is in the Baltimore area.", 0.95, 0.91);
rel("leakin-park", "baltimore", "located_in", "Leakin Park is in west Baltimore.", 0.96, 0.93);
rel("hae-min-lee", "leakin-park", "located_in", "Hae Min Lee's body was found in Leakin Park.", 0.96, 0.93);
rel("jay-wilds", "adnan-syed", "connected_to", "Jay Wilds testified that he helped Adnan after Hae's death.", 0.95, 0.91);
rel("asia-mcclain", "adnan-syed", "supports", "Asia McClain's account was offered as an alibi for Adnan Syed.", 0.94, 0.9);
rel("cell-tower-evidence", "serial-season-1", "part_of", "Cell-tower records are a central piece of evidence Season 1 re-reads.", 0.95, 0.92);
rel("cell-tower-evidence", "adnan-syed", "connected_to", "The state used cell-tower data to place Adnan Syed.", 0.94, 0.9);
rel("adnan-conviction-vacated", "adnan-syed", "involved", "A 2022 Baltimore ruling vacated Adnan Syed's conviction.", 0.95, 0.92);
rel("adnan-conviction-vacated", "serial-season-1", "followed", "The vacatur came years after Serial Season 1 made the case famous.", 0.93, 0.89);

rel("bowe-bergdahl", "serial-season-2", "involved", "Bowe Bergdahl is the soldier Season 2 investigates.", 0.97, 0.95);
rel("serial-season-2", "sarah-koenig", "produced", "Koenig hosted Season 2 on Bergdahl after Baltimore.", 0.94, 0.9);
rel("serial-season-3", "cleveland-justice-center", "occurred_at", "Season 3 is reported from the Cuyahoga County Justice Center.", 0.96, 0.93);
rel("rabia-chaudry", "undisclosed-podcast", "created", "Rabia Chaudry launched Undisclosed after Serial.", 0.95, 0.91);
rel("undisclosed-podcast", "serial-season-1", "followed", "Undisclosed followed Season 1 as a second investigation of Adnan's case.", 0.94, 0.9);
rel("serial-season-1", "undisclosed-podcast", "inspired", "Season 1's audience and loose ends inspired Undisclosed.", 0.93, 0.89);

module.exports = { entities, relationships };
