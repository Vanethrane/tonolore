/*
 * Fallout subject data — post-apocalyptic RPG franchise.
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
    "fallout",
    "Fallout",
    "topic",
    "Post-nuclear RPG franchise of vaults, wastelands, and factions.",
    "Fallout is the post-apocalyptic role-playing franchise of Vault-Tec shelters, irradiated America, and rival powers such as the Brotherhood of Steel, Enclave, NCR, and Caesar's Legion across the Capital Wasteland, Mojave, and Commonwealth."
);

entity(
    "interplay-entertainment",
    "Interplay Entertainment",
    "organization",
    "Original publisher of classic Fallout RPGs.",
    "Interplay Entertainment published the original Fallout and Fallout 2, establishing the isometric CRPGs that defined the series' dark humor and choice-driven wasteland."
);

entity(
    "bethesda-softworks",
    "Bethesda Softworks",
    "organization",
    "Publisher and steward of modern Fallout.",
    "Bethesda Softworks publishes Fallout 3, Fallout 4, and related titles, continuing the franchise after acquiring the Fallout IP from Interplay's era."
);

entity(
    "tim-cain",
    "Tim Cain",
    "person",
    "Lead designer of the original Fallout.",
    "Tim Cain led design on the original Fallout at Interplay, shaping its SPECIAL system, moral ambiguity, and retro-future aesthetic."
);

/* ---------- Works ---------- */

entity(
    "fallout-1",
    "Fallout (1997)",
    "work",
    "Original isometric CRPG of the Vault Dweller.",
    "Fallout (1997) follows the Vault Dweller leaving Vault 13 to find a water chip and confront the Super Mutant threat of the Master."
);

entity(
    "fallout-2",
    "Fallout 2",
    "work",
    "Sequel of the Chosen One and the Enclave.",
    "Fallout 2 follows the Chosen One across a wider California wasteland, confronting the Enclave and the legacy of Vault-Tec experiments."
);

entity(
    "fallout-3",
    "Fallout 3",
    "work",
    "Bethesda open-world RPG of the Capital Wasteland.",
    "Fallout 3 relocates the series to the Capital Wasteland around ruined Washington, D.C., following the Lone Wanderer and Project Purity."
);

entity(
    "fallout-new-vegas",
    "Fallout: New Vegas",
    "work",
    "Obsidian Mojave RPG of the Courier and Hoover Dam.",
    "Fallout: New Vegas casts the Courier in the Mojave, caught between the NCR, Caesar's Legion, Mr. House, and independent New Vegas."
);

entity(
    "fallout-4",
    "Fallout 4",
    "work",
    "Commonwealth RPG of the Institute and synths.",
    "Fallout 4 follows the Sole Survivor in the Commonwealth, tangled with the Institute, Brotherhood of Steel, Railroad, and Minutemen."
);

/* ---------- Factions / orgs ---------- */

entity(
    "vault-tec",
    "Vault-Tec",
    "organization",
    "Pre-war corporation behind the Vaults.",
    "Vault-Tec Corporation built America's Vaults as purported shelters that often doubled as social experiments for the Enclave's successors."
);

entity(
    "brotherhood-of-steel",
    "Brotherhood of Steel",
    "organization",
    "Techno-knight order guarding pre-war tech.",
    "The Brotherhood of Steel is a quasi-military order that seizes and protects advanced technology across Fallout's wastelands."
);

entity(
    "enclave",
    "Enclave",
    "organization",
    "Remnant of pre-war U.S. government power.",
    "The Enclave claims continuity with the pre-war United States, pursuing genocidal purity projects against mutated humanity."
);

entity(
    "ncr",
    "New California Republic",
    "organization",
    "Expansionist democratic republic of the West.",
    "The New California Republic (NCR) is a bureaucratic democracy expanding east from California into the Mojave and beyond."
);

entity(
    "caesars-legion",
    "Caesar's Legion",
    "organization",
    "Slave-raiding empire modeled on Rome.",
    "Caesar's Legion is a brutal tribal empire forged by Caesar, opposing NCR expansion with slavery and absolute discipline."
);

entity(
    "institute",
    "The Institute",
    "organization",
    "Secret Commonwealth science cabal of synths.",
    "The Institute operates beneath the Commonwealth, creating synths and treating surface wastelanders as disposable subjects."
);

entity(
    "railroad",
    "The Railroad",
    "organization",
    "Underground network freeing synths.",
    "The Railroad smuggles and reprograms synths seeking freedom from the Institute in the Commonwealth."
);

entity(
    "minutemen",
    "The Minutemen",
    "organization",
    "Volunteer militia of Commonwealth settlements.",
    "The Minutemen are a volunteer militia defending Commonwealth settlements, revived in Fallout 4 under the Sole Survivor's influence."
);

/* ---------- Places ---------- */

entity(
    "capital-wasteland",
    "Capital Wasteland",
    "place",
    "Ruined D.C. region of Fallout 3.",
    "The Capital Wasteland is the irradiated region around Washington, D.C., home to Project Purity, Liberty Prime, and Fallout 3's conflicts."
);

entity(
    "mojave",
    "Mojave Wasteland",
    "place",
    "Desert theater of New Vegas and Hoover Dam.",
    "The Mojave Wasteland is the setting of Fallout: New Vegas, where Hoover Dam and New Vegas draw the NCR and Legion into war."
);

entity(
    "commonwealth",
    "The Commonwealth",
    "place",
    "Boston ruins of Fallout 4.",
    "The Commonwealth is the ruined Boston region of Fallout 4, dominated by the Institute's shadow and settlement survival."
);

entity(
    "vault-13",
    "Vault 13",
    "place",
    "Home vault of the original Vault Dweller.",
    "Vault 13 is the sealed California vault that sends the Vault Dweller into the wasteland for a water chip in Fallout."
);

entity(
    "new-vegas",
    "New Vegas",
    "place",
    "Neon Strip city under Mr. House.",
    "New Vegas is the fortified Strip city of the Mojave, maintained by Mr. House and contested by regional powers."
);

/* ---------- People / beings / concepts ---------- */

entity(
    "vault-dweller",
    "Vault Dweller",
    "person",
    "Protagonist who leaves Vault 13.",
    "The Vault Dweller leaves Vault 13 to save their community and ultimately confronts the Master and the Super Mutant army."
);

entity(
    "lone-wanderer",
    "Lone Wanderer",
    "person",
    "Protagonist of Fallout 3.",
    "The Lone Wanderer escapes Vault 101 into the Capital Wasteland seeking their father and deciding the fate of Project Purity."
);

entity(
    "courier",
    "The Courier",
    "person",
    "Protagonist of Fallout: New Vegas.",
    "The Courier is shot over a Platinum Chip delivery and returns to shape the Mojave's future among NCR, Legion, House, or independence."
);

entity(
    "sole-survivor",
    "Sole Survivor",
    "person",
    "Cryo-awakened protagonist of Fallout 4.",
    "The Sole Survivor thaws from Vault 111 cryostasis into the Commonwealth, hunting for a kidnapped child and choosing faction allegiances."
);

entity(
    "the-master",
    "The Master",
    "person",
    "FEV-mutated warlord of the Unity.",
    "The Master is a FEV-transformed being who builds a Super Mutant army to force Unity on humanity in the original Fallout."
);

entity(
    "mr-house",
    "Mr. House",
    "person",
    "Pre-war genius ruling New Vegas.",
    "Robert House survives the war in stasis and rules New Vegas through securitrons, seeking control of Hoover Dam's destiny."
);

entity(
    "liberty-prime",
    "Liberty Prime",
    "object",
    "Giant anti-communist war robot.",
    "Liberty Prime is a towering pre-war robot restored by the Brotherhood of Steel to smash Enclave forces in the Capital Wasteland."
);

entity(
    "pip-boy",
    "Pip-Boy",
    "object",
    "Wrist computer of vault survivors.",
    "The Pip-Boy is Vault-Tec's wearable computer for maps, inventory, and radio—iconic gear of Fallout protagonists."
);

entity(
    "ghouls",
    "Ghouls",
    "concept",
    "Radiation-scarred long-lived humans.",
    "Ghouls are humans transformed by radiation into necrotic, often long-lived beings ranging from civilized to feral."
);

entity(
    "super-mutants",
    "Super Mutants",
    "concept",
    "FEV-mutated towering warriors.",
    "Super Mutants are FEV-created giants, from the Master's Unity army to Commonwealth and Capital Wasteland variants."
);

entity(
    "fev",
    "Forced Evolutionary Virus",
    "concept",
    "Pre-war mutagen behind Super Mutants.",
    "The Forced Evolutionary Virus (FEV) is the pre-war mutagen weaponized to create Super Mutants and other horrors."
);

entity(
    "deathclaws",
    "Deathclaws",
    "concept",
    "Engineered apex predators of the wastes.",
    "Deathclaws are genetically engineered predators that terrorize wastelanders across Fallout's regions."
);

/* ---------- Relationships ---------- */

rel("tim-cain", "fallout-1", "created", "Tim Cain led design of the original Fallout.", 0.98, 0.96);
rel("interplay-entertainment", "fallout-1", "produced", "Interplay published the original Fallout.", 0.98, 0.96);
rel("interplay-entertainment", "fallout-2", "produced", "Interplay published Fallout 2.", 0.97, 0.94);
rel("bethesda-softworks", "fallout-3", "produced", "Bethesda published Fallout 3.", 0.98, 0.96);
rel("bethesda-softworks", "fallout-4", "produced", "Bethesda published Fallout 4.", 0.98, 0.96);
rel("bethesda-softworks", "fallout", "publishes", "Bethesda publishes modern Fallout titles.", 0.97, 0.94);

rel("fallout-1", "fallout", "part_of", "Fallout (1997) begins the franchise.", 0.99, 0.97);
rel("fallout-2", "fallout", "part_of", "Fallout 2 continues the franchise.", 0.98, 0.95);
rel("fallout-3", "fallout", "part_of", "Fallout 3 continues the franchise.", 0.98, 0.95);
rel("fallout-new-vegas", "fallout", "part_of", "New Vegas continues the franchise.", 0.98, 0.95);
rel("fallout-4", "fallout", "part_of", "Fallout 4 continues the franchise.", 0.98, 0.95);

rel("vault-tec", "vault-13", "created", "Vault-Tec built Vault 13.", 0.97, 0.93);
rel("vault-tec", "pip-boy", "produced", "Vault-Tec produced the Pip-Boy.", 0.96, 0.92);
rel("vault-dweller", "vault-13", "located_in", "The Vault Dweller originates from Vault 13.", 0.98, 0.96);
rel("vault-dweller", "the-master", "opposed_by", "The Vault Dweller confronts the Master.", 0.97, 0.94);
rel("the-master", "super-mutants", "leads", "The Master leads the Super Mutant Unity.", 0.98, 0.95);
rel("fev", "super-mutants", "created", "FEV creates Super Mutants.", 0.98, 0.96);

rel("lone-wanderer", "capital-wasteland", "located_in", "The Lone Wanderer explores the Capital Wasteland.", 0.97, 0.94);
rel("liberty-prime", "brotherhood-of-steel", "uses", "The Brotherhood deploys Liberty Prime.", 0.97, 0.94);
rel("brotherhood-of-steel", "enclave", "opposed_by", "The Brotherhood wars with the Enclave.", 0.96, 0.93);
rel("enclave", "fallout-2", "connected_to", "The Enclave is central to Fallout 2.", 0.96, 0.92);

rel("courier", "mojave", "located_in", "The Courier shapes the Mojave's future.", 0.98, 0.95);
rel("ncr", "caesars-legion", "opposed_by", "The NCR and Caesar's Legion clash over Hoover Dam.", 0.98, 0.96);
rel("mr-house", "new-vegas", "leads", "Mr. House rules New Vegas.", 0.98, 0.95);
rel("new-vegas", "mojave", "located_in", "New Vegas stands in the Mojave.", 0.98, 0.95);
rel("caesars-legion", "mojave", "seeks", "The Legion seeks control of the Mojave.", 0.96, 0.93);

rel("sole-survivor", "commonwealth", "located_in", "The Sole Survivor awakens in the Commonwealth.", 0.98, 0.95);
rel("institute", "commonwealth", "located_in", "The Institute hides beneath the Commonwealth.", 0.97, 0.94);
rel("railroad", "institute", "opposed_by", "The Railroad opposes the Institute.", 0.97, 0.94);
rel("minutemen", "commonwealth", "supports", "The Minutemen defend Commonwealth settlements.", 0.96, 0.92);
rel("brotherhood-of-steel", "institute", "opposed_by", "The Brotherhood contests the Institute.", 0.96, 0.93);

rel("ghouls", "fallout", "related_to", "Ghouls are iconic wasteland survivors.", 0.95, 0.9);
rel("deathclaws", "fallout", "related_to", "Deathclaws menace every Fallout wasteland.", 0.95, 0.9);

module.exports = { entities, relationships };
