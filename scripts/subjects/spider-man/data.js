/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "spider-man",
        "name": "Spider-Man",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Peter Parker's Marvel hero mythos and Spider-Verse.",
        "description": "Spider-Man is the Marvel mythos of Peter Parker—web-slinging through Queens and New York City with Aunt May, Mary Jane Watson, Gwen Stacy, and foes like the Green Goblin, Doctor Octopus, and Venom.",
        "aliases": []
    },
    {
        "slug": "peter-parker",
        "name": "Peter Parker",
        "type": "person",
        "evidence": "fiction",
        "short_description": "The ordinary self behind Spider-Man.",
        "description": "Peter Parker is the science-minded Queens teen who becomes Spider-Man after a radioactive bite, learning responsibility from Uncle Ben while balancing Aunt May, Mary Jane Watson, and the Daily Bugle.",
        "aliases": []
    },
    {
        "slug": "stan-lee",
        "name": "Stan Lee",
        "type": "person",
        "evidence": "documented",
        "short_description": "Co-creator of Spider-Man.",
        "description": "Stan Lee co-created Spider-Man and Peter Parker with Steve Ditko for Marvel, shaping Aunt May, Uncle Ben, and the hero's early supporting cast.",
        "aliases": []
    },
    {
        "slug": "steve-ditko",
        "name": "Steve Ditko",
        "type": "person",
        "evidence": "documented",
        "short_description": "Co-creator and first artist of Spider-Man.",
        "description": "Steve Ditko co-created Spider-Man with Stan Lee, designing Peter Parker, the costume, and early villains like Doctor Octopus.",
        "aliases": []
    },
    {
        "slug": "marvel",
        "name": "Marvel",
        "type": "topic",
        "evidence": "documented",
        "short_description": "Publisher universe that houses Spider-Man.",
        "description": "Marvel is the shared universe where Spider-Man crosses paths with wider heroes while remaining rooted in Queens street-level stories.",
        "aliases": []
    },
    {
        "slug": "aunt-may",
        "name": "Aunt May",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Peter Parker's guardian and moral anchor.",
        "description": "Aunt May raises Peter Parker after Uncle Ben's death, grounding Spider-Man's double life with care and worry in Queens.",
        "aliases": []
    },
    {
        "slug": "uncle-ben",
        "name": "Uncle Ben",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Peter's uncle whose death teaches responsibility.",
        "description": "Uncle Ben's death teaches Peter Parker that with great power comes great responsibility—the heart of Spider-Man's creed.",
        "aliases": []
    },
    {
        "slug": "mary-jane-watson",
        "name": "Mary Jane Watson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Peter's closest love and confidante.",
        "description": "Mary Jane Watson is Peter Parker's enduring partner and friend, sharing the costs of Spider-Man's secret across comics and adaptations.",
        "aliases": []
    },
    {
        "slug": "gwen-stacy",
        "name": "Gwen Stacy",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Peter's tragic first great love.",
        "description": "Gwen Stacy is Peter Parker's early love whose fate at the Green Goblin's hands defines Spider-Man's most famous tragedy.",
        "aliases": []
    },
    {
        "slug": "j-jonah-jameson",
        "name": "J. Jonah Jameson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Daily Bugle publisher who hounds Spider-Man.",
        "description": "J. Jonah Jameson runs the Daily Bugle and crusades against Spider-Man in print while employing photographer Peter Parker.",
        "aliases": []
    },
    {
        "slug": "black-cat",
        "name": "Black Cat",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Felicia Hardy; thief and occasional Spider-Man ally.",
        "description": "Black Cat is Felicia Hardy, a cat burglar whose romance and team-ups with Spider-Man blur crime and heroism in New York City.",
        "aliases": []
    },
    {
        "slug": "green-goblin",
        "name": "Green Goblin",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Norman Osborn's glider-riding archfoe.",
        "description": "The Green Goblin is Norman Osborn's monstrous persona, Spider-Man's archfoe tied to Oscorp, Gwen Stacy's tragedy, and Queens warfare.",
        "aliases": []
    },
    {
        "slug": "norman-osborn",
        "name": "Norman Osborn",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Oscorp mogul behind the Green Goblin.",
        "description": "Norman Osborn runs Oscorp and becomes the Green Goblin, obsessively targeting Peter Parker and Spider-Man.",
        "aliases": []
    },
    {
        "slug": "doctor-octopus",
        "name": "Doctor Octopus",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Otto Octavius; tentacled scientific foe.",
        "description": "Doctor Octopus is Otto Octavius, a brilliant scientist whose mechanical arms make him one of Spider-Man's deadliest enemies.",
        "aliases": []
    },
    {
        "slug": "venom",
        "name": "Venom",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Symbiote-bonded antihero and rival.",
        "description": "Venom is the symbiote-host identity—most famously Eddie Brock—born from Spider-Man's black-suit past and the alien Symbiote.",
        "aliases": []
    },
    {
        "slug": "electro",
        "name": "Electro",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Maxwell Dillon; electricity-powered villain.",
        "description": "Electro is a lightning-charged foe who battled Spider-Man across New York City and classic villain team-ups.",
        "aliases": []
    },
    {
        "slug": "sandman",
        "name": "Sandman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Flint Marko; sand-manipulating criminal.",
        "description": "Sandman can reshape his body into sand, oscillating between Spider-Man enemy and reluctant ally in Marvel street stories.",
        "aliases": []
    },
    {
        "slug": "miles-morales",
        "name": "Miles Morales",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Ultimate Universe Spider-Man of Brooklyn.",
        "description": "Miles Morales is a Spider-Man of the Spider-Verse, a Brooklyn hero who shares the mantle with Peter Parker across Marvel realities.",
        "aliases": []
    },
    {
        "slug": "spider-gwen",
        "name": "Spider-Gwen",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Gwen Stacy as Spider-Woman of Earth-65.",
        "description": "Spider-Gwen is an alternate Gwen Stacy who wears the spider mantle in the Spider-Verse, distinct from Peter Parker's fallen love.",
        "aliases": []
    },
    {
        "slug": "spider-verse",
        "name": "Spider-Verse",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Multiverse of Spider-heroes across realities.",
        "description": "The Spider-Verse links Peter Parker, Miles Morales, Spider-Gwen, and countless spider variants across Marvel's multiverse.",
        "aliases": []
    },
    {
        "slug": "daily-bugle",
        "name": "Daily Bugle",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Tabloids that smear Spider-Man.",
        "description": "The Daily Bugle is J. Jonah Jameson's newspaper, where Peter Parker sells photos while the paper attacks Spider-Man.",
        "aliases": []
    },
    {
        "slug": "oscorp",
        "name": "Oscorp",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Norman Osborn's tech conglomerate.",
        "description": "Oscorp is Norman Osborn's corporation, source of Green Goblin tech and endless scientific threats for Spider-Man.",
        "aliases": []
    },
    {
        "slug": "queens",
        "name": "Queens",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Peter Parker's home borough.",
        "description": "Queens is where Peter Parker, Aunt May, and Uncle Ben make Spider-Man's origin feel neighborhood-close within New York City.",
        "aliases": []
    },
    {
        "slug": "new-york-city",
        "name": "New York City",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Skyline Spider-Man swings across.",
        "description": "New York City—especially Queens and Manhattan—is Spider-Man's playground of rooftops, the Daily Bugle, and Oscorp towers.",
        "aliases": []
    },
    {
        "slug": "iron-spider",
        "name": "Iron Spider armor",
        "type": "object",
        "evidence": "fiction",
        "short_description": "High-tech suit aiding Spider-Man.",
        "description": "The Iron Spider armor is an advanced Spider-Man suit with mechanical legs and enhanced systems, famously tied to Marvel crossovers.",
        "aliases": []
    },
    {
        "slug": "symbiote",
        "name": "Symbiote",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Alien living costume that becomes Venom.",
        "description": "The Symbiote is the alien suit that bonds with Spider-Man before rejecting him and later empowering Venom.",
        "aliases": []
    },
    {
        "slug": "amazing-spider-man",
        "name": "The Amazing Spider-Man",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Flagship Spider-Man comic series.",
        "description": "The Amazing Spider-Man is the long-running Marvel series chronicling Peter Parker, Aunt May, and foes like the Green Goblin and Doctor Octopus.",
        "aliases": []
    },
    {
        "slug": "with-great-power",
        "name": "With great power...",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Uncle Ben's lesson that defines Spider-Man.",
        "description": "\"With great power comes great responsibility\" is the creed Peter Parker learns through Uncle Ben, defining Spider-Man's ethics.",
        "aliases": []
    },
    {
        "slug": "spider-sense",
        "name": "Spider-Sense",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Precognitive danger sense of Spider-heroes.",
        "description": "Spider-Sense warns Peter Parker and other Spider-Verse heroes of danger moments before attacks land.",
        "aliases": []
    },
    {
        "slug": "spider-man-figures",
        "name": "Spider-Man figures",
        "type": "topic",
        "short_description": "People and named forces central to Spider-Man.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Spider-Man."
    },
    {
        "slug": "spider-man-places",
        "name": "Spider-Man places",
        "type": "place",
        "short_description": "Locations and geographies that frame Spider-Man.",
        "description": "Places, regions, and built sites that give Spider-Man its map — where events and figures concentrate."
    },
    {
        "slug": "spider-man-events",
        "name": "Spider-Man events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Spider-Man.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Spider-Man timeline."
    },
    {
        "slug": "spider-man-objects",
        "name": "Spider-Man objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Spider-Man.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Spider-Man."
    },
    {
        "slug": "spider-man-factions",
        "name": "Spider-Man factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Spider-Man.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Spider-Man."
    },
    {
        "slug": "spider-man-concepts",
        "name": "Spider-Man concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Spider-Man.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Spider-Man readable as a lore graph."
    },
    {
        "slug": "spider-man-eras",
        "name": "Spider-Man eras",
        "type": "event",
        "short_description": "Periodization for Spider-Man.",
        "description": "Named eras and phases that help readers track how Spider-Man changes across time."
    },
    {
        "slug": "spider-man-works",
        "name": "Spider-Man works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Spider-Man.",
        "description": "Primary works and adaptations through which most audiences encounter Spider-Man."
    },
    {
        "slug": "spider-man-symbols",
        "name": "Spider-Man symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Spider-Man.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Spider-Man."
    },
    {
        "slug": "spider-man-controversies",
        "name": "Spider-Man controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Spider-Man.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Spider-Man argumentative."
    },
    {
        "slug": "spider-man-sources",
        "name": "Spider-Man sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Spider-Man.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Spider-Man."
    }
];

const relationships = [
    [
        "stan-lee",
        "spider-man",
        "created",
        "Stan Lee co-created Spider-Man.",
        0.99,
        0.99
    ],
    [
        "steve-ditko",
        "spider-man",
        "created",
        "Steve Ditko co-created Spider-Man.",
        0.99,
        0.99
    ],
    [
        "stan-lee",
        "peter-parker",
        "created",
        "Stan Lee co-created Peter Parker.",
        0.99,
        0.97
    ],
    [
        "steve-ditko",
        "peter-parker",
        "created",
        "Steve Ditko co-created Peter Parker.",
        0.99,
        0.97
    ],
    [
        "spider-man",
        "marvel",
        "part_of",
        "Spider-Man is part of Marvel.",
        0.98,
        0.96
    ],
    [
        "amazing-spider-man",
        "spider-man",
        "part_of",
        "Amazing Spider-Man is the flagship series.",
        0.98,
        0.95
    ],
    [
        "peter-parker",
        "spider-man",
        "connected_to",
        "Peter Parker is Spider-Man.",
        0.99,
        0.99
    ],
    [
        "aunt-may",
        "peter-parker",
        "supports",
        "Aunt May raises and supports Peter.",
        0.98,
        0.96
    ],
    [
        "uncle-ben",
        "peter-parker",
        "connected_to",
        "Uncle Ben shapes Peter's sense of duty.",
        0.99,
        0.98
    ],
    [
        "uncle-ben",
        "with-great-power",
        "connected_to",
        "Uncle Ben embodies the great-power lesson.",
        0.99,
        0.97
    ],
    [
        "mary-jane-watson",
        "peter-parker",
        "connected_to",
        "Mary Jane is Peter's closest partner.",
        0.98,
        0.95
    ],
    [
        "gwen-stacy",
        "peter-parker",
        "connected_to",
        "Gwen Stacy is Peter's tragic love.",
        0.98,
        0.95
    ],
    [
        "j-jonah-jameson",
        "daily-bugle",
        "leads",
        "Jameson runs the Daily Bugle.",
        0.99,
        0.97
    ],
    [
        "peter-parker",
        "daily-bugle",
        "member_of",
        "Peter works for the Daily Bugle.",
        0.96,
        0.92
    ],
    [
        "black-cat",
        "spider-man",
        "connected_to",
        "Black Cat allies and romances Spider-Man.",
        0.95,
        0.9
    ],
    [
        "green-goblin",
        "spider-man",
        "opposed_by",
        "The Green Goblin is Spider-Man's archfoe.",
        0.99,
        0.98
    ],
    [
        "norman-osborn",
        "green-goblin",
        "connected_to",
        "Norman Osborn is the Green Goblin.",
        0.99,
        0.98
    ],
    [
        "norman-osborn",
        "oscorp",
        "leads",
        "Norman Osborn runs Oscorp.",
        0.98,
        0.96
    ],
    [
        "doctor-octopus",
        "spider-man",
        "opposed_by",
        "Doctor Octopus battles Spider-Man.",
        0.98,
        0.96
    ],
    [
        "venom",
        "symbiote",
        "connected_to",
        "Venom is empowered by the Symbiote.",
        0.99,
        0.97
    ],
    [
        "symbiote",
        "spider-man",
        "connected_to",
        "The Symbiote once bonded to Spider-Man.",
        0.98,
        0.95
    ],
    [
        "venom",
        "spider-man",
        "opposed_by",
        "Venom hunts and rivals Spider-Man.",
        0.97,
        0.94
    ],
    [
        "electro",
        "spider-man",
        "opposed_by",
        "Electro fights Spider-Man.",
        0.95,
        0.9
    ],
    [
        "sandman",
        "spider-man",
        "opposed_by",
        "Sandman fights Spider-Man.",
        0.95,
        0.9
    ],
    [
        "gwen-stacy",
        "green-goblin",
        "opposed_by",
        "The Green Goblin's actions doom Gwen Stacy.",
        0.97,
        0.94
    ],
    [
        "miles-morales",
        "spider-verse",
        "member_of",
        "Miles Morales is a Spider-Verse hero.",
        0.98,
        0.96
    ],
    [
        "spider-gwen",
        "spider-verse",
        "member_of",
        "Spider-Gwen is a Spider-Verse hero.",
        0.97,
        0.94
    ],
    [
        "peter-parker",
        "spider-verse",
        "member_of",
        "Peter Parker anchors the Spider-Verse.",
        0.96,
        0.92
    ],
    [
        "queens",
        "new-york-city",
        "located_in",
        "Queens is a borough of New York City.",
        0.99,
        0.97
    ],
    [
        "peter-parker",
        "queens",
        "located_in",
        "Peter Parker is from Queens.",
        0.98,
        0.95
    ],
    [
        "spider-man",
        "new-york-city",
        "located_in",
        "Spider-Man swings across New York City.",
        0.98,
        0.95
    ],
    [
        "spider-sense",
        "peter-parker",
        "uses",
        "Peter Parker relies on Spider-Sense.",
        0.98,
        0.95
    ],
    [
        "spider-man",
        "spider-man-figures",
        "contains",
        "Spider-Man figures is a primary trailhead under Spider-Man.",
        0.88,
        0.82
    ],
    [
        "spider-man",
        "spider-man-places",
        "contains",
        "Spider-Man places is a primary trailhead under Spider-Man.",
        0.88,
        0.82
    ],
    [
        "spider-man",
        "spider-man-events",
        "contains",
        "Spider-Man events is a primary trailhead under Spider-Man.",
        0.88,
        0.82
    ],
    [
        "spider-man",
        "spider-man-objects",
        "contains",
        "Spider-Man objects & artifacts is a primary trailhead under Spider-Man.",
        0.88,
        0.82
    ],
    [
        "spider-man",
        "spider-man-factions",
        "contains",
        "Spider-Man factions & groups is a primary trailhead under Spider-Man.",
        0.88,
        0.82
    ],
    [
        "spider-man",
        "spider-man-concepts",
        "contains",
        "Spider-Man concepts is a primary trailhead under Spider-Man.",
        0.88,
        0.82
    ],
    [
        "spider-man",
        "spider-man-eras",
        "contains",
        "Spider-Man eras is a primary trailhead under Spider-Man.",
        0.88,
        0.82
    ],
    [
        "spider-man",
        "spider-man-works",
        "contains",
        "Spider-Man works & media is a primary trailhead under Spider-Man.",
        0.88,
        0.82
    ],
    [
        "spider-man",
        "spider-man-symbols",
        "contains",
        "Spider-Man symbols is a primary trailhead under Spider-Man.",
        0.88,
        0.82
    ],
    [
        "spider-man",
        "spider-man-controversies",
        "contains",
        "Spider-Man controversies is a primary trailhead under Spider-Man.",
        0.88,
        0.82
    ],
    [
        "spider-man",
        "spider-man-sources",
        "contains",
        "Spider-Man sources is a primary trailhead under Spider-Man.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
