/**
 * Depth fillers so every category can reach ~20 subjects.
 * New ids only — avoid collisions with expansionCatalog / categoryMinimums / major shelves.
 */

const EXPANSION_DEPTH_FILLERS = {
    "mythology": [
        {
            id: "chinese-mythology",
            name: "Chinese mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c43030",
            blurb: "Dragons, immortals, heavenly bureaucracy, and the epic cycles that structure East Asian sacred narrative."
        },
        {
            id: "japanese-mythology",
            name: "Japanese mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#e8a0b0",
            blurb: "Kami, creation myths, and Shinto-Buddhist cosmologies mapped from the Kojiki and Nihon Shoki."
        },
        {
            id: "aztec-mythology",
            name: "Aztec mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c45a2c",
            blurb: "Mexica gods, suns of creation, and ritual calendars that still shape Mesoamerican myth study."
        },
        {
            id: "mayan-mythology",
            name: "Mayan mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#2d6a4f",
            blurb: "Hero Twins, underworld Xibalba, and the Popol Vuh cycles of Maya sacred narrative."
        },
        {
            id: "inca-mythology",
            name: "Inca mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Inti, Viracocha, Andean sacred geography, and the imperial religion of Tawantinsuyu."
        },
        {
            id: "slavic-mythology",
            name: "Slavic mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#5a6a8a",
            blurb: "Perun, Veles, household spirits, and the reconstructed pantheons of Eastern European folk belief."
        },
        {
            id: "finnish-mythology",
            name: "Finnish mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#4a7a9a",
            blurb: "Kalevala heroes, sampo quests, and the northern epic tradition of Finland and Karelia."
        },
        {
            id: "polynesian-mythology",
            name: "Polynesian mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#1a8a7a",
            blurb: "Maui, voyaging gods, and oceanic cosmologies spanning Hawaii, Aotearoa, and the Pacific."
        },
        {
            id: "mesopotamian-mythology",
            name: "Mesopotamian mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c9a05a",
            blurb: "Gilgamesh, Enuma Elish, and the temple pantheons of Sumer, Akkad, Babylon, and Assyria."
        },
        {
            id: "persian-mythology",
            name: "Persian mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#8a2a2a",
            blurb: "Avestan divinities, Shahnameh heroes, and the dualistic cosmos of ancient Iranian tradition."
        },
        {
            id: "korean-mythology",
            name: "Korean mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#1a4a8a",
            blurb: "Dangun foundation myths, mountain spirits, and the shamanic-royal lore of the Korean peninsula."
        },
        {
            id: "yoruba-mythology",
            name: "Yoruba mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#e07020",
            blurb: "Orishas, Ifá divination, and the West African sacred system that crossed the Atlantic."
        },
        {
            id: "aboriginal-australian-mythology",
            name: "Aboriginal Australian mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#8a5a2a",
            blurb: "Dreaming tracks, ancestral beings, and Country-centered cosmologies across Indigenous Australia."
        },
        {
            id: "roman-mythology",
            name: "Roman mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#8b1a1a",
            blurb: "Capitoline gods, founding legends, and the syncretic pantheon that absorbed Greek and Italic cults."
        },
        {
            id: "phoenician-mythology",
            name: "Phoenician mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#2a5a6a",
            blurb: "Baal, Astarte, and Levantine maritime-city cults that linked Mediterranean sacred trade."
        },
        {
            id: "baltic-mythology",
            name: "Baltic mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#6a8a4a",
            blurb: "Perkūnas, earth mothers, and the reconstructed folk cosmologies of Lithuania and Latvia."
        },
        {
            id: "sami-mythology",
            name: "Sámi mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#5a7a6a",
            blurb: "Noaidi practice, sacred animals, and Arctic cosmologies of the Sámi homeland."
        },
        {
            id: "hittite-mythology",
            name: "Hittite mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#a08050",
            blurb: "Anatolian storm gods, Kumarbi cycles, and the imperial archives of Hattusa."
        },
        {
            id: "celtic-continental-mythology",
            name: "Continental Celtic mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#3a7a4a",
            blurb: "Gaulish deities, sacred groves, and the continental Celtic cults beyond Insular cycles."
        },
        {
            id: "zoroastrian-mythology",
            name: "Zoroastrian mythology",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#d4a017",
            blurb: "Ahura Mazda, dualistic struggle, and the Avestan narrative world of ancient Iran."
        }
    ],
    "history": [
        {
            id: "byzantine-empire",
            name: "Byzantine Empire",
            rights: "Public historical record / respective modern rights holders",
            accent: "#6a2a8a",
            blurb: "Constantinople, emperors, theology, and the medieval Roman state that outlasted the West."
        },
        {
            id: "french-revolution",
            name: "French Revolution",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Estates, Terror, Napoleon’s rise, and the upheaval that remade European politics."
        },
        {
            id: "mongol-empire",
            name: "Mongol Empire",
            rights: "Public historical record / respective modern rights holders",
            accent: "#8a5a2a",
            blurb: "Khans, conquest routes, Pax Mongolica, and the largest contiguous land empire in history."
        },
        {
            id: "ottoman-empire",
            name: "Ottoman Empire",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2d5a27",
            blurb: "Sultans, Janissaries, sieges, and the multiethnic empire spanning three continents."
        },
        {
            id: "industrial-revolution",
            name: "Industrial Revolution",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a5a5a",
            blurb: "Factories, steam, urbanization, and the technological shift that remade labor and cities."
        },
        {
            id: "american-civil-war",
            name: "American Civil War",
            rights: "Public historical record / respective modern rights holders",
            accent: "#3a4a5a",
            blurb: "Secession, battles, emancipation, and the conflict that redefined the United States."
        },
        {
            id: "ancient-greece",
            name: "Ancient Greece",
            rights: "Public historical record / respective modern rights holders",
            accent: "#d4b45a",
            blurb: "City-states, philosophers, wars, and the classical culture that seeded Western civic myth."
        },
        {
            id: "renaissance-italy",
            name: "Renaissance Italy",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a3a",
            blurb: "City-states, patrons, artists, and the cultural rebirth centered on Florence and Rome."
        },
        {
            id: "meiji-restoration",
            name: "Meiji Restoration",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Japan’s rapid modernization, imperial reform, and the end of Tokugawa rule."
        },
        {
            id: "russian-revolution",
            name: "Russian Revolution",
            rights: "Public historical record / respective modern rights holders",
            accent: "#8b1a1a",
            blurb: "1917 upheavals, Bolsheviks, civil war, and the birth of the Soviet state."
        },
        {
            id: "spanish-civil-war",
            name: "Spanish Civil War",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Republicans, Nationalists, international brigades, and the prelude conflict of WWII Europe."
        },
        {
            id: "han-dynasty",
            name: "Han dynasty",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Imperial China consolidation, Silk Road links, and the dynasty that named a people."
        },
        {
            id: "viking-age",
            name: "Viking Age",
            rights: "Public historical record / respective modern rights holders",
            accent: "#4a6a8a",
            blurb: "Raids, trade, settlement, and Norse expansion across the North Atlantic and Europe."
        },
        {
            id: "aztec-empire",
            name: "Aztec Empire",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a2c",
            blurb: "Tenochtitlan, tribute networks, and the Mexica imperial system before Spanish conquest."
        },
        {
            id: "achaemenid-empire",
            name: "Achaemenid Empire",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a05a",
            blurb: "Persian kings, satrapies, royal roads, and the first pan-Near Eastern superstate."
        },
        {
            id: "british-empire",
            name: "British Empire",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a6a",
            blurb: "Colonies, navy, trade companies, and the global dominion that reshaped the modern map."
        },
        {
            id: "the-crusades",
            name: "The Crusades",
            rights: "Public historical record / respective modern rights holders",
            accent: "#8a1a1a",
            blurb: "Holy wars, Levantine kingdoms, and the medieval Christian-Muslim contest for sacred cities."
        },
        {
            id: "world-war-i",
            name: "World War I",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a6a48",
            blurb: "Trenches, empires collapsing, and the Great War that remade the twentieth century."
        },
        {
            id: "tang-dynasty",
            name: "Tang dynasty",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e07020",
            blurb: "Cosmopolitan Chang’an, poetry, Buddhism, and China’s medieval golden age."
        },
        {
            id: "age-of-exploration",
            name: "Age of Exploration",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2a7a5a",
            blurb: "Iberian voyages, new maps, contact zones, and the early modern scramble for oceans and empires."
        }
    ],
    "horror": [
        {
            id: "friday-the-13th",
            name: "Friday the 13th",
            rights: "New Line / Paramount / respective rights holders",
            accent: "#1a5a2a",
            blurb: "Camp Crystal Lake, Jason Voorhees, and the slasher template of masked revenge."
        },
        {
            id: "nightmare-on-elm-street",
            name: "A Nightmare on Elm Street",
            rights: "New Line / Warner Bros. / respective rights holders",
            accent: "#6a2a8a",
            blurb: "Freddy Krueger, dream-kills, and the suburban nightmare franchise that redefined 1980s horror."
        },
        {
            id: "saw-franchise",
            name: "Saw",
            rights: "Lionsgate / respective rights holders",
            accent: "#8a1a1a",
            blurb: "Jigsaw traps, moral tests, and the torture-puzzle mythology of modern horror cinema."
        },
        {
            id: "evil-dead",
            name: "Evil Dead",
            rights: "Renaissance / Sony / respective rights holders",
            accent: "#4a5a2a",
            blurb: "Necronomicon chaos, Deadites, and Ash’s cabin-cabin continuum of gonzo horror."
        },
        {
            id: "hellraiser",
            name: "Hellraiser",
            rights: "Dimension / Spyglass / respective rights holders",
            accent: "#8b0000",
            blurb: "Cenobites, lament configurations, and Clive Barker’s pain-as-pleasure underworld."
        },
        {
            id: "candyman-franchise",
            name: "Candyman",
            rights: "Universal / MGM / respective rights holders",
            accent: "#c9a227",
            blurb: "Urban legend invocation, Bee-swarm mythology, and the Chicago housing-project haunt."
        },
        {
            id: "scream-franchise",
            name: "Scream",
            rights: "Dimension / Paramount / respective rights holders",
            accent: "#8b1a1a",
            blurb: "Ghostface, meta-rules, and the self-aware slasher reboot that remade 1990s horror."
        },
        {
            id: "conjuring-universe",
            name: "The Conjuring Universe",
            rights: "Warner Bros. / New Line / respective rights holders",
            accent: "#3a2a4a",
            blurb: "Warrens case files, shared hauntings, and the interconnected modern studio horror mythos."
        },
        {
            id: "ring-franchise",
            name: "The Ring / Ringu",
            rights: "Toho / DreamWorks / respective rights holders",
            accent: "#5a6a5a",
            blurb: "Cursed videotape, Sadako/Samara, and the J-horror contagion that crossed the Pacific."
        },
        {
            id: "ju-on-grudge",
            name: "Ju-On / The Grudge",
            rights: "Toei / Sony / respective rights holders",
            accent: "#4a4a4a",
            blurb: "Curse houses, Kayako, and the contagion haunt that defined early-2000s J-horror."
        },
        {
            id: "paranormal-activity",
            name: "Paranormal Activity",
            rights: "Paramount / respective rights holders",
            accent: "#2a2a2a",
            blurb: "Found-footage hauntings, Blumhouse scale, and the domestic demon that launched a franchise."
        },
        {
            id: "insidious-franchise",
            name: "Insidious",
            rights: "Sony / Blumhouse / respective rights holders",
            accent: "#6a4a8a",
            blurb: "The Further, astral predators, and the Lambert family continuum of dream-realm dread."
        },
        {
            id: "it-stephen-king",
            name: "It (Stephen King)",
            rights: "King estate / Warner Bros. / respective rights holders",
            accent: "#c43030",
            blurb: "Pennywise, Derry, and the clown-shaped cosmic evil of King’s Losers’ Club saga."
        },
        {
            id: "pet-sematary-lore",
            name: "Pet Sematary",
            rights: "King estate / Paramount / respective rights holders",
            accent: "#5a6a48",
            blurb: "Micmac burial ground, resurrection costs, and King’s New England death-road myth."
        },
        {
            id: "cabin-in-the-woods-lore",
            name: "The Cabin in the Woods",
            rights: "Lionsgate / respective rights holders",
            accent: "#6a5a3a",
            blurb: "Ritual facilities, genre gods, and the meta-horror machine behind the cabin trope."
        },
        {
            id: "american-horror-story",
            name: "American Horror Story",
            rights: "FX / Disney / respective rights holders",
            accent: "#8b1a1a",
            blurb: "Anthology seasons, recurring casts, and the Ryan Murphy horror carnival of American dread."
        },
        {
            id: "twin-peaks-horror",
            name: "Twin Peaks",
            rights: "Lynch/Frost / Showtime / respective rights holders",
            accent: "#6a2a8a",
            blurb: "Black Lodge, Laura Palmer, and the surreal Pacific Northwest mythos of small-town evil."
        },
        {
            id: "stranger-things-horror",
            name: "Stranger Things",
            rights: "Netflix / respective rights holders",
            accent: "#c43030",
            blurb: "Upside Down, Hawkins labs, and the 1980s kids-vs-monsters continuum of streaming horror."
        },
        {
            id: "blair-witch",
            name: "The Blair Witch Project",
            rights: "Lionsgate / respective rights holders",
            accent: "#3a4a3a",
            blurb: "Burkittsville woods, found footage, and the indie myth that sold a curse as documentary."
        },
        {
            id: "nosferatu-lore",
            name: "Nosferatu",
            rights: "Public-domain Murnau / respective modern rights holders",
            accent: "#2a2a2a",
            blurb: "Orlok’s plague-shadow, Expressionist dread, and the unauthorized Dracula that became its own icon."
        }
    ],
    "western-animation": [
        {
            id: "family-guy",
            name: "Family Guy",
            rights: "Fox / Disney / respective rights holders",
            accent: "#5b9cff",
            blurb: "Cutaway gags, Quahog chaos, and the long-running adult animation that defined 2000s Fox comedy."
        },
        {
            id: "south-park",
            name: "South Park",
            rights: "Comedy Central / Paramount / respective rights holders",
            accent: "#4a9a3a",
            blurb: "Cutout chaos, topical satire, and the mountain-town kids who broke cable comedy rules."
        },
        {
            id: "futurama",
            name: "Futurama",
            rights: "Fox / Comedy Central / Hulu / respective rights holders",
            accent: "#5b9cff",
            blurb: "Planet Express crew, sci-fi gags, and Groening’s future that keeps getting revived."
        },
        {
            id: "bob-burger",
            name: "Bob's Burgers",
            rights: "Fox / Disney / respective rights holders",
            accent: "#e07020",
            blurb: "Belcher family absurdism, musical episodes, and the warmest weird restaurant in animation."
        },
        {
            id: "archer-series",
            name: "Archer",
            rights: "FX / respective rights holders",
            accent: "#c43030",
            blurb: "Spy-agency incompetence, continuity resets, and the stylish adult toon that kept reinventing itself."
        },
        {
            id: "bojack-horseman",
            name: "BoJack Horseman",
            rights: "Netflix / respective rights holders",
            accent: "#6a4a3a",
            blurb: "Hollywood depression allegory, talking-animal satire, and prestige adult animation’s emotional peak."
        },
        {
            id: "gravity-falls",
            name: "Gravity Falls",
            rights: "Disney / respective rights holders",
            accent: "#2a5a3a",
            blurb: "Mystery shack ciphers, twin siblings, and the serialized kids’ conspiracy show that rewarded rewatches."
        },
        {
            id: "steven-universe",
            name: "Steven Universe",
            rights: "Cartoon Network / Warner Bros. / respective rights holders",
            accent: "#e8a0c0",
            blurb: "Gem war history, found family, and the queer-coded space opera of Beach City."
        },
        {
            id: "phineas-and-ferb",
            name: "Phineas and Ferb",
            rights: "Disney / respective rights holders",
            accent: "#5b9cff",
            blurb: "Summer invention gags, Doofenshmirtz schemes, and the musical suburban cartoon machine."
        },
        {
            id: "teen-titans-go",
            name: "Teen Titans Go!",
            rights: "Warner Bros. / Cartoon Network / respective rights holders",
            accent: "#6a4cff",
            blurb: "Irreverent Titans shorts energy, meme pacing, and DC kids’ comedy that outran its source tone."
        },
        {
            id: "batman-the-animated-series",
            name: "Batman: The Animated Series",
            rights: "Warner Bros. / respective rights holders",
            accent: "#2a2a4a",
            blurb: "Art Dec Gotham, redefined villains, and the gold standard of Western superhero animation."
        },
        {
            id: "x-men-the-animated-series",
            name: "X-Men: The Animated Series",
            rights: "Marvel / Disney / respective rights holders",
            accent: "#c43030",
            blurb: "Mutant soap opera, 90s continuity, and the cartoon that carried comics lore to Saturday mornings."
        },
        {
            id: "samurai-jack",
            name: "Samurai Jack",
            rights: "Cartoon Network / Warner Bros. / respective rights holders",
            accent: "#c9a227",
            blurb: "Time-displaced warrior, Aku, and Genndy Tartakovsky’s cinematic silent-action epic."
        },
        {
            id: "regular-show",
            name: "Regular Show",
            rights: "Cartoon Network / Warner Bros. / respective rights holders",
            accent: "#5a6a8a",
            blurb: "Park-job surrealism, death games, and the stoner-comedy vibe that became kids’ prestige weird."
        },
        {
            id: "the-owl-house",
            name: "The Owl House",
            rights: "Disney / respective rights holders",
            accent: "#6a4a8a",
            blurb: "Boiling Isles magic, queer found family, and the Disney Channel fantasy that built a fierce fandom."
        },
        {
            id: "amphibia",
            name: "Amphibia",
            rights: "Disney / respective rights holders",
            accent: "#3a8a4a",
            blurb: "Frog-world isekai, wartime lore payoff, and a kids’ adventure with surprising epic stakes."
        },
        {
            id: "arcane-league",
            name: "Arcane",
            rights: "Riot / Netflix / respective rights holders",
            accent: "#5b7cff",
            blurb: "Piltover–Zaun class war, Hextech, and the League of Legends prestige animated saga."
        },
        {
            id: "castlevania-animated",
            name: "Castlevania (animated)",
            rights: "Netflix / Konami / respective rights holders",
            accent: "#8b1a1a",
            blurb: "Belmonts, Dracula’s war, and the gore-soaked adaptation of Konami’s gothic game lore."
        },
        {
            id: "invincible-animated",
            name: "Invincible (animated)",
            rights: "Amazon / Image / respective rights holders",
            accent: "#c43030",
            blurb: "Viltrumite empire secrets, bloodied cape deconstruction, and Image’s superhero epic on screen."
        },
        {
            id: "bluey-series",
            name: "Bluey",
            rights: "Ludo / BBC / Disney / respective rights holders",
            accent: "#5b9cff",
            blurb: "Heeler family play-as-storytelling, Australian suburb warmth, and the preschool show adults quote."
        }
    ],
    "toys": [
        {
            id: "transformers-toys",
            name: "Transformers (toys)",
            rights: "Hasbro / Takara Tomy / respective rights holders",
            accent: "#c43030",
            blurb: "Converting robots, factions, and the toyline that launched a multimedia war of Autobots and Decepticons."
        },
        {
            id: "he-man-motu",
            name: "Masters of the Universe",
            rights: "Mattel / respective rights holders",
            accent: "#c9a227",
            blurb: "Eternia, Castle Grayskull, and the sword-and-sorcery toy myth of He-Man and Skeletor."
        },
        {
            id: "teenage-mutant-ninja-turtles-toys",
            name: "TMNT toys",
            rights: "Playmates / Nickelodeon / respective rights holders",
            accent: "#3a8a3a",
            blurb: "Action figures, vehicles, and the sewer-hero toy boom that mirrored the turtles’ media explosion."
        },
        {
            id: "star-wars-toys",
            name: "Star Wars toys",
            rights: "Hasbro / Lucasfilm / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Kenner-to-Hasbro figures, vehicles, and the collecting lore that mapped a galaxy onto shelves."
        },
        {
            id: "matchbox-cars",
            name: "Matchbox",
            rights: "Mattel / respective rights holders",
            accent: "#e07020",
            blurb: "Die-cast miniatures, series numbering, and the rival brand history beside Hot Wheels."
        },
        {
            id: "nerf",
            name: "Nerf",
            rights: "Hasbro / respective rights holders",
            accent: "#e07020",
            blurb: "Foam blasters, dart wars, and the backyard combat toyline that became a lifestyle brand."
        },
        {
            id: "polly-pocket",
            name: "Polly Pocket",
            rights: "Mattel / respective rights holders",
            accent: "#e8a0c0",
            blurb: "Micro dolls, compact worlds, and the pocket-scale playsets that defined 1990s collecting."
        },
        {
            id: "bratz",
            name: "Bratz",
            rights: "MGA Entertainment / respective rights holders",
            accent: "#6a4cff",
            blurb: "Fashion dolls, attitude branding, and the early-2000s rival that challenged Barbie dominance."
        },
        {
            id: "american-girl",
            name: "American Girl",
            rights: "Mattel / respective rights holders",
            accent: "#c45a3a",
            blurb: "Historical dolls, stories, and the character-driven collecting brand built on American eras."
        },
        {
            id: "beanie-babies",
            name: "Beanie Babies",
            rights: "Ty Inc. / respective rights holders",
            accent: "#5b9cff",
            blurb: "Plush tags, retired drops, and the 1990s collectible frenzy that taught scarcity marketing."
        },
        {
            id: "furby",
            name: "Furby",
            rights: "Hasbro / respective rights holders",
            accent: "#e8c14a",
            blurb: "Electronic chatter, Furbish language, and the interactive pet toy that defined late-90s shelves."
        },
        {
            id: "tamagotchi",
            name: "Tamagotchi",
            rights: "Bandai / respective rights holders",
            accent: "#e0459a",
            blurb: "Virtual pets, care loops, and the pocket digital companion craze from Japan."
        },
        {
            id: "yo-kai-watch-toys",
            name: "Yo-kai Watch toys",
            rights: "Level-5 / Hasbro / respective rights holders",
            accent: "#5b9cff",
            blurb: "Medal collecting, watch devices, and the yokai-toy multimedia push aimed at Pokémon’s lane."
        },
        {
            id: "beyblade",
            name: "Beyblade",
            rights: "Takara Tomy / Hasbro / respective rights holders",
            accent: "#c43030",
            blurb: "Spinning tops, stadium battles, and the duel-toy franchise with anime-backed lore."
        },
        {
            id: "bakugan",
            name: "Bakugan",
            rights: "Spin Master / respective rights holders",
            accent: "#5b7cff",
            blurb: "Transforming spheres, card-linked battles, and the mid-2000s arena toy phenomenon."
        },
        {
            id: "power-rangers-toys",
            name: "Power Rangers toys",
            rights: "Hasbro / Toei / respective rights holders",
            accent: "#c43030",
            blurb: "Zords, morphers, and the Sentai-adapted megazord mythology sold as action figures."
        },
        {
            id: "voltron-toys",
            name: "Voltron",
            rights: "World Events / DreamWorks / respective rights holders",
            accent: "#c9a227",
            blurb: "Lion combiners, Defender lore, and the mecha toyline that defined Western combining robots."
        },
        {
            id: "gundam-gunpla",
            name: "Gundam Gunpla",
            rights: "Bandai / Sunrise / respective rights holders",
            accent: "#e8e8e8",
            blurb: "Model kits, mobile suit grades, and the builder culture around the Gundam franchise."
        },
        {
            id: "sylvanian-families",
            name: "Sylvanian Families / Calico Critters",
            rights: "Epoch / respective rights holders",
            accent: "#e8a0b0",
            blurb: "Flocked animal families, village playsets, and the gentle collecting world of miniature homes."
        },
        {
            id: "playmobil",
            name: "Playmobil",
            rights: "geobra Brandstätter / respective rights holders",
            accent: "#e07020",
            blurb: "Modular figures, themed worlds, and the German system-toy alternative to brick building."
        }
    ],
    "wrestling": [
        {
            id: "nwa-wrestling",
            name: "NWA",
            rights: "NWA / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Territories, world title lineage, and the alliance that structured pre-national American wrestling."
        },
        {
            id: "wrestle-kingdom",
            name: "Wrestle Kingdom",
            rights: "NJPW / respective rights holders",
            accent: "#c9a227",
            blurb: "Tokyo Dome January tradition, title plate tectonics, and New Japan’s yearly myth-making card."
        },
        {
            id: "wwf-golden-era",
            name: "WWF Golden Era",
            rights: "WWE / respective rights holders",
            accent: "#c43030",
            blurb: "Hulkamania, Saturday Night’s Main Event, and the 1980s national expansion myth."
        },
        {
            id: "attitude-era",
            name: "Attitude Era",
            rights: "WWE / respective rights holders",
            accent: "#1a1a1a",
            blurb: "DX, Corporation, hardcore TV, and the late-90s boom that redefined sports entertainment."
        },
        {
            id: "ruthless-aggression",
            name: "Ruthless Aggression Era",
            rights: "WWE / respective rights holders",
            accent: "#5a5a5a",
            blurb: "Brand splits, rising stars, and the post-Invasion rebuild of early-2000s WWE."
        },
        {
            id: "new-japan-strong",
            name: "NJPW Strong / US expansion",
            rights: "NJPW / respective rights holders",
            accent: "#c43030",
            blurb: "American tapings, junior heavyweight showcases, and New Japan’s overseas storytelling arm."
        },
        {
            id: "cmll-wrestling",
            name: "CMLL",
            rights: "CMLL / respective rights holders",
            accent: "#c9a227",
            blurb: "Mexico City arenas, rudos and técnicos, and the oldest active lucha libre promotion."
        },
        {
            id: "aaa-wrestling",
            name: "AAA",
            rights: "AAA / respective rights holders",
            accent: "#c43030",
            blurb: "Triplemanías, high-spot lucha, and the flashier rival to CMLL’s classical style."
        },
        {
            id: "roh-wrestling",
            name: "Ring of Honor",
            rights: "AEW / ROH / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Pure wrestling ethos, title lineages, and the indie promotion that midwifed modern US scene stars."
        },
        {
            id: "tna-impact",
            name: "TNA / Impact Wrestling",
            rights: "Anthem / respective rights holders",
            accent: "#e07020",
            blurb: "X Division, Bound for Glory, and the alternative national brand of the 2000s–2010s."
        },
        {
            id: "pro-wrestling-noah",
            name: "Pro Wrestling Noah",
            rights: "Noah / respective rights holders",
            accent: "#1a3a6a",
            blurb: "GHC titles, Misawa legacy, and the All Japan splinter that defined 2000s puroresu."
        },
        {
            id: "all-japan-pro-wrestling",
            name: "All Japan Pro Wrestling",
            rights: "AJPW / respective rights holders",
            accent: "#c43030",
            blurb: "King’s Road style, Triple Crown, and the heavyweight tradition of Japanese men’s wrestling."
        },
        {
            id: "starrcade-legacy",
            name: "Starrcade",
            rights: "WWE / NWA legacy / respective rights holders",
            accent: "#8b1a1a",
            blurb: "Thanksgiving tradition, Flair eras, and the NWA/WCW supercard that preceded WrestleMania’s dominance."
        },
        {
            id: "wrestlemania-history",
            name: "WrestleMania history",
            rights: "WWE / respective rights holders",
            accent: "#c9a227",
            blurb: "Card myths, celebrity crossovers, and the annual event that became wrestling’s Super Bowl."
        },
        {
            id: "g1-climax",
            name: "G1 Climax",
            rights: "NJPW / respective rights holders",
            accent: "#c43030",
            blurb: "Round-robin war, block standings, and the tournament that crowns New Japan’s yearly narrative."
        },
        {
            id: "lucha-underground",
            name: "Lucha Underground",
            rights: "El Rey / respective rights holders",
            accent: "#6a2a8a",
            blurb: "Temple mythology, cinematic lucha, and the cult TV promotion with supernatural booking."
        },
        {
            id: "progress-wrestling-uk",
            name: "PROGRESS Wrestling",
            rights: "PROGRESS / respective rights holders",
            accent: "#1a1a1a",
            blurb: "London indie supercards, chapter numbering, and the UK scene’s breakout promotion."
        },
        {
            id: "ddt-pro-wrestling",
            name: "DDT Pro-Wrestling",
            rights: "DDT / respective rights holders",
            accent: "#e07020",
            blurb: "Comedy-meets-athleticism, Ironman Heavymetalweight chaos, and Japanese entertainment puroresu."
        },
        {
            id: "stardom-wrestling",
            name: "World Wonder Ring Stardom",
            rights: "Stardom / Bushiroad / respective rights holders",
            accent: "#e0459a",
            blurb: "Joshi factions, 5 Star Grand Prix, and the flagship women’s promotion of modern Japan."
        },
        {
            id: "wwe-nxt",
            name: "NXT",
            rights: "WWE / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Developmental-to-brand evolution, TakeOvers, and the black-and-gold era that redefined WWE’s third brand."
        }
    ],
    "science-nature": [
        {
            id: "plate-tectonics",
            name: "Plate tectonics",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#8a5a2a",
            blurb: "Continental drift, subduction, and the unifying theory that remapped Earth’s geology."
        },
        {
            id: "evolution-natural-selection",
            name: "Evolution & natural selection",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#2d5a27",
            blurb: "Darwin, Wallace, genetics, and the living tree of descent that organizes biology."
        },
        {
            id: "climate-science",
            name: "Climate science",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#5b9cff",
            blurb: "Atmosphere, ice cores, models, and the evidence trail of planetary climate change."
        },
        {
            id: "human-anatomy",
            name: "Human anatomy",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#c45a3a",
            blurb: "Systems, organs, and the mapped body that medical science keeps refining."
        },
        {
            id: "genetics-dna",
            name: "Genetics & DNA",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#6a4cff",
            blurb: "Double helix, inheritance, CRISPR, and the code that structures modern biology."
        },
        {
            id: "astronomy-observatories",
            name: "Astronomy & observatories",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#1a2a4a",
            blurb: "Telescopes, surveys, catalogs, and the institutions that chart the night sky."
        },
        {
            id: "deep-sea-exploration",
            name: "Deep-sea exploration",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#1a3a5a",
            blurb: "Trenches, submersibles, vents, and the abyss that still yields new species and maps."
        },
        {
            id: "weather-meteorology",
            name: "Weather & meteorology",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#5b9cff",
            blurb: "Fronts, forecasts, storms, and the science that turned sky-watching into prediction."
        },
        {
            id: "paleontology-fossils",
            name: "Paleontology & fossils",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#8a6a3a",
            blurb: "Excavations, deep time, and the fossil record beyond dinosaurs alone."
        },
        {
            id: "botany-plant-science",
            name: "Botany & plant science",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#3a8a3a",
            blurb: "Taxonomy, photosynthesis, and the green world that feeds and fuels ecosystems."
        },
        {
            id: "entomology-insects",
            name: "Entomology",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#c9a227",
            blurb: "Insects, colonies, metamorphosis, and the most diverse animal lineage on Earth."
        },
        {
            id: "ornithology-birds",
            name: "Ornithology",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#5b7cff",
            blurb: "Migration, song, classification, and the avian world birders and scientists map together."
        },
        {
            id: "geology-minerals",
            name: "Geology & minerals",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#6a5a4a",
            blurb: "Rocks, crystals, deep Earth processes, and the material history underfoot."
        },
        {
            id: "neuroscience-brain",
            name: "Neuroscience",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#e0459a",
            blurb: "Neurons, networks, and the brain science rewriting mind and behavior."
        },
        {
            id: "ecology-ecosystems",
            name: "Ecology & ecosystems",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#2d6a4f",
            blurb: "Food webs, biomes, and the interdependence that defines living landscapes."
        },
        {
            id: "quantum-physics",
            name: "Quantum physics",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#6a4cff",
            blurb: "Uncertainty, entanglement, and the microscopic rules that upended classical reality."
        },
        {
            id: "chemistry-elements",
            name: "Chemistry & the elements",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#e07020",
            blurb: "Periodic table, reactions, and the elemental language of matter."
        },
        {
            id: "microbiology-germs",
            name: "Microbiology",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#6a8a40",
            blurb: "Bacteria, viruses, microbiomes, and the invisible life that shapes health and history."
        },
        {
            id: "conservation-biology",
            name: "Conservation biology",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#2a7a5a",
            blurb: "Endangered species, habitats, and the science of keeping biodiversity alive."
        },
        {
            id: "cartography-maps",
            name: "Cartography & maps",
            rights: "Public scientific record / respective institutions and rights holders",
            accent: "#4a5a7a",
            blurb: "Projections, surveys, and the evolving craft of representing Earth on a page."
        }
    ],
    "podcasts": [
        {
            id: "radiolab",
            name: "Radiolab",
            rights: "WNYC / respective rights holders",
            accent: "#5b9cff",
            blurb: "Sound-designed science and curiosity stories that remade public-radio storytelling."
        },
        {
            id: "my-favorite-murder",
            name: "My Favorite Murder",
            rights: "Exactly Right / respective rights holders",
            accent: "#c43030",
            blurb: "True-crime comedy, SSDGM culture, and the fan community that grew around weekly cases."
        },
        {
            id: "stuff-you-should-know",
            name: "Stuff You Should Know",
            rights: "iHeart / respective rights holders",
            accent: "#e07020",
            blurb: "Explainer duos, how-things-work deep dives, and the long-running curiosity podcast template."
        },
        {
            id: "the-daily-podcast",
            name: "The Daily",
            rights: "The New York Times / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Weekday news explainers that turned newspaper journalism into habitual audio."
        },
        {
            id: "reply-all",
            name: "Reply All",
            rights: "Gimlet / Spotify / respective rights holders",
            accent: "#6a4cff",
            blurb: "Internet mysteries, tech human stories, and the podcast that mapped online weirdness."
        },
        {
            id: "hardcore-history",
            name: "Hardcore History",
            rights: "Dan Carlin / respective rights holders",
            accent: "#8a5a2a",
            blurb: "Marathon historical narratives and Carlin’s signature long-form war and empire deep dives."
        },
        {
            id: "the-joe-rogan-experience",
            name: "The Joe Rogan Experience",
            rights: "Spotify / respective rights holders",
            accent: "#2a5a3a",
            blurb: "Long-form interviews, cultural flashpoints, and the megaphone podcast of the 2010s–2020s."
        },
        {
            id: "conan-obrien-needs-a-friend",
            name: "Conan O'Brien Needs a Friend",
            rights: "Team Coco / SiriusXM / respective rights holders",
            accent: "#e07020",
            blurb: "Celebrity hangouts, staff chemistry, and late-night comedy’s second life in podcast form."
        },
        {
            id: "crime-junkie",
            name: "Crime Junkie",
            rights: "audiochuck / respective rights holders",
            accent: "#8b1a1a",
            blurb: "Case summaries, fan community, and one of true crime’s most-downloaded weekly shows."
        },
        {
            id: "99-percent-invisible",
            name: "99% Invisible",
            rights: "Roman Mars / SiriusXM / respective rights holders",
            accent: "#5a6a7a",
            blurb: "Design stories hiding in plain sight — architecture, objects, and the built world’s quiet lore."
        },
        {
            id: "planet-money",
            name: "Planet Money",
            rights: "NPR / respective rights holders",
            accent: "#2d5a27",
            blurb: "Economics explainers with narrative hooks that made markets listenable."
        },
        {
            id: "the-adventure-zone",
            name: "The Adventure Zone",
            rights: "Maximum Fun / respective rights holders",
            accent: "#c9a227",
            blurb: "McElroy D&D actual play that became a graphic-novel and stage-touring fandom."
        },
        {
            id: "mbmbam",
            name: "My Brother, My Brother and Me",
            rights: "Maximum Fun / respective rights holders",
            accent: "#5b9cff",
            blurb: "Advice-show chaos, bit lore, and the McElroy comedy podcast that built a multimedia empire."
        },
        {
            id: "last-podcast-on-the-left",
            name: "Last Podcast on the Left",
            rights: "The Last Podcast Network / respective rights holders",
            accent: "#8b1a1a",
            blurb: "True crime and occult comedy deep dives with dense research bits and cult following."
        },
        {
            id: "revisionist-history",
            name: "Revisionist History",
            rights: "Pushkin / respective rights holders",
            accent: "#c9a227",
            blurb: "Malcolm Gladwell’s contrarian case studies that reframe overlooked historical moments."
        },
        {
            id: "s-town",
            name: "S-Town",
            rights: "Serial Productions / respective rights holders",
            accent: "#5a6a48",
            blurb: "Literary nonfiction podcasting, John B. McLemore, and the Alabama clock-fixer saga."
        },
        {
            id: "homecoming-podcast",
            name: "Homecoming (podcast)",
            rights: "Gimlet / respective rights holders",
            accent: "#3a5a6a",
            blurb: "Scripted thriller audio that proved fiction podcasts could feel like prestige TV."
        },
        {
            id: "wolf-359",
            name: "Wolf 359",
            rights: "Kinda Evil Genius / respective rights holders",
            accent: "#5b9cff",
            blurb: "Spaceship audio drama, Hephaestus crew, and one of fiction podcasting’s landmark serials."
        },
        {
            id: "the-magnus-archives",
            name: "The Magnus Archives",
            rights: "Rusty Quill / respective rights holders",
            accent: "#6a2a8a",
            blurb: "Statement horror, Entities, and the archival anthology that defined modern audio horror lore."
        },
        {
            id: "dungeons-and-daddies",
            name: "Dungeons & Daddies",
            rights: "Dungeons & Daddies / respective rights holders",
            accent: "#c43030",
            blurb: "Actual-play comedy with serialized emotional arcs and a fiercely loyal tabletop-audio fandom."
        }
    ],
    "internet-culture": [
        {
            id: "4chan-history",
            name: "4chan history",
            rights: "4chan community history / respective rights holders",
            accent: "#33ff00",
            blurb: "Anonymous boards, meme genesis, and the chaotic imageboard that midwifed early web folklore."
        },
        {
            id: "tumblr-culture",
            name: "Tumblr culture",
            rights: "Automattic / respective rights holders",
            accent: "#001935",
            blurb: "Reblogs, fandom tagging, and the microblogging ecosystem that shaped 2010s youth culture."
        },
        {
            id: "twitter-x-history",
            name: "Twitter / X history",
            rights: "X Corp. / respective rights holders",
            accent: "#1da1f2",
            blurb: "Hashtags, ratios, and the public square that remade news and celebrity discourse."
        },
        {
            id: "instagram-culture",
            name: "Instagram culture",
            rights: "Meta / respective rights holders",
            accent: "#e1306c",
            blurb: "Filters, influencers, Stories, and the visual feed that redefined social performance."
        },
        {
            id: "vine-app",
            name: "Vine",
            rights: "Twitter legacy / respective rights holders",
            accent: "#00bf8f",
            blurb: "Six-second loops, early creator stars, and the short-video culture TikTok later inherited."
        },
        {
            id: "myspace-era",
            name: "MySpace era",
            rights: "MySpace / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Top Eight drama, custom HTML profiles, and the social network that ruled the mid-2000s."
        },
        {
            id: "something-awful",
            name: "Something Awful",
            rights: "Something Awful / respective rights holders",
            accent: "#8b1a1a",
            blurb: "Goons, Photoshop Phriday, and the forum culture that seeded countless internet comedy forms."
        },
        {
            id: "neopets",
            name: "Neopets",
            rights: "Neopets / respective rights holders",
            accent: "#5b9cff",
            blurb: "Virtual pets, Neopia lore, and the early browser-game world that raised a generation online."
        },
        {
            id: "runescape-culture",
            name: "RuneScape culture",
            rights: "Jagex / respective rights holders",
            accent: "#c9a227",
            blurb: "GE scams, skill grind lore, and the MMORPG community that became its own internet dialect."
        },
        {
            id: "world-of-warcraft-culture",
            name: "WoW internet culture",
            rights: "Blizzard / respective rights holders",
            accent: "#c43030",
            blurb: "Raid memes, private servers, and the MMO that spilled endlessly into forums and YouTube."
        },
        {
            id: "lets-play-culture",
            name: "Let's Play culture",
            rights: "Creator communities / respective platforms",
            accent: "#e07020",
            blurb: "Commentary playthroughs, early YouTube gaming, and the format that made watching play a genre."
        },
        {
            id: "speedrunning",
            name: "Speedrunning",
            rights: "Speedrun communities / respective rights holders",
            accent: "#5b7cff",
            blurb: "Any% routes, glitch discovery, and the competitive craft of finishing games impossibly fast."
        },
        {
            id: "creepypasta",
            name: "Creepypasta",
            rights: "Public internet folklore / respective rights holders",
            accent: "#2a2a2a",
            blurb: "Slender Man to local legends — copy-paste horror that became modern digital folklore."
        },
        {
            id: "fandom-wikis",
            name: "Fandom wikis",
            rights: "Fandom, Inc. / respective rights holders",
            accent: "#fa005a",
            blurb: "Canon databases, edit wars, and the wiki culture that archives every franchise detail."
        },
        {
            id: "discord-culture",
            name: "Discord culture",
            rights: "Discord Inc. / respective rights holders",
            accent: "#5865f2",
            blurb: "Servers, roles, and the chat platform that replaced forums for gaming and fandom life."
        },
        {
            id: "twitch-streaming",
            name: "Twitch streaming",
            rights: "Amazon / Twitch / respective rights holders",
            accent: "#9146ff",
            blurb: "Live chat rituals, emote lore, and the streaming platform that made watching play a career."
        },
        {
            id: "early-web-geocities",
            name: "GeoCities & early web",
            rights: "Public internet history / respective rights holders",
            accent: "#e07020",
            blurb: "Homepages, visitor counters, and the hand-built web before social platforms centralized culture."
        },
        {
            id: "napster-file-sharing",
            name: "Napster & file-sharing era",
            rights: "Public tech history / respective rights holders",
            accent: "#1a3a6a",
            blurb: "Peer-to-peer music, lawsuits, and the download culture that remade media distribution."
        },
        {
            id: "flash-games-era",
            name: "Flash games era",
            rights: "Public web history / respective rights holders",
            accent: "#e86020",
            blurb: "Newgrounds, browser portals, and the plugin playground that raised internet kids."
        },
        {
            id: "ai-generated-meme-culture",
            name: "AI-generated meme culture",
            rights: "Public internet culture / respective model providers",
            accent: "#6a4cff",
            blurb: "Prompt jokes, deepfake satire, and the 2020s meme layer built on generative models."
        }
    ],
    "theater": [
        {
            id: "musical-theatre-history",
            name: "Musical theatre history",
            rights: "Public theatre history / respective rights holders",
            accent: "#c9a227",
            blurb: "Book musicals, golden-age standards, and the Broadway–West End tradition of sung drama."
        },
        {
            id: "kabuki",
            name: "Kabuki",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c43030",
            blurb: "Onnagata, mie poses, and the stylized popular theatre of Edo Japan."
        },
        {
            id: "noh-theatre",
            name: "Noh theatre",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#e8e8e8",
            blurb: "Masks, chant, and the classical Japanese drama of ghosts and refined stillness."
        },
        {
            id: "commedia-dellarte",
            name: "Commedia dell'arte",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#e07020",
            blurb: "Stock masks, improvisation, and the Italian comedy troupes that seeded modern clown and farce."
        },
        {
            id: "broadway-golden-age",
            name: "Broadway golden age",
            rights: "Public theatre history / respective rights holders",
            accent: "#c9a227",
            blurb: "Rodgers & Hammerstein through mid-century hits — the canon that defined American musicals."
        },
        {
            id: "west-end-theatre",
            name: "West End theatre",
            rights: "Public theatre history / respective rights holders",
            accent: "#1a3a6a",
            blurb: "London’s commercial theatre district, long runs, and the other pole of English-language stage fame."
        },
        {
            id: "off-broadway",
            name: "Off-Broadway",
            rights: "Public theatre history / respective rights holders",
            accent: "#5a6a7a",
            blurb: "Intimate houses, experimental runs, and the New York stage ecosystem beyond the big marquees."
        },
        {
            id: "vaudeville",
            name: "Vaudeville",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a3a",
            blurb: "Variety bills, circuits, and the popular American stage that midwifed film and radio comedy."
        },
        {
            id: "elizabethan-theatre",
            name: "Elizabethan theatre",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#8a6a3a",
            blurb: "Playhouses, groundlings, and the commercial London stage that surrounded Shakespeare."
        },
        {
            id: "beijing-opera",
            name: "Beijing opera",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c43030",
            blurb: "Painted faces, martial spectacle, and the Chinese opera form that became a national emblem."
        },
        {
            id: "puppetry-traditions",
            name: "Puppetry traditions",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#8a5a2a",
            blurb: "Marionettes, shadow play, bunraku, and the global craft of performing with figures."
        },
        {
            id: "absurdist-theatre",
            name: "Absurdist theatre",
            rights: "Public literary tradition / respective rights holders",
            accent: "#4a4a4a",
            blurb: "Beckett, Ionesco, and the mid-century stage language of meaninglessness and ritual."
        },
        {
            id: "method-acting",
            name: "Method acting",
            rights: "Public theatre history / respective rights holders",
            accent: "#3a3a3a",
            blurb: "Stanislavski lineages, Actors Studio lore, and the psychological craft that remade screen acting."
        },
        {
            id: "circus-history",
            name: "Circus history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Rings, touring shows, and the spectacle tradition from Astley to modern cirque."
        },
        {
            id: "dance-theatre",
            name: "Dance theatre",
            rights: "Public arts history / respective rights holders",
            accent: "#e8a0c0",
            blurb: "Ballet-to-contemporary hybrids and the staged movement traditions that blur concert and drama."
        },
        {
            id: "improvisational-theatre",
            name: "Improvisational theatre",
            rights: "Public theatre practice / respective rights holders",
            accent: "#e07020",
            blurb: "Yes-and rules, Second City lineages, and the unscripted stage craft behind modern comedy."
        },
        {
            id: "les-miserables-musical",
            name: "Les Misérables (musical)",
            rights: "Cameron Mackintosh / respective rights holders",
            accent: "#c43030",
            blurb: "Barricades, sung-through score, and the global megamusical of Hugo’s revolutionary epic."
        },
        {
            id: "phantom-of-the-opera-musical",
            name: "The Phantom of the Opera",
            rights: "Really Useful Group / respective rights holders",
            accent: "#c9a227",
            blurb: "Mask, chandelier, and Lloyd Webber’s long-running Gothic romance of the Paris Opera."
        },
        {
            id: "rent-musical",
            name: "Rent",
            rights: "ABD / respective rights holders",
            accent: "#e0459a",
            blurb: "East Village bohemians, rock score, and the 1990s AIDS-era musical that redefined Broadway youth."
        },
        {
            id: "chicago-musical",
            name: "Chicago (musical)",
            rights: "Verdon/Fosse estates / respective rights holders",
            accent: "#c43030",
            blurb: "Jazz-age murderesses, Fosse style, and the cynical showbiz satire that keeps returning to the stage."
        }
    ],
    "fighting-games": [
        {
            id: "king-of-fighters",
            name: "The King of Fighters",
            rights: "SNK / respective rights holders",
            accent: "#c43030",
            blurb: "Team battles, Orochi saga, and SNK’s crossover fighter mythology."
        },
        {
            id: "virtua-fighter",
            name: "Virtua Fighter",
            rights: "Sega / respective rights holders",
            accent: "#5b9cff",
            blurb: "3D pioneers, dojo disciplines, and Sega’s foundational polygonal fighting series."
        },
        {
            id: "dead-or-alive",
            name: "Dead or Alive",
            rights: "Koei Tecmo / respective rights holders",
            accent: "#e0459a",
            blurb: "Counter systems, DOATEC conspiracy, and Team Ninja’s glamorous 3D fighter line."
        },
        {
            id: "blazblue",
            name: "BlazBlue",
            rights: "Arc System Works / respective rights holders",
            accent: "#5b7cff",
            blurb: "Azure lore, multiple timelines, and the dense anime-fighter successor to Guilty Gear’s spirit."
        },
        {
            id: "persona-arena",
            name: "Persona 4 Arena",
            rights: "Atlus / Arc System Works / respective rights holders",
            accent: "#c9a227",
            blurb: "Shadow selves, Investigation Team cast, and the Persona universe as a 2D fighter."
        },
        {
            id: "under-night-in-birth",
            name: "Under Night In-Birth",
            rights: "French Bread / respective rights holders",
            accent: "#6a2a8a",
            blurb: "Hollow Night, EXS powers, and the indie-rooted anime fighter with cult competitive depth."
        },
        {
            id: "melty-blood",
            name: "Melty Blood",
            rights: "Type-Moon / French Bread / respective rights holders",
            accent: "#8b1a1a",
            blurb: "Tsukihime cast, moonlit battles, and the foundational anime fighter of the Type-Moon continuum."
        },
        {
            id: "fantasy-strike",
            name: "Fantasy Strike",
            rights: "Sirlin Games / respective rights holders",
            accent: "#e07020",
            blurb: "Readable fundamentals fighter designed to teach competitive play without execution walls."
        },
        {
            id: "skullgirls",
            name: "Skullgirls",
            rights: "Lab Zero / Hidden Variable / respective rights holders",
            accent: "#e0459a",
            blurb: "Trio assists, art-deco nightmare world, and the indie 2D fighter with lush animation."
        },
        {
            id: "injustice-series",
            name: "Injustice",
            rights: "NetherRealm / Warner Bros. / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Regime Superman lore, DC roster wars, and NetherRealm’s multiverse fighter saga."
        },
        {
            id: "super-smash-bros",
            name: "Super Smash Bros.",
            rights: "Nintendo / respective rights holders",
            accent: "#c43030",
            blurb: "Crossover fighters, stage hazards, and Nintendo’s party-to-competitive platform fighter mythology."
        },
        {
            id: "marvel-vs-capcom",
            name: "Marvel vs. Capcom",
            rights: "Capcom / Marvel / respective rights holders",
            accent: "#c43030",
            blurb: "Tag chaos, assists, and the crossover mythology of comic heroes meeting Capcom icons."
        },
        {
            id: "capcom-vs-snk",
            name: "Capcom vs. SNK",
            rights: "Capcom / SNK / respective rights holders",
            accent: "#e07020",
            blurb: "Ratio systems, groove styles, and the dream match of Street Fighter and KOF universes."
        },
        {
            id: "darkstalkers",
            name: "Darkstalkers",
            rights: "Capcom / respective rights holders",
            accent: "#6a2a8a",
            blurb: "Midnight Bliss, monster cast, and Capcom’s gothic fighter that still defines anime-horror style."
        },
        {
            id: "samurai-shodown",
            name: "Samurai Shodown",
            rights: "SNK / respective rights holders",
            accent: "#c9a227",
            blurb: "Weapon clashes, one-slash drama, and SNK’s feudal Japan fighter aesthetic."
        },
        {
            id: "garou-mark-of-the-wolves",
            name: "Garou: Mark of the Wolves",
            rights: "SNK / respective rights holders",
            accent: "#c43030",
            blurb: "Second Impact, hot intents, and the Fatal Fury successor beloved by competitive classicists."
        },
        {
            id: "fatal-fury",
            name: "Fatal Fury",
            rights: "SNK / respective rights holders",
            accent: "#e07020",
            blurb: "South Town, Bogard brothers, and the series that helped define SNK’s 1990s fighter myth."
        },
        {
            id: "killer-instinct",
            name: "Killer Instinct",
            rights: "Xbox Game Studios / Rare / respective rights holders",
            accent: "#5b7cff",
            blurb: "Combo breakers, Ultra combos, and the Midway-to-Xbox fighter with theatrical finishers."
        },
        {
            id: "dragon-ball-fighterz",
            name: "Dragon Ball FighterZ",
            rights: "Bandai Namco / Arc System Works / respective rights holders",
            accent: "#e07020",
            blurb: "Anime tag teams, sparking blasts, and Arc System’s high-production Dragon Ball fighter."
        },
        {
            id: "street-fighter-alpha",
            name: "Street Fighter Alpha",
            rights: "Capcom / respective rights holders",
            accent: "#c43030",
            blurb: "Prequel timelines, Alpha counters, and the mid-90s bridge between Classic and III."
        }
    ],
    "sci-fi": [
        {
            id: "dune-sci-fi",
            name: "Dune (sci-fi shelf)",
            rights: "Herbert estate / Legendary / respective rights holders",
            accent: "#c9a05a",
            blurb: "Spice, sandworms, and the desert-empire mythos that dominates modern space-opera lore."
        },
        {
            id: "alien-sci-fi",
            name: "Alien (sci-fi shelf)",
            rights: "20th Century / Disney / respective rights holders",
            accent: "#3a5a3a",
            blurb: "Xenomorphs, Weyland-Yutani, and the haunted-spaceship horror that redefined cinematic SF."
        },
        {
            id: "terminator-franchise",
            name: "Terminator",
            rights: "StudioCanal / respective rights holders",
            accent: "#5a5a5a",
            blurb: "Skynet, time-war assassins, and the machine-apocalypse franchise of unstoppable hunters."
        },
        {
            id: "robocop-franchise",
            name: "RoboCop",
            rights: "MGM / respective rights holders",
            accent: "#c43030",
            blurb: "OMCP cyborg law, satirical dystopia, and Detroit’s armored future-cop myth."
        },
        {
            id: "predator-franchise",
            name: "Predator",
            rights: "20th Century / Disney / respective rights holders",
            accent: "#2d5a27",
            blurb: "Hunter aliens, trophy lore, and the jungle-to-crossover continuum of Yautja myth."
        },
        {
            id: "firefly-serenity",
            name: "Firefly / Serenity",
            rights: "Fox / Disney / respective rights holders",
            accent: "#c45a3a",
            blurb: "Browncoats, Alliance politics, and Whedon’s short-lived space-western that built a lasting fandom."
        },
        {
            id: "battlestar-galactica",
            name: "Battlestar Galactica",
            rights: "Universal / Syfy / respective rights holders",
            accent: "#5a6a8a",
            blurb: "Cylon cycles, exodus fleets, and the reimagined space-opera that made military SF feel operatic."
        },
        {
            id: "stargate-franchise",
            name: "Stargate",
            rights: "MGM / respective rights holders",
            accent: "#5b9cff",
            blurb: "Ancient gates, SG teams, and the long-running portal-adventure mythology across TV series."
        },
        {
            id: "farscape",
            name: "Farscape",
            rights: "Jim Henson / NBCUniversal / respective rights holders",
            accent: "#e07020",
            blurb: "Moya’s crew, Peacekeeper pursuit, and the puppety psychedelic space opera of the early 2000s."
        },
        {
            id: "andromeda-series",
            name: "Andromeda",
            rights: "Tribune / respective rights holders",
            accent: "#6a4cff",
            blurb: "Dylan Hunt, Systems Commonwealth, and Gene Roddenberry’s posthumous space-empire concept."
        },
        {
            id: "the-expanse",
            name: "The Expanse",
            rights: "Amazon / Alcon / respective rights holders",
            accent: "#5b7cff",
            blurb: "Belters, protomolecule, and the hard-SF politics of a colonized solar system."
        },
        {
            id: "westworld-series",
            name: "Westworld",
            rights: "HBO / Warner Bros. / respective rights holders",
            accent: "#c9a227",
            blurb: "Host consciousness, park loops, and the android-uprising prestige riff on Delos fantasy."
        },
        {
            id: "black-mirror",
            name: "Black Mirror",
            rights: "Netflix / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Anthology tech dread, social media nightmares, and the modern Twilight Zone of digital life."
        },
        {
            id: "orphan-black",
            name: "Orphan Black",
            rights: "BBC America / respective rights holders",
            accent: "#6a2a8a",
            blurb: "Clone clubs, corporate genetics, and the identity thriller built on Tatiana Maslany’s multiplicity."
        },
        {
            id: "dark-netflix",
            name: "Dark",
            rights: "Netflix / respective rights holders",
            accent: "#2a3a4a",
            blurb: "Time knots, Winden families, and the German puzzle-box SF that rewards obsessive charting."
        },
        {
            id: "altered-carbon",
            name: "Altered Carbon",
            rights: "Netflix / respective rights holders",
            accent: "#c43030",
            blurb: "Sleeve bodies, Meth elite, and the neo-noir future of consciousness as transferable property."
        },
        {
            id: "snow-crash-lore",
            name: "Snow Crash",
            rights: "Stephenson / respective rights holders",
            accent: "#5b9cff",
            blurb: "Metaverse, pizza delivery, and the cyberpunk novel that named a generation of virtual worlds."
        },
        {
            id: "neuromancer-lore",
            name: "Neuromancer",
            rights: "Gibson / respective rights holders",
            accent: "#3a8a4a",
            blurb: "Console cowboys, Wintermute, and the novel that coined cyberspace for popular culture."
        },
        {
            id: "three-body-problem",
            name: "The Three-Body Problem",
            rights: "Liu Cixin / Netflix / respective rights holders",
            accent: "#5b9cff",
            blurb: "Trisolarans, Cultural Revolution roots, and the Chinese hard-SF saga that remapped first contact."
        },
        {
            id: "hyperion-cantos",
            name: "Hyperion Cantos",
            rights: "Dan Simmons / respective rights holders",
            accent: "#c9a227",
            blurb: "Shrike, Time Tombs, and the Canterbury-Tales-in-space epic of Simmons’ far future."
        }
    ],
    "folklore": [
        {
            id: "arabian-nights",
            name: "Arabian Nights / One Thousand and One Nights",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Scheherazade, djinn, and the nested frame tales that define Middle Eastern story cycles."
        },
        {
            id: "grimm-fairy-tales",
            name: "Grimm fairy tales",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#5a4a3a",
            blurb: "Collected German Märchen, dark morals, and the sibling folklorists who shaped children’s canon."
        },
        {
            id: "aesops-fables",
            name: "Aesop's fables",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#8a6a3a",
            blurb: "Talking animals, morals, and the ancient Greek fable tradition still quoted as common sense."
        },
        {
            id: "finnish-kalevala-folklore",
            name: "Kalevala folklore",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#4a7a9a",
            blurb: "Runesingers, sampo forging, and the epic poetry that became Finland’s national myth reservoir."
        },
        {
            id: "russian-folktales",
            name: "Russian folktales",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#8b1a1a",
            blurb: "Baba Yaga, firebirds, and the wondertale structures mapped by Afanasyev and Propp."
        },
        {
            id: "japanese-folktales",
            name: "Japanese folktales",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#e8a0b0",
            blurb: "Yokai encounters, gratitude animals, and the mukashibanashi tradition of moral and uncanny tales."
        },
        {
            id: "chinese-folktales",
            name: "Chinese folktales",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c43030",
            blurb: "Fox spirits, filial piety tales, and the classical story cycles of imperial and folk China."
        },
        {
            id: "african-anansi-tales",
            name: "Anansi tales",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#e07020",
            blurb: "Spider trickster stories and the West African–Caribbean web of wit and survival lore."
        },
        {
            id: "native-american-folktales",
            name: "Native American folktales",
            rights: "Public tribal traditions / respective nations and rights holders",
            accent: "#8a5a2a",
            blurb: "Tricksters, emergence stories, and oral literatures across Indigenous North America."
        },
        {
            id: "paul-bunyan",
            name: "Paul Bunyan",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#2a5a3a",
            blurb: "Giant lumberjack, Babe the Blue Ox, and American tall-tale industrial folklore."
        },
        {
            id: "john-henry-folklore",
            name: "John Henry",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#3a4a5a",
            blurb: "Steel-driving man, race against the machine, and the African American labor hero ballad."
        },
        {
            id: "la-llorona",
            name: "La Llorona",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "Weeping woman, riverside warning, and the pan-Latin American ghost mother legend."
        },
        {
            id: "el-dorado-legend",
            name: "El Dorado",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Golden king, failed expeditions, and the South American mirage that drove colonial greed."
        },
        {
            id: "fountain-of-youth",
            name: "Fountain of Youth",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "Ponce de León lore, healing waters, and the New World quest myth of immortality."
        },
        {
            id: "pied-piper",
            name: "Pied Piper of Hamelin",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#6a4cff",
            blurb: "Rats, vanished children, and the medieval German legend of unpaid promises."
        },
        {
            id: "faust-legend",
            name: "Faust legend",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#8b1a1a",
            blurb: "Devil’s bargain, knowledge hunger, and the German pact tale that haunted European literature."
        },
        {
            id: "william-tell",
            name: "William Tell",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c43030",
            blurb: "Apple shot, Austrian tyranny, and the Swiss independence folk hero."
        },
        {
            id: "king-midas",
            name: "King Midas",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Golden touch, tragic wish, and the Phrygian king whose greed became proverb."
        },
        {
            id: "atlantis-legend",
            name: "Atlantis legend",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "Plato’s lost island, drownings, and the speculative geography that never stopped returning."
        },
        {
            id: "troy-legend",
            name: "Trojan War legend",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c45a3a",
            blurb: "Helen, wooden horse, and the Homeric war cycle that sits between myth and remembered history."
        }
    ],
    "unexplained": [
        {
            id: "bermuda-triangle",
            name: "Bermuda Triangle",
            rights: "Public folklore / respective rights holders",
            accent: "#1a5a7a",
            blurb: "Vanishing ships and planes, sensational maps, and the Atlantic mystery zone of pop lore."
        },
        {
            id: "roswell-incident",
            name: "Roswell incident",
            rights: "Public historical record / respective rights holders",
            accent: "#5a6a5a",
            blurb: "1947 debris, cover-up narratives, and the New Mexico event that anchors modern UFO myth."
        },
        {
            id: "area-51-lore",
            name: "Area 51",
            rights: "Public / declassified record / respective rights holders",
            accent: "#3a5a3a",
            blurb: "Groom Lake secrecy, black projects, and the desert base that became alien-conspiracy shorthand."
        },
        {
            id: "crop-circles",
            name: "Crop circles",
            rights: "Public folklore / respective rights holders",
            accent: "#6a8a40",
            blurb: "Night formations, hoax craft, and the cereal-field art that fueled 1990s mystery media."
        },
        {
            id: "loch-ness-monster",
            name: "Loch Ness Monster",
            rights: "Public folklore / respective rights holders",
            accent: "#2a5a4a",
            blurb: "Nessie sightings, sonar hunts, and Scotland’s most famous lake cryptid."
        },
        {
            id: "bigfoot-sasquatch",
            name: "Bigfoot / Sasquatch",
            rights: "Public folklore / respective rights holders",
            accent: "#5a4a3a",
            blurb: "Pacific Northwest footprints, Patterson film debates, and North America’s ape-man legend."
        },
        {
            id: "mothman",
            name: "Mothman",
            rights: "Public folklore / respective rights holders",
            accent: "#2a2a2a",
            blurb: "Point Pleasant sightings, bridge collapse omen lore, and the winged figure of 1960s weird America."
        },
        {
            id: "jersey-devil",
            name: "Jersey Devil",
            rights: "Public folklore / respective rights holders",
            accent: "#8b1a1a",
            blurb: "Pine Barrens cursed birth, winged horse-thing, and New Jersey’s colonial-era cryptid."
        },
        {
            id: "chupacabra",
            name: "Chupacabra",
            rights: "Public folklore / respective rights holders",
            accent: "#6a2a8a",
            blurb: "Goat-sucker reports, Puerto Rico origins, and the late-20th-century cryptid that went global."
        },
        {
            id: "skinwalker-ranch",
            name: "Skinwalker Ranch",
            rights: "Public / media rights holders",
            accent: "#5a5a3a",
            blurb: "Uinta Basin high strangeness, cattle mutilation lore, and the ranch that became paranormal TV."
        },
        {
            id: "dyatlov-pass",
            name: "Dyatlov Pass incident",
            rights: "Public historical record / respective modern rights holders",
            accent: "#4a5a7a",
            blurb: "1959 Ural deaths, tent cut from inside, and the mountaineering mystery that resists tidy answers."
        },
        {
            id: "mary-celeste",
            name: "Mary Celeste",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2a5a6a",
            blurb: "Abandoned brigantine, untouched cargo, and the ghost-ship mystery that still invites theories."
        },
        {
            id: "voynich-manuscript",
            name: "Voynich manuscript",
            rights: "Yale Beinecke / public scholarship",
            accent: "#c9a05a",
            blurb: "Unreadable script, botanical oddities, and the medieval codex that resists decipherment."
        },
        {
            id: "oak-island-mystery",
            name: "Oak Island mystery",
            rights: "Public / media rights holders",
            accent: "#8a6a3a",
            blurb: "Money Pit digs, flood tunnels, and the Nova Scotia treasure hunt spanning centuries."
        },
        {
            id: "nazca-lines",
            name: "Nazca Lines",
            rights: "Public archaeological record / respective rights holders",
            accent: "#c45a2c",
            blurb: "Desert geoglyphs, aerial discovery, and the Andean ground drawings that invite cosmic theories."
        },
        {
            id: "easter-island-moai",
            name: "Easter Island moai",
            rights: "Public archaeological record / Rapa Nui rights holders",
            accent: "#8a5a2a",
            blurb: "Stone giants, ahu platforms, and the Rapa Nui statue tradition wrapped in collapse myths."
        },
        {
            id: "crystal-skulls",
            name: "Crystal skulls",
            rights: "Public museum / folklore record",
            accent: "#e8e8e8",
            blurb: "Carved quartz heads, museum controversies, and the Mesoamerican-artifact myth industry."
        },
        {
            id: "philadelphia-experiment",
            name: "Philadelphia Experiment",
            rights: "Public folklore / respective rights holders",
            accent: "#1a3a6a",
            blurb: "Invisible destroyer lore, time slips, and the WWII Navy legend that became conspiracy canon."
        },
        {
            id: "montauk-project",
            name: "Montauk Project",
            rights: "Public folklore / respective rights holders",
            accent: "#3a3a3a",
            blurb: "Psychic soldier stories, time experiments, and the Long Island base myth tied to Stranger Things vibes."
        },
        {
            id: "hollow-earth",
            name: "Hollow Earth theories",
            rights: "Public folklore / respective rights holders",
            accent: "#5a6a48",
            blurb: "Inner suns, polar openings, and the persistent fringe cosmology of a world beneath our feet."
        }
    ],
    "maritime": [
        {
            id: "age-of-sail-navies",
            name: "Age of Sail navies",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a5a",
            blurb: "Ships of the line, press gangs, and the sailing fleets that decided early modern empires."
        },
        {
            id: "viking-longships",
            name: "Viking longships",
            rights: "Public historical record / respective modern rights holders",
            accent: "#4a6a8a",
            blurb: "Clinker builds, raids, and the Norse vessels that carried warriors across the North Atlantic."
        },
        {
            id: "chinese-treasure-fleets",
            name: "Chinese treasure fleets",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Zheng He, massive junks, and the Ming voyages that projected power across the Indian Ocean."
        },
        {
            id: "clipper-ships",
            name: "Clipper ships",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "Tea races, sleek hulls, and the mid-19th-century speed merchants of global trade."
        },
        {
            id: "submarine-history",
            name: "Submarine history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2a3a4a",
            blurb: "U-boats, nuclear boats, and the undersea craft that remade naval warfare."
        },
        {
            id: "naval-battles",
            name: "Famous naval battles",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a6a",
            blurb: "Trafalgar to Midway — fleet actions that decided empires and oceans."
        },
        {
            id: "port-cities",
            name: "Historic port cities",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a3a",
            blurb: "Harbors, warehouses, and the urban cultures built on docks and customs houses."
        },
        {
            id: "maritime-navigation",
            name: "Maritime navigation",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "Sextants, chronometers, charts, and the craft of finding longitude at sea."
        },
        {
            id: "shipbuilding-history",
            name: "Shipbuilding history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#6a5a4a",
            blurb: "Yards, timber-to-steel transitions, and the industrial craft of making vessels."
        },
        {
            id: "coast-guard-history",
            name: "Coast Guard history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e07020",
            blurb: "Rescue, enforcement, and the service traditions that police and save at the shore."
        },
        {
            id: "fishing-industry-history",
            name: "Fishing industry history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2a5a6a",
            blurb: "Fleets, grounds, and the working maritime economies that fed nations."
        },
        {
            id: "canal-history",
            name: "Canal history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a7a6a",
            blurb: "Locks, inland waterways, and the engineered shortcuts that remade trade routes."
        },
        {
            id: "suez-canal",
            name: "Suez Canal",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Isthmus cut, geopolitics, and the waterway that linked Mediterranean and Red Sea trade."
        },
        {
            id: "panama-canal",
            name: "Panama Canal",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2d5a27",
            blurb: "Locks, fever, and the American-built shortcut between Atlantic and Pacific."
        },
        {
            id: "maritime-law",
            name: "Maritime law & piracy courts",
            rights: "Public historical record / respective modern rights holders",
            accent: "#3a4a5a",
            blurb: "Admiralty rules, prize courts, and the legal order that tried to tame ocean violence."
        },
        {
            id: "naval-aviation",
            name: "Naval aviation",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "Carriers, flight decks, and the air power that remade twentieth-century sea control."
        },
        {
            id: "icebreakers-polar",
            name: "Icebreakers & polar navigation",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e8e8e8",
            blurb: "Polar routes, frozen seas, and the specialized ships that open high-latitude passages."
        },
        {
            id: "merchant-marine",
            name: "Merchant marine history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a4a6a",
            blurb: "Cargo crews, convoy wars, and the civilian fleets that keep oceans commercial."
        },
        {
            id: "yacht-racing-history",
            name: "Yacht racing history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "America’s Cup, ocean races, and the competitive sailing lore of rich hulls and hard crews."
        },
        {
            id: "diving-history",
            name: "Diving history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a5a7a",
            blurb: "Bells, scuba, wreck work, and the human push into underwater space."
        }
    ],
    "crime": [
        {
            id: "scotland-yard",
            name: "Scotland Yard",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a6a",
            blurb: "Metropolitan Police lore, detective myth, and the London institution that defined modern policing fiction."
        },
        {
            id: "fbi-history",
            name: "FBI history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a6a",
            blurb: "G-Men, Hoover era, and the federal bureau that became American crime-fighting myth."
        },
        {
            id: "cia-covert-crime",
            name: "CIA covert operations history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#3a3a3a",
            blurb: "Black ops, coups, and the intelligence-crime borderlands of Cold War statecraft."
        },
        {
            id: "piracy-modern",
            name: "Modern piracy",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2a5a6a",
            blurb: "Somali waters, Malacca threats, and the twenty-first-century return of ship-taking."
        },
        {
            id: "art-theft",
            name: "Art theft",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Heists, forgeries, and the black market for paintings that museums still hunt."
        },
        {
            id: "cybercrime-history",
            name: "Cybercrime history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b7cff",
            blurb: "Hackers, ransomware, and the digital underworld that remapped theft and fraud."
        },
        {
            id: "bank-robbery-history",
            name: "Bank robbery history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#8a5a2a",
            blurb: "Stickups, getaway lore, and the American outlaw tradition from Jesse James to Dillinger."
        },
        {
            id: "heist-history",
            name: "Famous heists",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Brinks, Hatton Garden, and the meticulously planned thefts that became crime folklore."
        },
        {
            id: "true-crime-media",
            name: "True crime media history",
            rights: "Public media history / respective rights holders",
            accent: "#8b1a1a",
            blurb: "From broadsheets to podcasts — how crime stories became a mass entertainment genre."
        },
        {
            id: "prison-history",
            name: "Prison history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#4a4a4a",
            blurb: "Penitentiaries, reform movements, and the institutions that warehouse punishment."
        },
        {
            id: "assassination-history",
            name: "Political assassinations",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a1a1a",
            blurb: "Plots, shooters, and the murders that redirected nations and conspiracy lore."
        },
        {
            id: "smuggling-history",
            name: "Smuggling history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a4a3a",
            blurb: "Contraband routes, customs wars, and the shadow economies of borders."
        },
        {
            id: "organized-crime-asia",
            name: "Asian organized crime",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Triads, yakuza, and the transnational networks mapped in modern crime history."
        },
        {
            id: "yakuza-history",
            name: "Yakuza history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a1a1a",
            blurb: "Clans, tattoos, and the Japanese underworld’s public-private mythology."
        },
        {
            id: "triads-history",
            name: "Triads history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Hong Kong and diaspora societies, ritual, and the Chinese organized-crime continuum."
        },
        {
            id: "cartel-wars-mexico",
            name: "Mexican cartel wars",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a2a1a",
            blurb: "Plazas, kingpins, and the contemporary conflict that remade North American crime maps."
        },
        {
            id: "whitey-bulger-lore",
            name: "Whitey Bulger lore",
            rights: "Public historical record / respective modern rights holders",
            accent: "#3a4a5a",
            blurb: "Winter Hill, FBI informants, and the Boston crime boss who became American underworld myth."
        },
        {
            id: "al-capone-era",
            name: "Al Capone era",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a1a1a",
            blurb: "Chicago Outfit, tax cases, and the Prohibition kingpin who personified gangster America."
        },
        {
            id: "jack-the-ripper",
            name: "Jack the Ripper",
            rights: "Public historical record / respective modern rights holders",
            accent: "#8b1a1a",
            blurb: "Whitechapel murders, suspect industry, and the unsolved Victorian serial case that never ends."
        },
        {
            id: "zodiac-killer",
            name: "Zodiac Killer",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a1a1a",
            blurb: "Ciphers, Bay Area terror, and the unsolved American serial case that feeds endless decoding."
        }
    ],
    "military": [
        {
            id: "world-war-i-military",
            name: "World War I military history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a6a48",
            blurb: "Trenches, new weapons, and the industrial slaughter that invented modern warfare’s grammar."
        },
        {
            id: "american-revolutionary-war",
            name: "American Revolutionary War",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a6a",
            blurb: "Militia, Continental Army, and the war that created the United States."
        },
        {
            id: "napoleonic-tactics",
            name: "Napoleonic tactics & armies",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a6a48",
            blurb: "Corps system, artillery mass, and the operational art that remade European battlefields."
        },
        {
            id: "roman-legions",
            name: "Roman legions",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a3a",
            blurb: "Standards, camps, and the professional infantry machine of Rome’s empire."
        },
        {
            id: "samurai-warfare",
            name: "Samurai warfare",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Bushido ideals, ashigaru, and the martial culture of feudal Japan’s battlefield elite."
        },
        {
            id: "medieval-knighthood",
            name: "Medieval knighthood",
            rights: "Public historical record / respective modern rights holders",
            accent: "#7a5a3a",
            blurb: "Armor, tournaments, and the mounted warrior class of European feudal war."
        },
        {
            id: "special-forces-history",
            name: "Special forces history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2a3a2a",
            blurb: "Commandos, SOF units, and the elite raid tradition of twentieth-century war."
        },
        {
            id: "air-warfare-history",
            name: "Air warfare history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "Aces, bombers, and the sky fronts that decided twentieth-century conflicts."
        },
        {
            id: "naval-warfare-history",
            name: "Naval warfare history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a5a",
            blurb: "Fleets, blockades, and the ocean contests that made and unmade empires."
        },
        {
            id: "tank-warfare",
            name: "Tank warfare",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a6a48",
            blurb: "Armor doctrine, breakthroughs, and the tracked machines that remade land combat."
        },
        {
            id: "siege-warfare",
            name: "Siege warfare",
            rights: "Public historical record / respective modern rights holders",
            accent: "#6a5a4a",
            blurb: "Walls, sappers, and the long contests for fortified cities across eras."
        },
        {
            id: "guerrilla-warfare",
            name: "Guerrilla warfare",
            rights: "Public historical record / respective modern rights holders",
            accent: "#3a5a3a",
            blurb: "Irregulars, asymmetric tactics, and the small-war tradition that frustrates empires."
        },
        {
            id: "cold-war-military",
            name: "Cold War military history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#4a5a7a",
            blurb: "Proxy wars, alliances, and the armed standoff that never quite went hot."
        },
        {
            id: "gulf-war",
            name: "Gulf War",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a05a",
            blurb: "Desert Shield/Storm, coalition air power, and the 1991 conflict that remade Middle East maps."
        },
        {
            id: "korean-war",
            name: "Korean War",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Pusan to armistice, UN forces, and the forgotten war that froze a peninsula."
        },
        {
            id: "spanish-armada",
            name: "Spanish Armada",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a6a",
            blurb: "1588 fleet, English fireships, and the failed invasion that became Protestant legend."
        },
        {
            id: "hundred-years-war",
            name: "Hundred Years' War",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a8a",
            blurb: "Crécy to Castillon, longbows, and the dynastic war that remade France and England."
        },
        {
            id: "peloponnesian-war",
            name: "Peloponnesian War",
            rights: "Public historical record / respective modern rights holders",
            accent: "#d4b45a",
            blurb: "Athens vs Sparta, Thucydides’ history, and the classical war that defined Greek politics."
        },
        {
            id: "punic-wars",
            name: "Punic Wars",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a3a",
            blurb: "Rome vs Carthage, Hannibal’s Alps, and the Mediterranean struggle for supremacy."
        },
        {
            id: "military-intelligence",
            name: "Military intelligence history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#3a3a3a",
            blurb: "Codes, spies, and the information wars that decide battles before they start."
        }
    ],
    "occult": [
        {
            id: "hermeticism",
            name: "Hermeticism",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Hermes Trismegistus, as above so below, and the syncretic philosophy that fed Western esotericism."
        },
        {
            id: "kabbalah-history",
            name: "Kabbalah history",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#6a4a8a",
            blurb: "Sefirot, Zohar, and the Jewish mystical system that crossed into Christian and occult adaptations."
        },
        {
            id: "tarot-history",
            name: "Tarot history",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Trumps, cartomancy, and the card tradition from Italian games to occult divination decks."
        },
        {
            id: "rosicrucianism",
            name: "Rosicrucianism",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c43030",
            blurb: "Manifestos, invisible college lore, and the early modern brotherhood that sparked esoteric Europe."
        },
        {
            id: "freemasonry-esoteric",
            name: "Freemasonry (esoteric)",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a6a",
            blurb: "Lodges, degrees, and the fraternal symbolism that conspiracy and occult study both obsess over."
        },
        {
            id: "theosophy",
            name: "Theosophy",
            rights: "Public historical record / respective societies",
            accent: "#c9a227",
            blurb: "Blavatsky, Masters, and the late-Victorian synthesis that shaped New Age lineages."
        },
        {
            id: "golden-dawn",
            name: "Hermetic Order of the Golden Dawn",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Grade magic, Yeats membership lore, and the ritual order that trained modern ceremonial magicians."
        },
        {
            id: "aleister-crowley-lore",
            name: "Aleister Crowley lore",
            rights: "Crowley estate / public record / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Thelema, Abbey of Thelema, and the notorious magus who became occult pop culture."
        },
        {
            id: "spiritualism-history",
            name: "Spiritualism history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e8e8e8",
            blurb: "Séances, Fox sisters, and the nineteenth-century movement of talking with the dead."
        },
        {
            id: "necromancy-traditions",
            name: "Necromancy traditions",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#2a2a2a",
            blurb: "Dead-speaking rites, grimoires, and the forbidden craft of consulting the departed."
        },
        {
            id: "grimoires-history",
            name: "Grimoire history",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#5a3a2a",
            blurb: "Key of Solomon to Lesser Key — the manuscript tradition of named spirits and circle magic."
        },
        {
            id: "pagan-revival",
            name: "Modern pagan revival",
            rights: "Public religious history / respective communities",
            accent: "#3a7a4a",
            blurb: "Wicca, reconstructionists, and the twentieth-century return of nature-centered occult religion."
        },
        {
            id: "wicca-history",
            name: "Wicca history",
            rights: "Public religious history / respective communities",
            accent: "#6a4a8a",
            blurb: "Gardner, covens, and the modern witchcraft religion that entered mainstream countersulture."
        },
        {
            id: "runes-divination",
            name: "Runes & divination",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#4a6a8a",
            blurb: "Futhark symbols, casting practices, and the Norse-letter occult revival."
        },
        {
            id: "palmistry-history",
            name: "Palmistry history",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#c45a3a",
            blurb: "Chiromancy, hand lines, and the fortune-telling craft that crossed courts and carnivals."
        },
        {
            id: "numerology-history",
            name: "Numerology history",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#5b7cff",
            blurb: "Number mysticism, name values, and the occult arithmetic of fate."
        },
        {
            id: "crystal-healing-lore",
            name: "Crystal healing lore",
            rights: "Public New Age culture / respective sellers",
            accent: "#e8a0c0",
            blurb: "Stones, chakras, and the mineral mysticism of late-twentieth-century alternative spirituality."
        },
        {
            id: "ouija-board-lore",
            name: "Ouija board lore",
            rights: "Hasbro / public folklore / respective rights holders",
            accent: "#e8e8e8",
            blurb: "Talking boards, parlor spiritualism, and the commercial séance toy that became horror icon."
        },
        {
            id: "satanism-history",
            name: "Satanism history",
            rights: "Public religious/cultural history / respective groups",
            accent: "#8b1a1a",
            blurb: "From literary devil-worship panics to LaVeyan and theistic currents in modern culture."
        },
        {
            id: "enochian-magic",
            name: "Enochian magic",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#6a4cff",
            blurb: "Dee and Kelley’s angelic language, tables, and the Elizabethan system still used in ceremonial magic."
        }
    ],
    "royalty": [
        {
            id: "habsburg-dynasty",
            name: "Habsburg dynasty",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a8a",
            blurb: "Intermarriage maps, dual crowns, and the dynasty that dominated Central Europe for centuries."
        },
        {
            id: "tudor-dynasty",
            name: "Tudor dynasty",
            rights: "Public historical record / respective modern rights holders",
            accent: "#8b1a1a",
            blurb: "Henry VIII to Elizabeth I — succession crises, reformation, and England’s most dramatized royals."
        },
        {
            id: "stuart-dynasty",
            name: "Stuart dynasty",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a6a",
            blurb: "Union of crowns, civil war, and the Scottish-descended line that lost and regained England."
        },
        {
            id: "qing-dynasty",
            name: "Qing dynasty",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Manchu emperors, Forbidden City ritual, and China’s last imperial house."
        },
        {
            id: "mughal-empire-royalty",
            name: "Mughal emperors",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Taj commissions, court culture, and the Timurid-descended rulers of early modern India."
        },
        {
            id: "saudi-royal-family",
            name: "Saudi royal family",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2d5a27",
            blurb: "House of Saud, oil statecraft, and the modern kingdom’s dynastic politics."
        },
        {
            id: "thai-monarchy",
            name: "Thai monarchy",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Chakri kings, sacred kingship, and the living monarchy of Thailand."
        },
        {
            id: "spanish-monarchy",
            name: "Spanish monarchy",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Bourbons and Habsburgs of Spain, empire twilight, and the crown that still sits in Madrid."
        },
        {
            id: "dutch-orange-nassau",
            name: "House of Orange-Nassau",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e07020",
            blurb: "Stadtholders to kings, and the dynasty that defines the modern Netherlands."
        },
        {
            id: "swedish-monarchy",
            name: "Swedish monarchy",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a6a",
            blurb: "Vasa to Bernadotte, and the Scandinavian crown with deep Baltic history."
        },
        {
            id: "danish-monarchy",
            name: "Danish monarchy",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Europe’s oldest continuous kingdom tradition and the Glücksburg line of Denmark."
        },
        {
            id: "norwegian-monarchy",
            name: "Norwegian monarchy",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Independent restoration, polar explorers’ patronage, and Norway’s modern royal house."
        },
        {
            id: "belgian-monarchy",
            name: "Belgian monarchy",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a1a1a",
            blurb: "Coburg line, Congo controversies, and the young kingdom’s royal story."
        },
        {
            id: "hawaiian-monarchy",
            name: "Hawaiian monarchy",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "Kamehameha unification to Liliʻuokalani, and the kingdom overthrown in 1893."
        },
        {
            id: "ethiopian-solomonic",
            name: "Ethiopian Solomonic dynasty",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Claimed descent from Solomon, Haile Selassie, and Africa’s storied imperial house."
        },
        {
            id: "ottoman-sultans",
            name: "Ottoman sultans",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2d5a27",
            blurb: "Topkapı court, harem politics, and the padishahs who ruled a three-continent empire."
        },
        {
            id: "holy-roman-emperors",
            name: "Holy Roman Emperors",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Electors, imperial diets, and the medieval-modern crown of the German lands."
        },
        {
            id: "plantagenet-dynasty",
            name: "Plantagenet dynasty",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Angevin empire, Magna Carta, and the long English line before the Wars of the Roses ended it."
        },
        {
            id: "romanov-court-culture",
            name: "Romanov court culture",
            rights: "Public historical record / respective modern rights holders",
            accent: "#8b1a1a",
            blurb: "Winter Palace ritual, jewels, and the imperial lifestyle that preceded 1917’s fall."
        },
        {
            id: "papal-states-power",
            name: "Papal temporal power",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Pope-kings, Rome’s worldly rule, and the Vatican’s pre-1870 territorial sovereignty."
        }
    ],
    "religion": [
        {
            id: "judaism-history",
            name: "Judaism history",
            rights: "Public historical and theological record / respective communities",
            accent: "#1a3a6a",
            blurb: "Covenant, diaspora, and the oldest continuous Abrahamic tradition."
        },
        {
            id: "hinduism-history",
            name: "Hinduism history",
            rights: "Public historical and theological record / respective communities",
            accent: "#e07020",
            blurb: "Vedas to bhakti, temples, and the plural traditions of the Indian subcontinent."
        },
        {
            id: "sikhism-history",
            name: "Sikhism history",
            rights: "Public historical and theological record / respective communities",
            accent: "#e07020",
            blurb: "Gurus, Khalsa, and the Punjab-born faith of equality and martial saintliness."
        },
        {
            id: "shinto-history",
            name: "Shinto history",
            rights: "Public historical and theological record / respective communities",
            accent: "#e8a0b0",
            blurb: "Kami, shrines, and Japan’s indigenous sacred tradition beside Buddhism."
        },
        {
            id: "jainism-history",
            name: "Jainism history",
            rights: "Public historical and theological record / respective communities",
            accent: "#e07020",
            blurb: "Ahimsa, tirthankaras, and the ancient Indian path of nonviolence and ascetic rigor."
        },
        {
            id: "taoism-history",
            name: "Taoism history",
            rights: "Public historical and theological record / respective communities",
            accent: "#2d5a27",
            blurb: "Dao, immortals, and the Chinese philosophical-religious tradition of way and alchemy."
        },
        {
            id: "confucianism-history",
            name: "Confucianism history",
            rights: "Public historical and philosophical record / respective communities",
            accent: "#c9a227",
            blurb: "Ritual, filial piety, and the ethical system that structured East Asian statecraft."
        },
        {
            id: "zoroastrianism-history",
            name: "Zoroastrianism history",
            rights: "Public historical and theological record / respective communities",
            accent: "#d4a017",
            blurb: "Fire temples, dualism, and the Iranian faith that influenced later Abrahamic ideas."
        },
        {
            id: "bahai-history",
            name: "Baháʼí history",
            rights: "Public historical and theological record / respective communities",
            accent: "#c9a227",
            blurb: "Unity teachings, Haifa center, and the nineteenth-century faith born in Persia."
        },
        {
            id: "mormonism-history",
            name: "Latter-day Saint history",
            rights: "Public historical record / LDS Church / respective rights holders",
            accent: "#1a3a6a",
            blurb: "Joseph Smith, westward trek, and the American-born restorationist tradition."
        },
        {
            id: "protestant-reformation",
            name: "Protestant Reformation",
            rights: "Public historical record / respective modern rights holders",
            accent: "#8b1a1a",
            blurb: "Luther, Calvin, and the sixteenth-century schism that remade Western Christianity."
        },
        {
            id: "catholic-church-history",
            name: "Catholic Church history",
            rights: "Public historical record / respective churches",
            accent: "#c9a227",
            blurb: "Papacy, councils, and the institutional story of Latin Christianity."
        },
        {
            id: "orthodox-christianity",
            name: "Eastern Orthodox Christianity",
            rights: "Public historical and theological record / respective churches",
            accent: "#c9a227",
            blurb: "Byzantium, patriarchs, and the Eastern Christian communion of icons and liturgy."
        },
        {
            id: "sufism-history",
            name: "Sufism history",
            rights: "Public historical and theological record / respective communities",
            accent: "#2d5a27",
            blurb: "Orders, poetry, and the mystical paths within Islamic civilization."
        },
        {
            id: "pilgrimage-traditions",
            name: "Pilgrimage traditions",
            rights: "Public religious history / respective communities",
            accent: "#c45a3a",
            blurb: "Hajj, Camino, Kumbh Mela — sacred journeys that organize devotion in motion."
        },
        {
            id: "monasticism-history",
            name: "Monasticism history",
            rights: "Public religious history / respective orders",
            accent: "#5a6a48",
            blurb: "Abbeys, vinaya, and the withdrawn life that preserved texts and shaped piety."
        },
        {
            id: "missionary-history",
            name: "Missionary history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a6a",
            blurb: "Conversions, translations, and the global spread of faiths through preaching networks."
        },
        {
            id: "religious-art-iconography",
            name: "Religious art & iconography",
            rights: "Public art history / respective traditions",
            accent: "#c9a227",
            blurb: "Icons, mandalas, and the visual languages that teach doctrine without words."
        },
        {
            id: "sacred-texts-canon",
            name: "Sacred texts & canons",
            rights: "Public religious history / respective communities",
            accent: "#8a6a3a",
            blurb: "Scriptures, councils, and the editorial battles that defined holy books."
        },
        {
            id: "interfaith-history",
            name: "Interfaith history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "Dialogues, coexistences, and the modern movements that map religion across borders."
        }
    ],
    "disasters": [
        {
            id: "titanic-disaster",
            name: "Titanic disaster",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a5a",
            blurb: "Iceberg night, class lifeboats, and the 1912 sinking that became maritime tragedy archetype."
        },
        {
            id: "san-francisco-earthquake",
            name: "1906 San Francisco earthquake",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a3a",
            blurb: "Rupture, firestorm, and the quake that remade a West Coast metropolis."
        },
        {
            id: "great-chicago-fire",
            name: "Great Chicago Fire",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "1871 blaze, rebuilding myth, and the urban fire that became American civic legend."
        },
        {
            id: "johnstown-flood",
            name: "Johnstown Flood",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a5a7a",
            blurb: "Dam failure, 1889 Pennsylvania disaster, and the industrial negligence flood that shocked America."
        },
        {
            id: "galveston-hurricane",
            name: "1900 Galveston hurricane",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a5a7a",
            blurb: "Storm surge, death toll, and the deadliest natural disaster in US history."
        },
        {
            id: "dust-bowl",
            name: "Dust Bowl",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a05a",
            blurb: "Black blizzards, Okie migration, and the ecological-agricultural collapse of the 1930s Plains."
        },
        {
            id: "bhopal-disaster",
            name: "Bhopal disaster",
            rights: "Public historical record / respective modern rights holders",
            accent: "#6a8a40",
            blurb: "1984 gas leak, Union Carbide, and the industrial catastrophe that redefined chemical risk."
        },
        {
            id: "exxon-valdez",
            name: "Exxon Valdez oil spill",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a5a",
            blurb: "Alaska crude, wildlife damage, and the tanker accident that remade environmental law lore."
        },
        {
            id: "deepwater-horizon",
            name: "Deepwater Horizon",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a5a",
            blurb: "2010 blowout, Gulf slick, and the offshore drilling disaster of the smartphone era."
        },
        {
            id: "fukushima-daiichi",
            name: "Fukushima Daiichi",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "2011 tsunami-triggered meltdowns and the nuclear crisis that reshaped Japan’s energy politics."
        },
        {
            id: "hurricane-sandy",
            name: "Hurricane Sandy",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a5a7a",
            blurb: "2012 Superstorm, NYC subway floods, and the climate-era coastal disaster."
        },
        {
            id: "indian-ocean-tsunami",
            name: "2004 Indian Ocean tsunami",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a5a7a",
            blurb: "Boxing Day waves, Aceh to Africa, and the megathrust disaster that remade warning systems."
        },
        {
            id: "mount-st-helens",
            name: "Mount St. Helens",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a6a48",
            blurb: "1980 lateral blast, ash plume, and the Cascade eruption that became American volcano lore."
        },
        {
            id: "krakatoa-eruption",
            name: "Krakatoa eruption",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a2c",
            blurb: "1883 blast, global sunsets, and the volcanic disaster that entered world memory."
        },
        {
            id: "tambora-year-without-summer",
            name: "Mount Tambora & Year Without a Summer",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a5a5a",
            blurb: "1815 eruption, 1816 climate shock, and the volcanic winter that starved Europe and America."
        },
        {
            id: "halifax-explosion",
            name: "Halifax Explosion",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "1917 munitions blast, harbor ruin, and the largest non-nuclear explosion of its time."
        },
        {
            id: "triangle-shirtwaist-fire",
            name: "Triangle Shirtwaist Factory fire",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "1911 loft blaze, locked doors, and the industrial tragedy that remade labor safety law."
        },
        {
            id: "hinckley-fire",
            name: "Great Hinckley Fire",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a2c",
            blurb: "1894 Minnesota firestorm, rail escapes, and the lumber-era inferno of the Midwest."
        },
        {
            id: "peshtigo-fire",
            name: "Peshtigo Fire",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "1871 Wisconsin firestorm that killed more than Chicago’s famous blaze the same night."
        },
        {
            id: "space-shuttle-challenger",
            name: "Space Shuttle Challenger disaster",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "1986 launch failure, teacher-in-space, and the NASA tragedy that froze a nation’s gaze."
        }
    ],
    "culinary": [
        {
            id: "pizza-history",
            name: "Pizza history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Naples origins, American reinvention, and the flatbread that became global comfort food."
        },
        {
            id: "bread-history",
            name: "Bread history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a05a",
            blurb: "Grain, ovens, and the staple that structured civilizations and daily ritual."
        },
        {
            id: "cheese-history",
            name: "Cheese history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e8c14a",
            blurb: "Cultures, caves, and the fermented dairy craft spanning pastoral societies."
        },
        {
            id: "beer-history",
            name: "Beer history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Mashing, monasteries, and the ancient fermented drink that rivaled wine in daily life."
        },
        {
            id: "coffeehouse-culture",
            name: "Coffeehouse culture",
            rights: "Public historical record / respective modern rights holders",
            accent: "#6f4e37",
            blurb: "Public spheres, espresso bars, and the social rooms built around the bean."
        },
        {
            id: "street-food-history",
            name: "Street food history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e07020",
            blurb: "Hawkers, night markets, and the portable cuisine of cities."
        },
        {
            id: "french-cuisine-history",
            name: "French cuisine history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a8a",
            blurb: "Brigades, sauces, and the haute tradition that defined restaurant hierarchy."
        },
        {
            id: "japanese-cuisine-history",
            name: "Japanese cuisine history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e8e8e8",
            blurb: "Kaiseki, regional washoku, and the seasonal craft beyond sushi alone."
        },
        {
            id: "mexican-cuisine-history",
            name: "Mexican cuisine history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a2c",
            blurb: "Maize, moles, and the UNESCO-recognized culinary civilization of Mexico."
        },
        {
            id: "indian-cuisine-history",
            name: "Indian cuisine history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e07020",
            blurb: "Spice routes, regional thalis, and the subcontinent’s vast cooking traditions."
        },
        {
            id: "chinese-cuisine-history",
            name: "Chinese cuisine history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Eight great cuisines, wok craft, and the regional foodways of China."
        },
        {
            id: "italian-cuisine-history",
            name: "Italian cuisine history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2d5a27",
            blurb: "Pasta, regional pride, and the post-unification story of Italy on a plate."
        },
        {
            id: "barbecue-history",
            name: "Barbecue history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#8a2a2a",
            blurb: "Smoke, pits, and the diaspora cooking traditions of the Americas."
        },
        {
            id: "fast-food-history",
            name: "Fast food history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Chains, drive-thrus, and the industrial meal culture of the twentieth century."
        },
        {
            id: "pastry-history",
            name: "Pastry history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e8a0c0",
            blurb: "Laminated doughs, sugar craft, and the sweet architecture of bakeries."
        },
        {
            id: "fermentation-foodways",
            name: "Fermentation foodways",
            rights: "Public historical record / respective modern rights holders",
            accent: "#6a8a40",
            blurb: "Kimchi, sauerkraut, miso — living foods that preserve and transform."
        },
        {
            id: "salt-trade-food",
            name: "Salt & seasoning history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e8e8e8",
            blurb: "Salt roads, taxation, and the mineral that made preservation and flavor possible."
        },
        {
            id: "sugar-history",
            name: "Sugar history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e8e8e8",
            blurb: "Plantations, sweetness, and the commodity that remade global diets and empires."
        },
        {
            id: "olive-oil-mediterranean",
            name: "Olive oil & Mediterranean diet",
            rights: "Public historical record / respective modern rights holders",
            accent: "#6a8a40",
            blurb: "Groves, presses, and the fat that structured Mediterranean food culture."
        },
        {
            id: "restaurants-history",
            name: "Restaurant history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a3a",
            blurb: "Public dining rooms, menus, and the rise of eating out as modern culture."
        }
    ],
    "transport": [
        {
            id: "ocean-liners",
            name: "Ocean liners",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a3a5a",
            blurb: "Floating palaces, immigrant crossings, and the steam-to-diesel age of passenger ships."
        },
        {
            id: "bicycle-history",
            name: "Bicycle history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Penny-farthings to carbon frames, and the personal machine that remade urban mobility."
        },
        {
            id: "streetcar-history",
            name: "Streetcar & tram history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a3a",
            blurb: "Electric rails, urban sprawl, and the transit that shaped early twentieth-century cities."
        },
        {
            id: "subway-metro-history",
            name: "Subway & metro history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a5a5a",
            blurb: "Underground networks, tunnel engineering, and the rapid transit that densified metros."
        },
        {
            id: "bus-transit-history",
            name: "Bus transit history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e07020",
            blurb: "Coach lines, municipal fleets, and the flexible road transit of modern cities."
        },
        {
            id: "spaceflight-transport",
            name: "Spaceflight as transport",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "Rockets, capsules, and the vehicles that made orbit a destination."
        },
        {
            id: "hot-air-balloon-history",
            name: "Hot air balloon history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e07020",
            blurb: "Montgolfiers, sport ballooning, and the first human flights."
        },
        {
            id: "zeppelins-airships",
            name: "Zeppelins & airships",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a6a7a",
            blurb: "Rigid airships, Hindenburg, and the brief age of luxury sky liners."
        },
        {
            id: "truck-freight-history",
            name: "Truck freight history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#3a4a5a",
            blurb: "Highways, logistics, and the diesel fleets that move modern economies."
        },
        {
            id: "container-shipping",
            name: "Container shipping",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a4a6a",
            blurb: "Intermodal boxes, mega-ports, and the standardization that globalized trade."
        },
        {
            id: "high-speed-rail",
            name: "High-speed rail",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Shinkansen to TGV, and the passenger trains that rival short-haul flights."
        },
        {
            id: "electric-vehicles-history",
            name: "Electric vehicles history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#3a8a4a",
            blurb: "Early EVs, Tesla era, and the return of battery cars to the mainstream."
        },
        {
            id: "horse-transport-history",
            name: "Horse transport history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#8a5a2a",
            blurb: "Carriages, cavalry logistics, and the animal power that preceded engines."
        },
        {
            id: "canal-boats",
            name: "Canal boats & barges",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a7a6a",
            blurb: "Towpaths, inland freight, and the slow water highways of industrializing nations."
        },
        {
            id: "ferry-history",
            name: "Ferry history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "Crossings, commuter boats, and the short-sea links that stitch coasts together."
        },
        {
            id: "ambulance-history",
            name: "Ambulance history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Field litter to EMS, and the emergency vehicles that chase golden hours."
        },
        {
            id: "fire-engine-history",
            name: "Fire engine history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Pumpers, ladders, and the apparatus that fights urban blaze."
        },
        {
            id: "taxi-history",
            name: "Taxi history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Hackneys, medallions, and the hired ride culture of cities."
        },
        {
            id: "rideshare-era",
            name: "Rideshare era",
            rights: "Public tech history / respective companies",
            accent: "#1a1a1a",
            blurb: "App dispatch, gig drivers, and the 2010s remake of urban hired transport."
        },
        {
            id: "hyperloop-concepts",
            name: "Hyperloop & future transit concepts",
            rights: "Public tech discourse / respective companies",
            accent: "#6a4cff",
            blurb: "Vacuum tubes, vaporware, and the speculative transport ideas chasing speed."
        }
    ],
    "built-environment": [
        {
            id: "gothic-cathedrals",
            name: "Gothic cathedrals",
            rights: "Public historical record / respective modern rights holders",
            accent: "#6a4a8a",
            blurb: "Flying buttresses, stained glass, and the medieval vertical ambition of stone faith."
        },
        {
            id: "roman-aqueducts",
            name: "Roman aqueducts",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a3a",
            blurb: "Arches, gradients, and the hydraulic engineering that watered an empire."
        },
        {
            id: "pyramids-egypt",
            name: "Egyptian pyramids",
            rights: "Public historical record / respective modern rights holders",
            accent: "#d4a017",
            blurb: "Giza complex, tomb engineering, and the stone mountains of pharaonic power."
        },
        {
            id: "great-wall-china",
            name: "Great Wall of China",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Frontier fortifications, dynastic rebuilds, and the mythic length of China’s northern defense."
        },
        {
            id: "castles-architecture",
            name: "Castle architecture",
            rights: "Public historical record / respective modern rights holders",
            accent: "#7a5a3a",
            blurb: "Keeps, curtain walls, and the fortified homes of medieval power."
        },
        {
            id: "modernist-architecture",
            name: "Modernist architecture",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a6a7a",
            blurb: "Bauhaus to International Style — glass, steel, and the twentieth-century aesthetic reset."
        },
        {
            id: "brutalism",
            name: "Brutalism",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a5a5a",
            blurb: "Raw concrete, civic megastructures, and the polarizing mid-century style now reappraised."
        },
        {
            id: "art-deco-architecture",
            name: "Art Deco architecture",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c9a227",
            blurb: "Zigzags, skyscraper crowns, and the glamorous geometry of the 1920s–30s."
        },
        {
            id: "urban-planning-history",
            name: "Urban planning history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#4a5a7a",
            blurb: "Grids, zoning, and the disciplines that try to design how cities grow."
        },
        {
            id: "public-housing-history",
            name: "Public housing history",
            rights: "Public historical record / respective modern rights holders",
            accent: "#6a5a4a",
            blurb: "Estates, towers, and the state-built homes that remade working-class cities."
        },
        {
            id: "parks-landscape-architecture",
            name: "Parks & landscape architecture",
            rights: "Public historical record / respective modern rights holders",
            accent: "#2d5a27",
            blurb: "Olmsted to pocket parks — designed nature inside urban fabric."
        },
        {
            id: "stadium-architecture",
            name: "Stadium architecture",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c43030",
            blurb: "Bowls, retractable roofs, and the civic theaters of mass sport."
        },
        {
            id: "airport-architecture",
            name: "Airport architecture",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5b9cff",
            blurb: "Terminals, wayfinding, and the gateways designed for jet-age crowds."
        },
        {
            id: "train-station-architecture",
            name: "Train station architecture",
            rights: "Public historical record / respective modern rights holders",
            accent: "#c45a3a",
            blurb: "Great halls, clocks, and the cathedral-like portals of rail travel."
        },
        {
            id: "lighthouse-architecture",
            name: "Lighthouse architecture",
            rights: "Public historical record / respective modern rights holders",
            accent: "#e8c14a",
            blurb: "Towers, Fresnel lenses, and the coastal beacons that guided ships home."
        },
        {
            id: "dam-engineering",
            name: "Dam engineering",
            rights: "Public historical record / respective modern rights holders",
            accent: "#1a5a7a",
            blurb: "Hydroelectric walls, displacement, and the mega-projects that remake rivers."
        },
        {
            id: "tunnel-engineering",
            name: "Tunnel engineering",
            rights: "Public historical record / respective modern rights holders",
            accent: "#5a5a5a",
            blurb: "Boring, under-river links, and the invisible infrastructure of modern mobility."
        },
        {
            id: "unesco-world-heritage",
            name: "UNESCO World Heritage sites",
            rights: "UNESCO / public heritage record",
            accent: "#c9a227",
            blurb: "Listed wonders, conservation politics, and the global catalog of outstanding places."
        },
        {
            id: "ruins-archaeology",
            name: "Ruins & archaeological sites",
            rights: "Public historical record / respective modern rights holders",
            accent: "#8a6a3a",
            blurb: "Excavated cities, standing stones, and the built past recovered from earth."
        },
        {
            id: "smart-cities",
            name: "Smart cities",
            rights: "Public tech/urban discourse / respective projects",
            accent: "#5b7cff",
            blurb: "Sensors, dashboards, and the contested future of data-driven urban management."
        }
    ],
};

const CORE_DEPTH_FILLERS = {
    "anime": [
        {
            id: "bleach",
            name: "Bleach",
            rights: "Shueisha / Pierrot / Viz / respective rights holders",
            accent: "#e8e8e8",
            blurb: "Soul Society, Hollows, and the long-running shinigami battle manga-anime continuum."
        },
        {
            id: "fullmetal-alchemist",
            name: "Fullmetal Alchemist",
            rights: "Square Enix / Bones / respective rights holders",
            accent: "#c43030",
            blurb: "Equivalent exchange, Amestris, and the alchemy-war epic of the Elric brothers."
        },
        {
            id: "my-hero-academia",
            name: "My Hero Academia",
            rights: "Shueisha / Bones / Viz / respective rights holders",
            accent: "#e07020",
            blurb: "Quirk society, UA heroes, and the shonen superhero saga of legacy and villains."
        },
        {
            id: "death-note",
            name: "Death Note",
            rights: "Shueisha / Madhouse / Viz / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Shinigami notebook, moral cat-and-mouse, and the thriller that defined mid-2000s anime discourse."
        },
        {
            id: "neon-genesis-evangelion",
            name: "Neon Genesis Evangelion",
            rights: "Khara / Gainax / respective rights holders",
            accent: "#6a4cff",
            blurb: "EVA units, Instrumentality, and the mecha deconstruction that remade anime psychology."
        },
        {
            id: "cowboy-bebop",
            name: "Cowboy Bebop",
            rights: "Sunrise / respective rights holders",
            accent: "#c45a3a",
            blurb: "Bounty hunters, jazz space noir, and the stylish episodic classic of late-90s anime."
        },
        {
            id: "studio-ghibli",
            name: "Studio Ghibli",
            rights: "Studio Ghibli / respective rights holders",
            accent: "#2d5a27",
            blurb: "Miyazaki–Takahata worlds, soft magic, and the studio that defined anime cinema abroad."
        },
        {
            id: "one-punch-man",
            name: "One-Punch Man",
            rights: "Shueisha / Madhouse / Bones / respective rights holders",
            accent: "#c9a227",
            blurb: "Saitama’s boredom, Hero Association ranks, and the parody that became sincere spectacle."
        },
        {
            id: "jujutsu-kaisen",
            name: "Jujutsu Kaisen",
            rights: "Shueisha / MAPPA / Viz / respective rights holders",
            accent: "#5b7cff",
            blurb: "Curses, domains, and the modern shonen occult battler with breakout global fandom."
        },
        {
            id: "hunter-x-hunter",
            name: "Hunter x Hunter",
            rights: "Shueisha / Madhouse / Viz / respective rights holders",
            accent: "#3a8a4a",
            blurb: "Nen systems, Chimera Ants, and Togashi’s meticulously cruel adventure design."
        },
        {
            id: "fairy-tail",
            name: "Fairy Tail",
            rights: "Kodansha / A-1 / respective rights holders",
            accent: "#c43030",
            blurb: "Guild bonds, dragon slayers, and the friendship-powered fantasy of Fiore."
        },
        {
            id: "sword-art-online",
            name: "Sword Art Online",
            rights: "ASCII Media Works / A-1 / respective rights holders",
            accent: "#5b9cff",
            blurb: "Trapped VRMMOs, floor bosses, and the isekai template that dominated 2010s anime."
        },
        {
            id: "re-zero",
            name: "Re:Zero",
            rights: "Kadokawa / White Fox / respective rights holders",
            accent: "#c43030",
            blurb: "Return-by-death, Emilia camp politics, and the suffering-loop isekai that redefined the genre."
        },
        {
            id: "steins-gate",
            name: "Steins;Gate",
            rights: "5pb. / White Fox / respective rights holders",
            accent: "#e07020",
            blurb: "Time leap microwave, SERN paranoia, and the visual-novel adaptation beloved for its twist."
        },
        {
            id: "code-geass",
            name: "Code Geass",
            rights: "Sunrise / respective rights holders",
            accent: "#c9a227",
            blurb: "Geass power, Britannia empire, and the chessboard mecha rebellion of Lelouch."
        },
        {
            id: "gurren-lagann",
            name: "Gurren Lagann",
            rights: "Gainax / respective rights holders",
            accent: "#c43030",
            blurb: "Spiral energy, drills, and the maximalist mecha pep talk that became anime optimism canon."
        },
        {
            id: "mob-psycho-100",
            name: "Mob Psycho 100",
            rights: "Shogakukan / Bones / respective rights holders",
            accent: "#e8c14a",
            blurb: "Espers, Reigen’s cons, and ONE’s psychic coming-of-age beside One-Punch Man."
        },
        {
            id: "vinland-saga",
            name: "Vinland Saga",
            rights: "Kodansha / Wit / MAPPA / respective rights holders",
            accent: "#4a6a8a",
            blurb: "Viking revenge to pacifism, Thorfinn’s arc, and historical seinen at epic scale."
        },
        {
            id: "tokyo-ghoul",
            name: "Tokyo Ghoul",
            rights: "Shueisha / Pierrot / respective rights holders",
            accent: "#8b1a1a",
            blurb: "Ghoul underworld, coffee shop front, and the dark urban fantasy that dominated early 2010s fandom."
        },
        {
            id: "spy-x-family",
            name: "Spy x Family",
            rights: "Shueisha / Wit / CloverWorks / respective rights holders",
            accent: "#c43030",
            blurb: "Fake family espionage comedy, Anya telepathy, and the breakout hit of cozy-stakes spy craft."
        }
    ],
    "video-games": [
        {
            id: "halo",
            name: "Halo",
            rights: "Xbox Game Studios / respective rights holders",
            accent: "#5b9cff",
            blurb: "Master Chief, Covenant war, and the Xbox shooter universe that defined console multiplayer."
        },
        {
            id: "metal-gear-solid",
            name: "Metal Gear Solid",
            rights: "Konami / respective rights holders",
            accent: "#5a6a48",
            blurb: "Sneaking, codec lore, and Kojima’s cinematic spy-metal saga."
        },
        {
            id: "dark-souls",
            name: "Dark Souls",
            rights: "FromSoftware / Bandai Namco / respective rights holders",
            accent: "#5a5a5a",
            blurb: "Lordran cycles, cryptic item lore, and the difficulty mythos that remade action RPGs."
        },
        {
            id: "elden-ring",
            name: "Elden Ring",
            rights: "FromSoftware / Bandai Namco / respective rights holders",
            accent: "#c9a227",
            blurb: "Lands Between, demigod shards, and the open-world Soulsborne that conquered 2020s gaming."
        },
        {
            id: "god-of-war",
            name: "God of War",
            rights: "Sony / respective rights holders",
            accent: "#c43030",
            blurb: "Kratos, pantheon wars, and the mythic action franchise reborn in Norse saga form."
        },
        {
            id: "assassin-creed",
            name: "Assassin's Creed",
            rights: "Ubisoft / respective rights holders",
            accent: "#2d5a27",
            blurb: "Animus history tourism, Assassin–Templar war, and the long-running parkour conspiracy saga."
        },
        {
            id: "grand-theft-auto",
            name: "Grand Theft Auto",
            rights: "Rockstar / Take-Two / respective rights holders",
            accent: "#3a8a4a",
            blurb: "Satire cities, radio lore, and the open-world crime sandbox that remade mainstream gaming."
        },
        {
            id: "the-last-of-us",
            name: "The Last of Us",
            rights: "Sony / Naughty Dog / respective rights holders",
            accent: "#6a8a40",
            blurb: "Cordyceps apocalypse, Joel and Ellie, and the grounded narrative that crossed to prestige TV."
        },
        {
            id: "bioshock",
            name: "BioShock",
            rights: "2K / respective rights holders",
            accent: "#5b9cff",
            blurb: "Rapture, objectivism satire, and the immersive-sim shooter with philosophical bite."
        },
        {
            id: "portal-series",
            name: "Portal",
            rights: "Valve / respective rights holders",
            accent: "#e07020",
            blurb: "Aperture Science, cakes, and the puzzle-shooter that made dry wit a gameplay genre."
        },
        {
            id: "half-life",
            name: "Half-Life",
            rights: "Valve / respective rights holders",
            accent: "#e07020",
            blurb: "Black Mesa, Combine occupation, and the FPS narrative pioneer still awaiting Episode Three lore."
        },
        {
            id: "diablo",
            name: "Diablo",
            rights: "Blizzard / respective rights holders",
            accent: "#8b1a1a",
            blurb: "Sanctuary, Nephalem, and the isometric demon-slaying hack-and-slash dynasty."
        },
        {
            id: "starcraft",
            name: "StarCraft",
            rights: "Blizzard / respective rights holders",
            accent: "#5b9cff",
            blurb: "Terran–Zerg–Protoss war, esports myth, and the real-time strategy bible of the late 90s."
        },
        {
            id: "overwatch",
            name: "Overwatch",
            rights: "Blizzard / respective rights holders",
            accent: "#e07020",
            blurb: "Hero shooters, omnium lore, and the colorful team FPS that dominated mid-2010s multiplayer."
        },
        {
            id: "league-of-legends",
            name: "League of Legends",
            rights: "Riot Games / respective rights holders",
            accent: "#c9a227",
            blurb: "Runeterra champions, esports worlds, and the MOBA that became a global cultural platform."
        },
        {
            id: "fortnite",
            name: "Fortnite",
            rights: "Epic Games / respective rights holders",
            accent: "#5b7cff",
            blurb: "Battle Royale seasons, metaverse concerts, and the cultural chameleon of late-2010s gaming."
        },
        {
            id: "red-dead-redemption",
            name: "Red Dead Redemption",
            rights: "Rockstar / Take-Two / respective rights holders",
            accent: "#8a5a2a",
            blurb: "Van der Linde gang, dying West, and Rockstar’s elegiac open-world outlaw saga."
        },
        {
            id: "persona-series",
            name: "Persona",
            rights: "Atlus / Sega / respective rights holders",
            accent: "#c9a227",
            blurb: "Shadows, velvet rooms, and the stylish JRPG social-sim continuum of Phantom Thieves and beyond."
        },
        {
            id: "kingdom-hearts",
            name: "Kingdom Hearts",
            rights: "Square Enix / Disney / respective rights holders",
            accent: "#5b9cff",
            blurb: "Keyblades, Disney worlds, and the notoriously tangled crossover RPG mythology."
        },
        {
            id: "sonic-the-hedgehog",
            name: "Sonic the Hedgehog",
            rights: "Sega / respective rights holders",
            accent: "#5b9cff",
            blurb: "Green Hill speed, Chaos Emeralds, and Sega’s blue mascot universe across decades of tones."
        }
    ],
    "books": [
        {
            id: "discworld",
            name: "Discworld",
            rights: "Pratchett estate / respective rights holders",
            accent: "#c9a227",
            blurb: "Flat world on elephants, Ankh-Morpork, and Pratchett’s comic fantasy continuum of dense footnotes."
        },
        {
            id: "mistborn-era",
            name: "Mistborn",
            rights: "Brandon Sanderson / respective rights holders",
            accent: "#5a5a5a",
            blurb: "Allomancy, ashfalls, and the Cosmere heist-to-era saga of metallic magic."
        },
        {
            id: "stormlight-archive",
            name: "The Stormlight Archive",
            rights: "Brandon Sanderson / respective rights holders",
            accent: "#5b9cff",
            blurb: "Roshar, Knights Radiant, and Sanderson’s doorstop epic of oaths and highstorms."
        },
        {
            id: "foundation-books",
            name: "Foundation (books)",
            rights: "Asimov estate / respective rights holders",
            accent: "#c9a227",
            blurb: "Psychohistory, galactic empire fall, and Asimov’s blueprint for literary space opera."
        },
        {
            id: "enders-game-saga",
            name: "Ender's Game saga",
            rights: "Orson Scott Card / respective rights holders",
            accent: "#5b9cff",
            blurb: "Battle School, Formics, and the controversial military SF sequence that dominated YA shelves."
        },
        {
            id: "hitchhikers-guide",
            name: "The Hitchhiker's Guide to the Galaxy",
            rights: "Adams estate / respective rights holders",
            accent: "#e07020",
            blurb: "Towels, Infinite Improbability, and Adams’ absurdist SF comedy that became a phrasebook."
        },
        {
            id: "narnia",
            name: "The Chronicles of Narnia",
            rights: "Lewis estate / HarperCollins / respective rights holders",
            accent: "#c9a227",
            blurb: "Wardrobe portals, Aslan, and the children’s Christian fantasy that never left school libraries."
        },
        {
            id: "his-dark-materials",
            name: "His Dark Materials",
            rights: "Philip Pullman / respective rights holders",
            accent: "#6a4a8a",
            blurb: "Daemons, dust, and the anti-authoritarian multiverse epic of Lyra’s worlds."
        },
        {
            id: "earthsea",
            name: "Earthsea",
            rights: "Le Guin estate / respective rights holders",
            accent: "#5b9cff",
            blurb: "True names, archipelago magic, and Le Guin’s foundational secondary-world wizardry."
        },
        {
            id: "american-gods-book",
            name: "American Gods",
            rights: "Gaiman / respective rights holders",
            accent: "#8a5a2a",
            blurb: "Old gods vs new, roadside America, and Gaiman’s immigrant-myth road novel."
        },
        {
            id: "good-omens",
            name: "Good Omens",
            rights: "Pratchett & Gaiman estates / respective rights holders",
            accent: "#c9a227",
            blurb: "Angel–demon odd couple, apocalypse paperwork, and the comic novel that became a screen cult."
        },
        {
            id: "sherlock-holmes-canon",
            name: "Sherlock Holmes canon",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#1a3a6a",
            blurb: "Baker Street, deductions, and Doyle’s detective mythology that still structures crime fiction."
        },
        {
            id: "dracula-novel",
            name: "Dracula (novel)",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#8b0000",
            blurb: "Epistolary vampire hunt, Transylvania, and Stoker’s text that fixed the modern Count."
        },
        {
            id: "frankenstein-novel",
            name: "Frankenstein",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#2a5a3a",
            blurb: "Creature, creator, Arctic frame, and Shelley’s foundational science-horror novel."
        },
        {
            id: "pride-and-prejudice",
            name: "Pride and Prejudice",
            rights: "Public-domain traditions / respective modern rights holders",
            accent: "#e8a0c0",
            blurb: "Bennet sisters, Regency manners, and Austen’s marriage-plot novel that never stops adapting."
        },
        {
            id: "1984-orwell",
            name: "Nineteen Eighty-Four",
            rights: "Orwell estate / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Big Brother, Newspeak, and the dystopia that became political shorthand."
        },
        {
            id: "brave-new-world",
            name: "Brave New World",
            rights: "Huxley estate / respective rights holders",
            accent: "#c9a227",
            blurb: "Soma, castes, and Huxley’s pleasure-dystopia counterpoint to Orwellian fear."
        },
        {
            id: "catch-22-novel",
            name: "Catch-22",
            rights: "Heller estate / respective rights holders",
            accent: "#5a6a48",
            blurb: "Bureaucratic paradox, WWII satire, and the novel that named a no-win rule."
        },
        {
            id: "to-kill-a-mockingbird",
            name: "To Kill a Mockingbird",
            rights: "Lee estate / respective rights holders",
            accent: "#2d5a27",
            blurb: "Maycomb, Atticus, and the American classroom novel of race and conscience."
        },
        {
            id: "the-hobbit",
            name: "The Hobbit",
            rights: "Tolkien estate / respective rights holders",
            accent: "#2d5a27",
            blurb: "Unexpected party, dragon gold, and the children’s prologue to Middle-earth’s greater war."
        }
    ],
    "movies": [
        {
            id: "indiana-jones",
            name: "Indiana Jones",
            rights: "Lucasfilm / Disney / respective rights holders",
            accent: "#c45a3a",
            blurb: "Fedora archaeology, Nazis vs relics, and the pulp adventure franchise of cinema swagger."
        },
        {
            id: "back-to-the-future",
            name: "Back to the Future",
            rights: "Universal / respective rights holders",
            accent: "#e07020",
            blurb: "DeLorean time jumps, Hill Valley timelines, and the family-friendly paradox comedy."
        },
        {
            id: "ghostbusters",
            name: "Ghostbusters",
            rights: "Sony / respective rights holders",
            accent: "#5b9cff",
            blurb: "Proton packs, Slimer, and the paranormal comedy franchise that became Halloween cosplay canon."
        },
        {
            id: "rocky-franchise",
            name: "Rocky",
            rights: "MGM / respective rights holders",
            accent: "#c43030",
            blurb: "Philadelphia underdog boxing, training montages, and the Creed-linked sports drama dynasty."
        },
        {
            id: "fast-and-furious",
            name: "Fast & Furious",
            rights: "Universal / respective rights holders",
            accent: "#e07020",
            blurb: "Family heists, impossible cars, and the escalating action soap of street-to-spy spectacle."
        },
        {
            id: "mission-impossible",
            name: "Mission: Impossible",
            rights: "Paramount / respective rights holders",
            accent: "#c43030",
            blurb: "IMF masks, stunt authenticity, and Cruise’s long-running spy set-piece franchise."
        },
        {
            id: "john-wick",
            name: "John Wick",
            rights: "Lionsgate / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Continental rules, gold coins, and the balletic gun-fu revenge saga of assassin etiquette."
        },
        {
            id: "mad-max",
            name: "Mad Max",
            rights: "Warner Bros. / respective rights holders",
            accent: "#c45a2c",
            blurb: "Wasteland convoys, Fury Road, and Miller’s desert-opera of vehicular myth."
        },
        {
            id: "alien-movies",
            name: "Alien (movies)",
            rights: "20th Century / Disney / respective rights holders",
            accent: "#3a5a3a",
            blurb: "Nostromo dread to covenant prequels — the xenomorph film continuum on the big screen."
        },
        {
            id: "terminator-movies",
            name: "Terminator (movies)",
            rights: "StudioCanal / respective rights holders",
            accent: "#5a5a5a",
            blurb: "Judgment Day timelines and the cyborg hunter films that defined 80s–90s action SF."
        },
        {
            id: "matrix-movies",
            name: "The Matrix (movies)",
            rights: "Warner Bros. / respective rights holders",
            accent: "#3dbb2e",
            blurb: "Bullet time, Zion, and the Wachowskis’ simulation saga across sequels."
        },
        {
            id: "pirates-of-the-caribbean",
            name: "Pirates of the Caribbean",
            rights: "Disney / respective rights holders",
            accent: "#1a5a5a",
            blurb: "Curse gold, Sparrow chaos, and the theme-park movie that revived swashbucklers."
        },
        {
            id: "harry-potter-films",
            name: "Harry Potter films",
            rights: "Warner Bros. / respective rights holders",
            accent: "#8a1a1a",
            blurb: "Hogwarts on screen, house lore visuals, and the decade-long adaptation of Rowling’s saga."
        },
        {
            id: "lord-of-the-rings-films",
            name: "The Lord of the Rings films",
            rights: "New Line / Warner Bros. / respective rights holders",
            accent: "#2d5a27",
            blurb: "Jackson’s trilogy craft, New Zealand Middle-earth, and the fantasy film benchmark."
        },
        {
            id: "marvel-cinematic-universe",
            name: "Marvel Cinematic Universe",
            rights: "Marvel / Disney / respective rights holders",
            accent: "#c43030",
            blurb: "Phases, Infinity Saga, and the interconnected blockbuster experiment that remade Hollywood."
        },
        {
            id: "star-wars-saga",
            name: "Star Wars saga (films)",
            rights: "Lucasfilm / Disney / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Skywalker saga chapters, Force myth, and the space-opera films that define modern franchise cinema."
        },
        {
            id: "godzilla-films",
            name: "Godzilla films",
            rights: "Toho / respective rights holders",
            accent: "#2d5a27",
            blurb: "Kaiju eras, atomic allegory, and the longest-running monster film mythology."
        },
        {
            id: "james-bond-films",
            name: "James Bond films",
            rights: "Eon / MGM / respective rights holders",
            accent: "#1a1a1a",
            blurb: "00 numbers, gadgets, and the spy film series that set the template for franchise longevity."
        },
        {
            id: "hunger-games-films",
            name: "The Hunger Games films",
            rights: "Lionsgate / respective rights holders",
            accent: "#c43030",
            blurb: "Panem arenas, Mockingjay rebellion, and the YA dystopia that dominated 2010s box offices."
        },
        {
            id: "twilight-films",
            name: "Twilight films",
            rights: "Summit / Lionsgate / respective rights holders",
            accent: "#2a2a4a",
            blurb: "Forks vampires, Team discourse, and the YA paranormal romance that became a cultural flashpoint."
        }
    ],
    "television": [
        {
            id: "breaking-bad",
            name: "Breaking Bad",
            rights: "AMC / Sony / respective rights holders",
            accent: "#2d5a27",
            blurb: "Heisenberg’s empire, Albuquerque chemistry, and the prestige crime saga of moral corrosion."
        },
        {
            id: "the-sopranos",
            name: "The Sopranos",
            rights: "HBO / Warner Bros. / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Therapy for a mob boss, New Jersey crew, and the show that invented modern prestige TV grammar."
        },
        {
            id: "the-wire",
            name: "The Wire",
            rights: "HBO / Warner Bros. / respective rights holders",
            accent: "#c45a3a",
            blurb: "Baltimore institutions, corners to newsrooms, and Simon’s novelistic systems crime epic."
        },
        {
            id: "lost-series",
            name: "Lost",
            rights: "ABC / Disney / respective rights holders",
            accent: "#2a5a4a",
            blurb: "Island mysteries, Dharma, and the serialized puzzle box that defined 2000s watercooler TV."
        },
        {
            id: "buffy-the-vampire-slayer",
            name: "Buffy the Vampire Slayer",
            rights: "Mutant Enemy / Disney / respective rights holders",
            accent: "#c9a227",
            blurb: "Hellmouth high school, Scooby Gang, and Whedon’s genre-defining monster-of-the-week mytharc."
        },
        {
            id: "the-x-files",
            name: "The X-Files",
            rights: "Fox / Disney / respective rights holders",
            accent: "#5a6a7a",
            blurb: "Mulder and Scully, conspiracy mythology, and the 90s freak-of-the-week template."
        },
        {
            id: "friends-sitcom",
            name: "Friends",
            rights: "Warner Bros. / respective rights holders",
            accent: "#5b9cff",
            blurb: "Purple apartment, Central Perk, and the 90s sitcom that never left syndication culture."
        },
        {
            id: "seinfeld",
            name: "Seinfeld",
            rights: "Sony / respective rights holders",
            accent: "#c9a227",
            blurb: "Show about nothing, New York neuroses, and the comedy that remade sitcom structure."
        },
        {
            id: "the-office-us",
            name: "The Office (US)",
            rights: "NBCUniversal / respective rights holders",
            accent: "#5b9cff",
            blurb: "Dunder Mifflin mockumentary, cringe romance, and the streaming-era sitcom giant."
        },
        {
            id: "mad-men",
            name: "Mad Men",
            rights: "AMC / Lionsgate / respective rights holders",
            accent: "#c45a3a",
            blurb: "Madison Avenue smoke, Don Draper masks, and the prestige period drama of advertising’s golden age."
        },
        {
            id: "succession",
            name: "Succession",
            rights: "HBO / Warner Bros. / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Roy family knife-fights, media empire succession, and the Shakespearean boardroom satire."
        },
        {
            id: "the-mandalorian",
            name: "The Mandalorian",
            rights: "Lucasfilm / Disney / respective rights holders",
            accent: "#5a5a5a",
            blurb: "Bounty hunter creed, Grogu, and the live-action Star Wars TV that proved the galaxy works weekly."
        },
        {
            id: "wandavision",
            name: "WandaVision",
            rights: "Marvel / Disney / respective rights holders",
            accent: "#c43030",
            blurb: "Sitcom hexes, grief magic, and the MCU series that played with television form itself."
        },
        {
            id: "stranger-things-tv",
            name: "Stranger Things (TV shelf)",
            rights: "Netflix / respective rights holders",
            accent: "#c43030",
            blurb: "Hawkins kids, Upside Down, and the nostalgic horror-adventure that defined Netflix originals."
        },
        {
            id: "the-boys-tv",
            name: "The Boys",
            rights: "Amazon / Sony / respective rights holders",
            accent: "#c43030",
            blurb: "Corrupt supers, Vought PR, and the bloody deconstruction of cape corporate power."
        },
        {
            id: "house-of-the-dragon",
            name: "House of the Dragon",
            rights: "HBO / Warner Bros. / respective rights holders",
            accent: "#c43030",
            blurb: "Targaryen civil war, dragons returned, and the Game of Thrones prequel of fire and succession."
        },
        {
            id: "wednesday-series",
            name: "Wednesday",
            rights: "Netflix / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Addams daughter detective vibes, Nevermore Academy, and the goth teen hit of streaming."
        },
        {
            id: "the-crown",
            name: "The Crown",
            rights: "Netflix / respective rights holders",
            accent: "#c9a227",
            blurb: "Windsor dramatization, decades of reign, and the prestige biopic soap of modern monarchy."
        },
        {
            id: "black-mirror-tv",
            name: "Black Mirror (TV shelf)",
            rights: "Netflix / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Tech dread anthologies and the series that became shorthand for digital anxiety."
        },
        {
            id: "true-detective",
            name: "True Detective",
            rights: "HBO / Warner Bros. / respective rights holders",
            accent: "#5a4a3a",
            blurb: "Anthology gloom, occult crime poetry, and the prestige mystery that peaks and valleys by season."
        }
    ],
    "comics": [
        {
            id: "x-men",
            name: "X-Men",
            rights: "Marvel / Disney / respective rights holders",
            accent: "#c43030",
            blurb: "Mutant metaphor, teams and schisms, and Marvel’s longest-running minority-superhero epic."
        },
        {
            id: "batman-comics",
            name: "Batman (comics)",
            rights: "DC / Warner Bros. / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Gotham detectives, rogues gallery, and the Dark Knight’s endlessly reinvented comic continuity."
        },
        {
            id: "superman-comics",
            name: "Superman (comics)",
            rights: "DC / Warner Bros. / respective rights holders",
            accent: "#c43030",
            blurb: "Krypton, Metropolis hope, and the archetype of the modern superhero on the page."
        },
        {
            id: "watchmen-comics",
            name: "Watchmen",
            rights: "DC / Warner Bros. / respective rights holders",
            accent: "#c9a227",
            blurb: "Masked Kennedys, moral gray, and Moore/Gibbons’ deconstruction that remade adult comics."
        },
        {
            id: "sandman-comics",
            name: "The Sandman",
            rights: "DC/Vertigo / Netflix / respective rights holders",
            accent: "#6a2a8a",
            blurb: "Dream of the Endless, mythology crossovers, and Gaiman’s landmark Vertigo fantasy."
        },
        {
            id: "saga-comics",
            name: "Saga",
            rights: "Image Comics / respective rights holders",
            accent: "#e07020",
            blurb: "Star-crossed parents, bounty hunters, and Vaughan/Staples’ space-opera indie epic."
        },
        {
            id: "walking-dead-comics",
            name: "The Walking Dead",
            rights: "Image Comics / respective rights holders",
            accent: "#5a6a48",
            blurb: "Kirkman’s zombie survival soap that spawned TV dominance from black-and-white pages."
        },
        {
            id: "hellboy",
            name: "Hellboy",
            rights: "Dark Horse / respective rights holders",
            accent: "#c43030",
            blurb: "B.P.R.D., folk-horror occult, and Mignola’s half-demon hero of pulp mythology."
        },
        {
            id: "spawn-comics",
            name: "Spawn",
            rights: "Image Comics / respective rights holders",
            accent: "#c43030",
            blurb: "Hellspawn cape, Independent comics boom, and McFarlane’s dark antihero mythology."
        },
        {
            id: "teenage-mutant-ninja-turtles-comics",
            name: "TMNT (comics)",
            rights: "IDW / Mirage / respective rights holders",
            accent: "#3a8a3a",
            blurb: "Mirage grit to IDW continuity — the comic turtles before and beside the cartoons."
        },
        {
            id: "v-for-vendetta",
            name: "V for Vendetta",
            rights: "DC / Warner Bros. / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Masks, fascism, and Moore/Lloyd’s dystopian graphic novel that became protest iconography."
        },
        {
            id: "persepolis-comic",
            name: "Persepolis",
            rights: "Satrapi / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Iranian Revolution memoir in comics form — Satrapi’s landmark autobiographical graphic novel."
        },
        {
            id: "maus",
            name: "Maus",
            rights: "Spiegelman / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Cats and mice allegory, Holocaust memoir, and the Pulitzer graphic novel that forced comics seriousness."
        },
        {
            id: "bone-comics",
            name: "Bone",
            rights: "Smith / respective rights holders",
            accent: "#e8e8e8",
            blurb: "Cartoon bones in a high-fantasy valley — Jeff Smith’s all-ages epic of wit and war."
        },
        {
            id: "ms-marvel-comics",
            name: "Ms. Marvel",
            rights: "Marvel / Disney / respective rights holders",
            accent: "#c43030",
            blurb: "Kamala Khan, Jersey City, and the breakout Muslim-American teen hero of modern Marvel."
        },
        {
            id: "deadpool-comics",
            name: "Deadpool",
            rights: "Marvel / Disney / respective rights holders",
            accent: "#c43030",
            blurb: "Fourth-wall merc, Weapon X trauma jokes, and the antihero who became a multimedia brand."
        },
        {
            id: "wolverine-comics",
            name: "Wolverine",
            rights: "Marvel / Disney / respective rights holders",
            accent: "#5a5a5a",
            blurb: "Adamantium claws, Weapon X, and the lone-wolf mutant whose solo books built a mythos."
        },
        {
            id: "green-lantern-comics",
            name: "Green Lantern",
            rights: "DC / Warner Bros. / respective rights holders",
            accent: "#3a8a4a",
            blurb: "Power rings, Corps spectrum, and the space-cop mythology of DC’s emotional light."
        },
        {
            id: "aquaman-comics",
            name: "Aquaman",
            rights: "DC / Warner Bros. / respective rights holders",
            accent: "#5b9cff",
            blurb: "Atlantis politics, trench horrors, and the underwater king whose comics lore runs deep."
        },
        {
            id: "wonder-woman-comics",
            name: "Wonder Woman",
            rights: "DC / Warner Bros. / respective rights holders",
            accent: "#c43030",
            blurb: "Themyscira, lasso truth, and the Amazonian hero whose page history spans feminism and myth."
        }
    ],
    "tabletop": [
        {
            id: "warhammer-age-of-sigmar",
            name: "Warhammer Age of Sigmar",
            rights: "Games Workshop / respective rights holders",
            accent: "#c9a227",
            blurb: "Realms of magic, endless war, and GW’s fantasy reboot of the Old World continuum."
        },
        {
            id: "shadowrun",
            name: "Shadowrun",
            rights: "Catalyst Game Labs / respective rights holders",
            accent: "#3a8a4a",
            blurb: "Cyberpunk meets magic, megacorps, and the RPG of deckers and shamans."
        },
        {
            id: "cyberpunk-red",
            name: "Cyberpunk Red / Cyberpunk RPG",
            rights: "R. Talsorian / respective rights holders",
            accent: "#e07020",
            blurb: "Night City tabletop roots that fed the video game — chrome, edgerunners, and corpo wars."
        },
        {
            id: "traveller-rpg",
            name: "Traveller",
            rights: "Mongoose / respective rights holders",
            accent: "#5b9cff",
            blurb: "Character generation mishaps, jump drives, and the classic science-fiction RPG of traders and wars."
        },
        {
            id: "legend-of-the-five-rings",
            name: "Legend of the Five Rings",
            rights: "Fantasy Flight / Edge / respective rights holders",
            accent: "#c43030",
            blurb: "Rokugan clans, honor, and the samurai fantasy RPG/LCG continuum."
        },
        {
            id: "world-of-darkness",
            name: "World of Darkness",
            rights: "Paradox / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Vampire to Werewolf to Mage — the shared gothic-punk RPG setting of personal horror."
        },
        {
            id: "mutants-and-masterminds",
            name: "Mutants & Masterminds",
            rights: "Green Ronin / respective rights holders",
            accent: "#c43030",
            blurb: "Point-buy supers, PL scaling, and the flexible RPG toolkit for cape campaigns."
        },
        {
            id: "savage-worlds",
            name: "Savage Worlds",
            rights: "Pinnacle / respective rights holders",
            accent: "#e07020",
            blurb: "Fast Furious Fun system powering pulp, Weird Wars, and countless licensed settings."
        },
        {
            id: "fate-rpg",
            name: "Fate RPG",
            rights: "Evil Hat / respective rights holders",
            accent: "#c9a227",
            blurb: "Aspects, fate points, and the narrative system that powers Dresden Files and beyond."
        },
        {
            id: "powered-by-the-apocalypse",
            name: "Powered by the Apocalypse",
            rights: "Apocalypse World / respective designers",
            accent: "#c45a3a",
            blurb: "Moves, soft/hard hits, and the design lineage behind Monsterhearts, Masks, and dozens more."
        },
        {
            id: "blades-in-the-dark",
            name: "Blades in the Dark",
            rights: "Evil Hat / respective rights holders",
            accent: "#2a2a4a",
            blurb: "Crew heists, Doskvol gloom, and the Forged in the Dark engine of criminal fantasy."
        },
        {
            id: "numenera",
            name: "Numenera",
            rights: "Monte Cook Games / respective rights holders",
            accent: "#6a4cff",
            blurb: "Ninth World ruins, cyphers, and weird science-fantasy discovery RPG design."
        },
        {
            id: "7th-sea",
            name: "7th Sea",
            rights: "Chaosium / John Wick / respective rights holders",
            accent: "#1a3a6a",
            blurb: "Swashbuckling Théah, secret societies, and the cinematic pirate-and-duelist RPG."
        },
        {
            id: "rifts-rpg",
            name: "Rifts",
            rights: "Palladium Books / respective rights holders",
            accent: "#c43030",
            blurb: "Mega-Damage chaos, dimensional rifts, and the kitchen-sink RPG of post-apocalyptic excess."
        },
        {
            id: "gurps",
            name: "GURPS",
            rights: "Steve Jackson Games / respective rights holders",
            accent: "#5a6a7a",
            blurb: "Generic Universal RolePlaying System — point-buy simulation across any genre."
        },
        {
            id: "arkham-horror-files",
            name: "Arkham Horror Files",
            rights: "Fantasy Flight / Chaosium / respective rights holders",
            accent: "#2a5a3a",
            blurb: "Board and card mythos games sharing Lovecraftian Arkham continuity."
        },
        {
            id: "twilight-imperium",
            name: "Twilight Imperium",
            rights: "Fantasy Flight / respective rights holders",
            accent: "#5b9cff",
            blurb: "Epic galactic politics, marathon sessions, and the board-game space-opera of negotiation."
        },
        {
            id: "root-board-game",
            name: "Root",
            rights: "Leder Games / respective rights holders",
            accent: "#2d5a27",
            blurb: "Asymmetric woodland war, factions with unique rules, and the critter politics board game."
        },
        {
            id: "spirit-island",
            name: "Spirit Island",
            rights: "Greater Than Games / respective rights holders",
            accent: "#5b9cff",
            blurb: "Co-op spirits defending an island from colonizers — inversion of settler board-game tropes."
        },
        {
            id: "ark-nova",
            name: "Ark Nova",
            rights: "Capstone / respective rights holders",
            accent: "#2d5a27",
            blurb: "Zoo-building euro with card engines and conservation themes that dominated recent hobby charts."
        }
    ],
    "card-games": [
        {
            id: "hearthstone",
            name: "Hearthstone",
            rights: "Blizzard / respective rights holders",
            accent: "#e07020",
            blurb: "Digital Warcraft TCG, tavern battles, and the accessible online card game that remade the genre."
        },
        {
            id: "legends-of-runeterra",
            name: "Legends of Runeterra",
            rights: "Riot Games / respective rights holders",
            accent: "#c9a227",
            blurb: "League regions on cards, landmark mechanics, and Riot’s fairer-economy digital CCG."
        },
        {
            id: "gwent",
            name: "Gwent",
            rights: "CD Projekt / respective rights holders",
            accent: "#c9a05a",
            blurb: "Witcher faction rows, spy cards, and the digital CCG born from a mini-game."
        },
        {
            id: "shadowverse",
            name: "Shadowverse",
            rights: "Cygames / respective rights holders",
            accent: "#6a4cff",
            blurb: "Anime digital CCG, class crafts, and the Japanese online card battler with dense lore."
        },
        {
            id: "force-of-will",
            name: "Force of Will",
            rights: "Force of Will Co. / respective rights holders",
            accent: "#5b7cff",
            blurb: "Ruler mechanics, collaborative storytelling, and the anime-style TCG with shared world events."
        },
        {
            id: "weiss-schwarz",
            name: "Weiss Schwarz",
            rights: "Bushiroad / respective rights holders",
            accent: "#e8a0c0",
            blurb: "Anime/game franchise crossovers in a single TCG ruleset — fans’ character card heaven."
        },
        {
            id: "cardfight-vanguard",
            name: "Cardfight!! Vanguard",
            rights: "Bushiroad / respective rights holders",
            accent: "#c43030",
            blurb: "Clans, ride decks, and the anime-backed TCG of planetary Cardfight lore."
        },
        {
            id: "battle-spirits",
            name: "Battle Spirits",
            rights: "Bandai / respective rights holders",
            accent: "#e07020",
            blurb: "Core removal, spirit evolution, and Bandai’s long-running anime TCG continuum."
        },
        {
            id: "dragon-ball-super-cg",
            name: "Dragon Ball Super Card Game",
            rights: "Bandai / respective rights holders",
            accent: "#e07020",
            blurb: "Leader life, combos, and the Super-era TCG of Z fighters and multiverse sagas."
        },
        {
            id: "one-piece-card-game",
            name: "One Piece Card Game",
            rights: "Bandai / respective rights holders",
            accent: "#c43030",
            blurb: "DON!! power, leaders, and Bandai’s breakout pirate TCG tied to Eiichiro Oda’s world."
        },
        {
            id: "pokemon-tcg-competitive",
            name: "Pokémon TCG competitive eras",
            rights: "The Pokémon Company / respective rights holders",
            accent: "#e8c14a",
            blurb: "Formats, rotation, and the championship lore of the Pokémon Trading Card Game."
        },
        {
            id: "magic-arena",
            name: "Magic: The Gathering Arena",
            rights: "Wizards of the Coast / respective rights holders",
            accent: "#c45a3a",
            blurb: "Digital MTG client, Alchemy formats, and the online home of tabletop Magic’s daily play."
        },
        {
            id: "netrunner",
            name: "Android: Netrunner",
            rights: "Fantasy Flight / Wizards legacy / respective rights holders",
            accent: "#5b7cff",
            blurb: "Runner vs corp asymmetry, cyberpunk heists, and the beloved LCG of digital crime."
        },
        {
            id: "android-netrunner-lcg",
            name: "Netrunner LCG cycles",
            rights: "Fantasy Flight / respective rights holders",
            accent: "#1a3a6a",
            blurb: "Data packs, banlists, and the living-card era that expanded Netrunner’s megacorp war."
        },
        {
            id: "arkham-horror-lcg",
            name: "Arkham Horror: The Card Game",
            rights: "Fantasy Flight / respective rights holders",
            accent: "#2a5a3a",
            blurb: "Co-op mythos campaigns, investigator decks, and scenario packs of Lovecraftian dread."
        },
        {
            id: "marvel-champions",
            name: "Marvel Champions",
            rights: "Fantasy Flight / respective rights holders",
            accent: "#c43030",
            blurb: "Hero decks vs villain scenarios — the cooperative LCG of Marvel’s roster."
        },
        {
            id: "star-wars-unlimited",
            name: "Star Wars: Unlimited",
            rights: "Fantasy Flight / respective rights holders",
            accent: "#1a1a1a",
            blurb: "Bases, aspects, and the new Star Wars TCG competing for table space in a crowded galaxy."
        },
        {
            id: "sorcery-contested-realm",
            name: "Sorcery: Contested Realm",
            rights: "Erik's Curiosa / respective rights holders",
            accent: "#c9a227",
            blurb: "Hand-painted art, dual-plane play, and the retro-aesthetic TCG revival darling."
        },
        {
            id: "metazoo",
            name: "MetaZoo",
            rights: "MetaZoo Games / respective rights holders",
            accent: "#3a8a4a",
            blurb: "Cryptid folklore cards, aura mechanics, and the indie TCG that rode a viral collecting wave."
        },
        {
            id: "keyforge",
            name: "KeyForge",
            rights: "Ghost Galaxy / FFG legacy / respective rights holders",
            accent: "#e07020",
            blurb: "Unique randomized decks, Archons, and Richards’ no-trading digital-physical hybrid vision."
        }
    ],
};

function allDepthFillSubjects() {
    const out = [];
    for (const [categoryId, list] of Object.entries(EXPANSION_DEPTH_FILLERS)) {
        for (const def of list) {
            out.push({ ...def, categoryId });
        }
    }
    for (const [categoryId, list] of Object.entries(CORE_DEPTH_FILLERS)) {
        for (const def of list) {
            out.push({ ...def, categoryId });
        }
    }
    return out;
}

function depthFillSubjectIds() {
    return allDepthFillSubjects().map((subject) => subject.id);
}

module.exports = {
    EXPANSION_DEPTH_FILLERS,
    CORE_DEPTH_FILLERS,
    allDepthFillSubjects,
    depthFillSubjectIds
};
