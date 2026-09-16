/**
 * Big Two universe nesting: Marvel and DC own their character IPs.
 * Satellite subject packages stay on disk for legacy data but are NOT peer
 * catalog cards — their characters belong under /marvel and /dc.
 */

/** Subject IDs that should nest under Marvel (not appear as comics peers). */
const MARVEL_SATELLITE_SUBJECT_IDS = [
    "spider-man",
    "x-men",
    "wolverine-comics",
    "deadpool-comics",
    "ms-marvel-comics",
    "marvel-cinematic-universe"
];

/** Subject IDs that should nest under DC (not appear as comics peers). */
const DC_SATELLITE_SUBJECT_IDS = [
    "batman-comics",
    "superman-comics",
    "wonder-woman-comics",
    "green-lantern-comics",
    "aquaman-comics",
    "watchmen-comics",
    "sandman-comics",
    "v-for-vendetta",
    "batman-the-animated-series"
];

const MARVEL_SATELLITE_SET = new Set(MARVEL_SATELLITE_SUBJECT_IDS);
const DC_SATELLITE_SET = new Set(DC_SATELLITE_SUBJECT_IDS);
const ALL_SATELLITE_SET = new Set([
    ...MARVEL_SATELLITE_SUBJECT_IDS,
    ...DC_SATELLITE_SUBJECT_IDS
]);

function isBigTwoSatellite(subjectId) {
    return ALL_SATELLITE_SET.has(subjectId);
}

function parentUniverseForSatellite(subjectId) {
    if (MARVEL_SATELLITE_SET.has(subjectId)) {
        return "marvel";
    }
    if (DC_SATELLITE_SET.has(subjectId)) {
        return "dc";
    }
    return null;
}

/**
 * Categories for catalog/home: satellites are absorbed into the parent
 * universe and should not appear as their own shelf cards.
 */
function categoriesForCatalog(subjectId, categories) {
    if (isBigTwoSatellite(subjectId)) {
        return [];
    }
    return Array.isArray(categories) ? categories : [];
}

module.exports = {
    MARVEL_SATELLITE_SUBJECT_IDS,
    DC_SATELLITE_SUBJECT_IDS,
    isBigTwoSatellite,
    parentUniverseForSatellite,
    categoriesForCatalog
};
