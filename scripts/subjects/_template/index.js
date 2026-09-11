/**
 * Template for a new Ton-o-Lore subject.
 *
 * 1. Copy this folder to scripts/subjects/<your-id>/
 * 2. Fill entities + relationships in data.js (or inline below)
 * 3. Add CSS `.theme-<your-id>` + register in registry.js
 *    (Also add categories in scripts/subjects/categories.js, or set meta.categories)
 * 4. Add a fair-use logo in scripts/subjects/logos.js
 * 5. Add Wikipedia + Fandom blocks in scripts/lib/subjectExpandConfigs.js
 * 6. Expand (tandem): node scripts/expandSubject.js <your-id>
 *    (Rich multi-paragraph Fandom/Wikipedia intros are fetched by default.)
 * 7. Seed: node scripts/seedSubject.js <your-id>
 *    (Seed re-checks thin/stub blurbs and fills them before Postgres insert.)
 * 8. Pages: node scripts/generate/pages/generatePages.js <your-id>
 *
 * Descriptions that name other seeded entities automatically gain
 * connected_to edges — the graph expands without repeating entities.
 *
 * REQUIRED: every subject needs a distinct CSS theme (`.theme-<id>`)
 * and copyright text. See .cursor/rules/subject-themes.mdc.
 *
 * Sources: use Wikipedia/Wikidata AND Fandom together via expandSubject.js.
 */

const path = require("path");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");

module.exports = mergeSubjectPackage({
    subjectDir: __dirname,
    meta: {
        id: "example-subject",
        name: "Example Subject",
        rootSlug: "example-subject",
        theme: "example-subject",
        copyright: {
            title: "Example Subject is not owned by Ton-o-Lore.",
            body: "Replace this with accurate rights-holder language. Note fair-use identification thumbs when used."
        }
    },
    rawEntities: [
        {
            slug: "example-subject",
            name: "Example Subject",
            type: "topic",
            short_description: "Root page for this subject.",
            description:
                "Describe the subject and name related people, places, and ideas that also appear as entities below."
        }
        // Add more entities. Optional: aliases, parentSlug
    ],
    rawRelationships: [
        // ["from-slug", "to-slug", "connected_to", "Why they connect.", 0.9, 0.9]
    ],
    aliases: {},
    parents: {}
});
