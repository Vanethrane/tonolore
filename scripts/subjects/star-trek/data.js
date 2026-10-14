/*
 * Star Trek subject data — Roddenberry's Federation, crews, and later generations.
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
    "star-trek",
    "Star Trek",
    "topic",
    "Roddenberry's Federation, starship crews, and the optimism that kept getting remade.",
    "Star Trek is Gene Roddenberry's science-fiction cycle of Starfleet crews, the United Federation of Planets, and first-contact ethics. It runs from The Original Series through The Next Generation, Voyager, the films — including First Contact — and later series that still argue with the Prime Directive."
);

entity(
    "gene-roddenberry",
    "Gene Roddenberry",
    "person",
    "Creator of Star Trek.",
    "Gene Roddenberry created Star Trek, selling a wagon-train-to-the-stars pitch that became TOS, then returning as a TNG producer whose Federation idealism still frames the franchise.",
    "documented"
);

entity(
    "william-shatner",
    "William Shatner",
    "person",
    "Actor who originated Captain James T. Kirk.",
    "William Shatner played Kirk across TOS and the original-cast films, defining the swaggering command style later captains answer to.",
    "documented"
);

entity(
    "leonard-nimoy",
    "Leonard Nimoy",
    "person",
    "Actor who originated Spock.",
    "Leonard Nimoy played Spock, inventing the Vulcan stillness, the salute, and the half-human argument at the franchise's center.",
    "documented"
);

/* ---------- Works ---------- */

entity(
    "star-trek-tos",
    "Star Trek: The Original Series",
    "work",
    "1966–69 NBC series with Kirk, Spock, and Uhura.",
    "The Original Series follows the Enterprise under Kirk as Starfleet's Cold War-era optimism — Spock, McCoy, Uhura, and the rest — meets new worlds each week.",
    "documented"
);

entity(
    "star-trek-tng",
    "Star Trek: The Next Generation",
    "work",
    "1987–94 series with Picard on the Enterprise-D.",
    "The Next Generation moves the Federation a century forward: Picard, Data, Worf, and a more diplomatic Enterprise that still finds war with the Borg.",
    "documented"
);

entity(
    "star-trek-voyager",
    "Star Trek: Voyager",
    "work",
    "1995–2001 series with Janeway stranded in the Delta Quadrant.",
    "Voyager follows Captain Janeway and a mixed Starfleet/Maquis crew trying to get home from the Delta Quadrant, later with Seven of Nine.",
    "documented"
);

entity(
    "star-trek-first-contact",
    "Star Trek: First Contact",
    "work",
    "1996 TNG film about the Borg and Cochrane's warp flight.",
    "First Contact sends the Enterprise-E after a Borg sphere into Earth's past, where Picard faces Locutus's trauma and humanity's first warp flight is protected.",
    "documented"
);

/* ---------- Groups / ships / places ---------- */

entity(
    "united-federation-of-planets",
    "United Federation of Planets",
    "organization",
    "Interstellar union Starfleet serves.",
    "The United Federation of Planets is the multi-world government of humans, Vulcans, and later members, the political home of Starfleet's exploratory charter."
);

entity(
    "starfleet",
    "Starfleet",
    "organization",
    "Exploration and defense service of the Federation.",
    "Starfleet is the Federation's starship service — captains, science officers, and the Prime Directive — operating ships like Enterprise and Voyager."
);

entity(
    "enterprise-crew",
    "Enterprise crew",
    "organization",
    "Kirk's TOS command circle.",
    "The Enterprise crew is the original command family: Kirk, Spock, McCoy, Uhura, Scott, Sulu, and Chekov on the Constitution-class ship."
);

entity(
    "enterprise-d-crew",
    "Enterprise-D crew",
    "organization",
    "Picard's TNG command circle.",
    "The Enterprise-D crew is Picard's next-generation family: Riker, Data, Worf, Crusher, Troi, and La Forge on the Galaxy-class flagship."
);

entity(
    "voyager-crew",
    "Voyager crew",
    "organization",
    "Janeway's stranded Delta Quadrant company.",
    "The Voyager crew mixes Starfleet and Maquis under Janeway — Paris, Torres, Tuvok, Kim, the Doctor, and later Seven — seventy thousand light years from home."
);

entity(
    "klingon-empire",
    "Klingon Empire",
    "organization",
    "Warrior power that shifts from foe to uneasy ally.",
    "The Klingon Empire is the honor-bound rival of early Starfleet, later a Federation ally whose culture Worf carries onto the Enterprise-D."
);

entity(
    "borg-collective",
    "Borg Collective",
    "organization",
    "Hive that assimilates ships, worlds, and Picard.",
    "The Borg Collective is the cybernetic hive that cubes across the galaxy, assimilating species and making Picard into Locutus."
);

entity(
    "romulan-star-empire",
    "Romulan Star Empire",
    "organization",
    "Secretive offshoot of Vulcan, cloaks and the Neutral Zone.",
    "The Romulan Star Empire is the cloaked rival across the Neutral Zone, a Vulcan cousin civilization that keeps Starfleet guessing."
);

entity(
    "uss-enterprise",
    "USS Enterprise",
    "object",
    "Starfleet's most storied name — NCC-1701 and her heirs.",
    "The USS Enterprise is the ship-name that carries Kirk's TOS vessel and later Picard's Enterprise-D and -E as the franchise's moving hometown."
);

entity(
    "uss-voyager",
    "USS Voyager",
    "object",
    "Intrepid-class ship stranded in the Delta Quadrant.",
    "USS Voyager is Janeway's ship, thrown across the galaxy in the pilot and forced to become a long-haul home."
);

entity(
    "vulcan",
    "Vulcan",
    "place",
    "Desert homeworld of logic, Surak, and Spock.",
    "Vulcan is the arid world of the Vulcan people, whose logic, mind-melds, and break from emotion shape Spock and the Federation's early peace."
);

entity(
    "earth",
    "Earth",
    "place",
    "Human homeworld and Starfleet's political center.",
    "Earth is humanity's world, home of Starfleet Headquarters and the First Contact flight the Borg try to erase."
);

/* ---------- Characters / concepts ---------- */

entity(
    "james-t-kirk",
    "James T. Kirk",
    "person",
    "Captain of the Enterprise in The Original Series.",
    "James T. Kirk is the Iowa-born captain whose instinct, bluff, and loyalty to Spock and McCoy set the first command style of Starfleet on screen."
);

entity(
    "spock",
    "Spock",
    "person",
    "Vulcan science officer and first officer.",
    "Spock is the half-Vulcan science officer whose logic, friendship with Kirk, and struggle with emotion are the franchise's longest argument."
);

entity(
    "nyota-uhura",
    "Nyota Uhura",
    "person",
    "Communications officer of the TOS Enterprise.",
    "Nyota Uhura is the communications officer whose bridge presence, linguistics, and later expanded first name made her a lasting Starfleet figure."
);

entity(
    "leonard-mccoy",
    "Leonard McCoy",
    "person",
    "Ship's doctor and Kirk's human counterweight to Spock.",
    "Leonard 'Bones' McCoy is the Enterprise surgeon who argues medicine and feeling against Spock's logic from the first season on."
);

entity(
    "montgomery-scott",
    "Montgomery Scott",
    "person",
    "Chief engineer who keeps the Enterprise flying.",
    "Montgomery Scott is the miracle-working engineer of the TOS Enterprise, the man who needs more time and still delivers warp power."
);

entity(
    "jean-luc-picard",
    "Jean-Luc Picard",
    "person",
    "Captain of the Enterprise-D and -E.",
    "Jean-Luc Picard is the diplomat-archaeologist captain of TNG, whose tea, Shakespeare, and Borg trauma define a later Starfleet ideal."
);

entity(
    "data",
    "Data",
    "person",
    "Android operations officer chasing humanity.",
    "Data is the Soong-type android of the Enterprise-D, a crew member whose quest to understand emotion sits beside Picard's ethics."
);

entity(
    "worf",
    "Worf",
    "person",
    "Klingon Starfleet officer of the Enterprise-D.",
    "Worf is the Klingon raised among humans who serves as TNG's security chief and carries the Empire's honor onto a Federation bridge."
);

entity(
    "kathryn-janeway",
    "Kathryn Janeway",
    "person",
    "Captain who gets Voyager home.",
    "Kathryn Janeway is the science-minded captain who holds a stranded crew together in the Delta Quadrant and treats the ship as a Starfleet vessel anyway."
);

entity(
    "seven-of-nine",
    "Seven of Nine",
    "person",
    "Liberated Borg who becomes Voyager's hardest student of humanity.",
    "Seven of Nine is the Borg drone Janeway severs from the Collective, then the crew member who relearns personhood in the Delta Quadrant."
);

entity(
    "prime-directive",
    "Prime Directive",
    "concept",
    "General Order 1 — non-interference with developing worlds.",
    "The Prime Directive is Starfleet's highest written ethic: do not interfere with the natural development of pre-warp civilizations, even when captains break it."
);

entity(
    "locutus-of-borg",
    "Locutus of Borg",
    "concept",
    "Picard's assimilated voice in the Collective.",
    "Locutus of Borg is the identity the Collective forces on Picard, the wound First Contact and later stories keep reopening."
);

entity(
    "warp-drive",
    "Warp drive",
    "technology",
    "Faster-than-light engine that makes Starfleet possible.",
    "Warp drive is the technology Cochrane's flight proves, the reason first contact happens and the reason starships can treat the galaxy as a neighborhood."
);

/* ---------- Relationships ---------- */

rel("gene-roddenberry", "star-trek", "created", "Gene Roddenberry created Star Trek.", 0.99, 0.99);
rel("gene-roddenberry", "star-trek-tos", "created", "Roddenberry created The Original Series.", 0.99, 0.98);
rel("gene-roddenberry", "star-trek-tng", "produced", "Roddenberry launched The Next Generation as executive producer.", 0.96, 0.93);
rel("william-shatner", "james-t-kirk", "involved", "William Shatner originated Captain Kirk.", 0.99, 0.97);
rel("leonard-nimoy", "spock", "involved", "Leonard Nimoy originated Spock.", 0.99, 0.97);

rel("star-trek-tos", "star-trek", "part_of", "The Original Series is the first Star Trek weekly series.", 0.99, 0.98);
rel("star-trek-tng", "star-trek", "part_of", "The Next Generation is the 24th-century weekly series.", 0.98, 0.96);
rel("star-trek-voyager", "star-trek", "part_of", "Voyager is the Delta Quadrant weekly series.", 0.97, 0.94);
rel("star-trek-first-contact", "star-trek", "part_of", "First Contact is the 1996 TNG feature film.", 0.97, 0.94);
rel("star-trek-tos", "star-trek-tng", "followed", "The Next Generation follows a century after TOS.", 0.95, 0.91);
rel("star-trek-tng", "star-trek-first-contact", "followed", "First Contact continues the TNG crew on film.", 0.96, 0.93);

rel("star-trek-tos", "james-t-kirk", "involved", "TOS is Kirk's command of the Enterprise.", 0.99, 0.97);
rel("star-trek-tos", "spock", "involved", "TOS is the series that makes Spock a cultural fixture.", 0.99, 0.97);
rel("star-trek-tos", "nyota-uhura", "involved", "Uhura is the TOS communications officer.", 0.97, 0.94);
rel("star-trek-tng", "jean-luc-picard", "involved", "TNG is Picard's command of the Enterprise-D.", 0.99, 0.97);
rel("star-trek-tng", "data", "involved", "Data is the android officer of TNG.", 0.97, 0.94);
rel("star-trek-voyager", "kathryn-janeway", "involved", "Voyager is Janeway's long way home.", 0.98, 0.96);
rel("star-trek-first-contact", "jean-luc-picard", "involved", "First Contact is Picard's Borg film.", 0.97, 0.94);
rel("star-trek-first-contact", "borg-collective", "involved", "First Contact is a Borg assault on Earth's past.", 0.97, 0.94);

rel("james-t-kirk", "enterprise-crew", "leads", "Kirk captains the TOS Enterprise crew.", 0.99, 0.97);
rel("spock", "enterprise-crew", "member_of", "Spock is first officer of the TOS Enterprise crew.", 0.99, 0.97);
rel("nyota-uhura", "enterprise-crew", "member_of", "Uhura is communications officer of the TOS crew.", 0.97, 0.94);
rel("leonard-mccoy", "enterprise-crew", "member_of", "McCoy is chief medical officer of the TOS crew.", 0.97, 0.94);
rel("montgomery-scott", "enterprise-crew", "member_of", "Scott is chief engineer of the TOS crew.", 0.96, 0.93);
rel("jean-luc-picard", "enterprise-d-crew", "leads", "Picard captains the Enterprise-D crew.", 0.99, 0.97);
rel("data", "enterprise-d-crew", "member_of", "Data is operations officer of the Enterprise-D crew.", 0.97, 0.94);
rel("worf", "enterprise-d-crew", "member_of", "Worf is security chief of the Enterprise-D crew.", 0.97, 0.94);
rel("kathryn-janeway", "voyager-crew", "leads", "Janeway captains the Voyager crew.", 0.99, 0.97);
rel("seven-of-nine", "voyager-crew", "member_of", "Seven of Nine becomes part of the Voyager crew.", 0.96, 0.93);

rel("enterprise-crew", "starfleet", "part_of", "The TOS Enterprise crew serves Starfleet.", 0.98, 0.96);
rel("enterprise-d-crew", "starfleet", "part_of", "The Enterprise-D crew serves Starfleet.", 0.98, 0.96);
rel("voyager-crew", "starfleet", "part_of", "Voyager remains a Starfleet crew in the Delta Quadrant.", 0.97, 0.94);
rel("starfleet", "united-federation-of-planets", "part_of", "Starfleet is the service arm of the Federation.", 0.98, 0.96);
rel("starfleet", "prime-directive", "uses", "Starfleet is bound by the Prime Directive.", 0.96, 0.93);
rel("uss-enterprise", "starfleet", "part_of", "The Enterprise is a Starfleet ship.", 0.97, 0.94);
rel("uss-voyager", "starfleet", "part_of", "Voyager is a Starfleet Intrepid-class ship.", 0.96, 0.93);
rel("enterprise-crew", "uss-enterprise", "located_in", "Kirk's crew lives aboard the Enterprise.", 0.97, 0.94);
rel("enterprise-d-crew", "uss-enterprise", "located_in", "Picard's crew serves aboard later Enterprises.", 0.96, 0.93);
rel("voyager-crew", "uss-voyager", "located_in", "Janeway's crew is stranded aboard Voyager.", 0.97, 0.94);

rel("spock", "vulcan", "located_in", "Spock is a son of Vulcan.", 0.97, 0.94);
rel("worf", "klingon-empire", "member_of", "Worf is a Klingon who also serves Starfleet.", 0.96, 0.93);
rel("starfleet", "klingon-empire", "opposed_by", "Early Starfleet treats the Klingon Empire as its great rival.", 0.94, 0.9);
rel("jean-luc-picard", "borg-collective", "opposed_by", "Picard is assimilated and later hunts the Borg.", 0.97, 0.94);
rel("locutus-of-borg", "jean-luc-picard", "connected_to", "Locutus is the Borg name forced on Picard.", 0.98, 0.96);
rel("locutus-of-borg", "borg-collective", "part_of", "Locutus speaks as a voice of the Collective.", 0.97, 0.94);
rel("seven-of-nine", "borg-collective", "member_of", "Seven was a drone of the Borg Collective.", 0.96, 0.93);
rel("star-trek-first-contact", "earth", "occurred_at", "First Contact is fought over Earth's warp-flight past.", 0.96, 0.93);
rel("star-trek-first-contact", "warp-drive", "involved", "First Contact protects Cochrane's first warp flight.", 0.96, 0.93);
rel("united-federation-of-planets", "earth", "located_in", "The Federation's human capital sits on Earth.", 0.94, 0.9);
rel("romulan-star-empire", "united-federation-of-planets", "opposed_by", "Romulans face the Federation across the Neutral Zone.", 0.94, 0.9);
rel("james-t-kirk", "spock", "supports", "Kirk's command is built on his bond with Spock.", 0.96, 0.93);
rel("leonard-mccoy", "spock", "opposed_by", "McCoy argues feeling against Spock's logic.", 0.93, 0.89);

module.exports = { entities, relationships };
