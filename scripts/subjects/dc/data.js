/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dc",
        "name": "DC / Batman",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "DC Comics world centered on Batman, Gotham, and the Justice League.",
        "description": "DC / Batman covers the DC Comics universe with Batman, Bruce Wayne, Gotham, the Bat-Family, and wider icons like Superman, Wonder Woman, and the Justice League.",
        "aliases": []
    },
    {
        "slug": "bob-kane",
        "name": "Bob Kane",
        "type": "person",
        "evidence": "documented",
        "short_description": "Credited co-creator of Batman.",
        "description": "Bob Kane is the long-credited co-creator of Batman and Bruce Wayne, working with Bill Finger on the early Gotham mythos published by DC Comics.",
        "aliases": []
    },
    {
        "slug": "bill-finger",
        "name": "Bill Finger",
        "type": "person",
        "evidence": "documented",
        "short_description": "Writer who shaped Batman's origin and world.",
        "description": "Bill Finger co-created much of Batman's identity—the costume details, Gotham tone, and early villains—alongside Bob Kane for DC Comics.",
        "aliases": []
    },
    {
        "slug": "dc-comics",
        "name": "DC Comics",
        "type": "organization",
        "evidence": "documented",
        "short_description": "Publisher of Batman, Superman, and the Justice League.",
        "description": "DC Comics publishes Batman, Superman, Wonder Woman, and the shared universe that includes Gotham, Metropolis, and the Justice League.",
        "aliases": []
    },
    {
        "slug": "batman",
        "name": "Batman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Gotham's Dark Knight vigilante.",
        "description": "Batman is Bruce Wayne's crusading alter ego, operating from the Batcave with Alfred Pennyworth, the Bat-Family, and the Batmobile against the Joker and Gotham's rogues.",
        "aliases": []
    },
    {
        "slug": "bruce-wayne",
        "name": "Bruce Wayne",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Billionaire public face of Batman.",
        "description": "Bruce Wayne is the orphaned Gotham industrialist who becomes Batman, funding the Batcave, Batmobile, and the Bat-Family's war on crime.",
        "aliases": []
    },
    {
        "slug": "gotham",
        "name": "Gotham City",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Crime-shadowed city Batman protects.",
        "description": "Gotham City is Batman's dark metropolis—home to the Batcave, Arkham Asylum, Jim Gordon's police work, and villains like the Joker, Penguin, and Riddler.",
        "aliases": []
    },
    {
        "slug": "batcave",
        "name": "Batcave",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Batman's subterranean headquarters.",
        "description": "The Batcave beneath Wayne property is Batman's base, housing the Batmobile, trophies, and the Bat-Family's operations in Gotham.",
        "aliases": []
    },
    {
        "slug": "alfred-pennyworth",
        "name": "Alfred Pennyworth",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Butler, medic, and confidant to Batman.",
        "description": "Alfred Pennyworth tends Bruce Wayne and Batman, keeping the Batcave running and anchoring the Bat-Family with dry wit and care.",
        "aliases": []
    },
    {
        "slug": "bat-family",
        "name": "Bat-Family",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Allies fighting crime under Batman's banner.",
        "description": "The Bat-Family includes Nightwing, Robin, Batgirl, and others who share Batman's mission across Gotham under Alfred Pennyworth's watch.",
        "aliases": []
    },
    {
        "slug": "nightwing",
        "name": "Nightwing",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Dick Grayson; former Robin turned hero.",
        "description": "Nightwing is Dick Grayson, the first Robin who leaves Batman's shadow to lead as his own hero while remaining Bat-Family.",
        "aliases": []
    },
    {
        "slug": "robin",
        "name": "Robin",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Batman's young partner mantle.",
        "description": "Robin is the partner identity worn by Dick Grayson and later successors beside Batman in Gotham as part of the Bat-Family.",
        "aliases": []
    },
    {
        "slug": "batgirl",
        "name": "Batgirl",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Gotham heroine of the Bat-Family.",
        "description": "Batgirl—most famously Barbara Gordon—fights beside Batman and Nightwing, linking Jim Gordon's household to the Bat-Family.",
        "aliases": []
    },
    {
        "slug": "batmobile",
        "name": "Batmobile",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Batman's signature combat vehicle.",
        "description": "The Batmobile is Batman's armored car, launching from the Batcave into Gotham chases against the Penguin, Riddler, and other foes.",
        "aliases": []
    },
    {
        "slug": "jim-gordon",
        "name": "Jim Gordon",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Gotham police commissioner and Batman ally.",
        "description": "Jim Gordon is Gotham's steadfast commissioner who signals Batman from rooftops and fathers Batgirl Barbara Gordon.",
        "aliases": []
    },
    {
        "slug": "joker",
        "name": "Joker",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Batman's clown prince of crime.",
        "description": "The Joker is Batman's chaotic archfoe in Gotham, often tied to Harley Quinn and Arkham Asylum's revolving door.",
        "aliases": []
    },
    {
        "slug": "harley-quinn",
        "name": "Harley Quinn",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Joker accomplice turned antihero.",
        "description": "Harley Quinn begins as the Joker's partner in Gotham crime before carving her own path across DC stories.",
        "aliases": []
    },
    {
        "slug": "catwoman",
        "name": "Catwoman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Selina Kyle; thief and Batman's foil.",
        "description": "Catwoman is Selina Kyle, a Gotham cat burglar whose romance and rivalry with Batman blur hero and outlaw lines.",
        "aliases": []
    },
    {
        "slug": "penguin",
        "name": "Penguin",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Oswald Cobblepot; Gotham crime boss.",
        "description": "The Penguin runs underworld clubs and schemes in Gotham, a perennial target of Batman and Jim Gordon.",
        "aliases": []
    },
    {
        "slug": "riddler",
        "name": "Riddler",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Edward Nygma; puzzle-obsessed criminal.",
        "description": "The Riddler taunts Batman with riddles and traps across Gotham, often cycling through Arkham Asylum.",
        "aliases": []
    },
    {
        "slug": "two-face",
        "name": "Two-Face",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Harvey Dent; coin-flip crime lord.",
        "description": "Two-Face is fallen DA Harvey Dent, whose dual nature haunts Batman and Gotham's justice system.",
        "aliases": []
    },
    {
        "slug": "arkham-asylum",
        "name": "Arkham Asylum",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Gotham's notorious psychiatric prison.",
        "description": "Arkham Asylum cages—or fails to hold—the Joker, Riddler, Two-Face, and Harley Quinn on the edge of Gotham.",
        "aliases": []
    },
    {
        "slug": "superman",
        "name": "Superman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Clark Kent; Metropolis's Man of Steel.",
        "description": "Superman protects Metropolis and co-founds the Justice League, often contrasting Batman's darkness with hope.",
        "aliases": []
    },
    {
        "slug": "wonder-woman",
        "name": "Wonder Woman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Diana of Themyscira; Amazon champion.",
        "description": "Wonder Woman is Diana of Themyscira, a Justice League pillar who bridges Themyscira and the world of Superman and Batman.",
        "aliases": []
    },
    {
        "slug": "justice-league",
        "name": "Justice League",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "DC's premier superhero team.",
        "description": "The Justice League unites Batman, Superman, Wonder Woman, and other heroes against threats beyond any single city.",
        "aliases": []
    },
    {
        "slug": "metropolis",
        "name": "Metropolis",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Superman's gleaming home city.",
        "description": "Metropolis is Superman's city and Lex Luthor's corporate playground, a bright counterpart to Gotham.",
        "aliases": []
    },
    {
        "slug": "themyscira",
        "name": "Themyscira",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Amazon island home of Wonder Woman.",
        "description": "Themyscira is the hidden island that raises Wonder Woman before she joins the Justice League's wider world.",
        "aliases": []
    },
    {
        "slug": "lex-luthor",
        "name": "Lex Luthor",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Metropolis tycoon and Superman's nemesis.",
        "description": "Lex Luthor schemes against Superman from Metropolis boardrooms, sometimes brushing the Justice League and Batman's orbit.",
        "aliases": []
    },
    {
        "slug": "detective-comics",
        "name": "Detective Comics",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Anthology that introduced Batman.",
        "description": "Detective Comics is the DC Comics series that debuted Batman, anchoring Gotham's long publishing history.",
        "aliases": []
    },
    {
        "slug": "gotham-city-police",
        "name": "Gotham City Police Department",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "GCPD under Commissioner Gordon.",
        "description": "The Gotham City Police Department, led by Jim Gordon, is Batman's uneasy official ally against the Joker and organized crime.",
        "aliases": []
    },
    {
        "slug": "wayne-enterprises",
        "name": "Wayne Enterprises",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Bruce Wayne's company funding Batman.",
        "description": "Wayne Enterprises is Bruce Wayne's corporate empire, quietly bankrolling Batman, the Batcave, and Batmobile technology.",
        "aliases": []
    },
    {
        "slug": "dc-figures",
        "name": "DC / Batman figures",
        "type": "topic",
        "short_description": "People and named forces central to DC / Batman.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring DC / Batman."
    },
    {
        "slug": "dc-places",
        "name": "DC / Batman places",
        "type": "place",
        "short_description": "Locations and geographies that frame DC / Batman.",
        "description": "Places, regions, and built sites that give DC / Batman its map — where events and figures concentrate."
    },
    {
        "slug": "dc-events",
        "name": "DC / Batman events",
        "type": "event",
        "short_description": "Turning points and dated episodes in DC / Batman.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the DC / Batman timeline."
    },
    {
        "slug": "dc-objects",
        "name": "DC / Batman objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to DC / Batman.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through DC / Batman."
    },
    {
        "slug": "dc-factions",
        "name": "DC / Batman factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside DC / Batman.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in DC / Batman."
    },
    {
        "slug": "dc-concepts",
        "name": "DC / Batman concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize DC / Batman.",
        "description": "Keywords, doctrines, systems, and abstract forces that make DC / Batman readable as a lore graph."
    },
    {
        "slug": "dc-eras",
        "name": "DC / Batman eras",
        "type": "event",
        "short_description": "Periodization for DC / Batman.",
        "description": "Named eras and phases that help readers track how DC / Batman changes across time."
    },
    {
        "slug": "dc-works",
        "name": "DC / Batman works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry DC / Batman.",
        "description": "Primary works and adaptations through which most audiences encounter DC / Batman."
    },
    {
        "slug": "dc-symbols",
        "name": "DC / Batman symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with DC / Batman.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside DC / Batman."
    }
];

const relationships = [
    [
        "bob-kane",
        "batman",
        "created",
        "Bob Kane is credited with co-creating Batman.",
        0.98,
        0.96
    ],
    [
        "bill-finger",
        "batman",
        "created",
        "Bill Finger shaped Batman's early mythos.",
        0.99,
        0.97
    ],
    [
        "dc-comics",
        "dc",
        "produced",
        "DC Comics publishes the DC Universe.",
        0.99,
        0.98
    ],
    [
        "batman",
        "dc",
        "part_of",
        "Batman is central to DC / Batman.",
        0.99,
        0.99
    ],
    [
        "detective-comics",
        "batman",
        "part_of",
        "Detective Comics introduced Batman.",
        0.98,
        0.95
    ],
    [
        "bruce-wayne",
        "batman",
        "connected_to",
        "Bruce Wayne is Batman.",
        0.99,
        0.99
    ],
    [
        "batman",
        "gotham",
        "located_in",
        "Batman protects Gotham City.",
        0.99,
        0.98
    ],
    [
        "batcave",
        "gotham",
        "located_in",
        "The Batcave lies beneath Gotham.",
        0.98,
        0.96
    ],
    [
        "alfred-pennyworth",
        "batman",
        "supports",
        "Alfred supports Batman and Bruce Wayne.",
        0.99,
        0.97
    ],
    [
        "batman",
        "bat-family",
        "leads",
        "Batman leads the Bat-Family.",
        0.98,
        0.96
    ],
    [
        "nightwing",
        "bat-family",
        "member_of",
        "Nightwing is Bat-Family.",
        0.98,
        0.95
    ],
    [
        "robin",
        "bat-family",
        "member_of",
        "Robin is Bat-Family.",
        0.98,
        0.95
    ],
    [
        "batgirl",
        "bat-family",
        "member_of",
        "Batgirl is Bat-Family.",
        0.98,
        0.95
    ],
    [
        "batmobile",
        "batman",
        "uses",
        "Batman drives the Batmobile.",
        0.99,
        0.97
    ],
    [
        "jim-gordon",
        "gotham-city-police",
        "leads",
        "Jim Gordon leads the GCPD.",
        0.98,
        0.96
    ],
    [
        "jim-gordon",
        "batman",
        "supports",
        "Gordon allies with Batman.",
        0.97,
        0.94
    ],
    [
        "bruce-wayne",
        "wayne-enterprises",
        "leads",
        "Bruce Wayne runs Wayne Enterprises.",
        0.97,
        0.94
    ],
    [
        "joker",
        "batman",
        "opposed_by",
        "The Joker is Batman's archenemy.",
        0.99,
        0.98
    ],
    [
        "harley-quinn",
        "joker",
        "connected_to",
        "Harley Quinn is tied to the Joker.",
        0.97,
        0.94
    ],
    [
        "catwoman",
        "batman",
        "connected_to",
        "Catwoman is Batman's romantic foil.",
        0.96,
        0.92
    ],
    [
        "penguin",
        "batman",
        "opposed_by",
        "The Penguin wars with Batman.",
        0.96,
        0.92
    ],
    [
        "riddler",
        "batman",
        "opposed_by",
        "The Riddler challenges Batman.",
        0.96,
        0.92
    ],
    [
        "two-face",
        "batman",
        "opposed_by",
        "Two-Face opposes Batman.",
        0.96,
        0.92
    ],
    [
        "arkham-asylum",
        "gotham",
        "located_in",
        "Arkham Asylum sits in Gotham.",
        0.98,
        0.95
    ],
    [
        "joker",
        "arkham-asylum",
        "located_in",
        "The Joker is often held in Arkham.",
        0.95,
        0.9
    ],
    [
        "superman",
        "justice-league",
        "member_of",
        "Superman co-founds the Justice League.",
        0.98,
        0.96
    ],
    [
        "batman",
        "justice-league",
        "member_of",
        "Batman is a Justice League founder.",
        0.98,
        0.96
    ],
    [
        "wonder-woman",
        "justice-league",
        "member_of",
        "Wonder Woman is a Justice League pillar.",
        0.98,
        0.96
    ],
    [
        "superman",
        "metropolis",
        "located_in",
        "Superman protects Metropolis.",
        0.99,
        0.97
    ],
    [
        "lex-luthor",
        "superman",
        "opposed_by",
        "Lex Luthor opposes Superman.",
        0.99,
        0.97
    ],
    [
        "lex-luthor",
        "metropolis",
        "located_in",
        "Lex Luthor schemes from Metropolis.",
        0.97,
        0.93
    ],
    [
        "wonder-woman",
        "themyscira",
        "located_in",
        "Wonder Woman hails from Themyscira.",
        0.98,
        0.96
    ],
    [
        "dc",
        "dc-figures",
        "contains",
        "DC / Batman figures is a primary trailhead under DC / Batman.",
        0.88,
        0.82
    ],
    [
        "dc",
        "dc-places",
        "contains",
        "DC / Batman places is a primary trailhead under DC / Batman.",
        0.88,
        0.82
    ],
    [
        "dc",
        "dc-events",
        "contains",
        "DC / Batman events is a primary trailhead under DC / Batman.",
        0.88,
        0.82
    ],
    [
        "dc",
        "dc-objects",
        "contains",
        "DC / Batman objects & artifacts is a primary trailhead under DC / Batman.",
        0.88,
        0.82
    ],
    [
        "dc",
        "dc-factions",
        "contains",
        "DC / Batman factions & groups is a primary trailhead under DC / Batman.",
        0.88,
        0.82
    ],
    [
        "dc",
        "dc-concepts",
        "contains",
        "DC / Batman concepts is a primary trailhead under DC / Batman.",
        0.88,
        0.82
    ],
    [
        "dc",
        "dc-eras",
        "contains",
        "DC / Batman eras is a primary trailhead under DC / Batman.",
        0.88,
        0.82
    ],
    [
        "dc",
        "dc-works",
        "contains",
        "DC / Batman works & media is a primary trailhead under DC / Batman.",
        0.88,
        0.82
    ],
    [
        "dc",
        "dc-symbols",
        "contains",
        "DC / Batman symbols is a primary trailhead under DC / Batman.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
