/*
 * Alien subject data — Ridley Scott's xenomorph cycle and its later prequels.
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
    "alien-franchise",
    "Alien",
    "topic",
    "Xenomorphs, Weyland-Yutani, and space-horror design that redefined the genre.",
    "Alien is the science-fiction horror cycle that begins with Ridley Scott's 1979 film: a commercial crew, a company that wants the organism, and a perfect xenomorph designed with H. R. Giger. Later entries add Colonial Marines, a Queen, and the Prometheus/Covenant prequel path."
);

entity(
    "ridley-scott",
    "Ridley Scott",
    "person",
    "Director of Alien, Prometheus, and Alien: Covenant.",
    "Ridley Scott directed Alien (1979), then returned decades later with Prometheus and Alien: Covenant to extend the Engineers and David chapters.",
    "documented"
);

entity(
    "james-cameron",
    "James Cameron",
    "person",
    "Director of Aliens, the 1986 marine-action sequel.",
    "James Cameron wrote and directed Aliens, turning the haunted-ship horror into a Colonial Marine siege with Newt, Hicks, Bishop, and the Queen.",
    "documented"
);

entity(
    "dan-obannon",
    "Dan O'Bannon",
    "person",
    "Screenwriter of Alien (1979).",
    "Dan O'Bannon wrote the Alien screenplay from earlier Star Beast drafts, setting the Nostromo, the facehugger cycle, and the company-as-villain turn.",
    "documented"
);

entity(
    "hr-giger",
    "H. R. Giger",
    "person",
    "Artist who designed the xenomorph and the derelict.",
    "H. R. Giger designed the xenomorph, the Space Jockey derelict, and the biomechanical nightmare that made Alien's creature unique.",
    "documented"
);

entity(
    "sigourney-weaver",
    "Sigourney Weaver",
    "person",
    "Actress who originated Ellen Ripley.",
    "Sigourney Weaver played Ellen Ripley from Alien through later sequels, making the warrant officer the franchise's human center.",
    "documented"
);

/* ---------- Works ---------- */

entity(
    "alien-1979",
    "Alien (1979)",
    "work",
    "Scott's haunted-house film on the Nostromo.",
    "Alien (1979) follows the Nostromo crew after a signal on LV-426 brings a facehugger aboard, and Ripley becomes the last survivor against the xenomorph.",
    "documented"
);

entity(
    "aliens-1986",
    "Aliens",
    "work",
    "Cameron's Colonial Marine sequel with Newt and the Queen.",
    "Aliens sends Ripley back to LV-426 with Colonial Marines, Bishop, and a hive that produces the Queen — and a child survivor named Newt.",
    "documented"
);

entity(
    "prometheus",
    "Prometheus",
    "work",
    "2012 prequel about Engineers, David, and the company.",
    "Prometheus follows a Weyland expedition toward the Engineers and the bioweapon path that later feeds Alien: Covenant.",
    "documented"
);

entity(
    "alien-covenant",
    "Alien: Covenant",
    "work",
    "Scott's 2017 bridge from Prometheus toward the xenomorph.",
    "Alien: Covenant follows the colony ship Covenant into David's experiments, tightening the prequel line toward the classic xenomorph.",
    "documented"
);

/* ---------- Groups / places / ships ---------- */

entity(
    "weyland-yutani",
    "Weyland-Yutani",
    "organization",
    "The Company that wants the organism as a weapon.",
    "Weyland-Yutani is the corporation that owns the Nostromo's mission, plants Ash, and treats human crews as expendable next to a xenomorph specimen."
);

entity(
    "nostromo-crew",
    "Nostromo crew",
    "organization",
    "Commercial towing crew that first meets the xenomorph.",
    "The Nostromo crew — Dallas, Ripley, Kane, Lambert, Parker, Brett, and Ash — is the first human circle broken by the facehugger and the grown xenomorph."
);

entity(
    "colonial-marines",
    "Colonial Marines",
    "organization",
    "Sulaco unit sent to LV-426 in Aliens.",
    "The Colonial Marines are the armed unit Hicks, Hudson, Vasquez, and the others belong to when Ripley returns to the colony and the hive."
);

entity(
    "engineers",
    "Engineers",
    "organization",
    "Pale giant species tied to human origin and the pathogen.",
    "The Engineers are the towering beings of Prometheus, creators or gardeners whose bioweapon black goo sits upstream of the xenomorph myth."
);

entity(
    "lv-426",
    "LV-426",
    "place",
    "Acheron — moon of the derelict and Hadley's Hope.",
    "LV-426 is the barren moon where the Nostromo finds the derelict, and where Hadley's Hope later falls to a hive before Aliens arrives."
);

entity(
    "nostromo",
    "USCSS Nostromo",
    "object",
    "Commercial towing vessel of the 1979 film.",
    "The Nostromo is the locked industrial ship whose ducts, vents, and Jones the cat make Alien a haunted house in space."
);

entity(
    "sulaco",
    "USS Sulaco",
    "object",
    "Marine dropship carrier of Aliens.",
    "The Sulaco carries Ripley and the Colonial Marines to LV-426 and becomes the last sealed stage of the Queen's pursuit."
);

/* ---------- Characters / organisms ---------- */

entity(
    "ellen-ripley",
    "Ellen Ripley",
    "person",
    "Warrant officer who survives the Nostromo and returns in Aliens.",
    "Ellen Ripley is the Nostromo warrant officer who insists on quarantine, outlasts the xenomorph, and later leads the fight for Newt against the Queen."
);

entity(
    "dallas",
    "Dallas",
    "person",
    "Nostromo captain who enters the ducts.",
    "Dallas is the Nostromo's captain, the one who follows company orders to the derelict and later crawls the air shafts after the creature."
);

entity(
    "ash",
    "Ash",
    "person",
    "Science officer and secret android serving the Company.",
    "Ash is the Nostromo's science officer, a Weyland-Yutani plant ordered to bring the organism back — crew expendable."
);

entity(
    "jones-the-cat",
    "Jones",
    "person",
    "Nostromo ship's cat who also makes the escape.",
    "Jones is the ship's cat Ripley refuses to leave, a small surviving life besides the warrant officer at the end of Alien."
);

entity(
    "dwayne-hicks",
    "Dwayne Hicks",
    "person",
    "Colonial Marine corporal who partners Ripley.",
    "Dwayne Hicks is the Marine who keeps a cool head on LV-426, arms Ripley, and helps get Newt toward the Sulaco."
);

entity(
    "bishop",
    "Bishop",
    "person",
    "Android executive officer who earns Ripley's trust.",
    "Bishop is the Sulaco android who contrasts Ash — competent, curious, and ultimately loyal enough to help Ripley face the Queen."
);

entity(
    "newt",
    "Newt",
    "person",
    "Last child of Hadley's Hope.",
    "Newt is the colony child who survived in the vents of Hadley's Hope and becomes the civilian Ripley will not abandon."
);

entity(
    "peter-weyland",
    "Peter Weyland",
    "person",
    "Founder who funds the Prometheus voyage.",
    "Peter Weyland is the aging industrialist whose quest for the Engineers drives Prometheus and the Company's later hunger for the organism."
);

entity(
    "david-8",
    "David",
    "person",
    "Weyland android whose experiments seed later horrors.",
    "David is the Prometheus android who studies the pathogen and, by Covenant, treats xenomorph design as his own art."
);

entity(
    "xenomorph",
    "Xenomorph",
    "concept",
    "Giger's perfect organism — acid blood, inner jaw, hive logic.",
    "The xenomorph is the parasitic alien whose egg–facehugger–chestburster life cycle and biomechanical body define the franchise's terror."
);

entity(
    "facehugger",
    "Facehugger",
    "concept",
    "Egg-born parasite that implants a chestburster.",
    "The facehugger is the first stage that leaps from an egg, clamps a host, and leaves the embryo that will later burst out."
);

entity(
    "chestburster",
    "Chestburster",
    "concept",
    "Infant xenomorph that kills its host on the way out.",
    "The chestburster is the newborn xenomorph that erupts from a host's chest — Alien's most copied shock."
);

entity(
    "xenomorph-queen",
    "Xenomorph Queen",
    "person",
    "Hive mother introduced in Aliens.",
    "The Queen is the immense egg-layer Cameron added, the hive's center Ripley fights in the loader while Newt is the bait."
);

/* ---------- Relationships ---------- */

rel("ridley-scott", "alien-franchise", "created", "Ridley Scott directed Alien and later the Prometheus/Covenant prequels.", 0.99, 0.99);
rel("ridley-scott", "alien-1979", "created", "Scott directed Alien (1979).", 0.99, 0.98);
rel("dan-obannon", "alien-1979", "created", "Dan O'Bannon wrote the Alien screenplay.", 0.98, 0.96);
rel("hr-giger", "xenomorph", "created", "H. R. Giger designed the xenomorph.", 0.99, 0.97);
rel("james-cameron", "aliens-1986", "created", "James Cameron wrote and directed Aliens.", 0.99, 0.97);
rel("ridley-scott", "prometheus", "created", "Scott directed Prometheus.", 0.97, 0.94);
rel("ridley-scott", "alien-covenant", "created", "Scott directed Alien: Covenant.", 0.97, 0.94);
rel("sigourney-weaver", "ellen-ripley", "involved", "Sigourney Weaver originated Ellen Ripley.", 0.99, 0.97);

rel("alien-1979", "alien-franchise", "part_of", "Alien (1979) is the film that starts the franchise.", 0.99, 0.98);
rel("aliens-1986", "alien-franchise", "part_of", "Aliens is the 1986 sequel that expands the hive.", 0.98, 0.96);
rel("prometheus", "alien-franchise", "part_of", "Prometheus is a 2012 prequel in the Alien line.", 0.96, 0.93);
rel("alien-covenant", "alien-franchise", "part_of", "Alien: Covenant continues the prequel path.", 0.96, 0.93);
rel("alien-1979", "aliens-1986", "followed", "Aliens follows Ripley after the Nostromo.", 0.97, 0.94);
rel("prometheus", "alien-covenant", "followed", "Covenant follows Prometheus toward the xenomorph.", 0.95, 0.91);
rel("prometheus", "alien-1979", "preceded", "Prometheus is set before the 1979 film.", 0.94, 0.9);

rel("alien-1979", "ellen-ripley", "involved", "Alien (1979) is Ripley's first survival against the xenomorph.", 0.99, 0.97);
rel("alien-1979", "xenomorph", "involved", "The 1979 film introduces the xenomorph aboard the Nostromo.", 0.99, 0.97);
rel("aliens-1986", "ellen-ripley", "involved", "Aliens returns Ripley to LV-426 with the Marines.", 0.98, 0.96);
rel("aliens-1986", "newt", "involved", "Newt is the child survivor at the center of Aliens.", 0.97, 0.94);
rel("aliens-1986", "xenomorph-queen", "involved", "Aliens introduces the Queen as the hive's mother.", 0.97, 0.94);
rel("prometheus", "david-8", "involved", "David is the android center of Prometheus.", 0.96, 0.93);
rel("alien-covenant", "david-8", "involved", "Covenant turns on David's xenomorph experiments.", 0.96, 0.93);

rel("ellen-ripley", "nostromo-crew", "member_of", "Ripley is warrant officer of the Nostromo crew.", 0.99, 0.97);
rel("dallas", "nostromo-crew", "leads", "Dallas captains the Nostromo crew.", 0.98, 0.95);
rel("ash", "nostromo-crew", "member_of", "Ash serves as the Nostromo's science officer.", 0.97, 0.94);
rel("ash", "weyland-yutani", "supports", "Ash secretly serves Weyland-Yutani over the crew.", 0.97, 0.94);
rel("jones-the-cat", "nostromo-crew", "member_of", "Jones is the Nostromo's surviving ship's cat.", 0.93, 0.88);
rel("dwayne-hicks", "colonial-marines", "member_of", "Hicks is a Colonial Marine corporal on the Sulaco.", 0.97, 0.94);
rel("bishop", "colonial-marines", "member_of", "Bishop is the Sulaco android attached to the Marines.", 0.96, 0.93);
rel("peter-weyland", "weyland-yutani", "created", "Peter Weyland founds the company that becomes Weyland-Yutani.", 0.96, 0.93);
rel("david-8", "weyland-yutani", "member_of", "David is Weyland's android on the Prometheus mission.", 0.96, 0.93);
rel("nostromo-crew", "weyland-yutani", "part_of", "The Nostromo crew works a Company towing contract.", 0.94, 0.9);

rel("ellen-ripley", "xenomorph", "opposed_by", "Ripley survives and later hunts the xenomorph.", 0.98, 0.96);
rel("ellen-ripley", "xenomorph-queen", "opposed_by", "Ripley fights the Queen to save Newt.", 0.97, 0.94);
rel("ellen-ripley", "newt", "supports", "Ripley becomes Newt's protector on LV-426.", 0.97, 0.94);
rel("facehugger", "xenomorph", "part_of", "The facehugger is the implanting stage of the xenomorph cycle.", 0.98, 0.96);
rel("chestburster", "xenomorph", "part_of", "The chestburster is the xenomorph's birth from a host.", 0.98, 0.96);
rel("xenomorph-queen", "xenomorph", "leads", "The Queen lays the eggs that grow a hive.", 0.97, 0.94);
rel("facehugger", "chestburster", "caused", "A facehugger implantation produces a chestburster.", 0.97, 0.94);

rel("nostromo-crew", "nostromo", "located_in", "The crew lives and dies aboard the Nostromo.", 0.97, 0.94);
rel("alien-1979", "nostromo", "occurred_at", "Alien (1979) is largely set on the Nostromo.", 0.97, 0.94);
rel("aliens-1986", "lv-426", "occurred_at", "Aliens is fought on LV-426 around Hadley's Hope.", 0.97, 0.94);
rel("xenomorph", "lv-426", "located_in", "The derelict and later hive are on LV-426.", 0.96, 0.93);
rel("newt", "lv-426", "located_in", "Newt is a child of the LV-426 colony.", 0.96, 0.93);
rel("colonial-marines", "sulaco", "located_in", "The Marines deploy from the Sulaco.", 0.95, 0.91);
rel("engineers", "prometheus", "involved", "Prometheus is the film that puts the Engineers on screen.", 0.95, 0.91);
rel("david-8", "xenomorph", "created", "David's Covenant experiments refine creatures toward the xenomorph.", 0.92, 0.88);
rel("weyland-yutani", "xenomorph", "uses", "The Company wants the xenomorph as a biological weapon.", 0.96, 0.93);
rel("hr-giger", "alien-1979", "produced", "Giger's designs produced the look of Alien (1979).", 0.96, 0.93);

module.exports = { entities, relationships };
