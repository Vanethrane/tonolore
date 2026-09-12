/**
 * Format / medium hubs for multi-category franchises.
 *
 * Each hub becomes a nested page under the subject root
 * (e.g. /star-wars/movies, /one-piece/manga) with works nested beneath.
 * categoryPaths map home-shelf category ids → those hub URLs for long-tail deep links.
 */

function work(slug, name, short_description, description, extras = {}) {
    return {
        slug,
        name,
        short_description,
        description,
        type: "work",
        evidence: extras.evidence || "fiction",
        aliases: extras.aliases || []
    };
}

function hub(slug, name, category, short_description, description, works = []) {
    return {
        slug,
        name,
        category,
        short_description,
        description,
        works
    };
}

const FORMAT_HUBS = {
    pokemon: {
        hubs: [
            hub(
                "video-games",
                "Pokémon Video Games",
                "video-games",
                "Core RPGs and spin-off games across every generation.",
                "Pokémon video games are the franchise root — from Red and Blue through later generations — where trainers catch, battle, and explore regions.",
                [
                    "pokemon-red-blue",
                    "pokemon-gold-silver",
                    work(
                        "pokemon-ruby-sapphire",
                        "Pokémon Ruby and Sapphire",
                        "Hoenn generation of the core RPGs.",
                        "Pokémon Ruby and Sapphire introduce Hoenn, Team Aqua and Magma, and a new wave of Pokémon after Gold and Silver."
                    ),
                    work(
                        "pokemon-legends-arceus",
                        "Pokémon Legends: Arceus",
                        "Open-action catching in ancient Hisui.",
                        "Pokémon Legends: Arceus shifts the series toward open exploration and catching in the Hisui region that predates modern Sinnoh."
                    )
                ]
            ),
            hub(
                "anime",
                "Pokémon Anime",
                "anime",
                "The long-running animated series and related TV lore.",
                "The Pokémon anime follows trainers across regions in parallel with the games, carrying Ash, Pikachu, and later heroes worldwide.",
                ["pokemon-anime"]
            ),
            hub(
                "movies",
                "Pokémon Movies",
                "movies",
                "Theatrical and streaming Pokémon films.",
                "Pokémon movies expand the anime and live-action sides of the brand, from early Ash features to Detective Pikachu.",
                [
                    work(
                        "pokemon-the-first-movie",
                        "Pokémon: The First Movie",
                        "Mewtwo Strikes Back theatrical film.",
                        "Pokémon: The First Movie — Mewtwo Strikes Back — pits Ash and friends against the cloned legendary Mewtwo."
                    ),
                    work(
                        "detective-pikachu-movie",
                        "Pokémon Detective Pikachu",
                        "Live-action/CGI film with Ryan Reynolds' Pikachu.",
                        "Pokémon Detective Pikachu brings a talking Pikachu and Tim Goodman into a live-action mystery set in Ryme City."
                    )
                ]
            ),
            hub(
                "card-games",
                "Pokémon Trading Card Game",
                "card-games",
                "Collectible card game and competitive play.",
                "The Pokémon TCG lets players build decks around Pokémon, Trainers, and Energy across decades of sets.",
                ["pokemon-tcg"]
            )
        ]
    },

    "one-piece": {
        hubs: [
            hub(
                "manga",
                "One Piece Manga",
                "comics",
                "Eiichiro Oda's original Weekly Shonen Jump series.",
                "The One Piece manga is the source story — Oda's serialization of Luffy's voyage toward the One Piece treasure.",
                ["one-piece-manga", "romance-dawn"]
            ),
            hub(
                "anime",
                "One Piece Anime",
                "anime",
                "Toei Animation's long-running television adaptation.",
                "The One Piece anime adapts Oda's manga for television, following the Straw Hats across the Grand Line.",
                ["one-piece-anime"]
            ),
            hub(
                "live-action",
                "One Piece Live Action",
                "television",
                "Netflix live-action adaptation of the early arcs.",
                "The live-action One Piece series adapts the East Blue and early Grand Line adventures for a new audience.",
                ["one-piece-live-action"]
            ),
            hub(
                "card-games",
                "One Piece Card Game",
                "card-games",
                "Official trading card game from Bandai.",
                "The One Piece Card Game lets players build decks around captains, crews, and events from the franchise.",
                [
                    work(
                        "one-piece-card-game",
                        "One Piece Card Game",
                        "Bandai's official One Piece TCG.",
                        "The One Piece Card Game is Bandai's trading card game featuring leaders, characters, and events from the manga and anime."
                    )
                ]
            )
        ]
    },

    "star-wars": {
        hubs: [
            hub(
                "movies",
                "Star Wars Movies",
                "movies",
                "Saga films and theatrical Star Wars stories.",
                "Star Wars movies span the Skywalker saga, prequels, sequels, and standalones from A New Hope through Rogue One and Solo.",
                [
                    "a-new-hope",
                    "the-empire-strikes-back",
                    "return-of-the-jedi",
                    "the-phantom-menace",
                    "attack-of-the-clones",
                    "revenge-of-the-sith",
                    "the-force-awakens",
                    "the-last-jedi",
                    "the-rise-of-skywalker",
                    "rogue-one",
                    "solo"
                ]
            ),
            hub(
                "television",
                "Star Wars Television",
                "television",
                "Series from Clone Wars to streaming live-action.",
                "Star Wars television expands the galaxy through animated epics and live-action series on Disney+.",
                [
                    work(
                        "star-wars-the-clone-wars",
                        "Star Wars: The Clone Wars",
                        "Animated series of the Clone Wars era.",
                        "Star Wars: The Clone Wars follows Anakin, Obi-Wan, Ahsoka, and the Republic's clone armies through the war that ends the Jedi Order."
                    ),
                    work(
                        "the-mandalorian",
                        "The Mandalorian",
                        "Live-action series of Din Djarin and Grogu.",
                        "The Mandalorian follows bounty hunter Din Djarin protecting Grogu in the Outer Rim after the fall of the Empire."
                    ),
                    work(
                        "andor",
                        "Andor",
                        "Espionage series set before Rogue One.",
                        "Andor chronicles Cassian Andor's path into the Rebellion in the years leading to Rogue One."
                    ),
                    work(
                        "obi-wan-kenobi-series",
                        "Obi-Wan Kenobi",
                        "Live-action limited series of Kenobi's exile.",
                        "Obi-Wan Kenobi follows the Jedi Master in exile on Tatooine as he protects young Luke and confronts the Empire."
                    ),
                    work(
                        "ahsoka-series",
                        "Ahsoka",
                        "Live-action series following Ahsoka Tano.",
                        "Ahsoka continues Ahsoka Tano's story after the Empire, linking Rebels-era threads to the wider New Republic era."
                    )
                ]
            ),
            hub(
                "video-games",
                "Star Wars Video Games",
                "video-games",
                "Interactive Star Wars from racers to RPGs.",
                "Star Wars video games range from Episode I Racer and Knights of the Old Republic to Jedi Fallen Order and battlefront shooters.",
                [
                    work(
                        "knights-of-the-old-republic",
                        "Knights of the Old Republic",
                        "BioWare RPG set thousands of years before the films.",
                        "Star Wars: Knights of the Old Republic is a BioWare RPG of Jedi, Sith, and the fate of the Republic in the Old Republic era."
                    ),
                    work(
                        "star-wars-episode-i-racer",
                        "Star Wars Episode I: Racer",
                        "Podracing game based on The Phantom Menace.",
                        "Star Wars Episode I: Racer puts players in podracers across courses inspired by The Phantom Menace."
                    ),
                    work(
                        "jedi-fallen-order",
                        "Star Wars Jedi: Fallen Order",
                        "Action-adventure of Cal Kestis after Order 66.",
                        "Star Wars Jedi: Fallen Order follows Jedi Padawan Cal Kestis surviving the Empire and rebuilding hope after Order 66."
                    ),
                    work(
                        "star-wars-battlefront-ii",
                        "Star Wars Battlefront II",
                        "Large-scale multiplayer battles across eras.",
                        "Star Wars Battlefront II stages multiplayer and campaign battles spanning clone wars to sequel-era fronts."
                    )
                ]
            )
        ]
    },

    "harry-potter": {
        hubs: [
            hub(
                "books",
                "Harry Potter Books",
                "books",
                "J.K. Rowling's seven-novel wizarding saga.",
                "The Harry Potter books follow Harry, Ron, and Hermione through Hogwarts and the Second Wizarding War.",
                [
                    "philosophers-stone",
                    "chamber-of-secrets",
                    "prisoner-of-azkaban",
                    "goblet-of-fire",
                    "order-of-the-phoenix",
                    "half-blood-prince",
                    "deathly-hallows"
                ]
            ),
            hub(
                "movies",
                "Harry Potter Movies",
                "movies",
                "Warner Bros. film adaptations of the novels.",
                "The Harry Potter films adapt each novel (with Deathly Hallows split in two) into a shared cinematic wizarding world.",
                [
                    work(
                        "philosophers-stone-film",
                        "Harry Potter and the Philosopher's Stone (film)",
                        "First film adaptation of the novel.",
                        "Harry Potter and the Philosopher's Stone (film) introduces Hogwarts, the trio, and the fight over the Philosopher's Stone."
                    ),
                    work(
                        "chamber-of-secrets-film",
                        "Harry Potter and the Chamber of Secrets (film)",
                        "Second film; the Chamber awakens.",
                        "Harry Potter and the Chamber of Secrets (film) adapts the basilisk crisis and Tom Riddle's memory."
                    ),
                    work(
                        "prisoner-of-azkaban-film",
                        "Harry Potter and the Prisoner of Azkaban (film)",
                        "Third film; Sirius Black and the Time-Turner.",
                        "Harry Potter and the Prisoner of Azkaban (film) brings Sirius Black, Lupin, and the Dementors to the screen."
                    ),
                    work(
                        "goblet-of-fire-film",
                        "Harry Potter and the Goblet of Fire (film)",
                        "Fourth film; Triwizard Tournament.",
                        "Harry Potter and the Goblet of Fire (film) adapts the Triwizard Tournament and Voldemort's return."
                    ),
                    work(
                        "order-of-the-phoenix-film",
                        "Harry Potter and the Order of the Phoenix (film)",
                        "Fifth film; Dumbledore's Army.",
                        "Harry Potter and the Order of the Phoenix (film) covers Umbridge, Dumbledore's Army, and the Ministry battle."
                    ),
                    work(
                        "half-blood-prince-film",
                        "Harry Potter and the Half-Blood Prince (film)",
                        "Sixth film; Horcrux revelations.",
                        "Harry Potter and the Half-Blood Prince (film) explores Voldemort's past and Dumbledore's final year."
                    ),
                    work(
                        "deathly-hallows-part-1-film",
                        "Harry Potter and the Deathly Hallows – Part 1",
                        "First half of the final book adaptation.",
                        "Deathly Hallows – Part 1 follows the trio on the run hunting Horcruxes before the final battle."
                    ),
                    work(
                        "deathly-hallows-part-2-film",
                        "Harry Potter and the Deathly Hallows – Part 2",
                        "Finale of the film saga.",
                        "Deathly Hallows – Part 2 culminates in the Battle of Hogwarts and the end of Voldemort."
                    )
                ]
            )
        ]
    },

    "lord-of-the-rings": {
        hubs: [
            hub(
                "books",
                "Middle-earth Books",
                "books",
                "Tolkien's legendarium on the page.",
                "The Middle-earth books — The Hobbit, The Lord of the Rings, and The Silmarillion — form Tolkien's core legendarium.",
                ["the-hobbit", "the-silmarillion"]
            ),
            hub(
                "movies",
                "Middle-earth Movies",
                "movies",
                "Peter Jackson's film trilogies and related cinema.",
                "The Lord of the Rings and Hobbit film trilogies brought Middle-earth to the screen under Peter Jackson.",
                [
                    work(
                        "fellowship-of-the-ring-film",
                        "The Fellowship of the Ring (film)",
                        "First film of Jackson's LOTR trilogy.",
                        "The Fellowship of the Ring film follows Frodo and the Company from the Shire to the breaking of the Fellowship."
                    ),
                    work(
                        "the-two-towers-film",
                        "The Two Towers (film)",
                        "Second film of Jackson's LOTR trilogy.",
                        "The Two Towers film splits the Fellowship across Rohan, Fangorn, and Frodo and Sam's road toward Mordor."
                    ),
                    work(
                        "return-of-the-king-film",
                        "The Return of the King (film)",
                        "Finale of Jackson's LOTR trilogy.",
                        "The Return of the King film brings the War of the Ring to Minas Tirith and Mount Doom."
                    ),
                    work(
                        "the-hobbit-film-trilogy",
                        "The Hobbit (film trilogy)",
                        "Jackson's three-film Hobbit adaptation.",
                        "The Hobbit film trilogy expands Bilbo's journey to Erebor across An Unexpected Journey, The Desolation of Smaug, and The Battle of the Five Armies."
                    )
                ]
            )
        ]
    },

    "dragon-ball": {
        hubs: [
            hub(
                "manga",
                "Dragon Ball Manga",
                "comics",
                "Akira Toriyama's original manga.",
                "The Dragon Ball manga is Toriyama's source saga of Goku, the Dragon Balls, and the Z Fighter era.",
                ["dragon-ball-manga"]
            ),
            hub(
                "anime",
                "Dragon Ball Anime",
                "anime",
                "Toei television adaptations across eras.",
                "Dragon Ball anime spans the original series, Z, GT, and Super — the screen life of Toriyama's world.",
                [
                    "dragon-ball-anime",
                    "dragon-ball-z",
                    "dragon-ball-gt",
                    "dragon-ball-super"
                ]
            ),
            hub(
                "movies",
                "Dragon Ball Movies",
                "movies",
                "Theatrical Dragon Ball films.",
                "Dragon Ball movies include classic Z features and Super-era films like Broly and Super Hero.",
                [
                    "dragon-ball-super-broly",
                    "dragon-ball-super-super-hero"
                ]
            ),
            hub(
                "card-games",
                "Dragon Ball Card Games",
                "card-games",
                "Trading card games based on Dragon Ball.",
                "Dragon Ball card games adapt fighters, transformations, and sagas into competitive play.",
                [
                    work(
                        "dragon-ball-super-card-game",
                        "Dragon Ball Super Card Game",
                        "Bandai TCG based on Dragon Ball Super.",
                        "The Dragon Ball Super Card Game is Bandai's TCG featuring leaders, battles, and Super-era characters."
                    )
                ]
            )
        ]
    },

    "the-witcher": {
        hubs: [
            hub(
                "books",
                "The Witcher Books",
                "books",
                "Sapkowski's short stories and novels.",
                "The Witcher books are Andrzej Sapkowski's saga of Geralt, Ciri, and the Continent.",
                ["witcher-saga"]
            ),
            hub(
                "video-games",
                "The Witcher Video Games",
                "video-games",
                "CD Projekt RED's RPG adaptations.",
                "The Witcher games by CD Projekt RED redefined the franchise for many players, peaking with The Witcher 3: Wild Hunt.",
                [
                    "the-witcher-3",
                    work(
                        "the-witcher-1",
                        "The Witcher (2007)",
                        "First CDPR RPG adaptation.",
                        "The Witcher (2007) introduces Geralt's CDPR era in Temeria after amnesia, hunting monsters and politics."
                    ),
                    work(
                        "the-witcher-2",
                        "The Witcher 2: Assassins of Kings",
                        "Second CDPR Witcher RPG.",
                        "The Witcher 2 follows Geralt through royal assassinations and the politics of the Northern Kingdoms."
                    )
                ]
            ),
            hub(
                "television",
                "The Witcher Television",
                "television",
                "Screen adaptations of the saga.",
                "Witcher television includes the Netflix series adapting Sapkowski's characters and arcs.",
                ["the-witcher-netflix"]
            )
        ]
    },

    dune: {
        hubs: [
            hub(
                "books",
                "Dune Books",
                "books",
                "Herbert's novels and expanded saga.",
                "The Dune books begin with Frank Herbert's 1965 novel and continue through Messiah and later expansions.",
                ["dune-novel", "dune-messiah"]
            ),
            hub(
                "movies",
                "Dune Movies",
                "movies",
                "Film adaptations of Arrakis.",
                "Dune movies include Denis Villeneuve's modern two-part adaptation of Herbert's first novel.",
                ["dune-2021", "dune-part-two"]
            )
        ]
    },

    "chainsaw-man": {
        hubs: [
            hub(
                "manga",
                "Chainsaw Man Manga",
                "comics",
                "Tatsuki Fujimoto's original manga.",
                "The Chainsaw Man manga is Fujimoto's devil-hunting saga of Denji, Pochita, and later Asa Mitaka.",
                [
                    "chainsaw-man-manga",
                    "public-safety-arc",
                    "chainsaw-man-part-2"
                ]
            ),
            hub(
                "anime",
                "Chainsaw Man Anime",
                "anime",
                "MAPPA's television adaptation.",
                "The Chainsaw Man anime adapts the Public Safety arc with MAPPA's stylized action.",
                ["chainsaw-man-anime"]
            )
        ]
    },

    "jojos-bizarre-adventure": {
        hubs: [
            hub(
                "manga",
                "JoJo Manga",
                "comics",
                "Hirohiko Araki's multi-part manga.",
                "The JoJo manga follows the Joestar bloodline across Phantom Blood, Stardust Crusaders, Golden Wind, and later parts.",
                [
                    "jojo-manga",
                    "phantom-blood",
                    "stardust-crusaders",
                    "golden-wind"
                ]
            ),
            hub(
                "anime",
                "JoJo Anime",
                "anime",
                "David Production adaptations.",
                "The JoJo anime by David Production adapts Araki's parts with distinctive style and Stand battles.",
                ["jojo-anime"]
            )
        ]
    },

    invincible: {
        hubs: [
            hub(
                "comics",
                "Invincible Comics",
                "comics",
                "Kirkman's Image Comics series.",
                "The Invincible comic is Robert Kirkman's Image series about Mark Grayson and the Viltrumite threat.",
                ["invincible-comic", "guardians-massacre-arc"]
            ),
            hub(
                "television",
                "Invincible Television",
                "television",
                "Amazon Prime Video animated series.",
                "The Invincible TV series adapts Kirkman's early arcs for Prime Video.",
                ["invincible-tv-series"]
            )
        ]
    },

    "teenage-mutant-ninja-turtles": {
        hubs: [
            hub(
                "comics",
                "TMNT Comics",
                "comics",
                "Mirage and later comic runs.",
                "TMNT comics begin with Eastman and Laird's Mirage series and continue across publishers.",
                ["tmnt-mirage-comic"]
            ),
            hub(
                "television",
                "TMNT Television",
                "television",
                "Animated series across generations.",
                "TMNT television includes the 1987 cartoon, the 2012 Nickelodeon series, and more.",
                ["tmnt-1987-cartoon", "tmnt-2012-series"]
            ),
            hub(
                "movies",
                "TMNT Movies",
                "movies",
                "Theatrical Teenage Mutant Ninja Turtles films.",
                "TMNT movies span live-action and animated features including Mutant Mayhem.",
                ["tmnt-mutant-mayhem"]
            )
        ]
    },

    transformers: {
        hubs: [
            hub(
                "television",
                "Transformers Television",
                "television",
                "Animated series from G1 onward.",
                "Transformers television begins with the Generation 1 cartoon and continues through series like Prime.",
                ["transformers-g1", "transformers-prime"]
            ),
            hub(
                "movies",
                "Transformers Movies",
                "movies",
                "Live-action and animated theatrical films.",
                "Transformers movies bring Autobots and Decepticons to the big screen, led by the live-action film saga.",
                ["transformers-film"]
            ),
            hub(
                "video-games",
                "Transformers Video Games",
                "video-games",
                "Games set on Cybertron and Earth.",
                "Transformers games include War for Cybertron and other interactive takes on the Autobot–Decepticon war.",
                ["transformers-war-for-cybertron"]
            )
        ]
    },

    "game-of-thrones": {
        hubs: [
            hub(
                "books",
                "A Song of Ice and Fire",
                "books",
                "George R.R. Martin's novel cycle.",
                "A Song of Ice and Fire is the novel foundation for Westeros, Essos, and the struggle for the Iron Throne.",
                ["a-song-of-ice-and-fire"]
            ),
            hub(
                "television",
                "Game of Thrones Television",
                "television",
                "HBO adaptations of Westeros.",
                "Game of Thrones television includes the flagship HBO series and later spinoffs in the same world.",
                [
                    work(
                        "game-of-thrones-hbo",
                        "Game of Thrones (HBO series)",
                        "HBO adaptation of A Song of Ice and Fire.",
                        "Game of Thrones is the HBO series adapting Martin's novels, following the houses of Westeros through war, dragons, and the Night King."
                    ),
                    work(
                        "house-of-the-dragon",
                        "House of the Dragon",
                        "HBO prequel of the Targaryen civil war.",
                        "House of the Dragon dramatizes the Dance of the Dragons, the Targaryen civil war a generation before Game of Thrones."
                    )
                ]
            )
        ]
    },

    "wheel-of-time": {
        hubs: [
            hub(
                "books",
                "The Wheel of Time Books",
                "books",
                "Jordan and Sanderson's novel cycle.",
                "The Wheel of Time books follow Rand, Mat, Perrin, Egwene, and Nynaeve from Emond's Field to Tarmon Gai'don.",
                [
                    "the-eye-of-the-world",
                    "the-great-hunt",
                    "the-dragon-reborn",
                    "the-shadow-rising",
                    "the-fires-of-heaven"
                ]
            ),
            hub(
                "television",
                "The Wheel of Time Television",
                "television",
                "Prime Video adaptation of the novels.",
                "The Wheel of Time television series adapts Robert Jordan's saga for Amazon Prime Video.",
                [
                    work(
                        "wheel-of-time-amazon",
                        "The Wheel of Time (TV series)",
                        "Amazon Prime Video adaptation.",
                        "The Wheel of Time TV series follows Moiraine and the Two Rivers folk as the Dragon Reborn's story unfolds on screen."
                    )
                ]
            )
        ]
    },

    marvel: {
        hubs: [
            hub(
                "comics",
                "Marvel Comics",
                "comics",
                "Marvel's shared comic universe.",
                "Marvel Comics is the publishing universe of the Avengers, X-Men, Fantastic Four, Spider-Man, and more."
            ),
            hub(
                "movies",
                "Marvel Movies",
                "movies",
                "MCU and Marvel film adaptations.",
                "Marvel movies center on the Marvel Cinematic Universe and related theatrical adaptations.",
                [
                    "mcu",
                    work(
                        "avengers-endgame",
                        "Avengers: Endgame",
                        "Culmination of the Infinity Saga.",
                        "Avengers: Endgame concludes the Infinity Saga as Earth's heroes attempt to reverse Thanos's snap."
                    ),
                    work(
                        "iron-man-2008",
                        "Iron Man (2008)",
                        "Film that launched the MCU.",
                        "Iron Man (2008) introduces Tony Stark as Iron Man and begins the Marvel Cinematic Universe."
                    )
                ]
            )
        ]
    },

    dc: {
        hubs: [
            hub(
                "comics",
                "DC Comics",
                "comics",
                "DC's shared comic universe.",
                "DC Comics is home to Superman, Batman, Wonder Woman, the Justice League, and decades of shared continuity."
            ),
            hub(
                "movies",
                "DC Movies",
                "movies",
                "Theatrical DC adaptations.",
                "DC movies adapt Superman, Batman, Wonder Woman, and the wider Justice League mythos for the screen."
            )
        ]
    },

    "spider-man": {
        hubs: [
            hub(
                "comics",
                "Spider-Man Comics",
                "comics",
                "Amazing Spider-Man and related titles.",
                "Spider-Man comics follow Peter Parker and other spider-heroes across Marvel's publishing line."
            ),
            hub(
                "movies",
                "Spider-Man Movies",
                "movies",
                "Theatrical Spider-Man films across studios.",
                "Spider-Man movies span Sam Raimi, Marc Webb, and MCU eras of Peter Parker on screen."
            )
        ]
    },

    "final-fantasy": {
        hubs: [
            hub(
                "video-games",
                "Final Fantasy Games",
                "video-games",
                "Mainline and major spin-off RPGs.",
                "Final Fantasy video games are Square Enix's flagship RPG numbered series and related worlds.",
                ["final-fantasy-vii"]
            ),
            hub(
                "card-games",
                "Final Fantasy Card Games",
                "card-games",
                "Trading card games from the FF worlds.",
                "Final Fantasy card games adapt heroes, summons, and jobs into competitive card play.",
                [
                    work(
                        "final-fantasy-tcg",
                        "Final Fantasy Trading Card Game",
                        "Square Enix competitive TCG.",
                        "The Final Fantasy Trading Card Game features forwards, backups, and summons from across the series."
                    )
                ]
            )
        ]
    },

    "warhammer-40k": {
        hubs: [
            hub(
                "tabletop",
                "Warhammer 40,000 Tabletop",
                "tabletop",
                "Miniatures wargame and codex lore.",
                "Warhammer 40,000 tabletop is Games Workshop's grimdark miniatures game of Space Marines, Chaos, and the Imperium."
            ),
            hub(
                "video-games",
                "Warhammer 40,000 Video Games",
                "video-games",
                "Digital adaptations of the 41st millennium.",
                "Warhammer 40K video games range from strategy and shooters to RPGs set in the Imperium's war."
            )
        ]
    },

    "dungeons-and-dragons": {
        hubs: [
            hub(
                "tabletop",
                "Dungeons & Dragons Tabletop",
                "tabletop",
                "The tabletop RPG and its editions.",
                "Dungeons & Dragons tabletop is the foundational fantasy RPG of classes, dungeons, and shared campaign worlds."
            ),
            hub(
                "books",
                "Dungeons & Dragons Books",
                "books",
                "Novels and setting source literature.",
                "D&D books include novels and lore volumes set in Forgotten Realms, Dragonlance, and other worlds."
            )
        ]
    },

    "magic-the-gathering": {
        hubs: [
            hub(
                "tabletop",
                "Magic: The Gathering Tabletop",
                "tabletop",
                "Living card game as tabletop play.",
                "Magic: The Gathering is Wizards of the Coast's collectible card game of planeswalkers, spells, and formats."
            ),
            hub(
                "card-games",
                "Magic: The Gathering Cards",
                "card-games",
                "Sets, formats, and competitive Magic.",
                "Magic's card-game shelf covers Standard, Modern, Commander, and the expanding Multiverse of sets."
            )
        ]
    },

    "vampire-the-masquerade": {
        hubs: [
            hub(
                "tabletop",
                "Vampire: The Masquerade Tabletop",
                "tabletop",
                "World of Darkness storytelling RPG.",
                "Vampire: The Masquerade is the tabletop RPG of Kindred politics, clans, and the Masquerade."
            ),
            hub(
                "books",
                "Vampire: The Masquerade Books",
                "books",
                "Novels and clan literature.",
                "Vampire books expand clan histories and chronicles within the World of Darkness."
            ),
            hub(
                "television",
                "Vampire: The Masquerade Television",
                "television",
                "Screen adaptations of the World of Darkness.",
                "Vampire television brings Kindred stories from the tabletop mythos to the screen."
            )
        ]
    },

    battletech: {
        hubs: [
            hub(
                "tabletop",
                "BattleTech Tabletop",
                "tabletop",
                "Mech wargame and RPG setting.",
                "BattleTech tabletop covers miniatures, board games, and the Inner Sphere's succession wars."
            ),
            hub(
                "video-games",
                "BattleTech Video Games",
                "video-games",
                "MechWarrior and BattleTech digital games.",
                "BattleTech video games include MechWarrior sims and turn-based tactics in the Inner Sphere."
            )
        ]
    },

    "call-of-cthulhu": {
        hubs: [
            hub(
                "tabletop",
                "Call of Cthulhu Tabletop",
                "tabletop",
                "Chaosium investigative horror RPG.",
                "Call of Cthulhu tabletop is Chaosium's RPG of investigators confronting Lovecraftian Mythos horrors."
            ),
            hub(
                "books",
                "Call of Cthulhu / Mythos Books",
                "books",
                "Lovecraft and Mythos literature.",
                "Mythos books underpin Call of Cthulhu — Lovecraft's fiction and later expansions investigators draw from."
            )
        ]
    },

    naruto: {
        hubs: [
            hub(
                "manga",
                "Naruto Manga",
                "comics",
                "Masashi Kishimoto's original Jump manga.",
                "The Naruto manga follows Naruto Uzumaki from academy graduate toward becoming Hokage.",
                ["naruto-manga"]
            ),
            hub(
                "anime",
                "Naruto Anime",
                "anime",
                "Television adaptations including Shippuden.",
                "Naruto anime adapts Kishimoto's manga across Part I and Naruto Shippuden.",
                ["naruto-anime", "naruto-shippuden"]
            )
        ]
    },

    "demon-slayer": {
        hubs: [
            hub(
                "manga",
                "Demon Slayer Manga",
                "comics",
                "Koyoharu Gotouge's original manga.",
                "The Demon Slayer manga follows Tanjiro Kamado's fight against Muzan and the Twelve Kizuki.",
                ["demon-slayer-manga"]
            ),
            hub(
                "anime",
                "Demon Slayer Anime",
                "anime",
                "Ufotable's television and film adaptations.",
                "The Demon Slayer anime by ufotable adapts the manga with acclaimed fight animation.",
                ["demon-slayer-anime"]
            )
        ]
    },

    "attack-on-titan": {
        hubs: [
            hub(
                "manga",
                "Attack on Titan Manga",
                "comics",
                "Hajime Isayama's original manga.",
                "The Attack on Titan manga follows Eren Yeager and the Survey Corps against the Titans and the truth beyond the walls.",
                ["attack-on-titan-manga"]
            ),
            hub(
                "anime",
                "Attack on Titan Anime",
                "anime",
                "Television adaptation of Isayama's manga.",
                "The Attack on Titan anime adapts the manga's war for humanity inside and beyond the Walls.",
                ["attack-on-titan-anime"]
            )
        ]
    }
};

function getFormatHubConfig(subjectId) {
    return FORMAT_HUBS[subjectId] || null;
}

function categoryPathsForSubject(subjectId, rootSlug) {
    const config = getFormatHubConfig(subjectId);
    if (!config?.hubs?.length) {
        return {};
    }

    const root = rootSlug || subjectId;
    const paths = {};

    for (const entry of config.hubs) {
        if (entry.category) {
            paths[entry.category] = `/${root}/${entry.slug}`;
        }
    }

    return paths;
}

function formatHubSummaries(subjectId, rootSlug) {
    const config = getFormatHubConfig(subjectId);
    if (!config?.hubs?.length) {
        return [];
    }

    const root = rootSlug || subjectId;
    return config.hubs.map((entry) => ({
        slug: `${root}-${entry.slug}-hub`,
        urlSlug: entry.slug,
        name: entry.name,
        category: entry.category
    }));
}

function subjectsWithFormatHubs() {
    return Object.keys(FORMAT_HUBS);
}

module.exports = {
    FORMAT_HUBS,
    getFormatHubConfig,
    categoryPathsForSubject,
    formatHubSummaries,
    subjectsWithFormatHubs,
    work,
    hub
};
