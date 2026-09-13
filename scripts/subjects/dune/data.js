/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dune",
        "name": "Dune",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Herbert's Arrakis saga of spice, Fremen, and empire.",
        "description": "Dune is Frank Herbert's epic of Arrakis, the spice melange, House Atreides and Harkonnen, the Fremen, and Paul Muad'Dib's rise amid sandworms and galactic politics.",
        "aliases": []
    },
    {
        "slug": "frank-herbert",
        "name": "Frank Herbert",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Author of the original Dune novels.",
        "description": "Frank Herbert wrote Dune (1965) and its sequels, defining Arrakis, the Bene Gesserit, and ecological-political science fiction.",
        "aliases": []
    },
    {
        "slug": "brian-herbert",
        "name": "Brian Herbert",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Frank Herbert's son; co-author of expanded Dune books.",
        "description": "Brian Herbert, with Kevin J. Anderson, expanded the Dune universe in prequels and sequels drawn partly from his father's notes.",
        "aliases": []
    },
    {
        "slug": "legendary-pictures",
        "name": "Legendary Pictures",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Studio behind the modern Dune films.",
        "description": "Legendary Pictures produced Denis Villeneuve's Dune film adaptations, bringing Arrakis to a new cinematic generation.",
        "aliases": []
    },
    {
        "slug": "denis-villeneuve",
        "name": "Denis Villeneuve",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Director of the modern Dune films.",
        "description": "Denis Villeneuve directed Dune (2021) and Dune: Part Two, adapting Herbert's novel with monumental desert imagery.",
        "aliases": []
    },
    {
        "slug": "dune-novel",
        "name": "Dune (novel)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Herbert's 1965 foundational novel.",
        "description": "The novel Dune follows Paul Atreides as House Atreides takes Arrakis, meets the Fremen, and confronts Harkonnen treachery and prophetic destiny.",
        "aliases": []
    },
    {
        "slug": "dune-messiah",
        "name": "Dune Messiah",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Sequel novel of Paul's empire.",
        "description": "Dune Messiah continues Paul's story as Emperor Muad'Dib, examining the costs of messianic power and conspiracy.",
        "aliases": []
    },
    {
        "slug": "dune-2021",
        "name": "Dune (2021 film)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Villeneuve's first Dune film adaptation.",
        "description": "Dune (2021) adapts the first half of Herbert's novel, following House Atreides to Arrakis and Paul's path toward the Fremen.",
        "aliases": []
    },
    {
        "slug": "dune-part-two",
        "name": "Dune: Part Two",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Villeneuve's concluding Atreides film.",
        "description": "Dune: Part Two completes Paul's Fremen rise, the holy war foreshadowed in the novel, and the clash with House Harkonnen.",
        "aliases": []
    },
    {
        "slug": "house-atreides",
        "name": "House Atreides",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Noble house of Caladan and Arrakis.",
        "description": "House Atreides is the noble house of Duke Leto, Lady Jessica, and Paul, famed for honor and targeted by imperial intrigue on Arrakis.",
        "aliases": []
    },
    {
        "slug": "house-harkonnen",
        "name": "House Harkonnen",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Brutal rivals of the Atreides.",
        "description": "House Harkonnen rules through cruelty from Giedi Prime, long exploiting Arrakis before plotting the Atreides' fall.",
        "aliases": []
    },
    {
        "slug": "bene-gesserit",
        "name": "Bene Gesserit",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Sisterhood of politics, voice, and breeding.",
        "description": "The Bene Gesserit are a secretive sisterhood training body-mind control, the Voice, and a millennia-long breeding program toward the Kwisatz Haderach.",
        "aliases": []
    },
    {
        "slug": "spacing-guild",
        "name": "Spacing Guild",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Monopoly of foldspace Navigators.",
        "description": "The Spacing Guild monopolizes interstellar travel through spice-mutated Navigators who fold space between stars.",
        "aliases": []
    },
    {
        "slug": "fremen",
        "name": "Fremen",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Desert people of Arrakis.",
        "description": "The Fremen are the fierce desert inhabitants of Arrakis who conserve water, ride sandworms, and await a prophesied leader.",
        "aliases": []
    },
    {
        "slug": "mentats",
        "name": "Mentats",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Human computers banned of thinking machines.",
        "description": "Mentats are humans trained as living computers after the Butlerian Jihad outlawed thinking machines, advising Great Houses.",
        "aliases": []
    },
    {
        "slug": "paul-atreides",
        "name": "Paul Atreides",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Heir of Atreides who becomes Muad'Dib.",
        "description": "Paul Atreides is the Atreides heir trained by Bene Gesserit and Mentat arts who rises among the Fremen as Muad'Dib.",
        "aliases": []
    },
    {
        "slug": "leto-atreides",
        "name": "Duke Leto Atreides",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Father of Paul; ruler sent to Arrakis.",
        "description": "Duke Leto Atreides leads House Atreides with honor, accepting stewardship of Arrakis and dying in Harkonnen betrayal.",
        "aliases": []
    },
    {
        "slug": "lady-jessica",
        "name": "Lady Jessica",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Bene Gesserit concubine and Paul's mother.",
        "description": "Lady Jessica is a Bene Gesserit who bears Paul against orders, training him in the Way and surviving Arrakis with him.",
        "aliases": []
    },
    {
        "slug": "chani",
        "name": "Chani",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Fremen warrior and Paul's beloved.",
        "description": "Chani Kynes is a Fremen fighter and sayyadina-linked figure who becomes Paul's partner in the desert and in prophecy.",
        "aliases": []
    },
    {
        "slug": "baron-harkonnen",
        "name": "Baron Vladimir Harkonnen",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Scheming patriarch of House Harkonnen.",
        "description": "Baron Vladimir Harkonnen is the corpulent, ruthless leader of House Harkonnen who engineers the fall of House Atreides.",
        "aliases": []
    },
    {
        "slug": "duncan-idaho",
        "name": "Duncan Idaho",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Swordmaster loyal to House Atreides.",
        "description": "Duncan Idaho is the Atreides swordmaster whose loyalty and later ghola rebirths echo across the Dune saga.",
        "aliases": []
    },
    {
        "slug": "stilgar",
        "name": "Stilgar",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Naib of Sietch Tabr.",
        "description": "Stilgar is the Fremen naib of Sietch Tabr who accepts Paul and Jessica into desert ways and later follows Muad'Dib.",
        "aliases": []
    },
    {
        "slug": "gurney-halleck",
        "name": "Gurney Halleck",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Troubadour-warrior of House Atreides.",
        "description": "Gurney Halleck is the scarred warmaster and musician who trains Paul and survives to fight for Atreides vengeance.",
        "aliases": []
    },
    {
        "slug": "thufir-hawat",
        "name": "Thufir Hawat",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mentat Master of Assassins for Atreides.",
        "description": "Thufir Hawat is the Mentat Master of Assassins serving House Atreides with ruthless loyalty and strategic brilliance.",
        "aliases": []
    },
    {
        "slug": "feyd-rautha",
        "name": "Feyd-Rautha Harkonnen",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Harkonnen heir and gladiatorial killer.",
        "description": "Feyd-Rautha is the Baron's nephew and designated heir, a charismatic killer groomed as a counter to Paul.",
        "aliases": []
    },
    {
        "slug": "alia-atreides",
        "name": "Alia Atreides",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Pre-born sister of Paul.",
        "description": "Alia Atreides is Jessica's pre-born daughter, aware in the womb, who becomes a terrifying figure of Abomination and power.",
        "aliases": []
    },
    {
        "slug": "arrakis",
        "name": "Arrakis",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Desert planet also called Dune.",
        "description": "Arrakis, known as Dune, is the only source of the spice melange, home of Fremen and sandworms under a brutal desert ecology.",
        "aliases": []
    },
    {
        "slug": "caladan",
        "name": "Caladan",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Ocean homeworld of House Atreides.",
        "description": "Caladan is the rainy ocean world of House Atreides before their fateful transfer to Arrakis.",
        "aliases": []
    },
    {
        "slug": "giedi-prime",
        "name": "Giedi Prime",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Industrial homeworld of House Harkonnen.",
        "description": "Giedi Prime is the polluted industrial world of House Harkonnen, reflecting their oppressive culture.",
        "aliases": []
    },
    {
        "slug": "spice-melange",
        "name": "Spice melange",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Geriatric spice that enables foldspace and visions.",
        "description": "The spice melange prolongs life, unlocks prescience, and enables Guild Navigators to fold space—making Arrakis the empire's prize.",
        "aliases": []
    },
    {
        "slug": "sandworms",
        "name": "Sandworms",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Colossal worms of the Arrakis deserts.",
        "description": "Sandworms are enormous desert creatures of Arrakis, sacred and deadly, whose life cycle is bound to the spice.",
        "aliases": []
    },
    {
        "slug": "shai-hulud",
        "name": "Shai-Hulud",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Fremen name for the sandworm makers.",
        "description": "Shai-Hulud is the Fremen sacred name for the sandworm, the Maker of the desert and center of Fremen religion.",
        "aliases": []
    },
    {
        "slug": "muad-dib",
        "name": "Muad'Dib",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Paul's Fremen name and messianic mantle.",
        "description": "Muad'Dib is the Fremen name Paul takes from the desert mouse, becoming the title of his prophetic leadership.",
        "aliases": []
    },
    {
        "slug": "kwisatz-haderach",
        "name": "Kwisatz Haderach",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Bene Gesserit prophesied male adept.",
        "description": "The Kwisatz Haderach is the Bene Gesserit's prophesied male who can bridge space-time awareness—a role Paul fulfills early.",
        "aliases": []
    },
    {
        "slug": "stillsuits",
        "name": "Stillsuits",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Fremen garments that recycle body water.",
        "description": "Stillsuits are Fremen-engineered body suits that reclaim sweat and moisture, enabling survival on Arrakis.",
        "aliases": []
    },
    {
        "slug": "dune-figures",
        "name": "Dune figures",
        "type": "topic",
        "short_description": "People and named forces central to Dune.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Dune."
    },
    {
        "slug": "dune-places",
        "name": "Dune places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dune.",
        "description": "Places, regions, and built sites that give Dune its map — where events and figures concentrate."
    },
    {
        "slug": "dune-events",
        "name": "Dune events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dune.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dune timeline."
    },
    {
        "slug": "dune-objects",
        "name": "Dune objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dune.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dune."
    },
    {
        "slug": "dune-factions",
        "name": "Dune factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dune.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dune."
    }
];

const relationships = [
    [
        "frank-herbert",
        "dune",
        "created",
        "Frank Herbert created Dune.",
        0.99,
        0.99
    ],
    [
        "frank-herbert",
        "dune-novel",
        "created",
        "Herbert wrote the novel Dune.",
        0.99,
        0.98
    ],
    [
        "frank-herbert",
        "dune-messiah",
        "created",
        "Herbert wrote Dune Messiah.",
        0.97,
        0.94
    ],
    [
        "denis-villeneuve",
        "dune-2021",
        "created",
        "Villeneuve directed Dune (2021).",
        0.98,
        0.96
    ],
    [
        "denis-villeneuve",
        "dune-part-two",
        "created",
        "Villeneuve directed Dune: Part Two.",
        0.98,
        0.96
    ],
    [
        "legendary-pictures",
        "dune-2021",
        "produced",
        "Legendary produced the 2021 Dune film.",
        0.97,
        0.94
    ],
    [
        "dune-novel",
        "dune",
        "part_of",
        "The novel is the foundation of Dune.",
        0.99,
        0.98
    ],
    [
        "dune-messiah",
        "dune",
        "part_of",
        "Dune Messiah continues the saga.",
        0.97,
        0.94
    ],
    [
        "dune-novel",
        "dune-2021",
        "adapted_into",
        "The novel was adapted into the 2021 film.",
        0.97,
        0.94
    ],
    [
        "dune-2021",
        "dune",
        "part_of",
        "The 2021 film is part of Dune.",
        0.97,
        0.94
    ],
    [
        "dune-part-two",
        "dune",
        "part_of",
        "Part Two continues the film adaptation.",
        0.97,
        0.94
    ],
    [
        "paul-atreides",
        "house-atreides",
        "member_of",
        "Paul is heir of House Atreides.",
        0.99,
        0.97
    ],
    [
        "leto-atreides",
        "house-atreides",
        "leads",
        "Leto leads House Atreides.",
        0.98,
        0.96
    ],
    [
        "lady-jessica",
        "bene-gesserit",
        "member_of",
        "Jessica is Bene Gesserit-trained.",
        0.98,
        0.95
    ],
    [
        "lady-jessica",
        "paul-atreides",
        "related_to",
        "Jessica is Paul's mother.",
        0.99,
        0.97
    ],
    [
        "leto-atreides",
        "paul-atreides",
        "related_to",
        "Leto is Paul's father.",
        0.99,
        0.97
    ],
    [
        "baron-harkonnen",
        "house-harkonnen",
        "leads",
        "The Baron leads House Harkonnen.",
        0.98,
        0.96
    ],
    [
        "feyd-rautha",
        "house-harkonnen",
        "member_of",
        "Feyd-Rautha is a Harkonnen heir.",
        0.97,
        0.94
    ],
    [
        "house-atreides",
        "house-harkonnen",
        "opposed_by",
        "Atreides and Harkonnen are bitter rivals.",
        0.98,
        0.96
    ],
    [
        "paul-atreides",
        "fremen",
        "member_of",
        "Paul joins the Fremen as Muad'Dib.",
        0.97,
        0.94
    ],
    [
        "paul-atreides",
        "muad-dib",
        "connected_to",
        "Paul takes the name Muad'Dib.",
        0.98,
        0.96
    ],
    [
        "paul-atreides",
        "kwisatz-haderach",
        "connected_to",
        "Paul fulfills the Kwisatz Haderach prophecy.",
        0.97,
        0.94
    ],
    [
        "chani",
        "fremen",
        "member_of",
        "Chani is Fremen.",
        0.97,
        0.94
    ],
    [
        "chani",
        "paul-atreides",
        "supports",
        "Chani stands with Paul in the desert.",
        0.96,
        0.93
    ],
    [
        "stilgar",
        "fremen",
        "leads",
        "Stilgar leads Sietch Tabr.",
        0.96,
        0.93
    ],
    [
        "duncan-idaho",
        "house-atreides",
        "member_of",
        "Duncan serves House Atreides.",
        0.96,
        0.92
    ],
    [
        "thufir-hawat",
        "mentats",
        "member_of",
        "Thufir is a Mentat.",
        0.97,
        0.94
    ],
    [
        "arrakis",
        "spice-melange",
        "contains",
        "Arrakis is the sole source of spice.",
        0.99,
        0.97
    ],
    [
        "spice-melange",
        "spacing-guild",
        "uses",
        "Guild Navigators depend on spice.",
        0.98,
        0.95
    ],
    [
        "sandworms",
        "arrakis",
        "located_in",
        "Sandworms inhabit Arrakis.",
        0.98,
        0.96
    ],
    [
        "shai-hulud",
        "sandworms",
        "connected_to",
        "Shai-Hulud is the Fremen name for sandworms.",
        0.98,
        0.96
    ],
    [
        "fremen",
        "arrakis",
        "located_in",
        "Fremen live on Arrakis.",
        0.98,
        0.95
    ],
    [
        "fremen",
        "stillsuits",
        "uses",
        "Fremen wear stillsuits to survive.",
        0.96,
        0.92
    ],
    [
        "house-atreides",
        "caladan",
        "located_in",
        "House Atreides rules from Caladan.",
        0.96,
        0.92
    ],
    [
        "alia-atreides",
        "paul-atreides",
        "related_to",
        "Alia is Paul's sister.",
        0.97,
        0.94
    ],
    [
        "dune",
        "dune-figures",
        "contains",
        "Dune figures is a primary trailhead under Dune.",
        0.88,
        0.82
    ],
    [
        "dune",
        "dune-places",
        "contains",
        "Dune places is a primary trailhead under Dune.",
        0.88,
        0.82
    ],
    [
        "dune",
        "dune-events",
        "contains",
        "Dune events is a primary trailhead under Dune.",
        0.88,
        0.82
    ],
    [
        "dune",
        "dune-objects",
        "contains",
        "Dune objects & artifacts is a primary trailhead under Dune.",
        0.88,
        0.82
    ],
    [
        "dune",
        "dune-factions",
        "contains",
        "Dune factions & groups is a primary trailhead under Dune.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
