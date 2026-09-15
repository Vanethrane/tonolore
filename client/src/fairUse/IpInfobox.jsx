import React from "react";
import {
    NON_FREE_IMAGE_LIMITS,
    isFreeLicense,
    preferFreeMedia
} from "./mediaSchema";
import {
    enforceLoadedResolution,
    safeRenderSrc
} from "./constrainImage";
import { MediaCredit } from "./FairUseRationale";
import "./fairUse.css";

/**
 * IP Infobox: show the best available listing image at a hard-capped resolution.
 */
export function IpInfobox({
    title,
    entityType,
    aliases = [],
    franchise,
    candidates = [],
    image = null,
    onBrokenImage
}) {
    const chosen =
        image ||
        preferFreeMedia(Array.isArray(candidates) ? candidates : []);

    const asset = chosen?.url ? chosen : null;
    const free = asset
        ? isFreeLicense(asset.license) || asset.isFree
        : true;
    const src = asset ? safeRenderSrc(asset) : "";

    return (
        <aside className="ip-infobox" aria-label={`${title} infobox`}>
            <div className="ip-infobox-head">
                <div className="eyebrow">{entityType}</div>
                <h1>{title}</h1>
                {aliases?.length ? (
                    <p className="aliases muted">
                        Also known as {aliases.join(", ")}
                    </p>
                ) : null}
                {franchise ? (
                    <p className="ip-infobox-franchise muted">{franchise}</p>
                ) : null}
            </div>

            {asset && src ? (
                <figure className="ip-infobox-media entity-art">
                    <img
                        src={src}
                        alt={asset.alt || title}
                        width={Math.min(
                            asset.width || NON_FREE_IMAGE_LIMITS.maxWidthPx,
                            NON_FREE_IMAGE_LIMITS.maxWidthPx
                        )}
                        height={Math.min(
                            asset.height || NON_FREE_IMAGE_LIMITS.maxHeightPx,
                            NON_FREE_IMAGE_LIMITS.maxHeightPx
                        )}
                        loading="eager"
                        decoding="async"
                        referrerPolicy="no-referrer"
                        className={free ? "is-free-media" : "is-nonfree-media"}
                        style={{
                            maxWidth: NON_FREE_IMAGE_LIMITS.maxWidthPx,
                            maxHeight: NON_FREE_IMAGE_LIMITS.maxHeightPx,
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }}
                        onLoad={(event) => {
                            enforceLoadedResolution(event.currentTarget, free);
                        }}
                        onError={(event) => {
                            if (onBrokenImage) onBrokenImage(event);
                            else {
                                event.currentTarget.style.display = "none";
                            }
                        }}
                        draggable={false}
                        onContextMenu={(event) => event.preventDefault()}
                        data-full-res-blocked="true"
                    />
                    <MediaCredit asset={asset} />
                </figure>
            ) : null}
        </aside>
    );
}
