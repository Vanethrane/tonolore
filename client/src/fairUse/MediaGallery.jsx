import React from "react";
import {
    NON_FREE_IMAGE_LIMITS,
    isFreeLicense,
    sectionReferencesMedia,
    validateMediaAsset
} from "./mediaSchema";
import {
    enforceLoadedResolution,
    safeRenderSrc
} from "./constrainImage";
import { MediaCredit } from "./FairUseRationale";
import "./fairUse.css";

/**
 * Media gallery that only renders non-free images inside their commentary section.
 * Decorative / unbound non-free assets are skipped.
 */
export function MediaGallery({
    assets = [],
    sections = [],
    sectionId = null,
    onBrokenImage
}) {
    const sectionMap = new Map((sections || []).map((s) => [s.id, s]));

    const items = (assets || []).filter((asset) => {
        const check = validateMediaAsset(asset);
        if (!check.ok) return false;

        const free = isFreeLicense(asset.license) || asset.isFree;
        if (free) {
            if (sectionId) {
                return (sectionMap.get(sectionId)?.mediaIds || []).includes(
                    asset.id
                );
            }
            return true;
        }

        const bindId = asset.fairUseRationale?.commentarySectionId;
        if (!bindId) return false;
        if (sectionId && bindId !== sectionId) return false;

        const section = sectionMap.get(bindId);
        if (!section) return false;
        return sectionReferencesMedia(section, asset);
    });

    if (!items.length) return null;

    return (
        <div
            className="media-gallery"
            role="list"
            aria-label="Article media"
        >
            {items.map((asset) => {
                const free = isFreeLicense(asset.license) || asset.isFree;
                const src = safeRenderSrc(asset);
                return (
                    <figure
                        className="media-gallery-item entity-art"
                        role="listitem"
                        key={asset.id}
                    >
                        <img
                            src={src}
                            alt={asset.alt}
                            width={Math.min(
                                asset.width || NON_FREE_IMAGE_LIMITS.maxWidthPx,
                                NON_FREE_IMAGE_LIMITS.maxWidthPx
                            )}
                            loading="lazy"
                            decoding="async"
                            referrerPolicy="no-referrer"
                            className={
                                free ? "is-free-media" : "is-nonfree-media"
                            }
                            style={{
                                maxWidth: NON_FREE_IMAGE_LIMITS.maxWidthPx,
                                maxHeight: NON_FREE_IMAGE_LIMITS.maxHeightPx,
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }}
                            draggable={free}
                            data-full-res-blocked={free ? "false" : "true"}
                            onLoad={(event) => {
                                enforceLoadedResolution(
                                    event.currentTarget,
                                    free
                                );
                            }}
                            onError={(event) => {
                                if (onBrokenImage) onBrokenImage(event);
                                else event.currentTarget.style.display = "none";
                            }}
                            onContextMenu={
                                free
                                    ? undefined
                                    : (event) => event.preventDefault()
                            }
                        />
                        <MediaCredit asset={asset} />
                    </figure>
                );
            })}
        </div>
    );
}

/**
 * Renders article sections with gallery slots bound to each section id.
 */
export function CommentaryArticle({ article, onBrokenImage }) {
    if (!article) return null;

    return (
        <article className="commentary-article">
            {(article.sections || []).map((section) => (
                <section
                    key={section.id}
                    id={section.id}
                    className="commentary-section topic-section"
                >
                    <h2>{section.heading}</h2>
                    <div
                        className="commentary-body"
                        dangerouslySetInnerHTML={{ __html: section.html }}
                    />
                    <MediaGallery
                        assets={article.gallery}
                        sections={article.sections}
                        sectionId={section.id}
                        onBrokenImage={onBrokenImage}
                    />
                </section>
            ))}
        </article>
    );
}
