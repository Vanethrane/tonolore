/**
 * Card games & board games catalogs for Ton-o-Lore.
 * Cross-links existing franchises (Pokémon, One Piece, etc.) into card-games;
 * board games expand the tabletop shelf.
 */

const CARD_GAME_SUBJECTS = [
    {
        id: "pokemon",
        name: "Pokémon",
        existing: true,
        blurb: "The Pokémon TCG — decks, sets, and competitive formats mapped beside the game and anime universes."
    },
    {
        id: "one-piece",
        name: "One Piece",
        existing: true,
        blurb: "The One Piece Card Game — leaders, DON!!, and set lore tied to the Grand Line saga."
    },
    {
        id: "magic-the-gathering",
        name: "Magic: The Gathering",
        existing: true,
        blurb: "The original trading-card battleground — planes, sets, and mechanics as living canon."
    },
    {
        id: "dragon-ball",
        name: "Dragon Ball",
        existing: true,
        blurb: "Dragon Ball card games and heroes formats that remix the anime's power-scaling lore."
    },
    {
        id: "final-fantasy",
        name: "Final Fantasy",
        existing: true,
        blurb: "The Final Fantasy TCG — Crystal Chronicle characters and jobs across numbered worlds."
    },
    {
        id: "yu-gi-oh",
        name: "Yu-Gi-Oh!",
        existing: false,
        rights: "Konami / Studio Dice / respective rights holders",
        accent: "#4a90d8",
        blurb: "Duel Monsters and the competitive TCG — archetypes, banlists, and anime-shadowed card lore."
    },
    {
        id: "digimon-card-game",
        name: "Digimon Card Game",
        existing: false,
        rights: "Bandai / Toei / respective rights holders",
        accent: "#e86020",
        blurb: "Digimon's Bandai TCG — digivolution lines, colors, and Digital World mythology on cards."
    },
    {
        id: "disney-lorcana",
        name: "Disney Lorcana",
        existing: false,
        rights: "Ravensburger / Disney / respective rights holders",
        accent: "#6a4cff",
        blurb: "Illumineers, inks, and Disney storybook lore remixed as a collectible card game."
    },
    {
        id: "flesh-and-blood",
        name: "Flesh and Blood",
        existing: false,
        rights: "Legend Story Studios / respective rights holders",
        accent: "#c43030",
        blurb: "Hero-class constructed play — Rathe, weapons, and living-card-game style storytelling."
    }
];

const BOARD_GAME_SUBJECTS = [
    {
        id: "catan",
        name: "Catan",
        rights: "Catan GmbH / respective rights holders",
        accent: "#d4a024",
        blurb: "Settlers of Catan — hexes, resources, and the modern gateway board-game phenomenon."
    },
    {
        id: "pandemic",
        name: "Pandemic",
        rights: "Z-Man Games / Asmodee / respective rights holders",
        accent: "#2a8a68",
        blurb: "Co-op disease control on a world map — roles, outbreaks, and scenario expansions."
    },
    {
        id: "gloomhaven",
        name: "Gloomhaven",
        rights: "Cephalofair Games / respective rights holders",
        accent: "#6a5840",
        blurb: "Legacy dungeon campaign board game — classes, scenarios, and a sprawling tactical lore map."
    },
    {
        id: "wingspan",
        name: "Wingspan",
        rights: "Stonemaier Games / respective rights holders",
        accent: "#3a9a68",
        blurb: "Engine-building bird sanctuary — habitats, food chains, and naturalist card lore."
    },
    {
        id: "ticket-to-ride",
        name: "Ticket to Ride",
        rights: "Days of Wonder / Asmodee / respective rights holders",
        accent: "#c84838",
        blurb: "Train-route claiming across map editions — tickets, locomotives, and destination lore."
    },
    {
        id: "chess",
        name: "Chess",
        rights: "Public-domain rules; branded editions © respective rights holders",
        accent: "#c8c8d0",
        blurb: "The classic abstract board game — openings, endgames, and centuries of competitive lore."
    }
];

/** Tabletop shelves so RPGs, wargames, and board games read as one category. */
const TABLETOP_SHELVES = [
    {
        id: "rpg",
        label: "Roleplaying games",
        blurb: "Character-driven tabletop RPGs and their settings.",
        subjectIds: [
            "dungeons-and-dragons",
            "pathfinder",
            "vampire-the-masquerade",
            "call-of-cthulhu"
        ]
    },
    {
        id: "wargames",
        label: "Wargames",
        blurb: "Miniatures, factions, and campaign battlefields.",
        subjectIds: [
            "warhammer-40k",
            "warhammer-fantasy",
            "battletech"
        ]
    },
    {
        id: "board-games",
        label: "Board games",
        blurb: "Boxed strategy and co-op games built for the table.",
        subjectIds: BOARD_GAME_SUBJECTS.map((s) => s.id)
    },
    {
        id: "living-card-at-table",
        label: "Cards at the table",
        blurb: "Collectible and living card games often played beside other tabletop hobbies.",
        subjectIds: ["magic-the-gathering"]
    }
];

function newCardGameSubjects() {
    return CARD_GAME_SUBJECTS.filter((s) => !s.existing);
}

function boardGameSubjectIds() {
    return BOARD_GAME_SUBJECTS.map((s) => s.id);
}

function newCardGameSubjectIds() {
    return newCardGameSubjects().map((s) => s.id);
}

module.exports = {
    CARD_GAME_SUBJECTS,
    BOARD_GAME_SUBJECTS,
    TABLETOP_SHELVES,
    newCardGameSubjects,
    newCardGameSubjectIds,
    boardGameSubjectIds
};
