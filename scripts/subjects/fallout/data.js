/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fallout",
        "name": "Fallout",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Post-nuclear RPG franchise of vaults, wastelands, and factions.",
        "description": "Fallout is the post-apocalyptic role-playing franchise of Vault-Tec shelters, irradiated America, and rival powers such as the Brotherhood of Steel, Enclave, NCR, and Caesar's Legion across the Capital Wasteland, Mojave, and Commonwealth.",
        "aliases": []
    },
    {
        "slug": "interplay-entertainment",
        "name": "Interplay Entertainment",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Original publisher of classic Fallout RPGs.",
        "description": "Interplay Entertainment published the original Fallout and Fallout 2, establishing the isometric CRPGs that defined the series' dark humor and choice-driven wasteland.",
        "aliases": []
    },
    {
        "slug": "bethesda-softworks",
        "name": "Bethesda Softworks",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher and steward of modern Fallout.",
        "description": "Bethesda Softworks publishes Fallout 3, Fallout 4, and related titles, continuing the franchise after acquiring the Fallout IP from Interplay's era.",
        "aliases": []
    },
    {
        "slug": "tim-cain",
        "name": "Tim Cain",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Lead designer of the original Fallout.",
        "description": "Tim Cain led design on the original Fallout at Interplay, shaping its SPECIAL system, moral ambiguity, and retro-future aesthetic.",
        "aliases": []
    },
    {
        "slug": "fallout-1",
        "name": "Fallout (1997)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Original isometric CRPG of the Vault Dweller.",
        "description": "Fallout (1997) follows the Vault Dweller leaving Vault 13 to find a water chip and confront the Super Mutant threat of the Master.",
        "aliases": []
    },
    {
        "slug": "fallout-2",
        "name": "Fallout 2",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Sequel of the Chosen One and the Enclave.",
        "description": "Fallout 2 follows the Chosen One across a wider California wasteland, confronting the Enclave and the legacy of Vault-Tec experiments.",
        "aliases": []
    },
    {
        "slug": "fallout-3",
        "name": "Fallout 3",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Bethesda open-world RPG of the Capital Wasteland.",
        "description": "Fallout 3 relocates the series to the Capital Wasteland around ruined Washington, D.C., following the Lone Wanderer and Project Purity.",
        "aliases": []
    },
    {
        "slug": "fallout-new-vegas",
        "name": "Fallout: New Vegas",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Obsidian Mojave RPG of the Courier and Hoover Dam.",
        "description": "Fallout: New Vegas casts the Courier in the Mojave, caught between the NCR, Caesar's Legion, Mr. House, and independent New Vegas.",
        "aliases": []
    },
    {
        "slug": "fallout-4",
        "name": "Fallout 4",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Commonwealth RPG of the Institute and synths.",
        "description": "Fallout 4 follows the Sole Survivor in the Commonwealth, tangled with the Institute, Brotherhood of Steel, Railroad, and Minutemen.",
        "aliases": []
    },
    {
        "slug": "vault-tec",
        "name": "Vault-Tec",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Pre-war corporation behind the Vaults.",
        "description": "Vault-Tec Corporation built America's Vaults as purported shelters that often doubled as social experiments for the Enclave's successors.",
        "aliases": []
    },
    {
        "slug": "brotherhood-of-steel",
        "name": "Brotherhood of Steel",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Techno-knight order guarding pre-war tech.",
        "description": "The Brotherhood of Steel is a quasi-military order that seizes and protects advanced technology across Fallout's wastelands.",
        "aliases": []
    },
    {
        "slug": "enclave",
        "name": "Enclave",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Remnant of pre-war U.S. government power.",
        "description": "The Enclave claims continuity with the pre-war United States, pursuing genocidal purity projects against mutated humanity.",
        "aliases": []
    },
    {
        "slug": "ncr",
        "name": "New California Republic",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Expansionist democratic republic of the West.",
        "description": "The New California Republic (NCR) is a bureaucratic democracy expanding east from California into the Mojave and beyond.",
        "aliases": []
    },
    {
        "slug": "caesars-legion",
        "name": "Caesar's Legion",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Slave-raiding empire modeled on Rome.",
        "description": "Caesar's Legion is a brutal tribal empire forged by Caesar, opposing NCR expansion with slavery and absolute discipline.",
        "aliases": []
    },
    {
        "slug": "institute",
        "name": "The Institute",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Secret Commonwealth science cabal of synths.",
        "description": "The Institute operates beneath the Commonwealth, creating synths and treating surface wastelanders as disposable subjects.",
        "aliases": []
    },
    {
        "slug": "railroad",
        "name": "The Railroad",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Underground network freeing synths.",
        "description": "The Railroad smuggles and reprograms synths seeking freedom from the Institute in the Commonwealth.",
        "aliases": []
    },
    {
        "slug": "minutemen",
        "name": "The Minutemen",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Volunteer militia of Commonwealth settlements.",
        "description": "The Minutemen are a volunteer militia defending Commonwealth settlements, revived in Fallout 4 under the Sole Survivor's influence.",
        "aliases": []
    },
    {
        "slug": "capital-wasteland",
        "name": "Capital Wasteland",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Ruined D.C. region of Fallout 3.",
        "description": "The Capital Wasteland is the irradiated region around Washington, D.C., home to Project Purity, Liberty Prime, and Fallout 3's conflicts.",
        "aliases": []
    },
    {
        "slug": "mojave",
        "name": "Mojave Wasteland",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Desert theater of New Vegas and Hoover Dam.",
        "description": "The Mojave Wasteland is the setting of Fallout: New Vegas, where Hoover Dam and New Vegas draw the NCR and Legion into war.",
        "aliases": []
    },
    {
        "slug": "commonwealth",
        "name": "The Commonwealth",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Boston ruins of Fallout 4.",
        "description": "The Commonwealth is the ruined Boston region of Fallout 4, dominated by the Institute's shadow and settlement survival.",
        "aliases": []
    },
    {
        "slug": "vault-13",
        "name": "Vault 13",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Home vault of the original Vault Dweller.",
        "description": "Vault 13 is the sealed California vault that sends the Vault Dweller into the wasteland for a water chip in Fallout.",
        "aliases": []
    },
    {
        "slug": "new-vegas",
        "name": "New Vegas",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Neon Strip city under Mr. House.",
        "description": "New Vegas is the fortified Strip city of the Mojave, maintained by Mr. House and contested by regional powers.",
        "aliases": []
    },
    {
        "slug": "vault-dweller",
        "name": "Vault Dweller",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Protagonist who leaves Vault 13.",
        "description": "The Vault Dweller leaves Vault 13 to save their community and ultimately confronts the Master and the Super Mutant army.",
        "aliases": []
    },
    {
        "slug": "lone-wanderer",
        "name": "Lone Wanderer",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Protagonist of Fallout 3.",
        "description": "The Lone Wanderer escapes Vault 101 into the Capital Wasteland seeking their father and deciding the fate of Project Purity.",
        "aliases": []
    },
    {
        "slug": "courier",
        "name": "The Courier",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Protagonist of Fallout: New Vegas.",
        "description": "The Courier is shot over a Platinum Chip delivery and returns to shape the Mojave's future among NCR, Legion, House, or independence.",
        "aliases": []
    },
    {
        "slug": "sole-survivor",
        "name": "Sole Survivor",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Cryo-awakened protagonist of Fallout 4.",
        "description": "The Sole Survivor thaws from Vault 111 cryostasis into the Commonwealth, hunting for a kidnapped child and choosing faction allegiances.",
        "aliases": []
    },
    {
        "slug": "the-master",
        "name": "The Master",
        "type": "person",
        "evidence": "fiction",
        "short_description": "FEV-mutated warlord of the Unity.",
        "description": "The Master is a FEV-transformed being who builds a Super Mutant army to force Unity on humanity in the original Fallout.",
        "aliases": []
    },
    {
        "slug": "mr-house",
        "name": "Mr. House",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Pre-war genius ruling New Vegas.",
        "description": "Robert House survives the war in stasis and rules New Vegas through securitrons, seeking control of Hoover Dam's destiny.",
        "aliases": []
    },
    {
        "slug": "liberty-prime",
        "name": "Liberty Prime",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Giant anti-communist war robot.",
        "description": "Liberty Prime is a towering pre-war robot restored by the Brotherhood of Steel to smash Enclave forces in the Capital Wasteland.",
        "aliases": []
    },
    {
        "slug": "pip-boy",
        "name": "Pip-Boy",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Wrist computer of vault survivors.",
        "description": "The Pip-Boy is Vault-Tec's wearable computer for maps, inventory, and radio—iconic gear of Fallout protagonists.",
        "aliases": []
    },
    {
        "slug": "ghouls",
        "name": "Ghouls",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Radiation-scarred long-lived humans.",
        "description": "Ghouls are humans transformed by radiation into necrotic, often long-lived beings ranging from civilized to feral.",
        "aliases": []
    },
    {
        "slug": "super-mutants",
        "name": "Super Mutants",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "FEV-mutated towering warriors.",
        "description": "Super Mutants are FEV-created giants, from the Master's Unity army to Commonwealth and Capital Wasteland variants.",
        "aliases": []
    },
    {
        "slug": "fev",
        "name": "Forced Evolutionary Virus",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Pre-war mutagen behind Super Mutants.",
        "description": "The Forced Evolutionary Virus (FEV) is the pre-war mutagen weaponized to create Super Mutants and other horrors.",
        "aliases": []
    },
    {
        "slug": "deathclaws",
        "name": "Deathclaws",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Engineered apex predators of the wastes.",
        "description": "Deathclaws are genetically engineered predators that terrorize wastelanders across Fallout's regions.",
        "aliases": []
    },
    {
        "slug": "fallout-figures",
        "name": "Fallout figures",
        "type": "topic",
        "short_description": "People and named forces central to Fallout.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Fallout."
    },
    {
        "slug": "fallout-places",
        "name": "Fallout places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fallout.",
        "description": "Places, regions, and built sites that give Fallout its map — where events and figures concentrate."
    },
    {
        "slug": "fallout-events",
        "name": "Fallout events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fallout.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fallout timeline."
    },
    {
        "slug": "fallout-objects",
        "name": "Fallout objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fallout.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fallout."
    },
    {
        "slug": "fallout-factions",
        "name": "Fallout factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fallout.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fallout."
    },
    {
        "slug": "fallout-concepts",
        "name": "Fallout concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fallout.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fallout readable as a lore graph."
    }
];

const relationships = [
    [
        "tim-cain",
        "fallout-1",
        "created",
        "Tim Cain led design of the original Fallout.",
        0.98,
        0.96
    ],
    [
        "interplay-entertainment",
        "fallout-1",
        "produced",
        "Interplay published the original Fallout.",
        0.98,
        0.96
    ],
    [
        "interplay-entertainment",
        "fallout-2",
        "produced",
        "Interplay published Fallout 2.",
        0.97,
        0.94
    ],
    [
        "bethesda-softworks",
        "fallout-3",
        "produced",
        "Bethesda published Fallout 3.",
        0.98,
        0.96
    ],
    [
        "bethesda-softworks",
        "fallout-4",
        "produced",
        "Bethesda published Fallout 4.",
        0.98,
        0.96
    ],
    [
        "bethesda-softworks",
        "fallout",
        "publishes",
        "Bethesda publishes modern Fallout titles.",
        0.97,
        0.94
    ],
    [
        "fallout-1",
        "fallout",
        "part_of",
        "Fallout (1997) begins the franchise.",
        0.99,
        0.97
    ],
    [
        "fallout-2",
        "fallout",
        "part_of",
        "Fallout 2 continues the franchise.",
        0.98,
        0.95
    ],
    [
        "fallout-3",
        "fallout",
        "part_of",
        "Fallout 3 continues the franchise.",
        0.98,
        0.95
    ],
    [
        "fallout-new-vegas",
        "fallout",
        "part_of",
        "New Vegas continues the franchise.",
        0.98,
        0.95
    ],
    [
        "fallout-4",
        "fallout",
        "part_of",
        "Fallout 4 continues the franchise.",
        0.98,
        0.95
    ],
    [
        "vault-tec",
        "vault-13",
        "created",
        "Vault-Tec built Vault 13.",
        0.97,
        0.93
    ],
    [
        "vault-tec",
        "pip-boy",
        "produced",
        "Vault-Tec produced the Pip-Boy.",
        0.96,
        0.92
    ],
    [
        "vault-dweller",
        "vault-13",
        "located_in",
        "The Vault Dweller originates from Vault 13.",
        0.98,
        0.96
    ],
    [
        "vault-dweller",
        "the-master",
        "opposed_by",
        "The Vault Dweller confronts the Master.",
        0.97,
        0.94
    ],
    [
        "the-master",
        "super-mutants",
        "leads",
        "The Master leads the Super Mutant Unity.",
        0.98,
        0.95
    ],
    [
        "fev",
        "super-mutants",
        "created",
        "FEV creates Super Mutants.",
        0.98,
        0.96
    ],
    [
        "lone-wanderer",
        "capital-wasteland",
        "located_in",
        "The Lone Wanderer explores the Capital Wasteland.",
        0.97,
        0.94
    ],
    [
        "liberty-prime",
        "brotherhood-of-steel",
        "uses",
        "The Brotherhood deploys Liberty Prime.",
        0.97,
        0.94
    ],
    [
        "brotherhood-of-steel",
        "enclave",
        "opposed_by",
        "The Brotherhood wars with the Enclave.",
        0.96,
        0.93
    ],
    [
        "enclave",
        "fallout-2",
        "connected_to",
        "The Enclave is central to Fallout 2.",
        0.96,
        0.92
    ],
    [
        "courier",
        "mojave",
        "located_in",
        "The Courier shapes the Mojave's future.",
        0.98,
        0.95
    ],
    [
        "ncr",
        "caesars-legion",
        "opposed_by",
        "The NCR and Caesar's Legion clash over Hoover Dam.",
        0.98,
        0.96
    ],
    [
        "mr-house",
        "new-vegas",
        "leads",
        "Mr. House rules New Vegas.",
        0.98,
        0.95
    ],
    [
        "new-vegas",
        "mojave",
        "located_in",
        "New Vegas stands in the Mojave.",
        0.98,
        0.95
    ],
    [
        "caesars-legion",
        "mojave",
        "seeks",
        "The Legion seeks control of the Mojave.",
        0.96,
        0.93
    ],
    [
        "sole-survivor",
        "commonwealth",
        "located_in",
        "The Sole Survivor awakens in the Commonwealth.",
        0.98,
        0.95
    ],
    [
        "institute",
        "commonwealth",
        "located_in",
        "The Institute hides beneath the Commonwealth.",
        0.97,
        0.94
    ],
    [
        "railroad",
        "institute",
        "opposed_by",
        "The Railroad opposes the Institute.",
        0.97,
        0.94
    ],
    [
        "minutemen",
        "commonwealth",
        "supports",
        "The Minutemen defend Commonwealth settlements.",
        0.96,
        0.92
    ],
    [
        "brotherhood-of-steel",
        "institute",
        "opposed_by",
        "The Brotherhood contests the Institute.",
        0.96,
        0.93
    ],
    [
        "ghouls",
        "fallout",
        "related_to",
        "Ghouls are iconic wasteland survivors.",
        0.95,
        0.9
    ],
    [
        "deathclaws",
        "fallout",
        "related_to",
        "Deathclaws menace every Fallout wasteland.",
        0.95,
        0.9
    ],
    [
        "fallout",
        "fallout-figures",
        "contains",
        "Fallout figures is a primary trailhead under Fallout.",
        0.88,
        0.82
    ],
    [
        "fallout",
        "fallout-places",
        "contains",
        "Fallout places is a primary trailhead under Fallout.",
        0.88,
        0.82
    ],
    [
        "fallout",
        "fallout-events",
        "contains",
        "Fallout events is a primary trailhead under Fallout.",
        0.88,
        0.82
    ],
    [
        "fallout",
        "fallout-objects",
        "contains",
        "Fallout objects & artifacts is a primary trailhead under Fallout.",
        0.88,
        0.82
    ],
    [
        "fallout",
        "fallout-factions",
        "contains",
        "Fallout factions & groups is a primary trailhead under Fallout.",
        0.88,
        0.82
    ],
    [
        "fallout",
        "fallout-concepts",
        "contains",
        "Fallout concepts is a primary trailhead under Fallout.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
