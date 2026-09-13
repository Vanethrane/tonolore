/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-simpsons",
        "name": "The Simpsons",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Matt Groening's long-running animated sitcom about Springfield.",
        "description": "The Simpsons is the animated comedy franchise created by Matt Groening, following Homer, Marge, Bart, Lisa, and Maggie Simpson in Springfield — with Mr. Burns, the Nuclear Plant, and decades of satire across TV and film.",
        "aliases": []
    },
    {
        "slug": "matt-groening",
        "name": "Matt Groening",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of The Simpsons.",
        "description": "Matt Groening created The Simpsons, designing the Simpson family and Springfield's cast that later became Fox's flagship animated series and a Disney-owned property.",
        "aliases": []
    },
    {
        "slug": "james-l-brooks",
        "name": "James L. Brooks",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Producer and co-developer of The Simpsons.",
        "description": "James L. Brooks helped develop The Simpsons for television with Matt Groening and Sam Simon, shaping its early tone and longevity.",
        "aliases": []
    },
    {
        "slug": "sam-simon",
        "name": "Sam Simon",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Co-developer who shaped early Simpsons writers' room.",
        "description": "Sam Simon co-developed The Simpsons and helped build its classic writing staff and satirical voice in the early seasons.",
        "aliases": []
    },
    {
        "slug": "the-simpsons-tv-series",
        "name": "The Simpsons (TV series)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Prime-time animated series that began on Fox.",
        "description": "The Simpsons TV series premiered on Fox in 1989, chronicling the Simpson family and Springfield across hundreds of episodes of comedy and cultural parody.",
        "aliases": []
    },
    {
        "slug": "the-simpsons-movie",
        "name": "The Simpsons Movie",
        "type": "work",
        "evidence": "fiction",
        "short_description": "2007 theatrical film featuring Springfield's crisis.",
        "description": "The Simpsons Movie expands the TV series to the big screen, sending Homer and Springfield into a disaster comedy centered on environmental chaos.",
        "aliases": []
    },
    {
        "slug": "simpsons-shorts",
        "name": "The Simpsons shorts",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Tracy Ullman Show shorts that launched the family.",
        "description": "The Simpsons began as animated shorts on The Tracey Ullman Show before spinning off into the half-hour Fox series.",
        "aliases": []
    },
    {
        "slug": "springfield",
        "name": "Springfield",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Hometown of the Simpsons; state deliberately vague.",
        "description": "Springfield is the fictional American city where the Simpson family lives, home to the Nuclear Plant, Springfield Elementary, and Moe's Tavern.",
        "aliases": []
    },
    {
        "slug": "742-evergreen-terrace",
        "name": "742 Evergreen Terrace",
        "type": "place",
        "evidence": "fiction",
        "short_description": "The Simpson family's house.",
        "description": "742 Evergreen Terrace is the Simpson family home in Springfield, the center of Homer, Marge, Bart, Lisa, and Maggie's daily life.",
        "aliases": []
    },
    {
        "slug": "springfield-elementary",
        "name": "Springfield Elementary",
        "type": "place",
        "evidence": "fiction",
        "short_description": "School attended by Bart, Lisa, and Milhouse.",
        "description": "Springfield Elementary School is where Bart and Lisa Simpson study under Principal Skinner, with classmates like Milhouse and Nelson.",
        "aliases": []
    },
    {
        "slug": "springfield-nuclear-power-plant",
        "name": "Springfield Nuclear Power Plant",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Mr. Burns's plant where Homer works.",
        "description": "The Springfield Nuclear Power Plant is owned by Mr. Burns and employs Homer Simpson, often as a safety-averse sector worker.",
        "aliases": []
    },
    {
        "slug": "moes-tavern",
        "name": "Moe's Tavern",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Bar run by Moe Szyslak.",
        "description": "Moe's Tavern is the neighborhood bar where Homer drinks with Barney and friends under bartender Moe Szyslak.",
        "aliases": []
    },
    {
        "slug": "kwik-e-mart",
        "name": "Kwik-E-Mart",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Convenience store run by Apu.",
        "description": "The Kwik-E-Mart is Springfield's convenience store famously associated with Apu Nahasapeemapetilon.",
        "aliases": []
    },
    {
        "slug": "simpson-family",
        "name": "Simpson family",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Homer, Marge, and the kids at 742 Evergreen Terrace.",
        "description": "The Simpson family — Homer, Marge, Bart, Lisa, and Maggie — is the core household of The Simpsons, living at 742 Evergreen Terrace in Springfield.",
        "aliases": []
    },
    {
        "slug": "itchy-and-scratchy",
        "name": "Itchy & Scratchy",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Violent cartoon-within-a-cartoon Bart and Lisa watch.",
        "description": "Itchy & Scratchy is the ultra-violent cat-and-mouse cartoon beloved by Bart and Lisa Simpson on The Simpsons.",
        "aliases": []
    },
    {
        "slug": "duff-beer",
        "name": "Duff Beer",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Homer's favorite beer brand.",
        "description": "Duff Beer is the ubiquitous brew Homer Simpson drinks, a running gag and brand parody throughout Springfield.",
        "aliases": []
    },
    {
        "slug": "radioactive-man",
        "name": "Radioactive Man",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Comic-book hero idolized in Springfield.",
        "description": "Radioactive Man is the comic-book superhero beloved by Bart Simpson and Comic Book Guy, with ties to Springfield pop culture.",
        "aliases": []
    },
    {
        "slug": "homer-simpson",
        "name": "Homer Simpson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Safety-challenged Nuclear Plant worker and dad.",
        "description": "Homer Simpson is the doughnut-loving patriarch of the Simpson family, a Springfield Nuclear Power Plant employee married to Marge.",
        "aliases": []
    },
    {
        "slug": "marge-simpson",
        "name": "Marge Simpson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Blue-haired matriarch of the Simpson family.",
        "description": "Marge Simpson is the patient, blue-beehive-haired mother who holds the Simpson family together amid Homer and Bart's chaos.",
        "aliases": []
    },
    {
        "slug": "bart-simpson",
        "name": "Bart Simpson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Prankster son; student at Springfield Elementary.",
        "description": "Bart Simpson is the rebellious oldest Simpson child, a skateboarding prankster at Springfield Elementary and foil to Principal Skinner.",
        "aliases": []
    },
    {
        "slug": "lisa-simpson",
        "name": "Lisa Simpson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Saxophone-playing, idealistic middle child.",
        "description": "Lisa Simpson is the brilliant, activist middle child of the Simpson family, a saxophone prodigy and moral center at Springfield Elementary.",
        "aliases": []
    },
    {
        "slug": "maggie-simpson",
        "name": "Maggie Simpson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Pacifier-wielding baby of the family.",
        "description": "Maggie Simpson is the largely silent baby of the Simpson family, known for her pacifier and surprising moments of competence.",
        "aliases": []
    },
    {
        "slug": "abraham-simpson",
        "name": "Abraham Simpson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Grampa Simpson; Homer's father.",
        "description": "Abraham 'Grampa' Simpson is Homer's elderly father, a Springfield Retirement Castle resident full of tall war stories.",
        "aliases": []
    },
    {
        "slug": "mr-burns",
        "name": "Mr. Burns",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Owner of the Springfield Nuclear Power Plant.",
        "description": "Charles Montgomery Burns owns the Springfield Nuclear Power Plant, employs Homer Simpson, and schemes with aide Waylon Smithers.",
        "aliases": []
    },
    {
        "slug": "waylon-smithers",
        "name": "Waylon Smithers",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Loyal assistant to Mr. Burns.",
        "description": "Waylon Smithers is Mr. Burns's devoted executive assistant at the Springfield Nuclear Power Plant.",
        "aliases": []
    },
    {
        "slug": "moe-szyslak",
        "name": "Moe Szyslak",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Bartender of Moe's Tavern.",
        "description": "Moe Szyslak runs Moe's Tavern, serving Homer Simpson and nursing grudges, scams, and unrequited romantic hopes.",
        "aliases": []
    },
    {
        "slug": "ned-flanders",
        "name": "Ned Flanders",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Cheerfully devout next-door neighbor.",
        "description": "Ned Flanders is the Simpsons' overly wholesome neighbor, a churchgoing foil to Homer's vices.",
        "aliases": []
    },
    {
        "slug": "krusty-the-clown",
        "name": "Krusty the Clown",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Cynical kids' TV star in Springfield.",
        "description": "Krusty the Clown is Springfield's famous children's entertainer, a chain-smoking showbiz cynic idolized by Bart Simpson.",
        "aliases": []
    },
    {
        "slug": "chief-wiggum",
        "name": "Chief Wiggum",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Inept police chief of Springfield.",
        "description": "Clancy Wiggum is Springfield's doughnut-loving police chief, father of Ralph Wiggum and a frequent comic authority figure.",
        "aliases": []
    },
    {
        "slug": "apu-nahasapeemapetilon",
        "name": "Apu Nahasapeemapetilon",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Operator of the Kwik-E-Mart.",
        "description": "Apu Nahasapeemapetilon is the hardworking Kwik-E-Mart clerk and later owner figure in Springfield's convenience-store jokes.",
        "aliases": []
    },
    {
        "slug": "comic-book-guy",
        "name": "Comic Book Guy",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Sarcastic owner of the Android's Dungeon.",
        "description": "Comic Book Guy runs the Android's Dungeon comic shop in Springfield, dispensing snark about Radioactive Man and fandom.",
        "aliases": []
    },
    {
        "slug": "milhouse-van-houten",
        "name": "Milhouse Van Houten",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Bart's best friend at Springfield Elementary.",
        "description": "Milhouse Van Houten is Bart Simpson's bespectacled best friend and frequent accomplice at Springfield Elementary.",
        "aliases": []
    },
    {
        "slug": "nelson-muntz",
        "name": "Nelson Muntz",
        "type": "person",
        "evidence": "fiction",
        "short_description": "School bully known for 'Ha-ha!'",
        "description": "Nelson Muntz is the Springfield Elementary bully whose laugh and tough exterior hide occasional softer storylines.",
        "aliases": []
    },
    {
        "slug": "principal-skinner",
        "name": "Principal Skinner",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Principal of Springfield Elementary.",
        "description": "Principal Seymour Skinner runs Springfield Elementary, forever clashing with Bart Simpson and answering to Superintendent Chalmers.",
        "aliases": []
    },
    {
        "slug": "ralph-wiggum",
        "name": "Ralph Wiggum",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Chief Wiggum's oddly poetic son.",
        "description": "Ralph Wiggum is Chief Wiggum's son, a sweetly bizarre Springfield Elementary student known for non sequiturs.",
        "aliases": []
    },
    {
        "slug": "the-simpsons-figures",
        "name": "The Simpsons figures",
        "type": "topic",
        "short_description": "People and named forces central to The Simpsons.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring The Simpsons."
    },
    {
        "slug": "the-simpsons-places",
        "name": "The Simpsons places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Simpsons.",
        "description": "Places, regions, and built sites that give The Simpsons its map — where events and figures concentrate."
    },
    {
        "slug": "the-simpsons-events",
        "name": "The Simpsons events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Simpsons.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Simpsons timeline."
    },
    {
        "slug": "the-simpsons-objects",
        "name": "The Simpsons objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Simpsons.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Simpsons."
    },
    {
        "slug": "the-simpsons-factions",
        "name": "The Simpsons factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Simpsons.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Simpsons."
    }
];

const relationships = [
    [
        "matt-groening",
        "the-simpsons",
        "created",
        "Matt Groening created The Simpsons.",
        0.99,
        0.99
    ],
    [
        "matt-groening",
        "the-simpsons-tv-series",
        "created",
        "Groening created the Simpsons TV series.",
        0.99,
        0.98
    ],
    [
        "james-l-brooks",
        "the-simpsons-tv-series",
        "produced",
        "James L. Brooks produced and co-developed the series.",
        0.96,
        0.92
    ],
    [
        "sam-simon",
        "the-simpsons-tv-series",
        "influenced",
        "Sam Simon co-developed early Simpsons seasons.",
        0.95,
        0.9
    ],
    [
        "the-simpsons-tv-series",
        "the-simpsons",
        "part_of",
        "The TV series is the core of The Simpsons.",
        0.99,
        0.99
    ],
    [
        "the-simpsons-movie",
        "the-simpsons",
        "part_of",
        "The movie is part of The Simpsons franchise.",
        0.98,
        0.95
    ],
    [
        "simpsons-shorts",
        "the-simpsons-tv-series",
        "adapted_into",
        "The shorts grew into the half-hour series.",
        0.96,
        0.92
    ],
    [
        "742-evergreen-terrace",
        "springfield",
        "located_in",
        "The Simpson house is in Springfield.",
        0.99,
        0.97
    ],
    [
        "springfield-elementary",
        "springfield",
        "located_in",
        "Springfield Elementary is in Springfield.",
        0.98,
        0.95
    ],
    [
        "springfield-nuclear-power-plant",
        "springfield",
        "located_in",
        "The Nuclear Plant is in Springfield.",
        0.98,
        0.95
    ],
    [
        "moes-tavern",
        "springfield",
        "located_in",
        "Moe's Tavern is in Springfield.",
        0.98,
        0.95
    ],
    [
        "kwik-e-mart",
        "springfield",
        "located_in",
        "The Kwik-E-Mart is in Springfield.",
        0.97,
        0.93
    ],
    [
        "homer-simpson",
        "simpson-family",
        "member_of",
        "Homer is the Simpson family patriarch.",
        0.99,
        0.98
    ],
    [
        "marge-simpson",
        "simpson-family",
        "member_of",
        "Marge is the Simpson family matriarch.",
        0.99,
        0.98
    ],
    [
        "bart-simpson",
        "simpson-family",
        "member_of",
        "Bart is a Simpson child.",
        0.99,
        0.98
    ],
    [
        "lisa-simpson",
        "simpson-family",
        "member_of",
        "Lisa is a Simpson child.",
        0.99,
        0.98
    ],
    [
        "maggie-simpson",
        "simpson-family",
        "member_of",
        "Maggie is a Simpson child.",
        0.99,
        0.98
    ],
    [
        "simpson-family",
        "742-evergreen-terrace",
        "located_in",
        "The family lives at 742 Evergreen Terrace.",
        0.98,
        0.96
    ],
    [
        "homer-simpson",
        "springfield-nuclear-power-plant",
        "member_of",
        "Homer works at the Nuclear Plant.",
        0.98,
        0.96
    ],
    [
        "mr-burns",
        "springfield-nuclear-power-plant",
        "leads",
        "Mr. Burns owns the Nuclear Plant.",
        0.99,
        0.97
    ],
    [
        "waylon-smithers",
        "mr-burns",
        "supports",
        "Smithers assists Mr. Burns.",
        0.98,
        0.95
    ],
    [
        "moe-szyslak",
        "moes-tavern",
        "leads",
        "Moe runs Moe's Tavern.",
        0.98,
        0.95
    ],
    [
        "apu-nahasapeemapetilon",
        "kwik-e-mart",
        "leads",
        "Apu is tied to the Kwik-E-Mart.",
        0.97,
        0.94
    ],
    [
        "bart-simpson",
        "springfield-elementary",
        "member_of",
        "Bart attends Springfield Elementary.",
        0.98,
        0.95
    ],
    [
        "principal-skinner",
        "springfield-elementary",
        "leads",
        "Skinner is principal of Springfield Elementary.",
        0.98,
        0.95
    ],
    [
        "ned-flanders",
        "homer-simpson",
        "connected_to",
        "Ned is Homer's next-door neighbor.",
        0.96,
        0.92
    ],
    [
        "krusty-the-clown",
        "bart-simpson",
        "connected_to",
        "Bart idolizes Krusty the Clown.",
        0.95,
        0.9
    ],
    [
        "ralph-wiggum",
        "chief-wiggum",
        "connected_to",
        "Ralph is Chief Wiggum's son.",
        0.97,
        0.93
    ],
    [
        "duff-beer",
        "homer-simpson",
        "uses",
        "Homer drinks Duff Beer.",
        0.96,
        0.92
    ],
    [
        "the-simpsons",
        "the-simpsons-figures",
        "contains",
        "The Simpsons figures is a primary trailhead under The Simpsons.",
        0.88,
        0.82
    ],
    [
        "the-simpsons",
        "the-simpsons-places",
        "contains",
        "The Simpsons places is a primary trailhead under The Simpsons.",
        0.88,
        0.82
    ],
    [
        "the-simpsons",
        "the-simpsons-events",
        "contains",
        "The Simpsons events is a primary trailhead under The Simpsons.",
        0.88,
        0.82
    ],
    [
        "the-simpsons",
        "the-simpsons-objects",
        "contains",
        "The Simpsons objects & artifacts is a primary trailhead under The Simpsons.",
        0.88,
        0.82
    ],
    [
        "the-simpsons",
        "the-simpsons-factions",
        "contains",
        "The Simpsons factions & groups is a primary trailhead under The Simpsons.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
