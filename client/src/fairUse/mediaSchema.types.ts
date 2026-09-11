/**
 * TypeScript contract for Fair Use / NFCC IP article media.
 * Import these types from app code or validators; runtime lives in mediaSchema.js.
 */

export const NON_FREE_IMAGE_LIMITS = {
    maxWidthPx: 400,
    maxHeightPx: 400,
    maxPixels: 100_000,
    allowFullResolutionSrc: false,
    allowDecorativeUse: false
} as const;

export type MediaLicense =
    | "public_domain"
    | "cc0"
    | "cc_by"
    | "cc_by_sa"
    | "fair_use"
    | "unknown_non_free";

export type MediaPurpose =
    | "Primary visual identification in an educational encyclopedia article"
    | "Critical commentary on character design, costume, or visual evolution"
    | "Illustration of cultural impact discussed in the accompanying section"
    | "Public likeness / portrait of a creator or performer (prefer free media)"
    | (string & {});

export interface FairUseRationale {
    /** Original rights holder / studio / author */
    copyrightHolder: string;
    /** Human-readable credit line */
    sourceAttribution: string;
    /** Link to source page — not a full-resolution asset dump */
    sourceUrl?: string;
    purposeOfUse: MediaPurpose;
    nonReplaceabilityStatement: string;
    minimalityStatement: string;
    /** DOM / section id the image must accompany */
    commentarySectionId: string;
    /** Proof of contextual transformative commentary (Factor 1) */
    commentaryExcerpt: string;
}

export interface MediaAsset {
    id: string;
    /** Browser render URL — must already respect non-free caps when non-free */
    url: string;
    /** Catalog/reference only; NEVER use as <img src> for non-free assets */
    originalUrl?: string;
    alt: string;
    license: MediaLicense;
    width?: number;
    height?: number;
    isFree?: boolean;
    /** Required when license is fair_use or unknown_non_free */
    fairUseRationale?: FairUseRationale;
}

export interface ArticleSection {
    id: string;
    heading: string;
    /** Encyclopedic HTML; must discuss attached non-free media */
    html: string;
    mediaIds?: string[];
}

export interface IpArticle {
    slug: string;
    title: string;
    subtitle?: string;
    entityType: string;
    aliases?: string[];
    franchise?: string;
    infoboxImage?: MediaAsset | null;
    gallery: MediaAsset[];
    sections: ArticleSection[];
    copyrightNotice?: {
        title?: string;
        body?: string;
    };
}

/** Non-free MediaAsset must carry rationale + resolution caps. */
export type NonFreeMediaAsset = MediaAsset & {
    license: "fair_use" | "unknown_non_free";
    width: number;
    height: number;
    fairUseRationale: FairUseRationale;
};
