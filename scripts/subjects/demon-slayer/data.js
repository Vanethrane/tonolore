/*
 * Demon Slayer subject data — Koyoharu Gotouge's Taisho-era demon-hunting manga.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "fiction", extras = {}) {
    entities.push({
        slug,
        name,
        type,
        evidence,
        short_description,
        description,
        aliases: extras.aliases || [],
        parentSlug: extras.parentSlug || undefined
    });
}

function rel(from, to, relationship, title, strength = 0.95, discoveryScore = 0.9) {
    relationships.push([from, to, relationship, title, strength, discoveryScore]);
}

/* ---------- Root / creators ---------- */

entity(
    "demon-slayer",
    "Demon Slayer",
    "topic",
    "Koyoharu Gotouge's Taisho-era demon-hunting saga.",
    "Demon Slayer: Kimetsu no Yaiba is the manga and anime franchise by Koyoharu Gotouge following Tanjiro Kamado, Nezuko, and the Demon Slayer Corps against Muzan Kibutsuji — with Hashira, Nichirin swords, Breathing styles, and Ufotable's acclaimed adaptation."
);

entity(
    "koyoharu-gotouge",
    "Koyoharu Gotouge",
    "person",
    "Creator of Demon Slayer.",
    "Koyoharu Gotouge (Gotoge) created Demon Slayer: Kimetsu no Yaiba for Weekly Shonen Jump, writing Tanjiro's journey, the Hashira, and the war against Muzan."
);

entity(
    "ufotable",
    "Ufotable",
    "organization",
    "Studio behind the Demon Slayer anime.",
    "Ufotable animates Demon Slayer: Kimetsu no Yaiba, including the Mugen Train film and television arcs noted for fluid fight choreography."
);

/* ---------- Works ---------- */

entity(
    "demon-slayer-manga",
    "Demon Slayer (manga)",
    "work",
    "Original Gotouge manga in Weekly Shonen Jump.",
    "The Demon Slayer manga follows Tanjiro Kamado from his family's tragedy through Final Selection, Hashira training, and the Infinity Castle battle with Muzan."
);

entity(
    "demon-slayer-anime",
    "Demon Slayer (anime)",
    "work",
    "Ufotable television adaptation.",
    "The Demon Slayer anime by Ufotable adapts Tanjiro's early arcs, Entertainment District, and later seasons of the Corps' war on demons."
);

entity(
    "mugen-train",
    "Mugen Train",
    "work",
    "Film and arc featuring Rengoku vs. Akaza.",
    "Demon Slayer: Mugen Train (Infinity Train) sends Tanjiro's squad and Kyojuro Rengoku against Enmu and Akaza aboard a demon-haunted locomotive."
);

entity(
    "entertainment-district-arc",
    "Entertainment District Arc",
    "work",
    "Arc with Tengen Uzui against Upper Rank demons.",
    "The Entertainment District Arc pairs Tanjiro, Zenitsu, and Inosuke with Sound Hashira Tengen Uzui against Upper Rank demons in the pleasure quarter."
);

/* ---------- Organizations / places ---------- */

entity(
    "demon-slayer-corps",
    "Demon Slayer Corps",
    "organization",
    "Secret order hunting demons with Nichirin blades.",
    "The Demon Slayer Corps is the clandestine organization that trains swordsmen like Tanjiro to hunt demons and oppose Muzan Kibutsuji."
);

entity(
    "hashira",
    "Hashira",
    "organization",
    "Elite pillars of the Demon Slayer Corps.",
    "The Hashira are the Corps' highest-ranked swordsmen — including Giyu, Rengoku, Shinobu, Tengen, and others — each mastering a Breathing style."
);

entity(
    "twelve-kizuki",
    "Twelve Kizuki",
    "organization",
    "Muzan's strongest ranked demons.",
    "The Twelve Kizuki are Muzan Kibutsuji's elite demons, divided into Upper and Lower Ranks, including Akaza and other major foes."
);

entity(
    "infinity-castle",
    "Infinity Castle",
    "place",
    "Muzan's shifting dimensional fortress.",
    "The Infinity Castle is Muzan's ever-shifting fortress where the Demon Slayer Corps stages its final confrontation with the Twelve Kizuki and Muzan."
);

entity(
    "mount-sagiri",
    "Mount Sagiri",
    "place",
    "Mountain where Tanjiro trains under Urokodaki.",
    "Mount Sagiri is where Sakonji Urokodaki trains Tanjiro Kamado in Water Breathing before Final Selection."
);

entity(
    "taisho-japan",
    "Taisho-era Japan",
    "place",
    "Historical setting of Demon Slayer.",
    "Demon Slayer is set in Taisho-era Japan, blending period towns, mountains, and the secret war between the Corps and demons."
);

/* ---------- Concepts / objects ---------- */

entity(
    "nichirin-sword",
    "Nichirin Sword",
    "object",
    "Sun-forged blade that can kill demons.",
    "Nichirin Swords are special ore blades used by Demon Slayers; their color changes with the wielder and can slay demons when used with Breathing styles."
);

entity(
    "breathing-styles",
    "Breathing Styles",
    "concept",
    "Combat arts amplifying the body against demons.",
    "Breathing Styles are martial techniques Demon Slayers use to raise physical power — Water, Flame, Thunder, Beast, Sun, and more."
);

entity(
    "water-breathing",
    "Water Breathing",
    "concept",
    "Flowing style taught to Tanjiro by Urokodaki.",
    "Water Breathing is the fluid sword style Tanjiro Kamado learns from Sakonji Urokodaki, foundational before he rediscovers Sun Breathing."
);

entity(
    "sun-breathing",
    "Sun Breathing",
    "concept",
    "Original Breathing style of the first swordsman.",
    "Sun Breathing (Dance of the Fire God) is the original Breathing style tied to Tanjiro's ancestors and the first demon slayer who scarred Muzan."
);

entity(
    "thunder-breathing",
    "Thunder Breathing",
    "concept",
    "Lightning-fast style used by Zenitsu.",
    "Thunder Breathing emphasizes blinding speed; Zenitsu Agatsuma specializes in its First Form while asleep or desperate."
);

entity(
    "demons",
    "Demons",
    "concept",
    "Flesh-eating beings created from Muzan's blood.",
    "Demons are humans transformed by Muzan Kibutsuji's blood, weak to sunlight and Nichirin blades, forming ranks like the Twelve Kizuki."
);

/* ---------- Characters ---------- */

entity(
    "tanjiro-kamado",
    "Tanjiro Kamado",
    "person",
    "Kind swordsman seeking to cure Nezuko.",
    "Tanjiro Kamado joins the Demon Slayer Corps after demons destroy his family, mastering Water Breathing and fighting to restore his sister Nezuko."
);

entity(
    "nezuko-kamado",
    "Nezuko Kamado",
    "person",
    "Tanjiro's demon sister who resists devouring humans.",
    "Nezuko Kamado becomes a demon yet protects humans, traveling with Tanjiro as the Corps debates her fate."
);

entity(
    "zenitsu-agatsuma",
    "Zenitsu Agatsuma",
    "person",
    "Thunder Breathing swordsman of Tanjiro's trio.",
    "Zenitsu Agatsuma is a nervous Demon Slayer who unleashes Thunder Breathing prowess, especially when unconscious, beside Tanjiro and Inosuke."
);

entity(
    "inosuke-hashibira",
    "Inosuke Hashibira",
    "person",
    "Beast Breathing fighter in a boar mask.",
    "Inosuke Hashibira is a feral dual-blade Demon Slayer who uses Beast Breathing and rivals Tanjiro with competitive loyalty."
);

entity(
    "muzan-kibutsuji",
    "Muzan Kibutsuji",
    "person",
    "Progenitor of demons; Corps' ultimate enemy.",
    "Muzan Kibutsuji is the first demon and creator of all others, hunted by the Demon Slayer Corps across the Infinity Castle climax."
);

entity(
    "kyojuro-rengoku",
    "Kyojuro Rengoku",
    "person",
    "Flame Hashira of the Mugen Train arc.",
    "Kyojuro Rengoku is the Flame Hashira who fights beside Tanjiro on the Mugen Train and faces Upper Rank Akaza."
);

entity(
    "shinobu-kocho",
    "Shinobu Kocho",
    "person",
    "Insect Hashira who fights with poison.",
    "Shinobu Kocho is the Insect Hashira, a petite Demon Slayer who uses speed and wisteria poison in place of decapitating strength."
);

entity(
    "giyu-tomioka",
    "Giyu Tomioka",
    "person",
    "Water Hashira who spares Nezuko.",
    "Giyu Tomioka is the Water Hashira who first encounters Tanjiro and Nezuko, sparing them and guiding Tanjiro toward Urokodaki."
);

entity(
    "tengen-uzui",
    "Tengen Uzui",
    "person",
    "Sound Hashira of the Entertainment District.",
    "Tengen Uzui is the flamboyant Sound Hashira who leads the Entertainment District mission with Tanjiro, Zenitsu, and Inosuke."
);

entity(
    "akaza",
    "Akaza",
    "person",
    "Upper Rank Three; fights Rengoku and later Tanjiro.",
    "Akaza is Upper Rank Three of the Twelve Kizuki, a martial demon who battles Kyojuro Rengoku on the Mugen Train and returns in later clashes."
);

entity(
    "sakonji-urokodaki",
    "Sakonji Urokodaki",
    "person",
    "Former Water Hashira; Tanjiro's trainer.",
    "Sakonji Urokodaki is a masked former Water Hashira who trains Tanjiro Kamado on Mount Sagiri and cares for Nezuko."
);

entity(
    "mitsuri-kanroji",
    "Mitsuri Kanroji",
    "person",
    "Love Hashira of the Corps.",
    "Mitsuri Kanroji is the Love Hashira, known for flexibility, strength, and loyalty within the Hashira ranks."
);

entity(
    "sanemi-shinazugawa",
    "Sanemi Shinazugawa",
    "person",
    "Wind Hashira; harsh skeptic of Nezuko.",
    "Sanemi Shinazugawa is the Wind Hashira, a scarred warrior who distrusts demons — including Nezuko — until the final war."
);

entity(
    "kanao-tsuyuri",
    "Kanao Tsuyuri",
    "person",
    "Shinobu's adopted tsuguko swordsman.",
    "Kanao Tsuyuri is raised by the Kocho sisters as a Demon Slayer, fighting beside Tanjiro and growing beyond coin-flip decisions."
);

entity(
    "enmu",
    "Enmu",
    "person",
    "Lower Rank One demon of the Mugen Train.",
    "Enmu is Lower Rank One of the Twelve Kizuki who merges with the Mugen Train, opposing Tanjiro's squad and Rengoku."
);

/* ---------- Relationships ---------- */

rel("koyoharu-gotouge", "demon-slayer", "created", "Koyoharu Gotouge created Demon Slayer.", 0.99, 0.99);
rel("koyoharu-gotouge", "demon-slayer-manga", "created", "Gotouge wrote and drew the Demon Slayer manga.", 0.99, 0.98);
rel("ufotable", "demon-slayer-anime", "produced", "Ufotable produced the Demon Slayer anime.", 0.98, 0.96);

rel("demon-slayer-manga", "demon-slayer", "part_of", "The manga is the foundation of Demon Slayer.", 0.99, 0.99);
rel("demon-slayer-anime", "demon-slayer", "part_of", "The anime adapts Demon Slayer.", 0.98, 0.95);
rel("mugen-train", "demon-slayer", "part_of", "Mugen Train is part of Demon Slayer.", 0.98, 0.95);
rel("demon-slayer-manga", "demon-slayer-anime", "adapted_into", "The manga was adapted by Ufotable.", 0.97, 0.94);

rel("hashira", "demon-slayer-corps", "part_of", "The Hashira are the Corps' elite.", 0.99, 0.97);
rel("twelve-kizuki", "muzan-kibutsuji", "member_of", "The Twelve Kizuki serve Muzan.", 0.98, 0.96);
rel("demons", "muzan-kibutsuji", "connected_to", "Demons originate from Muzan's blood.", 0.99, 0.97);
rel("infinity-castle", "muzan-kibutsuji", "located_in", "The Infinity Castle is Muzan's domain.", 0.97, 0.94);
rel("demon-slayer-corps", "taisho-japan", "located_in", "The Corps operates in Taisho Japan.", 0.96, 0.92);

rel("tanjiro-kamado", "demon-slayer-corps", "member_of", "Tanjiro joins the Demon Slayer Corps.", 0.99, 0.98);
rel("zenitsu-agatsuma", "demon-slayer-corps", "member_of", "Zenitsu is a Demon Slayer.", 0.97, 0.94);
rel("inosuke-hashibira", "demon-slayer-corps", "member_of", "Inosuke is a Demon Slayer.", 0.97, 0.94);
rel("kyojuro-rengoku", "hashira", "member_of", "Rengoku is the Flame Hashira.", 0.99, 0.97);
rel("shinobu-kocho", "hashira", "member_of", "Shinobu is the Insect Hashira.", 0.99, 0.97);
rel("giyu-tomioka", "hashira", "member_of", "Giyu is the Water Hashira.", 0.99, 0.97);
rel("tengen-uzui", "hashira", "member_of", "Tengen is the Sound Hashira.", 0.98, 0.96);
rel("akaza", "twelve-kizuki", "member_of", "Akaza is Upper Rank Three.", 0.98, 0.96);

rel("nezuko-kamado", "tanjiro-kamado", "connected_to", "Nezuko is Tanjiro's sister.", 0.99, 0.98);
rel("nezuko-kamado", "demons", "connected_to", "Nezuko is a demon who resists killing humans.", 0.98, 0.96);
rel("giyu-tomioka", "tanjiro-kamado", "supports", "Giyu spares and guides Tanjiro.", 0.96, 0.92);
rel("sakonji-urokodaki", "tanjiro-kamado", "supports", "Urokodaki trains Tanjiro.", 0.97, 0.94);
rel("water-breathing", "breathing-styles", "part_of", "Water Breathing is a Breathing Style.", 0.98, 0.95);
rel("sun-breathing", "breathing-styles", "part_of", "Sun Breathing is the original Breathing Style.", 0.98, 0.95);
rel("thunder-breathing", "breathing-styles", "part_of", "Thunder Breathing is a Breathing Style.", 0.97, 0.94);
rel("water-breathing", "tanjiro-kamado", "uses", "Tanjiro uses Water Breathing.", 0.98, 0.95);
rel("thunder-breathing", "zenitsu-agatsuma", "uses", "Zenitsu uses Thunder Breathing.", 0.97, 0.94);
rel("nichirin-sword", "demon-slayer-corps", "uses", "Demon Slayers wield Nichirin Swords.", 0.98, 0.95);
rel("kyojuro-rengoku", "mugen-train", "involved", "Rengoku is central to the Mugen Train conflict.", 0.97, 0.94);
rel("akaza", "kyojuro-rengoku", "opposed_by", "Akaza fights Rengoku on the Mugen Train.", 0.97, 0.94);

module.exports = { entities, relationships };
