/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "battletech",
        "name": "BattleTech",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Classic mech warfare setting of the Inner Sphere and Clans.",
        "description": "BattleTech is the science-fiction universe of BattleMechs, noble houses, and ComStar intrigue— spanning the Star League's fall, Succession Wars, Clan invasion, and decades of tabletop, novel, and MechWarrior game lore.",
        "aliases": []
    },
    {
        "slug": "fasa",
        "name": "FASA",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Original creator of BattleTech.",
        "description": "FASA Corporation created BattleTech (originally BattleDroids) in 1984, establishing the Great Houses, BattleMechs, and early Inner Sphere lore later carried forward by successors.",
        "aliases": []
    },
    {
        "slug": "catalyst-game-labs",
        "name": "Catalyst Game Labs",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Current publisher of BattleTech tabletop products.",
        "description": "Catalyst Game Labs publishes modern BattleTech rulebooks, miniatures, and fiction, continuing the Inner Sphere and Clan timelines for tabletop and organized play.",
        "aliases": []
    },
    {
        "slug": "topps",
        "name": "Topps",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Former holder of BattleTech rights after FASA.",
        "description": "Topps held BattleTech intellectual property after FASA's closure, licensing MechWarrior games and fiction before Catalyst assumed ongoing tabletop publication.",
        "aliases": []
    },
    {
        "slug": "inner-sphere",
        "name": "Inner Sphere",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Human region of Successor State great houses.",
        "description": "The Inner Sphere is the core region of human space ruled by five Great Houses after the Star League's collapse, defined by Succession Wars, lostech, and feudal mech warfare.",
        "aliases": []
    },
    {
        "slug": "clans",
        "name": "Clans",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Warrior castes descended from Star League exiles.",
        "description": "The Clans are genetically bred warrior societies descended from Kerensky's exodus, returning to the Inner Sphere with superior OmniMechs and a brutal trial-based culture during the Clan invasion.",
        "aliases": []
    },
    {
        "slug": "battlemechs",
        "name": "BattleMechs",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Humanoid war machines central to BattleTech warfare.",
        "description": "BattleMechs are towering humanoid engines of war piloted by MechWarriors, dominating BattleTech battlefields through armor, weapons pods, and the prestige of noble and mercenary lords.",
        "aliases": []
    },
    {
        "slug": "succession-wars",
        "name": "Succession Wars",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Centuries of Great House conflict after the Star League.",
        "description": "The Succession Wars are the devastating inter-house conflicts that followed the Star League's fall, erasing much advanced technology and shaping Inner Sphere politics for generations.",
        "aliases": []
    },
    {
        "slug": "star-league",
        "name": "Star League",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Unified human government before its collapse.",
        "description": "The Star League was the golden age federation of Terra and the Great Houses, destroyed by civil war and Kerensky's exodus, leaving a power vacuum the Successor States fought to fill.",
        "aliases": []
    },
    {
        "slug": "house-steiner",
        "name": "House Steiner",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Lyran Commonwealth ruling house.",
        "description": "House Steiner rules the wealthy Lyran Commonwealth from Tharkad, fielding heavy assault mechs and economic power while allying with House Davion through marriage and the Federated Commonwealth.",
        "aliases": []
    },
    {
        "slug": "house-davion",
        "name": "House Davion",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Federated Suns ruling house.",
        "description": "House Davion leads the Federated Suns from New Avalon, emphasizing combined-arms doctrine and aggressive leadership that reshaped Inner Sphere alliances in the Fourth Succession War.",
        "aliases": []
    },
    {
        "slug": "house-liao",
        "name": "House Liao",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Capellan Confederation ruling house.",
        "description": "House Liao governs the Capellan Confederation, a doctrinaire state of strategic finesse and political indoctrination centered on Capella and wary of Davion and Marik borders.",
        "aliases": []
    },
    {
        "slug": "house-kurita",
        "name": "House Kurita",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Draconis Combine ruling house.",
        "description": "House Kurita rules the Draconis Combine from Luthien, blending Japanese-inspired feudal culture with ruthless military expansion against the Federated Suns and Lyran frontiers.",
        "aliases": []
    },
    {
        "slug": "house-marik",
        "name": "House Marik",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Free Worlds League ruling house.",
        "description": "House Marik presides over the fractious Free Worlds League, a parliamentary federation of worlds whose internal divisions and mercantile strength shape Inner Sphere balance.",
        "aliases": []
    },
    {
        "slug": "comstar",
        "name": "ComStar",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Monopoly on interstellar communication and hidden agenda.",
        "description": "ComStar controls the Hyperpulse Generator network that links Inner Sphere worlds, presenting as neutral communicators while guarding lost Star League technology and its own mystic Order.",
        "aliases": []
    },
    {
        "slug": "clan-wolf",
        "name": "Clan Wolf",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Clan that led the invasion and split in civil war.",
        "description": "Clan Wolf was among the invasion's leading Clans, producing ilKhan Ulric Kerensky and later splitting into Wolf and Crusader factions that reshaped Clan politics.",
        "aliases": []
    },
    {
        "slug": "clan-jade-falcon",
        "name": "Clan Jade Falcon",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Aggressive Crusader Clan of the invasion.",
        "description": "Clan Jade Falcon is a proud Crusader Clan that seized Inner Sphere worlds during the invasion and remained a major power on the Clan frontier after Tukayyid.",
        "aliases": []
    },
    {
        "slug": "clan-smoke-jaguar",
        "name": "Clan Smoke Jaguar",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Clan destroyed after the Federated Commonwealth campaign.",
        "description": "Clan Smoke Jaguar was a brutal invasion Clan annihilated during the Refusal War and later campaigns, erasing one of the most aggressive Crusader voices among the Clans.",
        "aliases": []
    },
    {
        "slug": "clan-ghost-bear",
        "name": "Clan Ghost Bear",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Clan that merged with Inner Sphere populations.",
        "description": "Clan Ghost Bear eventually settled into the Inner Sphere as the Ghost Bear Dominion, blending Clan warrior culture with civilian governance on multiple worlds.",
        "aliases": []
    },
    {
        "slug": "hanse-davion",
        "name": "Hanse Davion",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Archon-prince who reshaped Inner Sphere alliances.",
        "description": "Hanse Davion was the Federated Suns' cunning First Prince whose marriage to Melissa Steiner and Fourth Succession War strategies redrew the map against House Liao.",
        "aliases": []
    },
    {
        "slug": "melissa-steiner-davion",
        "name": "Melissa Steiner-Davion",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Lyran princess who united Davion and Steiner.",
        "description": "Melissa Steiner-Davion was the Lyran archon heir whose marriage to Hanse Davion forged the Federated Commonwealth, linking House Steiner and House Davion.",
        "aliases": []
    },
    {
        "slug": "ulric-kerensky",
        "name": "Ulric Kerensky",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Clan Wolf ilKhan during the invasion era.",
        "description": "Ulric Kerensky was ilKhan of the Clans and Khan of Clan Wolf, steering invasion politics and the bid that led to the Battle of Tukayyid's truce.",
        "aliases": []
    },
    {
        "slug": "natasha-kerensky",
        "name": "Natasha Kerensky",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Legendary Wolf's Dragoons MechWarrior.",
        "description": "Natasha Kerensky is the Black Widow, a famed MechWarrior of Wolf's Dragoons whose career spans mercenary legend, Clan trials, and Inner Sphere warfare.",
        "aliases": []
    },
    {
        "slug": "myndo-waterly",
        "name": "Myndo Waterly",
        "type": "person",
        "evidence": "fiction",
        "short_description": "ComStar primus who overreached against the Clans.",
        "description": "Myndo Waterly was Primus of ComStar whose Operation Scorpion and miscalculation against the Clans exposed ComStar's hidden power plays and led to her downfall.",
        "aliases": []
    },
    {
        "slug": "precentor-martial",
        "name": "Precentor Martial",
        "type": "person",
        "evidence": "fiction",
        "short_description": "ComStar's supreme military commander title.",
        "description": "The Precentor Martial commands ComStar's Com Guard, the secret army that fought the Clans at Tukayyid under the Precentor Martial's battle plan.",
        "aliases": []
    },
    {
        "slug": "terra",
        "name": "Terra",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Birthworld of humanity and ComStar stronghold.",
        "description": "Terra is Earth, seat of the Star League's legacy and ComStar's guarded headquarters, central to BattleTech politics and the Clans' ultimate objective.",
        "aliases": []
    },
    {
        "slug": "tharkad",
        "name": "Tharkad",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Capital of the Lyran Commonwealth.",
        "description": "Tharkad is the icy capital world of House Steiner and the Lyran Commonwealth, a political and industrial hub for Steiner diplomacy and mech production.",
        "aliases": []
    },
    {
        "slug": "outreach",
        "name": "Outreach",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Mercenary hiring world near the Inner Sphere core.",
        "description": "Outreach is the mercenary trade world of the Hiring Hall, where commands contract for Great House campaigns across Succession War battlefields.",
        "aliases": []
    },
    {
        "slug": "clan-invasion",
        "name": "Clan Invasion",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Return of Kerensky's descendants to the Inner Sphere.",
        "description": "The Clan Invasion was the 3049–3052 assault when Clan fleets struck the Inner Sphere with advanced OmniMechs, shattering Successor State complacency until Tukayyid.",
        "aliases": []
    },
    {
        "slug": "battle-of-tukayyid",
        "name": "Battle of Tukayyid",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Com Guard stand that halted the Clan advance.",
        "description": "The Battle of Tukayyid was ComStar's Com Guard victory that forced a fifteen-year truce with the Clans, brokered by Precentor Martial Focht after brutal planetary fighting.",
        "aliases": []
    },
    {
        "slug": "fourth-succession-war",
        "name": "Fourth Succession War",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Davion–Steiner campaign against the Confederation.",
        "description": "The Fourth Succession War was Hanse Davion and Melissa Steiner's coordinated offensive that crippled House Liao and created the Federated Commonwealth alliance.",
        "aliases": []
    },
    {
        "slug": "mechwarrior",
        "name": "MechWarrior",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Video game series adapted from BattleTech.",
        "description": "MechWarrior is the action and simulation game franchise that puts players in BattleMech cockpits, adapting Inner Sphere and Clan mech combat for digital audiences.",
        "aliases": []
    },
    {
        "slug": "battletech-figures",
        "name": "BattleTech figures",
        "type": "topic",
        "short_description": "People and named forces central to BattleTech.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring BattleTech."
    },
    {
        "slug": "battletech-places",
        "name": "BattleTech places",
        "type": "place",
        "short_description": "Locations and geographies that frame BattleTech.",
        "description": "Places, regions, and built sites that give BattleTech its map — where events and figures concentrate."
    },
    {
        "slug": "battletech-events",
        "name": "BattleTech events",
        "type": "event",
        "short_description": "Turning points and dated episodes in BattleTech.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the BattleTech timeline."
    },
    {
        "slug": "battletech-objects",
        "name": "BattleTech objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to BattleTech.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through BattleTech."
    },
    {
        "slug": "battletech-factions",
        "name": "BattleTech factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside BattleTech.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in BattleTech."
    },
    {
        "slug": "battletech-concepts",
        "name": "BattleTech concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize BattleTech.",
        "description": "Keywords, doctrines, systems, and abstract forces that make BattleTech readable as a lore graph."
    },
    {
        "slug": "battletech-eras",
        "name": "BattleTech eras",
        "type": "event",
        "short_description": "Periodization for BattleTech.",
        "description": "Named eras and phases that help readers track how BattleTech changes across time."
    },
    {
        "slug": "battletech-works",
        "name": "BattleTech works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry BattleTech.",
        "description": "Primary works and adaptations through which most audiences encounter BattleTech."
    }
];

const relationships = [
    [
        "fasa",
        "battletech",
        "created",
        "FASA created BattleTech.",
        0.99,
        0.99
    ],
    [
        "topps",
        "battletech",
        "published",
        "Topps held BattleTech rights after FASA.",
        0.96,
        0.93
    ],
    [
        "catalyst-game-labs",
        "battletech",
        "publishes",
        "Catalyst publishes modern BattleTech.",
        0.98,
        0.96
    ],
    [
        "catalyst-game-labs",
        "topps",
        "related_to",
        "Catalyst continues tabletop publication after Topps licensing.",
        0.93,
        0.88
    ],
    [
        "inner-sphere",
        "battletech",
        "part_of",
        "The Inner Sphere is BattleTech's core region.",
        0.99,
        0.98
    ],
    [
        "clans",
        "battletech",
        "part_of",
        "The Clans are a major BattleTech faction.",
        0.99,
        0.98
    ],
    [
        "battlemechs",
        "battletech",
        "part_of",
        "BattleMechs define BattleTech warfare.",
        0.99,
        0.99
    ],
    [
        "star-league",
        "battletech",
        "preceded",
        "The Star League preceded Succession Wars history.",
        0.98,
        0.96
    ],
    [
        "succession-wars",
        "star-league",
        "followed",
        "Succession Wars followed the Star League's collapse.",
        0.98,
        0.96
    ],
    [
        "succession-wars",
        "inner-sphere",
        "occurred_at",
        "Succession Wars ravaged the Inner Sphere.",
        0.99,
        0.98
    ],
    [
        "house-steiner",
        "inner-sphere",
        "member_of",
        "House Steiner rules a Successor State.",
        0.99,
        0.98
    ],
    [
        "house-davion",
        "inner-sphere",
        "member_of",
        "House Davion rules the Federated Suns.",
        0.99,
        0.98
    ],
    [
        "house-liao",
        "inner-sphere",
        "member_of",
        "House Liao rules the Capellan Confederation.",
        0.99,
        0.98
    ],
    [
        "house-kurita",
        "inner-sphere",
        "member_of",
        "House Kurita rules the Draconis Combine.",
        0.99,
        0.98
    ],
    [
        "house-marik",
        "inner-sphere",
        "member_of",
        "House Marik leads the Free Worlds League.",
        0.99,
        0.98
    ],
    [
        "star-league",
        "terra",
        "located_in",
        "The Star League governed from Terra.",
        0.97,
        0.94
    ],
    [
        "hanse-davion",
        "house-davion",
        "leads",
        "Hanse Davion was First Prince of the Federated Suns.",
        0.99,
        0.98
    ],
    [
        "melissa-steiner-davion",
        "house-steiner",
        "member_of",
        "Melissa was heir of House Steiner.",
        0.98,
        0.96
    ],
    [
        "hanse-davion",
        "melissa-steiner-davion",
        "connected_to",
        "Hanse and Melissa's marriage united two houses.",
        0.98,
        0.96
    ],
    [
        "fourth-succession-war",
        "hanse-davion",
        "involved",
        "Hanse Davion drove the Fourth Succession War.",
        0.98,
        0.96
    ],
    [
        "fourth-succession-war",
        "house-liao",
        "opposed_by",
        "House Liao bore the war's main assault.",
        0.97,
        0.94
    ],
    [
        "house-steiner",
        "house-davion",
        "supports",
        "Steiner and Davion formed the Federated Commonwealth.",
        0.96,
        0.93
    ],
    [
        "tharkad",
        "house-steiner",
        "located_in",
        "Tharkad is the Lyran capital.",
        0.99,
        0.98
    ],
    [
        "comstar",
        "terra",
        "located_in",
        "ComStar guards Terra and the HPG network.",
        0.98,
        0.96
    ],
    [
        "comstar",
        "inner-sphere",
        "records",
        "ComStar maintains Inner Sphere communications.",
        0.98,
        0.96
    ],
    [
        "myndo-waterly",
        "comstar",
        "leads",
        "Myndo Waterly served as ComStar Primus.",
        0.98,
        0.96
    ],
    [
        "precentor-martial",
        "comstar",
        "member_of",
        "The Precentor Martial commands ComStar's military.",
        0.98,
        0.96
    ],
    [
        "clan-wolf",
        "clans",
        "member_of",
        "Clan Wolf is a major invasion Clan.",
        0.99,
        0.98
    ],
    [
        "clan-jade-falcon",
        "clans",
        "member_of",
        "Clan Jade Falcon is a Crusader Clan.",
        0.99,
        0.98
    ],
    [
        "clan-smoke-jaguar",
        "clans",
        "member_of",
        "Clan Smoke Jaguar invaded the Inner Sphere.",
        0.98,
        0.96
    ],
    [
        "clan-ghost-bear",
        "clans",
        "member_of",
        "Clan Ghost Bear is a powerful Clan.",
        0.98,
        0.96
    ],
    [
        "ulric-kerensky",
        "clan-wolf",
        "leads",
        "Ulric Kerensky led Clan Wolf as Khan and ilKhan.",
        0.98,
        0.96
    ],
    [
        "natasha-kerensky",
        "clan-wolf",
        "member_of",
        "Natasha Kerensky became a Clan Wolf warrior.",
        0.97,
        0.94
    ],
    [
        "natasha-kerensky",
        "battlemechs",
        "uses",
        "Natasha Kerensky pilots legendary BattleMechs.",
        0.97,
        0.94
    ],
    [
        "clan-invasion",
        "clans",
        "involved",
        "The Clans launched the invasion.",
        0.99,
        0.98
    ],
    [
        "clan-invasion",
        "inner-sphere",
        "occurred_at",
        "The invasion struck Inner Sphere worlds.",
        0.99,
        0.98
    ],
    [
        "clan-invasion",
        "battlemechs",
        "involved",
        "OmniMech assaults defined the invasion.",
        0.98,
        0.96
    ],
    [
        "clan-invasion",
        "succession-wars",
        "followed",
        "The invasion followed centuries of Succession Wars.",
        0.96,
        0.93
    ],
    [
        "battle-of-tukayyid",
        "clan-invasion",
        "followed",
        "Tukayyid halted the invasion's advance.",
        0.98,
        0.96
    ],
    [
        "battle-of-tukayyid",
        "comstar",
        "involved",
        "ComStar's Com Guard fought at Tukayyid.",
        0.99,
        0.98
    ],
    [
        "precentor-martial",
        "battle-of-tukayyid",
        "involved",
        "The Precentor Martial commanded at Tukayyid.",
        0.98,
        0.96
    ],
    [
        "ulric-kerensky",
        "clan-invasion",
        "involved",
        "Ulric Kerensky shaped invasion politics.",
        0.97,
        0.94
    ],
    [
        "clans",
        "inner-sphere",
        "opposed_by",
        "Successor States resisted the Clan invasion.",
        0.98,
        0.96
    ],
    [
        "mechwarrior",
        "battletech",
        "adapted_from",
        "MechWarrior adapts BattleTech mech combat.",
        0.98,
        0.96
    ],
    [
        "mechwarrior",
        "battlemechs",
        "involved",
        "MechWarrior games center on piloting BattleMechs.",
        0.98,
        0.96
    ],
    [
        "outreach",
        "inner-sphere",
        "located_in",
        "Outreach serves mercenaries in the Inner Sphere.",
        0.97,
        0.94
    ],
    [
        "battlemechs",
        "house-davion",
        "uses",
        "Great Houses field house BattleMechs.",
        0.96,
        0.93
    ],
    [
        "battletech",
        "battletech-figures",
        "contains",
        "BattleTech figures is a primary trailhead under BattleTech.",
        0.88,
        0.82
    ],
    [
        "battletech",
        "battletech-places",
        "contains",
        "BattleTech places is a primary trailhead under BattleTech.",
        0.88,
        0.82
    ],
    [
        "battletech",
        "battletech-events",
        "contains",
        "BattleTech events is a primary trailhead under BattleTech.",
        0.88,
        0.82
    ],
    [
        "battletech",
        "battletech-objects",
        "contains",
        "BattleTech objects & artifacts is a primary trailhead under BattleTech.",
        0.88,
        0.82
    ],
    [
        "battletech",
        "battletech-factions",
        "contains",
        "BattleTech factions & groups is a primary trailhead under BattleTech.",
        0.88,
        0.82
    ],
    [
        "battletech",
        "battletech-concepts",
        "contains",
        "BattleTech concepts is a primary trailhead under BattleTech.",
        0.88,
        0.82
    ],
    [
        "battletech",
        "battletech-eras",
        "contains",
        "BattleTech eras is a primary trailhead under BattleTech.",
        0.88,
        0.82
    ],
    [
        "battletech",
        "battletech-works",
        "contains",
        "BattleTech works & media is a primary trailhead under BattleTech.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
