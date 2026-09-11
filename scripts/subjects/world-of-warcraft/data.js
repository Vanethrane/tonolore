/*
 * Warcraft subject data — Blizzard's fantasy franchise (Warcraft / World of Warcraft).
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
    "world-of-warcraft",
    "Warcraft",
    "topic",
    "Blizzard's fantasy franchise of Azeroth and beyond.",
    "Warcraft is Blizzard Entertainment's fantasy franchise spanning real-time strategy games and World of Warcraft, chronicling the Horde, Alliance, Burning Legion, and the fate of Azeroth."
);

entity(
    "blizzard-entertainment",
    "Blizzard Entertainment",
    "organization",
    "Developer and publisher of Warcraft.",
    "Blizzard Entertainment created Warcraft, Warcraft III, and World of Warcraft, expanding Azeroth through expansions, novels, and related media."
);

entity(
    "warcraft-iii",
    "Warcraft III",
    "work",
    "RTS that defined modern Warcraft lore.",
    "Warcraft III: Reign of Chaos and The Frozen Throne tell of Thrall's Horde, the fall of Lordaeron, Illidan, Arthas, and the rise of the Lich King."
);

entity(
    "world-of-warcraft-mmo",
    "World of Warcraft",
    "work",
    "Massively multiplayer online game set on Azeroth.",
    "World of Warcraft is the MMO that continues Warcraft's story across Kalimdor, the Eastern Kingdoms, Outland, Northrend, and later worlds."
);

/* ---------- World / regions ---------- */

entity(
    "azeroth",
    "Azeroth",
    "place",
    "World of the Titans, Horde, and Alliance.",
    "Azeroth is the world shaped by Titans and Worldsouls, home to the Alliance and Horde and the battleground against the Burning Legion and other cosmic threats."
);

entity(
    "eastern-kingdoms",
    "Eastern Kingdoms",
    "place",
    "Eastern continent of humans, dwarves, and Forsaken.",
    "The Eastern Kingdoms hold Stormwind, Lordaeron's ruins, Ironforge, and Undercity—heartlands of human kingdoms and Forsaken power."
);

entity(
    "kalimdor",
    "Kalimdor",
    "place",
    "Western continent of orcs, night elves, and more.",
    "Kalimdor is home to Orgrimmar, Darnassus's legacy, Thunder Bluff, and ancient night-elven lands after the Sundering."
);

entity(
    "northrend",
    "Northrend",
    "place",
    "Frozen northern continent of the Lich King.",
    "Northrend is the icy continent crowned by Icecrown Citadel, seat of the Lich King and focus of Wrath of the Lich King."
);

entity(
    "draenor",
    "Draenor",
    "place",
    "Orcish homeworld later shattered into Outland.",
    "Draenor is the orcs' original world, corrupted by the Burning Legion and torn apart into Outland after Ner'zhul's portals."
);

entity(
    "orgrimmar",
    "Orgrimmar",
    "place",
    "Capital city of the orcish Horde on Kalimdor.",
    "Orgrimmar is the fortress-capital founded by Thrall for the orcs on Durotar, long the political heart of the Horde."
);

entity(
    "stormwind",
    "Stormwind",
    "place",
    "Capital of the human kingdom of Stormwind.",
    "Stormwind City is the rebuilt capital of the Kingdom of Stormwind and a primary Alliance hub in the Eastern Kingdoms."
);

entity(
    "icecrown",
    "Icecrown",
    "place",
    "Scourge citadel region of Northrend.",
    "Icecrown is the glacier domain of the Scourge, dominated by Icecrown Citadel where Arthas ruled as the Lich King."
);

/* ---------- Factions ---------- */

entity(
    "alliance",
    "Alliance",
    "organization",
    "Coalition of Stormwind, Ironforge, and allies.",
    "The Alliance unites humans, dwarves, gnomes, night elves, and later allies against the Horde and greater threats to Azeroth."
);

entity(
    "horde",
    "Horde",
    "organization",
    "Coalition of orcs, trolls, tauren, Forsaken, and more.",
    "The Horde, reshaped by Thrall, binds orcs, Darkspear trolls, tauren, Forsaken, and other peoples in uneasy fellowship on Azeroth."
);

entity(
    "burning-legion",
    "Burning Legion",
    "organization",
    "Demonic army bent on destroying worlds.",
    "The Burning Legion is Sargeras's infinite demonic host that burns worlds to starve the Void, invading Azeroth again and again."
);

entity(
    "scourge",
    "Scourge",
    "organization",
    "Undead army of the Lich King.",
    "The Scourge is the plague-born undead army created to soften Azeroth for the Legion, later ruled from Icecrown by the Lich King."
);

entity(
    "forsaken",
    "Forsaken",
    "organization",
    "Free-willed undead led by Sylvanas.",
    "The Forsaken are undead who broke the Lich King's will, ruled for years by Sylvanas Windrunner from the Undercity."
);

entity(
    "night-elves",
    "Night Elves",
    "organization",
    "Kaldorei people of Kalimdor.",
    "Night elves, or Kaldorei, are ancient guardians of Kalimdor whose destiny intertwines with Illidan, Tyrande, Malfurion, and the Legion."
);

entity(
    "orcs-of-azeroth",
    "Orcs",
    "organization",
    "Warrior people from Draenor who settled Azeroth.",
    "Orcs came from Draenor through the Dark Portal, first as a demonic Horde and later as Thrall's redeemed people centered on Orgrimmar."
);

/* ---------- Titans / cosmic ---------- */

entity(
    "titans",
    "Titans",
    "concept",
    "World-shaping Pantheon of Order.",
    "Titans of the Pantheon shaped worlds and imprisoned Old Gods; their conflict with Sargeras frames much of Warcraft's cosmic lore."
);

entity(
    "sargeras",
    "Sargeras",
    "person",
    "Fallen Titan who founded the Burning Legion.",
    "Sargeras, once a Titan champion, fell to despair and created the Burning Legion to scour life rather than risk Void corruption."
);

/* ---------- Characters ---------- */

entity(
    "thrall",
    "Thrall",
    "person",
    "Warchief who reforged the Horde.",
    "Thrall, son of Durotan, freed the orcs from camps, founded Orgrimmar, and led the New Horde as shaman and Warchief."
);

entity(
    "jaina-proudmoore",
    "Jaina Proudmoore",
    "person",
    "Archmage and Alliance stateswoman.",
    "Jaina Proudmoore is a powerful mage who sought peace after the Third War, founded Theramore, and remains central to Alliance politics."
);

entity(
    "sylvanas-windrunner",
    "Sylvanas Windrunner",
    "person",
    "Banshee Queen of the Forsaken.",
    "Sylvanas Windrunner, once Ranger-General of Quel'Thalas, became the Banshee Queen leading the Forsaken within the Horde."
);

entity(
    "illidan-stormrage",
    "Illidan Stormrage",
    "person",
    "The Betrayer; demon hunter of legend.",
    "Illidan Stormrage is a night-elf sorcerer turned demon hunter who fought the Legion on his own terms, from the Third War to the Tomb of Sargeras."
);

entity(
    "arthas-menethil",
    "Arthas Menethil",
    "person",
    "Prince of Lordaeron who became the Lich King.",
    "Arthas Menethil, prince of Lordaeron, took Frostmourne to save his people and became a death knight, then merged with Ner'zhul as the Lich King."
);

entity(
    "lich-king",
    "The Lich King",
    "person",
    "Dark lord of the Scourge on the Frozen Throne.",
    "The Lich King is the master of the Scourge, first Ner'zhul bound in ice, then Arthas Menethil enthroned at Icecrown."
);

entity(
    "anduin-wrynn",
    "Anduin Wrynn",
    "person",
    "King of Stormwind; son of Varian.",
    "Anduin Wrynn inherits Stormwind's crown and strives for peace as Alliance high king through wars that shake Azeroth."
);

entity(
    "guldan",
    "Gul'dan",
    "person",
    "Warlock who sold the orcs to the Legion.",
    "Gul'dan is the first orc warlock, architect of the dark bargain with Kil'jaeden that corrupted the orcs and opened the path to Azeroth."
);

entity(
    "kiljaeden",
    "Kil'jaeden",
    "person",
    "Demon lord who manipulated the orcs.",
    "Kil'jaeden the Deceiver is a commander of the Burning Legion who corrupted the orcs of Draenor and schemed against Azeroth for ages."
);

entity(
    "frostmourne",
    "Frostmourne",
    "object",
    "Runeblade that claimed Arthas's soul.",
    "Frostmourne is the cursed runeblade that bound Arthas Menethil to the Lich King and became a symbol of the Scourge."
);

entity(
    "dark-portal",
    "Dark Portal",
    "object",
    "Gateway between Azeroth and Draenor.",
    "The Dark Portal, opened by Medivh and Gul'dan, linked Azeroth to Draenor and began the First War between orcs and humans."
);

entity(
    "death-knights",
    "Death Knights",
    "concept",
    "Rune-wielding undead warriors of the Scourge.",
    "Death knights are heavy cavalry of undeath—first of the Scourge under Arthas, later including free-willed heroes who rebelled at Light's Hope."
);

/* ---------- Relationships ---------- */

rel("blizzard-entertainment", "world-of-warcraft", "created", "Blizzard Entertainment created Warcraft.", 0.99, 0.99);
rel("warcraft-iii", "world-of-warcraft", "part_of", "Warcraft III is a cornerstone of the franchise.", 0.98, 0.96);
rel("world-of-warcraft-mmo", "world-of-warcraft", "part_of", "The MMO continues the Warcraft story.", 0.99, 0.97);
rel("azeroth", "world-of-warcraft", "part_of", "Azeroth is the primary world of Warcraft.", 0.99, 0.98);

rel("eastern-kingdoms", "azeroth", "located_in", "The Eastern Kingdoms are on Azeroth.", 0.98, 0.95);
rel("kalimdor", "azeroth", "located_in", "Kalimdor is on Azeroth.", 0.98, 0.95);
rel("northrend", "azeroth", "located_in", "Northrend is on Azeroth.", 0.97, 0.94);
rel("orgrimmar", "kalimdor", "located_in", "Orgrimmar stands on Kalimdor.", 0.98, 0.95);
rel("stormwind", "eastern-kingdoms", "located_in", "Stormwind is in the Eastern Kingdoms.", 0.98, 0.95);
rel("icecrown", "northrend", "located_in", "Icecrown is a region of Northrend.", 0.98, 0.95);
rel("alliance", "azeroth", "located_in", "The Alliance is based on Azeroth.", 0.97, 0.94);
rel("horde", "azeroth", "located_in", "The Horde is based on Azeroth.", 0.97, 0.94);
rel("alliance", "stormwind", "connected_to", "Stormwind is a leading Alliance capital.", 0.97, 0.94);
rel("horde", "orgrimmar", "connected_to", "Orgrimmar is a leading Horde capital.", 0.97, 0.94);
rel("burning-legion", "sargeras", "member_of", "The Burning Legion serves Sargeras.", 0.98, 0.96);
rel("sargeras", "titans", "connected_to", "Sargeras was once of the Titan Pantheon.", 0.97, 0.94);
rel("scourge", "lich-king", "member_of", "The Scourge obeys the Lich King.", 0.98, 0.96);
rel("forsaken", "horde", "member_of", "The Forsaken joined the Horde.", 0.96, 0.92);
rel("orcs-of-azeroth", "horde", "member_of", "Orcs form the core of the Horde.", 0.97, 0.94);

rel("thrall", "horde", "leads", "Thrall led and reshaped the Horde.", 0.98, 0.96);
rel("thrall", "orgrimmar", "connected_to", "Thrall founded Orgrimmar.", 0.97, 0.94);
rel("jaina-proudmoore", "alliance", "member_of", "Jaina is a major Alliance figure.", 0.96, 0.92);
rel("sylvanas-windrunner", "forsaken", "leads", "Sylvanas led the Forsaken.", 0.98, 0.95);
rel("illidan-stormrage", "night-elves", "connected_to", "Illidan is a night-elf of legend.", 0.96, 0.92);
rel("illidan-stormrage", "burning-legion", "opposed_by", "Illidan wars against the Burning Legion.", 0.97, 0.94);
rel("arthas-menethil", "lich-king", "connected_to", "Arthas becomes the Lich King.", 0.99, 0.98);
rel("lich-king", "icecrown", "located_in", "The Lich King rules from Icecrown.", 0.98, 0.95);
rel("arthas-menethil", "frostmourne", "uses", "Arthas wields Frostmourne.", 0.98, 0.96);
rel("anduin-wrynn", "stormwind", "leads", "Anduin rules the Kingdom of Stormwind.", 0.97, 0.94);
rel("guldan", "orcs-of-azeroth", "influenced", "Gul'dan corrupted the orcs for the Legion.", 0.97, 0.94);
rel("guldan", "burning-legion", "member_of", "Gul'dan served the Burning Legion's designs.", 0.96, 0.92);
rel("kiljaeden", "burning-legion", "member_of", "Kil'jaeden is a lord of the Burning Legion.", 0.98, 0.95);
rel("dark-portal", "draenor", "connected_to", "The Dark Portal links to Draenor.", 0.97, 0.94);
rel("dark-portal", "azeroth", "connected_to", "The Dark Portal opens onto Azeroth.", 0.97, 0.94);
module.exports = { entities, relationships };
