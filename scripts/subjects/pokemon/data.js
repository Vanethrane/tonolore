/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pokemon",
        "name": "Pokémon",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Global franchise of creatures, trainers, and gyms.",
        "description": "Pokémon is a multimedia franchise from Game Freak, Nintendo, and Creatures in which trainers catch and battle creatures called Pokémon across regions like Kanto, Johto, and beyond.",
        "aliases": []
    },
    {
        "slug": "satoshi-tajiri",
        "name": "Satoshi Tajiri",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of Pokémon.",
        "description": "Satoshi Tajiri conceived Pokémon, inspiring the Game Freak teams that built Red, Green, and the worlds that followed.",
        "aliases": []
    },
    {
        "slug": "game-freak",
        "name": "Game Freak",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Primary developer of core Pokémon games.",
        "description": "Game Freak develops the mainline Pokémon role-playing games in partnership with Nintendo and The Pokémon Company.",
        "aliases": []
    },
    {
        "slug": "nintendo",
        "name": "Nintendo",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher and hardware partner for Pokémon.",
        "description": "Nintendo publishes Pokémon games and helped turn the franchise into a worldwide phenomenon.",
        "aliases": []
    },
    {
        "slug": "the-pokemon-company",
        "name": "The Pokémon Company",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Company managing the Pokémon brand.",
        "description": "The Pokémon Company oversees Pokémon branding across games, anime, cards, and merchandise.",
        "aliases": []
    },
    {
        "slug": "pokemon-red-blue",
        "name": "Pokémon Red and Blue",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Original Kanto games that launched the series.",
        "description": "Pokémon Red and Blue introduce Kanto, the original starter Pokémon, Team Rocket, and the Indigo League.",
        "aliases": []
    },
    {
        "slug": "pokemon-gold-silver",
        "name": "Pokémon Gold and Silver",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Johto generation expanding the original map.",
        "description": "Gold and Silver add Johto, new Pokémon, and connections back to Kanto.",
        "aliases": []
    },
    {
        "slug": "pokemon-anime",
        "name": "Pokémon Anime",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Long-running animated series following trainers.",
        "description": "The Pokémon anime follows Ash Ketchum, Pikachu, and later new heroes across regions in parallel with the games.",
        "aliases": []
    },
    {
        "slug": "pokemon-tcg",
        "name": "Pokémon Trading Card Game",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Collectible card game based on Pokémon battles.",
        "description": "The Pokémon TCG lets players build decks around Pokémon, Trainers, and Energy cards.",
        "aliases": []
    },
    {
        "slug": "ash-ketchum",
        "name": "Ash Ketchum",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Anime protagonist aiming to be a Pokémon Master.",
        "description": "Ash Ketchum begins in Pallet Town with Pikachu and travels regions catching Pokémon and challenging Gym Leaders.",
        "aliases": []
    },
    {
        "slug": "pikachu",
        "name": "Pikachu",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Electric Mouse Pokémon and franchise mascot.",
        "description": "Pikachu is an Electric-type Pokémon and Ash Ketchum's partner, becoming the face of the entire franchise.",
        "aliases": []
    },
    {
        "slug": "misty",
        "name": "Misty",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Cerulean Gym Leader and early anime companion.",
        "description": "Misty specializes in Water-type Pokémon and travels with Ash Ketchum through Kanto and beyond.",
        "aliases": []
    },
    {
        "slug": "brock",
        "name": "Brock",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Pewter Gym Leader and early anime companion.",
        "description": "Brock is a Rock-type Gym Leader who joins Ash Ketchum as a cook, breeder, and friend.",
        "aliases": []
    },
    {
        "slug": "professor-oak",
        "name": "Professor Oak",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Kanto professor who gives starters.",
        "description": "Professor Oak researches Pokémon in Pallet Town and gives trainers their first partner Pokémon.",
        "aliases": []
    },
    {
        "slug": "gary-oak",
        "name": "Gary Oak",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Ash's rival and Professor Oak's grandson.",
        "description": "Gary Oak begins as Ash Ketchum's rival before maturing into a researcher.",
        "aliases": []
    },
    {
        "slug": "team-rocket",
        "name": "Team Rocket",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Criminal syndicate of Kanto and Johto.",
        "description": "Team Rocket steals rare Pokémon under Giovanni, with Jessie, James, and Meowth endlessly chasing Pikachu.",
        "aliases": []
    },
    {
        "slug": "giovanni",
        "name": "Giovanni",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Boss of Team Rocket and Viridian Gym Leader.",
        "description": "Giovanni leads Team Rocket while publicly running the Viridian City Gym.",
        "aliases": []
    },
    {
        "slug": "jessie",
        "name": "Jessie",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Team Rocket trio member.",
        "description": "Jessie partners with James and Meowth in comic-tragic attempts to capture Ash's Pikachu.",
        "aliases": []
    },
    {
        "slug": "james",
        "name": "James",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Team Rocket trio member.",
        "description": "James works with Jessie and Meowth for Team Rocket across countless schemes.",
        "aliases": []
    },
    {
        "slug": "meowth",
        "name": "Meowth",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Talking Team Rocket Pokémon.",
        "description": "Meowth is a Normal-type Pokémon who learned human speech and schemes with Jessie and James.",
        "aliases": []
    },
    {
        "slug": "charizard",
        "name": "Charizard",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Final evolution of Charmander.",
        "description": "Charizard is a Fire/Flying Pokémon and one of Ash Ketchum's most famous partners.",
        "aliases": []
    },
    {
        "slug": "bulbasaur",
        "name": "Bulbasaur",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Grass starter of Kanto.",
        "description": "Bulbasaur is a Grass/Poison starter often offered by Professor Oak in Kanto.",
        "aliases": []
    },
    {
        "slug": "squirtle",
        "name": "Squirtle",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Water starter of Kanto.",
        "description": "Squirtle is a Water-type starter and later leader of a squad in the anime.",
        "aliases": []
    },
    {
        "slug": "eevee",
        "name": "Eevee",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Evolution Pokémon with many forms.",
        "description": "Eevee can evolve into multiple types, making it one of the franchise's most beloved species.",
        "aliases": []
    },
    {
        "slug": "mewtwo",
        "name": "Mewtwo",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Genetically created Legendary Psychic Pokémon.",
        "description": "Mewtwo is a powerful Psychic Legendary born from human experimentation on Mew.",
        "aliases": []
    },
    {
        "slug": "mew",
        "name": "Mew",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Mythical ancestor Pokémon.",
        "description": "Mew is a Mythical Psychic Pokémon connected to Mewtwo's origin.",
        "aliases": []
    },
    {
        "slug": "legendary-pokemon",
        "name": "Legendary Pokémon",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Rare Pokémon tied to myths and legends.",
        "description": "Legendary Pokémon such as Mewtwo, Lugia, and Rayquaza shape regional myths and major storylines.",
        "aliases": []
    },
    {
        "slug": "gym-leaders",
        "name": "Gym Leaders",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Regional trainers who give Badges.",
        "description": "Gym Leaders test trainers with specialized types; defeating them is required for League entry.",
        "aliases": []
    },
    {
        "slug": "pokemon-league",
        "name": "Pokémon League",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Competitive structure of Badges and Elite Four.",
        "description": "The Pokémon League crowns champions after Gym Badges, Victory Road, and Elite Four challenges.",
        "aliases": []
    },
    {
        "slug": "kanto",
        "name": "Kanto",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Original region of Red, Blue, and Ash's start.",
        "description": "Kanto contains Pallet Town, Pewter, Cerulean, and Indigo Plateau — the first map of Pokémon.",
        "aliases": []
    },
    {
        "slug": "johto",
        "name": "Johto",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Region west of Kanto from Gold and Silver.",
        "description": "Johto introduces new Gyms, legendaries, and a path that reconnects to Kanto.",
        "aliases": []
    },
    {
        "slug": "pallet-town",
        "name": "Pallet Town",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Hometown of Ash and home of Professor Oak.",
        "description": "Pallet Town is where Ash Ketchum begins his journey and where Professor Oak runs his lab.",
        "aliases": []
    },
    {
        "slug": "indigo-plateau",
        "name": "Indigo Plateau",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Seat of the Indigo League.",
        "description": "Indigo Plateau hosts the Elite Four and Champion battles for Kanto trainers.",
        "aliases": []
    },
    {
        "slug": "pokeball",
        "name": "Poké Ball",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Device used to catch and carry Pokémon.",
        "description": "Poké Balls are the essential tools trainers use to catch, store, and deploy Pokémon.",
        "aliases": []
    },
    {
        "slug": "pokedex",
        "name": "Pokédex",
        "type": "object",
        "evidence": "fiction",
        "short_description": "Electronic encyclopedia of Pokémon.",
        "description": "The Pokédex records species data and is given to trainers by regional Professors.",
        "aliases": []
    },
    {
        "slug": "type-system",
        "name": "Type System",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Elemental matchup chart governing battles.",
        "description": "The type system — Fire, Water, Grass, Electric, and more — defines strengths and weaknesses in every battle.",
        "aliases": []
    },
    {
        "slug": "ashs-journey",
        "name": "Ash's Journey",
        "type": "event",
        "evidence": "fiction",
        "short_description": "Ash's multi-region quest to become a Pokémon Master.",
        "description": "Ash's journey spans Kanto through later regions, always with Pikachu at his side.",
        "aliases": []
    },
    {
        "slug": "pokemon-figures",
        "name": "Pokémon figures",
        "type": "topic",
        "short_description": "People and named forces central to Pokémon.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Pokémon."
    },
    {
        "slug": "pokemon-places",
        "name": "Pokémon places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pokémon.",
        "description": "Places, regions, and built sites that give Pokémon its map — where events and figures concentrate."
    },
    {
        "slug": "pokemon-events",
        "name": "Pokémon events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pokémon.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pokémon timeline."
    }
];

const relationships = [
    [
        "satoshi-tajiri",
        "pokemon",
        "created",
        "Satoshi Tajiri created Pokémon.",
        0.99,
        0.98
    ],
    [
        "game-freak",
        "pokemon",
        "produced",
        "Game Freak develops core Pokémon games.",
        0.99,
        0.96
    ],
    [
        "nintendo",
        "pokemon",
        "publishes",
        "Nintendo publishes Pokémon.",
        0.98,
        0.94
    ],
    [
        "the-pokemon-company",
        "pokemon",
        "publishes",
        "The Pokémon Company manages the brand.",
        0.98,
        0.94
    ],
    [
        "pokemon",
        "pokemon-red-blue",
        "contains",
        "Red and Blue launched the series.",
        0.99,
        0.97
    ],
    [
        "pokemon",
        "pokemon-gold-silver",
        "contains",
        "Gold and Silver expanded the world.",
        0.97,
        0.94
    ],
    [
        "pokemon",
        "pokemon-anime",
        "contains",
        "The anime carries the brand worldwide.",
        0.98,
        0.95
    ],
    [
        "pokemon",
        "pokemon-tcg",
        "contains",
        "The TCG is a major pillar of Pokémon.",
        0.96,
        0.92
    ],
    [
        "ash-ketchum",
        "pikachu",
        "connected_to",
        "Pikachu is Ash's partner.",
        0.99,
        0.99
    ],
    [
        "ash-ketchum",
        "pallet-town",
        "located_in",
        "Ash starts in Pallet Town.",
        0.99,
        0.96
    ],
    [
        "ash-ketchum",
        "professor-oak",
        "connected_to",
        "Oak sends Ash on his journey.",
        0.97,
        0.94
    ],
    [
        "ash-ketchum",
        "misty",
        "connected_to",
        "Misty travels with Ash.",
        0.97,
        0.93
    ],
    [
        "ash-ketchum",
        "brock",
        "connected_to",
        "Brock travels with Ash.",
        0.97,
        0.93
    ],
    [
        "ash-ketchum",
        "gary-oak",
        "opposed_by",
        "Gary begins as Ash's rival.",
        0.96,
        0.93
    ],
    [
        "ash-ketchum",
        "ashs-journey",
        "involved",
        "Ash's journey is the anime spine.",
        0.99,
        0.96
    ],
    [
        "pikachu",
        "pokemon",
        "connected_to",
        "Pikachu is the franchise mascot.",
        0.99,
        0.98
    ],
    [
        "team-rocket",
        "giovanni",
        "leads",
        "Giovanni leads Team Rocket.",
        0.99,
        0.96
    ],
    [
        "jessie",
        "team-rocket",
        "member_of",
        "Jessie works for Team Rocket.",
        0.99,
        0.95
    ],
    [
        "james",
        "team-rocket",
        "member_of",
        "James works for Team Rocket.",
        0.99,
        0.95
    ],
    [
        "meowth",
        "team-rocket",
        "member_of",
        "Meowth schemes with Team Rocket.",
        0.99,
        0.95
    ],
    [
        "team-rocket",
        "pikachu",
        "seeks",
        "Team Rocket endlessly pursues Pikachu.",
        0.98,
        0.96
    ],
    [
        "professor-oak",
        "kanto",
        "located_in",
        "Oak's lab is in Kanto.",
        0.98,
        0.93
    ],
    [
        "professor-oak",
        "pokedex",
        "uses",
        "Oak distributes Pokédexes.",
        0.96,
        0.92
    ],
    [
        "bulbasaur",
        "kanto",
        "located_in",
        "Bulbasaur is a Kanto starter.",
        0.95,
        0.9
    ],
    [
        "squirtle",
        "kanto",
        "located_in",
        "Squirtle is a Kanto starter.",
        0.95,
        0.9
    ],
    [
        "charizard",
        "ash-ketchum",
        "connected_to",
        "Charizard is one of Ash's key Pokémon.",
        0.97,
        0.94
    ],
    [
        "mewtwo",
        "mew",
        "connected_to",
        "Mewtwo was created from Mew's genetics.",
        0.98,
        0.96
    ],
    [
        "mewtwo",
        "legendary-pokemon",
        "part_of",
        "Mewtwo is a Legendary Pokémon.",
        0.97,
        0.93
    ],
    [
        "eevee",
        "pokemon",
        "connected_to",
        "Eevee is an iconic multi-evolution species.",
        0.96,
        0.92
    ],
    [
        "gym-leaders",
        "pokemon-league",
        "part_of",
        "Gyms feed into the League structure.",
        0.97,
        0.93
    ],
    [
        "misty",
        "gym-leaders",
        "member_of",
        "Misty is Cerulean's Gym Leader.",
        0.97,
        0.92
    ],
    [
        "brock",
        "gym-leaders",
        "member_of",
        "Brock is Pewter's Gym Leader.",
        0.97,
        0.92
    ],
    [
        "giovanni",
        "gym-leaders",
        "member_of",
        "Giovanni runs Viridian Gym.",
        0.96,
        0.91
    ],
    [
        "kanto",
        "indigo-plateau",
        "contains",
        "Indigo Plateau crowns Kanto champions.",
        0.97,
        0.92
    ],
    [
        "kanto",
        "pallet-town",
        "contains",
        "Pallet Town sits in Kanto.",
        0.98,
        0.93
    ],
    [
        "johto",
        "pokemon-gold-silver",
        "connected_to",
        "Gold and Silver are set in Johto.",
        0.98,
        0.94
    ],
    [
        "pokeball",
        "pokemon",
        "uses",
        "Poké Balls define catching gameplay.",
        0.98,
        0.94
    ],
    [
        "type-system",
        "pokemon",
        "connected_to",
        "Types structure every Pokémon battle.",
        0.98,
        0.95
    ],
    [
        "pokemon",
        "ash-ketchum",
        "connected_to",
        "Ash is the face of the anime era.",
        0.98,
        0.96
    ],
    [
        "pokemon",
        "pokemon-figures",
        "contains",
        "Pokémon figures is a primary trailhead under Pokémon.",
        0.88,
        0.82
    ],
    [
        "pokemon",
        "pokemon-places",
        "contains",
        "Pokémon places is a primary trailhead under Pokémon.",
        0.88,
        0.82
    ],
    [
        "pokemon",
        "pokemon-events",
        "contains",
        "Pokémon events is a primary trailhead under Pokémon.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
