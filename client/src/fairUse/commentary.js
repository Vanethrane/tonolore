/**
 * Build encyclopedic sections that satisfy Factor 1 (transformative commentary)
 * by explicitly discussing the visual subject of an attached non-free image.
 */

import {
    DEFAULT_MINIMALITY,
    DEFAULT_NON_REPLACEABILITY,
    MEDIA_LICENSE,
    MEDIA_PURPOSE
} from "./mediaSchema";

/**
 * @param {object} opts
 * @param {string} opts.characterName
 * @param {string} opts.franchise
 * @param {string} [opts.copyrightHolder]
 * @param {string} [opts.designNotes]
 * @param {string} [opts.imageUrl]
 * @param {string} [opts.sourceUrl]
 * @param {string} [opts.sourceAttribution]
 */
export function buildDesignCommentaryArticle({
    characterName,
    franchise,
    copyrightHolder = "respective rights holders",
    designNotes = "silhouette, palette, and costume language",
    imageUrl = "",
    sourceUrl = "",
    sourceAttribution = ""
}) {
    const sectionId = "design-and-visual-identity";
    const mediaId = `${characterName.toLowerCase().replace(/\s+/g, "-")}-id-thumb`;

    const commentaryExcerpt = `${characterName}'s visual design in ${franchise} uses ${designNotes} as a readable identity signal for readers of this encyclopedia entry.`;

    const html = `
<p>
  In <em>${escape(franchise)}</em>, <strong>${escape(characterName)}</strong>
  is recognized less by plot synopsis than by a specific visual grammar —
  ${escape(designNotes)}. The identification still shown in this section is
  discussed here as evidence of that design language: how shape, color, and
  costume cues make the character legible across adaptations.
</p>
<p>
  That reading is educational and critical, not decorative. The low-resolution
  image exists so readers can follow the commentary on design and cultural
  recognition; it is not offered as a substitute for official artwork or as a
  high-resolution download.
</p>
`.trim();

    const asset = imageUrl
        ? {
              id: mediaId,
              url: imageUrl,
              originalUrl: sourceUrl || undefined,
              alt: `Low-resolution identification still of ${characterName} from ${franchise}`,
              license: MEDIA_LICENSE.FAIR_USE,
              width: 360,
              height: 360,
              isFree: false,
              fairUseRationale: {
                  copyrightHolder,
                  sourceAttribution:
                      sourceAttribution ||
                      `© ${copyrightHolder}. Used under fair use for commentary.`,
                  sourceUrl: sourceUrl || undefined,
                  purposeOfUse: MEDIA_PURPOSE.DESIGN_COMMENTARY,
                  nonReplaceabilityStatement: DEFAULT_NON_REPLACEABILITY,
                  minimalityStatement: DEFAULT_MINIMALITY,
                  commentarySectionId: sectionId,
                  commentaryExcerpt
              }
          }
        : null;

    return {
        slug: characterName.toLowerCase().replace(/\s+/g, "-"),
        title: characterName,
        entityType: "character",
        franchise,
        infoboxImage: asset,
        gallery: asset ? [asset] : [],
        sections: [
            {
                id: sectionId,
                heading: "Design and visual identity",
                html,
                mediaIds: asset ? [mediaId] : []
            },
            {
                id: "cultural-impact",
                heading: "Cultural impact",
                html: `<p>Beyond plot role, <strong>${escape(characterName)}</strong> circulates as a recognizable cultural mark within ${escape(franchise)} fandom. Encyclopedia coverage focuses on how that recognition formed — design cues, adaptation choices, and reception — rather than reproducing marketable art for its own sake.</p>`,
                mediaIds: []
            }
        ]
    };
}

function escape(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

/**
 * Map today's entity API image fields into a MediaAsset when possible.
 * Returns null if fair-use metadata is too thin to render legally under our rules.
 */
export function entityImageToMediaAsset(entity, sectionId = "overview") {
    if (!entity?.image_url) return null;

    const license = entity.image_license || MEDIA_LICENSE.FAIR_USE;
    const free =
        license === MEDIA_LICENSE.PUBLIC_DOMAIN ||
        license === MEDIA_LICENSE.CC0 ||
        license === MEDIA_LICENSE.CC_BY ||
        license === MEDIA_LICENSE.CC_BY_SA;

    if (free) {
        return {
            id: `${entity.slug || entity.id}-media`,
            url: entity.image_url,
            alt: entity.image_alt || entity.name,
            license,
            isFree: true,
            width: 400,
            height: 400
        };
    }

    const excerpt =
        entity.short_description ||
        entity.description ||
        "";
    if (String(excerpt).trim().length < 40) {
        // Refuse non-free render without commentary tether.
        return null;
    }

    return {
        id: `${entity.slug || entity.id}-media`,
        url: entity.image_url,
        originalUrl: entity.image_source || undefined,
        alt:
            entity.image_alt ||
            `Low-resolution identification still of ${entity.name}`,
        license: MEDIA_LICENSE.FAIR_USE,
        width: 360,
        height: 360,
        isFree: false,
        fairUseRationale: {
            copyrightHolder: "Respective rights holders",
            sourceAttribution:
                entity.image_credit ||
                "Fair-use identification thumbnail — not free artwork.",
            sourceUrl: entity.image_source || undefined,
            purposeOfUse: MEDIA_PURPOSE.PRIMARY_IDENTIFICATION,
            nonReplaceabilityStatement: DEFAULT_NON_REPLACEABILITY,
            minimalityStatement: DEFAULT_MINIMALITY,
            commentarySectionId: sectionId,
            commentaryExcerpt: String(excerpt).slice(0, 280)
        }
    };
}
