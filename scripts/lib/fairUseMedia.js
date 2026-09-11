/**
 * Server/scripts helper: prefer free media, validate non-free NFCC fields,
 * and refuse full-resolution storage paths for copyrighted stills.
 */

const NON_FREE_MAX_WIDTH = 400;
const NON_FREE_MAX_PIXELS = 100_000;

const FREE_LICENSES = new Set([
    "public_domain",
    "cc0",
    "cc_by",
    "cc_by_sa"
]);

function isFreeLicense(license) {
    return FREE_LICENSES.has(String(license || "").toLowerCase());
}

/**
 * @param {object[]} candidates
 */
function preferFreeMedia(candidates = []) {
    const list = Array.isArray(candidates) ? candidates.filter(Boolean) : [];
    return (
        list.find((item) => isFreeLicense(item.license) || item.isFree) ||
        list[0] ||
        null
    );
}

/**
 * @param {object} asset
 * @returns {{ ok: boolean, errors: string[] }}
 */
function validateNonFreeAsset(asset) {
    const errors = [];
    if (!asset?.url) errors.push("url required");
    if (!asset?.alt) errors.push("alt required");

    if (!isFreeLicense(asset?.license)) {
        const r = asset?.fairUseRationale;
        if (!r) {
            errors.push("fairUseRationale required for non-free media");
        } else {
            for (const key of [
                "copyrightHolder",
                "sourceAttribution",
                "purposeOfUse",
                "nonReplaceabilityStatement",
                "minimalityStatement",
                "commentarySectionId",
                "commentaryExcerpt"
            ]) {
                if (!r[key]) errors.push(`fairUseRationale.${key}`);
            }
            if (String(r.commentaryExcerpt || "").trim().length < 40) {
                errors.push("commentaryExcerpt too short for Factor 1 tether");
            }
        }
        const w = Number(asset.width) || 0;
        const h = Number(asset.height) || 0;
        if (w > NON_FREE_MAX_WIDTH || h > NON_FREE_MAX_WIDTH) {
            errors.push(`dimensions exceed ${NON_FREE_MAX_WIDTH}px`);
        }
        if (w && h && w * h > NON_FREE_MAX_PIXELS) {
            errors.push("pixel count exceeds ~0.1MP");
        }
        if (asset.originalUrl && asset.url === asset.originalUrl) {
            errors.push("non-free src must not equal full-resolution originalUrl");
        }
    }

    return { ok: errors.length === 0, errors };
}

module.exports = {
    NON_FREE_MAX_WIDTH,
    NON_FREE_MAX_PIXELS,
    isFreeLicense,
    preferFreeMedia,
    validateNonFreeAsset
};
