/*
 * Mortal Kombat subject data — realms, champions, and the tournament that binds them.
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
    "mortal-kombat",
    "Mortal Kombat",
    "topic",
    "NetherRealm's tournament saga — Earthrealm, Outworld, and the champions between them.",
    "Mortal Kombat is the fighting saga in which realms settle conquest through a named tournament. Its lore runs through Liu Kang, Raiden, the Lin Kuei and Shirai Ryu, Shao Kahn's Outworld, and the 1992 arcade game that made fatalities famous.",
    "fiction"
);

/* ---------- Earthrealm ---------- */

entity(
    "liu-kang",
    "Liu Kang",
    "person",
    "Shaolin champion who won the first tournament for Earthrealm.",
    "Liu Kang is Earthrealm's chosen Shaolin: the Mortal Kombat (1992) winner who later became Fire God and, in Mortal Kombat 1, the keeper of a new timeline.",
    "fiction"
);

entity(
    "raiden",
    "Raiden",
    "person",
    "Thunder god and protector of Earthrealm.",
    "Raiden is Earthrealm's lightning god, the advisor who sends Liu Kang and Kung Lao into Mortal Kombat and later pays for bending the rules against Shao Kahn.",
    "fiction"
);

entity(
    "kung-lao",
    "Kung Lao",
    "person",
    "Hat-bladed Shaolin and Liu Kang's closest rival-brother.",
    "Kung Lao is the Shaolin who fights beside Liu Kang, wearing the razor hat of a Great Kung Lao ancestor who once won Mortal Kombat for Earthrealm.",
    "fiction"
);

entity(
    "johnny-cage",
    "Johnny Cage",
    "person",
    "Hollywood martial-arts star who keeps showing up for Earthrealm.",
    "Johnny Cage is the vain movie-star fighter who joined the first Mortal Kombat tournament and became a repeating Earthrealm champion across reboots.",
    "fiction"
);

entity(
    "sonya-blade",
    "Sonya Blade",
    "person",
    "Special Forces lieutenant hunting Kano through the tournament.",
    "Sonya Blade is the Special Forces officer who entered Mortal Kombat chasing the Black Dragon and stayed as Earthrealm's military champion beside Jax.",
    "fiction"
);

entity(
    "shang-tsung",
    "Shang Tsung",
    "person",
    "Soul-stealing sorcerer who hosts the tournament for Outworld.",
    "Shang Tsung is the shapeshifting sorcerer who ran the island tournament in Mortal Kombat (1992), stealing souls for Shao Kahn and later rewriting timelines for himself.",
    "fiction"
);

/* ---------- Clan / specter path ---------- */

entity(
    "scorpion",
    "Scorpion",
    "person",
    "Shirai Ryu specter whose hellfire vendetta defines the series.",
    "Scorpion — Hanzo Hasashi — is the Shirai Ryu ninja murdered by Sub-Zero's Lin Kuei, then returned from the Netherrealm with a spear, a hellfire skull, and a family vendetta.",
    "fiction"
);

entity(
    "sub-zero",
    "Sub-Zero",
    "person",
    "Lin Kuei cryomancer — two brothers who share the name.",
    "Sub-Zero is the Lin Kuei ice warrior: first Bi-Han, who killed Scorpion and became Noob Saibot, then his brother Kuai Liang, who later led the clan away from the Cyber Lin Kuei.",
    "fiction"
);

/* ---------- Outworld ---------- */

entity(
    "shao-kahn",
    "Shao Kahn",
    "person",
    "Emperor of Outworld who uses Mortal Kombat as conquest.",
    "Shao Kahn is the hammer-wielding emperor of Outworld. When his champions fail the tournament, he invades Earthrealm anyway and claims Kitana, Sindel, and Mileena as imperial blood.",
    "fiction"
);

entity(
    "kitana",
    "Kitana",
    "person",
    "Edenian princess raised as Shao Kahn's assassin daughter.",
    "Kitana is the fan-wielding princess of Edenia, raised in Outworld as Shao Kahn's daughter until she learned her real father was the king Kahn overthrew.",
    "fiction"
);

entity(
    "mileena",
    "Mileena",
    "person",
    "Tarkatan clone sister Shang Tsung made for Shao Kahn.",
    "Mileena is Kitana's clone — Tarkatan teeth, sai, and a claim on Outworld's throne — created by Shang Tsung as a more loyal imperial heir.",
    "fiction"
);

entity(
    "sindel",
    "Sindel",
    "person",
    "Queen of Edenia whose scream serves Outworld or Earthrealm by era.",
    "Sindel is Edenia's queen, resurrected by Shao Kahn as a weapon against Earthrealm in one timeline and recast as an ally or tyrant in later reboots.",
    "fiction"
);

entity(
    "baraka",
    "Baraka",
    "person",
    "Tarkatan warlord who blades for Outworld.",
    "Baraka is the Tarkatan fighter whose arm blades serve Shao Kahn's armies, a horde champion who keeps returning whenever Outworld marches.",
    "fiction"
);

entity(
    "goro",
    "Goro",
    "person",
    "Four-armed Shokan prince and undefeated tournament champion before Liu Kang.",
    "Goro is the Shokan prince who held the Mortal Kombat title for centuries as Outworld's enforcer, until Liu Kang ended that streak in the 1992 tournament.",
    "fiction"
);

/* ---------- Realms / orgs / places ---------- */

entity(
    "earthrealm",
    "Earthrealm",
    "place",
    "Human realm Raiden protects from Outworld conquest.",
    "Earthrealm is the human world of Mortal Kombat: Shaolin temples, Special Forces, and the defenders who must win the tournament or face invasion.",
    "fiction"
);

entity(
    "outworld",
    "Outworld",
    "place",
    "Conquered patchwork realm ruled from Shao Kahn's throne.",
    "Outworld is the imperial realm Shao Kahn rules — a merged waste of conquered worlds, coliseums, and Tarkatan wastes that keeps trying to absorb Earthrealm.",
    "fiction"
);

entity(
    "netherrealm",
    "Netherrealm",
    "place",
    "Hell that forges specters and fallen emperors.",
    "The Netherrealm is Mortal Kombat's hell: the prison of fallen gods and the fire that remade Hanzo Hasashi into Scorpion.",
    "fiction"
);

entity(
    "lin-kuei",
    "Lin Kuei",
    "organization",
    "Chinese assassin clan that produced the Sub-Zeros.",
    "The Lin Kuei are the cryomancer assassins of Earthrealm, the clan that made Sub-Zero, Cyber Lin Kuei conversions, and the murder that created Scorpion's vendetta.",
    "fiction"
);

entity(
    "shirai-ryu",
    "Shirai Ryu",
    "organization",
    "Japanese ninja clan Scorpion died trying to avenge.",
    "The Shirai Ryu are the rival ninja clan to the Lin Kuei. Their massacre sent Hanzo Hasashi into the Netherrealm as Scorpion.",
    "fiction"
);

entity(
    "special-forces",
    "Special Forces",
    "organization",
    "Earthrealm military unit of Sonya Blade and Jax.",
    "Earthrealm's Special Forces hunt the Black Dragon and later Outworld incursions, sending Sonya Blade into the first Mortal Kombat tournament.",
    "fiction"
);

entity(
    "wu-shi-academy",
    "Wu Shi Academy",
    "place",
    "Shaolin training ground of Liu Kang and Kung Lao.",
    "The Wu Shi Academy is the Earthrealm temple where Liu Kang and Kung Lao trained before Raiden sent them to Mortal Kombat.",
    "fiction"
);

entity(
    "kahn-coliseum",
    "Kahn's Koliseum",
    "place",
    "Outworld arena where Shao Kahn stages kombat.",
    "Kahn's Koliseum is the Outworld fighting pit — banners, cages, and the emperor's balcony — used for tournament and invasion-era matches.",
    "fiction"
);

entity(
    "elder-gods",
    "Elder Gods",
    "organization",
    "Remote pantheon that wrote the rules of Mortal Kombat.",
    "The Elder Gods set the tournament laws that keep realms from merging at will. Raiden answers to them, and they punish emperors who skip the rules.",
    "fiction"
);

entity(
    "mortal-kombat-tournament",
    "Mortal Kombat tournament",
    "event",
    "The inter-realm contest that decides invasion rights.",
    "The Mortal Kombat tournament is the Elder Gods' contest: win enough cycles and a realm may legally conquer another. Shang Tsung hosted it for Outworld; Liu Kang won it for Earthrealm.",
    "fiction"
);

entity(
    "fatalities",
    "Fatalities",
    "concept",
    "Finishing murders that became the series' signature.",
    "Fatalities are the finishing moves that close a Mortal Kombat match — spine-rips, hellfire, and ice statues that made the 1992 arcade game infamous.",
    "fiction"
);

/* ---------- Works ---------- */

entity(
    "mortal-kombat-1992",
    "Mortal Kombat (1992)",
    "work",
    "Arcade original that staged Shang Tsung's island tournament.",
    "Mortal Kombat (1992) is the Midway arcade game that introduced Liu Kang, Sonya, Johnny Cage, Scorpion, Sub-Zero, and Goro, and made fatalities a cultural fight.",
    "fiction"
);

entity(
    "mortal-kombat-11",
    "Mortal Kombat 11",
    "work",
    "2019 chapter of time-keepers, past selves, and Kronika.",
    "Mortal Kombat 11 is the NetherRealm chapter in which past and present kombatants collide, closing the second timeline before Mortal Kombat 1 reset the hourglass.",
    "fiction"
);

entity(
    "mortal-kombat-1",
    "Mortal Kombat 1",
    "work",
    "2023 reboot with Fire God Liu Kang keeping the new era.",
    "Mortal Kombat 1 is the timeline reboot in which Liu Kang, now a Fire God, rebuilds history — and Shang Tsung immediately starts unpicking it.",
    "fiction"
);

/* ---------- Relationships ---------- */

rel("liu-kang", "earthrealm", "member_of", "Liu Kang is Earthrealm's chosen Shaolin champion.", 0.99, 0.97);
rel("raiden", "earthrealm", "leads", "Raiden is the thunder god who protects Earthrealm.", 0.98, 0.96);
rel("kung-lao", "earthrealm", "member_of", "Kung Lao fights for Earthrealm beside Liu Kang.", 0.96, 0.93);
rel("johnny-cage", "earthrealm", "member_of", "Johnny Cage keeps returning as an Earthrealm fighter.", 0.95, 0.91);
rel("sonya-blade", "earthrealm", "member_of", "Sonya Blade represents Earthrealm's Special Forces.", 0.95, 0.92);
rel("sonya-blade", "special-forces", "member_of", "Sonya Blade is a Special Forces lieutenant.", 0.97, 0.94);
rel("liu-kang", "wu-shi-academy", "located_in", "Liu Kang trained at the Wu Shi Academy.", 0.96, 0.93);
rel("kung-lao", "wu-shi-academy", "located_in", "Kung Lao trained at the Wu Shi Academy with Liu Kang.", 0.95, 0.91);

rel("scorpion", "shirai-ryu", "member_of", "Scorpion is the specter of the slaughtered Shirai Ryu.", 0.99, 0.97);
rel("scorpion", "netherrealm", "located_in", "Scorpion was remade in the Netherrealm after the clan massacre.", 0.97, 0.95);
rel("sub-zero", "lin-kuei", "member_of", "Sub-Zero is the cryomancer face of the Lin Kuei.", 0.99, 0.97);
rel("scorpion", "sub-zero", "opposed_by", "Scorpion's vendetta is aimed at the Sub-Zero who killed him.", 0.98, 0.96);
rel("lin-kuei", "shirai-ryu", "opposed_by", "The Lin Kuei and Shirai Ryu are rival assassin clans.", 0.96, 0.93);

rel("shao-kahn", "outworld", "leads", "Shao Kahn rules Outworld as emperor.", 0.99, 0.98);
rel("kitana", "outworld", "member_of", "Kitana was raised as Shao Kahn's Outworld assassin-daughter.", 0.96, 0.93);
rel("mileena", "outworld", "member_of", "Mileena is the Tarkatan heir Shang Tsung made for Outworld.", 0.96, 0.93);
rel("sindel", "outworld", "member_of", "Sindel was resurrected to serve Shao Kahn's Outworld.", 0.94, 0.9);
rel("baraka", "outworld", "member_of", "Baraka leads Tarkatan warbands for Outworld.", 0.95, 0.91);
rel("goro", "outworld", "member_of", "Goro was Outworld's undefeated Shokan champion.", 0.96, 0.93);
rel("shang-tsung", "outworld", "supports", "Shang Tsung hosts Mortal Kombat to feed Shao Kahn's Outworld.", 0.97, 0.95);
rel("shao-kahn", "kahn-coliseum", "uses", "Shao Kahn stages kombat in his Outworld koliseum.", 0.95, 0.91);
rel("kitana", "shao-kahn", "opposed_by", "Kitana turned on Shao Kahn after learning he stole Edenia.", 0.95, 0.92);
rel("mileena", "kitana", "opposed_by", "Mileena was cloned to replace Kitana as a loyal sister-heir.", 0.95, 0.91);

rel("liu-kang", "mortal-kombat-tournament", "involved", "Liu Kang won the first arcade-era Mortal Kombat tournament.", 0.98, 0.96);
rel("liu-kang", "goro", "opposed_by", "Liu Kang ended Goro's centuries-long tournament streak.", 0.96, 0.94);
rel("shang-tsung", "mortal-kombat-tournament", "produced", "Shang Tsung hosted the island Mortal Kombat tournament.", 0.97, 0.95);
rel("elder-gods", "mortal-kombat-tournament", "created", "The Elder Gods wrote the rules of the Mortal Kombat tournament.", 0.96, 0.93);
rel("shao-kahn", "earthrealm", "opposed_by", "Shao Kahn uses the tournament — and then invasion — to take Earthrealm.", 0.97, 0.94);
rel("raiden", "elder-gods", "supports", "Raiden answers to the Elder Gods while bending their rules for Earthrealm.", 0.94, 0.9);

rel("mortal-kombat-1992", "liu-kang", "involved", "Mortal Kombat (1992) made Liu Kang the Shaolin who wins the island tournament.", 0.98, 0.96);
rel("mortal-kombat-1992", "scorpion", "involved", "Mortal Kombat (1992) introduced Scorpion's spear and hellfire fatality.", 0.97, 0.95);
rel("mortal-kombat-1992", "sub-zero", "involved", "Mortal Kombat (1992) introduced Sub-Zero as the Lin Kuei ice ninja.", 0.97, 0.95);
rel("mortal-kombat-1992", "fatalities", "created", "Mortal Kombat (1992) made fatalities the series' signature finish.", 0.98, 0.96);
rel("mortal-kombat-11", "mortal-kombat-1", "preceded", "Mortal Kombat 11 closed a timeline that Mortal Kombat 1 then rebooted.", 0.95, 0.92);
rel("mortal-kombat-1", "liu-kang", "involved", "Mortal Kombat 1 casts Fire God Liu Kang as keeper of the new era.", 0.97, 0.94);
rel("mortal-kombat-1", "shang-tsung", "involved", "Mortal Kombat 1 immediately sets Shang Tsung against Liu Kang's new history.", 0.95, 0.92);

rel("earthrealm", "mortal-kombat", "part_of", "Earthrealm is the human world the tournament is meant to protect.", 0.98, 0.96);
rel("outworld", "mortal-kombat", "part_of", "Outworld is the imperial realm that treats Mortal Kombat as conquest.", 0.98, 0.96);
rel("netherrealm", "mortal-kombat", "part_of", "The Netherrealm is the hell that forges specters in Mortal Kombat.", 0.96, 0.93);
rel("mortal-kombat-tournament", "mortal-kombat", "part_of", "The tournament is the contest the whole saga is named for.", 0.99, 0.98);
rel("mortal-kombat-1992", "mortal-kombat", "part_of", "Mortal Kombat (1992) is the arcade game that began the saga.", 0.99, 0.98);
rel("mortal-kombat-11", "mortal-kombat", "part_of", "Mortal Kombat 11 is a later NetherRealm chapter of the saga.", 0.96, 0.93);
rel("mortal-kombat-1", "mortal-kombat", "part_of", "Mortal Kombat 1 is the 2023 timeline reboot.", 0.97, 0.94);
rel("fatalities", "mortal-kombat", "part_of", "Fatalities are the finishing murders the series is known for.", 0.97, 0.95);
rel("wu-shi-academy", "earthrealm", "located_in", "The Wu Shi Academy stands in Earthrealm.", 0.96, 0.93);
rel("kahn-coliseum", "outworld", "located_in", "Kahn's Koliseum stands in Outworld.", 0.96, 0.93);
rel("lin-kuei", "earthrealm", "located_in", "The Lin Kuei are an Earthrealm assassin clan.", 0.94, 0.9);
rel("shirai-ryu", "earthrealm", "located_in", "The Shirai Ryu were an Earthrealm ninja clan before the massacre.", 0.93, 0.89);

module.exports = { entities, relationships };
