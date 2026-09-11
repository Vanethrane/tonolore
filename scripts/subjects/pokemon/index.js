const { entities: rawEntities, relationships: rawRelationships } = require("./data");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");

module.exports = mergeSubjectPackage({
    subjectDir: __dirname,
    meta: {
        id: "pokemon",
        name: "Pokémon",
        rootSlug: "pokemon",
        theme: "pokemon",
        copyright: {
            title: "Pokémon is not owned by Ton-o-Lore.",
            body:
                "Pokémon and all related names, characters, and imagery are trademarks of Nintendo, Game Freak, Creatures, and/or The Pokémon Company. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        pokemon: ["Pokemon", "Pokémon", "Pocket Monsters"],
        "ash-ketchum": ["Ash", "Satoshi"],
        pikachu: ["Pikachu"],
        "team-rocket": ["Team Rocket"],
        "professor-oak": ["Oak", "Professor Oak"],
        mewtwo: ["Mewtwo"],
        pokeball: ["Poké Ball", "Pokeball"],
        pokedex: ["Pokédex", "Pokedex"]
    },
    parents: {
        "ash-ketchum": "pallet-town",
        "professor-oak": "pallet-town",
        "gary-oak": "pallet-town",
        pikachu: "ash-ketchum",
        jessie: "team-rocket",
        james: "team-rocket",
        meowth: "team-rocket",
        giovanni: "team-rocket",
        misty: "gym-leaders",
        brock: "gym-leaders"
    }
});
