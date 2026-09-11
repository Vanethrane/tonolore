/**
 * Expand configs for formerly thin subjects (expansion catalog + music/tabletop
 * stubs that still need long-tail volume). Merged into subjectExpandConfigs.
 */

const EXTRA_EXPAND_CONFIGS = {
    "star-trek": {
        rootSlug: "star-trek",
        relevanceHints: [
            "star trek",
            "federation",
            "klingon",
            "vulcan",
            "starfleet",
            "picard"
        ],
        wikipediaCategories: [
            "Category:Star Trek",
            "Category:Star Trek characters",
            "Category:Star Trek planets"
        ],
        fandom: {
            host: "memory-alpha.fandom.com",
            wikiUrl: "https://memory-alpha.fandom.com/wiki/Portal:Main",
            rightsCredit:
                "Star Trek art © Paramount / CBS (as applicable).",
            categories: [
                {
                    title: "Starfleet personnel",
                    type: "person",
                    parent: "star-trek",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 2500
                },
                {
                    title: "Planets",
                    type: "place",
                    kind: "location",
                    parent: "star-trek",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Spacecraft",
                    type: "object",
                    kind: "ship",
                    parent: "star-trek",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Species",
                    type: "concept",
                    parent: "star-trek",
                    maxPages: 400
                }
            ]
        }
    },
    "mortal-kombat": {
        rootSlug: "mortal-kombat",
        relevanceHints: [
            "mortal kombat",
            "outworld",
            "shirai ryu",
            "lin kuei",
            "netherrealm"
        ],
        wikipediaCategories: [
            "Category:Mortal Kombat",
            "Category:Mortal Kombat characters"
        ],
        fandom: {
            host: "mortalkombat.fandom.com",
            wikiUrl: "https://mortalkombat.fandom.com/wiki/Mortal_Kombat_Wiki",
            rightsCredit:
                "Mortal Kombat art © NetherRealm / Warner Bros. (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "mortal-kombat",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Realms",
                    type: "place",
                    kind: "location",
                    parent: "mortal-kombat",
                    maxPages: 100
                },
                {
                    title: "Weapons",
                    type: "object",
                    kind: "weapon",
                    parent: "mortal-kombat",
                    maxPages: 200
                }
            ]
        }
    },
    "street-fighter": {
        rootSlug: "street-fighter",
        relevanceHints: [
            "street fighter",
            "capcom",
            "hadoken",
            "shadaloo",
            "world warrior"
        ],
        wikipediaCategories: [
            "Category:Street Fighter",
            "Category:Street Fighter characters"
        ],
        fandom: {
            host: "streetfighter.fandom.com",
            wikiUrl: "https://streetfighter.fandom.com/wiki/Street_Fighter_Wiki",
            rightsCredit: "Street Fighter art © Capcom (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "street-fighter",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 500
                },
                {
                    title: "Organizations",
                    type: "organization",
                    kind: "faction",
                    parent: "street-fighter",
                    maxPages: 80
                }
            ]
        }
    },
    tekken: {
        rootSlug: "tekken",
        relevanceHints: ["tekken", "mishima", "iron fist", "namco", "heihachi"],
        wikipediaCategories: [
            "Category:Tekken",
            "Category:Tekken characters"
        ],
        fandom: {
            host: "tekken.fandom.com",
            wikiUrl: "https://tekken.fandom.com/wiki/Tekken_Wiki",
            rightsCredit: "Tekken art © Bandai Namco (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "tekken",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Organizations",
                    type: "organization",
                    parent: "tekken",
                    maxPages: 60
                }
            ]
        }
    },
    "avatar-the-last-airbender": {
        rootSlug: "avatar-the-last-airbender",
        relevanceHints: [
            "avatar",
            "aang",
            "korra",
            "bending",
            "nickelodeon",
            "airbender"
        ],
        wikipediaCategories: [
            "Category:Avatar: The Last Airbender",
            "Category:Avatar: The Last Airbender characters"
        ],
        fandom: {
            host: "avatar.fandom.com",
            wikiUrl: "https://avatar.fandom.com/wiki/Avatar_Wiki",
            rightsCredit:
                "Avatar art © Nickelodeon / Paramount (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "avatar-the-last-airbender",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Locations",
                    type: "place",
                    kind: "location",
                    parent: "avatar-the-last-airbender",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Organizations",
                    type: "organization",
                    parent: "avatar-the-last-airbender",
                    maxPages: 100
                }
            ]
        }
    },
    "adventure-time": {
        rootSlug: "adventure-time",
        relevanceHints: [
            "adventure time",
            "finn",
            "jake",
            "ooo",
            "cartoon network"
        ],
        wikipediaCategories: [
            "Category:Adventure Time",
            "Category:Adventure Time characters"
        ],
        fandom: {
            host: "adventuretime.fandom.com",
            wikiUrl: "https://adventuretime.fandom.com/wiki/Adventure_Time_Wiki",
            rightsCredit:
                "Adventure Time art © Cartoon Network / Warner Bros. (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "adventure-time",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Locations",
                    type: "place",
                    kind: "location",
                    parent: "adventure-time",
                    maxPages: 200
                }
            ]
        }
    },
    "alien-franchise": {
        rootSlug: "alien-franchise",
        relevanceHints: [
            "alien",
            "xenomorph",
            "weyland",
            "ripley",
            "prometheus"
        ],
        wikipediaCategories: [
            "Category:Alien (franchise)",
            "Category:Alien (franchise) characters"
        ],
        fandom: {
            host: "avp.fandom.com",
            wikiUrl: "https://avp.fandom.com/wiki/Xenopedia",
            rightsCredit:
                "Alien / Predator art © 20th Century Studios / Disney (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "alien-franchise",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Species",
                    type: "concept",
                    parent: "alien-franchise",
                    maxPages: 120
                },
                {
                    title: "Locations",
                    type: "place",
                    kind: "location",
                    parent: "alien-franchise",
                    maxPages: 150
                }
            ]
        }
    },
    "halloween-franchise": {
        rootSlug: "halloween-franchise",
        relevanceHints: [
            "halloween",
            "michael myers",
            "haddonfield",
            "slasher"
        ],
        wikipediaCategories: [
            "Category:Halloween (franchise)",
            "Category:Halloween (franchise) characters"
        ],
        fandom: {
            host: "halloweenseries.fandom.com",
            wikiUrl: "https://halloweenseries.fandom.com/wiki/Halloween_Wiki",
            rightsCredit:
                "Halloween art © Trancas / Universal / respective rights holders.",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "halloween-franchise",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 200
                },
                {
                    title: "Locations",
                    type: "place",
                    kind: "location",
                    parent: "halloween-franchise",
                    maxPages: 60
                }
            ]
        }
    },
    lego: {
        rootSlug: "lego",
        relevanceHints: ["lego", "brick", "minifigure", "bionicle", "ninjago"],
        wikipediaCategories: [
            "Category:Lego",
            "Category:Lego themes"
        ],
        fandom: {
            host: "lego.fandom.com",
            wikiUrl: "https://lego.fandom.com/wiki/LEGO_Wiki",
            rightsCredit: "LEGO art © The LEGO Group (as applicable).",
            categories: [
                {
                    title: "Themes",
                    type: "topic",
                    parent: "lego",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Minifigures",
                    type: "person",
                    parent: "lego",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Sets",
                    type: "object",
                    kind: "item",
                    parent: "lego",
                    maxPages: 500
                }
            ]
        }
    },
    "yu-gi-oh": {
        rootSlug: "yu-gi-oh",
        relevanceHints: [
            "yu-gi-oh",
            "yugioh",
            "duel monsters",
            "konami",
            "kaiba"
        ],
        wikipediaCategories: [
            "Category:Yu-Gi-Oh!",
            "Category:Yu-Gi-Oh! characters"
        ],
        fandom: {
            host: "yugioh.fandom.com",
            wikiUrl: "https://yugioh.fandom.com/wiki/Yu-Gi-Oh!_Wiki",
            rightsCredit:
                "Yu-Gi-Oh! art © Konami / Studio Dice (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "yu-gi-oh",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Archetypes",
                    type: "concept",
                    parent: "yu-gi-oh",
                    maxPages: 400
                },
                {
                    title: "Card types",
                    type: "topic",
                    parent: "yu-gi-oh",
                    maxPages: 80
                }
            ]
        }
    },
    "my-little-pony": {
        rootSlug: "my-little-pony",
        relevanceHints: [
            "my little pony",
            "friendship is magic",
            "equestria",
            "hasbro"
        ],
        wikipediaCategories: [
            "Category:My Little Pony",
            "Category:My Little Pony characters"
        ],
        fandom: {
            host: "mlp.fandom.com",
            wikiUrl: "https://mlp.fandom.com/wiki/My_Little_Pony_Friendship_is_Magic_Wiki",
            rightsCredit: "My Little Pony art © Hasbro (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "my-little-pony",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Locations",
                    type: "place",
                    kind: "location",
                    parent: "my-little-pony",
                    maxPages: 200
                }
            ]
        }
    },
    "gi-joe": {
        rootSlug: "gi-joe",
        relevanceHints: ["g.i. joe", "gi joe", "cobra", "hasbro", "snake eyes"],
        wikipediaCategories: [
            "Category:G.I. Joe",
            "Category:G.I. Joe characters"
        ],
        fandom: {
            host: "gijoe.fandom.com",
            wikiUrl: "https://gijoe.fandom.com/wiki/G.I._Joe_Wiki",
            rightsCredit: "G.I. Joe art © Hasbro (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "gi-joe",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Vehicles",
                    type: "object",
                    kind: "vehicle",
                    parent: "gi-joe",
                    maxPages: 200
                },
                {
                    title: "Organizations",
                    type: "organization",
                    parent: "gi-joe",
                    maxPages: 80
                }
            ]
        }
    },
    wwe: {
        rootSlug: "wwe",
        relevanceHints: ["wwe", "wrestling", "wrestlemania", "raw", "smackdown"],
        wikipediaCategories: [
            "Category:WWE",
            "Category:WWE wrestlers"
        ],
        fandom: {
            host: "wwe.fandom.com",
            wikiUrl: "https://wwe.fandom.com/wiki/WWE_Wiki",
            rightsCredit: "WWE marks © WWE / TKO (as applicable).",
            categories: [
                {
                    title: "WWE wrestlers",
                    type: "person",
                    parent: "wwe",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 1500
                },
                {
                    title: "Former WWE wrestlers",
                    type: "person",
                    parent: "wwe",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "WWE championships",
                    type: "object",
                    kind: "item",
                    parent: "wwe",
                    maxPages: 120
                },
                {
                    title: "WWE pay-per-view events",
                    type: "event",
                    parent: "wwe",
                    maxPages: 300
                }
            ]
        }
    },
    pixar: {
        rootSlug: "pixar",
        relevanceHints: ["pixar", "disney", "toy story", "monsters inc", "cars"],
        wikipediaCategories: [
            "Category:Pixar",
            "Category:Pixar characters"
        ],
        fandom: {
            host: "pixar.fandom.com",
            wikiUrl: "https://pixar.fandom.com/wiki/Pixar_Wiki",
            rightsCredit: "Pixar art © Disney / Pixar (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "pixar",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Movies",
                    type: "work",
                    parent: "pixar",
                    maxPages: 80
                },
                {
                    title: "Locations",
                    type: "place",
                    kind: "location",
                    parent: "pixar",
                    maxPages: 150
                }
            ]
        }
    },
    "critical-role": {
        rootSlug: "critical-role",
        relevanceHints: [
            "critical role",
            "exandria",
            "vox machina",
            "mighty nein",
            "d&d"
        ],
        wikipediaCategories: ["Category:Critical Role"],
        fandom: {
            host: "criticalrole.fandom.com",
            wikiUrl: "https://criticalrole.fandom.com/wiki/Critical_Role_Wiki",
            rightsCredit: "Critical Role art © Critical Role (as applicable).",
            categories: [
                {
                    title: "Player characters",
                    type: "person",
                    parent: "critical-role",
                    maxPages: 200
                },
                {
                    title: "Non-player characters",
                    type: "person",
                    parent: "critical-role",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 800
                },
                {
                    title: "Locations",
                    type: "place",
                    kind: "location",
                    parent: "critical-role",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                }
            ]
        }
    },
    "blade-runner": {
        rootSlug: "blade-runner",
        relevanceHints: [
            "blade runner",
            "replicant",
            "tyrell",
            "deckard",
            "philip k dick"
        ],
        wikipediaCategories: [
            "Category:Blade Runner",
            "Category:Blade Runner characters"
        ],
        fandom: {
            host: "bladerunner.fandom.com",
            wikiUrl: "https://bladerunner.fandom.com/wiki/Blade_Runner_Wiki",
            rightsCredit:
                "Blade Runner art © Warner Bros. / Alcon (as applicable).",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "blade-runner",
                    maxPages: 120
                },
                {
                    title: "Locations",
                    type: "place",
                    kind: "location",
                    parent: "blade-runner",
                    maxPages: 60
                },
                {
                    title: "Organizations",
                    type: "organization",
                    parent: "blade-runner",
                    maxPages: 40
                }
            ]
        }
    },
    "greek-mythology": {
        rootSlug: "greek-mythology",
        relevanceHints: [
            "greek mythology",
            "olympian",
            "zeus",
            "hera",
            "heracles",
            "olympus"
        ],
        wikipediaCategories: [
            "Category:Greek mythology",
            "Category:Greek deities",
            "Category:Greek legendary creatures",
            "Category:Places in Greek mythology"
        ],
        fandom: {
            host: "greekmythology.fandom.com",
            wikiUrl: "https://greekmythology.fandom.com/wiki/Greek_Mythology_Wiki",
            rightsCredit:
                "Mythology commentary uses public-domain traditions; modern marks remain with rights holders.",
            categories: [
                {
                    title: "Gods",
                    type: "person",
                    parent: "greek-mythology",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 400
                },
                {
                    title: "Heroes",
                    type: "person",
                    parent: "greek-mythology",
                    maxPages: 300
                },
                {
                    title: "Creatures",
                    type: "object",
                    kind: "creature",
                    parent: "greek-mythology",
                    maxPages: 200
                },
                {
                    title: "Places",
                    type: "place",
                    kind: "location",
                    parent: "greek-mythology",
                    maxPages: 200
                }
            ]
        }
    },
    "norse-mythology": {
        rootSlug: "norse-mythology",
        relevanceHints: [
            "norse mythology",
            "odin",
            "thor",
            "asgard",
            "ragnarok",
            "edda"
        ],
        wikipediaCategories: [
            "Category:Norse mythology",
            "Category:Norse deities",
            "Category:Norse legendary creatures"
        ],
        fandom: {
            host: "norse-mythology.fandom.com",
            wikiUrl: "https://norse-mythology.fandom.com/wiki/Norse_Mythology_Wiki",
            rightsCredit:
                "Mythology commentary uses public-domain traditions; modern marks remain with rights holders.",
            categories: [
                {
                    title: "Gods",
                    type: "person",
                    parent: "norse-mythology",
                    maxPages: 200
                },
                {
                    title: "Creatures",
                    type: "object",
                    kind: "creature",
                    parent: "norse-mythology",
                    maxPages: 120
                },
                {
                    title: "Places",
                    type: "place",
                    kind: "location",
                    parent: "norse-mythology",
                    maxPages: 100
                }
            ]
        }
    },
    "egyptian-mythology": {
        rootSlug: "egyptian-mythology",
        relevanceHints: [
            "egyptian mythology",
            "osiris",
            "isis",
            "ra",
            "anubis",
            "duat"
        ],
        wikipediaCategories: [
            "Category:Egyptian mythology",
            "Category:Egyptian deities",
            "Category:Egyptian legendary creatures"
        ],
        fandom: {
            host: "egyptian-mythology.fandom.com",
            wikiUrl:
                "https://egyptian-mythology.fandom.com/wiki/Egyptian_Mythology_Wiki",
            rightsCredit:
                "Mythology commentary uses public-domain traditions; modern marks remain with rights holders.",
            categories: [
                {
                    title: "Gods",
                    type: "person",
                    parent: "egyptian-mythology",
                    maxPages: 200
                },
                {
                    title: "Places",
                    type: "place",
                    kind: "location",
                    parent: "egyptian-mythology",
                    maxPages: 80
                }
            ]
        }
    },
    "arthurian-legend": {
        rootSlug: "arthurian-legend",
        relevanceHints: [
            "arthurian",
            "king arthur",
            "camelot",
            "round table",
            "merlin",
            "grail"
        ],
        wikipediaCategories: [
            "Category:Arthurian legend",
            "Category:Arthurian characters",
            "Category:Holy Grail"
        ],
        fandom: {
            host: "kingarthur.fandom.com",
            wikiUrl: "https://kingarthur.fandom.com/wiki/King_Arthur_Wiki",
            rightsCredit:
                "Arthurian commentary uses public-domain traditions; modern marks remain with rights holders.",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "arthurian-legend",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Locations",
                    type: "place",
                    kind: "location",
                    parent: "arthurian-legend",
                    maxPages: 80
                }
            ]
        }
    },
    shakespeare: {
        rootSlug: "shakespeare",
        relevanceHints: [
            "shakespeare",
            "hamlet",
            "macbeth",
            "stratford",
            "globe theatre"
        ],
        wikipediaCategories: [
            "Category:William Shakespeare",
            "Category:Shakespearean characters",
            "Category:Shakespearean comedies",
            "Category:Shakespearean tragedies"
        ],
        fandom: {
            host: "shakespeare.fandom.com",
            wikiUrl: "https://shakespeare.fandom.com/wiki/Shakespeare_Wiki",
            rightsCredit:
                "Shakespeare's plays are public domain; modern productions remain with rights holders.",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "shakespeare",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 500
                },
                {
                    title: "Plays",
                    type: "work",
                    parent: "shakespeare",
                    maxPages: 80
                }
            ]
        }
    },
    dinosaurs: {
        rootSlug: "dinosaurs",
        relevanceHints: [
            "dinosaur",
            "cretaceous",
            "jurassic",
            "paleontology",
            "theropod"
        ],
        wikipediaCategories: [
            "Category:Dinosaurs",
            "Category:Theropods",
            "Category:Sauropods",
            "Category:Ornithischians"
        ]
    },
    nasa: {
        rootSlug: "nasa",
        relevanceHints: [
            "nasa",
            "apollo",
            "space shuttle",
            "mars",
            "jet propulsion"
        ],
        wikipediaCategories: [
            "Category:NASA",
            "Category:NASA space probes",
            "Category:NASA people",
            "Category:Apollo program"
        ]
    },
    "formula-1": {
        rootSlug: "formula-1",
        relevanceHints: [
            "formula one",
            "formula 1",
            "grand prix",
            "fia",
            "constructor"
        ],
        wikipediaCategories: [
            "Category:Formula One",
            "Category:Formula One drivers",
            "Category:Formula One constructors"
        ],
        fandom: {
            host: "f1.fandom.com",
            wikiUrl: "https://f1.fandom.com/wiki/Formula_1_Wiki",
            rightsCredit:
                "Formula 1 marks © Formula One Group / FIA (as applicable).",
            categories: [
                {
                    title: "Drivers",
                    type: "person",
                    parent: "formula-1",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 600
                },
                {
                    title: "Teams",
                    type: "organization",
                    parent: "formula-1",
                    maxPages: 80
                },
                {
                    title: "Circuits",
                    type: "place",
                    kind: "location",
                    parent: "formula-1",
                    maxPages: 100
                }
            ]
        }
    },
    "the-beatles": {
        rootSlug: "the-beatles",
        relevanceHints: ["beatles", "liverpool", "lennon", "mccartney", "abbey road"],
        wikipediaCategories: [
            "Category:The Beatles",
            "Category:The Beatles songs",
            "Category:The Beatles albums"
        ],
        fandom: {
            host: "beatles.fandom.com",
            wikiUrl: "https://beatles.fandom.com/wiki/The_Beatles_Wiki",
            rightsCredit:
                "The Beatles marks © Apple Corps / respective rights holders.",
            categories: [
                {
                    title: "Songs",
                    type: "work",
                    parent: "the-beatles",
                    maxPages: 400
                },
                {
                    title: "Albums",
                    type: "work",
                    parent: "the-beatles",
                    maxPages: 80
                },
                {
                    title: "People",
                    type: "person",
                    parent: "the-beatles",
                    maxPages: 120
                }
            ]
        }
    },
    metallica: {
        rootSlug: "metallica",
        relevanceHints: ["metallica", "hetfield", "ulrich", "master of puppets"],
        wikipediaCategories: [
            "Category:Metallica",
            "Category:Metallica songs",
            "Category:Metallica albums"
        ],
        fandom: {
            host: "metallica.fandom.com",
            wikiUrl: "https://metallica.fandom.com/wiki/Metallica_Wiki",
            rightsCredit: "Metallica marks © Metallica / respective rights holders.",
            categories: [
                {
                    title: "Songs",
                    type: "work",
                    parent: "metallica",
                    maxPages: 250
                },
                {
                    title: "Albums",
                    type: "work",
                    parent: "metallica",
                    maxPages: 40
                },
                {
                    title: "Band members",
                    type: "person",
                    parent: "metallica",
                    maxPages: 40
                }
            ]
        }
    },
    "journey-to-the-west": {
        rootSlug: "journey-to-the-west",
        relevanceHints: [
            "journey to the west",
            "sun wukong",
            "monkey king",
            "xuanzang",
            "pigsy"
        ],
        wikipediaCategories: [
            "Category:Journey to the West",
            "Category:Journey to the West characters"
        ],
        fandom: {
            host: "journeytothewest.fandom.com",
            wikiUrl:
                "https://journeytothewest.fandom.com/wiki/Journey_to_the_West_Wiki",
            rightsCredit:
                "Classic novel is public domain; modern adaptations remain with rights holders.",
            categories: [
                {
                    title: "Characters",
                    type: "person",
                    parent: "journey-to-the-west",
                    includeSubcats: true,
                    maxDepth: 1,
                    maxPages: 300
                },
                {
                    title: "Locations",
                    type: "place",
                    kind: "location",
                    parent: "journey-to-the-west",
                    maxPages: 100
                }
            ]
        }
    }
};

module.exports = { EXTRA_EXPAND_CONFIGS };
