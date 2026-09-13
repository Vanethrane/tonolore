/**
 * Expand configs for category depth-fill subjects.
 * Uses English Wikipedia MediaWiki API (same client path as Fandom).
 */

const { allDepthFillSubjects } = require("../subjects/categoryDepthFillers");

function hintsFromName(name) {
    const words = String(name || "")
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, " ")
        .split(/\s+/)
        .filter((w) => w.length > 2 && !/^(the|and|for|of|in)$/.test(w));
    return [...new Set([name.toLowerCase(), ...words])].slice(0, 8);
}

function buildDepthExpandConfigs() {
    const configs = {};
    for (const subject of allDepthFillSubjects()) {
        const name = subject.name;
        configs[subject.id] = {
            rootSlug: subject.id,
            relevanceHints: hintsFromName(name),
            wikipediaCategories: [
                `Category:${name}`,
                `Category:${name} people`,
                `Category:${name} characters`
            ],
            fandom: {
                host: "en.wikipedia.org",
                wikiUrl: `https://en.wikipedia.org/wiki/${encodeURIComponent(
                    name.replace(/ /g, "_")
                )}`,
                rightsCredit: `${name} article text and identification images via Wikipedia; rights remain with original rights holders.`,
                categories: [
                    {
                        title: name,
                        type: "topic",
                        parent: subject.id,
                        includeSubcats: true,
                        maxDepth: 2,
                        maxPages: 50000
                    },
                    {
                        title: `${name} people`,
                        type: "person",
                        parent: `${subject.id}-figures`,
                        includeSubcats: true,
                        maxDepth: 1,
                        maxPages: 15000
                    },
                    {
                        title: `${name} characters`,
                        type: "person",
                        parent: `${subject.id}-figures`,
                        includeSubcats: true,
                        maxDepth: 1,
                        maxPages: 15000
                    }
                ]
            }
        };
    }
    return configs;
}

const DEPTH_EXPAND_CONFIGS = buildDepthExpandConfigs();

module.exports = {
    DEPTH_EXPAND_CONFIGS,
    buildDepthExpandConfigs
};
