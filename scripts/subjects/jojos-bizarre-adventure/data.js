/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "jojos-bizarre-adventure",
        "name": "JoJo's Bizarre Adventure",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Hirohiko Araki's multi-generational battle manga and anime.",
        "description": "JoJo's Bizarre Adventure is Hirohiko Araki's long-running manga and anime franchise following the Joestar bloodline across centuries, from Hamon and the Stone Mask to Stands, DIO, and battles in Egypt, Morioh, and Naples.",
        "aliases": []
    },
    {
        "slug": "hirohiko-araki",
        "name": "Hirohiko Araki",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of JoJo's Bizarre Adventure.",
        "description": "Hirohiko Araki created JoJo's Bizarre Adventure for Weekly Shonen Jump, designing each part's JoJo protagonist, iconic poses, Stand battles, and the enduring rivalry with DIO.",
        "aliases": []
    },
    {
        "slug": "shueisha",
        "name": "Shueisha",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher of JoJo's Bizarre Adventure manga.",
        "description": "Shueisha publishes JoJo's Bizarre Adventure through Jump and Ultra Jump, serializing Araki's saga from Phantom Blood through ongoing parts.",
        "aliases": []
    },
    {
        "slug": "david-production",
        "name": "David Production",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Studio behind the JoJo anime adaptations.",
        "description": "David Production animates JoJo's Bizarre Adventure, adapting Phantom Blood through Stone Ocean with distinctive color shifts and Stand battle choreography.",
        "aliases": []
    },
    {
        "slug": "jojo-manga",
        "name": "JoJo's Bizarre Adventure (manga)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Original Araki manga spanning multiple parts.",
        "description": "The JoJo manga chronicles the Joestar family from Jonathan Joestar's fight against DIO through Jotaro's Stardust Crusaders, Giorno's Golden Wind, and later parts.",
        "aliases": []
    },
    {
        "slug": "jojo-anime",
        "name": "JoJo's Bizarre Adventure (anime)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "David Production television adaptation.",
        "description": "The JoJo anime by David Production adapts Araki's parts with stylized visuals, opening themes, and faithful Stand confrontations across the franchise.",
        "aliases": []
    },
    {
        "slug": "phantom-blood",
        "name": "Phantom Blood",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Part 1 with Jonathan Joestar and DIO.",
        "description": "Phantom Blood is JoJo Part 1, where Jonathan Joestar battles the vampire DIO using Hamon after the Stone Mask transforms his adoptive brother.",
        "aliases": []
    },
    {
        "slug": "stardust-crusaders",
        "name": "Stardust Crusaders",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Part 3 with Jotaro Kujo against DIO in Egypt.",
        "description": "Stardust Crusaders is JoJo Part 3, following Jotaro Kujo and allies across the world to Egypt to defeat DIO before his Stand The World stops time.",
        "aliases": []
    },
    {
        "slug": "golden-wind",
        "name": "Golden Wind",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Part 5 with Giorno Giovanna in Naples.",
        "description": "Golden Wind (Vento Aureo) is JoJo Part 5, where Giorno Giovanna joins Passione to overthrow the boss Diavolo and reform the Italian mafia.",
        "aliases": []
    },
    {
        "slug": "battle-tendency",
        "name": "Battle Tendency",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Part 2 with Joseph Joestar against ancient beings.",
        "description": "Battle Tendency is JoJo Part 2, starring young Joseph Joestar against the Pillar Men and their quest for the Super Aja in 1930s Europe and Mexico.",
        "aliases": []
    },
    {
        "slug": "stands",
        "name": "Stands",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Supernatural manifestations of fighting spirit.",
        "description": "Stands are psychic embodiments of life force, from Part 3 onward defining JoJo battles with unique abilities like Star Platinum, The World, and Gold Experience.",
        "aliases": []
    },
    {
        "slug": "hamon",
        "name": "Hamon",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Ripple energy used against vampires in early parts.",
        "description": "Hamon (the Ripple) is breathing-based energy Jonathan and Joseph Joestar use against vampires and the Pillar Men before Stands dominate the series.",
        "aliases": []
    },
    {
        "slug": "stone-mask",
        "name": "Stone Mask",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Aztec artifact that creates vampires.",
        "description": "The Stone Mask is the ancient mask that awakens vampiric power when pierced by blood, transforming DIO and launching the Joestar-DIO conflict.",
        "aliases": []
    },
    {
        "slug": "stand-arrow",
        "name": "Stand Arrow",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Arrow that awakens Stand users.",
        "description": "The Stand Arrow is a meteoric artifact that pierces worthy individuals to awaken Stands, central to Passione's rise and many Part 4–6 conflicts.",
        "aliases": []
    },
    {
        "slug": "star-platinum",
        "name": "Star Platinum",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Jotaro Kujo's Stand of immense power.",
        "description": "Star Platinum is Jotaro Kujo's Stand, possessing superhuman strength, precision, and eventually time stop to rival DIO's The World.",
        "aliases": []
    },
    {
        "slug": "the-world",
        "name": "The World",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "DIO's Stand that stops time.",
        "description": "The World is DIO's Stand, halting time for brief intervals and making him nearly unbeatable until Jotaro's Star Platinum learns the same power.",
        "aliases": []
    },
    {
        "slug": "gold-experience",
        "name": "Gold Experience",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Giorno Giovanna's Stand that gives life.",
        "description": "Gold Experience is Giorno Giovanna's Stand, animating objects and later evolving into Gold Experience Requiem with reality-rewriting power.",
        "aliases": []
    },
    {
        "slug": "passione",
        "name": "Passione",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Italian mafia Giorno seeks to reform.",
        "description": "Passione is the powerful Italian mafia in Golden Wind, ruled by the mysterious Boss Diavolo until Giorno Giovanna's rebellion reshapes the organization.",
        "aliases": []
    },
    {
        "slug": "speedwagon-foundation",
        "name": "Speedwagon Foundation",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Charitable organization aiding the Joestars.",
        "description": "The Speedwagon Foundation, founded by Robert E. O. Speedwagon, funds research and supports Joestar allies from Hamon eras through Stand battles.",
        "aliases": []
    },
    {
        "slug": "morioh",
        "name": "Morioh",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Japanese town setting of Diamond Is Unbreakable.",
        "description": "Morioh is the fictional Japanese town in Part 4 where Josuke Higashikata and allies hunt the serial killer Yoshikage Kira amid Stand users.",
        "aliases": []
    },
    {
        "slug": "egypt-dio",
        "name": "Egypt (DIO's mansion)",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Final battleground of Stardust Crusaders.",
        "description": "Egypt hosts DIO's mansion and the climactic Stardust Crusaders confrontation where Jotaro defeats The World.",
        "aliases": []
    },
    {
        "slug": "naples",
        "name": "Naples",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Italian city setting of Golden Wind.",
        "description": "Naples and surrounding Italy serve as the backdrop for Giorno Giovanna's Passione ascent in Golden Wind.",
        "aliases": []
    },
    {
        "slug": "jonathan-joestar",
        "name": "Jonathan Joestar",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Gentleman JoJo of Phantom Blood.",
        "description": "Jonathan Joestar is the noble first JoJo who masters Hamon to fight the vampire DIO, sacrificing himself to save his wife Erina and unborn child.",
        "aliases": []
    },
    {
        "slug": "joseph-joestar",
        "name": "Joseph Joestar",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Cunning JoJo of Battle Tendency and Part 3 elder.",
        "description": "Joseph Joestar is the trickster JoJo who defeats the Pillar Men with Hamon and later guides the Stardust Crusaders as Jotaro's grandfather.",
        "aliases": []
    },
    {
        "slug": "jotaro-kujo",
        "name": "Jotaro Kujo",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Stoic JoJo with Star Platinum in Part 3.",
        "description": "Jotaro Kujo is the delinquent JoJo who awakens Star Platinum, leads the Stardust Crusaders to Egypt, and becomes an enduring icon of the franchise.",
        "aliases": []
    },
    {
        "slug": "giorno-giovanna",
        "name": "Giorno Giovanna",
        "type": "person",
        "evidence": "fiction",
        "short_description": "DIO's son who dreams of reforming Passione.",
        "description": "Giorno Giovanna is the protagonist of Golden Wind, son of DIO, who uses Gold Experience to climb Passione and defeat Diavolo.",
        "aliases": []
    },
    {
        "slug": "dio-brando",
        "name": "DIO",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Vampire antagonist across early JoJo parts.",
        "description": "DIO (Dio Brando) is Jonathan's adoptive brother turned vampire and Stand user whose ambition and The World haunt the Joestar line for generations.",
        "aliases": []
    },
    {
        "slug": "kujo-jolyne",
        "name": "Jolyne Cujoh",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Jotaro's daughter imprisoned in Stone Ocean.",
        "description": "Jolyne Cujoh is Jotaro's daughter in Stone Ocean, awakening Stone Free to survive Green Dolphin Street Prison and fight Pucci.",
        "aliases": []
    },
    {
        "slug": "robert-e-o-speedwagon",
        "name": "Robert E. O. Speedwagon",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Jonathan's ally who founded the Speedwagon Foundation.",
        "description": "Robert E. O. Speedwagon is Jonathan Joestar's loyal friend whose fortune later funds the Speedwagon Foundation's support of Joestar battles.",
        "aliases": []
    },
    {
        "slug": "noriaki-kakyoin",
        "name": "Noriaki Kakyoin",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Stardust Crusader with Hierophant Green.",
        "description": "Noriaki Kakyoin joins Jotaro's party in Stardust Crusaders, wielding the emerald-slinging Stand Hierophant Green against DIO's agents.",
        "aliases": []
    },
    {
        "slug": "jean-pierre-polnareff",
        "name": "Jean Pierre Polnareff",
        "type": "person",
        "evidence": "fiction",
        "short_description": "French Crusader with Silver Chariot.",
        "description": "Jean Pierre Polnareff is a Stardust Crusader seeking his sister's killer, fighting with the rapier Stand Silver Chariot.",
        "aliases": []
    },
    {
        "slug": "bruno-bucciarati",
        "name": "Bruno Bucciarati",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Passione capo who leads Giorno's team.",
        "description": "Bruno Bucciarati is a Passione team leader who recruits Giorno Giovanna, using Sticky Fingers to unravel the Boss's identity in Golden Wind.",
        "aliases": []
    },
    {
        "slug": "diavolo",
        "name": "Diavolo",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Secret Passione boss with King Crimson.",
        "description": "Diavolo is Passione's hidden boss whose Stand King Crimson erases time, making him Giorno Giovanna's ultimate adversary in Golden Wind.",
        "aliases": []
    },
    {
        "slug": "josuke-higashikata",
        "name": "Josuke Higashikata",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Morioh's pompadour JoJo of Part 4.",
        "description": "Josuke Higashikata is the Part 4 JoJo with Crazy Diamond, healing and reconstructing matter while protecting Morioh from Yoshikage Kira.",
        "aliases": []
    },
    {
        "slug": "jojos-bizarre-adventure-figures",
        "name": "JoJo's Bizarre Adventure figures",
        "type": "topic",
        "short_description": "People and named forces central to JoJo's Bizarre Adventure.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring JoJo's Bizarre Adventure."
    },
    {
        "slug": "jojos-bizarre-adventure-places",
        "name": "JoJo's Bizarre Adventure places",
        "type": "place",
        "short_description": "Locations and geographies that frame JoJo's Bizarre Adventure.",
        "description": "Places, regions, and built sites that give JoJo's Bizarre Adventure its map — where events and figures concentrate."
    },
    {
        "slug": "jojos-bizarre-adventure-events",
        "name": "JoJo's Bizarre Adventure events",
        "type": "event",
        "short_description": "Turning points and dated episodes in JoJo's Bizarre Adventure.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the JoJo's Bizarre Adventure timeline."
    },
    {
        "slug": "jojos-bizarre-adventure-objects",
        "name": "JoJo's Bizarre Adventure objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to JoJo's Bizarre Adventure.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through JoJo's Bizarre Adventure."
    },
    {
        "slug": "jojos-bizarre-adventure-factions",
        "name": "JoJo's Bizarre Adventure factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside JoJo's Bizarre Adventure.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in JoJo's Bizarre Adventure."
    },
    {
        "slug": "jojos-bizarre-adventure-concepts",
        "name": "JoJo's Bizarre Adventure concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize JoJo's Bizarre Adventure.",
        "description": "Keywords, doctrines, systems, and abstract forces that make JoJo's Bizarre Adventure readable as a lore graph."
    }
];

const relationships = [
    [
        "hirohiko-araki",
        "jojos-bizarre-adventure",
        "created",
        "Araki created JoJo's Bizarre Adventure.",
        0.99,
        0.99
    ],
    [
        "hirohiko-araki",
        "jojo-manga",
        "created",
        "Araki writes the JoJo manga.",
        0.99,
        0.98
    ],
    [
        "shueisha",
        "jojo-manga",
        "publishes",
        "Shueisha serializes JoJo in Jump.",
        0.98,
        0.96
    ],
    [
        "david-production",
        "jojo-anime",
        "produced",
        "David Production animates JoJo.",
        0.98,
        0.96
    ],
    [
        "jojo-manga",
        "jojos-bizarre-adventure",
        "part_of",
        "The manga is the core JoJo work.",
        0.99,
        0.99
    ],
    [
        "jojo-anime",
        "jojos-bizarre-adventure",
        "part_of",
        "The anime adapts JoJo.",
        0.98,
        0.97
    ],
    [
        "jojo-manga",
        "jojo-anime",
        "adapted_into",
        "The manga was adapted into anime.",
        0.98,
        0.96
    ],
    [
        "phantom-blood",
        "jojo-manga",
        "part_of",
        "Phantom Blood is JoJo Part 1.",
        0.99,
        0.98
    ],
    [
        "battle-tendency",
        "jojo-manga",
        "part_of",
        "Battle Tendency is JoJo Part 2.",
        0.99,
        0.98
    ],
    [
        "stardust-crusaders",
        "jojo-manga",
        "part_of",
        "Stardust Crusaders is JoJo Part 3.",
        0.99,
        0.98
    ],
    [
        "golden-wind",
        "jojo-manga",
        "part_of",
        "Golden Wind is JoJo Part 5.",
        0.99,
        0.98
    ],
    [
        "phantom-blood",
        "battle-tendency",
        "preceded",
        "Part 1 precedes Battle Tendency.",
        0.97,
        0.94
    ],
    [
        "battle-tendency",
        "stardust-crusaders",
        "preceded",
        "Part 2 precedes Stardust Crusaders.",
        0.96,
        0.93
    ],
    [
        "stardust-crusaders",
        "golden-wind",
        "preceded",
        "Part 3 precedes later parts including Golden Wind.",
        0.94,
        0.9
    ],
    [
        "jonathan-joestar",
        "phantom-blood",
        "involved",
        "Jonathan stars in Phantom Blood.",
        0.99,
        0.98
    ],
    [
        "joseph-joestar",
        "battle-tendency",
        "involved",
        "Joseph stars in Battle Tendency.",
        0.99,
        0.98
    ],
    [
        "jotaro-kujo",
        "stardust-crusaders",
        "involved",
        "Jotaro leads Stardust Crusaders.",
        0.99,
        0.99
    ],
    [
        "giorno-giovanna",
        "golden-wind",
        "involved",
        "Giorno stars in Golden Wind.",
        0.99,
        0.98
    ],
    [
        "jonathan-joestar",
        "hamon",
        "uses",
        "Jonathan fights with Hamon.",
        0.98,
        0.96
    ],
    [
        "joseph-joestar",
        "hamon",
        "uses",
        "Joseph masters Hamon tricks.",
        0.98,
        0.96
    ],
    [
        "dio-brando",
        "stone-mask",
        "uses",
        "DIO becomes a vampire via the Stone Mask.",
        0.99,
        0.98
    ],
    [
        "jonathan-joestar",
        "dio-brando",
        "opposed_by",
        "Jonathan battles DIO in Part 1.",
        0.99,
        0.98
    ],
    [
        "jotaro-kujo",
        "star-platinum",
        "uses",
        "Jotaro's Stand is Star Platinum.",
        0.99,
        0.99
    ],
    [
        "dio-brando",
        "the-world",
        "uses",
        "DIO wields The World.",
        0.99,
        0.99
    ],
    [
        "giorno-giovanna",
        "gold-experience",
        "uses",
        "Giorno's Stand is Gold Experience.",
        0.99,
        0.98
    ],
    [
        "star-platinum",
        "stands",
        "part_of",
        "Star Platinum is a Stand.",
        0.98,
        0.96
    ],
    [
        "the-world",
        "stands",
        "part_of",
        "The World is a Stand.",
        0.98,
        0.96
    ],
    [
        "gold-experience",
        "stands",
        "part_of",
        "Gold Experience is a Stand.",
        0.98,
        0.96
    ],
    [
        "stand-arrow",
        "stands",
        "caused",
        "The Stand Arrow awakens Stands.",
        0.97,
        0.95
    ],
    [
        "jotaro-kujo",
        "dio-brando",
        "opposed_by",
        "Jotaro confronts DIO in Egypt.",
        0.99,
        0.98
    ],
    [
        "stardust-crusaders",
        "egypt-dio",
        "occurred_at",
        "Part 3 culminates in Egypt.",
        0.98,
        0.96
    ],
    [
        "noriaki-kakyoin",
        "jotaro-kujo",
        "supports",
        "Kakyoin joins Jotaro's Crusaders.",
        0.97,
        0.95
    ],
    [
        "jean-pierre-polnareff",
        "jotaro-kujo",
        "supports",
        "Polnareff fights with the Crusaders.",
        0.97,
        0.95
    ],
    [
        "joseph-joestar",
        "jotaro-kujo",
        "supports",
        "Joseph guides Jotaro in Part 3.",
        0.96,
        0.94
    ],
    [
        "giorno-giovanna",
        "passione",
        "member_of",
        "Giorno joins Passione to reform it.",
        0.98,
        0.96
    ],
    [
        "bruno-bucciarati",
        "passione",
        "member_of",
        "Bucciarati leads a Passione team.",
        0.98,
        0.96
    ],
    [
        "diavolo",
        "passione",
        "leads",
        "Diavolo secretly rules Passione.",
        0.99,
        0.98
    ],
    [
        "giorno-giovanna",
        "diavolo",
        "opposed_by",
        "Giorno rebels against Diavolo.",
        0.99,
        0.98
    ],
    [
        "golden-wind",
        "naples",
        "occurred_at",
        "Golden Wind unfolds in Naples.",
        0.98,
        0.96
    ],
    [
        "josuke-higashikata",
        "morioh",
        "located_in",
        "Josuke protects Morioh in Part 4.",
        0.98,
        0.96
    ],
    [
        "robert-e-o-speedwagon",
        "speedwagon-foundation",
        "created",
        "Speedwagon created his foundation.",
        0.98,
        0.96
    ],
    [
        "speedwagon-foundation",
        "jotaro-kujo",
        "supports",
        "The Foundation aids the Crusaders.",
        0.95,
        0.92
    ],
    [
        "kujo-jolyne",
        "jotaro-kujo",
        "related_to",
        "Jolyne is Jotaro's daughter.",
        0.98,
        0.96
    ],
    [
        "giorno-giovanna",
        "dio-brando",
        "related_to",
        "Giorno is DIO's son.",
        0.97,
        0.95
    ],
    [
        "joseph-joestar",
        "jonathan-joestar",
        "related_to",
        "Joseph is Jonathan's grandson.",
        0.97,
        0.95
    ],
    [
        "jojos-bizarre-adventure",
        "jojos-bizarre-adventure-figures",
        "contains",
        "JoJo's Bizarre Adventure figures is a primary trailhead under JoJo's Bizarre Adventure.",
        0.88,
        0.82
    ],
    [
        "jojos-bizarre-adventure",
        "jojos-bizarre-adventure-places",
        "contains",
        "JoJo's Bizarre Adventure places is a primary trailhead under JoJo's Bizarre Adventure.",
        0.88,
        0.82
    ],
    [
        "jojos-bizarre-adventure",
        "jojos-bizarre-adventure-events",
        "contains",
        "JoJo's Bizarre Adventure events is a primary trailhead under JoJo's Bizarre Adventure.",
        0.88,
        0.82
    ],
    [
        "jojos-bizarre-adventure",
        "jojos-bizarre-adventure-objects",
        "contains",
        "JoJo's Bizarre Adventure objects & artifacts is a primary trailhead under JoJo's Bizarre Adventure.",
        0.88,
        0.82
    ],
    [
        "jojos-bizarre-adventure",
        "jojos-bizarre-adventure-factions",
        "contains",
        "JoJo's Bizarre Adventure factions & groups is a primary trailhead under JoJo's Bizarre Adventure.",
        0.88,
        0.82
    ],
    [
        "jojos-bizarre-adventure",
        "jojos-bizarre-adventure-concepts",
        "contains",
        "JoJo's Bizarre Adventure concepts is a primary trailhead under JoJo's Bizarre Adventure.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
