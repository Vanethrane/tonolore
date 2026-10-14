/*
 * Pixar subject data — the studio, campus, films, and the groups inside them.
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

/* ---------- Root / founders / studio ---------- */

entity(
    "pixar",
    "Pixar",
    "topic",
    "Emeryville studio that turned computer animation into a feature-film house.",
    "Pixar is the studio John Lasseter, Ed Catmull, and Alvy Ray Smith built from Lucasfilm's computer division, later backed by Steve Jobs, then acquired by Disney in 2006. Its lore runs through RenderMan, the Braintrust, the Emeryville campus, and films from Toy Story to Soul.",
    "documented"
);

entity(
    "john-lasseter",
    "John Lasseter",
    "person",
    "Director of Toy Story and longtime Pixar creative lead.",
    "John Lasseter directed Toy Story and A Bug's Life, shaped early Pixar taste, and was the studio's chief creative officer until 2018.",
    "documented"
);

entity(
    "ed-catmull",
    "Ed Catmull",
    "person",
    "Computer scientist and Pixar president who wrote about the Braintrust.",
    "Ed Catmull co-founded Pixar, led its technical culture, and later documented the Braintrust and candor rules that kept the studio's features in rewrite.",
    "documented"
);

entity(
    "alvy-ray-smith",
    "Alvy Ray Smith",
    "person",
    "Co-founder who came from Lucasfilm Computer Division.",
    "Alvy Ray Smith co-founded Pixar with Catmull out of Lucasfilm's computer graphics group, a pioneer of the digital image pipeline the studio later industrialized.",
    "documented"
);

entity(
    "steve-jobs",
    "Steve Jobs",
    "person",
    "Owner who bought Pixar from Lucasfilm and later sold it to Disney.",
    "Steve Jobs acquired the Pixar computer business in 1986, funded the years before Toy Story, and sold the studio to Disney in 2006.",
    "documented"
);

entity(
    "pete-docter",
    "Pete Docter",
    "person",
    "Director of Monsters, Inc., Up, Inside Out, and Soul; later CCO.",
    "Pete Docter directed some of Pixar's most interior features — including Inside Out and Soul — and later became the studio's chief creative officer.",
    "documented"
);

entity(
    "andrew-stanton",
    "Andrew Stanton",
    "person",
    "Director of Finding Nemo and WALL-E.",
    "Andrew Stanton wrote on Toy Story, directed Finding Nemo and WALL-E, and helped set Pixar's story voice beside Lasseter and Docter.",
    "documented"
);

entity(
    "walt-disney-company",
    "The Walt Disney Company",
    "organization",
    "Parent company after the 2006 acquisition.",
    "The Walt Disney Company bought Pixar in 2006, bringing Catmull and Lasseter into Disney Animation as well and folding Pixar into the larger studio family.",
    "documented"
);

entity(
    "pixar-braintrust",
    "Pixar Braintrust",
    "organization",
    "Peer-review group that notes unfinished films.",
    "The Pixar Braintrust is the circle of directors and story leads Catmull described: a room that can say a reel does not work before the studio ships it.",
    "documented"
);

entity(
    "pixar-campus",
    "Pixar campus",
    "place",
    "Emeryville studio Steve Jobs helped shape.",
    "The Pixar campus in Emeryville is the atrium-and-office home of the studio, designed so that animation, story, and technical teams collide in one building.",
    "documented"
);

entity(
    "renderman",
    "RenderMan",
    "technology",
    "Pixar's rendering software, used in-house and licensed out.",
    "RenderMan is Pixar's rendering architecture, the technical spine of its features and a licensed tool other films used for photoreal computer graphics.",
    "documented"
);

entity(
    "disney-acquisition",
    "Disney acquisition",
    "event",
    "2006 sale of Pixar to Disney.",
    "The Disney acquisition in 2006 made Pixar a wholly owned Disney studio, with Jobs becoming Disney's largest individual shareholder and Catmull taking a wider animation brief.",
    "documented"
);

entity(
    "luxo-jr",
    "Luxo Jr.",
    "work",
    "1986 short whose hopping lamp became the studio mark.",
    "Luxo Jr. is Lasseter's short about a parent lamp and child lamp; the little lamp became Pixar's ident, bouncing onto the letter I before every feature.",
    "documented"
);

/* ---------- Feature works ---------- */

entity(
    "toy-story",
    "Toy Story",
    "work",
    "1995 first feature — Andy's toys learn they are toys.",
    "Toy Story is the first fully computer-animated feature, following Woody, Buzz, and Andy's toys when a space-ranger delusion collides with a cowboy's place on the bed.",
    "documented"
);

entity(
    "finding-nemo",
    "Finding Nemo",
    "work",
    "2003 ocean chase of a clownfish father and a forgetful tang.",
    "Finding Nemo follows Marlin across the reef and the East Australian Current to find his son, with Dory as the memory-lost partner who makes the hunt possible.",
    "documented"
);

entity(
    "monsters-inc",
    "Monsters, Inc.",
    "work",
    "2001 workplace comedy in a scare factory.",
    "Monsters, Inc. is the scare-floor story of Sulley and Mike, a door vault of children's rooms, and a scream-energy company that has to change.",
    "documented"
);

entity(
    "the-incredibles",
    "The Incredibles",
    "work",
    "2004 superhero-family film from Brad Bird.",
    "The Incredibles follows the Parrs — Bob, Helen, and their kids — forced out of suburban hiding when a fan-turned-villain wants yesterday's heroes back.",
    "documented"
);

entity(
    "inside-out",
    "Inside Out",
    "work",
    "2015 film of emotions running Headquarters in Riley's mind.",
    "Inside Out personifies Joy, Sadness, and the other emotions as crew in Riley's mind, a Docter film about growing up by letting Sadness work.",
    "documented"
);

entity(
    "soul",
    "Soul",
    "work",
    "2020 film of a jazz teacher stuck between Earth and the Great Before.",
    "Soul follows Joe Gardner, a middle-school band teacher who almost dies on the way to a gig and has to relearn why a life is worth the body it is in.",
    "documented"
);

entity(
    "wall-e",
    "WALL-E",
    "work",
    "2008 silent-leaning robot romance on a trash Earth.",
    "WALL-E follows a leftover trash-compactor robot who falls for EVE and accidentally restarts humanity's trip home from the Axiom.",
    "documented"
);

/* ---------- In-world groups / characters ---------- */

entity(
    "andys-toys",
    "Andy's toys",
    "organization",
    "The toy community in Andy's room, led by Woody.",
    "Andy's toys are the ensemble of Toy Story: Woody the sheriff, Buzz the space ranger, and the shelf of personalities who hold a room together when the kid is gone."
);

entity(
    "woody",
    "Woody",
    "person",
    "Pull-string sheriff and anxious leader of Andy's toys.",
    "Woody is the cowboy doll who runs Andy's room, panics when Buzz arrives, and spends three films learning how to let a kid grow."
);

entity(
    "buzz-lightyear",
    "Buzz Lightyear",
    "person",
    "Space-ranger figure who thinks he is real — then becomes a toy.",
    "Buzz Lightyear is the deluded action figure who becomes Woody's rival and then his partner, the other half of Toy Story's pair."
);

entity(
    "clownfish-family",
    "Clownfish family",
    "organization",
    "Marlin, Nemo, and the reef they have to leave.",
    "The clownfish family is the tiny anemone household Finding Nemo starts from: a cautious father, a taken son, and the ocean in between."
);

entity(
    "marlin",
    "Marlin",
    "person",
    "Anxious clownfish father who crosses the ocean.",
    "Marlin is Nemo's father, overprotective after a barracuda raid, who has to trust the reef — and Dory — to get his son back."
);

entity(
    "nemo",
    "Nemo",
    "person",
    "Lucky-fin clownfish captured from the drop-off.",
    "Nemo is Marlin's son, taken to a Sydney tank, whose small act of defiance starts the film's ocean crossing."
);

entity(
    "dory",
    "Dory",
    "person",
    "Blue tang with short-term memory loss who still finds the way.",
    "Dory is the forgetful tang who joins Marlin, speaks whale, and later gets her own film as a member of this ocean family."
);

entity(
    "monsters-inc-staff",
    "Monsters, Inc. staff",
    "organization",
    "Scare-floor workers of Monstropolis's power company.",
    "The Monsters, Inc. staff are the employees of the scare factory — Sulley, Mike, Roz, and the door-vault crews — who learn children are not toxic."
);

entity(
    "james-sullivan",
    "James P. Sullivan",
    "person",
    "Top scarer who becomes Boo's protector.",
    "James P. 'Sulley' Sullivan is the big blue scarer whose friendship with a human girl breaks the factory's fear economy."
);

entity(
    "parr-family",
    "Parr family",
    "organization",
    "Superhero household living as a suburban family.",
    "The Parr family is Bob, Helen, Violet, Dash, and Jack-Jack — supers in hiding whose family argument is also a save-the-world plot."
);

entity(
    "bob-parr",
    "Bob Parr",
    "person",
    "Mr. Incredible in a cubicle, then back in the suit.",
    "Bob Parr is the retired Mr. Incredible, restless in insurance work until Syndrome's trap pulls the whole family back into hero work."
);

entity(
    "riley-emotions",
    "Riley's emotions",
    "organization",
    "Joy, Sadness, and the crew in Headquarters.",
    "Riley's emotions are the five personified feelings running her mind in Inside Out, a staff that has to let Sadness take the console."
);

entity(
    "joy",
    "Joy",
    "person",
    "Yellow emotion who tries to run Riley's life on happy.",
    "Joy is the upbeat leader of Riley's emotions, forced to see that Sadness is not a system error but the way Riley can grow."
);

entity(
    "joe-gardner",
    "Joe Gardner",
    "person",
    "Jazz pianist and band teacher at the center of Soul.",
    "Joe Gardner is a middle-school music teacher who wants one gig on stage, dies on a manhole, and has to learn that the spark was already the life he had."
);

/* ---------- Relationships ---------- */

rel("ed-catmull", "pixar", "created", "Ed Catmull co-founded Pixar and led its studio culture.", 0.99, 0.99);
rel("alvy-ray-smith", "pixar", "created", "Alvy Ray Smith co-founded Pixar from the Lucasfilm computer group.", 0.97, 0.95);
rel("john-lasseter", "pixar", "created", "John Lasseter shaped Pixar's early features as director and creative lead.", 0.98, 0.96);
rel("steve-jobs", "pixar", "produced", "Steve Jobs owned and funded Pixar from 1986 until the Disney sale.", 0.98, 0.96);
rel("john-lasseter", "toy-story", "created", "Lasseter directed Toy Story.", 0.99, 0.97);
rel("john-lasseter", "luxo-jr", "created", "Lasseter directed Luxo Jr.", 0.98, 0.96);
rel("andrew-stanton", "finding-nemo", "created", "Andrew Stanton directed Finding Nemo.", 0.98, 0.96);
rel("pete-docter", "inside-out", "created", "Pete Docter directed Inside Out.", 0.98, 0.96);
rel("pete-docter", "soul", "created", "Pete Docter directed Soul.", 0.98, 0.96);
rel("pete-docter", "monsters-inc", "created", "Pete Docter directed Monsters, Inc.", 0.97, 0.94);
rel("andrew-stanton", "wall-e", "created", "Andrew Stanton directed WALL-E.", 0.97, 0.94);

rel("toy-story", "pixar", "part_of", "Toy Story is Pixar's first feature.", 0.99, 0.98);
rel("finding-nemo", "pixar", "part_of", "Finding Nemo is a Pixar feature.", 0.97, 0.94);
rel("monsters-inc", "pixar", "part_of", "Monsters, Inc. is a Pixar feature.", 0.97, 0.94);
rel("the-incredibles", "pixar", "part_of", "The Incredibles is a Pixar feature.", 0.97, 0.94);
rel("inside-out", "pixar", "part_of", "Inside Out is a Pixar feature.", 0.97, 0.94);
rel("soul", "pixar", "part_of", "Soul is a Pixar feature.", 0.96, 0.93);
rel("wall-e", "pixar", "part_of", "WALL-E is a Pixar feature.", 0.96, 0.93);
rel("luxo-jr", "pixar", "part_of", "Luxo Jr. is the short that became Pixar's mark.", 0.97, 0.94);
rel("pixar-braintrust", "pixar", "part_of", "The Braintrust is Pixar's internal story-review circle.", 0.96, 0.93);
rel("renderman", "pixar", "part_of", "RenderMan is Pixar's rendering technology.", 0.97, 0.94);

rel("disney-acquisition", "pixar", "caused", "The 2006 acquisition made Pixar a Disney studio.", 0.98, 0.96);
rel("walt-disney-company", "disney-acquisition", "involved", "Disney bought Pixar in 2006.", 0.98, 0.96);
rel("steve-jobs", "disney-acquisition", "involved", "Jobs sold Pixar to Disney and joined Disney's board.", 0.97, 0.94);
rel("walt-disney-company", "pixar", "produced", "Disney has been Pixar's parent company since 2006.", 0.96, 0.93);
rel("pixar-campus", "pixar", "located_in", "The Emeryville campus is Pixar's home.", 0.97, 0.94);
rel("ed-catmull", "pixar-braintrust", "created", "Catmull described and protected the Braintrust as a studio practice.", 0.95, 0.91);
rel("john-lasseter", "pixar-braintrust", "member_of", "Lasseter was a central voice in the early Braintrust.", 0.94, 0.9);
rel("pete-docter", "pixar-braintrust", "member_of", "Docter is a long-running Braintrust director.", 0.94, 0.9);
rel("pixar", "renderman", "uses", "Pixar renders its features with RenderMan.", 0.96, 0.93);

rel("toy-story", "woody", "involved", "Toy Story is Woody's first film as Andy's favorite.", 0.99, 0.97);
rel("toy-story", "buzz-lightyear", "involved", "Toy Story is the film that introduces Buzz to Andy's room.", 0.98, 0.96);
rel("finding-nemo", "marlin", "involved", "Finding Nemo is Marlin's ocean search.", 0.98, 0.96);
rel("finding-nemo", "nemo", "involved", "Finding Nemo is the film named for the taken clownfish.", 0.97, 0.94);
rel("finding-nemo", "dory", "involved", "Dory partners Marlin through Finding Nemo.", 0.97, 0.94);
rel("monsters-inc", "james-sullivan", "involved", "Monsters, Inc. is Sulley's scare-floor story.", 0.97, 0.94);
rel("the-incredibles", "bob-parr", "involved", "The Incredibles is Bob Parr's return to hero work.", 0.97, 0.94);
rel("inside-out", "joy", "involved", "Inside Out is Joy's education in Sadness.", 0.97, 0.94);
rel("soul", "joe-gardner", "involved", "Soul is Joe Gardner's story between jazz and the Great Before.", 0.98, 0.96);

rel("woody", "andys-toys", "leads", "Woody is the pull-string leader of Andy's toys.", 0.98, 0.96);
rel("buzz-lightyear", "andys-toys", "member_of", "Buzz becomes one of Andy's toys.", 0.97, 0.94);
rel("marlin", "clownfish-family", "leads", "Marlin is the father of the clownfish family.", 0.98, 0.96);
rel("nemo", "clownfish-family", "member_of", "Nemo is the son the ocean takes.", 0.98, 0.96);
rel("dory", "clownfish-family", "member_of", "Dory joins Marlin and Nemo as family.", 0.95, 0.91);
rel("james-sullivan", "monsters-inc-staff", "member_of", "Sulley is Monsters, Inc.'s top scarer.", 0.97, 0.94);
rel("bob-parr", "parr-family", "leads", "Bob is the father of the Parr family.", 0.97, 0.94);
rel("joy", "riley-emotions", "leads", "Joy tries to lead Riley's emotions.", 0.97, 0.94);
rel("woody", "buzz-lightyear", "supports", "Woody and Buzz become partners after the rivalry.", 0.96, 0.93);
rel("marlin", "dory", "supports", "Dory keeps Marlin moving across the ocean.", 0.96, 0.93);

rel("andys-toys", "toy-story", "connected_to", "Andy's toys are the ensemble Toy Story is about.", 0.96, 0.93);
rel("clownfish-family", "finding-nemo", "connected_to", "The clownfish family is the household Finding Nemo starts from.", 0.95, 0.91);
rel("monsters-inc-staff", "monsters-inc", "connected_to", "The scare-floor staff are the workers of Monsters, Inc.", 0.95, 0.91);
rel("parr-family", "the-incredibles", "connected_to", "The Parr family is the household of The Incredibles.", 0.95, 0.91);
rel("riley-emotions", "inside-out", "connected_to", "Riley's emotions are the crew Inside Out follows.", 0.95, 0.91);
rel("luxo-jr", "pixar", "inspired", "The Luxo lamp inspired Pixar's bouncing studio mark.", 0.94, 0.9);

module.exports = { entities, relationships };
