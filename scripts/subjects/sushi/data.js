/*
 * Sushi subject data — Edo-mae craft, cuts, markets, and the people behind the counter.
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

/* ---------- Root / styles ---------- */

entity(
    "sushi",
    "Sushi",
    "topic",
    "Vinegared rice cuisine — regional styles, craft lineages, and global adaptation.",
    "Sushi is seasoned rice plus seafood or vegetables, not raw fish alone. Edo-mae nigiri, Osaka pressed forms, conveyor-belt shops, and California rolls are chapters of the same rice-and-vinegar craft."
);

entity(
    "narezushi",
    "Narezushi",
    "object",
    "Older fermented fish-and-rice preservation that predates Edo nigiri.",
    "Narezushi, still made as funazushi in Shiga, is the lactic-fermented ancestor: rice was once discarded after curing the fish. Edo street sushi sped that idea into a meal."
);

entity(
    "edomae-sushi",
    "Edomae sushi",
    "topic",
    "Tokyo bay style — nigiri born as Edo street food, still the prestige craft.",
    "Edomae (Edo-mae) sushi is the Tokyo style: hand-pressed nigiri, often with aged or cured fish from the old bay, served at a counter by an itamae."
);

entity(
    "hanaya-yohei",
    "Hanaya Yohei",
    "person",
    "Edo cook credited with popularizing quick nigiri as street food.",
    "Hanaya Yohei, working in early nineteenth-century Edo, is the usual namesake for nigiri sold from a stall — sushi as fast food, not festival fermentation."
);

entity(
    "edo",
    "Edo",
    "place",
    "The city now called Tokyo, where nigiri became a street craft.",
    "Edo's bay and night stalls are the setting of Edomae sushi. When the city was renamed Tokyo, the style kept the old name."
);

/* ---------- Forms / condiments / rice ---------- */

entity(
    "nigiri",
    "Nigiri",
    "object",
    "Hand-pressed oblong of sushi rice topped with a slice of fish or egg.",
    "Nigiri-zushi is the Edomae unit: shari in the palm, neta on top, sometimes a brush of soy or a smear of wasabi between."
);

entity(
    "maki",
    "Maki",
    "object",
    "Rice and fillings rolled in nori and sliced into rounds.",
    "Makizushi is the rolled form — hosomaki, futomaki, uramaki — the shape conveyor belts and grocery trays made global."
);

entity(
    "gunkan-maki",
    "Gunkan-maki",
    "object",
    "Battleship roll — nori wall holding a loose topping on rice.",
    "Gunkan-maki wraps a strip of nori around shari so uni, ikura, or tartare will sit still, a Meiji-era addition to the nigiri counter."
);

entity(
    "sashimi",
    "Sashimi",
    "object",
    "Sliced raw seafood served without sushi rice.",
    "Sashimi is the rice-less sibling: the same fish skills, different meal. Menus pair it with sushi but it is not sushi until rice is present."
);

entity(
    "sushi-rice",
    "Sushi rice",
    "object",
    "Shari — short-grain rice seasoned with vinegar, sugar, and salt.",
    "Sushi rice (shari) is the craft that itamae name before the fish: cooked, fanned, and dressed so each nigiri holds and tastes seasoned, not plain."
);

entity(
    "rice-vinegar",
    "Rice vinegar",
    "object",
    "Seasoning that turns plain rice into sushi rice.",
    "Rice vinegar, with salt and a little sugar, is what makes shari. Edo cooks used it to mimic the tang of older fermented sushi in a few minutes."
);

entity(
    "nori",
    "Nori",
    "object",
    "Toasted laver sheets that wrap maki and gunkan.",
    "Nori is the dried seaweed sheet of rolls and gunkan, toasted so it crackles against rice."
);

entity(
    "wasabi",
    "Wasabi",
    "object",
    "Grated rhizome — true wasabia or the common horseradish stand-in.",
    "Wasabi, traditionally grated on sharkskin, sits between fish and rice on nigiri or beside sashimi. Most casual shops use horseradish-tinted paste."
);

entity(
    "soy-sauce",
    "Soy sauce",
    "object",
    "Shoyu used as a dip or a brush for nigiri.",
    "Soy sauce is the salt of the sushi counter. Edomae chefs often brush it on the fish so the rice is not dunked to pieces."
);

entity(
    "gari",
    "Gari",
    "object",
    "Sweet pickled ginger eaten between pieces as a palate reset.",
    "Gari is not a garnish to pile on nigiri; it is a pause between fish so the last taste does not smear the next."
);

entity(
    "otoro",
    "Otoro",
    "object",
    "Fattiest cut of tuna belly, a luxury neta of the modern counter.",
    "Otoro is the melt of bluefin belly that Tsukiji and Toyosu auctions made famous, a prestige topping of postwar and overseas omakase."
);

/* ---------- People / places / service ---------- */

entity(
    "jiro-ono",
    "Jiro Ono",
    "person",
    "Edomae master of Sukiyabashi Jiro, subject of a global documentary fame.",
    "Jiro Ono built a Ginza counter around aging, rice temperature, and a short omakase. His name stands, in world lore, for uncompromising Edomae craft."
);

entity(
    "sukiyabashi-jiro",
    "Sukiyabashi Jiro",
    "place",
    "Jiro's basement counter in Ginza, a pilgrimage omakase.",
    "Sukiyabashi Jiro is the tiny Ginza shop where Ono and his sons served a fixed sequence of nigiri, later a Michelin and film landmark."
);

entity(
    "itamae",
    "Itamae",
    "topic",
    "The sushi chef behind the counter — board, knife, and hospitality.",
    "Itamae means the person at the cutting board. In sushi, it is the craft identity: rice, fish, timing, and the talk across the hinoki."
);

entity(
    "omakase",
    "Omakase",
    "topic",
    "Chef's-choice sequence, the tasting form of a serious sushi counter.",
    "Omakase — 'I leave it to you' — is how Edomae shops pace nigiri: the itamae chooses order, temperature, and neta rather than a à-la-carte checklist."
);

entity(
    "tsukiji",
    "Tsukiji Market",
    "place",
    "Tokyo's longtime inner wholesale market, especially the tuna auctions.",
    "Tsukiji's inner market supplied Edomae shops for decades. Chefs bought at dawn; tourists later crowded the tuna auction until the inner market moved."
);

entity(
    "toyosu",
    "Toyosu Market",
    "place",
    "Wholesale market that replaced Tsukiji's inner market in 2018.",
    "Toyosu is the new Tokyo fish market on landfill in Koto, the successor auction floor for the tuna and shellfish that still feed Ginza counters."
);

entity(
    "tokyo",
    "Tokyo",
    "place",
    "City of Edomae sushi, Ginza counters, and the central fish markets.",
    "Tokyo, once Edo, is still the capital of nigiri prestige: markets, apprenticeships, and the shops that trained the global omakase boom."
);

entity(
    "kaiten-sushi",
    "Kaiten-zushi",
    "place",
    "Conveyor-belt sushi — plates on a belt, a postwar casual form.",
    "Kaiten-zushi, credited to Yoshiaki Shiraishi in Osaka in 1958, put maki and nigiri on a conveyor so sushi could be a self-serve lunch, not only a counter craft."
);

entity(
    "yoshiaki-shiraishi",
    "Yoshiaki Shiraishi",
    "person",
    "Osaka restaurateur who invented conveyor-belt sushi.",
    "Yoshiaki Shiraishi opened Mawaru Genroku Sushi with a belt inspired by a beer brewery, inventing the kaiten form that spread through Japan and then abroad."
);

entity(
    "california-roll",
    "California roll",
    "object",
    "Inside-out crab (or surimi), avocado, and cucumber roll — a global gateway.",
    "The California roll, attributed to Japanese chefs working in Los Angeles, hid nori inside and used avocado when fatty tuna was scarce — sushi adapted for a new coast."
);

entity(
    "osaka",
    "Osaka",
    "place",
    "City of pressed hako-zushi and the first conveyor-belt shop.",
    "Osaka's sushi lore is boxes and belts more than Ginza nigiri: oshizushi and Shiraishi's kaiten experiment."
);

entity(
    "funazushi",
    "Funazushi",
    "object",
    "Shiga narezushi of nigorobuna carp, a living fermented ancestor.",
    "Funazushi is still made around Lake Biwa: fish packed in rice and salt for months, the sour relic of sushi before vinegar shortcuts."
);

entity(
    "tamago",
    "Tamago",
    "object",
    "Sweet rolled omelet nigiri, a test piece of the counter.",
    "Tamagoyaki as nigiri is the itamae's calling card in some shops: a cooked neta that still has to taste like that house."
);

/* ---------- Relationships ---------- */

rel("narezushi", "sushi", "preceded", "Fermented narezushi preceded vinegar-seasoned Edo sushi as the older form.", 0.96, 0.93);
rel("funazushi", "narezushi", "part_of", "Funazushi is a living Shiga example of narezushi.", 0.95, 0.91);
rel("edomae-sushi", "sushi", "part_of", "Edomae sushi is the Tokyo nigiri tradition within sushi.", 0.98, 0.96);
rel("edomae-sushi", "edo", "located_in", "Edomae sushi is the style of Edo, the city now called Tokyo.", 0.97, 0.94);
rel("edo", "tokyo", "preceded", "Edo is the former name and urban setting of what became Tokyo.", 0.96, 0.93);
rel("hanaya-yohei", "nigiri", "created", "Hanaya Yohei is credited with popularizing street nigiri in Edo.", 0.95, 0.91);
rel("nigiri", "edomae-sushi", "part_of", "Nigiri is the central form of Edomae sushi.", 0.98, 0.96);

rel("maki", "sushi", "part_of", "Maki is the rolled form of sushi.", 0.97, 0.94);
rel("gunkan-maki", "maki", "part_of", "Gunkan-maki is a nori-walled variant of the roll.", 0.95, 0.91);
rel("sashimi", "sushi", "connected_to", "Sashimi uses the same fish craft but is not sushi without rice.", 0.93, 0.89);
rel("sushi-rice", "sushi", "part_of", "Seasoned sushi rice is what makes a piece sushi.", 0.98, 0.96);
rel("rice-vinegar", "sushi-rice", "produced", "Rice vinegar, with salt and sugar, turns cooked rice into shari.", 0.97, 0.94);
rel("nori", "maki", "part_of", "Nori is the wrapper of makizushi.", 0.96, 0.93);
rel("nori", "gunkan-maki", "part_of", "A nori strip is the 'hull' of gunkan-maki.", 0.95, 0.91);

rel("wasabi", "nigiri", "supports", "Wasabi is traditionally placed between rice and fish on nigiri.", 0.95, 0.91);
rel("soy-sauce", "nigiri", "uses", "Soy sauce is brushed or dabbed on nigiri rather than used to soak the rice.", 0.94, 0.9);
rel("gari", "omakase", "supports", "Gari resets the palate between pieces in a sushi sequence.", 0.93, 0.89);
rel("otoro", "nigiri", "part_of", "Otoro is a luxury tuna neta served as nigiri.", 0.94, 0.9);
rel("tamago", "nigiri", "part_of", "Tamago is a cooked omelet nigiri used as a house signature.", 0.93, 0.89);

rel("jiro-ono", "sukiyabashi-jiro", "leads", "Jiro Ono is the founding itamae of Sukiyabashi Jiro.", 0.98, 0.96);
rel("jiro-ono", "edomae-sushi", "member_of", "Jiro's counter is a modern emblem of Edomae craft.", 0.96, 0.93);
rel("sukiyabashi-jiro", "tokyo", "located_in", "Sukiyabashi Jiro is a Ginza counter in Tokyo.", 0.97, 0.94);
rel("itamae", "edomae-sushi", "leads", "The itamae is the craftsperson who runs an Edomae counter.", 0.96, 0.93);
rel("omakase", "itamae", "uses", "Omakase leaves the sequence of nigiri to the itamae.", 0.96, 0.93);
rel("jiro-ono", "omakase", "uses", "Jiro's shop is known worldwide as a strict omakase nigiri sequence.", 0.95, 0.91);

rel("tsukiji", "tokyo", "located_in", "Tsukiji Market sat in central Tokyo as the inner wholesale market.", 0.97, 0.94);
rel("toyosu", "tokyo", "located_in", "Toyosu Market is Tokyo's current central wholesale fish market.", 0.97, 0.94);
rel("toyosu", "tsukiji", "followed", "Toyosu succeeded Tsukiji's inner market in 2018.", 0.96, 0.93);
rel("edomae-sushi", "tsukiji", "uses", "Edomae shops bought dawn fish at Tsukiji for generations.", 0.94, 0.9);
rel("otoro", "tsukiji", "occurred_at", "Tsukiji's tuna auctions made otoro a public luxury.", 0.92, 0.88);

rel("yoshiaki-shiraishi", "kaiten-sushi", "created", "Yoshiaki Shiraishi invented conveyor-belt sushi in Osaka.", 0.97, 0.94);
rel("kaiten-sushi", "osaka", "located_in", "The first kaiten-zushi shop opened in Osaka.", 0.95, 0.91);
rel("kaiten-sushi", "sushi", "part_of", "Conveyor-belt service is a casual form of sushi, not a different cuisine.", 0.94, 0.9);
rel("california-roll", "maki", "part_of", "The California roll is an inside-out maki adapted in the United States.", 0.95, 0.91);
rel("california-roll", "nori", "uses", "The California roll hides nori inside the rice.", 0.93, 0.89);

module.exports = { entities, relationships };
