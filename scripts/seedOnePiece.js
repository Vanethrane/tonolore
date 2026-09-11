/**
 * Seed One Piece into the Ton-o-Lore knowledge graph.
 *
 * Safe to re-run. Deduplicates entities by slug, rebuilds relationships
 * for this subject, expands mention-based connections, and fills rich
 * multi-paragraph descriptions before insert (same as seedSubject.js).
 */

const { seedSubject } = require("./lib/seedRunner");
const subject = require("./subjects/one-piece");

seedSubject(subject).catch((error) => {
    console.error("");
    console.error("ONE PIECE SEED FAILED");
    console.error(error);
    process.exit(1);
});
