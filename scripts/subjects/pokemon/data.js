/*
 * Pokémon subject data.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "fiction", extras = {}) {
    entities.push({
        slug, name, type, evidence, short_description, description,
        aliases: extras.aliases || [],
        parentSlug: extras.parentSlug || undefined
    });
}

function rel(from, to, relationship, title, strength = 0.95, discoveryScore = 0.9) {
    relationships.push([from, to, relationship, title, strength, discoveryScore]);
}

entity("pokemon", "Pokémon", "work",
    "Global franchise of creatures, trainers, and gyms.",
    "Pokémon is a multimedia franchise from Game Freak, Nintendo, and Creatures in which trainers catch and battle creatures called Pokémon across regions like Kanto, Johto, and beyond.");

entity("satoshi-tajiri", "Satoshi Tajiri", "person",
    "Creator of Pokémon.",
    "Satoshi Tajiri conceived Pokémon, inspiring the Game Freak teams that built Red, Green, and the worlds that followed.");

entity("game-freak", "Game Freak", "organization",
    "Primary developer of core Pokémon games.",
    "Game Freak develops the mainline Pokémon role-playing games in partnership with Nintendo and The Pokémon Company.");

entity("nintendo", "Nintendo", "organization",
    "Publisher and hardware partner for Pokémon.",
    "Nintendo publishes Pokémon games and helped turn the franchise into a worldwide phenomenon.");

entity("the-pokemon-company", "The Pokémon Company", "organization",
    "Company managing the Pokémon brand.",
    "The Pokémon Company oversees Pokémon branding across games, anime, cards, and merchandise.");

entity("pokemon-red-blue", "Pokémon Red and Blue", "work",
    "Original Kanto games that launched the series.",
    "Pokémon Red and Blue introduce Kanto, the original starter Pokémon, Team Rocket, and the Indigo League.");

entity("pokemon-gold-silver", "Pokémon Gold and Silver", "work",
    "Johto generation expanding the original map.",
    "Gold and Silver add Johto, new Pokémon, and connections back to Kanto.");

entity("pokemon-anime", "Pokémon Anime", "work",
    "Long-running animated series following trainers.",
    "The Pokémon anime follows Ash Ketchum, Pikachu, and later new heroes across regions in parallel with the games.");

entity("pokemon-tcg", "Pokémon Trading Card Game", "work",
    "Collectible card game based on Pokémon battles.",
    "The Pokémon TCG lets players build decks around Pokémon, Trainers, and Energy cards.");

entity("ash-ketchum", "Ash Ketchum", "person",
    "Anime protagonist aiming to be a Pokémon Master.",
    "Ash Ketchum begins in Pallet Town with Pikachu and travels regions catching Pokémon and challenging Gym Leaders.");

entity("pikachu", "Pikachu", "object",
    "Electric Mouse Pokémon and franchise mascot.",
    "Pikachu is an Electric-type Pokémon and Ash Ketchum's partner, becoming the face of the entire franchise.");

entity("misty", "Misty", "person",
    "Cerulean Gym Leader and early anime companion.",
    "Misty specializes in Water-type Pokémon and travels with Ash Ketchum through Kanto and beyond.");

entity("brock", "Brock", "person",
    "Pewter Gym Leader and early anime companion.",
    "Brock is a Rock-type Gym Leader who joins Ash Ketchum as a cook, breeder, and friend.");

entity("professor-oak", "Professor Oak", "person",
    "Kanto professor who gives starters.",
    "Professor Oak researches Pokémon in Pallet Town and gives trainers their first partner Pokémon.");

entity("gary-oak", "Gary Oak", "person",
    "Ash's rival and Professor Oak's grandson.",
    "Gary Oak begins as Ash Ketchum's rival before maturing into a researcher.");

entity("team-rocket", "Team Rocket", "organization",
    "Criminal syndicate of Kanto and Johto.",
    "Team Rocket steals rare Pokémon under Giovanni, with Jessie, James, and Meowth endlessly chasing Pikachu.");

entity("giovanni", "Giovanni", "person",
    "Boss of Team Rocket and Viridian Gym Leader.",
    "Giovanni leads Team Rocket while publicly running the Viridian City Gym.");

entity("jessie", "Jessie", "person",
    "Team Rocket trio member.",
    "Jessie partners with James and Meowth in comic-tragic attempts to capture Ash's Pikachu.");

entity("james", "James", "person",
    "Team Rocket trio member.",
    "James works with Jessie and Meowth for Team Rocket across countless schemes.");

entity("meowth", "Meowth", "object",
    "Talking Team Rocket Pokémon.",
    "Meowth is a Normal-type Pokémon who learned human speech and schemes with Jessie and James.");

entity("charizard", "Charizard", "object",
    "Final evolution of Charmander.",
    "Charizard is a Fire/Flying Pokémon and one of Ash Ketchum's most famous partners.");

entity("bulbasaur", "Bulbasaur", "object",
    "Grass starter of Kanto.",
    "Bulbasaur is a Grass/Poison starter often offered by Professor Oak in Kanto.");

entity("squirtle", "Squirtle", "object",
    "Water starter of Kanto.",
    "Squirtle is a Water-type starter and later leader of a squad in the anime.");

entity("eevee", "Eevee", "object",
    "Evolution Pokémon with many forms.",
    "Eevee can evolve into multiple types, making it one of the franchise's most beloved species.");

entity("mewtwo", "Mewtwo", "object",
    "Genetically created Legendary Psychic Pokémon.",
    "Mewtwo is a powerful Psychic Legendary born from human experimentation on Mew.");

entity("mew", "Mew", "object",
    "Mythical ancestor Pokémon.",
    "Mew is a Mythical Psychic Pokémon connected to Mewtwo's origin.");

entity("legendary-pokemon", "Legendary Pokémon", "concept",
    "Rare Pokémon tied to myths and legends.",
    "Legendary Pokémon such as Mewtwo, Lugia, and Rayquaza shape regional myths and major storylines.");

entity("gym-leaders", "Gym Leaders", "organization",
    "Regional trainers who give Badges.",
    "Gym Leaders test trainers with specialized types; defeating them is required for League entry.");

entity("pokemon-league", "Pokémon League", "organization",
    "Competitive structure of Badges and Elite Four.",
    "The Pokémon League crowns champions after Gym Badges, Victory Road, and Elite Four challenges.");

entity("kanto", "Kanto", "place",
    "Original region of Red, Blue, and Ash's start.",
    "Kanto contains Pallet Town, Pewter, Cerulean, and Indigo Plateau — the first map of Pokémon.");

entity("johto", "Johto", "place",
    "Region west of Kanto from Gold and Silver.",
    "Johto introduces new Gyms, legendaries, and a path that reconnects to Kanto.");

entity("pallet-town", "Pallet Town", "place",
    "Hometown of Ash and home of Professor Oak.",
    "Pallet Town is where Ash Ketchum begins his journey and where Professor Oak runs his lab.");

entity("indigo-plateau", "Indigo Plateau", "place",
    "Seat of the Indigo League.",
    "Indigo Plateau hosts the Elite Four and Champion battles for Kanto trainers.");

entity("pokeball", "Poké Ball", "object",
    "Device used to catch and carry Pokémon.",
    "Poké Balls are the essential tools trainers use to catch, store, and deploy Pokémon.");

entity("pokedex", "Pokédex", "object",
    "Electronic encyclopedia of Pokémon.",
    "The Pokédex records species data and is given to trainers by regional Professors.");

entity("type-system", "Type System", "concept",
    "Elemental matchup chart governing battles.",
    "The type system — Fire, Water, Grass, Electric, and more — defines strengths and weaknesses in every battle.");

entity("ashs-journey", "Ash's Journey", "event",
    "Ash's multi-region quest to become a Pokémon Master.",
    "Ash's journey spans Kanto through later regions, always with Pikachu at his side.");

rel("satoshi-tajiri", "pokemon", "created", "Satoshi Tajiri created Pokémon.", 0.99, 0.98);
rel("game-freak", "pokemon", "produced", "Game Freak develops core Pokémon games.", 0.99, 0.96);
rel("nintendo", "pokemon", "publishes", "Nintendo publishes Pokémon.", 0.98, 0.94);
rel("the-pokemon-company", "pokemon", "publishes", "The Pokémon Company manages the brand.", 0.98, 0.94);
rel("pokemon", "pokemon-red-blue", "contains", "Red and Blue launched the series.", 0.99, 0.97);
rel("pokemon", "pokemon-gold-silver", "contains", "Gold and Silver expanded the world.", 0.97, 0.94);
rel("pokemon", "pokemon-anime", "contains", "The anime carries the brand worldwide.", 0.98, 0.95);
rel("pokemon", "pokemon-tcg", "contains", "The TCG is a major pillar of Pokémon.", 0.96, 0.92);

rel("ash-ketchum", "pikachu", "connected_to", "Pikachu is Ash's partner.", 0.99, 0.99);
rel("ash-ketchum", "pallet-town", "located_in", "Ash starts in Pallet Town.", 0.99, 0.96);
rel("ash-ketchum", "professor-oak", "connected_to", "Oak sends Ash on his journey.", 0.97, 0.94);
rel("ash-ketchum", "misty", "connected_to", "Misty travels with Ash.", 0.97, 0.93);
rel("ash-ketchum", "brock", "connected_to", "Brock travels with Ash.", 0.97, 0.93);
rel("ash-ketchum", "gary-oak", "opposed_by", "Gary begins as Ash's rival.", 0.96, 0.93);
rel("ash-ketchum", "ashs-journey", "involved", "Ash's journey is the anime spine.", 0.99, 0.96);
rel("pikachu", "pokemon", "connected_to", "Pikachu is the franchise mascot.", 0.99, 0.98);

rel("team-rocket", "giovanni", "leads", "Giovanni leads Team Rocket.", 0.99, 0.96);
rel("jessie", "team-rocket", "member_of", "Jessie works for Team Rocket.", 0.99, 0.95);
rel("james", "team-rocket", "member_of", "James works for Team Rocket.", 0.99, 0.95);
rel("meowth", "team-rocket", "member_of", "Meowth schemes with Team Rocket.", 0.99, 0.95);
rel("team-rocket", "pikachu", "seeks", "Team Rocket endlessly pursues Pikachu.", 0.98, 0.96);

rel("professor-oak", "kanto", "located_in", "Oak's lab is in Kanto.", 0.98, 0.93);
rel("professor-oak", "pokedex", "uses", "Oak distributes Pokédexes.", 0.96, 0.92);
rel("bulbasaur", "kanto", "located_in", "Bulbasaur is a Kanto starter.", 0.95, 0.9);
rel("squirtle", "kanto", "located_in", "Squirtle is a Kanto starter.", 0.95, 0.9);
rel("charizard", "ash-ketchum", "connected_to", "Charizard is one of Ash's key Pokémon.", 0.97, 0.94);
rel("mewtwo", "mew", "connected_to", "Mewtwo was created from Mew's genetics.", 0.98, 0.96);
rel("mewtwo", "legendary-pokemon", "part_of", "Mewtwo is a Legendary Pokémon.", 0.97, 0.93);
rel("eevee", "pokemon", "connected_to", "Eevee is an iconic multi-evolution species.", 0.96, 0.92);

rel("gym-leaders", "pokemon-league", "part_of", "Gyms feed into the League structure.", 0.97, 0.93);
rel("misty", "gym-leaders", "member_of", "Misty is Cerulean's Gym Leader.", 0.97, 0.92);
rel("brock", "gym-leaders", "member_of", "Brock is Pewter's Gym Leader.", 0.97, 0.92);
rel("giovanni", "gym-leaders", "member_of", "Giovanni runs Viridian Gym.", 0.96, 0.91);
rel("kanto", "indigo-plateau", "contains", "Indigo Plateau crowns Kanto champions.", 0.97, 0.92);
rel("kanto", "pallet-town", "contains", "Pallet Town sits in Kanto.", 0.98, 0.93);
rel("johto", "pokemon-gold-silver", "connected_to", "Gold and Silver are set in Johto.", 0.98, 0.94);
rel("pokeball", "pokemon", "uses", "Poké Balls define catching gameplay.", 0.98, 0.94);
rel("type-system", "pokemon", "connected_to", "Types structure every Pokémon battle.", 0.98, 0.95);
rel("pokemon", "ash-ketchum", "connected_to", "Ash is the face of the anime era.", 0.98, 0.96);

module.exports = { entities, relationships };
