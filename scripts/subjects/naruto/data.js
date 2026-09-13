/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "naruto",
        "name": "Naruto",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Masashi Kishimoto's manga of ninjas, villages, and the Nine-Tails.",
        "description": "Naruto is the shonen manga and anime franchise by Masashi Kishimoto following Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno of Konoha — spanning Team 7, the Akatsuki, Sharingan, Rasengan, and Naruto Shippuden through Boruto.",
        "aliases": []
    },
    {
        "slug": "masashi-kishimoto",
        "name": "Masashi Kishimoto",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of Naruto.",
        "description": "Masashi Kishimoto created Naruto for Weekly Shonen Jump, writing and drawing the story of Naruto Uzumaki, Konohagakure, and the conflict of shinobi clans and tailed beasts.",
        "aliases": []
    },
    {
        "slug": "naruto-manga",
        "name": "Naruto (manga)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Original Kishimoto manga serialized in Jump.",
        "description": "The Naruto manga follows Naruto Uzumaki from academy graduate to Hokage, covering the Chunin Exams, Sasuke's defection, and the Fourth Great Ninja War.",
        "aliases": []
    },
    {
        "slug": "naruto-anime",
        "name": "Naruto (anime)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "First anime adaptation of Part I.",
        "description": "The Naruto anime adapts Part I of the manga, covering Team 7's early missions, the Chunin Exams, and the search for Tsunade.",
        "aliases": []
    },
    {
        "slug": "naruto-shippuden",
        "name": "Naruto: Shippuden",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Anime adapting Part II after the time skip.",
        "description": "Naruto: Shippuden adapts Part II, with Naruto's return, the Akatsuki's hunts, Itachi's truth, and the war against Madara and Kaguya.",
        "aliases": []
    },
    {
        "slug": "boruto-naruto-next-generations",
        "name": "Boruto: Naruto Next Generations",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Sequel focusing on Boruto Uzumaki.",
        "description": "Boruto: Naruto Next Generations follows Boruto Uzumaki and the next generation of Konoha shinobi after Naruto becomes Hokage.",
        "aliases": []
    },
    {
        "slug": "konohagakure",
        "name": "Konohagakure",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Hidden Leaf Village; home of Team 7.",
        "description": "Konohagakure (the Hidden Leaf) is Naruto Uzumaki's village, seat of the Hokage and home to Team 7, the Uchiha, and the Nine-Tails' sealing history.",
        "aliases": []
    },
    {
        "slug": "akatsuki",
        "name": "Akatsuki",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Rogue ninja organization hunting tailed beasts.",
        "description": "The Akatsuki is a cloaked criminal organization that hunts jinchuriki and bijuu, opposing Konoha and drawing in Itachi, Pain, and others.",
        "aliases": []
    },
    {
        "slug": "team-7",
        "name": "Team 7",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Kakashi's squad: Naruto, Sasuke, and Sakura.",
        "description": "Team 7 is the Konoha genin cell led by Kakashi Hatake, uniting Naruto Uzumaki, Sasuke Uchiha, and Sakura Haruno.",
        "aliases": []
    },
    {
        "slug": "uchiha-clan",
        "name": "Uchiha clan",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Clan of the Sharingan; Sasuke and Itachi's lineage.",
        "description": "The Uchiha clan of Konoha wields the Sharingan; its tragedy shapes Sasuke Uchiha, Itachi Uchiha, and Madara Uchiha.",
        "aliases": []
    },
    {
        "slug": "senju-clan",
        "name": "Senju clan",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Clan of Hashirama; founders alongside the Uchiha.",
        "description": "The Senju clan, led historically by Hashirama Senju, helped found Konohagakure with the Uchiha and defined early Hokage lineage.",
        "aliases": []
    },
    {
        "slug": "hokage",
        "name": "Hokage",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Leader of Konohagakure.",
        "description": "The Hokage is the Kage of the Hidden Leaf — a title held by Hashirama, Hiruzen, Minato, Tsunade, Kakashi, and later Naruto Uzumaki.",
        "aliases": []
    },
    {
        "slug": "chakra",
        "name": "Chakra",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Life energy that fuels ninjutsu and genjutsu.",
        "description": "Chakra is the energy shinobi mold for techniques, combining physical and spiritual energy in jutsu like the Rasengan and Sharingan arts.",
        "aliases": []
    },
    {
        "slug": "rasengan",
        "name": "Rasengan",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Spiraling chakra sphere created by Minato.",
        "description": "The Rasengan is a formless spinning chakra orb taught to Naruto Uzumaki via Jiraiya, later evolving into Rasenshuriken variants.",
        "aliases": []
    },
    {
        "slug": "sharingan",
        "name": "Sharingan",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Uchiha dojutsu of copy and insight.",
        "description": "The Sharingan is the Uchiha clan's eye technique, used by Sasuke, Itachi, and Madara for genjutsu, prediction, and evolving into Mangekyo forms.",
        "aliases": []
    },
    {
        "slug": "nine-tails",
        "name": "Nine-Tails",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Kurama; the fox sealed in Naruto.",
        "description": "The Nine-Tails (Kurama) is the most powerful tailed beast, sealed into Naruto Uzumaki and later allied with him against greater threats.",
        "aliases": []
    },
    {
        "slug": "tailed-beasts",
        "name": "Tailed beasts",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Bijuu hunted by the Akatsuki.",
        "description": "The tailed beasts (bijuu) are chakra monsters from the Ten-Tails, including the Nine-Tails, central to Akatsuki's capture plans and the war.",
        "aliases": []
    },
    {
        "slug": "jinchuriki",
        "name": "Jinchuriki",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Hosts who seal tailed beasts within themselves.",
        "description": "Jinchuriki are humans who host tailed beasts — Naruto with the Nine-Tails, Gaara with Shukaku — often feared by their villages.",
        "aliases": []
    },
    {
        "slug": "naruto-uzumaki",
        "name": "Naruto Uzumaki",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Jinchuriki hero who becomes Hokage.",
        "description": "Naruto Uzumaki is the loud, determined host of the Nine-Tails who trains under Jiraiya and Kakashi, befriends Sasuke and Sakura, and rises toward Hokage.",
        "aliases": []
    },
    {
        "slug": "sasuke-uchiha",
        "name": "Sasuke Uchiha",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Last loyal son of the Uchiha seeking power.",
        "description": "Sasuke Uchiha is Naruto's rival on Team 7, an Uchiha avenger who leaves Konoha, masters the Sharingan, and confronts Itachi and Madara's legacy.",
        "aliases": []
    },
    {
        "slug": "sakura-haruno",
        "name": "Sakura Haruno",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Team 7 kunoichi; medical ninja under Tsunade.",
        "description": "Sakura Haruno is Team 7's kunoichi who trains with Tsunade, becoming a medical ninja and pillar beside Naruto and Sasuke.",
        "aliases": []
    },
    {
        "slug": "kakashi-hatake",
        "name": "Kakashi Hatake",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Copy Ninja; sensei of Team 7.",
        "description": "Kakashi Hatake is the Sharingan-bearing jonin who leads Team 7, teaches the Chidori lineage of tactics, and later serves as Hokage.",
        "aliases": []
    },
    {
        "slug": "itachi-uchiha",
        "name": "Itachi Uchiha",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Akatsuki member; Sasuke's older brother.",
        "description": "Itachi Uchiha massacres the Uchiha clan under hidden orders, joins the Akatsuki, and shapes Sasuke's path through sacrifice and truth.",
        "aliases": []
    },
    {
        "slug": "madara-uchiha",
        "name": "Madara Uchiha",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Legendary Uchiha co-founder turned war architect.",
        "description": "Madara Uchiha co-founds Konoha with Hashirama, later schemes through the Akatsuki and the Eye of the Moon plan against the shinobi world.",
        "aliases": []
    },
    {
        "slug": "hashirama-senju",
        "name": "Hashirama Senju",
        "type": "person",
        "evidence": "fiction",
        "short_description": "First Hokage; Senju founder of Konoha.",
        "description": "Hashirama Senju is the First Hokage, a Senju of unmatched Wood Release who builds Konohagakure with and against Madara Uchiha.",
        "aliases": []
    },
    {
        "slug": "jiraiya",
        "name": "Jiraiya",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Toad sage; Naruto's mentor among the Sannin.",
        "description": "Jiraiya is one of the Legendary Sannin who trains Naruto Uzumaki, investigates the Akatsuki, and writes of the Child of Prophecy.",
        "aliases": []
    },
    {
        "slug": "orochimaru",
        "name": "Orochimaru",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Sannin rogue obsessed with immortality and jutsu.",
        "description": "Orochimaru is a Legendary Sannin who defects from Konoha, marks Sasuke, and pursues forbidden experiments across the shinobi world.",
        "aliases": []
    },
    {
        "slug": "tsunade",
        "name": "Tsunade",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Fifth Hokage; medical ninja of the Sannin.",
        "description": "Tsunade is a Legendary Sannin and Fifth Hokage who rebuilds Konoha's medical corps and trains Sakura Haruno.",
        "aliases": []
    },
    {
        "slug": "minato-namikaze",
        "name": "Minato Namikaze",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Fourth Hokage; creator of the Rasengan.",
        "description": "Minato Namikaze, the Yellow Flash, is Naruto's father, Fourth Hokage, and creator of the Rasengan who sealed the Nine-Tails.",
        "aliases": []
    },
    {
        "slug": "gaara",
        "name": "Gaara",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Kazekage; former one-tail jinchuriki.",
        "description": "Gaara of the Sand begins as a feared jinchuriki rival to Naruto, then becomes Kazekage and an ally of Konoha.",
        "aliases": []
    },
    {
        "slug": "hinata-hyuga",
        "name": "Hinata Hyuga",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Hyuga heiress devoted to Naruto.",
        "description": "Hinata Hyuga is a Byakugan user of Konoha's Hyuga clan who supports Naruto Uzumaki from the academy through the war.",
        "aliases": []
    },
    {
        "slug": "pain",
        "name": "Pain",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Akatsuki leader who attacks Konoha.",
        "description": "Pain (Nagato) leads the Akatsuki with the Rinnegan, destroys Konoha in a major assault, and confronts Naruto over cycles of hatred.",
        "aliases": []
    },
    {
        "slug": "boruto-uzumaki",
        "name": "Boruto Uzumaki",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Naruto's son in the sequel era.",
        "description": "Boruto Uzumaki is Naruto and Hinata's son, a new-generation shinobi at the center of Boruto: Naruto Next Generations.",
        "aliases": []
    },
    {
        "slug": "shikamaru-nara",
        "name": "Shikamaru Nara",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Strategist of the Nara clan; Naruto's advisor.",
        "description": "Shikamaru Nara is a shadow-jutsu genius of Konoha who becomes a key tactician and later aide in Naruto's Hokage era.",
        "aliases": []
    },
    {
        "slug": "naruto-figures",
        "name": "Naruto figures",
        "type": "topic",
        "short_description": "People and named forces central to Naruto.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Naruto."
    },
    {
        "slug": "naruto-places",
        "name": "Naruto places",
        "type": "place",
        "short_description": "Locations and geographies that frame Naruto.",
        "description": "Places, regions, and built sites that give Naruto its map — where events and figures concentrate."
    },
    {
        "slug": "naruto-events",
        "name": "Naruto events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Naruto.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Naruto timeline."
    },
    {
        "slug": "naruto-objects",
        "name": "Naruto objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Naruto.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Naruto."
    },
    {
        "slug": "naruto-factions",
        "name": "Naruto factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Naruto.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Naruto."
    },
    {
        "slug": "naruto-concepts",
        "name": "Naruto concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Naruto.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Naruto readable as a lore graph."
    }
];

const relationships = [
    [
        "masashi-kishimoto",
        "naruto",
        "created",
        "Masashi Kishimoto created Naruto.",
        0.99,
        0.99
    ],
    [
        "masashi-kishimoto",
        "naruto-manga",
        "created",
        "Kishimoto wrote and drew the Naruto manga.",
        0.99,
        0.98
    ],
    [
        "naruto-manga",
        "naruto",
        "part_of",
        "The manga is the foundation of Naruto.",
        0.99,
        0.99
    ],
    [
        "naruto-anime",
        "naruto",
        "part_of",
        "The anime adapts Naruto.",
        0.98,
        0.95
    ],
    [
        "naruto-shippuden",
        "naruto",
        "part_of",
        "Shippuden continues the Naruto anime.",
        0.98,
        0.96
    ],
    [
        "boruto-naruto-next-generations",
        "naruto",
        "part_of",
        "Boruto continues the Naruto franchise.",
        0.96,
        0.92
    ],
    [
        "naruto-manga",
        "naruto-shippuden",
        "adapted_into",
        "Part II was adapted as Naruto Shippuden.",
        0.97,
        0.94
    ],
    [
        "team-7",
        "konohagakure",
        "located_in",
        "Team 7 is a Konoha squad.",
        0.98,
        0.95
    ],
    [
        "hokage",
        "konohagakure",
        "located_in",
        "The Hokage leads Konohagakure.",
        0.99,
        0.97
    ],
    [
        "uchiha-clan",
        "konohagakure",
        "located_in",
        "The Uchiha clan is of Konoha.",
        0.97,
        0.94
    ],
    [
        "naruto-uzumaki",
        "team-7",
        "member_of",
        "Naruto is on Team 7.",
        0.99,
        0.98
    ],
    [
        "sasuke-uchiha",
        "team-7",
        "member_of",
        "Sasuke is on Team 7.",
        0.99,
        0.98
    ],
    [
        "sakura-haruno",
        "team-7",
        "member_of",
        "Sakura is on Team 7.",
        0.99,
        0.98
    ],
    [
        "kakashi-hatake",
        "team-7",
        "leads",
        "Kakashi leads Team 7.",
        0.99,
        0.98
    ],
    [
        "itachi-uchiha",
        "akatsuki",
        "member_of",
        "Itachi joins the Akatsuki.",
        0.98,
        0.96
    ],
    [
        "pain",
        "akatsuki",
        "leads",
        "Pain leads the Akatsuki.",
        0.97,
        0.94
    ],
    [
        "sasuke-uchiha",
        "uchiha-clan",
        "member_of",
        "Sasuke is an Uchiha.",
        0.99,
        0.97
    ],
    [
        "madara-uchiha",
        "uchiha-clan",
        "member_of",
        "Madara is an Uchiha.",
        0.98,
        0.96
    ],
    [
        "hashirama-senju",
        "senju-clan",
        "member_of",
        "Hashirama is a Senju.",
        0.98,
        0.95
    ],
    [
        "hashirama-senju",
        "hokage",
        "connected_to",
        "Hashirama is the First Hokage.",
        0.98,
        0.96
    ],
    [
        "minato-namikaze",
        "hokage",
        "connected_to",
        "Minato is the Fourth Hokage.",
        0.98,
        0.96
    ],
    [
        "nine-tails",
        "naruto-uzumaki",
        "connected_to",
        "Kurama is sealed within Naruto.",
        0.99,
        0.98
    ],
    [
        "naruto-uzumaki",
        "jinchuriki",
        "connected_to",
        "Naruto is a jinchuriki.",
        0.99,
        0.97
    ],
    [
        "nine-tails",
        "tailed-beasts",
        "part_of",
        "The Nine-Tails is a tailed beast.",
        0.98,
        0.96
    ],
    [
        "akatsuki",
        "tailed-beasts",
        "opposed_by",
        "The Akatsuki hunts the tailed beasts.",
        0.97,
        0.94
    ],
    [
        "rasengan",
        "minato-namikaze",
        "created",
        "Minato created the Rasengan.",
        0.98,
        0.95
    ],
    [
        "rasengan",
        "naruto-uzumaki",
        "uses",
        "Naruto masters the Rasengan.",
        0.98,
        0.96
    ],
    [
        "sharingan",
        "uchiha-clan",
        "connected_to",
        "The Sharingan belongs to the Uchiha.",
        0.99,
        0.97
    ],
    [
        "jiraiya",
        "naruto-uzumaki",
        "supports",
        "Jiraiya mentors Naruto.",
        0.98,
        0.95
    ],
    [
        "naruto-uzumaki",
        "sasuke-uchiha",
        "connected_to",
        "Naruto and Sasuke are rivals and bonds.",
        0.99,
        0.98
    ],
    [
        "boruto-uzumaki",
        "naruto-uzumaki",
        "connected_to",
        "Boruto is Naruto's son.",
        0.97,
        0.94
    ],
    [
        "naruto",
        "naruto-figures",
        "contains",
        "Naruto figures is a primary trailhead under Naruto.",
        0.88,
        0.82
    ],
    [
        "naruto",
        "naruto-places",
        "contains",
        "Naruto places is a primary trailhead under Naruto.",
        0.88,
        0.82
    ],
    [
        "naruto",
        "naruto-events",
        "contains",
        "Naruto events is a primary trailhead under Naruto.",
        0.88,
        0.82
    ],
    [
        "naruto",
        "naruto-objects",
        "contains",
        "Naruto objects & artifacts is a primary trailhead under Naruto.",
        0.88,
        0.82
    ],
    [
        "naruto",
        "naruto-factions",
        "contains",
        "Naruto factions & groups is a primary trailhead under Naruto.",
        0.88,
        0.82
    ],
    [
        "naruto",
        "naruto-concepts",
        "contains",
        "Naruto concepts is a primary trailhead under Naruto.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
