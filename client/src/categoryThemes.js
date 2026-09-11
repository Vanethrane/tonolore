/**
 * Visual identity for home / category browse cards.
 * Kept client-side so cards stay themed even if the API is thin.
 */

export const CATEGORY_THEMES = {
    anime: {
        accent: "#e0456a",
        warm: "#5ec4d8",
        glow: "rgba(224, 69, 106, 0.28)",
        surface: "linear-gradient(155deg, rgba(36, 14, 22, 0.98), rgba(8, 10, 16, 0.98))"
    },
    "video-games": {
        accent: "#3dcf9a",
        warm: "#4aa3ff",
        glow: "rgba(61, 207, 154, 0.28)",
        surface: "linear-gradient(155deg, rgba(10, 28, 24, 0.98), rgba(8, 12, 20, 0.98))"
    },
    books: {
        accent: "#d4a24c",
        warm: "#8f6a3a",
        glow: "rgba(212, 162, 76, 0.26)",
        surface: "linear-gradient(155deg, rgba(28, 22, 14, 0.98), rgba(10, 10, 12, 0.98))"
    },
    movies: {
        accent: "#e8c14a",
        warm: "#c43a3a",
        glow: "rgba(232, 193, 74, 0.26)",
        surface: "linear-gradient(155deg, rgba(24, 16, 12, 0.98), rgba(8, 8, 10, 0.98))"
    },
    television: {
        accent: "#5b9cff",
        warm: "#f0b429",
        glow: "rgba(91, 156, 255, 0.28)",
        surface: "linear-gradient(155deg, rgba(12, 18, 32, 0.98), rgba(8, 10, 16, 0.98))"
    },
    comics: {
        accent: "#f0a020",
        warm: "#e03535",
        glow: "rgba(240, 160, 32, 0.28)",
        surface: "linear-gradient(155deg, rgba(28, 14, 12, 0.98), rgba(10, 10, 14, 0.98))"
    },
    tabletop: {
        accent: "#c45a2c",
        warm: "#c9a227",
        glow: "rgba(196, 90, 44, 0.28)",
        surface: "linear-gradient(155deg, rgba(26, 16, 12, 0.98), rgba(10, 10, 12, 0.98))"
    },
    "card-games": {
        accent: "#5b7cff",
        warm: "#e0a45a",
        glow: "rgba(91, 124, 255, 0.28)",
        surface: "linear-gradient(155deg, rgba(14, 18, 36, 0.98), rgba(8, 10, 16, 0.98))"
    },
    music: {
        accent: "#e0459a",
        warm: "#5b9cff",
        glow: "rgba(224, 69, 154, 0.28)",
        surface: "linear-gradient(155deg, rgba(28, 12, 24, 0.98), rgba(8, 10, 16, 0.98))"
    },
    other: {
        accent: "#3db8a0",
        warm: "#c9a227",
        glow: "rgba(61, 184, 160, 0.24)",
        surface: "linear-gradient(155deg, rgba(16, 20, 24, 0.98), rgba(8, 10, 12, 0.98))"
    }
};

export function categoryTheme(id) {
    return CATEGORY_THEMES[id] || CATEGORY_THEMES.other;
}
