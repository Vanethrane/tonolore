/**
 * Fair Use / NFCC media constraints for Ton-o-Lore educational IP articles.
 * Aligns with 17 U.S.C. § 107 factors and Wikimedia-style non-free criteria:
 * identification + commentary only, minimal resolution, attribution, free-media first.
 */

/** Absolute hard caps for any non-free (copyrighted) still image. */
export const NON_FREE_IMAGE_LIMITS = Object.freeze({
    maxWidthPx: 400,
    maxHeightPx: 400,
    /** ~0.1 megapixels */
    maxPixels: 100_000,
    /** Disallow offering original / full-resolution download URLs as the render src */
    allowFullResolutionSrc: false,
    allowDecorativeUse: false
});

export const MEDIA_LICENSE = Object.freeze({
    PUBLIC_DOMAIN: "public_domain",
    CC0: "cc0",
    CC_BY: "cc_by",
    CC_BY_SA: "cc_by_sa",
    FAIR_USE: "fair_use",
    UNKNOWN_NON_FREE: "unknown_non_free"
});

export const MEDIA_PURPOSE = Object.freeze({
    PRIMARY_IDENTIFICATION:
        "Primary visual identification in an educational encyclopedia article",
    DESIGN_COMMENTARY:
        "Critical commentary on character design, costume, or visual evolution",
    CULTURAL_IMPACT:
        "Illustration of cultural impact discussed in the accompanying section",
    CREATOR_PORTRAIT:
        "Public likeness / portrait of a creator or performer (prefer free media)"
});

/**
 * @typedef {typeof MEDIA_LICENSE[keyof typeof MEDIA_LICENSE]} MediaLicense
 * @typedef {typeof MEDIA_PURPOSE[keyof typeof MEDIA_PURPOSE]} MediaPurpose
 */

/**
 * @typedef {Object} FairUseRationale
 * @property {string} copyrightHolder - Original rights holder / studio / author
 * @property {string} sourceAttribution - Human-readable credit line
 * @property {string} [sourceUrl] - Link to source page (not a full-res asset dump)
 * @property {MediaPurpose|string} purposeOfUse
 * @property {string} nonReplaceabilityStatement
 * @property {string} minimalityStatement
 * @property {string} commentarySectionId - DOM/section id the image must accompany
 * @property {string} commentaryExcerpt - Short quote/paraphrase proving contextual use
 */

/**
 * @typedef {Object} MediaAsset
 * @property {string} id
 * @property {string} url - Render URL (must already be ≤ non-free limits when non-free)
 * @property {string} [originalUrl] - Catalog/reference only; NEVER used as <img src> when non-free
 * @property {string} alt
 * @property {MediaLicense|string} license
 * @property {number} [width]
 * @property {number} [height]
 * @property {FairUseRationale} [fairUseRationale] - REQUIRED when license is fair_use / unknown_non_free
 * @property {boolean} [isFree] - Cached preference flag
 */

/**
 * @typedef {Object} ArticleSection
 * @property {string} id
 * @property {string} heading
 * @property {string} html - Encyclopedic body; must reference attached media when non-free
 * @property {string[]} [mediaIds] - Media that may only render inside this section
 */

/**
 * @typedef {Object} IpArticle
 * @property {string} slug
 * @property {string} title
 * @property {string} [subtitle]
 * @property {string} entityType
 * @property {string[]} [aliases]
 * @property {string} [franchise]
 * @property {MediaAsset|null} [infoboxImage]
 * @property {MediaAsset[]} gallery
 * @property {ArticleSection[]} sections
 * @property {Object} [copyrightNotice]
 */

export const DEFAULT_NON_REPLACEABILITY =
    "No free public domain alternative exists for this copyrighted character likeness; a low-resolution still is used solely for identification and critical commentary.";

export const DEFAULT_MINIMALITY =
    "Low-resolution render (≤400px / ~0.1MP) used strictly for commentary and identification — not for decorative or substitute-market use.";

/**
 * Free / open licenses that may illustrate without a fairUseRationale object.
 * @param {string} license
 */
export function isFreeLicense(license) {
    return (
        license === MEDIA_LICENSE.PUBLIC_DOMAIN ||
        license === MEDIA_LICENSE.CC0 ||
        license === MEDIA_LICENSE.CC_BY ||
        license === MEDIA_LICENSE.CC_BY_SA
    );
}

/**
 * @param {MediaAsset} asset
 * @returns {{ ok: true } | { ok: false, errors: string[] }}
 */
export function validateMediaAsset(asset) {
    const errors = [];

    if (!asset || typeof asset !== "object") {
        return { ok: false, errors: ["Media asset is required"] };
    }
    if (!asset.id) errors.push("id is required");
    if (!asset.url) errors.push("url is required");
    if (!asset.alt) errors.push("alt text is required");
    if (!asset.license) errors.push("license is required");

    const free = isFreeLicense(asset.license) || asset.isFree === true;
    const w = Number(asset.width) || 0;
    const h = Number(asset.height) || 0;
    const pixels = w && h ? w * h : 0;

    if (!free) {
        if (!NON_FREE_IMAGE_LIMITS.allowDecorativeUse && !asset.fairUseRationale) {
            errors.push(
                "Non-free image requires fairUseRationale (no decorative use)"
            );
        }
        if (asset.fairUseRationale) {
            const r = asset.fairUseRationale;
            if (!r.copyrightHolder) errors.push("fairUseRationale.copyrightHolder");
            if (!r.sourceAttribution) errors.push("fairUseRationale.sourceAttribution");
            if (!r.purposeOfUse) errors.push("fairUseRationale.purposeOfUse");
            if (!r.nonReplaceabilityStatement) {
                errors.push("fairUseRationale.nonReplaceabilityStatement");
            }
            if (!r.minimalityStatement) {
                errors.push("fairUseRationale.minimalityStatement");
            }
            if (!r.commentarySectionId) {
                errors.push(
                    "fairUseRationale.commentarySectionId — image must bind to a text section"
                );
            }
            if (!r.commentaryExcerpt || String(r.commentaryExcerpt).trim().length < 40) {
                errors.push(
                    "fairUseRationale.commentaryExcerpt must quote/paraphrase the critical commentary (≥40 chars)"
                );
            }
        }
        if (w > NON_FREE_IMAGE_LIMITS.maxWidthPx) {
            errors.push(
                `width ${w}px exceeds non-free max ${NON_FREE_IMAGE_LIMITS.maxWidthPx}px`
            );
        }
        if (h > NON_FREE_IMAGE_LIMITS.maxHeightPx) {
            errors.push(
                `height ${h}px exceeds non-free max ${NON_FREE_IMAGE_LIMITS.maxHeightPx}px`
            );
        }
        if (pixels > NON_FREE_IMAGE_LIMITS.maxPixels) {
            errors.push(
                `pixel count ${pixels} exceeds ~0.1MP cap (${NON_FREE_IMAGE_LIMITS.maxPixels})`
            );
        }
        if (
            !NON_FREE_IMAGE_LIMITS.allowFullResolutionSrc &&
            asset.originalUrl &&
            asset.url === asset.originalUrl
        ) {
            errors.push(
                "Non-free render src must not be the full-resolution originalUrl"
            );
        }
    }

    return errors.length ? { ok: false, errors } : { ok: true };
}

/**
 * Prefer free/open media candidates before any non-free fallback.
 * @param {MediaAsset[]} candidates
 * @returns {MediaAsset|null}
 */
export function preferFreeMedia(candidates = []) {
    const valid = [];
    for (const asset of candidates) {
        const result = validateMediaAsset(asset);
        if (result.ok) valid.push(asset);
    }
    const free = valid.find((asset) => isFreeLicense(asset.license) || asset.isFree);
    return free || valid[0] || null;
}

/**
 * Ensure a section that hosts non-free media actually discusses it (Factor 1).
 * @param {ArticleSection} section
 * @param {MediaAsset} asset
 */
export function sectionReferencesMedia(section, asset) {
    if (!section || !asset) return false;
    if (!(section.mediaIds || []).includes(asset.id)) return false;
    const body = `${section.heading} ${section.html}`.toLowerCase();
    const altBits = String(asset.alt || "")
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length > 3)
        .slice(0, 4);
    const excerpt = String(asset.fairUseRationale?.commentaryExcerpt || "").toLowerCase();
    if (excerpt && body.includes(excerpt.slice(0, 32))) return true;
    return altBits.some((bit) => body.includes(bit));
}
