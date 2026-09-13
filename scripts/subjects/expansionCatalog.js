/**
 * Extra home-page categories (beyond the core media shelves).
 * Mythology, history, unexplained, maritime, crime, military, folklore, and more.
 */

const EXPANSION_CATEGORIES = [
    {
        id: "mythology",
        label: "Mythology",
        blurb: "Gods, heroes, and cosmologies that still structure modern storytelling.",
        accent: "#c9a227",
        subjects: [
            {
                id: "greek-mythology",
                name: "Greek mythology",
                rights: "Public-domain traditions / respective modern rights holders",
                accent: "#d4b45a",
                blurb: "Olympians, heroes, and underworld geography that seeded Western fantasy language."
            },
            {
                id: "norse-mythology",
                name: "Norse mythology",
                rights: "Public-domain traditions / respective modern rights holders",
                accent: "#6a8cff",
                blurb: "Aesir, giants, and Ragnarök cycles mapped from the Eddas into modern pop myth."
            },
            {
                id: "egyptian-mythology",
                name: "Egyptian mythology",
                rights: "Public-domain traditions / respective modern rights holders",
                accent: "#e0a020",
                blurb: "Netjeru, afterlife courts, and Nile cosmology that keep returning in fiction and ritual study."
            },
            {
                id: "world-mythology",
                name: "World mythology",
                rights: "Public-domain traditions / respective modern rights holders",
                accent: "#c9a227",
                blurb: "Gods, creatures, heroes, myths, symbols, sacred places, and genealogies across global myth systems."
            }
        ]
    },
    {
        id: "history",
        label: "History",
        blurb: "Empires, wars, frontiers, and trade routes with dense people-and-place graphs.",
        accent: "#b87333",
        subjects: [
            {
                id: "ancient-egypt",
                name: "Ancient Egypt",
                rights: "Public-domain historical and archaeological record / respective modern rights holders",
                accent: "#d4a017",
                blurb: "Pharaohs, dynasties, tombs, rituals, and Nile-state archaeology that still drive rediscovery lore."
            },
            {
                id: "ancient-rome",
                name: "The Roman Empire",
                rights: "Public-domain historical record / respective modern rights holders",
                accent: "#c45a3a",
                blurb: "Republic to empire — emperors, legions, intrigue, cities, and monuments that still organize civic myth."
            },
            {
                id: "world-war-ii",
                name: "World War II",
                rights: "Public-domain historical record / respective modern rights holders",
                accent: "#5a6a48",
                blurb: "Theatres, operations, weapons, spies, resistance networks, and the mid-20th-century global war graph."
            },
            {
                id: "medieval-europe",
                name: "Medieval Europe",
                rights: "Public-domain historical record / respective modern rights holders",
                accent: "#7a5a3a",
                blurb: "Kings, dynasties, castles, knights, faiths, plagues, and succession struggles across the Middle Ages."
            },
            {
                id: "american-wild-west",
                name: "The American Wild West",
                rights: "Public-domain historical record / respective modern rights holders",
                accent: "#c4783a",
                blurb: "Outlaws, lawmen, boomtowns, railroads, Native nations, and frontier legends of the American West."
            },
            {
                id: "cold-war",
                name: "Cold War",
                rights: "Public historical record / respective modern rights holders",
                accent: "#4a5a7a",
                blurb: "Superpower rivalry, proxy wars, intelligence contests, and the nuclear standoff that reshaped the late 20th century."
            },
            {
                id: "espionage-spies",
                name: "Espionage & spies",
                rights: "Public historical and intelligence record / respective modern rights holders",
                accent: "#3a4a5a",
                blurb: "Agencies, double agents, tradecraft, covert ops, and the people who lived between covers."
            },
            {
                id: "knights-templar",
                name: "The Knights Templar",
                rights: "Public-domain historical record / respective modern rights holders",
                accent: "#8a1a1a",
                blurb: "Crusading order, banking networks, trials, dissolution, and the legends that outlived the knights."
            },
            {
                id: "exploration-explorers",
                name: "Exploration & explorers",
                rights: "Public historical and geographic record / respective modern rights holders",
                accent: "#2a7a5a",
                blurb: "Voyages, maps, first contacts, rival claims, and the explorers who stretched known geography."
            },
            {
                id: "american-presidency",
                name: "The American Presidency",
                rights: "Public historical and governmental record / respective modern rights holders",
                accent: "#1a3a6a",
                blurb: "Presidents, administrations, elections, scandals, and the office that concentrates American political lore."
            },
            {
                id: "silk-road",
                name: "Silk Road",
                rights: "Public-domain historical record / respective modern rights holders",
                accent: "#c9a05a",
                blurb: "Overland and maritime corridors that moved goods, faiths, and stories across Eurasia."
            },
            {
                id: "native-american-history",
                name: "Native American history & nations",
                rights: "Public historical record / respective nations, tribes, and rights holders",
                accent: "#8a5a2a",
                blurb: "Nations, leaders, languages, wars, treaties, homelands, and living traditions across Indigenous North America."
            },
            {
                id: "historical-clothing",
                name: "Historical clothing",
                rights: "Public historical and material-culture record / respective museums and rights holders",
                accent: "#a07050",
                blurb: "Garments, cultures, periods, classes, materials, and the symbolism stitched into dress across eras."
            }
        ]
    },
    {
        id: "horror",
        label: "Horror",
        blurb: "Monsters, slashers, and dread franchises built to haunt the culture.",
        accent: "#8b1a1a",
        subjects: [
            {
                id: "halloween-franchise",
                name: "Halloween",
                rights: "Trancas / Miramax / Universal / respective rights holders",
                accent: "#ff6a00",
                blurb: "Michael Myers and Haddonfield — the slasher calendar's most durable myth."
            },
            {
                id: "alien-franchise",
                name: "Alien",
                rights: "20th Century Studios / Disney / respective rights holders",
                accent: "#4a7a3a",
                blurb: "Xenomorphs, Weyland-Yutani, and space-horror design that redefined the genre."
            },
            {
                id: "the-exorcist",
                name: "The Exorcist",
                rights: "Warner Bros. / respective rights holders",
                accent: "#6a4a2a",
                blurb: "Possession cinema and Catholic dread that still set the possession-horror template."
            }
        ]
    },
    {
        id: "western-animation",
        label: "Western animation",
        blurb: "Studios and series outside Japanese anime with deep character maps.",
        accent: "#5b9cff",
        subjects: [
            {
                id: "avatar-the-last-airbender",
                name: "Avatar: The Last Airbender",
                rights: "Nickelodeon / Paramount / respective rights holders",
                accent: "#e07020",
                blurb: "Bending nations, Avatars, and a coming-of-age war story that became a modern classic."
            },
            {
                id: "adventure-time",
                name: "Adventure Time",
                rights: "Cartoon Network / Warner Bros. / respective rights holders",
                accent: "#5ec4d8",
                blurb: "Ooo's post-apocalyptic candy kingdoms and emotional lore across a sprawling series."
            },
            {
                id: "pixar",
                name: "Pixar",
                rights: "Pixar / Disney / respective rights holders",
                accent: "#00a8e8",
                blurb: "Studio storytelling worlds — toys, monsters, cars, and emotional architecture in CGI."
            }
        ]
    },
    {
        id: "toys",
        label: "Toys & collectibles",
        blurb: "Play lines and collectible myths that spilled into media empires.",
        accent: "#e0456a",
        subjects: [
            {
                id: "lego",
                name: "LEGO",
                rights: "The LEGO Group / respective rights holders",
                accent: "#e8c14a",
                blurb: "Brick systems, themes, and licensed worlds built from modular plastic canon."
            },
            {
                id: "gi-joe",
                name: "G.I. Joe",
                rights: "Hasbro / respective rights holders",
                accent: "#3a6a3a",
                blurb: "A Real American Hero — factions, file cards, and toy-to-cartoon lore."
            },
            {
                id: "my-little-pony",
                name: "My Little Pony",
                rights: "Hasbro / respective rights holders",
                accent: "#d48cff",
                blurb: "Ponies, friendship magic, and generations of collectible-driven storytelling."
            }
        ]
    },
    {
        id: "wrestling",
        label: "Pro wrestling",
        blurb: "Promotions, personas, and kayfabe histories told as living soap opera.",
        accent: "#e03535",
        subjects: [
            {
                id: "wwe",
                name: "WWE",
                rights: "WWE / TKO / respective rights holders",
                accent: "#d4af37",
                blurb: "Sports entertainment's global promotion — titles, brands, and decades of character lore."
            },
            {
                id: "aew",
                name: "AEW",
                rights: "All Elite Wrestling / respective rights holders",
                accent: "#c4a000",
                blurb: "All Elite Wrestling — factions, PPV mythmaking, and the modern U.S. alternative."
            },
            {
                id: "njpw",
                name: "NJPW",
                rights: "New Japan Pro-Wrestling / Bushiroad / respective rights holders",
                accent: "#c8102e",
                blurb: "New Japan's strong style — IWGP lineages, factions, and international crossovers."
            }
        ]
    },
    {
        id: "science-nature",
        label: "Science & nature",
        blurb: "Discoveries, expeditions, and natural histories with encyclopedia depth.",
        accent: "#3db8a0",
        subjects: [
            {
                id: "nasa",
                name: "NASA",
                rights: "NASA / U.S. government works / respective partners",
                accent: "#0b3d91",
                blurb: "Missions, centers, and spacecraft that map the public story of U.S. spaceflight."
            },
            {
                id: "dinosaurs",
                name: "Dinosaurs & prehistoric life",
                rights: "Public-domain paleontology / respective museums and rights holders",
                accent: "#6a8a3a",
                blurb: "Species, fossils, formations, eras, discoveries, scientists, anatomy, and the deep-time map of prehistoric life."
            },
            {
                id: "oceanography",
                name: "Oceanography",
                rights: "Public-domain science / respective institutions and rights holders",
                accent: "#1a6a8a",
                blurb: "Currents, trenches, and vessels that chart the planet's connected seas."
            }
        ]
    },
    {
        id: "podcasts",
        label: "Podcasts & audio",
        blurb: "Serialized audio worlds — fiction, actual play, and documentary myth.",
        accent: "#9b59b6",
        subjects: [
            {
                id: "critical-role",
                name: "Critical Role",
                rights: "Critical Role / respective rights holders",
                accent: "#a020f0",
                blurb: "Actual-play campaigns that became a multimedia fantasy franchise."
            },
            {
                id: "welcome-to-night-vale",
                name: "Welcome to Night Vale",
                rights: "Night Vale Presents / respective rights holders",
                accent: "#5a3a8a",
                blurb: "A desert community radio fiction of conspiracies, angels, and small-town weird."
            },
            {
                id: "serial-podcast",
                name: "Serial",
                rights: "Serial Productions / New York Times / respective rights holders",
                accent: "#c45a2c",
                blurb: "The investigative podcast that remapped true-crime audio storytelling."
            }
        ]
    },
    {
        id: "internet-culture",
        label: "Internet culture",
        blurb: "Platforms, memes, and online commons that became modern folklore.",
        accent: "#3498db",
        subjects: [
            {
                id: "wikipedia",
                name: "Wikipedia",
                rights: "Wikimedia Foundation / contributors (CC licenses)",
                accent: "#eaecf0",
                blurb: "The collaborative encyclopedia — policies, projects, and knowledge-graph culture."
            },
            {
                id: "youtube",
                name: "YouTube",
                rights: "Google / YouTube / respective creators and rights holders",
                accent: "#ff0000",
                blurb: "Creator economies, genres, and platform lore from vlogs to algorithmic fame."
            },
            {
                id: "meme-history",
                name: "Meme history",
                rights: "Public internet culture / respective creators and platforms",
                accent: "#f0a020",
                blurb: "Image macros, copypasta, and viral forms tracked as vernacular folklore."
            }
        ]
    },
    {
        id: "theater",
        label: "Theater & musicals",
        blurb: "Stages, scores, and dramatic canons that travel from page to performance.",
        accent: "#e8c14a",
        subjects: [
            {
                id: "shakespeare",
                name: "Shakespeare",
                rights: "Public-domain works / respective modern productions and rights holders",
                accent: "#c9a227",
                blurb: "Plays, characters, and performance traditions around William Shakespeare's canon."
            },
            {
                id: "broadway",
                name: "Broadway",
                rights: "Respective producers, leagues, and rights holders",
                accent: "#e03570",
                blurb: "New York's commercial theatre district — houses, hits, and industry lore."
            },
            {
                id: "hamilton",
                name: "Hamilton",
                rights: "Lin-Manuel Miranda / respective producers and rights holders",
                accent: "#3a5a40",
                blurb: "The hip-hop history musical that remixed Founding-era biography for the stage."
            }
        ]
    },
    {
        id: "fighting-games",
        label: "Fighting games",
        blurb: "Competitive fighters with deep cast lore and tournament culture.",
        accent: "#e07020",
        subjects: [
            {
                id: "street-fighter",
                name: "Street Fighter",
                rights: "Capcom / respective rights holders",
                accent: "#e8a020",
                blurb: "World warriors, combos, and Capcom's flagship fighting-game universe."
            },
            {
                id: "mortal-kombat",
                name: "Mortal Kombat",
                rights: "NetherRealm / Warner Bros. / respective rights holders",
                accent: "#8b0000",
                blurb: "Outworld tournaments, fatalities, and decades of multiverse reboot lore."
            },
            {
                id: "tekken",
                name: "Tekken",
                rights: "Bandai Namco / respective rights holders",
                accent: "#c8102e",
                blurb: "The King of Iron Fist Tournament — Mishima drama and 3D fighter mythology."
            }
        ]
    },
    {
        id: "sci-fi",
        label: "Science fiction",
        blurb: "Futures, first contacts, and speculative franchises beyond a single medium.",
        accent: "#5b7cff",
        subjects: [
            {
                id: "star-trek",
                name: "Star Trek",
                rights: "Paramount / CBS / respective rights holders",
                accent: "#5b9cff",
                blurb: "Federation ideals, ships, and series that defined optimistic space opera on screen."
            },
            {
                id: "blade-runner",
                name: "Blade Runner",
                rights: "Warner Bros. / Alcon / respective rights holders",
                accent: "#c45a2c",
                blurb: "Replicants, neon noir, and Philip K. Dick-rooted futures of memory and personhood."
            },
            {
                id: "foundation-series",
                name: "Foundation",
                rights: "Estate of Isaac Asimov / Apple / respective rights holders",
                accent: "#6a4cff",
                blurb: "Psychohistory, empires, and Asimov's long-arc future history across books and screen."
            }
        ]
    },
    {
        id: "folklore",
        label: "Folklore & legend",
        blurb: "Folk heroes, cycle tales, and living vernacular myths that keep getting retold.",
        accent: "#6a8a4a",
        subjects: [
            {
                id: "arthurian-legend",
                name: "Arthurian legend",
                rights: "Public-domain traditions / respective modern rights holders",
                accent: "#5a7a9a",
                blurb: "Camelot, the Round Table, and Grail quests across medieval and modern retellings."
            },
            {
                id: "robin-hood",
                name: "Robin Hood",
                rights: "Public-domain traditions / respective modern rights holders",
                accent: "#2d5a27",
                blurb: "Sherwood outlawry, merry men, and redistribution myths in English folklore."
            },
            {
                id: "journey-to-the-west",
                name: "Journey to the West",
                rights: "Public-domain classic / respective modern adaptations and rights holders",
                accent: "#c43030",
                blurb: "Sun Wukong's pilgrimage epic — demons, disciples, and East Asian adventure canon."
            },
            {
                id: "folklore-urban-legends",
                name: "Folklore & urban legends",
                rights: "Public-domain folklore traditions / respective modern rights holders",
                accent: "#8a6a4a",
                blurb: "Regional monsters, cautionary tales, origin variants, and cultural connections across oral tradition."
            },
            {
                id: "folk-monsters",
                name: "Folk monsters",
                rights: "Public-domain folklore traditions / respective modern rights holders",
                accent: "#5a6a3a",
                blurb: "Regional creatures, sightings, local names, folklore variants, and the oral maps that keep monsters alive."
            },
            {
                id: "medieval-monsters-bestiaries",
                name: "Medieval monsters & bestiaries",
                rights: "Public-domain manuscripts and traditions / respective museums and rights holders",
                accent: "#6a4a2a",
                blurb: "Bestiary beasts, manuscripts, moral symbolism, legends, and the sources that taught medieval readers their monsters."
            }
        ]
    },
    {
        id: "unexplained",
        label: "Unexplained",
        blurb: "Cryptids, sightings, disputed discoveries, and contested narratives with dense witness graphs.",
        accent: "#6a5acd",
        subjects: [
            {
                id: "cryptids",
                name: "Cryptids",
                rights: "Public folklore and research literature / respective investigators and rights holders",
                accent: "#4a7a3a",
                blurb: "Bigfoot, Nessie, Mothman, and regional cryptid legends — sightings, investigators, and hoaxes."
            },
            {
                id: "ufo-uap-history",
                name: "UFO / UAP history",
                rights: "Public record, journalism, and respective witnesses / agencies / rights holders",
                accent: "#5b9cff",
                blurb: "Sightings, military incidents, aircraft, investigations, and the long trail of UAP claims."
            },
            {
                id: "conspiracy-theories",
                name: "Conspiracy theories",
                rights: "Public discourse and historical record / respective rights holders",
                accent: "#8b4513",
                blurb: "JFK, moon-landing claims, secret societies, alleged programs, and the connection graphs believers map."
            },
            {
                id: "archaeological-mysteries",
                name: "Archaeological mysteries",
                rights: "Public archaeological record / respective institutions and rights holders",
                accent: "#c9a227",
                blurb: "Lost cities, undeciphered scripts, disputed artifacts, and discoveries that refuse neat consensus."
            },
            {
                id: "haunted-places",
                name: "Haunted places",
                rights: "Public folklore and historical record / respective property owners and rights holders",
                accent: "#6a4a7a",
                blurb: "Buildings, murders, witnesses, owners, investigations, and the events that stick to a place."
            },
            {
                id: "lost-civilizations",
                name: "Lost civilizations",
                rights: "Public historical and archaeological record / respective modern rights holders",
                accent: "#2a8a8a",
                blurb: "Atlantis myths, Maya, Indus Valley, Minoans, Göbekli Tepe, Cahokia, and other vanished or debated worlds."
            },
            {
                id: "secret-societies",
                name: "Secret societies",
                rights: "Public historical record and scholarship / respective organizations and rights holders",
                accent: "#3a3a5a",
                blurb: "Freemasons, Illuminati mythology, Skull and Bones, occult movements, and contested symbolism."
            }
        ]
    },
    {
        id: "maritime",
        label: "Maritime",
        blurb: "Ships, ports, wrecks, and sea power — explorers, pirates, and naval lore.",
        accent: "#1a5a7a",
        subjects: [
            {
                id: "pirates",
                name: "Pirates",
                rights: "Public-domain historical record / respective modern rights holders",
                accent: "#2d4a3a",
                blurb: "Famous pirates, ships, battles, treasure, ports, executions, and maritime legends."
            },
            {
                id: "ocean-maritime-history",
                name: "Ocean & maritime history",
                rights: "Public historical and nautical record / respective modern rights holders",
                accent: "#2a6a9a",
                blurb: "Shipwrecks, expeditions, lost ships, naval battles, explorers, and deep-sea mysteries."
            },
            {
                id: "the-titanic",
                name: "The Titanic",
                rights: "Public historical record / respective wreck and estate rights holders",
                accent: "#1a4a6a",
                blurb: "Ship, passengers, crew, sinking, inquiry, wreck discovery, and the cultural afterlife of the disaster."
            },
            {
                id: "famous-shipwrecks",
                name: "Famous shipwrecks",
                rights: "Public historical and nautical record / respective modern rights holders",
                accent: "#2a5a7a",
                blurb: "Lost vessels, cargoes, survivors, salvage races, and the underwater sites that keep pulling researchers back."
            },
            {
                id: "lighthouses",
                name: "Lighthouses",
                rights: "Public historical and maritime record / respective agencies and rights holders",
                accent: "#d4a017",
                blurb: "Individual lights, keepers, shipwrecks nearby, construction feats, and the coastal histories each tower anchors."
            },
            {
                id: "ghost-ships",
                name: "Ghost ships",
                rights: "Public historical and maritime record / respective modern rights holders",
                accent: "#3a5a6a",
                blurb: "Abandoned or vanished vessels, crews, voyages, sightings, theories, and the discoveries that reopen cold cases at sea."
            }
        ]
    },
    {
        id: "crime",
        label: "Crime & underworld",
        blurb: "Organized crime, unsolved cases, and the people and places crime lore maps.",
        accent: "#5a1a1a",
        subjects: [
            {
                id: "the-mafia",
                name: "The Mafia",
                rights: "Public historical and legal record / respective rights holders",
                accent: "#8b1a1a",
                blurb: "Families, bosses, murders, betrayals, cities, rackets, informants, and trials."
            },
            {
                id: "serial-killer-history",
                name: "Serial killer history",
                rights: "Public historical and legal record / respective rights holders",
                accent: "#5a0a0a",
                blurb: "Cases, investigators, victims, timelines, and the cultural machinery that turns crimes into lasting lore."
            },
            {
                id: "famous-unsolved-crimes",
                name: "Famous unsolved crimes",
                rights: "Public historical and legal record / respective rights holders",
                accent: "#6a2a2a",
                blurb: "Open cases, suspects, theories, evidence trails, and the mysteries that refuse closure."
            }
        ]
    },
    {
        id: "military",
        label: "Military & fortresses",
        blurb: "Weapons, units, sieges, and stone strongholds — technology and power across eras.",
        accent: "#5a6a48",
        subjects: [
            {
                id: "weapons-military-history",
                name: "Weapons & military history",
                rights: "Public historical and technical record / respective modern rights holders",
                accent: "#6a7a50",
                blurb: "Famous weapons, inventors, wars, units, battles, and the technological chains between them."
            },
            {
                id: "castles-fortresses",
                name: "Castles & fortresses",
                rights: "Public historical and architectural record / respective modern rights holders",
                accent: "#7a6a5a",
                blurb: "Owners, sieges, dynasties, battles, architecture, and legends attached to every stronghold."
            },
            {
                id: "nuclear-weapons-history",
                name: "Nuclear weapons & nuclear history",
                rights: "Public historical and technical record / respective governments and rights holders",
                accent: "#8a9a40",
                blurb: "Programs, scientists, tests, delivery systems, crises, and the deterrence graph of the atomic age."
            },
            {
                id: "ancient-weaponry",
                name: "Ancient weapons",
                rights: "Public historical and archaeological record / respective museums and rights holders",
                accent: "#8a6a40",
                blurb: "Individual weapons, cultures, battles, metallurgy, finds, and the makers who forged pre-modern arms."
            }
        ]
    },
    {
        id: "occult",
        label: "Occult & esoterica",
        blurb: "Alchemy, vampire myth, witchcraft, and ritual traditions with dense symbolic graphs.",
        accent: "#5a2a6a",
        subjects: [
            {
                id: "alchemy-occultism",
                name: "Alchemy & occultism",
                rights: "Public-domain traditions and scholarship / respective modern rights holders",
                accent: "#8a4a9a",
                blurb: "Practitioners, texts, symbols, laboratories, and the hermetic lineages that blur science and magic."
            },
            {
                id: "vampire-lore",
                name: "Vampire lore",
                rights: "Public folklore traditions / respective modern fiction rights holders",
                accent: "#8b0000",
                blurb: "Folk vampires, literary bloodlines, rules of undeath, hunters, and the places the myth keeps reanimating."
            },
            {
                id: "witchcraft-witch-trials",
                name: "Witchcraft & witch trials",
                rights: "Public historical and folklore record / respective modern rights holders",
                accent: "#4a2a5a",
                blurb: "Folk practice, accusations, courts, panics, and the people caught in witchcraft's legal and legendary machinery."
            }
        ]
    },
    {
        id: "royalty",
        label: "Royalty & thrones",
        blurb: "Dynasties, successions, courts, and the family trees that organize power lore.",
        accent: "#b8860b",
        subjects: [
            {
                id: "royal-families",
                name: "Royal families",
                rights: "Public historical record / respective houses and rights holders",
                accent: "#c9a227",
                blurb: "Houses, marriages, rivals, claims, and the genealogies that turn politics into family drama."
            },
            {
                id: "british-monarchy",
                name: "British monarchy",
                rights: "Public historical record / respective Crown and rights holders",
                accent: "#1a3a6a",
                blurb: "Sovereigns, consorts, succession crises, palaces, and the long continuity of the British crown."
            },
            {
                id: "heraldry",
                name: "Heraldry & coats of arms",
                rights: "Public historical heraldic record / respective colleges and rights holders",
                accent: "#b8860b",
                blurb: "Families, charges, kingdoms, knights, tinctures, and the genealogies encoded in coats of arms."
            },
            {
                id: "famous-bloodlines",
                name: "Genealogy & famous bloodlines",
                rights: "Public historical and genealogical record / respective houses and rights holders",
                accent: "#8a5a2a",
                blurb: "Families, marriages, descendants, monarchs, and the political alliances drawn through bloodlines."
            }
        ]
    },
    {
        id: "religion",
        label: "Religion & belief",
        blurb: "Faiths, heresies, councils, and sacred mysteries mapped across people and places.",
        accent: "#6a5a3a",
        subjects: [
            {
                id: "religious-history",
                name: "Religious history",
                rights: "Public historical and theological record / respective faiths and rights holders",
                accent: "#8a7a4a",
                blurb: "Founders, scriptures, schisms, councils, saints, and the institutions that carried belief through time."
            },
            {
                id: "heretical-movements",
                name: "Heretical movements & religious mysteries",
                rights: "Public historical and theological record / respective faiths and rights holders",
                accent: "#7a4a3a",
                blurb: "Banned doctrines, mystery cults, underground churches, and the conflicts that made orthodoxy visible."
            }
        ]
    },
    {
        id: "disasters",
        label: "Disasters & catastrophes",
        blurb: "Natural and man-made disasters — timelines, places, survivors, and aftermath lore.",
        accent: "#a05a2a",
        subjects: [
            {
                id: "disasters-catastrophes",
                name: "Disasters & catastrophes",
                rights: "Public historical record / respective agencies and rights holders",
                accent: "#c45a2c",
                blurb: "Earthquakes, fires, floods, industrial failures, pandemics, and the human networks each catastrophe remaps."
            }
        ]
    },
    {
        id: "culinary",
        label: "Food & drink",
        blurb: "Cuisines, staples, and drink cultures with geographic and craft lore.",
        accent: "#e07040",
        subjects: [
            {
                id: "coffee",
                name: "Coffee history & culture",
                rights: "Public agricultural and trade history / respective brands and rights holders",
                accent: "#6f4e37",
                blurb: "Origins, regions, varieties, companies, cafés, inventions, and the personalities who shaped coffee culture."
            },
            {
                id: "sushi",
                name: "Sushi",
                rights: "Japanese culinary tradition / respective chefs and rights holders",
                accent: "#e8e4db",
                blurb: "Vinegared rice cuisine — regional styles, craft lineages, and global adaptation."
            },
            {
                id: "wine",
                name: "Wine",
                rights: "Public viticultural tradition / respective estates and rights holders",
                accent: "#722f37",
                blurb: "Terroir, appellations, and tasting cultures that organize wine as living geography."
            },
            {
                id: "ancient-food",
                name: "Ancient food & culinary history",
                rights: "Public historical and archaeological record / respective museums and rights holders",
                accent: "#c4783a",
                blurb: "Dishes, ingredients, origins, civilizations, recipes, and the trade routes that moved taste across antiquity."
            },
            {
                id: "spices-trade",
                name: "Spices & trade",
                rights: "Public historical and trade record / respective modern rights holders",
                accent: "#c45a2c",
                blurb: "Cinnamon and beyond — spice routes, empires, merchants, wars, and the geography of flavor."
            },
            {
                id: "alcohol-history",
                name: "Alcohol history",
                rights: "Public historical and trade record / respective brands and rights holders",
                accent: "#8a4a2a",
                blurb: "Drinks, distilleries, breweries, regions, prohibition eras, inventions, and the people who made them."
            }
        ]
    },
    {
        id: "transport",
        label: "Transport & machines",
        blurb: "Vehicles, routes, and the people who moved the modern world — cars, planes, rails, and their long tails.",
        accent: "#4a6a8a",
        subjects: [
            {
                id: "cars-automotive-history",
                name: "Cars & automotive history",
                rights: "Public industrial history / respective manufacturers and rights holders",
                accent: "#c45a2c",
                blurb: "Models, engines, designers, races, companies, owners, failures, and the innovations that remade mobility."
            },
            {
                id: "aviation-history",
                name: "Aviation history",
                rights: "Public aviation history / respective manufacturers, agencies, and rights holders",
                accent: "#3a6a9a",
                blurb: "Aircraft, pilots, manufacturers, crashes, wars, records, airports, and the inventions that conquered the sky."
            },
            {
                id: "railroad-history",
                name: "Railroad history",
                rights: "Public railroad history / respective companies and rights holders",
                accent: "#5a4a3a",
                blurb: "Railroads, locomotives, towns, engineers, robber barons, disasters, and the routes that stitched continents."
            }
        ]
    },
    {
        id: "built-environment",
        label: "Built environment",
        blurb: "Buildings, ruins, and abandoned sites — architecture with owners, scandals, and afterlives.",
        accent: "#7a6a5a",
        subjects: [
            {
                id: "famous-buildings",
                name: "Famous buildings",
                rights: "Public architectural history / respective owners, estates, and rights holders",
                accent: "#8a7a60",
                blurb: "Architects, owners, construction, scandals, events, renovations, and the lives of landmark structures."
            },
            {
                id: "abandoned-places",
                name: "Abandoned places",
                rights: "Public historical record / respective owners and rights holders",
                accent: "#6a5a4a",
                blurb: "Individual sites, prior owners, disasters, photographs, legends, and the histories that emptied them."
            }
        ]
    }
];

const { applyCategoryMinimums } = require("./categoryMinimums");
applyCategoryMinimums(EXPANSION_CATEGORIES, 5);

function expansionSubjectIds() {
    return EXPANSION_CATEGORIES.flatMap((category) =>
        category.subjects.map((subject) => subject.id)
    );
}

function allExpansionSubjects() {
    return EXPANSION_CATEGORIES.flatMap((category) =>
        category.subjects.map((subject) => ({
            ...subject,
            categoryId: category.id,
            categoryLabel: category.label
        }))
    );
}

function categoryEntriesForCatalog() {
    return EXPANSION_CATEGORIES.map((category) => ({
        id: category.id,
        label: category.label,
        blurb: category.blurb
    }));
}

function subjectCategoryMap() {
    return Object.fromEntries(
        allExpansionSubjects().map((subject) => [
            subject.id,
            [subject.categoryId]
        ])
    );
}

module.exports = {
    EXPANSION_CATEGORIES,
    expansionSubjectIds,
    allExpansionSubjects,
    categoryEntriesForCatalog,
    subjectCategoryMap
};
