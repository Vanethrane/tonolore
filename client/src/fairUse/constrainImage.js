/**
 * Force listing thumbs to a small CDN edge so art stays useful on-site
 * but is a poor rip for merch / prints.
 */

import {
    LISTING_THUMB_EDGE_PX,
    NON_FREE_IMAGE_LIMITS,
    isFreeLicense
} from "./mediaSchema";

/**
 * Rewrite Fandom / Wikimedia / generic CDNs down to the listing edge.
 * @param {string} url
 * @param {number} [maxWidth]
 */
export function constrainImageUrl(
    url,
    maxWidth = LISTING_THUMB_EDGE_PX || NON_FREE_IMAGE_LIMITS.maxWidthPx
) {
    if (!url) return "";

    try {
        let value = String(url);

        // Fandom / Wikia: /scale-to-width-down/720 → /scale-to-width-down/220
        if (/scale-to-width-down\/\d+/i.test(value)) {
            value = value.replace(
                /scale-to-width-down\/\d+/gi,
                `scale-to-width-down/${maxWidth}`
            );
        } else if (/static\.wikia\.nocookie\.net|vignette\.wikia/i.test(value)) {
            // Insert scale param when missing
            value = value.replace(
                /(\/revision\/[^/?#]+)/i,
                `$1/scale-to-width-down/${maxWidth}`
            );
        }

        const parsed = new URL(value, "https://www.tonolore.com");

        // Wikimedia Commons / Wikipedia thumb pattern: /500px-File.png
        if (
            /upload\.wikimedia\.org|commons\.wikimedia\.org|thumb\.wikimedia\.org/i.test(
                parsed.hostname + parsed.pathname
            )
        ) {
            const thumbMatch = parsed.pathname.match(/\/(\d+)px-([^/]+)$/i);
            if (thumbMatch) {
                const current = Number(thumbMatch[1]);
                if (!Number.isFinite(current) || current > maxWidth) {
                    parsed.pathname = parsed.pathname.replace(
                        /\/\d+px-/,
                        `/${maxWidth}px-`
                    );
                }
            }
        }

        // Generic query hints some CDNs honor
        const existing = Number(parsed.searchParams.get("w"));
        if (!Number.isFinite(existing) || existing > maxWidth) {
            parsed.searchParams.set("w", String(maxWidth));
        }

        return parsed.toString();
    } catch {
        return String(url).replace(
            /scale-to-width-down\/\d+/gi,
            `scale-to-width-down/${maxWidth}`
        );
    }
}

/**
 * Safe browser src. Always downscales listing art; never prefers originalUrl.
 */
export function safeRenderSrc(asset) {
    if (!asset?.url) return "";
    const free = isFreeLicense(asset.license) || asset.isFree;
    // Even free listing art is kept modest for consistent card layout.
    const src = constrainImageUrl(asset.url);
    if (
        !free &&
        asset.originalUrl &&
        src === asset.originalUrl &&
        !NON_FREE_IMAGE_LIMITS.allowFullResolutionSrc
    ) {
        return constrainImageUrl(asset.url);
    }
    return src;
}

/**
 * Listing helper for raw connection / card URLs.
 */
export function listingThumbSrc(url) {
    return constrainImageUrl(url);
}

/**
 * After load: if a non-free image still exceeds caps, blank it.
 */
export function enforceLoadedResolution(img, isFree) {
    if (!img) return true;
    // Free media may still be capped visually via CSS; only blank extreme leaks.
    const w = img.naturalWidth || 0;
    const h = img.naturalHeight || 0;
    if (!w || !h) return true;
    const limit = isFree
        ? NON_FREE_IMAGE_LIMITS.maxWidthPx * 2
        : NON_FREE_IMAGE_LIMITS.maxWidthPx;
    const pixels = isFree
        ? NON_FREE_IMAGE_LIMITS.maxPixels * 4
        : NON_FREE_IMAGE_LIMITS.maxPixels;
    if (w > limit || w * h > pixels) {
        img.removeAttribute("src");
        img.dataset.blockedReason = "listing_resolution_exceeded";
        img.alt = "Image withheld — source exceeded listing resolution limits.";
        return false;
    }
    return true;
}
