/*
 * Coffee subject data — species, origin regions, brews, and café culture.
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

/* ---------- Root / species / origins ---------- */

entity(
    "coffee",
    "Coffee",
    "topic",
    "Beans, brewing traditions, and café cultures from origin to specialty.",
    "Coffee is the drink and the crop: Coffea arabica from Ethiopian forests, Yemeni mocha on the Red Sea, espresso in Italy, and the third-wave taste for terroir that treats a farm like a vineyard."
);

entity(
    "ethiopia",
    "Ethiopia",
    "place",
    "Genetic homeland of Arabica and the origin story of coffee drinking.",
    "Ethiopia holds wild Coffea arabica and the Kaldi legend. Regions such as Yirgacheffe and Sidama are still named on specialty bags as origin, not just country."
);

entity(
    "yemen",
    "Yemen",
    "place",
    "First great export culture of roasted coffee, shipped from Mocha.",
    "Yemen cultivated coffee when the trade was still a Red Sea monopoly. Mocha — the port — named a style and a chocolate-adjacent myth that outlived the docks."
);

entity(
    "coffea-arabica",
    "Coffea arabica",
    "object",
    "Highland species behind most specialty and traditional café coffee.",
    "Coffea arabica, native to Ethiopian highlands, is the species of mocha, espresso blends, and third-wave single origins — milder and more terroir-sensitive than robusta."
);

entity(
    "coffea-canephora",
    "Coffea canephora",
    "object",
    "Robusta — stronger, more caffeinated species used in espresso blends and instant.",
    "Coffea canephora (robusta) grows hotter and lower than arabica. Italian espresso often includes it for crema and punch; specialty culture usually sidelines it."
);

entity(
    "yirgacheffe",
    "Yirgacheffe",
    "place",
    "Gedeo origin known for floral, tea-like washed arabicas.",
    "Yirgacheffe is an Ethiopian woreda whose washed lots became a third-wave type specimen: jasmine, citrus, and a light body sold under the place name."
);

entity(
    "sidama",
    "Sidama",
    "place",
    "Southern Ethiopian origin, often labeled Sidamo on older bags.",
    "Sidama (long marketed as Sidamo) is a broad Ethiopian coffee region whose cooperatives still feed origin-named arabica."
);

entity(
    "mocha",
    "Mocha",
    "place",
    "Yemeni port that named mocha coffee and a later chocolate drink.",
    "Al-Mukha (Mocha) shipped Yemeni beans to Cairo and Europe. The port's name stuck to dry-processed Yemeni lots and, later, to coffee-plus-chocolate."
);

entity(
    "kaldi",
    "Kaldi",
    "person",
    "Legendary Ethiopian goatherd who noticed dancing goats at coffee shrubs.",
    "Kaldi is the origin folktale, not a documented planter: goats ate cherries, grew lively, and a monk — in most tellings — tried the fruit. The story marks Ethiopia as mythic source."
);

/* ---------- Brews / tools / roles ---------- */

entity(
    "espresso",
    "Espresso",
    "object",
    "Short pressurized shot that organizes Italian bar culture and most café menus.",
    "Espresso is coffee extracted under pressure as a small, crema-topped shot. It is the base of cappuccino and the technical center of the barista's craft."
);

entity(
    "espresso-machine",
    "Espresso machine",
    "object",
    "Boiler-and-pump device that made espresso a bar drink.",
    "From Gaggia's postwar lever to modern rotary pumps, the espresso machine is the hardware of the Italian bar and the Starbucks-era café."
);

entity(
    "cappuccino",
    "Cappuccino",
    "object",
    "Espresso with textured milk, the everyday milk drink of the bar.",
    "Cappuccino sits beside espresso as the milk drink whose foam and ratio baristas argue about, later a canvas for latte art."
);

entity(
    "french-press",
    "French press",
    "object",
    "Immersion brewer with a mesh plunger, also called a cafetière.",
    "The French press steeps grounds in hot water and plunges them. It is the home-method counterpart to espresso's café theater."
);

entity(
    "pour-over",
    "Pour-over",
    "object",
    "Manual drip through a cone — Chemex, V60, and the third-wave ritual.",
    "Pour-over brewing made the kettle and paper filter a performance: control of flow as a way to taste origin, not just strength."
);

entity(
    "chemex",
    "Chemex",
    "object",
    "Hourglass glass brewer and bonded filter, a mid-century pour-over icon.",
    "The Chemex, designed by Peter Schlumbohm in 1941, became a third-wave object: clean cups and a vessel that looks like lab glass."
);

entity(
    "barista",
    "Barista",
    "topic",
    "The craft role at the machine — shots, milk, and service.",
    "Barista, Italian for bartender, named the person who pulls espresso and texts milk. Championships and latte art made the role a profession in third-wave shops."
);

entity(
    "latte-art",
    "Latte art",
    "object",
    "Pattern poured in crema with steamed milk.",
    "Latte art — rosettas, hearts, tulips — is the visible skill mark of the specialty barista, a foam signature on cappuccino and flat whites."
);

entity(
    "coffee-terroir",
    "Coffee terroir",
    "topic",
    "Taste of place: altitude, variety, process, and soil in the cup.",
    "Coffee terroir is the wine idea applied to beans. Third-wave menus list Yirgacheffe or a Yemeni lot the way a list lists a village, not a blend number."
);

entity(
    "third-wave-coffee",
    "Third wave coffee",
    "topic",
    "Specialty movement that treats origin, roast, and brew as craft.",
    "Third wave names the post-Starbucks specialty scene: lighter roasts, single origins, pour-over bars, and the barista as taster rather than just operator."
);

entity(
    "specialty-coffee",
    "Specialty coffee",
    "topic",
    "Trade grade and culture for high-scoring, traceable lots.",
    "Specialty coffee, scored and often certified by trade associations, is the commercial language of third wave — defects counted, origin named, roast dated."
);

/* ---------- Commerce / café culture ---------- */

entity(
    "starbucks",
    "Starbucks",
    "organization",
    "Seattle chain that scaled espresso drinks into a global second-wave brand.",
    "Starbucks, from a Pike Place store to thousands of cafés, made lattes everyday English and is the commercial node third wave defined itself against and after."
);

entity(
    "howard-schultz",
    "Howard Schultz",
    "person",
    "Executive who expanded Starbucks on an Italian-bar model.",
    "Howard Schultz pushed Starbucks from a bean counter toward espresso bars after seeing Milan, then scaled that theater worldwide."
);

entity(
    "seattle",
    "Seattle",
    "place",
    "City of Starbucks' rise and a U.S. specialty-coffee incubator.",
    "Seattle is the corporate hometown of Starbucks and a 1980s–90s nursery of independent roasters that fed the American third wave."
);

entity(
    "italian-bar",
    "Italian coffee bar",
    "place",
    "Stand-up espresso counter that set the template for café machines worldwide.",
    "The Italian bar — marble, quick espresso, cappuccino before 11 — is the social form espresso machines were built for, later copied and stretched by chains."
);

entity(
    "vienna-coffee-house",
    "Viennese coffee house",
    "place",
    "Historic café type of newspapers, pastry, and long sitting.",
    "Vienna's coffee houses are a UNESCO-noted café culture: not espresso theater but rooms where coffee is the ticket to stay."
);

entity(
    "turkish-coffee",
    "Turkish coffee",
    "object",
    "Unfiltered pot brew of finely ground coffee, a Near Eastern classic.",
    "Turkish coffee, cooked in a cezve, is the older pot method that reached Europe from Ottoman cafés before espresso existed."
);

entity(
    "brazil",
    "Brazil",
    "place",
    "World's largest coffee producer, backbone of many espresso blends.",
    "Brazil's volume arabica (and robusta) lots underwrite commodity and many espresso blends, a New World giant beside Ethiopia's origin prestige."
);

entity(
    "colombia",
    "Colombia",
    "place",
    "Andean producer whose washed arabica became a supermarket origin name.",
    "Colombia's Federación and Juan Valdez campaigns made a country name a quality cue, sitting between commodity Brazil and microlot Ethiopia on many menus."
);

entity(
    "blue-mountain",
    "Jamaica Blue Mountain",
    "object",
    "High-grown Jamaican arabica sold as a luxury origin.",
    "Blue Mountain coffee is a tightly branded Jamaican arabica, an origin used as a prestige node rather than an everyday cup."
);

entity(
    "roasting",
    "Coffee roasting",
    "topic",
    "The heat step that turns green seed into the brown bean cafés grind.",
    "Roasting develops the flavors menus describe. Third-wave roasters often stop lighter than second-wave chains to keep origin character."
);

/* ---------- Relationships ---------- */

rel("ethiopia", "coffee", "located_in", "Ethiopia is the genetic and legendary origin of Arabica coffee.", 0.97, 0.95);
rel("yemen", "coffee", "located_in", "Yemen was the first long-distance export culture of the coffee trade.", 0.96, 0.93);
rel("coffea-arabica", "ethiopia", "located_in", "Coffea arabica is native to the Ethiopian highlands.", 0.98, 0.96);
rel("coffea-arabica", "coffee", "part_of", "Arabica is the species behind most specialty and café coffee.", 0.98, 0.96);
rel("coffea-canephora", "coffee", "part_of", "Robusta is the other commercial coffee species.", 0.96, 0.93);
rel("yirgacheffe", "ethiopia", "part_of", "Yirgacheffe is an Ethiopian origin region for washed arabica.", 0.97, 0.94);
rel("sidama", "ethiopia", "part_of", "Sidama is a southern Ethiopian coffee origin.", 0.96, 0.93);
rel("mocha", "yemen", "part_of", "Mocha is the Yemeni port that named mocha coffee.", 0.97, 0.94);
rel("coffea-arabica", "yirgacheffe", "located_in", "Yirgacheffe lots are Coffea arabica sold under a place name.", 0.95, 0.91);
rel("coffea-arabica", "mocha", "located_in", "Historic mocha shipments were Yemeni arabica through Al-Mukha.", 0.94, 0.9);
rel("kaldi", "ethiopia", "located_in", "The Kaldi legend is set among Ethiopian coffee shrubs.", 0.93, 0.89);
rel("kaldi", "coffea-arabica", "connected_to", "Kaldi is the folktale attached to the discovery of Arabica cherries.", 0.9, 0.86);

rel("espresso", "italian-bar", "occurred_at", "Espresso is the defining drink of the Italian coffee bar.", 0.97, 0.94);
rel("espresso-machine", "espresso", "produced", "The espresso machine is what makes espresso a bar drink.", 0.97, 0.94);
rel("cappuccino", "espresso", "uses", "Cappuccino is built on a shot of espresso and textured milk.", 0.96, 0.93);
rel("barista", "espresso-machine", "uses", "The barista's craft is organized around the espresso machine.", 0.96, 0.93);
rel("latte-art", "barista", "produced", "Latte art is the poured signature of specialty baristas.", 0.94, 0.9);
rel("latte-art", "cappuccino", "uses", "Latte art is poured onto milk drinks such as cappuccino.", 0.93, 0.89);

rel("french-press", "coffee", "uses", "The French press is a home immersion method for brewing coffee.", 0.94, 0.9);
rel("pour-over", "third-wave-coffee", "part_of", "Pour-over is a ritual brew method of the third wave.", 0.95, 0.91);
rel("chemex", "pour-over", "part_of", "The Chemex is a classic pour-over brewer.", 0.96, 0.93);
rel("coffee-terroir", "third-wave-coffee", "supports", "Third wave talks about coffee as terroir, like wine.", 0.95, 0.92);
rel("yirgacheffe", "coffee-terroir", "supports", "Yirgacheffe is a type specimen of coffee sold as taste of place.", 0.94, 0.9);
rel("specialty-coffee", "third-wave-coffee", "connected_to", "Specialty grading is the trade language of the third wave.", 0.95, 0.91);
rel("roasting", "coffee-terroir", "uses", "Roast level is how terroir is kept or cooked out of the bean.", 0.93, 0.89);
rel("third-wave-coffee", "starbucks", "followed", "Third wave defined itself after and against Starbucks-scale second-wave espresso.", 0.94, 0.9);

rel("howard-schultz", "starbucks", "leads", "Howard Schultz expanded Starbucks on an Italian espresso-bar model.", 0.96, 0.93);
rel("starbucks", "seattle", "located_in", "Starbucks began and is still headquartered in the Seattle area.", 0.95, 0.91);
rel("starbucks", "espresso", "uses", "Starbucks scaled espresso-and-milk drinks into a global chain menu.", 0.95, 0.91);
rel("howard-schultz", "italian-bar", "inspired", "Schultz has said Milan's bars inspired the Starbucks espresso format.", 0.93, 0.89);
rel("turkish-coffee", "yemen", "connected_to", "Turkish pot coffee sits on the older Ottoman and Red Sea drinking line from Yemeni trade.", 0.9, 0.86);
rel("vienna-coffee-house", "coffee", "part_of", "The Viennese coffee house is a historic European café form.", 0.92, 0.88);
rel("brazil", "espresso", "supports", "Brazilian lots are a volume base of many espresso blends.", 0.93, 0.89);
rel("colombia", "coffea-arabica", "produced", "Colombia is a major washed-arabica origin on café menus.", 0.93, 0.89);
rel("blue-mountain", "coffea-arabica", "part_of", "Jamaica Blue Mountain is a branded highland arabica.", 0.94, 0.9);
rel("espresso", "coffea-canephora", "uses", "Many traditional espresso blends include robusta for crema and body.", 0.91, 0.87);

module.exports = { entities, relationships };
