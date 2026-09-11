/*
 * Pathfinder subject data — Paizo's fantasy tabletop RPG on Golarion.
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

/* ---------- Root / publisher ---------- */

entity(
    "pathfinder",
    "Pathfinder",
    "topic",
    "Paizo's fantasy RPG of Golarion, Adventure Paths, and the Pathfinder Society.",
    "Pathfinder is Paizo's tabletop role-playing game set on Golarion, known for deep character options, serialized Adventure Paths, organized Pathfinder Society play, and the related Starfinder science-fantasy spinoff."
);

entity(
    "paizo",
    "Paizo",
    "organization",
    "Publisher of Pathfinder and Starfinder.",
    "Paizo Publishing produces Pathfinder rulebooks, Adventure Paths, organized play, and the Starfinder RPG, building on decades of fantasy RPG design."
);

entity(
    "jason-bulmahn",
    "Jason Bulmahn",
    "person",
    "Lead designer of Pathfinder's early editions.",
    "Jason Bulmahn led design on Pathfinder First Edition, shaping its class archetypes, combat options, and compatibility with d20 fantasy expectations."
);

entity(
    "eric-mona",
    "Eric Mona",
    "person",
    "Editor and world-builder of Golarion lore.",
    "Eric Mona helped steer Paizo's setting bible and editorial direction, shaping Golarion's deities, nations, and Adventure Path continuity."
);

/* ---------- Editions / core works ---------- */

entity(
    "pathfinder-first-edition",
    "Pathfinder First Edition",
    "work",
    "Original Pathfinder RPG rules (2009).",
    "Pathfinder First Edition launched Paizo's flagship RPG with expanded classes, feats, and a living Golarion campaign line tied to Adventure Paths."
);

entity(
    "pathfinder-second-edition",
    "Pathfinder Second Edition",
    "work",
    "Streamlined successor with three-action combat.",
    "Pathfinder Second Edition refines action economy, archetypes, and encounter math while continuing Golarion lore and Society-organized play."
);

entity(
    "pathfinder-core-rulebook",
    "Pathfinder Core Rulebook",
    "work",
    "Foundation text for Pathfinder Second Edition.",
    "The Pathfinder Core Rulebook presents 2e classes, ancestries, spells, and gamemaster guidance for running adventures on Golarion."
);

entity(
    "starfinder",
    "Starfinder",
    "work",
    "Paizo's science-fantasy RPG spinoff.",
    "Starfinder extends Paizo's design into a science-fantasy galaxy with starships, aliens, and magic-tech, spun from Golarion's distant future."
);

/* ---------- Organized play / format ---------- */

entity(
    "pathfinder-society",
    "Pathfinder Society",
    "organization",
    "Global organized play campaign.",
    "The Pathfinder Society is Paizo's worldwide organized play program where agents undertake sanctioned scenarios that advance a shared metaplot."
);

entity(
    "adventure-paths",
    "Adventure Paths",
    "concept",
    "Serialized multi-volume campaign arcs.",
    "Adventure Paths are Paizo's linked module series—monthly chapters forming full campaigns such as Rise of the Runelords across Golarion."
);

entity(
    "rise-of-the-runelords",
    "Rise of the Runelords",
    "work",
    "Landmark Adventure Path in Varisia.",
    "Rise of the Runelords is Paizo's inaugural Adventure Path, pitting heroes against ancient Thassilonian runelords in Varisia."
);

/* ---------- World / regions ---------- */

entity(
    "golarion",
    "Golarion",
    "place",
    "Primary world of Pathfinder.",
    "Golarion is Pathfinder's core planet, a patchwork of nations, gods, and ancient ruins from Absalom's cosmopolitan isle to Cheliax's infernal bargains."
);

entity(
    "inner-sea",
    "Inner Sea region",
    "place",
    "Heart of Golarion around the Inner Sea.",
    "The Inner Sea region is Golarion's political and cultural center, where Andoran, Cheliax, Taldor, and Absalom shape Age of Lost Omens events."
);

entity(
    "absalom",
    "Absalom",
    "place",
    "City at the center of the world.",
    "Absalom is the grand city-isle at Golarion's heart, home to the Starstone, faction politics, and the Pathfinder Society's Grand Lodge."
);

entity(
    "varisia",
    "Varisia",
    "place",
    "Frontier region of ancient Thassilon.",
    "Varisia is a rugged northwestern region where Korvosan trade, Shoanti traditions, and Thassilonian ruins anchor early Adventure Paths."
);

entity(
    "andoran",
    "Andoran",
    "place",
    "Democratic nation of liberty.",
    "Andoran is Golarion's revolutionary republic, exporting Eagle Knights and ideals of freedom against tyranny and slavery."
);

entity(
    "cheliax",
    "Cheliax",
    "place",
    "Infernal empire of devils and contracts.",
    "Cheliax is a powerful infernal empire where House Thrune rules through diabolic pacts, shaping much of the Inner Sea's politics."
);

/* ---------- Iconics (light touch) ---------- */

entity(
    "valeros",
    "Valeros",
    "person",
    "Fighter iconic of Pathfinder art and pregens.",
    "Valeros is Pathfinder's sword-and-shield fighter iconic, appearing on covers and pregens as a straightforward heroic adventurer."
);

entity(
    "merisiel",
    "Merisiel",
    "person",
    "Rogue iconic of Pathfinder branding.",
    "Merisiel is the elven rogue iconic known for twin daggers and wary independence, featured across Pathfinder art and introductory adventures."
);

entity(
    "seelah",
    "Seelah",
    "person",
    "Paladin iconic sworn to Iomedae.",
    "Seelah is the paladin iconic devoted to Iomedae, embodying knightly virtue in Pathfinder pregens and organized play materials."
);

entity(
    "kyra",
    "Kyra",
    "person",
    "Cleric iconic healer of the iconics.",
    "Kyra is the cleric iconic who channels divine magic in pregens and art, often paired with other iconics in introductory scenarios."
);

/* ---------- Deities ---------- */

entity(
    "abadar",
    "Abadar",
    "person",
    "God of cities, trade, and law.",
    "Abadar is Golarion's god of civilization and commerce, patron of merchants, judges, and those who build ordered prosperity."
);

entity(
    "torag",
    "Torag",
    "person",
    "Dwarven god of forge and protection.",
    "Torag is the dwarven deity of the forge and defense, revered by clans who hold mountains and craft against Golarion's threats."
);

entity(
    "shelyn",
    "Shelyn",
    "person",
    "Goddess of art, beauty, and love.",
    "Shelyn inspires artists and lovers across Golarion, sister to Zon-Kuthon and a beacon of compassion amid divine tragedy."
);

entity(
    "asmodeus",
    "Asmodeus",
    "person",
    "Prince of Darkness and patron of Cheliax.",
    "Asmodeus is the archdevil worshiped as god of tyranny and contracts, central to Cheliax's infernal church and cosmic hierarchy."
);

entity(
    "pharasma",
    "Pharasma",
    "person",
    "Lady of Graves and judge of souls.",
    "Pharasma judges the dead at the Boneyard, making her faith crucial to Golarion's cosmology and resurrection lore."
);

/* ---------- Concepts / creatures ---------- */

entity(
    "goblins",
    "Goblins",
    "concept",
    "Comic menace and mascot creatures of Pathfinder.",
    "Goblins are small, chaotic raiders Paizo popularized as mascots—fire-loving troublemakers in pregens, comics, and introductory adventures."
);

entity(
    "three-action-economy",
    "Three-action economy",
    "concept",
    "2e combat structure of three actions per turn.",
    "Pathfinder Second Edition's three-action economy lets characters spend up to three actions per turn on strikes, spells, and movement, defining its tactical pace."
);

entity(
    "archetypes",
    "Archetypes",
    "concept",
    "Modular class options in Pathfinder 2e.",
    "Archetypes in Pathfinder Second Edition graft new abilities onto classes, letting characters dabble in alchemist bombs, duelist feats, or Society training."
);

entity(
    "age-of-lost-omens",
    "Age of Lost Omens",
    "concept",
    "Current Golarion era after prophecy fails.",
    "The Age of Lost Omens is Golarion's present era after Aroden's death shattered prophecy, opening Pathfinder Second Edition's revised timeline."
);

entity(
    "grand-lodge",
    "Grand Lodge",
    "place",
    "Pathfinder Society headquarters in Absalom.",
    "The Grand Lodge in Absalom houses the Pathfinder Society's leadership, archives, and venture-captain briefings for worldwide agents."
);

/* ---------- Relationships ---------- */

rel("paizo", "pathfinder", "publishes", "Paizo publishes Pathfinder.", 0.99, 0.99);
rel("jason-bulmahn", "pathfinder-first-edition", "created", "Bulmahn led design on Pathfinder 1e.", 0.97, 0.95);
rel("eric-mona", "golarion", "influenced", "Mona shaped Golarion's editorial lore.", 0.94, 0.9);
rel("paizo", "starfinder", "publishes", "Paizo also publishes Starfinder.", 0.97, 0.94);
rel("starfinder", "pathfinder", "related_to", "Starfinder is Paizo's sci-fi spinoff of Golarion's future.", 0.93, 0.88);

rel("pathfinder-first-edition", "pathfinder", "part_of", "1e is the original Pathfinder line.", 0.98, 0.97);
rel("pathfinder-second-edition", "pathfinder", "part_of", "2e is the current Pathfinder edition.", 0.99, 0.98);
rel("pathfinder-core-rulebook", "pathfinder-second-edition", "part_of", "The Core Rulebook anchors 2e.", 0.98, 0.97);
rel("pathfinder-first-edition", "pathfinder-second-edition", "preceded", "1e preceded Pathfinder 2e.", 0.97, 0.95);

rel("pathfinder-society", "pathfinder", "part_of", "Society play is official Pathfinder organized play.", 0.98, 0.96);
rel("pathfinder-society", "grand-lodge", "located_in", "The Society is headquartered at the Grand Lodge.", 0.97, 0.95);
rel("grand-lodge", "absalom", "located_in", "The Grand Lodge stands in Absalom.", 0.98, 0.96);
rel("adventure-paths", "pathfinder", "part_of", "Adventure Paths are Paizo's serialized campaigns.", 0.98, 0.97);
rel("rise-of-the-runelords", "adventure-paths", "part_of", "Runelords is a flagship Adventure Path.", 0.97, 0.95);
rel("rise-of-the-runelords", "varisia", "occurred_at", "Runelords unfolds across Varisia.", 0.96, 0.93);

rel("golarion", "pathfinder", "part_of", "Golarion is Pathfinder's core setting.", 0.99, 0.99);
rel("inner-sea", "golarion", "located_in", "The Inner Sea lies at Golarion's heart.", 0.98, 0.96);
rel("absalom", "inner-sea", "located_in", "Absalom dominates the Inner Sea.", 0.97, 0.95);
rel("andoran", "inner-sea", "located_in", "Andoran borders the Inner Sea.", 0.96, 0.93);
rel("cheliax", "inner-sea", "located_in", "Cheliax is an Inner Sea power.", 0.97, 0.94);
rel("varisia", "golarion", "located_in", "Varisia is a northwestern Golarion region.", 0.96, 0.93);

rel("valeros", "pathfinder", "related_to", "Valeros is a Pathfinder iconic.", 0.95, 0.9);
rel("merisiel", "pathfinder", "related_to", "Merisiel is a Pathfinder iconic.", 0.95, 0.9);
rel("seelah", "pathfinder", "related_to", "Seelah is a Pathfinder iconic.", 0.95, 0.9);
rel("kyra", "pathfinder", "related_to", "Kyra is a Pathfinder iconic.", 0.95, 0.9);

rel("asmodeus", "cheliax", "connected_to", "Cheliax's state religion venerates Asmodeus.", 0.97, 0.95);
rel("abadar", "absalom", "connected_to", "Abadar's faith thrives in mercantile Absalom.", 0.93, 0.88);
rel("pharasma", "golarion", "related_to", "Pharasma judges souls across Golarion.", 0.96, 0.92);
rel("torag", "golarion", "related_to", "Torag is a major dwarven deity of Golarion.", 0.94, 0.9);
rel("shelyn", "golarion", "related_to", "Shelyn's faith spans Golarion's cultures.", 0.93, 0.88);

rel("three-action-economy", "pathfinder-second-edition", "part_of", "2e combat uses three actions per turn.", 0.98, 0.96);
rel("archetypes", "pathfinder-second-edition", "part_of", "Archetypes are a 2e character option.", 0.97, 0.95);
rel("age-of-lost-omens", "golarion", "part_of", "The Age of Lost Omens is Golarion's current era.", 0.96, 0.93);
rel("goblins", "pathfinder", "related_to", "Goblins are Pathfinder mascot creatures.", 0.94, 0.9);
rel("pathfinder-society", "adventure-paths", "related_to", "Society scenarios complement Adventure Path lore.", 0.91, 0.86);

module.exports = { entities, relationships };
