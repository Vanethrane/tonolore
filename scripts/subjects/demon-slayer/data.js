/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "demon-slayer",
        "name": "Demon Slayer",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Koyoharu Gotouge's Taisho-era demon-hunting saga.",
        "description": "Demon Slayer: Kimetsu no Yaiba is the manga and anime franchise by Koyoharu Gotouge following Tanjiro Kamado, Nezuko, and the Demon Slayer Corps against Muzan Kibutsuji — with Hashira, Nichirin swords, Breathing styles, and Ufotable's acclaimed adaptation.",
        "aliases": []
    },
    {
        "slug": "koyoharu-gotouge",
        "name": "Koyoharu Gotouge",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of Demon Slayer.",
        "description": "Koyoharu Gotouge (Gotoge) created Demon Slayer: Kimetsu no Yaiba for Weekly Shonen Jump, writing Tanjiro's journey, the Hashira, and the war against Muzan.",
        "aliases": []
    },
    {
        "slug": "ufotable",
        "name": "Ufotable",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Studio behind the Demon Slayer anime.",
        "description": "Ufotable animates Demon Slayer: Kimetsu no Yaiba, including the Mugen Train film and television arcs noted for fluid fight choreography.",
        "aliases": []
    },
    {
        "slug": "demon-slayer-manga",
        "name": "Demon Slayer (manga)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Original Gotouge manga in Weekly Shonen Jump.",
        "description": "The Demon Slayer manga follows Tanjiro Kamado from his family's tragedy through Final Selection, Hashira training, and the Infinity Castle battle with Muzan.",
        "aliases": []
    },
    {
        "slug": "demon-slayer-anime",
        "name": "Demon Slayer (anime)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Ufotable television adaptation.",
        "description": "The Demon Slayer anime by Ufotable adapts Tanjiro's early arcs, Entertainment District, and later seasons of the Corps' war on demons.",
        "aliases": []
    },
    {
        "slug": "mugen-train",
        "name": "Mugen Train",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Film and arc featuring Rengoku vs. Akaza.",
        "description": "Demon Slayer: Mugen Train (Infinity Train) sends Tanjiro's squad and Kyojuro Rengoku against Enmu and Akaza aboard a demon-haunted locomotive.",
        "aliases": []
    },
    {
        "slug": "entertainment-district-arc",
        "name": "Entertainment District Arc",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Arc with Tengen Uzui against Upper Rank demons.",
        "description": "The Entertainment District Arc pairs Tanjiro, Zenitsu, and Inosuke with Sound Hashira Tengen Uzui against Upper Rank demons in the pleasure quarter.",
        "aliases": []
    },
    {
        "slug": "demon-slayer-corps",
        "name": "Demon Slayer Corps",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Secret order hunting demons with Nichirin blades.",
        "description": "The Demon Slayer Corps is the clandestine organization that trains swordsmen like Tanjiro to hunt demons and oppose Muzan Kibutsuji.",
        "aliases": []
    },
    {
        "slug": "hashira",
        "name": "Hashira",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Elite pillars of the Demon Slayer Corps.",
        "description": "The Hashira are the Corps' highest-ranked swordsmen — including Giyu, Rengoku, Shinobu, Tengen, and others — each mastering a Breathing style.",
        "aliases": []
    },
    {
        "slug": "twelve-kizuki",
        "name": "Twelve Kizuki",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Muzan's strongest ranked demons.",
        "description": "The Twelve Kizuki are Muzan Kibutsuji's elite demons, divided into Upper and Lower Ranks, including Akaza and other major foes.",
        "aliases": []
    },
    {
        "slug": "infinity-castle",
        "name": "Infinity Castle",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Muzan's shifting dimensional fortress.",
        "description": "The Infinity Castle is Muzan's ever-shifting fortress where the Demon Slayer Corps stages its final confrontation with the Twelve Kizuki and Muzan.",
        "aliases": []
    },
    {
        "slug": "mount-sagiri",
        "name": "Mount Sagiri",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Mountain where Tanjiro trains under Urokodaki.",
        "description": "Mount Sagiri is where Sakonji Urokodaki trains Tanjiro Kamado in Water Breathing before Final Selection.",
        "aliases": []
    },
    {
        "slug": "taisho-japan",
        "name": "Taisho-era Japan",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Historical setting of Demon Slayer.",
        "description": "Demon Slayer is set in Taisho-era Japan, blending period towns, mountains, and the secret war between the Corps and demons.",
        "aliases": []
    },
    {
        "slug": "nichirin-sword",
        "name": "Nichirin Sword",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Sun-forged blade that can kill demons.",
        "description": "Nichirin Swords are special ore blades used by Demon Slayers; their color changes with the wielder and can slay demons when used with Breathing styles.",
        "aliases": []
    },
    {
        "slug": "breathing-styles",
        "name": "Breathing Styles",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Combat arts amplifying the body against demons.",
        "description": "Breathing Styles are martial techniques Demon Slayers use to raise physical power — Water, Flame, Thunder, Beast, Sun, and more.",
        "aliases": []
    },
    {
        "slug": "water-breathing",
        "name": "Water Breathing",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Flowing style taught to Tanjiro by Urokodaki.",
        "description": "Water Breathing is the fluid sword style Tanjiro Kamado learns from Sakonji Urokodaki, foundational before he rediscovers Sun Breathing.",
        "aliases": []
    },
    {
        "slug": "sun-breathing",
        "name": "Sun Breathing",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Original Breathing style of the first swordsman.",
        "description": "Sun Breathing (Dance of the Fire God) is the original Breathing style tied to Tanjiro's ancestors and the first demon slayer who scarred Muzan.",
        "aliases": []
    },
    {
        "slug": "thunder-breathing",
        "name": "Thunder Breathing",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Lightning-fast style used by Zenitsu.",
        "description": "Thunder Breathing emphasizes blinding speed; Zenitsu Agatsuma specializes in its First Form while asleep or desperate.",
        "aliases": []
    },
    {
        "slug": "demons",
        "name": "Demons",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Flesh-eating beings created from Muzan's blood.",
        "description": "Demons are humans transformed by Muzan Kibutsuji's blood, weak to sunlight and Nichirin blades, forming ranks like the Twelve Kizuki.",
        "aliases": []
    },
    {
        "slug": "tanjiro-kamado",
        "name": "Tanjiro Kamado",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Kind swordsman seeking to cure Nezuko.",
        "description": "Tanjiro Kamado joins the Demon Slayer Corps after demons destroy his family, mastering Water Breathing and fighting to restore his sister Nezuko.",
        "aliases": []
    },
    {
        "slug": "nezuko-kamado",
        "name": "Nezuko Kamado",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Tanjiro's demon sister who resists devouring humans.",
        "description": "Nezuko Kamado becomes a demon yet protects humans, traveling with Tanjiro as the Corps debates her fate.",
        "aliases": []
    },
    {
        "slug": "zenitsu-agatsuma",
        "name": "Zenitsu Agatsuma",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Thunder Breathing swordsman of Tanjiro's trio.",
        "description": "Zenitsu Agatsuma is a nervous Demon Slayer who unleashes Thunder Breathing prowess, especially when unconscious, beside Tanjiro and Inosuke.",
        "aliases": []
    },
    {
        "slug": "inosuke-hashibira",
        "name": "Inosuke Hashibira",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Beast Breathing fighter in a boar mask.",
        "description": "Inosuke Hashibira is a feral dual-blade Demon Slayer who uses Beast Breathing and rivals Tanjiro with competitive loyalty.",
        "aliases": []
    },
    {
        "slug": "muzan-kibutsuji",
        "name": "Muzan Kibutsuji",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Progenitor of demons; Corps' ultimate enemy.",
        "description": "Muzan Kibutsuji is the first demon and creator of all others, hunted by the Demon Slayer Corps across the Infinity Castle climax.",
        "aliases": []
    },
    {
        "slug": "kyojuro-rengoku",
        "name": "Kyojuro Rengoku",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Flame Hashira of the Mugen Train arc.",
        "description": "Kyojuro Rengoku is the Flame Hashira who fights beside Tanjiro on the Mugen Train and faces Upper Rank Akaza.",
        "aliases": []
    },
    {
        "slug": "shinobu-kocho",
        "name": "Shinobu Kocho",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Insect Hashira who fights with poison.",
        "description": "Shinobu Kocho is the Insect Hashira, a petite Demon Slayer who uses speed and wisteria poison in place of decapitating strength.",
        "aliases": []
    },
    {
        "slug": "giyu-tomioka",
        "name": "Giyu Tomioka",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Water Hashira who spares Nezuko.",
        "description": "Giyu Tomioka is the Water Hashira who first encounters Tanjiro and Nezuko, sparing them and guiding Tanjiro toward Urokodaki.",
        "aliases": []
    },
    {
        "slug": "tengen-uzui",
        "name": "Tengen Uzui",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Sound Hashira of the Entertainment District.",
        "description": "Tengen Uzui is the flamboyant Sound Hashira who leads the Entertainment District mission with Tanjiro, Zenitsu, and Inosuke.",
        "aliases": []
    },
    {
        "slug": "akaza",
        "name": "Akaza",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Upper Rank Three; fights Rengoku and later Tanjiro.",
        "description": "Akaza is Upper Rank Three of the Twelve Kizuki, a martial demon who battles Kyojuro Rengoku on the Mugen Train and returns in later clashes.",
        "aliases": []
    },
    {
        "slug": "sakonji-urokodaki",
        "name": "Sakonji Urokodaki",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Former Water Hashira; Tanjiro's trainer.",
        "description": "Sakonji Urokodaki is a masked former Water Hashira who trains Tanjiro Kamado on Mount Sagiri and cares for Nezuko.",
        "aliases": []
    },
    {
        "slug": "mitsuri-kanroji",
        "name": "Mitsuri Kanroji",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Love Hashira of the Corps.",
        "description": "Mitsuri Kanroji is the Love Hashira, known for flexibility, strength, and loyalty within the Hashira ranks.",
        "aliases": []
    },
    {
        "slug": "sanemi-shinazugawa",
        "name": "Sanemi Shinazugawa",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Wind Hashira; harsh skeptic of Nezuko.",
        "description": "Sanemi Shinazugawa is the Wind Hashira, a scarred warrior who distrusts demons — including Nezuko — until the final war.",
        "aliases": []
    },
    {
        "slug": "kanao-tsuyuri",
        "name": "Kanao Tsuyuri",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Shinobu's adopted tsuguko swordsman.",
        "description": "Kanao Tsuyuri is raised by the Kocho sisters as a Demon Slayer, fighting beside Tanjiro and growing beyond coin-flip decisions.",
        "aliases": []
    },
    {
        "slug": "enmu",
        "name": "Enmu",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Lower Rank One demon of the Mugen Train.",
        "description": "Enmu is Lower Rank One of the Twelve Kizuki who merges with the Mugen Train, opposing Tanjiro's squad and Rengoku.",
        "aliases": []
    },
    {
        "slug": "demon-slayer-figures",
        "name": "Demon Slayer figures",
        "type": "topic",
        "short_description": "People and named forces central to Demon Slayer.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Demon Slayer."
    },
    {
        "slug": "demon-slayer-places",
        "name": "Demon Slayer places",
        "type": "place",
        "short_description": "Locations and geographies that frame Demon Slayer.",
        "description": "Places, regions, and built sites that give Demon Slayer its map — where events and figures concentrate."
    },
    {
        "slug": "demon-slayer-events",
        "name": "Demon Slayer events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Demon Slayer.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Demon Slayer timeline."
    },
    {
        "slug": "demon-slayer-objects",
        "name": "Demon Slayer objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Demon Slayer.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Demon Slayer."
    },
    {
        "slug": "demon-slayer-factions",
        "name": "Demon Slayer factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Demon Slayer.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Demon Slayer."
    },
    {
        "slug": "demon-slayer-concepts",
        "name": "Demon Slayer concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Demon Slayer.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Demon Slayer readable as a lore graph."
    }
];

const relationships = [
    [
        "koyoharu-gotouge",
        "demon-slayer",
        "created",
        "Koyoharu Gotouge created Demon Slayer.",
        0.99,
        0.99
    ],
    [
        "koyoharu-gotouge",
        "demon-slayer-manga",
        "created",
        "Gotouge wrote and drew the Demon Slayer manga.",
        0.99,
        0.98
    ],
    [
        "ufotable",
        "demon-slayer-anime",
        "produced",
        "Ufotable produced the Demon Slayer anime.",
        0.98,
        0.96
    ],
    [
        "demon-slayer-manga",
        "demon-slayer",
        "part_of",
        "The manga is the foundation of Demon Slayer.",
        0.99,
        0.99
    ],
    [
        "demon-slayer-anime",
        "demon-slayer",
        "part_of",
        "The anime adapts Demon Slayer.",
        0.98,
        0.95
    ],
    [
        "mugen-train",
        "demon-slayer",
        "part_of",
        "Mugen Train is part of Demon Slayer.",
        0.98,
        0.95
    ],
    [
        "demon-slayer-manga",
        "demon-slayer-anime",
        "adapted_into",
        "The manga was adapted by Ufotable.",
        0.97,
        0.94
    ],
    [
        "hashira",
        "demon-slayer-corps",
        "part_of",
        "The Hashira are the Corps' elite.",
        0.99,
        0.97
    ],
    [
        "twelve-kizuki",
        "muzan-kibutsuji",
        "member_of",
        "The Twelve Kizuki serve Muzan.",
        0.98,
        0.96
    ],
    [
        "demons",
        "muzan-kibutsuji",
        "connected_to",
        "Demons originate from Muzan's blood.",
        0.99,
        0.97
    ],
    [
        "infinity-castle",
        "muzan-kibutsuji",
        "located_in",
        "The Infinity Castle is Muzan's domain.",
        0.97,
        0.94
    ],
    [
        "demon-slayer-corps",
        "taisho-japan",
        "located_in",
        "The Corps operates in Taisho Japan.",
        0.96,
        0.92
    ],
    [
        "tanjiro-kamado",
        "demon-slayer-corps",
        "member_of",
        "Tanjiro joins the Demon Slayer Corps.",
        0.99,
        0.98
    ],
    [
        "zenitsu-agatsuma",
        "demon-slayer-corps",
        "member_of",
        "Zenitsu is a Demon Slayer.",
        0.97,
        0.94
    ],
    [
        "inosuke-hashibira",
        "demon-slayer-corps",
        "member_of",
        "Inosuke is a Demon Slayer.",
        0.97,
        0.94
    ],
    [
        "kyojuro-rengoku",
        "hashira",
        "member_of",
        "Rengoku is the Flame Hashira.",
        0.99,
        0.97
    ],
    [
        "shinobu-kocho",
        "hashira",
        "member_of",
        "Shinobu is the Insect Hashira.",
        0.99,
        0.97
    ],
    [
        "giyu-tomioka",
        "hashira",
        "member_of",
        "Giyu is the Water Hashira.",
        0.99,
        0.97
    ],
    [
        "tengen-uzui",
        "hashira",
        "member_of",
        "Tengen is the Sound Hashira.",
        0.98,
        0.96
    ],
    [
        "akaza",
        "twelve-kizuki",
        "member_of",
        "Akaza is Upper Rank Three.",
        0.98,
        0.96
    ],
    [
        "nezuko-kamado",
        "tanjiro-kamado",
        "connected_to",
        "Nezuko is Tanjiro's sister.",
        0.99,
        0.98
    ],
    [
        "nezuko-kamado",
        "demons",
        "connected_to",
        "Nezuko is a demon who resists killing humans.",
        0.98,
        0.96
    ],
    [
        "giyu-tomioka",
        "tanjiro-kamado",
        "supports",
        "Giyu spares and guides Tanjiro.",
        0.96,
        0.92
    ],
    [
        "sakonji-urokodaki",
        "tanjiro-kamado",
        "supports",
        "Urokodaki trains Tanjiro.",
        0.97,
        0.94
    ],
    [
        "water-breathing",
        "breathing-styles",
        "part_of",
        "Water Breathing is a Breathing Style.",
        0.98,
        0.95
    ],
    [
        "sun-breathing",
        "breathing-styles",
        "part_of",
        "Sun Breathing is the original Breathing Style.",
        0.98,
        0.95
    ],
    [
        "thunder-breathing",
        "breathing-styles",
        "part_of",
        "Thunder Breathing is a Breathing Style.",
        0.97,
        0.94
    ],
    [
        "water-breathing",
        "tanjiro-kamado",
        "uses",
        "Tanjiro uses Water Breathing.",
        0.98,
        0.95
    ],
    [
        "thunder-breathing",
        "zenitsu-agatsuma",
        "uses",
        "Zenitsu uses Thunder Breathing.",
        0.97,
        0.94
    ],
    [
        "nichirin-sword",
        "demon-slayer-corps",
        "uses",
        "Demon Slayers wield Nichirin Swords.",
        0.98,
        0.95
    ],
    [
        "kyojuro-rengoku",
        "mugen-train",
        "involved",
        "Rengoku is central to the Mugen Train conflict.",
        0.97,
        0.94
    ],
    [
        "akaza",
        "kyojuro-rengoku",
        "opposed_by",
        "Akaza fights Rengoku on the Mugen Train.",
        0.97,
        0.94
    ],
    [
        "demon-slayer",
        "demon-slayer-figures",
        "contains",
        "Demon Slayer figures is a primary trailhead under Demon Slayer.",
        0.88,
        0.82
    ],
    [
        "demon-slayer",
        "demon-slayer-places",
        "contains",
        "Demon Slayer places is a primary trailhead under Demon Slayer.",
        0.88,
        0.82
    ],
    [
        "demon-slayer",
        "demon-slayer-events",
        "contains",
        "Demon Slayer events is a primary trailhead under Demon Slayer.",
        0.88,
        0.82
    ],
    [
        "demon-slayer",
        "demon-slayer-objects",
        "contains",
        "Demon Slayer objects & artifacts is a primary trailhead under Demon Slayer.",
        0.88,
        0.82
    ],
    [
        "demon-slayer",
        "demon-slayer-factions",
        "contains",
        "Demon Slayer factions & groups is a primary trailhead under Demon Slayer.",
        0.88,
        0.82
    ],
    [
        "demon-slayer",
        "demon-slayer-concepts",
        "contains",
        "Demon Slayer concepts is a primary trailhead under Demon Slayer.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
