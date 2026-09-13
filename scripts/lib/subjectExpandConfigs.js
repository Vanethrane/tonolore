/**
 * Shared expand configs for Ton-o-Lore subjects.
 *
 * Every future seed should define BOTH:
 * - wikipedia / wikidata (breadth + real-world / encyclopedia text)
 * - fandom (franchise depth + character/location identification thumbs)
 *
 * Used by scripts/expandSubject.js (tandem) and expandSubjectDeep.js.
 */

const { EXTRA_EXPAND_CONFIGS } = require("./extraExpandConfigs");
const { DEPTH_EXPAND_CONFIGS } = require("./depthExpandConfigs");

const CONFIGS = {
    ...DEPTH_EXPAND_CONFIGS,
    ...EXTRA_EXPAND_CONFIGS,
    "one-piece": {
        rootSlug: "one-piece",
        relevanceHints: [
            "one piece",
            "pirate",
            "straw hat",
            "oda",
            "shueisha",
            "devil fruit"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q16682047 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:One Piece",
            "Category:One Piece characters",
            "Category:One Piece locations"
        ],
        fandom: {
            host: "onepiece.fandom.com",
            wikiUrl: "https://onepiece.fandom.com/wiki/One_Piece_Wiki",
            rightsCredit:
                "Character / franchise art © Eiichiro Oda / Shueisha / Toei Animation (as applicable).",
            categories: [
                {
                    title: "Male Characters",
                    type: "person",
                    parent: "one-piece",
                    maxPages: 2500
                },
                {
                    title: "Female Characters",
                    type: "person",
                    parent: "one-piece",
                    maxPages: 1200
                },
                {
                    title: "Devil Fruits",
                    type: "object",
                    kind: "item",
                    parent: "one-piece",
                    includeSubcats: true,
                    maxDepth: 2,
                    maxPages: 500
                },
                {
                    title: "Locations",
                    type: "place",
                    kind: "location",
                    parent: "one-piece",
                    includeSubcats: true,
                    maxDepth: 2,
                    maxPages: 500
                },
                {
                    title: "Ships",
                    type: "object",
                    kind: "ship",
                    parent: "one-piece",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                }
            ]
        }
    },
    "star-wars": {
        rootSlug: "star-wars",
        relevanceHints: ["star wars", "jedi", "sith", "skywalker", "lucas"],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q181735 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Star Wars",
            "Category:Star Wars characters",
            "Category:Star Wars locations",
            "Category:Star Wars films"
        ],
        fandom: {
            host: "starwars.fandom.com",
            wikiUrl: "https://starwars.fandom.com/wiki/Main_Page",
            rightsCredit:
                "Character / franchise art © Lucasfilm Ltd. / Disney (as applicable).",
            categories: [
                {
                    title: "Males",
                    type: "person",
                    parent: "star-wars",
                    maxPages: 2500
                },
                {
                    title: "Females",
                    type: "person",
                    parent: "star-wars",
                    maxPages: 1200
                },
                {
                    title: "Planets",
                    type: "place",
                    parent: "star-wars",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Starships",
                    type: "object",
                    parent: "star-wars",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Organizations",
                    type: "organization",
                    parent: "star-wars",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 500
                }
            ]
        }
    },
    "harry-potter": {
        rootSlug: "harry-potter",
        relevanceHints: [
            "harry potter",
            "hogwarts",
            "rowling",
            "voldemort",
            "wizarding",
            "muggle",
            "death eater",
            "gryffindor",
            "slytherin"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q5410773 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`,
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q8337 wd:Q216930 wd:Q102225 wd:Q46731 }
              ?item wdt:P1441 ?work .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Harry Potter characters",
            "Category:Harry Potter locations",
            "Category:Hogwarts",
            "Category:Harry Potter magical objects",
            "Category:Harry Potter spells",
            "Category:Order of the Phoenix members",
            "Category:Death Eaters",
            "Category:Harry Potter films",
            "Category:Harry Potter books"
        ],
        fandom: {
            host: "harrypotter.fandom.com",
            wikiUrl: "https://harrypotter.fandom.com/wiki/Main_Page",
            rightsCredit:
                "Character / franchise art © J.K. Rowling / Warner Bros. (as applicable).",
            categories: [
                {
                    title: "Males",
                    type: "person",
                    parent: "harry-potter",
                    maxPages: 2000
                },
                {
                    title: "Females",
                    type: "person",
                    parent: "harry-potter",
                    maxPages: 1200
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "harry-potter",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Spells",
                    type: "concept",
                    parent: "harry-potter",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 500
                },
                {
                    title: "Objects",
                    type: "object",
                    parent: "harry-potter",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    pokemon: {
        rootSlug: "pokemon",
        relevanceHints: [
            "pokémon",
            "pokemon",
            "pikachu",
            "game freak",
            "nintendo",
            "pokédex",
            "pokeball",
            "gym leader"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P31/wdt:P279* wd:Q3966183 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`,
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P5426 ?dex .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Pokémon characters",
            "Category:Pokémon game characters",
            "Category:Pokémon anime characters",
            "Category:Pokémon locations",
            "Category:Pokémon types",
            "Category:Pokémon media"
        ],
        fandom: {
            host: "pokemon.fandom.com",
            wikiUrl: "https://pokemon.fandom.com/wiki/Pokémon_Wiki",
            rightsCredit:
                "Character / franchise art © Nintendo / Creatures / Game Freak (as applicable).",
            categories: [
                {
                    title: "Pokémon",
                    type: "object",
                    parent: "pokemon",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 2000
                },
                {
                    title: "Characters",
                    type: "person",
                    parent: "pokemon",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1500
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "pokemon",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                }
            ]
        }
    },
    "lord-of-the-rings": {
        rootSlug: "lord-of-the-rings",
        relevanceHints: [
            "tolkien",
            "middle-earth",
            "middle earth",
            "hobbit",
            "sauron",
            "gandalf",
            "mordor",
            "gondor",
            "shire",
            "legendarium"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q81738 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`,
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q79734 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Middle-earth characters",
            "Category:Middle-earth peoples",
            "Category:Middle-earth locations",
            "Category:Middle-earth objects",
            "Category:Characters in The Lord of the Rings",
            "Category:The Lord of the Rings",
            "Category:The Hobbit"
        ],
        fandom: {
            host: "lotr.fandom.com",
            wikiUrl: "https://lotr.fandom.com/wiki/Main_Page",
            rightsCredit:
                "Character / franchise art © Tolkien Estate / New Line / Warner Bros. / Amazon (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "lord-of-the-rings",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 2000
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "lord-of-the-rings",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Objects",
                    type: "object",
                    parent: "lord-of-the-rings",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    "five-nights-at-freddys": {
        rootSlug: "five-nights-at-freddys",
        relevanceHints: [
            "five nights",
            "freddy",
            "fazbear",
            "animatronic",
            "afton",
            "cawthon"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q16683205 wd:Q21065524 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Five Nights at Freddy's",
            "Category:Five Nights at Freddy's characters"
        ],
        fandom: {
            host: "freddy-fazbears-pizza.fandom.com",
            wikiUrl:
                "https://freddy-fazbears-pizza.fandom.com/wiki/Freddy_Fazbear%27s_Pizza_Wiki",
            rightsCredit:
                "Character / franchise art © Scott Cawthon / Steel Wool / rights holders (as applicable).",
            categories: [
                {
                    title: "Animatronics",
                    type: "object",
                    parent: "five-nights-at-freddys",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Characters",
                    type: "person",
                    parent: "five-nights-at-freddys",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 500
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "five-nights-at-freddys",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                }
            ]
        }
    },
    cosmere: {
        rootSlug: "cosmere",
        relevanceHints: [
            "cosmere",
            "sanderson",
            "mistborn",
            "stormlight",
            "roshar",
            "scadrial",
            "shard",
            "investiture",
            "hoid",
            "allomancy",
            "surgebinding"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q18535364 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`,
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work {
                wd:Q268100 wd:Q2464217 wd:Q7766706 wd:Q13403351
                wd:Q28451667 wd:Q17060438 wd:Q28127676
              }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:The Cosmere",
            "Category:Mistborn",
            "Category:The Stormlight Archive",
            "Category:Novels by Brandon Sanderson",
            "Category:Fantasy book series"
        ],
        fandom: {
            host: "brandon-sanderson.fandom.com",
            wikiUrl: "https://brandon-sanderson.fandom.com/wiki/Cosmere",
            rightsCredit:
                "Character / franchise art © Brandon Sanderson / Dragonsteel Entertainment (as applicable).",
            coreTitles: {
                cosmere: "Cosmere",
                "brandon-sanderson": "Brandon Sanderson",
                mistborn: "Mistborn",
                "the-stormlight-archive": "The Stormlight Archive",
                elantris: "Elantris",
                warbreaker: "Warbreaker",
                hoid: "Hoid",
                kaladin: "Kaladin",
                vin: "Vin",
                kelsier: "Kelsier"
            },
            categories: [
                {
                    title: "Cosmere Characters",
                    type: "person",
                    parent: "cosmere",
                    maxPages: 2000
                },
                {
                    title: "Characters",
                    type: "person",
                    parent: "cosmere",
                    maxPages: 1500
                },
                {
                    title: "Cosmere",
                    type: "topic",
                    parent: "cosmere",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Cognitive Shadows",
                    type: "person",
                    parent: "cosmere",
                    maxPages: 200
                }
            ]
        }
    },
    "dragon-ball": {
        rootSlug: "dragon-ball",
        relevanceHints: [
            "dragon ball",
            "goku",
            "vegeta",
            "saiyan",
            "toriyama",
            "frieza",
            "kamehameha",
            "shenron",
            "namek",
            "z fighter"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q2020 wd:Q15051307 wd:Q2774 wd:Q1409 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`,
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?universe { wd:Q3551230 wd:Q9015 }
              ?item wdt:P1080 ?universe .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Dragon Ball",
            "Category:Dragon Ball characters",
            "Category:Dragon Ball Z",
            "Category:Dragon Ball Super",
            "Category:Dragon Ball films",
            "Category:Fictional Saiyans"
        ],
        fandom: {
            host: "dragonball.fandom.com",
            wikiUrl: "https://dragonball.fandom.com/wiki/Dragon_Ball_Wiki",
            rightsCredit:
                "Character / franchise art © Akira Toriyama / Shueisha / Toei Animation (as applicable).",
            coreTitles: {
                "dragon-ball": "Dragon Ball",
                "son-goku": "Goku",
                vegeta: "Vegeta",
                "son-gohan": "Gohan",
                piccolo: "Piccolo",
                bulma: "Bulma",
                frieza: "Frieza",
                cell: "Cell",
                "majin-buu": "Majin Buu",
                beerus: "Beerus"
            },
            categories: [
                {
                    title: "Saiyans",
                    type: "person",
                    parent: "dragon-ball",
                    maxPages: 400
                },
                {
                    title: "Z Fighters",
                    type: "person",
                    parent: "dragon-ball",
                    maxPages: 200
                },
                {
                    title: "Gods of Destruction",
                    type: "person",
                    parent: "dragon-ball",
                    maxPages: 100
                },
                {
                    title: "Planets",
                    type: "place",
                    parent: "dragon-ball",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Techniques",
                    type: "concept",
                    parent: "dragon-ball",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 500
                },
                {
                    title: "Transformations",
                    type: "concept",
                    parent: "dragon-ball",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                }
            ]
        }
    },
    "wheel-of-time": {
        rootSlug: "wheel-of-time",
        relevanceHints: [
            "wheel of time",
            "robert jordan",
            "rand al'thor",
            "aes sedai",
            "one power",
            "ta'veren",
            "tar valon",
            "dragon reborn",
            "forsaken",
            "tarmon gai'don"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q1211358 wd:Q7759870 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`,
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q185353 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:The Wheel of Time",
            "Category:The Wheel of Time characters",
            "Category:Novels by Robert Jordan",
            "Category:The Wheel of Time locations"
        ],
        fandom: {
            host: "wot.fandom.com",
            wikiUrl: "https://wot.fandom.com/wiki/A_Wheel_of_Time_Wiki",
            rightsCredit:
                "Character / franchise art © Robert Jordan estate / Tor Books / respective rights holders (as applicable).",
            coreTitles: {
                "wheel-of-time": "The Wheel of Time",
                "robert-jordan": "Robert Jordan",
                "rand-althor": "Rand al'Thor",
                "mat-cauthon": "Matrim Cauthon",
                "perrin-aybara": "Perrin Aybara",
                "egwene-alvere": "Egwene al'Vere",
                "nynaeve-almeara": "Nynaeve al'Meara",
                "moiraine-damodred": "Moiraine Damodred",
                "lan-mandragoran": "Lan Mandragoran",
                "aes-sedai": "Aes Sedai"
            },
            categories: [
                {
                    title: "Aes Sedai",
                    type: "person",
                    parent: "aes-sedai",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Forsaken",
                    type: "person",
                    parent: "forsaken",
                    maxPages: 50
                },
                {
                    title: "Aiel",
                    type: "person",
                    parent: "aiel",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Seanchan",
                    type: "person",
                    parent: "seanchan",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Geography",
                    type: "place",
                    parent: "wheel-of-time",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "One Power",
                    type: "concept",
                    parent: "one-power",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Books",
                    type: "work",
                    parent: "wheel-of-time",
                    maxPages: 100
                },
                {
                    title: "Shadowspawn",
                    type: "person",
                    parent: "dark-one",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                }
            ]
        }
    },
    berserk: {
        rootSlug: "berserk",
        relevanceHints: [
            "berserk",
            "guts",
            "griffith",
            "miura",
            "god hand",
            "behelit",
            "eclipse",
            "casca",
            "apostle",
            "band of the hawk"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q189594 wd:Q49047 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Berserk (manga)",
            "Category:Berserk characters",
            "Category:Dark fantasy anime and manga",
            "Category:Manga by Kentaro Miura"
        ],
        fandom: {
            host: "berserk.fandom.com",
            wikiUrl: "https://berserk.fandom.com/wiki/Berserk_Wiki",
            rightsCredit:
                "Character / franchise art © Kentaro Miura / Hakusensha / respective rights holders (as applicable).",
            coreTitles: {
                berserk: "Berserk (Manga)",
                "kentaro-miura": "Kentarou Miura",
                guts: "Guts",
                griffith: "Griffith",
                casca: "Casca",
                "skull-knight": "Skull Knight",
                "god-hand": "God Hand",
                "band-of-the-hawk": "Band of the Hawk",
                "brand-of-sacrifice": "Brand of Sacrifice",
                "berserker-armor": "Berserker Armor"
            },
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "berserk",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Apostles",
                    type: "person",
                    parent: "apostle",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                },
                {
                    title: "God Hand",
                    type: "person",
                    parent: "god-hand",
                    maxPages: 20
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "berserk",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Objects",
                    type: "object",
                    parent: "berserk",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Story Arcs",
                    type: "work",
                    parent: "berserk-manga",
                    maxPages: 50
                }
            ]
        }
    },
    marvel: {
        rootSlug: "marvel",
        relevanceHints: [
            "marvel",
            "avengers",
            "x-men",
            "spider-man",
            "stan lee",
            "mcu"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q1857495 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Marvel Comics",
            "Category:Marvel Comics characters",
            "Category:Marvel Cinematic Universe"
        ],
        fandom: {
            host: "marvel.fandom.com",
            wikiUrl: "https://marvel.fandom.com/wiki/Marvel_Database",
            rightsCredit:
                "Character / franchise art © Marvel Comics / Disney (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "marvel",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 2000
                },
                {
                    title: "Teams",
                    type: "organization",
                    parent: "marvel",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "marvel",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 500
                }
            ]
        }
    },
    dc: {
        rootSlug: "dc",
        relevanceHints: [
            "batman",
            "dc comics",
            "superman",
            "gotham",
            "justice league",
            "wonder woman"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q1152150 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:DC Comics",
            "Category:Batman characters",
            "Category:Superman characters",
            "Category:DC Comics superheroes"
        ],
        fandom: {
            host: "dc.fandom.com",
            wikiUrl: "https://dc.fandom.com/wiki/DC_Comics_Database",
            rightsCredit:
                "Character / franchise art © DC Comics / Warner Bros. Discovery (as applicable).",
            categories: [
                {
                    title: "Batman Characters",
                    type: "person",
                    parent: "batman",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Characters",
                    type: "person",
                    parent: "dc",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1500
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "dc",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    "spider-man": {
        rootSlug: "spider-man",
        relevanceHints: [
            "spider-man",
            "peter parker",
            "spider verse",
            "venom",
            "green goblin"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q181504 wd:Q14789 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Spider-Man",
            "Category:Spider-Man characters",
            "Category:Spider-Man titles"
        ],
        fandom: {
            host: "marvel.fandom.com",
            wikiUrl: "https://marvel.fandom.com/wiki/Spider-Man",
            rightsCredit:
                "Character / franchise art © Marvel Comics / Disney (as applicable).",
            categories: [
                {
                    title: "Spider-Man Characters",
                    type: "person",
                    parent: "spider-man",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Spider-Man Villains",
                    type: "person",
                    parent: "spider-man",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    mario: {
        rootSlug: "mario",
        relevanceHints: ["mario", "luigi", "bowser", "nintendo", "mushroom kingdom"],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q4802433 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Mario (franchise)",
            "Category:Mario characters",
            "Category:Super Mario"
        ],
        fandom: {
            host: "mario.fandom.com",
            wikiUrl: "https://www.mariowiki.com/",
            rightsCredit: "Character / franchise art © Nintendo (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "mario",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1000
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "mario",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    transformers: {
        rootSlug: "transformers",
        relevanceHints: [
            "transformers",
            "optimus",
            "megatron",
            "autobot",
            "decepticon",
            "cybertron"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q244280 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Transformers",
            "Category:Transformers characters",
            "Category:Transformers (franchise)"
        ],
        fandom: {
            host: "transformers.fandom.com",
            wikiUrl: "https://tfwiki.net/",
            rightsCredit:
                "Character / franchise art © Hasbro / Takara Tomy (as applicable).",
            categories: [
                {
                    title: "Autobots",
                    type: "person",
                    parent: "autobots",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Decepticons",
                    type: "person",
                    parent: "decepticons",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "transformers",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                }
            ]
        }
    },
    "game-of-thrones": {
        rootSlug: "game-of-thrones",
        relevanceHints: [
            "game of thrones",
            "westeros",
            "stark",
            "lannister",
            "targaryen",
            "martin"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q23572 wd:Q45875 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:A Song of Ice and Fire",
            "Category:Game of Thrones",
            "Category:A Song of Ice and Fire characters"
        ],
        fandom: {
            host: "gameofthrones.fandom.com",
            wikiUrl: "https://gameofthrones.fandom.com/wiki/Game_of_Thrones_Wiki",
            rightsCredit:
                "Character / franchise art © George R.R. Martin / HBO (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "game-of-thrones",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1200
                },
                {
                    title: "Houses",
                    type: "organization",
                    parent: "westeros",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "westeros",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    "the-simpsons": {
        rootSlug: "the-simpsons",
        relevanceHints: [
            "simpsons",
            "springfield",
            "homer",
            "bart",
            "groening"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q886 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:The Simpsons",
            "Category:The Simpsons characters",
            "Category:Fictional locations in The Simpsons"
        ],
        fandom: {
            host: "simpsons.fandom.com",
            wikiUrl: "https://simpsons.fandom.com/wiki/Simpsons_Wiki",
            rightsCredit:
                "Character / franchise art © Matt Groening / 20th Television / Disney (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "the-simpsons",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1500
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "springfield",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    naruto: {
        rootSlug: "naruto",
        relevanceHints: [
            "naruto",
            "sasuke",
            "konoha",
            "akatsuki",
            "kishimoto",
            "shippuden"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q14707 wd:Q15135054 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Naruto",
            "Category:Naruto characters",
            "Category:Naruto"
        ],
        fandom: {
            host: "naruto.fandom.com",
            wikiUrl: "https://naruto.fandom.com/wiki/Narutopedia",
            rightsCredit:
                "Character / franchise art © Masashi Kishimoto / Shueisha / Pierrot (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "naruto",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1500
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "naruto",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Jutsu",
                    type: "concept",
                    parent: "naruto",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    "demon-slayer": {
        rootSlug: "demon-slayer",
        relevanceHints: [
            "demon slayer",
            "kimetsu",
            "tanjiro",
            "nezuko",
            "muzan",
            "hashira"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q60987205 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Demon Slayer: Kimetsu no Yaiba",
            "Category:Demon Slayer: Kimetsu no Yaiba characters"
        ],
        fandom: {
            host: "kimetsu-no-yaiba.fandom.com",
            wikiUrl:
                "https://kimetsu-no-yaiba.fandom.com/wiki/Kimetsu_no_Yaiba_Wiki",
            rightsCredit:
                "Character / franchise art © Koyoharu Gotouge / Shueisha / Aniplex / ufotable (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "demon-slayer",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Demons",
                    type: "person",
                    parent: "demon-slayer",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "demon-slayer",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 150
                }
            ]
        }
    },
    "attack-on-titan": {
        rootSlug: "attack-on-titan",
        relevanceHints: [
            "attack on titan",
            "eren",
            "mikasa",
            "levi",
            "paradis",
            "titan"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q216224 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Attack on Titan",
            "Category:Attack on Titan characters"
        ],
        fandom: {
            host: "attackontitan.fandom.com",
            wikiUrl: "https://attackontitan.fandom.com/wiki/Attack_on_Titan_Wiki",
            rightsCredit:
                "Character / franchise art © Hajime Isayama / Kodansha (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "attack-on-titan",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Titans",
                    type: "person",
                    parent: "titans",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 100
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "attack-on-titan",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                }
            ]
        }
    },
    minecraft: {
        rootSlug: "minecraft",
        relevanceHints: [
            "minecraft",
            "creeper",
            "nether",
            "mojang",
            "redstone",
            "enderman"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q497040 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Minecraft",
            "Category:Minecraft gameplay"
        ],
        fandom: {
            host: "minecraft.fandom.com",
            wikiUrl: "https://minecraft.fandom.com/wiki/Minecraft_Wiki",
            rightsCredit:
                "Game / franchise art © Mojang Studios / Microsoft (as applicable).",
            categories: [
                {
                    title: "Mobs",
                    type: "person",
                    parent: "minecraft",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Biomes",
                    type: "place",
                    parent: "minecraft",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                },
                {
                    title: "Items",
                    type: "object",
                    parent: "minecraft",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 500
                }
            ]
        }
    },
    "the-legend-of-zelda": {
        rootSlug: "the-legend-of-zelda",
        relevanceHints: [
            "zelda",
            "link",
            "hyrule",
            "ganon",
            "triforce",
            "nintendo"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q186437 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . } UNION { ?item wdt:P361 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:The Legend of Zelda",
            "Category:The Legend of Zelda characters",
            "Category:The Legend of Zelda locations"
        ],
        fandom: {
            host: "zelda.fandom.com",
            wikiUrl: "https://zelda.fandom.com/wiki/Zelda_Wiki",
            rightsCredit: "Character / franchise art © Nintendo (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "the-legend-of-zelda",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1000
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "hyrule",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 500
                },
                {
                    title: "Items",
                    type: "object",
                    parent: "the-legend-of-zelda",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    "jurassic-park": {
        rootSlug: "jurassic-park",
        relevanceHints: [
            "jurassic",
            "dinosaur",
            "ingen",
            "isla nublar",
            "crichton",
            "spielberg"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q181153 wd:Q169513 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Jurassic Park",
            "Category:Jurassic Park characters",
            "Category:Jurassic Park films"
        ],
        fandom: {
            host: "jurassicpark.fandom.com",
            wikiUrl: "https://jurassicpark.fandom.com/wiki/Jurassic_Park_Wiki",
            rightsCredit:
                "Character / franchise art © Universal / Amblin / Michael Crichton estate (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "jurassic-park",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Dinosaurs",
                    type: "person",
                    parent: "jurassic-park",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "jurassic-park",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 150
                }
            ]
        }
    },
    "james-bond": {
        rootSlug: "james-bond",
        relevanceHints: [
            "james bond",
            "007",
            "mi6",
            "spectre",
            "fleming",
            "eon"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q844 wd:Q273527 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:James Bond",
            "Category:James Bond characters",
            "Category:James Bond films"
        ],
        fandom: {
            host: "jamesbond.fandom.com",
            wikiUrl: "https://jamesbond.fandom.com/wiki/James_Bond_Wiki",
            rightsCredit:
                "Character / franchise art © Eon Productions / Danjaq / Ian Fleming Publications (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "james-bond",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Films",
                    type: "work",
                    parent: "james-bond",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 100
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "james-bond",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                }
            ]
        }
    },
    "warhammer-40k": {
        rootSlug: "warhammer-40k",
        relevanceHints: [
            "warhammer",
            "40k",
            "imperium",
            "space marine",
            "chaos",
            "horus"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q214040 wd:Q391631 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Warhammer 40,000",
            "Category:Warhammer 40,000 characters",
            "Category:Warhammer 40,000 novels"
        ],
        fandom: {
            host: "warhammer40k.fandom.com",
            wikiUrl: "https://warhammer40k.fandom.com/wiki/Warhammer_40k_Wiki",
            rightsCredit:
                "Character / franchise art © Games Workshop (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "warhammer-40k",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1500
                },
                {
                    title: "Space Marines",
                    type: "organization",
                    parent: "adeptus-astartes",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "warhammer-40k",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 500
                }
            ]
        }
    },
    "elder-scrolls": {
        rootSlug: "elder-scrolls",
        relevanceHints: [
            "elder scrolls",
            "tamriel",
            "skyrim",
            "morrowind",
            "daedra",
            "nirn"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q1377950 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:The Elder Scrolls",
            "Category:The Elder Scrolls characters",
            "Category:The Elder Scrolls locations"
        ],
        fandom: {
            host: "elderscrolls.fandom.com",
            wikiUrl: "https://elderscrolls.fandom.com/wiki/The_Elder_Scrolls_Wiki",
            rightsCredit:
                "Character / franchise art © Bethesda Softworks / ZeniMax (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "elder-scrolls",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1500
                },
                {
                    title: "Lore",
                    type: "concept",
                    parent: "elder-scrolls",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "tamriel",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                }
            ]
        }
    },
    "world-of-warcraft": {
        rootSlug: "world-of-warcraft",
        relevanceHints: [
            "warcraft",
            "azeroth",
            "horde",
            "alliance",
            "arthas",
            "blizzard"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q2707398 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Warcraft",
            "Category:World of Warcraft",
            "Category:Warcraft characters"
        ],
        fandom: {
            host: "wowpedia.fandom.com",
            wikiUrl: "https://wowpedia.fandom.com/wiki/Wowpedia",
            rightsCredit:
                "Character / franchise art © Blizzard Entertainment (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "world-of-warcraft",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 2000
                },
                {
                    title: "Organizations",
                    type: "organization",
                    parent: "world-of-warcraft",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Zones",
                    type: "place",
                    parent: "azeroth",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                }
            ]
        }
    },
    "final-fantasy": {
        rootSlug: "final-fantasy",
        relevanceHints: [
            "final fantasy",
            "square enix",
            "crystal",
            "chocobo",
            "sephiroth",
            "eorzea"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q12392 wd:Q220460 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Final Fantasy",
            "Category:Final Fantasy characters",
            "Category:Final Fantasy locations"
        ],
        fandom: {
            host: "finalfantasy.fandom.com",
            wikiUrl: "https://finalfantasy.fandom.com/wiki/Final_Fantasy_Wiki",
            rightsCredit:
                "Character / franchise art © Square Enix (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "final-fantasy",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 2000
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "final-fantasy",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Summons",
                    type: "person",
                    parent: "final-fantasy",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                }
            ]
        }
    },
    fallout: {
        rootSlug: "fallout",
        relevanceHints: [
            "fallout",
            "wasteland",
            "vault",
            "brotherhood of steel",
            "nuka",
            "bethesda"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q240563 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Fallout (series)",
            "Category:Fallout characters",
            "Category:Fallout locations"
        ],
        fandom: {
            host: "fallout.fandom.com",
            wikiUrl: "https://fallout.fandom.com/wiki/Fallout_Wiki",
            rightsCredit:
                "Character / franchise art © Bethesda Softworks / ZeniMax / Interplay (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "fallout",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1500
                },
                {
                    title: "Factions",
                    type: "organization",
                    parent: "fallout",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "fallout",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                }
            ]
        }
    },
    destiny: {
        rootSlug: "destiny",
        relevanceHints: [
            "destiny",
            "guardian",
            "traveler",
            "hive",
            "vex",
            "bungie"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q13428455 wd:Q26203924 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Destiny (video game series)",
            "Category:Destiny (video game) characters"
        ],
        fandom: {
            host: "destiny.fandom.com",
            wikiUrl: "https://www.destinypedia.com/",
            rightsCredit: "Character / franchise art © Bungie (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "destiny",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Enemy races",
                    type: "organization",
                    parent: "destiny",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 100
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "destiny",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    "doctor-who": {
        rootSlug: "doctor-who",
        relevanceHints: [
            "doctor who",
            "tardis",
            "dalek",
            "time lord",
            "gallifrey",
            "bbc"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              ?item wdt:P1080 wd:Q62571070 .
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Doctor Who",
            "Category:Doctor Who characters",
            "Category:Doctor Who villains"
        ],
        fandom: {
            host: "tardis.fandom.com",
            wikiUrl: "https://tardis.fandom.com/wiki/Doctor_Who_Wiki",
            rightsCredit: "Character / franchise art © BBC (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "doctor-who",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 2000
                },
                {
                    title: "Species",
                    type: "organization",
                    parent: "doctor-who",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Planets",
                    type: "place",
                    parent: "doctor-who",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    dune: {
        rootSlug: "dune",
        relevanceHints: [
            "dune",
            "arrakis",
            "atreides",
            "fremen",
            "spice",
            "herbert"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q190192 wd:Q609254 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Dune (franchise)",
            "Category:Dune characters",
            "Category:Dune planets"
        ],
        fandom: {
            host: "dune.fandom.com",
            wikiUrl: "https://dune.fandom.com/wiki/Dune_Wiki",
            rightsCredit:
                "Character / franchise art © Herbert estate / Legendary / respective rights holders (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "dune",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Organizations",
                    type: "organization",
                    parent: "dune",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                },
                {
                    title: "Planets",
                    type: "place",
                    parent: "dune",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 150
                }
            ]
        }
    },
    "the-witcher": {
        rootSlug: "the-witcher",
        relevanceHints: [
            "witcher",
            "geralt",
            "ciri",
            "yennefer",
            "sapkowski",
            "kaer morhen"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q1140769 wd:Q1187196 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:The Witcher",
            "Category:The Witcher characters",
            "Category:The Witcher locations"
        ],
        fandom: {
            host: "witcher.fandom.com",
            wikiUrl: "https://witcher.fandom.com/wiki/Witcher_Wiki",
            rightsCredit:
                "Character / franchise art © Andrzej Sapkowski / CD Projekt (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "the-witcher",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1000
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "the-witcher",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Organizations",
                    type: "organization",
                    parent: "the-witcher",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                }
            ]
        }
    },
    "mass-effect": {
        rootSlug: "mass-effect",
        relevanceHints: [
            "mass effect",
            "shepard",
            "citadel",
            "reaper",
            "normandy",
            "bioware"
        ],
        sparqlQueries: [
            `SELECT DISTINCT ?item ?itemLabel ?itemDescription ?typeLabel ?enwiki WHERE {
              VALUES ?work { wd:Q725008 }
              { ?item wdt:P1441 ?work . } UNION { ?item wdt:P179 ?work . }
              OPTIONAL { ?item wdt:P31 ?type . }
              OPTIONAL {
                ?article schema:about ?item ;
                         schema:isPartOf <https://en.wikipedia.org/> ;
                         schema:name ?enwiki .
              }
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            }`
        ],
        wikipediaCategories: [
            "Category:Mass Effect",
            "Category:Mass Effect characters",
            "Category:Mass Effect locations"
        ],
        fandom: {
            host: "masseffect.fandom.com",
            wikiUrl: "https://masseffect.fandom.com/wiki/Mass_Effect_Wiki",
            rightsCredit:
                "Character / franchise art © BioWare / Electronic Arts (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "mass-effect",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1000
                },
                {
                    title: "Species",
                    type: "organization",
                    parent: "mass-effect",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "mass-effect",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    "chainsaw-man": {
        rootSlug: "chainsaw-man",
        relevanceHints: ["chainsaw man", "denji", "makima", "fujimoto"],
        sparqlQueries: [],
        wikipediaCategories: [
            "Category:Chainsaw Man",
            "Category:Chainsaw Man characters"
        ],
        fandom: {
            host: "chainsaw-man.fandom.com",
            wikiUrl: "https://chainsaw-man.fandom.com/wiki/Chainsaw_Man_Wiki",
            rightsCredit:
                "Character / franchise art © Tatsuki Fujimoto / Shueisha / MAPPA (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "chainsaw-man",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Devils",
                    type: "organization",
                    parent: "chainsaw-man",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "chainsaw-man",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                }
            ]
        }
    },
    "jojos-bizarre-adventure": {
        rootSlug: "jojos-bizarre-adventure",
        relevanceHints: ["jojo", "bizarre adventure", "stand", "araki"],
        sparqlQueries: [],
        wikipediaCategories: [
            "Category:JoJo's Bizarre Adventure",
            "Category:JoJo's Bizarre Adventure characters"
        ],
        fandom: {
            host: "jojo.fandom.com",
            wikiUrl: "https://jojo.fandom.com/wiki/JoJo%27s_Bizarre_Encyclopedia",
            rightsCredit:
                "Character / franchise art © Hirohiko Araki / Shueisha / David Production (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "jojos-bizarre-adventure",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1000
                },
                {
                    title: "Stands",
                    type: "topic",
                    parent: "jojos-bizarre-adventure",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "jojos-bizarre-adventure",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                }
            ]
        }
    },
    invincible: {
        rootSlug: "invincible",
        relevanceHints: ["invincible", "mark grayson", "viltrumite", "kirkman"],
        sparqlQueries: [],
        wikipediaCategories: [
            "Category:Invincible (comics)",
            "Category:Invincible (TV series)"
        ],
        fandom: {
            host: "invincible.fandom.com",
            wikiUrl: "https://invincible.fandom.com/wiki/Invincible_Wiki",
            rightsCredit:
                "Character / franchise art © Robert Kirkman / Image Comics / Amazon (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "invincible",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "invincible",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                },
                {
                    title: "Organizations",
                    type: "organization",
                    parent: "invincible",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                }
            ]
        }
    },
    "teenage-mutant-ninja-turtles": {
        rootSlug: "teenage-mutant-ninja-turtles",
        relevanceHints: ["tmnt", "ninja turtles", "splinter", "shredder"],
        sparqlQueries: [],
        wikipediaCategories: [
            "Category:Teenage Mutant Ninja Turtles",
            "Category:Teenage Mutant Ninja Turtles characters"
        ],
        fandom: {
            host: "turtlepedia.fandom.com",
            wikiUrl: "https://turtlepedia.fandom.com/wiki/Turtlepedia",
            rightsCredit:
                "Character / franchise art © Mirage / Nickelodeon / Paramount (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "teenage-mutant-ninja-turtles",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1000
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "teenage-mutant-ninja-turtles",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Organizations",
                    type: "organization",
                    parent: "teenage-mutant-ninja-turtles",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                }
            ]
        }
    },
    "dungeons-and-dragons": {
        rootSlug: "dungeons-and-dragons",
        relevanceHints: [
            "dungeons and dragons",
            "forgotten realms",
            "baldur",
            "wizards of the coast"
        ],
        sparqlQueries: [],
        wikipediaCategories: [
            "Category:Dungeons & Dragons",
            "Category:Forgotten Realms",
            "Category:Dungeons & Dragons characters"
        ],
        fandom: {
            host: "forgottenrealms.fandom.com",
            wikiUrl: "https://forgottenrealms.fandom.com/wiki/Main_Page",
            rightsCredit:
                "Character / franchise art © Wizards of the Coast / Hasbro (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "dungeons-and-dragons",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "dungeons-and-dragons",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Deities",
                    type: "topic",
                    parent: "dungeons-and-dragons",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                }
            ]
        }
    },
    "magic-the-gathering": {
        rootSlug: "magic-the-gathering",
        relevanceHints: ["magic the gathering", "planeswalker", "mtg", "dominaria"],
        sparqlQueries: [],
        wikipediaCategories: [
            "Category:Magic: The Gathering",
            "Category:Magic: The Gathering characters"
        ],
        fandom: {
            host: "mtg.fandom.com",
            wikiUrl: "https://mtg.fandom.com/wiki/Magic:_The_Gathering_Wiki",
            rightsCredit:
                "Character / franchise art © Wizards of the Coast / Hasbro (as applicable).",
            categories: [
                {
                    title: "Planeswalkers",
                    type: "person",
                    parent: "magic-the-gathering",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Planes",
                    type: "place",
                    parent: "magic-the-gathering",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Characters",
                    type: "person",
                    parent: "magic-the-gathering",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                }
            ]
        }
    },
    pathfinder: {
        rootSlug: "pathfinder",
        relevanceHints: ["pathfinder", "golarion", "paizo", "pathfinder society"],
        sparqlQueries: [],
        wikipediaCategories: [
            "Category:Pathfinder (role-playing game)",
            "Category:Pathfinder characters"
        ],
        fandom: {
            host: "pathfinderwiki.com",
            wikiUrl: "https://pathfinderwiki.com/wiki/PathfinderWiki",
            rightsCredit: "Character / franchise art © Paizo Inc. (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "pathfinder",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Nations",
                    type: "place",
                    parent: "pathfinder",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Organizations",
                    type: "organization",
                    parent: "pathfinder",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                }
            ]
        }
    },
    "warhammer-fantasy": {
        rootSlug: "warhammer-fantasy",
        relevanceHints: [
            "warhammer fantasy",
            "old world",
            "empire",
            "sigmar",
            "games workshop"
        ],
        sparqlQueries: [],
        wikipediaCategories: [
            "Category:Warhammer Fantasy",
            "Category:Warhammer Fantasy characters"
        ],
        fandom: {
            host: "warhammerfantasy.fandom.com",
            wikiUrl: "https://warhammerfantasy.fandom.com/wiki/Warhammer_Wiki",
            rightsCredit:
                "Character / franchise art © Games Workshop (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "warhammer-fantasy",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Factions",
                    type: "organization",
                    parent: "warhammer-fantasy",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "warhammer-fantasy",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                }
            ]
        }
    },
    "vampire-the-masquerade": {
        rootSlug: "vampire-the-masquerade",
        relevanceHints: [
            "vampire the masquerade",
            "camarilla",
            "kindred",
            "world of darkness"
        ],
        sparqlQueries: [],
        wikipediaCategories: [
            "Category:Vampire: The Masquerade",
            "Category:World of Darkness"
        ],
        fandom: {
            host: "whitewolf.fandom.com",
            wikiUrl: "https://whitewolf.fandom.com/wiki/Main_Page",
            rightsCredit:
                "Character / franchise art © Paradox Interactive / White Wolf (as applicable).",
            categories: [
                {
                    title: "Vampire: The Masquerade characters",
                    type: "person",
                    parent: "vampire-the-masquerade",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Clans (VTM)",
                    type: "organization",
                    parent: "vampire-the-masquerade",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 100
                },
                {
                    title: "Vampire: The Masquerade locations",
                    type: "place",
                    parent: "vampire-the-masquerade",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                }
            ]
        }
    },
    battletech: {
        rootSlug: "battletech",
        relevanceHints: [
            "battletech",
            "mechwarrior",
            "inner sphere",
            "clans",
            "battlemech"
        ],
        sparqlQueries: [],
        wikipediaCategories: [
            "Category:BattleTech",
            "Category:BattleTech characters"
        ],
        fandom: {
            host: "www.sarna.net",
            wikiUrl: "https://www.sarna.net/wiki/Main_Page",
            rightsCredit:
                "Character / franchise art © Topps / Catalyst Game Labs (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "battletech",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "BattleMechs",
                    type: "topic",
                    parent: "battletech",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Planets",
                    type: "place",
                    parent: "battletech",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    "call-of-cthulhu": {
        rootSlug: "call-of-cthulhu",
        relevanceHints: [
            "call of cthulhu",
            "lovecraft",
            "mythos",
            "arkham",
            "chaosium"
        ],
        sparqlQueries: [],
        wikipediaCategories: [
            "Category:Call of Cthulhu (role-playing game)",
            "Category:Cthulhu Mythos",
            "Category:Cthulhu Mythos deities"
        ],
        fandom: {
            host: "lovecraft.fandom.com",
            wikiUrl: "https://lovecraft.fandom.com/wiki/The_H.P._Lovecraft_Wiki",
            rightsCredit:
                "Mythos / franchise art © Chaosium / respective Lovecraft estate rights holders (as applicable).",
            categories: [
                {
                    title: "Great Old Ones",
                    type: "topic",
                    parent: "call-of-cthulhu",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                },
                {
                    title: "Characters",
                    type: "person",
                    parent: "call-of-cthulhu",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Locations",
                    type: "place",
                    parent: "call-of-cthulhu",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                }
            ]
        }
    }
};

function getExpandConfig(subjectId) {
    return CONFIGS[subjectId] || null;
}

function listExpandableSubjects() {
    return Object.keys(CONFIGS);
}

module.exports = {
    CONFIGS,
    getExpandConfig,
    listExpandableSubjects
};
