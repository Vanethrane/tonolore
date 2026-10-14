/*
 * Wine subject data — vine, appellations, terroir, and the tasting culture around them.
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

/* ---------- Root / vine / worlds ---------- */

entity(
    "wine",
    "Wine",
    "topic",
    "Terroir, appellations, and tasting cultures that organize wine as living geography.",
    "Wine is fermented grape, almost always Vitis vinifera, talked about as place: Bordeaux and Burgundy, Champagne's bubbles, New World labels, and the AOC idea that a village name is a rule as much as a flavor."
);

entity(
    "vitis-vinifera",
    "Vitis vinifera",
    "object",
    "Eurasian grape species behind nearly all fine-wine varieties.",
    "Vitis vinifera is the wine grape: Cabernet, Pinot, Chardonnay, Riesling. Phylloxera forced it onto American rootstocks; the scions stayed vinifera."
);

entity(
    "old-world-wine",
    "Old World wine",
    "topic",
    "European (and Near Eastern) tradition of place-named, often leaner wines.",
    "Old World names the European habit of appellation over grape on the label — Bordeaux, Burgundy, Rioja — and a taste culture of earth, acidity, and food."
);

entity(
    "new-world-wine",
    "New World wine",
    "topic",
    "Americas, Australia, South Africa, and other regions that often lead with variety.",
    "New World wine is the counterpart branding: Napa Cabernet, Barossa Shiraz, Mendoza Malbec — sunshine, varietal labels, and a conversation with Old World benchmarks."
);

entity(
    "terroir",
    "Terroir",
    "topic",
    "Taste of place — soil, climate, slope, and human habit in the glass.",
    "Terroir is the idea that a vineyard is not interchangeable. Burgundy made it doctrine; New World producers now argue it in their own dirt."
);

entity(
    "aoc",
    "AOC",
    "topic",
    "French appellation d'origine contrôlée — legal name tied to place and practice.",
    "AOC (now part of AOP) is the French system that says Champagne, Médoc, or Gevrey must come from mapped land and follow rules. It is terroir written into statute."
);

entity(
    "inao",
    "INAO",
    "organization",
    "French institute that defines and polices appellations.",
    "The Institut national de l'origine et de la qualité (INAO) draws the maps and methods behind AOC and related labels."
);

/* ---------- Regions ---------- */

entity(
    "bordeaux",
    "Bordeaux",
    "place",
    "Gironde region of cabernet–merlot blends and the 1855 classification.",
    "Bordeaux is the Left and Right Bank of the Gironde: cabernet-led Médoc, merlot-led Saint-Émilion and Pomerol, and a château culture the New World still copies."
);

entity(
    "burgundy",
    "Burgundy",
    "place",
    "Pinot Noir and Chardonnay villages of the Côte d'Or and beyond.",
    "Burgundy is the terroir textbook: tiny climats, Pinot and Chardonnay, and labels that name a village or a vineyard more loudly than a brand."
);

entity(
    "champagne",
    "Champagne",
    "place",
    "Northeastern French region whose name is the sparkling wine.",
    "Champagne is both place and method: Pinot and Chardonnay (and Meunier) refermented in bottle, an AOC so famous that other bubbles must pick another word."
);

entity(
    "napa-valley",
    "Napa Valley",
    "place",
    "California AVA that became the New World's cabernet showcase.",
    "Napa Valley is the U.S. region that beat first-growth Bordeaux in the 1976 Judgment of Paris for cabernet and still organizes American fine-wine ambition."
);

entity(
    "rioja",
    "Rioja",
    "place",
    "Spanish appellation of Tempranillo, American oak, and reserva aging.",
    "Rioja is Spain's best-known table-wine name, an Old World DOCa that talks in crianzas and reservas rather than château rank."
);

entity(
    "piedmont",
    "Piedmont",
    "place",
    "Northwestern Italy of Barolo, Barbaresco, and nebbiolo hills.",
    "Piedmont's Langhe is nebbiolo country: Barolo and Barbaresco as village-and-vineyard wines in an Italian key."
);

entity(
    "barossa-valley",
    "Barossa Valley",
    "place",
    "South Australian valley famous for old-vine Shiraz.",
    "Barossa is a New World icon of ripe, often fortified-history Shiraz, a contrast to Burgundy's cool pinot."
);

entity(
    "mendoza",
    "Mendoza",
    "place",
    "Argentine Andean region that made Malbec a New World grape story.",
    "Mendoza's high desert vineyards turned a Bordeaux blending grape into Argentina's signature red."
);

/* ---------- Grapes / method / crisis ---------- */

entity(
    "cabernet-sauvignon",
    "Cabernet Sauvignon",
    "object",
    "Late-ripening red that leads Médoc blends and Napa prestige bottles.",
    "Cabernet Sauvignon is the Bordeaux Left Bank and Napa building block: structure, cassis, and oak that tasting notes never tire of."
);

entity(
    "pinot-noir",
    "Pinot Noir",
    "object",
    "Thin-skinned red of Burgundy and a Champagne blending grape.",
    "Pinot Noir is Burgundy's red and one of Champagne's three. It is the grape terroir talk most often uses as a sensitive instrument."
);

entity(
    "chardonnay",
    "Chardonnay",
    "object",
    "White grape of Burgundy's Côte de Beaune, Chablis, and Champagne.",
    "Chardonnay takes oak or steel, butter or flint. It is the white half of Burgundy and the other half of many Champagne blends."
);

entity(
    "riesling",
    "Riesling",
    "object",
    "Aromatic white of Germany and Alsace, a terroir grape of slate and sweetness scales.",
    "Riesling holds acid and site so clearly that tasting-note culture uses it as a lesson in residual sugar versus dry."
);

entity(
    "malbec",
    "Malbec",
    "object",
    "Cahors grape that became Mendoza's flagship.",
    "Malbec left southwest France for Argentina and returned to export lists as a New World variety name."
);

entity(
    "champagne-method",
    "Traditional method",
    "topic",
    "Bottle fermentation and lees aging that make Champagne's bubbles.",
    "The traditional method (méthode champenoise) is second fermentation in bottle, riddling, and disgorgement — the process Champagne named and others licensed as 'classic method.'"
);

entity(
    "phylloxera",
    "Phylloxera",
    "event",
    "Nineteenth-century aphid plague that destroyed ungrafted European vineyards.",
    "Daktulosphaira vitifoliae ate Vitis vinifera roots across Europe. The fix was grafting vinifera scions onto resistant American rootstocks — a biological occupation of the Old World vineyard."
);

entity(
    "judgment-of-paris",
    "Judgment of Paris",
    "event",
    "1976 blind tasting where California beat top Bordeaux and Burgundy.",
    "Steven Spurrier's Paris tasting put Napa Chardonnay and Cabernet above French icons in a blind vote, a founding myth of New World confidence."
);

entity(
    "classification-of-1855",
    "1855 Classification",
    "object",
    "Ranking of Médoc (and Sauternes) châteaux still cited on labels.",
    "The 1855 Classification, drawn for a Paris exposition from broker prices, froze a Left Bank hierarchy that tasting culture still argues with."
);

/* ---------- People / culture ---------- */

entity(
    "sommelier",
    "Sommelier",
    "topic",
    "Wine-service professional — cellar, pairing, and the language of the list.",
    "The sommelier is the floor and cellar craft: service temperature, decanting, and translating terroir for a table. Master-sommelier exams made the job a title."
);

entity(
    "tasting-notes",
    "Tasting-note culture",
    "topic",
    "Shared vocabulary of fruit, oak, acid, and scores that mediates wine talk.",
    "Tasting notes — cassis, wet stone, 95 points — are how journals, sommeliers, and labels teach people to remember a glass. Robert Parker popularized the score; villages still resist being only a number."
);

entity(
    "robert-parker",
    "Robert Parker",
    "person",
    "Critic whose 100-point scores reshaped late-century fine-wine markets.",
    "Robert M. Parker Jr.'s Wine Advocate scores moved prices, especially in Bordeaux, and trained a generation to read wine as a number plus a paragraph."
);

entity(
    "master-sommelier",
    "Master Sommelier",
    "topic",
    "Highest title of the Court of Master Sommeliers service exam.",
    "The Master Sommelier diploma is a service-and-tasting exam culture, distinct from winemaking, that put the sommelier on a pedestal in restaurants."
);

entity(
    "oak-aging",
    "Oak aging",
    "topic",
    "Barrel time that adds vanilla, spice, and texture — or buries a grape.",
    "Oak barrels, especially French and American, are a tool of Bordeaux, Rioja, and Napa. Tasting notes track toast as carefully as fruit."
);

entity(
    "vintage",
    "Vintage",
    "topic",
    "The harvest year as a nameable chapter of weather and wine.",
    "Vintage is the year on the label: a cool Burgundy, a drought Napa, a late Champagne. Old World lists still buy by vintage as much as by brand."
);

/* ---------- Relationships ---------- */

rel("vitis-vinifera", "wine", "part_of", "Vitis vinifera is the grape species behind nearly all fine wine.", 0.99, 0.97);
rel("old-world-wine", "wine", "part_of", "Old World wine is the European appellation tradition within wine.", 0.97, 0.94);
rel("new-world-wine", "wine", "part_of", "New World wine is the varietal-led tradition of the Americas and Antipodes.", 0.97, 0.94);
rel("terroir", "wine", "supports", "Terroir is the idea that wine tastes of a particular place.", 0.97, 0.95);
rel("aoc", "old-world-wine", "part_of", "AOC is the French legal form of Old World place-naming.", 0.96, 0.93);
rel("inao", "aoc", "produced", "The INAO defines and polices French appellations.", 0.96, 0.93);
rel("aoc", "terroir", "supports", "AOC writes terroir into maps and permitted grapes.", 0.95, 0.91);

rel("bordeaux", "old-world-wine", "part_of", "Bordeaux is a core Old World region of blended reds and sweet whites.", 0.98, 0.96);
rel("burgundy", "old-world-wine", "part_of", "Burgundy is the Old World type specimen of village and vineyard terroir.", 0.98, 0.96);
rel("champagne", "old-world-wine", "part_of", "Champagne is an Old World sparkling appellation and method.", 0.98, 0.96);
rel("rioja", "old-world-wine", "part_of", "Rioja is Spain's flagship Old World aging appellation.", 0.95, 0.91);
rel("piedmont", "old-world-wine", "part_of", "Piedmont's Barolo and Barbaresco sit in the Old World village tradition.", 0.95, 0.91);
rel("napa-valley", "new-world-wine", "part_of", "Napa Valley is the United States' flagship New World fine-wine region.", 0.97, 0.94);
rel("barossa-valley", "new-world-wine", "part_of", "Barossa Valley is a New World Shiraz landmark in Australia.", 0.95, 0.91);
rel("mendoza", "new-world-wine", "part_of", "Mendoza is Argentina's New World Malbec capital.", 0.95, 0.91);

rel("cabernet-sauvignon", "bordeaux", "located_in", "Cabernet Sauvignon leads the great Left Bank Bordeaux blends.", 0.96, 0.93);
rel("cabernet-sauvignon", "napa-valley", "located_in", "Cabernet Sauvignon is Napa's prestige variety.", 0.96, 0.93);
rel("pinot-noir", "burgundy", "located_in", "Pinot Noir is the red grape of Burgundy's Côte d'Or.", 0.97, 0.94);
rel("chardonnay", "burgundy", "located_in", "Chardonnay is the white grape of Burgundy and Chablis.", 0.96, 0.93);
rel("pinot-noir", "champagne", "part_of", "Pinot Noir is one of Champagne's three permitted grapes.", 0.95, 0.91);
rel("chardonnay", "champagne", "part_of", "Chardonnay is a pillar of Champagne blends and blanc de blancs.", 0.95, 0.91);
rel("malbec", "mendoza", "located_in", "Malbec became Mendoza's signature exported grape.", 0.96, 0.93);
rel("riesling", "terroir", "supports", "Riesling is often cited as a grape that broadcasts site and sweetness clearly.", 0.93, 0.89);
rel("cabernet-sauvignon", "vitis-vinifera", "member_of", "Cabernet Sauvignon is a Vitis vinifera variety.", 0.98, 0.96);
rel("pinot-noir", "vitis-vinifera", "member_of", "Pinot Noir is a Vitis vinifera variety.", 0.98, 0.96);
rel("chardonnay", "vitis-vinifera", "member_of", "Chardonnay is a Vitis vinifera variety.", 0.98, 0.96);

rel("champagne-method", "champagne", "uses", "Champagne is made by the traditional method of bottle fermentation.", 0.97, 0.94);
rel("phylloxera", "vitis-vinifera", "opposed_by", "Phylloxera destroyed ungrafted Vitis vinifera vineyards across Europe.", 0.97, 0.94);
rel("phylloxera", "old-world-wine", "caused", "Phylloxera forced Old World growers to graft onto American rootstocks.", 0.95, 0.92);
rel("classification-of-1855", "bordeaux", "part_of", "The 1855 Classification ranked Médoc and Sauternes châteaux of Bordeaux.", 0.96, 0.93);
rel("judgment-of-paris", "napa-valley", "supports", "The 1976 Judgment of Paris made Napa a peer in the fine-wine story.", 0.95, 0.91);
rel("judgment-of-paris", "bordeaux", "opposed_by", "Paris 1976 put California cabernet above classed-growth Bordeaux in a blind vote.", 0.93, 0.89);

rel("burgundy", "terroir", "inspired", "Burgundy's climats made terroir the central language of fine wine.", 0.96, 0.93);
rel("sommelier", "tasting-notes", "uses", "Sommeliers speak the shared vocabulary of tasting notes at the table.", 0.94, 0.9);
rel("master-sommelier", "sommelier", "part_of", "The Master Sommelier title sits at the top of one sommelier exam culture.", 0.95, 0.91);
rel("robert-parker", "tasting-notes", "influenced", "Parker's scores and paragraphs trained late-century tasting-note culture.", 0.95, 0.91);
rel("robert-parker", "bordeaux", "influenced", "Parker's Wine Advocate scores moved the Bordeaux market in particular.", 0.94, 0.9);
rel("oak-aging", "tasting-notes", "produced", "Barrel toast is a standing category in tasting notes.", 0.92, 0.88);
rel("oak-aging", "rioja", "uses", "Rioja's crianza and reserva ranks are built on oak time.", 0.93, 0.89);
rel("vintage", "terroir", "connected_to", "Vintage is the yearly weather chapter of a place's terroir.", 0.93, 0.89);
rel("sommelier", "wine", "supports", "The sommelier is the service profession that interprets wine for diners.", 0.94, 0.9);

module.exports = { entities, relationships };
