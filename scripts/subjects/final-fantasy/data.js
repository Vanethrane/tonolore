/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "final-fantasy",
        "name": "Final Fantasy",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Square Enix's landmark Japanese RPG franchise.",
        "description": "Final Fantasy is Square Enix's long-running RPG series spanning standalone and connected worlds, crystals, chocobos, and iconic heroes from the first Warrior of Light to Cloud, Terra, Tidus, and Eorzea.",
        "aliases": []
    },
    {
        "slug": "square-enix",
        "name": "Square Enix",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher of Final Fantasy.",
        "description": "Square Enix publishes Final Fantasy, succeeding Square Soft after the Square–Enix merger and stewarding remakes, MMOs, and spin-offs.",
        "aliases": []
    },
    {
        "slug": "hironobu-sakaguchi",
        "name": "Hironobu Sakaguchi",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of Final Fantasy.",
        "description": "Hironobu Sakaguchi created Final Fantasy at Square, directing early entries and shaping the series' identity before later founding Mistwalker.",
        "aliases": []
    },
    {
        "slug": "nobuo-uematsu",
        "name": "Nobuo Uematsu",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Composer of classic Final Fantasy scores.",
        "description": "Nobuo Uematsu composed many defining Final Fantasy soundtracks, from the original theme to Final Fantasy VII, X, and beyond.",
        "aliases": []
    },
    {
        "slug": "crystal-ff",
        "name": "Crystals",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Elemental crystals recurring across the series.",
        "description": "Crystals—often of earth, fire, water, and wind—anchor many Final Fantasy worlds as sources of balance, power, and prophecy.",
        "aliases": []
    },
    {
        "slug": "chaos-ff",
        "name": "Chaos",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Recurring force of disorder opposed to harmony.",
        "description": "Chaos appears across Final Fantasy as an elemental antagonist or cosmic opposite to order, most famously as the final foe of the first game.",
        "aliases": []
    },
    {
        "slug": "chocobo",
        "name": "Chocobo",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Iconic riding bird of Final Fantasy.",
        "description": "Chocobos are yellow riding birds used for travel, racing, and breeding minigames across nearly every Final Fantasy title.",
        "aliases": []
    },
    {
        "slug": "moogle",
        "name": "Moogle",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Cute companion creatures saying 'kupo'.",
        "description": "Moogles are small winged creatures who serve as merchants, messengers, and mascots throughout the Final Fantasy series.",
        "aliases": []
    },
    {
        "slug": "summons-ff",
        "name": "Summons",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Eidolons, Espers, and Aeons called in battle.",
        "description": "Summons—Espers, Eidolons, Aeons, Primals—are powerful beings called into battle, from Ifrit and Shiva to Knights of the Round.",
        "aliases": []
    },
    {
        "slug": "airship-ff",
        "name": "Airship",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Flying ships that define late-game travel.",
        "description": "Airships are signature vehicles of Final Fantasy, unlocking exploration and often tied to engineers named Cid.",
        "aliases": []
    },
    {
        "slug": "cid-ff",
        "name": "Cid",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Recurring engineer and airship pioneer.",
        "description": "Cid is a recurring Final Fantasy name for inventors and airship captains who enable the party's flight across each world.",
        "aliases": []
    },
    {
        "slug": "warrior-of-light",
        "name": "Warrior of Light",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Archetypal heroes of early Final Fantasy.",
        "description": "Warriors of Light are crystal-chosen heroes of early Final Fantasy tales, later echoed by nameless protagonists in Final Fantasy XIV.",
        "aliases": []
    },
    {
        "slug": "final-fantasy-vii",
        "name": "Final Fantasy VII",
        "type": "work",
        "evidence": "fiction",
        "short_description": "1997 RPG of Avalanche, Shinra, and Sephiroth.",
        "description": "Final Fantasy VII follows Cloud Strife and Avalanche against the Shinra Electric Power Company and Sephiroth in a world of mako, materia, and the Lifestream.",
        "aliases": []
    },
    {
        "slug": "cloud-strife",
        "name": "Cloud Strife",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Protagonist of Final Fantasy VII.",
        "description": "Cloud Strife is a mercenary ex-SOLDIER who joins Avalanche, wields the Buster Sword, and confronts Sephiroth over identity and Jenova.",
        "aliases": []
    },
    {
        "slug": "sephiroth",
        "name": "Sephiroth",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Fallen SOLDIER and chief antagonist of VII.",
        "description": "Sephiroth is Shinra's legendary SOLDIER who, after learning of Jenova, seeks to wound the planet and become a god via the Lifestream.",
        "aliases": []
    },
    {
        "slug": "aerith-gainsborough",
        "name": "Aerith Gainsborough",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Last Cetra; flower girl of Midgar.",
        "description": "Aerith Gainsborough is the last of the Cetra, a healer tied to the planet who allies with Cloud against Sephiroth and Shinra.",
        "aliases": []
    },
    {
        "slug": "tifa-lockhart",
        "name": "Tifa Lockhart",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Avalanche fighter and Cloud's childhood friend.",
        "description": "Tifa Lockhart runs Seventh Heaven, fights for Avalanche, and anchors Cloud's memories through the journey beyond Midgar.",
        "aliases": []
    },
    {
        "slug": "midgar",
        "name": "Midgar",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Industrial mega-city of Shinra.",
        "description": "Midgar is Shinra's plate city that drains mako from the planet, home to the slums, Avalanche's resistance, and the start of Final Fantasy VII.",
        "aliases": []
    },
    {
        "slug": "shinra",
        "name": "Shinra Electric Power Company",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Megacorporation ruling Midgar.",
        "description": "Shinra dominates the world of Final Fantasy VII through mako reactors, SOLDIER, and political control centered on Midgar.",
        "aliases": []
    },
    {
        "slug": "lifestream",
        "name": "Lifestream",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Planet's spiritual energy and afterlife flow.",
        "description": "The Lifestream is the planet's circulating spiritual energy in Final Fantasy VII, source of mako and the battlefield of Sephiroth's ambition.",
        "aliases": []
    },
    {
        "slug": "materia",
        "name": "Materia",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Crystallized mako that grants magic and summons.",
        "description": "Materia are crystallized condensations of the Lifestream that let characters cast magic, summon, and enhance abilities in Final Fantasy VII.",
        "aliases": []
    },
    {
        "slug": "jenova",
        "name": "Jenova",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Calamity from the skies behind Sephiroth.",
        "description": "Jenova is an extraterrestrial calamity whose cells drive Shinra experiments and Sephiroth's delusions of being the chosen one.",
        "aliases": []
    },
    {
        "slug": "final-fantasy-vi",
        "name": "Final Fantasy VI",
        "type": "work",
        "evidence": "fiction",
        "short_description": "1994 RPG of Espers, the Empire, and Kefka.",
        "description": "Final Fantasy VI follows Terra Branford and a large cast against the Gestahlian Empire and Kefka Palazzo in a world of magic and steampunk ruin.",
        "aliases": []
    },
    {
        "slug": "terra-branford",
        "name": "Terra Branford",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Magically gifted heroine of Final Fantasy VI.",
        "description": "Terra Branford is a half-Esper heroine who escapes Imperial control and helps decide the fate of magic in Final Fantasy VI.",
        "aliases": []
    },
    {
        "slug": "kefka-palazzo",
        "name": "Kefka Palazzo",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Clownish mage who becomes the God of Magic.",
        "description": "Kefka Palazzo rises from Imperial court mage to apocalyptic villain, draining the Warring Triad and remaking the world in Final Fantasy VI.",
        "aliases": []
    },
    {
        "slug": "final-fantasy-x",
        "name": "Final Fantasy X",
        "type": "work",
        "evidence": "fiction",
        "short_description": "2001 RPG of Spira, Yuna, and Sin.",
        "description": "Final Fantasy X follows Tidus and summoner Yuna on a pilgrimage across Spira to defeat Sin, confronting faith, fayth, and cycles of sacrifice.",
        "aliases": []
    },
    {
        "slug": "tidus",
        "name": "Tidus",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Blitzball star cast into Spira.",
        "description": "Tidus is a Zanarkand blitzball player thrown a thousand years forward into Spira, joining Yuna's pilgrimage against Sin.",
        "aliases": []
    },
    {
        "slug": "yuna",
        "name": "Yuna",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Summoner of Spira seeking to Calm Sin.",
        "description": "Yuna is a summoner who travels Spira with her guardians to obtain the Final Aeon and bring the Calm, until she chooses another path.",
        "aliases": []
    },
    {
        "slug": "sin-spira",
        "name": "Sin",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Colossal doom that cycles across Spira.",
        "description": "Sin is the armored leviathan that endlessly destroys Spira's cities, born of Yu Yevon's spiral and confronted in Final Fantasy X.",
        "aliases": []
    },
    {
        "slug": "spira",
        "name": "Spira",
        "type": "place",
        "evidence": "fiction",
        "short_description": "World of Final Fantasy X.",
        "description": "Spira is the ocean-ringed world of temples, aeons, and Yevon where Tidus and Yuna struggle against Sin's cycle.",
        "aliases": []
    },
    {
        "slug": "final-fantasy-xiv",
        "name": "Final Fantasy XIV",
        "type": "work",
        "evidence": "fiction",
        "short_description": "MMORPG of Eorzea and the Warrior of Light.",
        "description": "Final Fantasy XIV is Square Enix's MMO set primarily in Eorzea, following Warriors of Light through primals, Ascians, and expanding realms.",
        "aliases": []
    },
    {
        "slug": "eorzea",
        "name": "Eorzea",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Realm of city-states in Final Fantasy XIV.",
        "description": "Eorzea is the realm of Gridania, Ul'dah, Limsa Lominsa, and Ishgard where Final Fantasy XIV's early sagas unfold.",
        "aliases": []
    },
    {
        "slug": "primals-ffxiv",
        "name": "Primals",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Summoned demigods of Eorzean faiths.",
        "description": "Primals are aetherial demigods summoned by beast tribes and empires in Final Fantasy XIV, draining the land's aether when called.",
        "aliases": []
    },
    {
        "slug": "final-fantasy-figures",
        "name": "Final Fantasy figures",
        "type": "topic",
        "short_description": "People and named forces central to Final Fantasy.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Final Fantasy."
    },
    {
        "slug": "final-fantasy-places",
        "name": "Final Fantasy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Final Fantasy.",
        "description": "Places, regions, and built sites that give Final Fantasy its map — where events and figures concentrate."
    },
    {
        "slug": "final-fantasy-events",
        "name": "Final Fantasy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Final Fantasy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Final Fantasy timeline."
    },
    {
        "slug": "final-fantasy-objects",
        "name": "Final Fantasy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Final Fantasy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Final Fantasy."
    },
    {
        "slug": "final-fantasy-factions",
        "name": "Final Fantasy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Final Fantasy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Final Fantasy."
    },
    {
        "slug": "final-fantasy-concepts",
        "name": "Final Fantasy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Final Fantasy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Final Fantasy readable as a lore graph."
    },
    {
        "slug": "final-fantasy-eras",
        "name": "Final Fantasy eras",
        "type": "event",
        "short_description": "Periodization for Final Fantasy.",
        "description": "Named eras and phases that help readers track how Final Fantasy changes across time."
    }
];

const relationships = [
    [
        "square-enix",
        "final-fantasy",
        "produced",
        "Square Enix publishes Final Fantasy.",
        0.99,
        0.99
    ],
    [
        "hironobu-sakaguchi",
        "final-fantasy",
        "created",
        "Hironobu Sakaguchi created Final Fantasy.",
        0.99,
        0.98
    ],
    [
        "nobuo-uematsu",
        "final-fantasy",
        "influenced",
        "Nobuo Uematsu scored many Final Fantasy games.",
        0.97,
        0.94
    ],
    [
        "crystal-ff",
        "final-fantasy",
        "part_of",
        "Crystals are a series-wide motif.",
        0.96,
        0.92
    ],
    [
        "chocobo",
        "final-fantasy",
        "part_of",
        "Chocobos appear across the franchise.",
        0.97,
        0.94
    ],
    [
        "moogle",
        "final-fantasy",
        "part_of",
        "Moogles appear across the franchise.",
        0.96,
        0.92
    ],
    [
        "summons-ff",
        "final-fantasy",
        "part_of",
        "Summons recur throughout Final Fantasy.",
        0.96,
        0.92
    ],
    [
        "cid-ff",
        "airship-ff",
        "connected_to",
        "Characters named Cid often build airships.",
        0.96,
        0.92
    ],
    [
        "final-fantasy-vii",
        "final-fantasy",
        "part_of",
        "Final Fantasy VII is a mainline entry.",
        0.99,
        0.97
    ],
    [
        "cloud-strife",
        "final-fantasy-vii",
        "involved",
        "Cloud is the protagonist of Final Fantasy VII.",
        0.99,
        0.98
    ],
    [
        "sephiroth",
        "final-fantasy-vii",
        "involved",
        "Sephiroth is the primary antagonist of VII.",
        0.99,
        0.97
    ],
    [
        "aerith-gainsborough",
        "final-fantasy-vii",
        "involved",
        "Aerith is central to Final Fantasy VII.",
        0.98,
        0.95
    ],
    [
        "tifa-lockhart",
        "final-fantasy-vii",
        "involved",
        "Tifa is a main party member in VII.",
        0.97,
        0.94
    ],
    [
        "midgar",
        "final-fantasy-vii",
        "located_in",
        "Midgar is the opening setting of VII.",
        0.98,
        0.96
    ],
    [
        "shinra",
        "midgar",
        "leads",
        "Shinra rules Midgar.",
        0.98,
        0.95
    ],
    [
        "cloud-strife",
        "sephiroth",
        "opposed_by",
        "Cloud's journey centers on opposing Sephiroth.",
        0.98,
        0.96
    ],
    [
        "sephiroth",
        "jenova",
        "connected_to",
        "Sephiroth's fate is bound to Jenova.",
        0.97,
        0.94
    ],
    [
        "lifestream",
        "final-fantasy-vii",
        "part_of",
        "The Lifestream defines VII's cosmology.",
        0.97,
        0.94
    ],
    [
        "materia",
        "lifestream",
        "part_of",
        "Materia crystallizes from the Lifestream.",
        0.96,
        0.92
    ],
    [
        "final-fantasy-vi",
        "final-fantasy",
        "part_of",
        "Final Fantasy VI is a mainline entry.",
        0.98,
        0.96
    ],
    [
        "terra-branford",
        "final-fantasy-vi",
        "involved",
        "Terra is a lead heroine of VI.",
        0.98,
        0.95
    ],
    [
        "kefka-palazzo",
        "final-fantasy-vi",
        "involved",
        "Kefka is the chief villain of VI.",
        0.98,
        0.95
    ],
    [
        "terra-branford",
        "kefka-palazzo",
        "opposed_by",
        "Terra and the party oppose Kefka.",
        0.96,
        0.92
    ],
    [
        "final-fantasy-x",
        "final-fantasy",
        "part_of",
        "Final Fantasy X is a mainline entry.",
        0.98,
        0.96
    ],
    [
        "tidus",
        "final-fantasy-x",
        "involved",
        "Tidus is the protagonist of X.",
        0.98,
        0.95
    ],
    [
        "yuna",
        "final-fantasy-x",
        "involved",
        "Yuna is the summoner heroine of X.",
        0.98,
        0.95
    ],
    [
        "sin-spira",
        "final-fantasy-x",
        "involved",
        "Sin is the central threat of X.",
        0.97,
        0.94
    ],
    [
        "spira",
        "final-fantasy-x",
        "located_in",
        "Final Fantasy X is set in Spira.",
        0.98,
        0.95
    ],
    [
        "tidus",
        "yuna",
        "supports",
        "Tidus joins Yuna's pilgrimage.",
        0.97,
        0.93
    ],
    [
        "yuna",
        "sin-spira",
        "opposed_by",
        "Yuna's pilgrimage aims to defeat Sin.",
        0.97,
        0.94
    ],
    [
        "final-fantasy-xiv",
        "final-fantasy",
        "part_of",
        "Final Fantasy XIV is a mainline MMO entry.",
        0.98,
        0.96
    ],
    [
        "eorzea",
        "final-fantasy-xiv",
        "located_in",
        "Eorzea is the core realm of XIV.",
        0.98,
        0.95
    ],
    [
        "warrior-of-light",
        "final-fantasy-xiv",
        "involved",
        "Warriors of Light are XIV's player heroes.",
        0.96,
        0.92
    ],
    [
        "final-fantasy",
        "final-fantasy-figures",
        "contains",
        "Final Fantasy figures is a primary trailhead under Final Fantasy.",
        0.88,
        0.82
    ],
    [
        "final-fantasy",
        "final-fantasy-places",
        "contains",
        "Final Fantasy places is a primary trailhead under Final Fantasy.",
        0.88,
        0.82
    ],
    [
        "final-fantasy",
        "final-fantasy-events",
        "contains",
        "Final Fantasy events is a primary trailhead under Final Fantasy.",
        0.88,
        0.82
    ],
    [
        "final-fantasy",
        "final-fantasy-objects",
        "contains",
        "Final Fantasy objects & artifacts is a primary trailhead under Final Fantasy.",
        0.88,
        0.82
    ],
    [
        "final-fantasy",
        "final-fantasy-factions",
        "contains",
        "Final Fantasy factions & groups is a primary trailhead under Final Fantasy.",
        0.88,
        0.82
    ],
    [
        "final-fantasy",
        "final-fantasy-concepts",
        "contains",
        "Final Fantasy concepts is a primary trailhead under Final Fantasy.",
        0.88,
        0.82
    ],
    [
        "final-fantasy",
        "final-fantasy-eras",
        "contains",
        "Final Fantasy eras is a primary trailhead under Final Fantasy.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
