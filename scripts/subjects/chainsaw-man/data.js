/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "chainsaw-man",
        "name": "Chainsaw Man",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Tatsuki Fujimoto's brutal devil-hunting manga and anime.",
        "description": "Chainsaw Man is Tatsuki Fujimoto's manga and anime franchise about Denji, a debt-ridden teen who merges with the Chainsaw Devil Pochita and joins Public Safety devil hunters in a world where fears manifest as devils.",
        "aliases": []
    },
    {
        "slug": "tatsuki-fujimoto",
        "name": "Tatsuki Fujimoto",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of Chainsaw Man.",
        "description": "Tatsuki Fujimoto created Chainsaw Man for Weekly Shonen Jump, writing Denji's contract with Pochita, Makima's control devil schemes, and Part 2's Asa Mitaka arc.",
        "aliases": []
    },
    {
        "slug": "shueisha",
        "name": "Shueisha",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher of Chainsaw Man manga.",
        "description": "Shueisha publishes Chainsaw Man through Weekly Shonen Jump and Jump Comics, distributing Fujimoto's original manga in Japan and licensing it worldwide.",
        "aliases": []
    },
    {
        "slug": "mappa",
        "name": "MAPPA",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Studio behind the Chainsaw Man anime.",
        "description": "MAPPA animates the Chainsaw Man television series, adapting Fujimoto's Public Safety arc with stylized action and the franchise's signature gore and dark humor.",
        "aliases": []
    },
    {
        "slug": "chainsaw-man-manga",
        "name": "Chainsaw Man (manga)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Original Fujimoto manga in Weekly Shonen Jump.",
        "description": "The Chainsaw Man manga follows Denji from his life with Pochita through Public Safety missions, Makima's manipulation, and Part 2's Devil Hunter Academy with Asa Mitaka and Yoru.",
        "aliases": []
    },
    {
        "slug": "chainsaw-man-anime",
        "name": "Chainsaw Man (anime)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "MAPPA television adaptation of Part 1.",
        "description": "The Chainsaw Man anime by MAPPA adapts the Public Safety arc, covering Denji's recruitment, Power and Aki's squad, and confrontations with devils like the Eternity Devil and Gun Devil.",
        "aliases": []
    },
    {
        "slug": "public-safety-arc",
        "name": "Public Safety Arc",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Part 1 storyline of devil hunters in Tokyo.",
        "description": "The Public Safety Arc is Chainsaw Man Part 1, following Denji, Power, and Aki Hayakawa under Makima and Kishibe as they hunt devils and uncover the Gun Devil conspiracy.",
        "aliases": []
    },
    {
        "slug": "chainsaw-man-part-2",
        "name": "Chainsaw Man Part 2",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Academy arc starring Asa Mitaka and Yoru.",
        "description": "Chainsaw Man Part 2 shifts to high school devil hunter Asa Mitaka, who contracts with the War Devil Yoru while navigating Fujimoto's reimagined Public Safety world.",
        "aliases": []
    },
    {
        "slug": "public-safety-devil-hunters",
        "name": "Public Safety Devil Hunters",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Japanese government devil-hunting division.",
        "description": "Public Safety Devil Hunters are Japan's state-backed devil hunters, deploying squads like Denji's under Makima and veteran Kishibe to suppress devil threats in Tokyo.",
        "aliases": []
    },
    {
        "slug": "devil-hunters",
        "name": "Devil Hunters",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Broader profession of humans who hunt devils.",
        "description": "Devil hunters are humans who fight devils through contracts, weapons, or fiend hosts, ranging from Public Safety agents to independent operators like Quanxi's squad.",
        "aliases": []
    },
    {
        "slug": "fiends",
        "name": "Fiends",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Devils possessing human corpses.",
        "description": "Fiends are devils that inhabit dead human bodies, retaining devil powers while often displaying erratic personalities, as seen with Power and other Public Safety assets.",
        "aliases": []
    },
    {
        "slug": "tokyo-devil-hunting",
        "name": "Tokyo (devil hunting)",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Urban setting of Public Safety operations.",
        "description": "Tokyo is the primary setting of Chainsaw Man Part 1, where Public Safety squads respond to devil outbreaks in hotels, schools, and city streets.",
        "aliases": []
    },
    {
        "slug": "hell",
        "name": "Hell",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Realm where devils originate and return.",
        "description": "Hell is the dimension devils emerge from and revert to upon death, central to Fujimoto's cosmology and the Eternity Devil's trapped hotel nightmare.",
        "aliases": []
    },
    {
        "slug": "devil-hunter-academy",
        "name": "Devil Hunter Academy",
        "type": "place",
        "evidence": "fiction",
        "short_description": "School setting of Chainsaw Man Part 2.",
        "description": "The Devil Hunter Academy is the high school in Part 2 where Asa Mitaka trains as a devil hunter while Yoru the War Devil inhabits her body.",
        "aliases": []
    },
    {
        "slug": "devil-contracts",
        "name": "Devil Contracts",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Pacts trading something for devil power.",
        "description": "Devil contracts let humans bargain with devils for abilities at a price — Denji's heart with Pochita, Aki's lifespan with the Curse Devil, and countless hunter tactics.",
        "aliases": []
    },
    {
        "slug": "chainsaw-devil",
        "name": "Chainsaw Devil",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Devil of chainsaws feared even by other devils.",
        "description": "The Chainsaw Devil is the entity Pochita embodies, capable of erasing devils from existence and central to Denji's transformation and the Gun Devil war.",
        "aliases": []
    },
    {
        "slug": "control-devil",
        "name": "Control Devil",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Devil embodying domination and obedience.",
        "description": "The Control Devil is Makima's true nature, allowing her to command anyone she deems inferior and driving Public Safety's hidden agenda in Part 1.",
        "aliases": []
    },
    {
        "slug": "gun-devil",
        "name": "Gun Devil",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Devil of firearms that devastated nations.",
        "description": "The Gun Devil is a cataclysmic devil whose body parts are hunted worldwide; its power and fragments shape global politics and Public Safety's deepest mission.",
        "aliases": []
    },
    {
        "slug": "denji",
        "name": "Denji",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Chainsaw-headed devil hunter and Pochita's host.",
        "description": "Denji is a poor teen who merges with Pochita to become Chainsaw Man, joining Public Safety for food and normal life while surviving Makima's schemes and devil battles.",
        "aliases": []
    },
    {
        "slug": "pochita",
        "name": "Pochita",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Chainsaw Devil companion who becomes Denji's heart.",
        "description": "Pochita is the Chainsaw Devil who bonds with Denji, sacrificing himself to revive the boy as Chainsaw Man and later reappearing in altered forms across the story.",
        "aliases": []
    },
    {
        "slug": "power",
        "name": "Power",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Blood Fiend and Denji's chaotic squadmate.",
        "description": "Power is the Blood Fiend devil hunter who partners with Denji and Aki, boasting arrogance and loyalty in equal measure through Public Safety missions.",
        "aliases": []
    },
    {
        "slug": "aki-hayakawa",
        "name": "Aki Hayakawa",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Sword-wielding devil hunter leading Denji's squad.",
        "description": "Aki Hayakawa is a Public Safety devil hunter who contracts with multiple devils, mentors Denji and Power, and seeks revenge against the Gun Devil for his family's death.",
        "aliases": []
    },
    {
        "slug": "makima",
        "name": "Makima",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Enigmatic Public Safety superior and Control Devil.",
        "description": "Makima leads Public Safety's Tokyo division as the Control Devil, manipulating Denji, Aki, and global powers while pursuing the Chainsaw Devil for her own ends.",
        "aliases": []
    },
    {
        "slug": "kishibe",
        "name": "Kishibe",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Veteran devil hunter who trains Denji's squad.",
        "description": "Kishibe is Public Safety's grizzled master devil hunter who survived countless contracts, training Denji, Power, and Aki while distrusting Makima's authority.",
        "aliases": []
    },
    {
        "slug": "reze",
        "name": "Reze",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Bomb Devil operative who infiltrates Denji's life.",
        "description": "Reze is the Bomb Devil who poses as a café worker to get close to Denji, sparking one of Part 1's most tragic arcs on the beach and in the city.",
        "aliases": []
    },
    {
        "slug": "quanxi",
        "name": "Quanxi",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Legendary hybrid devil hunter from China.",
        "description": "Quanxi is a renowned devil hunter leading a squad of fiends, contracted by global powers and clashing with Public Safety over devil parts and the Gun Devil.",
        "aliases": []
    },
    {
        "slug": "asa-mitaka",
        "name": "Asa Mitaka",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Part 2 protagonist hosting the War Devil Yoru.",
        "description": "Asa Mitaka is the awkward high school student in Part 2 who becomes host to Yoru the War Devil, transforming into Chainsaw Man's new central hunter.",
        "aliases": []
    },
    {
        "slug": "yoru",
        "name": "Yoru",
        "type": "person",
        "evidence": "fiction",
        "short_description": "War Devil possessing Asa Mitaka in Part 2.",
        "description": "Yoru is the War Devil who inhabits Asa Mitaka, granting weapon-creation powers and driving Part 2's conflicts at the Devil Hunter Academy.",
        "aliases": []
    },
    {
        "slug": "angel-devil",
        "name": "Angel Devil",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Public Safety fiend who drains lifespan with touch.",
        "description": "Angel Devil is a fiend on Aki's squad whose touch steals human lifespan, forming a quiet bond with Aki amid Public Safety's brutal assignments.",
        "aliases": []
    },
    {
        "slug": "beam",
        "name": "Beam",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Shark Fiend obsessed with Chainsaw Man.",
        "description": "Beam is the Shark Fiend who idolizes Chainsaw Man, joining battles with aquatic ferocity and comic devotion to Denji's chainsaw form.",
        "aliases": []
    },
    {
        "slug": "kobeni-higashiyama",
        "name": "Kobeni Higashiyama",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Anxious Public Safety devil hunter.",
        "description": "Kobeni Higashiyama is a perpetually terrified Public Safety hunter whose knife skills and survival instincts emerge in the squad's deadliest encounters.",
        "aliases": []
    },
    {
        "slug": "chainsaw-man-figures",
        "name": "Chainsaw Man figures",
        "type": "topic",
        "short_description": "People and named forces central to Chainsaw Man.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Chainsaw Man."
    },
    {
        "slug": "chainsaw-man-places",
        "name": "Chainsaw Man places",
        "type": "place",
        "short_description": "Locations and geographies that frame Chainsaw Man.",
        "description": "Places, regions, and built sites that give Chainsaw Man its map — where events and figures concentrate."
    },
    {
        "slug": "chainsaw-man-events",
        "name": "Chainsaw Man events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Chainsaw Man.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Chainsaw Man timeline."
    },
    {
        "slug": "chainsaw-man-objects",
        "name": "Chainsaw Man objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Chainsaw Man.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Chainsaw Man."
    },
    {
        "slug": "chainsaw-man-factions",
        "name": "Chainsaw Man factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Chainsaw Man.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Chainsaw Man."
    },
    {
        "slug": "chainsaw-man-concepts",
        "name": "Chainsaw Man concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Chainsaw Man.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Chainsaw Man readable as a lore graph."
    },
    {
        "slug": "chainsaw-man-eras",
        "name": "Chainsaw Man eras",
        "type": "event",
        "short_description": "Periodization for Chainsaw Man.",
        "description": "Named eras and phases that help readers track how Chainsaw Man changes across time."
    },
    {
        "slug": "chainsaw-man-works",
        "name": "Chainsaw Man works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Chainsaw Man.",
        "description": "Primary works and adaptations through which most audiences encounter Chainsaw Man."
    },
    {
        "slug": "chainsaw-man-symbols",
        "name": "Chainsaw Man symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Chainsaw Man.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Chainsaw Man."
    }
];

const relationships = [
    [
        "tatsuki-fujimoto",
        "chainsaw-man",
        "created",
        "Fujimoto created Chainsaw Man.",
        0.99,
        0.99
    ],
    [
        "tatsuki-fujimoto",
        "chainsaw-man-manga",
        "created",
        "Fujimoto writes the Chainsaw Man manga.",
        0.99,
        0.98
    ],
    [
        "shueisha",
        "chainsaw-man-manga",
        "publishes",
        "Shueisha publishes Chainsaw Man in Jump.",
        0.98,
        0.96
    ],
    [
        "shueisha",
        "chainsaw-man",
        "publishes",
        "Shueisha publishes the Chainsaw Man franchise.",
        0.97,
        0.94
    ],
    [
        "mappa",
        "chainsaw-man-anime",
        "produced",
        "MAPPA produced the Chainsaw Man anime.",
        0.98,
        0.96
    ],
    [
        "chainsaw-man-manga",
        "chainsaw-man",
        "part_of",
        "The manga is the core Chainsaw Man work.",
        0.99,
        0.99
    ],
    [
        "chainsaw-man-anime",
        "chainsaw-man",
        "part_of",
        "The anime adapts Chainsaw Man.",
        0.98,
        0.97
    ],
    [
        "chainsaw-man-manga",
        "chainsaw-man-anime",
        "adapted_into",
        "The manga was adapted into the MAPPA anime.",
        0.98,
        0.96
    ],
    [
        "public-safety-arc",
        "chainsaw-man-manga",
        "part_of",
        "The Public Safety Arc is Part 1 of the manga.",
        0.98,
        0.96
    ],
    [
        "chainsaw-man-part-2",
        "chainsaw-man-manga",
        "followed",
        "Part 2 continues the manga after Part 1.",
        0.97,
        0.94
    ],
    [
        "public-safety-arc",
        "chainsaw-man-part-2",
        "preceded",
        "Part 1 precedes the Academy arc.",
        0.96,
        0.93
    ],
    [
        "denji",
        "public-safety-devil-hunters",
        "member_of",
        "Denji joins Public Safety as Chainsaw Man.",
        0.99,
        0.98
    ],
    [
        "power",
        "public-safety-devil-hunters",
        "member_of",
        "Power serves on a Public Safety squad.",
        0.98,
        0.96
    ],
    [
        "aki-hayakawa",
        "public-safety-devil-hunters",
        "member_of",
        "Aki is a Public Safety devil hunter.",
        0.99,
        0.98
    ],
    [
        "makima",
        "public-safety-devil-hunters",
        "leads",
        "Makima commands Public Safety's Tokyo division.",
        0.99,
        0.98
    ],
    [
        "kishibe",
        "public-safety-devil-hunters",
        "member_of",
        "Kishibe is Public Safety's veteran hunter.",
        0.98,
        0.96
    ],
    [
        "public-safety-devil-hunters",
        "devil-hunters",
        "part_of",
        "Public Safety is a state devil-hunting arm.",
        0.97,
        0.94
    ],
    [
        "public-safety-devil-hunters",
        "tokyo-devil-hunting",
        "located_in",
        "Public Safety operates primarily in Tokyo.",
        0.97,
        0.95
    ],
    [
        "denji",
        "pochita",
        "connected_to",
        "Denji's heart is Pochita the Chainsaw Devil.",
        0.99,
        0.98
    ],
    [
        "pochita",
        "chainsaw-devil",
        "related_to",
        "Pochita embodies the Chainsaw Devil.",
        0.99,
        0.98
    ],
    [
        "denji",
        "chainsaw-devil",
        "uses",
        "Denji transforms using Chainsaw Devil power.",
        0.98,
        0.97
    ],
    [
        "denji",
        "devil-contracts",
        "uses",
        "Denji's bond with Pochita is a devil contract.",
        0.97,
        0.95
    ],
    [
        "aki-hayakawa",
        "devil-contracts",
        "uses",
        "Aki contracts with Curse, Future, and other devils.",
        0.97,
        0.95
    ],
    [
        "power",
        "fiends",
        "member_of",
        "Power is a Blood Fiend.",
        0.98,
        0.96
    ],
    [
        "angel-devil",
        "fiends",
        "member_of",
        "Angel Devil is a fiend on Aki's squad.",
        0.97,
        0.94
    ],
    [
        "beam",
        "fiends",
        "member_of",
        "Beam is a Shark Fiend.",
        0.97,
        0.94
    ],
    [
        "aki-hayakawa",
        "denji",
        "supports",
        "Aki leads and protects Denji's squad.",
        0.97,
        0.95
    ],
    [
        "power",
        "denji",
        "supports",
        "Power fights alongside Denji.",
        0.96,
        0.94
    ],
    [
        "kishibe",
        "denji",
        "supports",
        "Kishibe trains Denji for survival.",
        0.96,
        0.93
    ],
    [
        "makima",
        "denji",
        "motivated_by",
        "Makima manipulates Denji for her goals.",
        0.98,
        0.96
    ],
    [
        "makima",
        "control-devil",
        "related_to",
        "Makima is the Control Devil.",
        0.99,
        0.98
    ],
    [
        "reze",
        "denji",
        "connected_to",
        "Reze infiltrates Denji's life as the Bomb Devil.",
        0.97,
        0.95
    ],
    [
        "aki-hayakawa",
        "gun-devil",
        "seeks",
        "Aki hunts the Gun Devil for revenge.",
        0.98,
        0.96
    ],
    [
        "public-safety-devil-hunters",
        "gun-devil",
        "seeks",
        "Public Safety pursues Gun Devil fragments.",
        0.97,
        0.94
    ],
    [
        "quanxi",
        "gun-devil",
        "seeks",
        "Quanxi is contracted to obtain devil parts.",
        0.95,
        0.92
    ],
    [
        "asa-mitaka",
        "yoru",
        "connected_to",
        "Yoru possesses Asa Mitaka.",
        0.99,
        0.98
    ],
    [
        "asa-mitaka",
        "devil-hunter-academy",
        "located_in",
        "Asa attends the Devil Hunter Academy.",
        0.98,
        0.96
    ],
    [
        "chainsaw-man-part-2",
        "devil-hunter-academy",
        "occurred_at",
        "Part 2 unfolds at the Academy.",
        0.97,
        0.95
    ],
    [
        "hell",
        "devil-contracts",
        "related_to",
        "Devils from Hell enable contracts.",
        0.94,
        0.9
    ],
    [
        "kobeni-higashiyama",
        "public-safety-devil-hunters",
        "member_of",
        "Kobeni serves in Public Safety.",
        0.96,
        0.93
    ],
    [
        "chainsaw-man",
        "chainsaw-man-figures",
        "contains",
        "Chainsaw Man figures is a primary trailhead under Chainsaw Man.",
        0.88,
        0.82
    ],
    [
        "chainsaw-man",
        "chainsaw-man-places",
        "contains",
        "Chainsaw Man places is a primary trailhead under Chainsaw Man.",
        0.88,
        0.82
    ],
    [
        "chainsaw-man",
        "chainsaw-man-events",
        "contains",
        "Chainsaw Man events is a primary trailhead under Chainsaw Man.",
        0.88,
        0.82
    ],
    [
        "chainsaw-man",
        "chainsaw-man-objects",
        "contains",
        "Chainsaw Man objects & artifacts is a primary trailhead under Chainsaw Man.",
        0.88,
        0.82
    ],
    [
        "chainsaw-man",
        "chainsaw-man-factions",
        "contains",
        "Chainsaw Man factions & groups is a primary trailhead under Chainsaw Man.",
        0.88,
        0.82
    ],
    [
        "chainsaw-man",
        "chainsaw-man-concepts",
        "contains",
        "Chainsaw Man concepts is a primary trailhead under Chainsaw Man.",
        0.88,
        0.82
    ],
    [
        "chainsaw-man",
        "chainsaw-man-eras",
        "contains",
        "Chainsaw Man eras is a primary trailhead under Chainsaw Man.",
        0.88,
        0.82
    ],
    [
        "chainsaw-man",
        "chainsaw-man-works",
        "contains",
        "Chainsaw Man works & media is a primary trailhead under Chainsaw Man.",
        0.88,
        0.82
    ],
    [
        "chainsaw-man",
        "chainsaw-man-symbols",
        "contains",
        "Chainsaw Man symbols is a primary trailhead under Chainsaw Man.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
