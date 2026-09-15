import React, { useId, useState } from "react";
import { isFreeLicense } from "./mediaSchema";

/**
 * Accessible expandable Fair Use rationale (NFCC-style disclosure).
 */
export function FairUseRationale({ rationale, compact = false }) {
    const [open, setOpen] = useState(false);
    const panelId = useId();

    if (!rationale) return null;

    return (
        <div className={`fair-use-rationale${compact ? " is-compact" : ""}`}>
            <button
                type="button"
                className="fair-use-rationale-toggle"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpen((value) => !value)}
            >
                Fair Use rationale
            </button>
            {open ? (
                <dl id={panelId} className="fair-use-rationale-panel">
                    <div>
                        <dt>Copyright holder</dt>
                        <dd>{rationale.copyrightHolder}</dd>
                    </div>
                    <div>
                        <dt>Source attribution</dt>
                        <dd>
                            {rationale.sourceAttribution}
                            {rationale.sourceUrl ? (
                                <>
                                    {" "}
                                    <a
                                        href={rationale.sourceUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Source
                                    </a>
                                </>
                            ) : null}
                        </dd>
                    </div>
                    <div>
                        <dt>Purpose of use</dt>
                        <dd>{rationale.purposeOfUse}</dd>
                    </div>
                    <div>
                        <dt>Non-replaceability</dt>
                        <dd>{rationale.nonReplaceabilityStatement}</dd>
                    </div>
                    <div>
                        <dt>Minimality</dt>
                        <dd>{rationale.minimalityStatement}</dd>
                    </div>
                    <div>
                        <dt>Tied commentary</dt>
                        <dd>
                            Section{" "}
                            <code>{rationale.commentarySectionId}</code>
                            {rationale.commentaryExcerpt ? (
                                <blockquote>
                                    {rationale.commentaryExcerpt}
                                </blockquote>
                            ) : null}
                        </dd>
                    </div>
                </dl>
            ) : null}
        </div>
    );
}

export function MediaCredit({ asset }) {
    if (!asset) return null;
    const free = isFreeLicense(asset.license) || asset.isFree;
    const rationale = asset.fairUseRationale;

    return (
        <figcaption className="fair-use-credit">
            {free ? (
                <span className="fair-use-badge is-free">Free / open media</span>
            ) : (
                <span className="fair-use-badge is-nonfree">
                    Low-res listing art — not for reuse
                </span>
            )}
            {rationale?.sourceAttribution ? (
                <span>{rationale.sourceAttribution}</span>
            ) : null}
            {rationale?.sourceUrl ? (
                <span>
                    <a href={rationale.sourceUrl} target="_blank" rel="noreferrer">
                        Source
                    </a>
                </span>
            ) : null}
            {!free ? <FairUseRationale rationale={rationale} compact /> : null}
        </figcaption>
    );
}
