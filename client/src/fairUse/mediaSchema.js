/**
 * Listing image limits: show the best available art, but keep browser
 * renders small enough that they are poor substitutes for printable / merch use.
 */

/** Absolute hard caps for listing / non-free stills served to the browser. */
export const NON_FREE_IMAGE_LIMITS = Object.freeze({
    maxWidthPx: 220,
    maxHeightPx: 220,
    /** ~0.05 megapixels — readable on cards, useless for shirts/prints */
    maxPixels: 50_000,
    allowFullResolutionSrc: false,
    allowDecorativeUse: true
});

/** Preferred CDN thumb edge when rewriting Fandom / Wikimedia URLs. */
export const LISTING_THUMB_EDGE_PX = 220;

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
        "Primary visual for an educational encyclopedia listing",
    DESIGN_COMMENTARY:
        "Critical commentary on character design, costume, or visual evolution",
    CULTURAL_IMPACT:
        "Illustration of cultural impact discussed in the accompanying section",
    CREATOR_PORTRAIT:
        "Public likeness / portrait of a creator or performer (prefer free media)"
});

export const DEFAULT_NON_REPLACEABILITY =
    "No free public-domain alternative exists for this copyrighted likeness; a reduced-resolution still is shown for encyclopedia listing context.";

export const DEFAULT_MINIMALITY =
    "Reduced-resolution render (≤220px / ~0.05MP) — unsuitable as a substitute for official artwork or merchandise.";

export function isFreeLicense(license) {
    return (
        license === MEDIA_LICENSE.PUBLIC_DOMAIN ||
        license === MEDIA_LICENSE.CC0 ||
        license === MEDIA_LICENSE.CC_BY ||
        license === MEDIA_LICENSE.CC_BY_SA
    );
}

/**
 * Soft validation: never block a listing image solely for missing legal boilerplate.
 * Still flags oversize dimensions when callers care.
 */
export function validateMediaAsset(asset) {
    const errors = [];

    if (!asset || typeof asset !== "object") {
        return { ok: false, errors: ["Media asset is required"] };
    }
    if (!asset.url) errors.push("url is required");

    const free = isFreeLicense(asset.license) || asset.isFree === true;
    const w = Number(asset.width) || 0;
    const h = Number(asset.height) || 0;
    const pixels = w && h ? w * h : 0;

    if (!free) {
        if (w > NON_FREE_IMAGE_LIMITS.maxWidthPx) {
            errors.push(
                `width ${w}px exceeds listing max ${NON_FREE_IMAGE_LIMITS.maxWidthPx}px`
            );
        }
        if (h > NON_FREE_IMAGE_LIMITS.maxHeightPx) {
            errors.push(
                `height ${h}px exceeds listing max ${NON_FREE_IMAGE_LIMITS.maxHeightPx}px`
            );
        }
        if (pixels > NON_FREE_IMAGE_LIMITS.maxPixels) {
            errors.push(
                `pixel count ${pixels} exceeds listing cap (${NON_FREE_IMAGE_LIMITS.maxPixels})`
            );
        }
    }

    // Missing alt/license are warnings for quality, not hard blocks.
    return errors.length ? { ok: false, errors } : { ok: true };
}

/**
 * Prefer free media when equally available; otherwise keep the first valid listing image.
 */
export function preferFreeMedia(candidates = []) {
    const list = (candidates || []).filter((asset) => asset?.url);
    if (!list.length) {
        return null;
    }
    const free = list.find(
        (asset) => isFreeLicense(asset.license) || asset.isFree
    );
    return free || list[0] || null;
}

export function sectionReferencesMedia(section, asset) {
    if (!section || !asset) return false;
    if (!(section.mediaIds || []).includes(asset.id)) return false;
    const body = `${section.heading} ${section.html}`.toLowerCase();
    const altBits = String(asset.alt || "")
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length > 3)
        .slice(0, 4);
    const excerpt = String(
        asset.fairUseRationale?.commentaryExcerpt || ""
    ).toLowerCase();
    if (excerpt && body.includes(excerpt.slice(0, 32))) return true;
    return altBits.some((bit) => body.includes(bit));
}
