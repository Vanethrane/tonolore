/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "teenage-mutant-ninja-turtles",
        "name": "Teenage Mutant Ninja Turtles",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Mirage Studios' mutant ninja turtle heroes across comics and screen.",
        "description": "Teenage Mutant Ninja Turtles (TMNT) is the franchise created by Kevin Eastman and Peter Laird about four turtle brothers trained by Splinter who battle Shredder and the Foot Clan from New York sewers — spanning Mirage comics, Nickelodeon series, and Paramount films.",
        "aliases": []
    },
    {
        "slug": "kevin-eastman",
        "name": "Kevin Eastman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Co-creator of Teenage Mutant Ninja Turtles.",
        "description": "Kevin Eastman co-created Teenage Mutant Ninja Turtles with Peter Laird in 1984, designing the turtles, Shredder, and the gritty Mirage comic that launched a global phenomenon.",
        "aliases": []
    },
    {
        "slug": "peter-laird",
        "name": "Peter Laird",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Co-creator of Teenage Mutant Ninja Turtles.",
        "description": "Peter Laird co-created TMNT with Kevin Eastman, writing early Mirage stories of Leonardo, Raphael, Donatello, and Michelangelo against the Foot Clan.",
        "aliases": []
    },
    {
        "slug": "mirage-studios",
        "name": "Mirage Studios",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Original publisher of TMNT comics.",
        "description": "Mirage Studios published the original black-and-white Teenage Mutant Ninja Turtles comic that defined the turtles' origins, Splinter, and Shredder.",
        "aliases": []
    },
    {
        "slug": "nickelodeon",
        "name": "Nickelodeon",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Current owner and producer of TMNT media.",
        "description": "Nickelodeon owns Teenage Mutant Ninja Turtles and produces animated series including the 2012 and Rise of the TMNT iterations.",
        "aliases": []
    },
    {
        "slug": "paramount-pictures",
        "name": "Paramount Pictures",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Studio behind TMNT feature films.",
        "description": "Paramount Pictures releases Teenage Mutant Ninja Turtles films, including live-action and animated features like Mutant Mayhem.",
        "aliases": []
    },
    {
        "slug": "tmnt-mirage-comic",
        "name": "Teenage Mutant Ninja Turtles (Mirage comic)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Original 1984 Eastman and Laird comic.",
        "description": "The Mirage TMNT comic is the gritty origin story where four turtles mutate, train under Splinter, and face Oroku Saki the Shredder in New York.",
        "aliases": []
    },
    {
        "slug": "tmnt-1987-cartoon",
        "name": "Teenage Mutant Ninja Turtles (1987 cartoon)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Classic animated series that popularized TMNT.",
        "description": "The 1987 TMNT cartoon introduced pizza-loving turtles, Krang, Bebop, and Rocksteady to a generation, softening the Mirage tone for mainstream audiences.",
        "aliases": []
    },
    {
        "slug": "tmnt-2012-series",
        "name": "Teenage Mutant Ninja Turtles (2012 series)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Nickelodeon CGI animated series.",
        "description": "The 2012 TMNT series by Nickelodeon blends humor and serialized storytelling, deepening Shredder, Kraang, and the turtles' brotherhood.",
        "aliases": []
    },
    {
        "slug": "tmnt-mutant-mayhem",
        "name": "Teenage Mutant Ninja Turtles: Mutant Mayhem",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Paramount animated feature film.",
        "description": "Teenage Mutant Ninja Turtles: Mutant Mayhem is a Paramount animated film reimagining the turtles as teenagers facing Superfly and a new mutant threat.",
        "aliases": []
    },
    {
        "slug": "foot-clan",
        "name": "Foot Clan",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Ninja clan led by Shredder.",
        "description": "The Foot Clan is the criminal ninja organization commanded by Shredder, deploying foot soldiers, mutants, and mystic allies against the turtles.",
        "aliases": []
    },
    {
        "slug": "kraang",
        "name": "Kraang",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Alien brain-creatures from Dimension X.",
        "description": "The Kraang are extradimensional brain-like aliens who infiltrate Earth with robot bodies, seeking mutagen and clashing with the turtles in several continuities.",
        "aliases": []
    },
    {
        "slug": "new-york-city",
        "name": "New York City",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Urban home of the Teenage Mutant Ninja Turtles.",
        "description": "New York City is the turtles' territory — rooftops, alleys, and streets where they battle the Foot Clan while hiding their existence from most humans.",
        "aliases": []
    },
    {
        "slug": "turtle-lair",
        "name": "Turtle Lair",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Sewer home base of the ninja turtles.",
        "description": "The Turtle Lair is the turtles' sewer headquarters beneath New York, containing their training room, living space, and access to the surface.",
        "aliases": []
    },
    {
        "slug": "dimension-x",
        "name": "Dimension X",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Alien dimension home of Krang and allies.",
        "description": "Dimension X is the bizarre extradimensional realm connected to Earth through portals, housing Krang and other TMNT cosmic threats.",
        "aliases": []
    },
    {
        "slug": "mutagen",
        "name": "Mutagen",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Ooze that causes mutation in TMNT lore.",
        "description": "Mutagen is the transformative substance that created the turtles and Splinter, and fuels countless villains' schemes across TMNT continuities.",
        "aliases": []
    },
    {
        "slug": "ninjutsu",
        "name": "Ninjutsu",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Martial art taught to the turtles by Splinter.",
        "description": "Ninjutsu is the ninja discipline Master Splinter teaches Leonardo, Raphael, Donatello, and Michelangelo for stealth, combat, and teamwork.",
        "aliases": []
    },
    {
        "slug": "turtle-power",
        "name": "Turtle Power",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Franchise ethos of brotherhood and heroism.",
        "description": "Turtle Power is the TMNT franchise's catchphrase and spirit — four brothers combining ninja skill, humor, and loyalty to protect New York.",
        "aliases": []
    },
    {
        "slug": "leonardo",
        "name": "Leonardo",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Leader turtle wielding twin katanas.",
        "description": "Leonardo is the disciplined leader of the ninja turtles, wielding twin katanas and bearing the blue mask while striving to live up to Splinter's teachings.",
        "aliases": []
    },
    {
        "slug": "raphael",
        "name": "Raphael",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hot-headed turtle with sai weapons.",
        "description": "Raphael is the aggressive turtle in red who fights with sai, often clashing with Leonardo while fiercely protecting his brothers.",
        "aliases": []
    },
    {
        "slug": "donatello",
        "name": "Donatello",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Inventor turtle with a bo staff.",
        "description": "Donatello is the purple-masked genius who builds gadgets and fights with a bo staff, providing tech solutions for the team's missions.",
        "aliases": []
    },
    {
        "slug": "michelangelo",
        "name": "Michelangelo",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Fun-loving turtle with nunchaku.",
        "description": "Michelangelo is the orange-masked party dude who loves pizza and nunchaku, bringing humor and heart to the turtle team.",
        "aliases": []
    },
    {
        "slug": "master-splinter",
        "name": "Master Splinter",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mutated rat sensei of the turtles.",
        "description": "Master Splinter is the mutated rat who raised the four turtles, teaching them ninjutsu and guiding their moral path against Shredder.",
        "aliases": []
    },
    {
        "slug": "shredder",
        "name": "Shredder",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Armored leader of the Foot Clan.",
        "description": "Shredder (Oroku Saki) is the turtles' archenemy, clad in bladed armor and leading the Foot Clan in a vendetta tied to Splinter's past.",
        "aliases": []
    },
    {
        "slug": "april-oneil",
        "name": "April O'Neil",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Human ally and reporter of the turtles.",
        "description": "April O'Neil is the turtles' closest human friend, often a reporter or scientist who aids their fights and keeps their secret.",
        "aliases": []
    },
    {
        "slug": "casey-jones",
        "name": "Casey Jones",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hockey-mask vigilante ally of the turtles.",
        "description": "Casey Jones is a street vigilante in a hockey mask who fights crime alongside Raphael and the turtles with sports-themed weapons.",
        "aliases": []
    },
    {
        "slug": "krang",
        "name": "Krang",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Brain-like warlord from Dimension X.",
        "description": "Krang is the disembodied brain warlord from Dimension X who pilots a powerful android body and allies with Shredder in the 1987 continuity.",
        "aliases": []
    },
    {
        "slug": "bebop",
        "name": "Bebop",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mutant warthog enforcer of the Foot Clan.",
        "description": "Bebop is a dim-witted mutant warthog created by the Foot Clan, often paired with Rocksteady as comic relief muscle.",
        "aliases": []
    },
    {
        "slug": "rocksteady",
        "name": "Rocksteady",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mutant rhino enforcer of the Foot Clan.",
        "description": "Rocksteady is a brutish mutant rhinoceros serving Shredder alongside Bebop, smashing through turtle defenses with raw strength.",
        "aliases": []
    },
    {
        "slug": "karai",
        "name": "Karai",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Shredder's disciple and complex turtle adversary.",
        "description": "Karai is a skilled Foot Clan warrior, often Shredder's adopted daughter or lieutenant, whose loyalty to the turtles versus the Foot shifts by continuity.",
        "aliases": []
    },
    {
        "slug": "leatherhead",
        "name": "Leatherhead",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mutant alligator ally or foe of the turtles.",
        "description": "Leatherhead is a mutant alligator whose role ranges from enemy to friend across TMNT stories, bringing swamp-born power to New York conflicts.",
        "aliases": []
    },
    {
        "slug": "baxter-stockman",
        "name": "Baxter Stockman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mad scientist who serves Shredder.",
        "description": "Baxter Stockman is a brilliant inventor who builds mouser robots and mutagen devices for Shredder, often suffering humiliating defeats.",
        "aliases": []
    },
    {
        "slug": "teenage-mutant-ninja-turtles-figures",
        "name": "Teenage Mutant Ninja Turtles figures",
        "type": "topic",
        "short_description": "People and named forces central to Teenage Mutant Ninja Turtles.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Teenage Mutant Ninja Turtles."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-places",
        "name": "Teenage Mutant Ninja Turtles places",
        "type": "place",
        "short_description": "Locations and geographies that frame Teenage Mutant Ninja Turtles.",
        "description": "Places, regions, and built sites that give Teenage Mutant Ninja Turtles its map — where events and figures concentrate."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-events",
        "name": "Teenage Mutant Ninja Turtles events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Teenage Mutant Ninja Turtles.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Teenage Mutant Ninja Turtles timeline."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-objects",
        "name": "Teenage Mutant Ninja Turtles objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Teenage Mutant Ninja Turtles.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Teenage Mutant Ninja Turtles."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-factions",
        "name": "Teenage Mutant Ninja Turtles factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Teenage Mutant Ninja Turtles.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Teenage Mutant Ninja Turtles."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-concepts",
        "name": "Teenage Mutant Ninja Turtles concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Teenage Mutant Ninja Turtles.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Teenage Mutant Ninja Turtles readable as a lore graph."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-eras",
        "name": "Teenage Mutant Ninja Turtles eras",
        "type": "event",
        "short_description": "Periodization for Teenage Mutant Ninja Turtles.",
        "description": "Named eras and phases that help readers track how Teenage Mutant Ninja Turtles changes across time."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-works",
        "name": "Teenage Mutant Ninja Turtles works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Teenage Mutant Ninja Turtles.",
        "description": "Primary works and adaptations through which most audiences encounter Teenage Mutant Ninja Turtles."
    }
];

const relationships = [
    [
        "kevin-eastman",
        "teenage-mutant-ninja-turtles",
        "created",
        "Eastman co-created TMNT.",
        0.99,
        0.99
    ],
    [
        "peter-laird",
        "teenage-mutant-ninja-turtles",
        "created",
        "Laird co-created TMNT.",
        0.99,
        0.99
    ],
    [
        "kevin-eastman",
        "tmnt-mirage-comic",
        "created",
        "Eastman drew the Mirage comic.",
        0.99,
        0.98
    ],
    [
        "peter-laird",
        "tmnt-mirage-comic",
        "created",
        "Laird wrote the Mirage comic.",
        0.99,
        0.98
    ],
    [
        "mirage-studios",
        "tmnt-mirage-comic",
        "publishes",
        "Mirage published the original comic.",
        0.98,
        0.96
    ],
    [
        "nickelodeon",
        "teenage-mutant-ninja-turtles",
        "produced",
        "Nickelodeon produces modern TMNT media.",
        0.97,
        0.94
    ],
    [
        "paramount-pictures",
        "tmnt-mutant-mayhem",
        "produced",
        "Paramount produced Mutant Mayhem.",
        0.98,
        0.96
    ],
    [
        "tmnt-mirage-comic",
        "teenage-mutant-ninja-turtles",
        "part_of",
        "The Mirage comic is TMNT's origin.",
        0.99,
        0.99
    ],
    [
        "tmnt-1987-cartoon",
        "teenage-mutant-ninja-turtles",
        "part_of",
        "The 1987 cartoon is a major TMNT work.",
        0.98,
        0.97
    ],
    [
        "tmnt-2012-series",
        "teenage-mutant-ninja-turtles",
        "part_of",
        "The 2012 series is Nickelodeon TMNT.",
        0.98,
        0.96
    ],
    [
        "tmnt-mutant-mayhem",
        "teenage-mutant-ninja-turtles",
        "part_of",
        "Mutant Mayhem is a TMNT film.",
        0.98,
        0.96
    ],
    [
        "tmnt-mirage-comic",
        "tmnt-1987-cartoon",
        "adapted_into",
        "The comic inspired the 1987 cartoon.",
        0.96,
        0.93
    ],
    [
        "tmnt-mirage-comic",
        "tmnt-2012-series",
        "adapted_into",
        "Mirage origins inform Nickelodeon TMNT.",
        0.94,
        0.9
    ],
    [
        "tmnt-mirage-comic",
        "tmnt-mutant-mayhem",
        "inspired",
        "Mutant Mayhem draws on turtle origins.",
        0.93,
        0.88
    ],
    [
        "leonardo",
        "master-splinter",
        "supports",
        "Leonardo leads the team for Splinter.",
        0.98,
        0.96
    ],
    [
        "raphael",
        "master-splinter",
        "supports",
        "Raphael fights for Splinter's honor.",
        0.97,
        0.95
    ],
    [
        "donatello",
        "master-splinter",
        "supports",
        "Donatello serves Splinter with inventions.",
        0.97,
        0.95
    ],
    [
        "michelangelo",
        "master-splinter",
        "supports",
        "Michelangelo trains under Splinter.",
        0.97,
        0.95
    ],
    [
        "master-splinter",
        "ninjutsu",
        "uses",
        "Splinter teaches ninjutsu.",
        0.99,
        0.98
    ],
    [
        "leonardo",
        "ninjutsu",
        "uses",
        "Leonardo masters ninja leadership.",
        0.98,
        0.96
    ],
    [
        "raphael",
        "ninjutsu",
        "uses",
        "Raphael fights with ninja aggression.",
        0.98,
        0.96
    ],
    [
        "donatello",
        "ninjutsu",
        "uses",
        "Donatello applies ninjutsu with tech.",
        0.97,
        0.95
    ],
    [
        "michelangelo",
        "ninjutsu",
        "uses",
        "Michelangelo practices ninjutsu playfully.",
        0.97,
        0.95
    ],
    [
        "leonardo",
        "raphael",
        "related_to",
        "Leonardo and Raphael are turtle brothers.",
        0.98,
        0.96
    ],
    [
        "leonardo",
        "donatello",
        "related_to",
        "Leonardo and Donatello are brothers.",
        0.98,
        0.96
    ],
    [
        "leonardo",
        "michelangelo",
        "related_to",
        "Leonardo and Michelangelo are brothers.",
        0.98,
        0.96
    ],
    [
        "master-splinter",
        "leonardo",
        "supports",
        "Splinter raised and trains Leonardo.",
        0.99,
        0.98
    ],
    [
        "master-splinter",
        "mutagen",
        "caused",
        "Mutagen transformed Splinter and the turtles.",
        0.98,
        0.96
    ],
    [
        "leonardo",
        "turtle-lair",
        "located_in",
        "The turtles live in the sewer lair.",
        0.98,
        0.96
    ],
    [
        "turtle-lair",
        "new-york-city",
        "located_in",
        "The lair is beneath New York.",
        0.99,
        0.98
    ],
    [
        "foot-clan",
        "new-york-city",
        "located_in",
        "The Foot Clan operates in New York.",
        0.98,
        0.96
    ],
    [
        "shredder",
        "foot-clan",
        "leads",
        "Shredder commands the Foot Clan.",
        0.99,
        0.99
    ],
    [
        "karai",
        "foot-clan",
        "member_of",
        "Karai serves the Foot Clan.",
        0.97,
        0.95
    ],
    [
        "bebop",
        "foot-clan",
        "member_of",
        "Bebop works for the Foot.",
        0.97,
        0.95
    ],
    [
        "rocksteady",
        "foot-clan",
        "member_of",
        "Rocksteady serves Shredder.",
        0.97,
        0.95
    ],
    [
        "baxter-stockman",
        "foot-clan",
        "supports",
        "Stockman builds tech for Shredder.",
        0.96,
        0.94
    ],
    [
        "shredder",
        "master-splinter",
        "opposed_by",
        "Shredder wars with Splinter and the turtles.",
        0.99,
        0.98
    ],
    [
        "leonardo",
        "shredder",
        "opposed_by",
        "Leonardo leads the fight against Shredder.",
        0.99,
        0.98
    ],
    [
        "raphael",
        "shredder",
        "opposed_by",
        "Raphael battles Shredder fiercely.",
        0.98,
        0.96
    ],
    [
        "april-oneil",
        "leonardo",
        "supports",
        "April aids the turtles.",
        0.97,
        0.95
    ],
    [
        "casey-jones",
        "raphael",
        "supports",
        "Casey fights alongside Raphael.",
        0.97,
        0.95
    ],
    [
        "krang",
        "dimension-x",
        "located_in",
        "Krang originates from Dimension X.",
        0.98,
        0.96
    ],
    [
        "krang",
        "shredder",
        "supports",
        "Krang allies with Shredder in 1987 canon.",
        0.96,
        0.93
    ],
    [
        "kraang",
        "dimension-x",
        "related_to",
        "The Kraang hail from Dimension X.",
        0.97,
        0.95
    ],
    [
        "kraang",
        "leonardo",
        "opposed_by",
        "The Kraang threaten the turtles.",
        0.95,
        0.92
    ],
    [
        "mutagen",
        "leonardo",
        "caused",
        "Mutagen created the ninja turtles.",
        0.99,
        0.98
    ],
    [
        "turtle-power",
        "leonardo",
        "motivated_by",
        "The turtles fight with Turtle Power spirit.",
        0.94,
        0.9
    ],
    [
        "leatherhead",
        "new-york-city",
        "located_in",
        "Leatherhead appears in NYC stories.",
        0.93,
        0.88
    ],
    [
        "teenage-mutant-ninja-turtles",
        "teenage-mutant-ninja-turtles-figures",
        "contains",
        "Teenage Mutant Ninja Turtles figures is a primary trailhead under Teenage Mutant Ninja Turtles.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles",
        "teenage-mutant-ninja-turtles-places",
        "contains",
        "Teenage Mutant Ninja Turtles places is a primary trailhead under Teenage Mutant Ninja Turtles.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles",
        "teenage-mutant-ninja-turtles-events",
        "contains",
        "Teenage Mutant Ninja Turtles events is a primary trailhead under Teenage Mutant Ninja Turtles.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles",
        "teenage-mutant-ninja-turtles-objects",
        "contains",
        "Teenage Mutant Ninja Turtles objects & artifacts is a primary trailhead under Teenage Mutant Ninja Turtles.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles",
        "teenage-mutant-ninja-turtles-factions",
        "contains",
        "Teenage Mutant Ninja Turtles factions & groups is a primary trailhead under Teenage Mutant Ninja Turtles.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles",
        "teenage-mutant-ninja-turtles-concepts",
        "contains",
        "Teenage Mutant Ninja Turtles concepts is a primary trailhead under Teenage Mutant Ninja Turtles.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles",
        "teenage-mutant-ninja-turtles-eras",
        "contains",
        "Teenage Mutant Ninja Turtles eras is a primary trailhead under Teenage Mutant Ninja Turtles.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles",
        "teenage-mutant-ninja-turtles-works",
        "contains",
        "Teenage Mutant Ninja Turtles works & media is a primary trailhead under Teenage Mutant Ninja Turtles.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
