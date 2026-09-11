/**
 * Resolution / CDN constraints for non-free images.
 * Never expose full-resolution files as the browser render source.
 */

import { NON_FREE_IMAGE_LIMITS, isFreeLicense } from "./mediaSchema";

/**
 * Rewrite common thumb hosts (Wikimedia) to an explicit max width.
 * Falls back to the given URL when rewriting is not possible — caller must
 * still enforce CSS max-width and block originalUrl as src.
 *
 * @param {string} url
 * @param {number} [maxWidth]
 */
export function constrainImageUrl(url, maxWidth = NON_FREE_IMAGE_LIMITS.maxWidthPx) {
    if (!url) return "";

    try {
        const parsed = new URL(url, "https://www.tonolore.com");

        // Wikimedia Commons / Wikipedia thumb pattern
        if (
            /upload\.wikimedia\.org|commons\.wikimedia\.org|thumb\.wikimedia\.org/i.test(
                parsed.hostname + parsed.pathname
            )
        ) {
            // .../thumb/.../500px-File.png → force ≤ maxWidth
            const thumbMatch = parsed.pathname.match(
                /\/(\d+)px-([^/]+)$/i
            );
            if (thumbMatch) {
                const current = Number(thumbMatch[1]);
                if (current > maxWidth) {
                    parsed.pathname = parsed.pathname.replace(
                        /\/\d+px-/,
                        `/${maxWidth}px-`
                    );
                    return parsed.toString();
                }
            }
        }

        // Generic query hints some CDNs honor
        if (!parsed.searchParams.has("w")) {
            parsed.searchParams.set("w", String(maxWidth));
        } else {
            const w = Number(parsed.searchParams.get("w"));
            if (Number.isFinite(w) && w > maxWidth) {
                parsed.searchParams.set("w", String(maxWidth));
            }
        }

        return parsed.toString();
    } catch {
        return url;
    }
}

/**
 * Pick the safe browser src for an asset. Non-free assets never use originalUrl.
 * @param {import('./mediaSchema').MediaAsset} asset
 */
export function safeRenderSrc(asset) {
    if (!asset?.url) return "";
    const free = isFreeLicense(asset.license) || asset.isFree;
    const src = free ? asset.url : constrainImageUrl(asset.url);
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
 * After load: if a non-free image still exceeds caps, blank it (no high-res leak).
 * @param {HTMLImageElement} img
 * @param {boolean} isFree
 */
export function enforceLoadedResolution(img, isFree) {
    if (!img || isFree) return true;
    const w = img.naturalWidth || 0;
    const h = img.naturalHeight || 0;
    if (!w || !h) return true;
    const overWidth = w > NON_FREE_IMAGE_LIMITS.maxWidthPx;
    const overPixels = w * h > NON_FREE_IMAGE_LIMITS.maxPixels;
    if (overWidth || overPixels) {
        img.removeAttribute("src");
        img.dataset.blockedReason = "non_free_resolution_exceeded";
        img.alt =
            "Image withheld — source exceeded fair-use resolution limits.";
        return false;
    }
    return true;
}
