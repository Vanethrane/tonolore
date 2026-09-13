/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "attack-on-titan",
        "name": "Attack on Titan",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Hajime Isayama's manga and anime of Titans, Walls, and Paradis.",
        "description": "Attack on Titan (Shingeki no Kyojin) is Hajime Isayama's dark fantasy about humanity behind Walls Maria, Rose, and Sina, the Survey Corps' war against Titans, and the wider conflict between Paradis and Marley.",
        "aliases": []
    },
    {
        "slug": "hajime-isayama",
        "name": "Hajime Isayama",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of Attack on Titan.",
        "description": "Hajime Isayama created Attack on Titan, writing and drawing the manga that follows Eren Yeager, the Survey Corps, and the mystery of the Titans.",
        "aliases": []
    },
    {
        "slug": "kodansha",
        "name": "Kodansha",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher of the Attack on Titan manga.",
        "description": "Kodansha published Attack on Titan in Bessatsu Shōnen Magazine and collected the series in tankōbon volumes.",
        "aliases": []
    },
    {
        "slug": "attack-on-titan-manga",
        "name": "Attack on Titan (manga)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "The original manga series by Hajime Isayama.",
        "description": "The Attack on Titan manga serializes the fall of Wall Maria, the Survey Corps' campaigns, the Founding Titan's power, and the war between Paradis and Marley.",
        "aliases": []
    },
    {
        "slug": "attack-on-titan-anime",
        "name": "Attack on Titan (anime)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Anime adaptation of Isayama's manga.",
        "description": "The Attack on Titan anime adapts the manga across multiple seasons, covering the Walls, the Survey Corps, and the Marley conflict.",
        "aliases": []
    },
    {
        "slug": "eren-yeager",
        "name": "Eren Yeager",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Protagonist and holder of the Attack Titan.",
        "description": "Eren Yeager is a youth from Shiganshina who vows to destroy the Titans after Wall Maria falls, later inheriting the Attack Titan and driving the story's darkest turns.",
        "aliases": []
    },
    {
        "slug": "mikasa-ackerman",
        "name": "Mikasa Ackerman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Elite soldier fiercely loyal to Eren.",
        "description": "Mikasa Ackerman is Eren's adoptive sister and one of the Survey Corps' strongest fighters, bound by loyalty and the Ackerman lineage.",
        "aliases": []
    },
    {
        "slug": "armin-arlert",
        "name": "Armin Arlert",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Strategist of the Survey Corps; later Colossal Titan.",
        "description": "Armin Arlert is Eren and Mikasa's childhood friend whose intellect guides the Survey Corps and who later inherits the Colossal Titan.",
        "aliases": []
    },
    {
        "slug": "levi-ackerman",
        "name": "Levi Ackerman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Humanity's strongest soldier.",
        "description": "Levi Ackerman is a Survey Corps captain renowned as humanity's strongest soldier, leading Special Operations against Titans and Marley.",
        "aliases": []
    },
    {
        "slug": "erwin-smith",
        "name": "Erwin Smith",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Commander of the Survey Corps.",
        "description": "Erwin Smith commands the Survey Corps with ruthless resolve, gambling lives to uncover the truth beyond the Walls.",
        "aliases": []
    },
    {
        "slug": "hange-zoe",
        "name": "Hange Zoë",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Titan researcher and later Survey Corps commander.",
        "description": "Hange Zoë studies Titans with obsessive curiosity and later succeeds Erwin as Survey Corps commander.",
        "aliases": []
    },
    {
        "slug": "zeke-yeager",
        "name": "Zeke Yeager",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Beast Titan; Eren's half-brother.",
        "description": "Zeke Yeager is the Beast Titan and Eren's half-brother from Marley, whose royal blood and plans reshape the war over the Founding Titan.",
        "aliases": []
    },
    {
        "slug": "reiner-braun",
        "name": "Reiner Braun",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Armored Titan and Marley Warrior.",
        "description": "Reiner Braun is a Marley Warrior who infiltrates Paradis as the Armored Titan while torn between identities.",
        "aliases": []
    },
    {
        "slug": "annie-leonhart",
        "name": "Annie Leonhart",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Female Titan and Marley Warrior.",
        "description": "Annie Leonhart is the Female Titan, a Marley Warrior sent to Paradis who clashes with the Survey Corps in Stohess and beyond.",
        "aliases": []
    },
    {
        "slug": "bertholdt-hoover",
        "name": "Bertholdt Hoover",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Colossal Titan and Marley Warrior.",
        "description": "Bertholdt Hoover is the Colossal Titan who breaches Wall Maria and later fights the Survey Corps alongside Reiner.",
        "aliases": []
    },
    {
        "slug": "historia-reiss",
        "name": "Historia Reiss",
        "type": "person",
        "evidence": "fiction",
        "short_description": "True heir of the Reiss royal line; later queen.",
        "description": "Historia Reiss, once known as Christa Lenz, is the rightful heir of Wall Sina's royal blood and becomes queen of Paradis.",
        "aliases": []
    },
    {
        "slug": "jean-kirschtein",
        "name": "Jean Kirstein",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Survey Corps soldier and reluctant leader.",
        "description": "Jean Kirstein joins the Survey Corps after training, growing from self-preservation into a reliable field leader.",
        "aliases": []
    },
    {
        "slug": "sasha-blouse",
        "name": "Sasha Blouse",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Survey Corps sharpshooter from a hunting village.",
        "description": "Sasha Blouse is a Survey Corps soldier known for her hunting skill, appetite, and loyalty to her comrades.",
        "aliases": []
    },
    {
        "slug": "connie-springer",
        "name": "Connie Springer",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Survey Corps soldier from Ragako.",
        "description": "Connie Springer fights with the Survey Corps after discovering his village's fate tied to Titan transformations.",
        "aliases": []
    },
    {
        "slug": "titans",
        "name": "Titans",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Giant humanoids that devour humans.",
        "description": "Titans are giant humanoid creatures that prey on humans; many are transformed Eldians, while Nine Titans hold unique powers.",
        "aliases": []
    },
    {
        "slug": "founding-titan",
        "name": "Founding Titan",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Progenitor Titan able to command Subjects of Ymir.",
        "description": "The Founding Titan can alter memories and bodies of Subjects of Ymir and command Titans when paired with royal blood.",
        "aliases": []
    },
    {
        "slug": "attack-titan",
        "name": "Attack Titan",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Titan that always moves forward; held by Eren.",
        "description": "The Attack Titan is one of the Nine Titans, said to always strive for freedom, and is inherited by Eren Yeager.",
        "aliases": []
    },
    {
        "slug": "paths",
        "name": "Paths",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Metaphysical connection binding Subjects of Ymir.",
        "description": "Paths link all Subjects of Ymir across time, enabling the Founding Titan's power and the inheritance of Titan abilities.",
        "aliases": []
    },
    {
        "slug": "paradis",
        "name": "Paradis Island",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Island nation behind the Walls.",
        "description": "Paradis Island holds the Walls and the Eldian remnant Marley calls island devils, central to the Founding Titan's history.",
        "aliases": []
    },
    {
        "slug": "marley",
        "name": "Marley",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Continental power that oppresses Eldians.",
        "description": "Marley is a militarized nation that uses Eldian Warriors as Titans and wages war to seize the Founding Titan from Paradis.",
        "aliases": []
    },
    {
        "slug": "wall-maria",
        "name": "Wall Maria",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Outermost of the three Walls.",
        "description": "Wall Maria is the outermost Wall; its breach by the Colossal Titan forces humanity into Wall Rose.",
        "aliases": []
    },
    {
        "slug": "wall-rose",
        "name": "Wall Rose",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Middle Wall protecting inland districts.",
        "description": "Wall Rose is the middle defensive Wall where survivors retreat after Wall Maria falls.",
        "aliases": []
    },
    {
        "slug": "wall-sina",
        "name": "Wall Sina",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Innermost Wall around the royal capital.",
        "description": "Wall Sina is the innermost Wall enclosing the capital and the privileged core of Paradis society.",
        "aliases": []
    },
    {
        "slug": "shiganshina",
        "name": "Shiganshina District",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Southern district on Wall Maria; Eren's hometown.",
        "description": "Shiganshina District on Wall Maria is where Eren, Mikasa, and Armin grow up, and where the Colossal Titan first breaches the Wall.",
        "aliases": []
    },
    {
        "slug": "survey-corps",
        "name": "Survey Corps",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Military branch that explores beyond the Walls.",
        "description": "The Survey Corps (Scout Regiment) ventures beyond the Walls to study Titans and reclaim land, led by figures like Erwin, Hange, and Levi.",
        "aliases": []
    },
    {
        "slug": "military-police",
        "name": "Military Police Brigade",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Inner-Wall police protecting the monarchy.",
        "description": "The Military Police Brigade polices Wall Sina and the royal order, often clashing with Survey Corps goals.",
        "aliases": []
    },
    {
        "slug": "warrior-unit",
        "name": "Marley Warrior Unit",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Eldian child soldiers given Titan powers.",
        "description": "Marley's Warrior Unit trains Eldian children as Titan holders—including Reiner, Annie, Bertholdt, and Zeke—to seize Paradis.",
        "aliases": []
    },
    {
        "slug": "attack-on-titan-figures",
        "name": "Attack on Titan figures",
        "type": "topic",
        "short_description": "People and named forces central to Attack on Titan.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Attack on Titan."
    },
    {
        "slug": "attack-on-titan-places",
        "name": "Attack on Titan places",
        "type": "place",
        "short_description": "Locations and geographies that frame Attack on Titan.",
        "description": "Places, regions, and built sites that give Attack on Titan its map — where events and figures concentrate."
    },
    {
        "slug": "attack-on-titan-events",
        "name": "Attack on Titan events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Attack on Titan.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Attack on Titan timeline."
    },
    {
        "slug": "attack-on-titan-objects",
        "name": "Attack on Titan objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Attack on Titan.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Attack on Titan."
    },
    {
        "slug": "attack-on-titan-factions",
        "name": "Attack on Titan factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Attack on Titan.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Attack on Titan."
    },
    {
        "slug": "attack-on-titan-concepts",
        "name": "Attack on Titan concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Attack on Titan.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Attack on Titan readable as a lore graph."
    },
    {
        "slug": "attack-on-titan-eras",
        "name": "Attack on Titan eras",
        "type": "event",
        "short_description": "Periodization for Attack on Titan.",
        "description": "Named eras and phases that help readers track how Attack on Titan changes across time."
    },
    {
        "slug": "attack-on-titan-works",
        "name": "Attack on Titan works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Attack on Titan.",
        "description": "Primary works and adaptations through which most audiences encounter Attack on Titan."
    }
];

const relationships = [
    [
        "hajime-isayama",
        "attack-on-titan",
        "created",
        "Hajime Isayama created Attack on Titan.",
        0.99,
        0.99
    ],
    [
        "hajime-isayama",
        "attack-on-titan-manga",
        "created",
        "Isayama wrote and drew the Attack on Titan manga.",
        0.99,
        0.98
    ],
    [
        "kodansha",
        "attack-on-titan-manga",
        "produced",
        "Kodansha published the Attack on Titan manga.",
        0.97,
        0.94
    ],
    [
        "attack-on-titan-manga",
        "attack-on-titan",
        "part_of",
        "The manga is the foundation of Attack on Titan.",
        0.99,
        0.99
    ],
    [
        "attack-on-titan-anime",
        "attack-on-titan",
        "part_of",
        "The anime adapts Attack on Titan.",
        0.98,
        0.96
    ],
    [
        "attack-on-titan-manga",
        "attack-on-titan-anime",
        "adapted_into",
        "The manga was adapted into the anime.",
        0.97,
        0.95
    ],
    [
        "eren-yeager",
        "attack-titan",
        "uses",
        "Eren inherits and uses the Attack Titan.",
        0.99,
        0.97
    ],
    [
        "eren-yeager",
        "founding-titan",
        "uses",
        "Eren later wields the Founding Titan.",
        0.98,
        0.96
    ],
    [
        "eren-yeager",
        "survey-corps",
        "member_of",
        "Eren joins the Survey Corps.",
        0.97,
        0.94
    ],
    [
        "mikasa-ackerman",
        "survey-corps",
        "member_of",
        "Mikasa serves in the Survey Corps.",
        0.97,
        0.94
    ],
    [
        "armin-arlert",
        "survey-corps",
        "member_of",
        "Armin serves in the Survey Corps.",
        0.97,
        0.94
    ],
    [
        "levi-ackerman",
        "survey-corps",
        "member_of",
        "Levi is a Survey Corps captain.",
        0.99,
        0.97
    ],
    [
        "erwin-smith",
        "survey-corps",
        "leads",
        "Erwin commands the Survey Corps.",
        0.99,
        0.97
    ],
    [
        "hange-zoe",
        "survey-corps",
        "leads",
        "Hange later commands the Survey Corps.",
        0.97,
        0.94
    ],
    [
        "zeke-yeager",
        "warrior-unit",
        "member_of",
        "Zeke leads Marley's Warriors as Beast Titan.",
        0.97,
        0.94
    ],
    [
        "reiner-braun",
        "warrior-unit",
        "member_of",
        "Reiner is a Marley Warrior.",
        0.98,
        0.95
    ],
    [
        "annie-leonhart",
        "warrior-unit",
        "member_of",
        "Annie is a Marley Warrior.",
        0.98,
        0.95
    ],
    [
        "bertholdt-hoover",
        "warrior-unit",
        "member_of",
        "Bertholdt is a Marley Warrior.",
        0.98,
        0.95
    ],
    [
        "historia-reiss",
        "wall-sina",
        "connected_to",
        "Historia is heir to the royal line within Wall Sina.",
        0.96,
        0.92
    ],
    [
        "titans",
        "attack-on-titan",
        "part_of",
        "Titans define Attack on Titan's threat.",
        0.99,
        0.97
    ],
    [
        "founding-titan",
        "titans",
        "part_of",
        "The Founding Titan is among the Nine Titans.",
        0.98,
        0.95
    ],
    [
        "attack-titan",
        "titans",
        "part_of",
        "The Attack Titan is one of the Nine Titans.",
        0.98,
        0.95
    ],
    [
        "paths",
        "founding-titan",
        "connected_to",
        "Paths enable the Founding Titan's power.",
        0.96,
        0.92
    ],
    [
        "wall-maria",
        "paradis",
        "located_in",
        "Wall Maria encircles outer Paradis.",
        0.98,
        0.95
    ],
    [
        "wall-rose",
        "paradis",
        "located_in",
        "Wall Rose stands within Paradis.",
        0.98,
        0.95
    ],
    [
        "wall-sina",
        "paradis",
        "located_in",
        "Wall Sina is the innermost Wall on Paradis.",
        0.98,
        0.95
    ],
    [
        "shiganshina",
        "wall-maria",
        "located_in",
        "Shiganshina sits on Wall Maria.",
        0.99,
        0.97
    ],
    [
        "survey-corps",
        "paradis",
        "located_in",
        "The Survey Corps operates from Paradis.",
        0.96,
        0.92
    ],
    [
        "warrior-unit",
        "marley",
        "member_of",
        "The Warrior Unit serves Marley.",
        0.97,
        0.94
    ],
    [
        "eren-yeager",
        "mikasa-ackerman",
        "supports",
        "Mikasa protects and stays beside Eren.",
        0.97,
        0.94
    ],
    [
        "eren-yeager",
        "armin-arlert",
        "supports",
        "Armin and Eren share a lifelong bond.",
        0.97,
        0.94
    ],
    [
        "eren-yeager",
        "zeke-yeager",
        "connected_to",
        "Eren and Zeke are half-brothers.",
        0.98,
        0.95
    ],
    [
        "bertholdt-hoover",
        "wall-maria",
        "involved",
        "Bertholdt's Colossal Titan breaches Wall Maria.",
        0.98,
        0.96
    ],
    [
        "attack-on-titan",
        "attack-on-titan-figures",
        "contains",
        "Attack on Titan figures is a primary trailhead under Attack on Titan.",
        0.88,
        0.82
    ],
    [
        "attack-on-titan",
        "attack-on-titan-places",
        "contains",
        "Attack on Titan places is a primary trailhead under Attack on Titan.",
        0.88,
        0.82
    ],
    [
        "attack-on-titan",
        "attack-on-titan-events",
        "contains",
        "Attack on Titan events is a primary trailhead under Attack on Titan.",
        0.88,
        0.82
    ],
    [
        "attack-on-titan",
        "attack-on-titan-objects",
        "contains",
        "Attack on Titan objects & artifacts is a primary trailhead under Attack on Titan.",
        0.88,
        0.82
    ],
    [
        "attack-on-titan",
        "attack-on-titan-factions",
        "contains",
        "Attack on Titan factions & groups is a primary trailhead under Attack on Titan.",
        0.88,
        0.82
    ],
    [
        "attack-on-titan",
        "attack-on-titan-concepts",
        "contains",
        "Attack on Titan concepts is a primary trailhead under Attack on Titan.",
        0.88,
        0.82
    ],
    [
        "attack-on-titan",
        "attack-on-titan-eras",
        "contains",
        "Attack on Titan eras is a primary trailhead under Attack on Titan.",
        0.88,
        0.82
    ],
    [
        "attack-on-titan",
        "attack-on-titan-works",
        "contains",
        "Attack on Titan works & media is a primary trailhead under Attack on Titan.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
