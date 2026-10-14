/*
 * Street Fighter subject data — World Warriors, Shadaloo, and the tournament circuit.
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
    "street-fighter",
    "Street Fighter",
    "topic",
    "Capcom's tournament saga — Ansatsuken, Shadaloo, and the World Warriors.",
    "Street Fighter is Capcom's fighting-game saga about wandering martial artists, Interpol, and the crime empire Shadaloo. Its lore runs through Ryu and Ken's Ansatsuken, Chun-Li and Guile's hunts for M. Bison, and the World Warrior tournaments from Street Fighter II through Street Fighter 6.",
    "fiction"
);

/* ---------- World Warriors ---------- */

entity(
    "ryu",
    "Ryu",
    "person",
    "Wandering Ansatsuken student who seeks a true warrior's path.",
    "Ryu is the white-gi wanderer of Street Fighter: Hadoken, Shoryuken, and a lifelong search for a worthy fight that runs from Suzaku Castle through every World Warrior tournament.",
    "fiction"
);

entity(
    "ken-masters",
    "Ken Masters",
    "person",
    "Ryu's rival and fellow student of Gouken.",
    "Ken Masters is the flame-haired American who trained beside Ryu under Gouken. He fights as a World Warrior with a flaming Shoryuken and a family life in Metro City that Ryu never settled into.",
    "fiction"
);

entity(
    "chun-li",
    "Chun-Li",
    "person",
    "Interpol officer who hunts Shadaloo for her father's death.",
    "Chun-Li is the World Warrior from China whose Spinning Bird Kick and Interpol badge are aimed at M. Bison and Shadaloo, the organization she blames for her father.",
    "fiction"
);

entity(
    "guile",
    "Guile",
    "person",
    "U.S. airman whose Sonic Boom chase is for a dead friend.",
    "Guile is the flat-top World Warrior who hunts M. Bison for the death of his friend Charlie Nash, fighting with Sonic Boom and Flash Kick on the military circuit.",
    "fiction"
);

entity(
    "sagat",
    "Sagat",
    "person",
    "Emperor of Muay Thai who lost face to Ryu's Shoryuken.",
    "Sagat is the scarred Muay Thai king of Street Fighter. Ryu's flaming Shoryuken marked his chest, turning a first-game champion into a World Warrior rival who later broke from Shadaloo.",
    "fiction"
);

entity(
    "zangief",
    "Zangief",
    "person",
    "Red Cyclone — Soviet wrestler on the World Warrior circuit.",
    "Zangief is the grappling World Warrior from Russia, a factory-hero wrestler whose Spinning Piledriver became one of Street Fighter II's defining throws.",
    "fiction"
);

entity(
    "dhalsim",
    "Dhalsim",
    "person",
    "Yoga master who fights to protect his village.",
    "Dhalsim is the elastic yoga World Warrior from India, stretching limbs and breathing fire while trying to keep tournament violence away from his home.",
    "fiction"
);

entity(
    "blanka",
    "Blanka",
    "person",
    "Green-skinned jungle fighter from Brazil.",
    "Blanka is the electric, beast-like World Warrior who grew up in the Brazilian jungle after a plane crash, later searching for his mother on the Street Fighter circuit.",
    "fiction"
);

entity(
    "luke-sullivan",
    "Luke Sullivan",
    "person",
    "Nayshall veteran who became Street Fighter 6's poster fighter.",
    "Luke Sullivan is the MMA-styled World Warrior introduced as Street Fighter V's late face and Street Fighter 6's leading newcomer, a Nayshall war survivor in Metro City.",
    "fiction"
);

entity(
    "jamie-siu",
    "Jamie Siu",
    "person",
    "Drunken-fist prodigy of Metro City's street scene.",
    "Jamie Siu is a Street Fighter 6 World Warrior from Metro City, a drunken-boxing kid who chases respect on the same streets Ken and Luke now walk.",
    "fiction"
);

/* ---------- Shadaloo / dark path ---------- */

entity(
    "m-bison",
    "M. Bison",
    "person",
    "Shadaloo dictator who rules through Psycho Power.",
    "M. Bison is the dictator of Shadaloo, a body-hopping tyrant whose Psycho Power made him the final boss of Street Fighter II and the long-running enemy of Chun-Li, Guile, and Cammy.",
    "fiction"
);

entity(
    "akuma",
    "Akuma",
    "person",
    "Gouki — the Satsui no Hadou killer who murdered his own master.",
    "Akuma is Gouken's brother, the Ansatsuken heretic who killed Goutetsu with the Raging Demon and now hunts Ryu as a test of the killing intent.",
    "fiction"
);

entity(
    "juri-han",
    "Juri Han",
    "person",
    "Tae kwon do sadist who used Shadaloo and then discarded it.",
    "Juri Han is the Feng Shui Engine taekwondoin who infiltrated Shadaloo to ruin it from inside, a chaotic rival to Chun-Li and Cammy across Street Fighter IV and 6.",
    "fiction"
);

entity(
    "cammy-white",
    "Cammy White",
    "person",
    "Delta Red operative grown as a Shadaloo Doll.",
    "Cammy White is the British special-forces World Warrior who began as one of Bison's Dolls, then broke free to fight Shadaloo with Cannon Spike and Delta Red.",
    "fiction"
);

entity(
    "master-gouken",
    "Gouken",
    "person",
    "Ansatsuken master who taught Ryu and Ken to reject the killing intent.",
    "Gouken is the brother of Akuma and teacher of Ryu and Ken. He forbade the Satsui no Hadou, then appeared to die at Akuma's hands before returning in later games.",
    "fiction"
);

/* ---------- Organizations / places / concepts ---------- */

entity(
    "world-warriors",
    "World Warriors",
    "organization",
    "The Street Fighter II tournament cast and its later heirs.",
    "The World Warriors are the multinational fighters gathered for the Street Fighter II tournament — Ryu, Ken, Chun-Li, Guile, and the rest — a roster later games still treat as the series' first family.",
    "fiction"
);

entity(
    "shadaloo",
    "Shadaloo",
    "organization",
    "Bison's crime empire and Psycho Power cult.",
    "Shadaloo is M. Bison's global crime organization: Dolls, Psycho Power experiments, and the shadow government the World Warriors keep dismantling.",
    "fiction"
);

entity(
    "metro-city",
    "Metro City",
    "place",
    "Coastal city of mayors, gangs, and Street Fighter 6's hub.",
    "Metro City is the American city of Final Fight and later Street Fighter, home to Ken, Luke, and Jamie, and the open-world hub of Street Fighter 6.",
    "fiction"
);

entity(
    "suzaku-castle",
    "Suzaku Castle",
    "place",
    "Japan stage where Ryu's wandering path keeps returning.",
    "Suzaku Castle is the Japanese temple stage tied to Ryu, a stone courtyard that has hosted World Warrior matches since Street Fighter II.",
    "fiction"
);

entity(
    "ansatsuken",
    "Ansatsuken",
    "concept",
    "Assassination art Gouken reformed for Ryu and Ken.",
    "Ansatsuken is the martial art behind the Hadoken and Shoryuken. Gouken taught a non-killing form; Akuma kept the Satsui no Hadou that the style was meant to restrain.",
    "fiction"
);

entity(
    "psycho-power",
    "Psycho Power",
    "concept",
    "Purple energy Bison uses to body-hop and dominate.",
    "Psycho Power is Shadaloo's signature energy: the force that lets M. Bison possess new bodies, empower Dolls, and corrupt fighters who get too close.",
    "fiction"
);

entity(
    "hadoken",
    "Hadoken",
    "object",
    "The ki fireball that made Ryu readable worldwide.",
    "The Hadoken is the Ansatsuken projectile Ryu and Ken throw — a ki wave that became Street Fighter's most copied special move.",
    "fiction"
);

entity(
    "world-warrior-tournament",
    "World Warrior tournament",
    "event",
    "The global fighting contest that gathers the cast.",
    "The World Warrior tournament is the in-world contest behind Street Fighter II and its sequels: Shadaloo-backed brackets that pull Ryu, Chun-Li, and Guile onto the same circuit.",
    "fiction"
);

/* ---------- Works ---------- */

entity(
    "street-fighter-ii",
    "Street Fighter II",
    "work",
    "1991 arcade game that created the World Warriors.",
    "Street Fighter II (1991) turned a niche first game into the defining fighting-game cast: eight World Warriors, four bosses, special-move inputs, and M. Bison at the top of Shadaloo.",
    "fiction"
);

entity(
    "street-fighter-alpha",
    "Street Fighter Alpha",
    "work",
    "Prequel series that filled the gap before Street Fighter II.",
    "Street Fighter Alpha (Street Fighter Zero in Japan) is the mid-1990s prequel line that staged Ryu, Chun-Li, and a younger Shadaloo before the World Warrior tournament.",
    "fiction"
);

entity(
    "street-fighter-iv",
    "Street Fighter IV",
    "work",
    "2008 revival that added Juri and the S.I.N. conspiracy.",
    "Street Fighter IV brought the World Warriors back in 3D and introduced Juri Han, a Shadaloo-adjacent sadist, as the new-generation rival.",
    "fiction"
);

entity(
    "street-fighter-6",
    "Street Fighter 6",
    "work",
    "2023 entry set in Metro City with Luke and Jamie.",
    "Street Fighter 6 is the modern World Warrior game: Metro City as a hub, Luke and Jamie as new faces, and returning hunts for Shadaloo remnants and old masters.",
    "fiction"
);

/* ---------- Relationships ---------- */

rel("ryu", "world-warriors", "member_of", "Ryu is the wandering center of the World Warriors.", 0.99, 0.97);
rel("ken-masters", "world-warriors", "member_of", "Ken Masters is Ryu's fellow World Warrior and rival.", 0.98, 0.96);
rel("chun-li", "world-warriors", "member_of", "Chun-Li is the Interpol World Warrior hunting Shadaloo.", 0.98, 0.96);
rel("guile", "world-warriors", "member_of", "Guile is the military World Warrior chasing M. Bison.", 0.97, 0.94);
rel("sagat", "world-warriors", "member_of", "Sagat joined the World Warriors after Ryu scarred him.", 0.95, 0.92);
rel("zangief", "world-warriors", "member_of", "Zangief is the wrestling World Warrior from Russia.", 0.95, 0.91);
rel("dhalsim", "world-warriors", "member_of", "Dhalsim is the yoga World Warrior from India.", 0.95, 0.91);
rel("blanka", "world-warriors", "member_of", "Blanka is the jungle World Warrior from Brazil.", 0.94, 0.9);
rel("luke-sullivan", "world-warriors", "member_of", "Luke Sullivan is a later-generation World Warrior.", 0.93, 0.9);
rel("jamie-siu", "world-warriors", "member_of", "Jamie Siu is a Metro City World Warrior in Street Fighter 6.", 0.93, 0.89);

rel("m-bison", "shadaloo", "leads", "M. Bison rules Shadaloo through Psycho Power.", 0.99, 0.98);
rel("juri-han", "shadaloo", "member_of", "Juri Han infiltrated Shadaloo to tear it apart from inside.", 0.94, 0.9);
rel("cammy-white", "shadaloo", "member_of", "Cammy began as a Shadaloo Doll before joining Delta Red.", 0.95, 0.92);
rel("chun-li", "shadaloo", "opposed_by", "Chun-Li hunts Shadaloo for her father's death.", 0.97, 0.95);
rel("guile", "m-bison", "opposed_by", "Guile hunts M. Bison for Charlie Nash's death.", 0.96, 0.93);
rel("juri-han", "chun-li", "opposed_by", "Juri's sadism is aimed at Chun-Li across later games.", 0.93, 0.89);

rel("master-gouken", "ansatsuken", "leads", "Gouken teaches the non-killing form of Ansatsuken.", 0.97, 0.95);
rel("master-gouken", "ryu", "created", "Gouken trained Ryu in Ansatsuken.", 0.97, 0.95);
rel("master-gouken", "ken-masters", "created", "Gouken trained Ken Masters beside Ryu.", 0.97, 0.94);
rel("akuma", "master-gouken", "opposed_by", "Akuma struck Gouken down with the Raging Demon.", 0.96, 0.94);
rel("akuma", "ryu", "opposed_by", "Akuma hunts Ryu as a test of the Satsui no Hadou.", 0.96, 0.93);
rel("ryu", "hadoken", "uses", "Ryu's Hadoken is the signature Ansatsuken fireball.", 0.98, 0.96);
rel("ken-masters", "hadoken", "uses", "Ken throws the same Hadoken his master taught Ryu.", 0.95, 0.91);
rel("m-bison", "psycho-power", "uses", "M. Bison rules and body-hops through Psycho Power.", 0.98, 0.96);
rel("psycho-power", "shadaloo", "part_of", "Psycho Power is the energy cult at the center of Shadaloo.", 0.96, 0.93);
rel("ansatsuken", "street-fighter", "part_of", "Ansatsuken is the martial art at the core of Street Fighter.", 0.96, 0.93);

rel("ryu", "sagat", "opposed_by", "Ryu's Shoryuken scarred Sagat and started their rivalry.", 0.96, 0.94);
rel("ryu", "suzaku-castle", "located_in", "Ryu's path keeps returning to Suzaku Castle.", 0.94, 0.9);
rel("ken-masters", "metro-city", "located_in", "Ken Masters makes his home in Metro City.", 0.95, 0.91);
rel("luke-sullivan", "metro-city", "located_in", "Luke Sullivan's Street Fighter 6 chapter is set in Metro City.", 0.94, 0.9);
rel("jamie-siu", "metro-city", "located_in", "Jamie Siu is a Metro City street fighter.", 0.94, 0.9);

rel("world-warrior-tournament", "world-warriors", "involved", "The World Warrior tournament gathers the World Warriors.", 0.97, 0.94);
rel("world-warrior-tournament", "shadaloo", "produced", "Shadaloo backed the Street Fighter II World Warrior tournament.", 0.94, 0.9);
rel("street-fighter-ii", "world-warriors", "involved", "Street Fighter II introduced the World Warriors as a playable cast.", 0.99, 0.97);
rel("street-fighter-ii", "m-bison", "involved", "Street Fighter II ends with M. Bison as Shadaloo's final boss.", 0.97, 0.95);
rel("street-fighter-ii", "ryu", "involved", "Ryu is a starting World Warrior in Street Fighter II.", 0.98, 0.96);
rel("street-fighter-alpha", "street-fighter-ii", "preceded", "Street Fighter Alpha is the prequel line set before Street Fighter II.", 0.96, 0.93);
rel("street-fighter-iv", "juri-han", "involved", "Street Fighter IV introduced Juri Han to the World Warrior cast.", 0.96, 0.93);
rel("street-fighter-6", "luke-sullivan", "involved", "Street Fighter 6 made Luke Sullivan a leading new face.", 0.96, 0.93);
rel("street-fighter-6", "metro-city", "located_in", "Street Fighter 6 uses Metro City as its open hub.", 0.97, 0.94);
rel("street-fighter-ii", "street-fighter", "part_of", "Street Fighter II is the game that defined the series' lore.", 0.99, 0.98);
rel("street-fighter-alpha", "street-fighter", "part_of", "Street Fighter Alpha is a prequel chapter of Street Fighter.", 0.96, 0.93);
rel("street-fighter-iv", "street-fighter", "part_of", "Street Fighter IV revived the World Warriors in 2008.", 0.96, 0.93);
rel("street-fighter-6", "street-fighter", "part_of", "Street Fighter 6 is the modern World Warrior entry.", 0.97, 0.95);
rel("world-warriors", "street-fighter", "part_of", "The World Warriors are Street Fighter's first family of fighters.", 0.97, 0.95);
rel("shadaloo", "street-fighter", "part_of", "Shadaloo is the crime empire the World Warriors keep fighting.", 0.97, 0.94);

module.exports = { entities, relationships };
