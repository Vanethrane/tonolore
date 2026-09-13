/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "call-of-cthulhu",
        "name": "Call of Cthulhu",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Chaosium's investigative horror RPG of sanity, Mythos, and the 1920s.",
        "description": "Call of Cthulhu is Chaosium's tabletop RPG where investigators uncover Lovecraftian horrors, lose Sanity confronting the Mythos, and face cosmic entities while the Keeper narrates doom-laden mysteries.",
        "aliases": []
    },
    {
        "slug": "chaosium",
        "name": "Chaosium",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher of Call of Cthulhu and Basic Role-Playing.",
        "description": "Chaosium publishes Call of Cthulhu, Basic Role-Playing, and licensed Mythos supplements, stewarding decades of investigative horror RPG design.",
        "aliases": []
    },
    {
        "slug": "sandy-petersen",
        "name": "Sandy Petersen",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Designer who created Call of Cthulhu.",
        "description": "Sandy Petersen designed Call of Cthulhu, translating H. P. Lovecraft's cosmic horror into percentile skills, Sanity rules, and Mythos tomes.",
        "aliases": []
    },
    {
        "slug": "h-p-lovecraft",
        "name": "H. P. Lovecraft",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Author whose Mythos inspires the RPG.",
        "description": "H. P. Lovecraft wrote the Cthulhu Mythos tales—Arkham, Miskatonic, and cosmic entities—that Call of Cthulhu adapts into playable horror.",
        "aliases": []
    },
    {
        "slug": "call-of-cthulhu-seventh-edition",
        "name": "Call of Cthulhu 7th Edition",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Current core rules for investigators and Keepers.",
        "description": "Call of Cthulhu 7th Edition refines percentile tests, chase rules, and Sanity mechanics for modern and classic-era investigations.",
        "aliases": []
    },
    {
        "slug": "basic-roleplaying",
        "name": "Basic Role-Playing",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Percentile system underlying Call of Cthulhu.",
        "description": "Basic Role-Playing (BRP) is Chaosium's d100 skill system powering Call of Cthulhu, emphasizing opposed rolls and gradual character improvement.",
        "aliases": []
    },
    {
        "slug": "investigator",
        "name": "Investigator",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Player character role in Call of Cthulhu.",
        "description": "Investigators are ordinary scholars, detectives, and dilettantes who stumble into Mythos cases, risking Sanity and lives for terrible truths.",
        "aliases": []
    },
    {
        "slug": "keeper",
        "name": "Keeper",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Referee who runs Mythos scenarios.",
        "description": "The Keeper narrates Call of Cthulhu, hiding Mythos truths, adjudicating Sanity loss, and orchestrating the slow revelation of cosmic horror.",
        "aliases": []
    },
    {
        "slug": "sanity",
        "name": "Sanity",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Mental stability eroded by Mythos encounters.",
        "description": "Sanity (SAN) measures an investigator's grip on reality; Mythos shocks, spells, and revelations can inflict temporary or indefinite insanity.",
        "aliases": []
    },
    {
        "slug": "mythos-tomes",
        "name": "Mythos Tomes",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Forbidden books that teach spells and lore.",
        "description": "Mythos Tomes such as the Necronomicon grant dreadful knowledge, Cthulhu Mythos skill, and spells at the cost of Sanity and attention from cultists.",
        "aliases": []
    },
    {
        "slug": "lovecraft-mythos",
        "name": "Cthulhu Mythos",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Shared cosmic horror cosmology of Lovecraft and successors.",
        "description": "The Cthulhu Mythos is the shared universe of Great Old Ones, cults, and sanity-shattering truths that Lovecraft pioneered and Chaosium games explore.",
        "aliases": []
    },
    {
        "slug": "great-old-ones",
        "name": "Great Old Ones",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Cosmic entities sleeping or imprisoned on Earth.",
        "description": "Great Old Ones are alien gods—Cthulhu, Yog-Sothoth, and others—whose dreams and cults warp history while they wait to rise.",
        "aliases": []
    },
    {
        "slug": "outer-gods",
        "name": "Outer Gods",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Ultimate cosmic powers beyond Earth's pantheon.",
        "description": "Outer Gods such as Azathoth and Nyarlathotep embody mindless chaos and cruel purpose, dwarfing even the Great Old Ones in Mythos cosmology.",
        "aliases": []
    },
    {
        "slug": "cthulhu",
        "name": "Cthulhu",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Sleeping god-dreamer of R'lyeh.",
        "description": "Cthulhu is the octopoid Great Old One entombed in sunken R'lyeh, whose dreams reach sensitive minds and whose cult chants: \"Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn.\"",
        "aliases": []
    },
    {
        "slug": "nyarlathotep",
        "name": "Nyarlathotep",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Crawling Chaos and messenger of the Outer Gods.",
        "description": "Nyarlathotep walks among humanity in countless masks, spreading madness and serving the Outer Gods with cruel, personal malice.",
        "aliases": []
    },
    {
        "slug": "azathoth",
        "name": "Azathoth",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Blind idiot god at the center of chaos.",
        "description": "Azathoth is the nuclear chaos at the Mythos center, mindless piping surrounded by fluting servitors—a cosmological doom if roused.",
        "aliases": []
    },
    {
        "slug": "yog-sothoth",
        "name": "Yog-Sothoth",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Gate and key to all time and space.",
        "description": "Yog-Sothoth exists coterminous with all times and places, a bubbling presence whose cults seek breaches between dimensions.",
        "aliases": []
    },
    {
        "slug": "shub-niggurath",
        "name": "Shub-Niggurath",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Black Goat of the Woods with a Thousand Young.",
        "description": "Shub-Niggurath is a fecund Outer God of dark woods and spawning horror, mother of countless monstrous offspring.",
        "aliases": []
    },
    {
        "slug": "arkham",
        "name": "Arkham",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Fictional New England town of Mythos tales.",
        "description": "Arkham is Lovecraft's cursed Massachusetts town of witch-cursed hills, Miskatonic University, and gateways to buried horrors.",
        "aliases": []
    },
    {
        "slug": "innsmouth",
        "name": "Innsmouth",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Decaying port of the Deep One pact.",
        "description": "Innsmouth is a rotting Massachusetts fishing town whose people bear the Mark of Dagon after a pact with Deep Ones beneath the sea.",
        "aliases": []
    },
    {
        "slug": "dunwich",
        "name": "Dunwich",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Isolated village of whippoorwill horror.",
        "description": "Dunwich is a backwoods hamlet where Yog-Sothoth's spawn and family curses birth catastrophes on the slopes of Sentinel Hill.",
        "aliases": []
    },
    {
        "slug": "miskatonic-university",
        "name": "Miskatonic University",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Arkham institution of occult scholarship.",
        "description": "Miskatonic University houses restricted tomes, Antarctic expedition records, and professors who meddle in Mythos lore investigators later uncover.",
        "aliases": []
    },
    {
        "slug": "rlyeh",
        "name": "R'lyeh",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Sunken corpse-city of Cthulhu.",
        "description": "R'lyeh is the non-Euclidean sunken city where Cthulhu lies dreaming, its geometry warping sailors who stumble upon rising ruins.",
        "aliases": []
    },
    {
        "slug": "antarctica",
        "name": "At the Mountains of Madness",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Polar wasteland of ancient alien cities.",
        "description": "Lovecraft's Antarctic plateau hides pre-human cities and shoggoth-haunted ruins explored in At the Mountains of Madness—fertile ground for RPG expeditions.",
        "aliases": []
    },
    {
        "slug": "deep-ones",
        "name": "Deep Ones",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Amphibious servitors of Father Dagon.",
        "description": "Deep Ones are fish-frog humanoids from undersea cities who trade gold for breeding pacts, corrupting coastal towns like Innsmouth.",
        "aliases": []
    },
    {
        "slug": "mi-go",
        "name": "Mi-go",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Fungoid aliens who harvest brains.",
        "description": "Mi-go are crab-like fungoid beings from Yuggoth who mine Earth for resources and ferry living brains across interstellar voids.",
        "aliases": []
    },
    {
        "slug": "shoggoths",
        "name": "Shoggoths",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Protoplasmic slaves of the Elder Things.",
        "description": "Shoggoths are amorphous, eye-studded masses bred as labor, now rebellious horrors lurking in Antarctic and deep places.",
        "aliases": []
    },
    {
        "slug": "cult-of-cthulhu",
        "name": "Cult of Cthulhu",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Worshipers awaiting the Great Old One's rise.",
        "description": "The Cult of Cthulhu chants at hidden rites, dreams of R'lyeh's surfacing, and opposes investigators who threaten their prophet's awakening.",
        "aliases": []
    },
    {
        "slug": "necronomicon",
        "name": "Necronomicon",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Forbidden grimoire of Abdul Alhazred.",
        "description": "The Necronomicon, penned by the Mad Arab Abdul Alhazred, is the archetypal Mythos tome whose pages teach spells and erode Sanity.",
        "aliases": []
    },
    {
        "slug": "elder-sign",
        "name": "Elder Sign",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Warding sigil against Mythos powers.",
        "description": "The Elder Sign is a protective symbol—carved, drawn, or worn—that can repel Mythos entities and mark those who know desperate warding lore.",
        "aliases": []
    },
    {
        "slug": "the-call-of-cthulhu-story",
        "name": "The Call of Cthulhu (story)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Lovecraft's foundational Mythos tale.",
        "description": "The Call of Cthulhu is Lovecraft's 1928 story framing the Mythos through found documents, a cult in the bayous, and sailors who glimpse risen R'lyeh.",
        "aliases": []
    },
    {
        "slug": "shadow-over-innsmouth",
        "name": "The Shadow over Innsmouth",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Novella of Deep One corruption.",
        "description": "The Shadow over Innsmouth reveals a town's fish-frog heritage and Dagon cult, a cornerstone scenario seed for RPG investigations.",
        "aliases": []
    },
    {
        "slug": "mountains-of-madness",
        "name": "At the Mountains of Madness",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Antarctic expedition novella of Elder Things.",
        "description": "At the Mountains of Madness chronicles Miskatonic's doomed polar expedition and the alien history beneath the ice.",
        "aliases": []
    },
    {
        "slug": "call-of-cthulhu-figures",
        "name": "Call of Cthulhu figures",
        "type": "topic",
        "short_description": "People and named forces central to Call of Cthulhu.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Call of Cthulhu."
    },
    {
        "slug": "call-of-cthulhu-places",
        "name": "Call of Cthulhu places",
        "type": "place",
        "short_description": "Locations and geographies that frame Call of Cthulhu.",
        "description": "Places, regions, and built sites that give Call of Cthulhu its map — where events and figures concentrate."
    },
    {
        "slug": "call-of-cthulhu-events",
        "name": "Call of Cthulhu events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Call of Cthulhu.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Call of Cthulhu timeline."
    },
    {
        "slug": "call-of-cthulhu-objects",
        "name": "Call of Cthulhu objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Call of Cthulhu.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Call of Cthulhu."
    },
    {
        "slug": "call-of-cthulhu-factions",
        "name": "Call of Cthulhu factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Call of Cthulhu.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Call of Cthulhu."
    },
    {
        "slug": "call-of-cthulhu-concepts",
        "name": "Call of Cthulhu concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Call of Cthulhu.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Call of Cthulhu readable as a lore graph."
    },
    {
        "slug": "call-of-cthulhu-eras",
        "name": "Call of Cthulhu eras",
        "type": "event",
        "short_description": "Periodization for Call of Cthulhu.",
        "description": "Named eras and phases that help readers track how Call of Cthulhu changes across time."
    }
];

const relationships = [
    [
        "sandy-petersen",
        "call-of-cthulhu",
        "created",
        "Petersen designed Call of Cthulhu.",
        0.99,
        0.99
    ],
    [
        "chaosium",
        "call-of-cthulhu",
        "publishes",
        "Chaosium publishes Call of Cthulhu.",
        0.99,
        0.99
    ],
    [
        "h-p-lovecraft",
        "lovecraft-mythos",
        "created",
        "Lovecraft originated the Cthulhu Mythos.",
        0.99,
        0.99
    ],
    [
        "call-of-cthulhu",
        "lovecraft-mythos",
        "adapted_from",
        "The RPG adapts Lovecraft's Mythos.",
        0.98,
        0.97
    ],
    [
        "call-of-cthulhu-seventh-edition",
        "call-of-cthulhu",
        "part_of",
        "7th Edition is the current core rules.",
        0.98,
        0.97
    ],
    [
        "basic-roleplaying",
        "call-of-cthulhu",
        "part_of",
        "CoC uses Basic Role-Playing mechanics.",
        0.97,
        0.95
    ],
    [
        "investigator",
        "call-of-cthulhu",
        "part_of",
        "Players take the role of investigators.",
        0.99,
        0.98
    ],
    [
        "keeper",
        "call-of-cthulhu",
        "part_of",
        "The Keeper runs Call of Cthulhu games.",
        0.98,
        0.97
    ],
    [
        "sanity",
        "call-of-cthulhu",
        "part_of",
        "Sanity rules define CoC horror.",
        0.98,
        0.97
    ],
    [
        "mythos-tomes",
        "call-of-cthulhu",
        "part_of",
        "Forbidden books are core CoC props.",
        0.96,
        0.94
    ],
    [
        "great-old-ones",
        "lovecraft-mythos",
        "part_of",
        "Great Old Ones anchor Mythos cosmology.",
        0.98,
        0.96
    ],
    [
        "outer-gods",
        "lovecraft-mythos",
        "part_of",
        "Outer Gods tower over earthly cults.",
        0.97,
        0.95
    ],
    [
        "cthulhu",
        "great-old-ones",
        "member_of",
        "Cthulhu is a Great Old One.",
        0.99,
        0.98
    ],
    [
        "yog-sothoth",
        "outer-gods",
        "member_of",
        "Yog-Sothoth is an Outer God.",
        0.97,
        0.95
    ],
    [
        "azathoth",
        "outer-gods",
        "member_of",
        "Azathoth is an Outer God.",
        0.97,
        0.95
    ],
    [
        "shub-niggurath",
        "outer-gods",
        "member_of",
        "Shub-Niggurath is an Outer God.",
        0.97,
        0.95
    ],
    [
        "nyarlathotep",
        "outer-gods",
        "member_of",
        "Nyarlathotep serves the Outer Gods.",
        0.96,
        0.94
    ],
    [
        "cthulhu",
        "rlyeh",
        "located_in",
        "Cthulhu lies entombed in R'lyeh.",
        0.98,
        0.96
    ],
    [
        "rlyeh",
        "lovecraft-mythos",
        "located_in",
        "R'lyeh is a Mythos location in the Pacific.",
        0.96,
        0.93
    ],
    [
        "arkham",
        "lovecraft-mythos",
        "located_in",
        "Arkham is a classic Mythos town.",
        0.97,
        0.95
    ],
    [
        "innsmouth",
        "lovecraft-mythos",
        "located_in",
        "Innsmouth belongs to Lovecraft's New England.",
        0.97,
        0.95
    ],
    [
        "dunwich",
        "lovecraft-mythos",
        "located_in",
        "Dunwich is a Mythos backwoods site.",
        0.96,
        0.93
    ],
    [
        "miskatonic-university",
        "arkham",
        "located_in",
        "Miskatonic University stands in Arkham.",
        0.98,
        0.96
    ],
    [
        "antarctica",
        "lovecraft-mythos",
        "located_in",
        "Antarctic horrors extend the Mythos.",
        0.95,
        0.92
    ],
    [
        "deep-ones",
        "innsmouth",
        "connected_to",
        "Deep Ones corrupt Innsmouth through breeding pacts.",
        0.97,
        0.95
    ],
    [
        "cult-of-cthulhu",
        "cthulhu",
        "connected_to",
        "The cult worships dreaming Cthulhu.",
        0.98,
        0.96
    ],
    [
        "cult-of-cthulhu",
        "investigator",
        "opposed_by",
        "Investigators thwart Mythos cults.",
        0.96,
        0.93
    ],
    [
        "necronomicon",
        "mythos-tomes",
        "part_of",
        "The Necronomicon is the archetypal Mythos tome.",
        0.98,
        0.97
    ],
    [
        "necronomicon",
        "miskatonic-university",
        "records",
        "Miskatonic holds restricted copies.",
        0.94,
        0.9
    ],
    [
        "elder-sign",
        "lovecraft-mythos",
        "related_to",
        "The Elder Sign wards against Mythos powers.",
        0.93,
        0.88
    ],
    [
        "the-call-of-cthulhu-story",
        "h-p-lovecraft",
        "created",
        "Lovecraft wrote The Call of Cthulhu.",
        0.99,
        0.98
    ],
    [
        "shadow-over-innsmouth",
        "h-p-lovecraft",
        "created",
        "Lovecraft wrote Shadow over Innsmouth.",
        0.99,
        0.98
    ],
    [
        "mountains-of-madness",
        "h-p-lovecraft",
        "created",
        "Lovecraft wrote At the Mountains of Madness.",
        0.99,
        0.98
    ],
    [
        "the-call-of-cthulhu-story",
        "cthulhu",
        "records",
        "The story introduces Cthulhu and R'lyeh.",
        0.98,
        0.96
    ],
    [
        "shadow-over-innsmouth",
        "innsmouth",
        "occurred_at",
        "The novella is set in Innsmouth.",
        0.98,
        0.96
    ],
    [
        "shadow-over-innsmouth",
        "deep-ones",
        "records",
        "The tale reveals Deep One corruption.",
        0.97,
        0.95
    ],
    [
        "mountains-of-madness",
        "antarctica",
        "occurred_at",
        "The expedition probes Antarctic ruins.",
        0.98,
        0.96
    ],
    [
        "mountains-of-madness",
        "shoggoths",
        "records",
        "The novella describes shoggoth horrors.",
        0.97,
        0.95
    ],
    [
        "mi-go",
        "lovecraft-mythos",
        "related_to",
        "Mi-go appear across Mythos tales and RPG scenarios.",
        0.94,
        0.9
    ],
    [
        "sanity",
        "great-old-ones",
        "related_to",
        "Seeing Mythos beings costs Sanity.",
        0.96,
        0.93
    ],
    [
        "investigator",
        "miskatonic-university",
        "connected_to",
        "Many investigators are Miskatonic affiliates.",
        0.92,
        0.87
    ],
    [
        "keeper",
        "lovecraft-mythos",
        "uses",
        "Keepers deploy Mythos lore in scenarios.",
        0.95,
        0.91
    ],
    [
        "nyarlathotep",
        "investigator",
        "opposed_by",
        "Nyarlathotep's schemes target humanity.",
        0.94,
        0.9
    ],
    [
        "call-of-cthulhu",
        "call-of-cthulhu-figures",
        "contains",
        "Call of Cthulhu figures is a primary trailhead under Call of Cthulhu.",
        0.88,
        0.82
    ],
    [
        "call-of-cthulhu",
        "call-of-cthulhu-places",
        "contains",
        "Call of Cthulhu places is a primary trailhead under Call of Cthulhu.",
        0.88,
        0.82
    ],
    [
        "call-of-cthulhu",
        "call-of-cthulhu-events",
        "contains",
        "Call of Cthulhu events is a primary trailhead under Call of Cthulhu.",
        0.88,
        0.82
    ],
    [
        "call-of-cthulhu",
        "call-of-cthulhu-objects",
        "contains",
        "Call of Cthulhu objects & artifacts is a primary trailhead under Call of Cthulhu.",
        0.88,
        0.82
    ],
    [
        "call-of-cthulhu",
        "call-of-cthulhu-factions",
        "contains",
        "Call of Cthulhu factions & groups is a primary trailhead under Call of Cthulhu.",
        0.88,
        0.82
    ],
    [
        "call-of-cthulhu",
        "call-of-cthulhu-concepts",
        "contains",
        "Call of Cthulhu concepts is a primary trailhead under Call of Cthulhu.",
        0.88,
        0.82
    ],
    [
        "call-of-cthulhu",
        "call-of-cthulhu-eras",
        "contains",
        "Call of Cthulhu eras is a primary trailhead under Call of Cthulhu.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
