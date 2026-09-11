/*
 * Five Nights at Freddy's subject data.
 */

const entities = [];

function entity(
    slug,
    name,
    type,
    short_description,
    description,
    evidence = "fiction",
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

const relationships = [];

function rel(from, to, relationship, title, strength = 0.95, discoveryScore = 0.9) {
    relationships.push([from, to, relationship, title, strength, discoveryScore]);
}

/*
 * CORE
 */

entity(
    "five-nights-at-freddys",
    "Five Nights at Freddy's",
    "work",
    "Horror franchise of haunted animatronics, missing children, and night shifts gone wrong.",
    "Five Nights at Freddy's is a horror franchise created by Scott Cawthon. It centers on Freddy Fazbear's Pizza, murderous animatronics, the missing children incident, and the long shadow of William Afton across games, books, and film."
);

entity(
    "scott-cawthon",
    "Scott Cawthon",
    "person",
    "Creator of Five Nights at Freddy's.",
    "Scott Cawthon created Five Nights at Freddy's, writing and developing the early games and shaping the franchise's lore of animatronics, tragedy, and possession."
);

entity(
    "steel-wool-studios",
    "Steel Wool Studios",
    "organization",
    "Studio behind Help Wanted, Security Breach, and related titles.",
    "Steel Wool Studios develops major Five Nights at Freddy's entries including Help Wanted and Security Breach in collaboration with Scott Cawthon's franchise."
);

/*
 * GAMES / WORKS
 */

entity(
    "fnaf-1",
    "Five Nights at Freddy's 1",
    "work",
    "The original night-shift survival game at Freddy Fazbear's Pizza.",
    "Five Nights at Freddy's introduces night guard Mike Schmidt, Freddy Fazbear's Pizza, and the classic animatronics Freddy, Bonnie, Chica, and Foxy."
);

entity(
    "fnaf-2",
    "Five Nights at Freddy's 2",
    "work",
    "Prequel-set entry with withered and toy animatronics.",
    "Five Nights at Freddy's 2 expands the pizzeria timeline with toy animatronics, withered originals, the Puppet, and deeper hints about the missing children."
);

entity(
    "fnaf-3",
    "Five Nights at Freddy's 3",
    "work",
    "Horror attraction game dominated by Springtrap.",
    "Five Nights at Freddy's 3 is set in Fazbear's Fright, where Springtrap — William Afton trapped in a springlock suit — stalks the night guard among phantom animatronics."
);

entity(
    "fnaf-4",
    "Five Nights at Freddy's 4",
    "work",
    "Home-based nightmare entry tied to the crying child.",
    "Five Nights at Freddy's 4 blurs nightmares and memory around a child haunted by nightmare animatronics and the tragedy connected to the Afton family."
);

entity(
    "sister-location",
    "Sister Location",
    "work",
    "Underground facility game focused on Circus Baby's Entertainment and Rental.",
    "Sister Location follows technician work beneath Circus Baby's Entertainment and Rental, revealing Baby, Ballora, Funtime Freddy, and the Afton family's darker experiments."
);

entity(
    "pizzeria-simulator",
    "Freddy Fazbear's Pizzeria Simulator",
    "work",
    "Management sim that becomes a final trap for the Aftons.",
    "Freddy Fazbear's Pizzeria Simulator lets the player build a restaurant while salvaging haunted animatronics, culminating in a fire meant to end William Afton's cycle."
);

entity(
    "ultimate-custom-night",
    "Ultimate Custom Night",
    "work",
    "Customizable gauntlet framed as a personal hell.",
    "Ultimate Custom Night gathers nearly the whole cast into a player-built nightmare often read as torment connected to William Afton and the spirits he wronged."
);

entity(
    "help-wanted",
    "Five Nights at Freddy's: Help Wanted",
    "work",
    "VR anthology that reintroduces Fazbear Entertainment's cover-ups.",
    "Help Wanted packages classic nights into VR while hinting that Fazbear Entertainment is rewriting history — and that something worse is transferring through the software."
);

entity(
    "security-breach",
    "Five Nights at Freddy's: Security Breach",
    "work",
    "Open pizzeria mall game starring Gregory and Glamrock animatronics.",
    "Security Breach follows Gregory overnight in Freddy Fazbear's Mega Pizzaplex, hunted by Glamrock animatronics and Vanny while Glamrock Freddy becomes an unlikely ally."
);

entity(
    "fnaf-movie",
    "Five Nights at Freddy's Film",
    "work",
    "Live-action adaptation of the early pizzeria mythos.",
    "The Five Nights at Freddy's film adapts the haunted pizzeria premise around Mike Schmidt, the classic animatronics, and the trauma surrounding the missing children."
);

/*
 * PEOPLE
 */

entity(
    "william-afton",
    "William Afton",
    "person",
    "Co-founder, killer, and eventual Springtrap.",
    "William Afton is the central human villain of Five Nights at Freddy's. A co-founder of the restaurant business, he murders children, becomes Purple Guy / Springtrap, and refuses to stay dead."
);

entity(
    "henry-emily",
    "Henry Emily",
    "person",
    "Co-founder and father of Charlotte Emily.",
    "Henry Emily helps build the animatronic business with William Afton, loses his daughter Charlotte, and later engineers a final plan to free the spirits and end Afton."
);

entity(
    "charlotte-emily",
    "Charlotte Emily",
    "person",
    "Henry's daughter; spirit connected to the Puppet.",
    "Charlotte Emily is murdered outside Freddy Fazbear's Pizza and becomes deeply connected to the Puppet, helping other children's spirits."
);

entity(
    "mike-schmidt",
    "Mike Schmidt",
    "person",
    "Night guard of the first game.",
    "Mike Schmidt is the night guard of Five Nights at Freddy's 1, surviving Freddy Fazbear's Pizza until he is fired — and often linked in fan and expanded lore to the wider Afton story."
);

entity(
    "michael-afton",
    "Michael Afton",
    "person",
    "William Afton's son, pulled into the family's crimes.",
    "Michael Afton is William's son. His story spans guilt, Sister Location, and attempts to undo his father's damage across later nights and fires."
);

entity(
    "elizabeth-afton",
    "Elizabeth Afton",
    "person",
    "William's daughter, bound to Circus Baby.",
    "Elizabeth Afton is warned away from Circus Baby, becomes a victim of the Funtime animatronic, and remains tied to Baby's haunted identity."
);

entity(
    "the-crying-child",
    "The Crying Child",
    "person",
    "Afton-family child at the heart of FNAF 4's tragedy.",
    "The Crying Child is tormented by older siblings and animatronic fear, culminating in the Bite of '83 and a tragedy that haunts the Afton family."
);

entity(
    "phone-guy",
    "Phone Guy",
    "person",
    "Training-tape voice of early nights.",
    "Phone Guy leaves recorded guidance for night guards, revealing company negligence and the danger of the animatronics before his own fate catches up."
);

entity(
    "vanny",
    "Vanny",
    "person",
    "Rabbit-masked follower tied to Glitchtrap.",
    "Vanny is a white-rabbit-masked figure in Security Breach, manipulated through Help Wanted's digital remnant of William Afton known as Glitchtrap."
);

entity(
    "gregory",
    "Gregory",
    "person",
    "Child protagonist of Security Breach.",
    "Gregory spends a night trapped in the Mega Pizzaplex, escaping Glamrock animatronics with help from Glamrock Freddy."
);

entity(
    "vanessa",
    "Vanessa",
    "person",
    "Pizzaplex security guard connected to Vanny.",
    "Vanessa appears as a security presence in Security Breach and is closely entangled with Vanny and Glitchtrap's influence."
);

/*
 * ANIMATRONICS
 */

entity(
    "freddy-fazbear",
    "Freddy Fazbear",
    "object",
    "Bear bandleader and mascot of the franchise.",
    "Freddy Fazbear is the face of Freddy Fazbear's Pizza — a brown bear animatronic who becomes one of the most feared night stalkers in the original game."
);

entity(
    "bonnie",
    "Bonnie",
    "object",
    "Purple guitar-playing rabbit animatronic.",
    "Bonnie is Freddy's rabbit bandmate, known for aggressive approaches through the left hall in the original nights."
);

entity(
    "chica",
    "Chica",
    "object",
    "Cupcake-carrying chicken animatronic.",
    "Chica is the pizza-loving chicken animatronic of Freddy's band, often accompanied by her cupcake prop."
);

entity(
    "foxy",
    "Foxy",
    "object",
    "Pirate fox from Pirate Cove.",
    "Foxy the Pirate Fox lurks in Pirate Cove and sprints toward the night guard when the curtains stay closed too long."
);

entity(
    "golden-freddy",
    "Golden Freddy",
    "object",
    "Ghostly golden bear tied to the deepest hauntings.",
    "Golden Freddy appears as a withered golden bear apparition connected to possession, vengeance, and some of the franchise's darkest secrets."
);

entity(
    "the-puppet",
    "The Puppet",
    "object",
    "Gift-giving animatronic bound to Charlotte Emily.",
    "The Puppet watches over children and becomes central to giving life — and restless purpose — to other spirits after Charlotte Emily's death."
);

entity(
    "springtrap",
    "Springtrap",
    "object",
    "Decayed springlock suit containing William Afton.",
    "Springtrap is the rotting springlock animatronic that imprisons William Afton after his attempt to hide in a suit goes catastrophically wrong."
);

entity(
    "circus-baby",
    "Circus Baby",
    "object",
    "Funtime clown animatronic linked to Elizabeth Afton.",
    "Circus Baby is the star of Sister Location — a Funtime animatronic designed with deadly purpose and bound to Elizabeth Afton's fate."
);

entity(
    "ballora",
    "Ballora",
    "object",
    "Ballerina Funtime animatronic.",
    "Ballora is a dancing Funtime animatronic in Sister Location whose music and movement conceal lethal design."
);

entity(
    "funtime-freddy",
    "Funtime Freddy",
    "object",
    "White-and-pink Funtime bear with Bon-Bon.",
    "Funtime Freddy is a loud Funtime animatronic who uses the hand puppet Bon-Bon and appears throughout Sister Location's facility."
);

entity(
    "ennard",
    "Ennard",
    "object",
    "Amalgam of Funtime endoskeletons.",
    "Ennard is formed from Funtime animatronic parts, seeking escape from Sister Location and later connected to Michael Afton's ordeal."
);

entity(
    "glamrock-freddy",
    "Glamrock Freddy",
    "object",
    "Rockstar bear ally in Security Breach.",
    "Glamrock Freddy is a glam-rock redesign of Freddy who breaks from the Pizzaplex hunt pattern and protects Gregory."
);

entity(
    "montgomery-gator",
    "Montgomery Gator",
    "object",
    "Bass-playing gator Glamrock animatronic.",
    "Montgomery Gator is a Glamrock performer and hunter in Security Breach, associated with jealousy and violence inside the Pizzaplex."
);

entity(
    "glamrock-chica",
    "Glamrock Chica",
    "object",
    "Glamrock chicken performer.",
    "Glamrock Chica is a modernized Chica who patrols the Mega Pizzaplex and joins the hunt for Gregory."
);

entity(
    "roxanne-wolf",
    "Roxanne Wolf",
    "object",
    "Glamrock wolf keyed to vanity and tracking.",
    "Roxanne Wolf is a Glamrock animatronic whose enhanced senses make her one of Gregory's most relentless pursuers."
);

entity(
    "glitchtrap",
    "Glitchtrap",
    "object",
    "Digital rabbit remnant of William Afton.",
    "Glitchtrap is a virus-like rabbit figure born from Help Wanted's scanners, carrying William Afton's will into new victims like Vanny."
);

entity(
    "burntrap",
    "Burntrap",
    "object",
    "Burned digital-physical Afton form under the Pizzaplex.",
    "Burntrap appears beneath the Mega Pizzaplex as a charred continuation of William Afton's persistence through fire, code, and flesh."
);

/*
 * PLACES / ORGS / EVENTS / CONCEPTS
 */

entity(
    "freddy-fazbears-pizza",
    "Freddy Fazbear's Pizza",
    "place",
    "The original haunted family restaurant.",
    "Freddy Fazbear's Pizza is the cheerful front for tragedy — birthday parties by day, animatronic predation by night, and the site of the missing children incident."
);

entity(
    "fazbears-fright",
    "Fazbear's Fright",
    "place",
    "Horror attraction built from Fazbear remnants.",
    "Fazbear's Fright tries to commercialize the restaurant's urban legends, only to awaken Springtrap among salvaged haunted debris."
);

entity(
    "circus-babys-entertainment-and-rental",
    "Circus Baby's Entertainment and Rental",
    "place",
    "Underground Funtime rental facility.",
    "Circus Baby's Entertainment and Rental houses the Funtime animatronics beneath the surface, serving William Afton's darkest experiments."
);

entity(
    "mega-pizzaplex",
    "Freddy Fazbear's Mega Pizzaplex",
    "place",
    "Massive entertainment mall of Security Breach.",
    "The Mega Pizzaplex is a sprawling modern Fazbear complex where Glamrock animatronics perform — and hunt — after dark."
);

entity(
    "fazbear-entertainment",
    "Fazbear Entertainment",
    "organization",
    "Corporate face of the restaurants and cover-ups.",
    "Fazbear Entertainment runs the restaurants, reboots, VR experiences, and public relations campaigns that bury the truth of the murders and hauntings."
);

entity(
    "afton-robotics",
    "Afton Robotics",
    "organization",
    "William Afton's company behind Funtime designs.",
    "Afton Robotics creates Funtime animatronics such as Circus Baby, embedding capture systems into machines meant for children."
);

entity(
    "missing-children-incident",
    "Missing Children Incident",
    "event",
    "Murders that possess the classic animatronics.",
    "The missing children incident is the foundational tragedy in which William Afton lures and kills children whose spirits linger in the animatronics."
);

entity(
    "bite-of-83",
    "The Bite of '83",
    "event",
    "Fatal animatronic accident involving the crying child.",
    "The Bite of '83 is the tragedy in which a child's head is crushed in Fredbear's jaws during a bullying prank, scarring the Afton family forever."
);

entity(
    "bite-of-87",
    "The Bite of '87",
    "event",
    "Later animatronic attack that costs a night guard frontal lobe tissue.",
    "The Bite of '87 is an infamous attack referenced throughout the series, associated with toy-era danger and corporate denial."
);

entity(
    "springlock-failure",
    "Springlock Failure",
    "event",
    "Suit malfunction that turns people into corpses inside animatronics.",
    "Springlock failures occur when dual-purpose suits collapse inward — the mechanism that traps William Afton inside Springtrap."
);

entity(
    "possession",
    "Possession",
    "concept",
    "Spirits binding to animatronics after death.",
    "Possession is the franchise's core supernatural rule: murdered children's souls inhabit animatronics, driving revenge, confusion, and endless nights."
);

entity(
    "remnant",
    "Remnant",
    "concept",
    "Metal-bound agony used to trap or transfer souls.",
    "Remnant is a mystical-metal concept in later lore describing how emotion and soul can be bound, melted, and moved through animatronic endoskeletons."
);

entity(
    "purple-guy",
    "Purple Guy",
    "concept",
    "Minigame depiction of William Afton as a purple killer.",
    "Purple Guy is the minigame avatar of William Afton — a purple figure shown murdering children and later dying in a springlock suit."
);

/*
 * RELATIONSHIPS
 */

rel("scott-cawthon", "five-nights-at-freddys", "created", "Scott Cawthon created Five Nights at Freddy's.", 0.99, 0.99);
rel("five-nights-at-freddys", "fnaf-1", "contains", "FNAF 1 begins the franchise.", 0.99, 0.97);
rel("five-nights-at-freddys", "fnaf-2", "contains", "FNAF 2 expands the early timeline.", 0.98, 0.95);
rel("five-nights-at-freddys", "fnaf-3", "contains", "FNAF 3 centers Springtrap.", 0.98, 0.95);
rel("five-nights-at-freddys", "fnaf-4", "contains", "FNAF 4 focuses on nightmares and the crying child.", 0.98, 0.95);
rel("five-nights-at-freddys", "sister-location", "contains", "Sister Location reveals the Funtime underground.", 0.98, 0.95);
rel("five-nights-at-freddys", "pizzeria-simulator", "contains", "Pizzeria Simulator stages a final reckoning.", 0.98, 0.94);
rel("five-nights-at-freddys", "ultimate-custom-night", "contains", "UCN gathers the cast into one nightmare.", 0.97, 0.92);
rel("five-nights-at-freddys", "help-wanted", "contains", "Help Wanted reboots the brand in VR.", 0.97, 0.93);
rel("five-nights-at-freddys", "security-breach", "contains", "Security Breach moves the horror into the Pizzaplex.", 0.98, 0.94);
rel("five-nights-at-freddys", "fnaf-movie", "contains", "The film adapts the pizzeria mythos.", 0.96, 0.9);
rel("steel-wool-studios", "help-wanted", "produced", "Steel Wool developed Help Wanted.", 0.97, 0.9);
rel("steel-wool-studios", "security-breach", "produced", "Steel Wool developed Security Breach.", 0.97, 0.9);

rel("william-afton", "fazbear-entertainment", "created", "Afton helps found the restaurant empire.", 0.97, 0.95);
rel("henry-emily", "fazbear-entertainment", "created", "Henry co-founds the business with Afton.", 0.97, 0.95);
rel("william-afton", "afton-robotics", "leads", "Afton runs Afton Robotics.", 0.98, 0.95);
rel("william-afton", "missing-children-incident", "caused", "Afton murders the missing children.", 0.99, 0.99);
rel("william-afton", "purple-guy", "connected_to", "Purple Guy depicts Afton in minigames.", 0.99, 0.97);
rel("william-afton", "springtrap", "connected_to", "Afton becomes Springtrap.", 0.99, 0.99);
rel("william-afton", "glitchtrap", "connected_to", "Afton's will returns as Glitchtrap.", 0.98, 0.97);
rel("william-afton", "burntrap", "connected_to", "Burntrap continues Afton's form.", 0.97, 0.95);
rel("william-afton", "michael-afton", "connected_to", "Michael is William's son.", 0.99, 0.97);
rel("william-afton", "elizabeth-afton", "connected_to", "Elizabeth is William's daughter.", 0.99, 0.97);
rel("william-afton", "the-crying-child", "connected_to", "The crying child is part of the Afton family tragedy.", 0.98, 0.96);

rel("henry-emily", "charlotte-emily", "connected_to", "Charlotte is Henry's daughter.", 0.99, 0.98);
rel("charlotte-emily", "the-puppet", "connected_to", "Charlotte's spirit is bound to the Puppet.", 0.99, 0.98);
rel("elizabeth-afton", "circus-baby", "connected_to", "Elizabeth is bound to Circus Baby.", 0.99, 0.98);
rel("michael-afton", "sister-location", "involved", "Michael's path runs through Sister Location.", 0.97, 0.94);
rel("michael-afton", "ennard", "opposed_by", "Ennard uses and abandons Michael.", 0.96, 0.94);

rel("freddy-fazbear", "freddy-fazbears-pizza", "located_in", "Freddy performs at Freddy Fazbear's Pizza.", 0.99, 0.96);
rel("bonnie", "freddy-fazbears-pizza", "located_in", "Bonnie performs at Freddy's.", 0.98, 0.94);
rel("chica", "freddy-fazbears-pizza", "located_in", "Chica performs at Freddy's.", 0.98, 0.94);
rel("foxy", "freddy-fazbears-pizza", "located_in", "Foxy lurks in Pirate Cove at Freddy's.", 0.98, 0.94);
rel("golden-freddy", "freddy-fazbears-pizza", "located_in", "Golden Freddy haunts Freddy's.", 0.97, 0.95);
rel("the-puppet", "freddy-fazbears-pizza", "located_in", "The Puppet watches from Freddy's.", 0.97, 0.94);

rel("missing-children-incident", "freddy-fazbear", "caused", "Spirits possess Freddy and the band.", 0.98, 0.97);
rel("missing-children-incident", "possession", "caused", "The murders create animatronic possession.", 0.99, 0.98);
rel("possession", "freddy-fazbear", "connected_to", "Freddy is among the possessed.", 0.97, 0.94);
rel("possession", "golden-freddy", "connected_to", "Golden Freddy is strongly tied to possession.", 0.98, 0.96);

rel("springtrap", "fazbears-fright", "located_in", "Springtrap is found in Fazbear's Fright.", 0.99, 0.96);
rel("springtrap", "springlock-failure", "caused", "A springlock failure traps Afton.", 0.99, 0.97);
rel("fnaf-3", "springtrap", "contains", "FNAF 3 features Springtrap as the main threat.", 0.99, 0.96);

rel("circus-baby", "circus-babys-entertainment-and-rental", "located_in", "Baby resides in the rental facility.", 0.99, 0.95);
rel("ballora", "circus-babys-entertainment-and-rental", "located_in", "Ballora patrols the underground facility.", 0.97, 0.92);
rel("funtime-freddy", "circus-babys-entertainment-and-rental", "located_in", "Funtime Freddy is kept underground.", 0.97, 0.92);
rel("afton-robotics", "circus-baby", "created", "Afton Robotics built Circus Baby.", 0.98, 0.95);
rel("ennard", "circus-baby", "contains", "Ennard incorporates Funtime parts including Baby.", 0.96, 0.93);

rel("bite-of-83", "the-crying-child", "involved", "The crying child suffers the Bite of '83.", 0.99, 0.98);
rel("bite-of-83", "fnaf-4", "connected_to", "FNAF 4 revolves around the Bite of '83 era.", 0.98, 0.96);
rel("bite-of-87", "fnaf-2", "connected_to", "The Bite of '87 is tied to the toy era.", 0.96, 0.93);

rel("mike-schmidt", "fnaf-1", "involved", "Mike is the FNAF 1 night guard.", 0.99, 0.95);
rel("phone-guy", "fnaf-1", "involved", "Phone Guy briefs the FNAF 1 nights.", 0.98, 0.93);
rel("phone-guy", "fazbear-entertainment", "member_of", "Phone Guy speaks for the company.", 0.95, 0.9);

rel("glitchtrap", "help-wanted", "connected_to", "Glitchtrap emerges through Help Wanted.", 0.99, 0.97);
rel("glitchtrap", "vanny", "influenced", "Glitchtrap manipulates Vanny.", 0.98, 0.97);
rel("vanny", "vanessa", "connected_to", "Vanny and Vanessa are tightly linked.", 0.98, 0.96);
rel("vanny", "security-breach", "involved", "Vanny hunts through Security Breach.", 0.98, 0.95);

rel("gregory", "security-breach", "involved", "Gregory is the Security Breach protagonist.", 0.99, 0.97);
rel("gregory", "glamrock-freddy", "connected_to", "Glamrock Freddy protects Gregory.", 0.99, 0.98);
rel("glamrock-freddy", "mega-pizzaplex", "located_in", "Glamrock Freddy performs at the Pizzaplex.", 0.98, 0.94);
rel("montgomery-gator", "mega-pizzaplex", "located_in", "Monty patrols the Pizzaplex.", 0.97, 0.92);
rel("glamrock-chica", "mega-pizzaplex", "located_in", "Glamrock Chica patrols the Pizzaplex.", 0.97, 0.92);
rel("roxanne-wolf", "mega-pizzaplex", "located_in", "Roxy hunts in the Pizzaplex.", 0.97, 0.92);
rel("burntrap", "mega-pizzaplex", "located_in", "Burntrap waits beneath the Pizzaplex.", 0.97, 0.95);

rel("fazbear-entertainment", "freddy-fazbears-pizza", "contains", "Fazbear Entertainment runs Freddy's.", 0.98, 0.94);
rel("fazbear-entertainment", "mega-pizzaplex", "contains", "Fazbear Entertainment runs the Pizzaplex.", 0.97, 0.93);
rel("fazbear-entertainment", "help-wanted", "produced", "Fazbear Entertainment publishes the VR rewrite.", 0.96, 0.92);

rel("henry-emily", "pizzeria-simulator", "involved", "Henry's plan culminates in the Simulator fire.", 0.97, 0.96);
rel("remnant", "possession", "connected_to", "Remnant explains how agony binds to metal.", 0.96, 0.94);
rel("remnant", "william-afton", "uses", "Afton exploits remnant in his experiments.", 0.95, 0.93);

rel("five-nights-at-freddys", "william-afton", "connected_to", "Afton is the franchise's central human monster.", 0.99, 0.99);
rel("five-nights-at-freddys", "freddy-fazbear", "connected_to", "Freddy is the franchise mascot.", 0.99, 0.98);
rel("five-nights-at-freddys", "possession", "connected_to", "Possession drives the hauntings.", 0.98, 0.97);

module.exports = {
    entities,
    relationships
};
