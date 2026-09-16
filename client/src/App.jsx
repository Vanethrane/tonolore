import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import "./logoBackdrop.css";
import "./musicSubjectThemes.css";
import "./tabletopCardThemes.css";
import "./expansionSubjectThemes.css";
import "./sportsSubjectThemes.css";
import { categoryTheme } from "./categoryThemes";
import { connectionLoreBlurb } from "./connectionLore";
import { entityTypeLabel } from "./entityTypeLabel";
import { entityImageToMediaAsset, IpInfobox, listingThumbSrc } from "./fairUse";
import {
    fetchPageBySlug,
    fetchSubjectsCatalog,
    searchEntities
} from "./staticData";
import { siteOrigin, useDocumentSeo, buildBreadcrumbJsonLd, schemaTypeForEntity, shortenSerpTitle } from "./useDocumentSeo";
import {
    isLegalSlug,
    LEGAL_ROUTES,
    LegalPage,
    ReportErrorButton,
    SubmitEditButton,
    SiteFooter
} from "./legalPages";
import {
    deriveConnectionsFromPage,
    derivePropertyHubs,
    groupConnectionsByType
} from "./deriveConnections";

const LOGO_BACKDROP_CACHE = new Map();

function normalizeLogoBackdrop(value) {
    const raw = String(value || "").trim().toLowerCase();
    if (raw === "light" || raw === "white" || raw === "on-dark") {
        return "light";
    }
    if (raw === "dark" || raw === "black" || raw === "on-light") {
        return "dark";
    }
    return null;
}

function sampleLogoBackdrop(img) {
    try {
        const width = Math.min(96, img.naturalWidth || 96);
        const height = Math.min(96, img.naturalHeight || 96);
        if (width < 2 || height < 2) {
            return null;
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) {
            return null;
        }

        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        const { data } = ctx.getImageData(0, 0, width, height);

        let opaque = 0;
        let lumaSum = 0;

        for (let i = 0; i < data.length; i += 4) {
            const alpha = data[i + 3];
            if (alpha < 96) {
                continue;
            }
            const r = data[i];
            const g = data[i + 1];
            const b = data[i + 2];
            // Relative luminance for opaque ink.
            lumaSum += 0.2126 * r + 0.7152 * g + 0.0722 * b;
            opaque += 1;
        }

        if (opaque < 24) {
            return null;
        }

        const mean = lumaSum / opaque;
        // Dark ink on alpha → white plate; light/white ink → black plate.
        return mean < 145 ? "light" : "dark";
    } catch {
        // Cross-origin / tainted canvas — leave unset.
        return null;
    }
}

function LogoMark({
    logo,
    alt,
    className = "",
    imgClassName = "",
    loading = "lazy",
    onError,
    as: Tag = "div",
    children = null
}) {
    const explicit = normalizeLogoBackdrop(
        logo?.backdrop || logo?.background || logo?.on
    );
    const [backdrop, setBackdrop] = useState(
        () =>
            explicit ||
            (logo?.url ? LOGO_BACKDROP_CACHE.get(logo.url) || null : null)
    );

    useEffect(() => {
        setBackdrop(
            explicit ||
                (logo?.url ? LOGO_BACKDROP_CACHE.get(logo.url) || null : null)
        );
    }, [explicit, logo?.url]);

    useEffect(() => {
        if (explicit || !logo?.url || LOGO_BACKDROP_CACHE.has(logo.url)) {
            return undefined;
        }

        let cancelled = false;
        const probe = new Image();
        probe.decoding = "async";
        probe.referrerPolicy = "no-referrer";
        probe.crossOrigin = "anonymous";
        probe.onload = () => {
            if (cancelled) {
                return;
            }
            const detected = sampleLogoBackdrop(probe);
            if (!detected) {
                return;
            }
            LOGO_BACKDROP_CACHE.set(logo.url, detected);
            setBackdrop(detected);
        };
        probe.onerror = () => {
            // Non-CORS hosts still show via the visible <img>; plate stays default.
        };
        probe.src = logo.url;

        return () => {
            cancelled = true;
        };
    }, [explicit, logo?.url]);

    if (!logo?.url) {
        return null;
    }

    const backdropClass = backdrop ? `logo-backdrop-${backdrop}` : "";

    return (
        <Tag
            className={[className, "logo-mark", backdropClass]
                .filter(Boolean)
                .join(" ")}
        >
            <img
                className={imgClassName || undefined}
                src={logo.url}
                alt={alt || logo.alt || ""}
                loading={loading}
                referrerPolicy="no-referrer"
                onError={onError}
            />
            {children}
        </Tag>
    );
}
const FALLBACK_CATEGORIES = [
    {
        id: "anime",
        label: "Anime",
        blurb: "Series, studios, and story worlds that moved from the page to the screen."
    },
    {
        id: "video-games",
        label: "Video games",
        blurb: "Interactive worlds, studios, and the characters that fill them."
    },
    {
        id: "books",
        label: "Books & literature",
        blurb: "Novels, sagas, and literary universes with deep canon trails."
    },
    {
        id: "movies",
        label: "Movies",
        blurb: "Film franchises, directors, and the lore that spilled off the screen."
    },
    {
        id: "television",
        label: "Television",
        blurb: "Long-form shows and serial worlds built episode by episode."
    },
    {
        id: "comics",
        label: "Comics & manga",
        blurb: "Panels, publishers, and the heroes drawn across decades."
    },
    {
        id: "tabletop",
        label: "Tabletop",
        blurb: "RPGs, wargames, and board games shaped at the table.",
        genres: [
            {
                id: "rpg",
                label: "Roleplaying games",
                blurb: "Character-driven tabletop RPGs and their settings.",
                subjectIds: [
                    "dungeons-and-dragons",
                    "pathfinder",
                    "vampire-the-masquerade",
                    "call-of-cthulhu"
                ]
            },
            {
                id: "wargames",
                label: "Wargames",
                blurb: "Miniatures, factions, and campaign battlefields.",
                subjectIds: [
                    "warhammer-40k",
                    "warhammer-fantasy",
                    "battletech"
                ]
            },
            {
                id: "board-games",
                label: "Board games",
                blurb: "Boxed strategy and co-op games built for the table.",
                subjectIds: [
                    "catan",
                    "pandemic",
                    "gloomhaven",
                    "wingspan",
                    "ticket-to-ride",
                    "chess"
                ]
            },
            {
                id: "living-card-at-table",
                label: "Cards at the table",
                blurb: "Collectible and living card games often played beside other tabletop hobbies.",
                subjectIds: ["magic-the-gathering"]
            }
        ]
    },
    {
        id: "card-games",
        label: "Card games",
        blurb: "Trading and living card games — including franchises that cross from anime, games, and comics."
    },
    {
        id: "music",
        label: "Music",
        blurb: "Artists, catalogs, and scenes mapped by genre — follow the lore behind the songs.",
        genres: [
            {
                id: "rock",
                label: "Rock",
                blurb: "Bands and catalogs that rewired guitars, albums, and arena myth.",
                subjectIds: ["the-beatles", "pink-floyd", "led-zeppelin"]
            },
            {
                id: "hip-hop",
                label: "Hip-hop",
                blurb: "Crews, catalogs, and myth-making from the block to the global chart.",
                subjectIds: ["wu-tang-clan", "public-enemy", "outkast"]
            },
            {
                id: "jazz",
                label: "Jazz",
                blurb: "Improvisers, composers, and sessions that keep rewriting the standard book.",
                subjectIds: ["miles-davis", "john-coltrane", "duke-ellington"]
            },
            {
                id: "electronic",
                label: "Electronic",
                blurb: "Machines, clubs, and studio identities that turned electricity into genre.",
                subjectIds: ["daft-punk", "kraftwerk", "aphex-twin"]
            },
            {
                id: "classical",
                label: "Classical",
                blurb: "Composers whose catalogs still organize concert halls and music education.",
                subjectIds: [
                    "ludwig-van-beethoven",
                    "wolfgang-amadeus-mozart",
                    "johann-sebastian-bach"
                ]
            },
            {
                id: "country",
                label: "Country",
                blurb: "Storytellers of place, faith, work, and the American road.",
                subjectIds: ["johnny-cash", "dolly-parton", "hank-williams"]
            },
            {
                id: "metal",
                label: "Metal",
                blurb: "Riffs, mascots, and underground-to-arena worlds built on volume and myth.",
                subjectIds: ["black-sabbath", "metallica", "iron-maiden"]
            },
            {
                id: "pop",
                label: "Pop",
                blurb: "Global star systems where image, choreography, and hit craft intertwine.",
                subjectIds: ["michael-jackson", "madonna", "prince"]
            }
        ]
    },
    {
        id: "mythology",
        label: "Mythology",
        blurb: "Gods, heroes, and cosmologies that still structure modern storytelling."
    },
    {
        id: "history",
        label: "History",
        blurb: "Empires, wars, frontiers, and trade routes with dense people-and-place graphs."
    },
    {
        id: "sports",
        label: "Sports",
        blurb: "Leagues, tournaments, and ritual competition — browse by sport.",
        genres: [
            {
                id: "basketball",
                label: "Basketball",
                blurb: "Court leagues and tournaments.",
                subjectIds: [
                    "nba",
                    "wnba",
                    "ncaa-mens-basketball",
                    "euroleague",
                    "fiba-basketball-world-cup"
                ]
            },
            {
                id: "soccer",
                label: "Soccer",
                blurb: "Association football cups and leagues.",
                subjectIds: [
                    "fifa-world-cup",
                    "uefa-champions-league",
                    "premier-league",
                    "la-liga",
                    "mls"
                ]
            }
        ]
    },
    {
        id: "horror",
        label: "Horror",
        blurb: "Monsters, slashers, and dread franchises built to haunt the culture."
    },
    {
        id: "western-animation",
        label: "Western animation",
        blurb: "Studios and series outside Japanese anime with deep character maps."
    },
    {
        id: "toys",
        label: "Toys & collectibles",
        blurb: "Play lines and collectible myths that spilled into media empires."
    },
    {
        id: "wrestling",
        label: "Pro wrestling",
        blurb: "Promotions, personas, and kayfabe histories told as living soap opera."
    },
    {
        id: "science-nature",
        label: "Science & nature",
        blurb: "Discoveries, expeditions, and natural histories with encyclopedia depth."
    },
    {
        id: "podcasts",
        label: "Podcasts & audio",
        blurb: "Serialized audio worlds — fiction, actual play, and documentary myth."
    },
    {
        id: "internet-culture",
        label: "Internet culture",
        blurb: "Platforms, memes, and online commons that became modern folklore."
    },
    {
        id: "theater",
        label: "Theater & musicals",
        blurb: "Stages, scores, and dramatic canons that travel from page to performance."
    },
    {
        id: "fighting-games",
        label: "Fighting games",
        blurb: "Competitive fighters with deep cast lore and tournament culture."
    },
    {
        id: "sci-fi",
        label: "Science fiction",
        blurb: "Futures, first contacts, and speculative franchises beyond a single medium."
    },
    {
        id: "folklore",
        label: "Folklore & legend",
        blurb: "Folk heroes, cycle tales, and living vernacular myths that keep getting retold."
    },
    {
        id: "unexplained",
        label: "Unexplained",
        blurb: "Cryptids, sightings, disputed discoveries, and contested narratives with dense witness graphs."
    },
    {
        id: "maritime",
        label: "Maritime",
        blurb: "Ships, ports, wrecks, and sea power — explorers, pirates, and naval lore."
    },
    {
        id: "crime",
        label: "Crime & underworld",
        blurb: "Organized crime, unsolved cases, and the people and places crime lore maps."
    },
    {
        id: "military",
        label: "Military & fortresses",
        blurb: "Weapons, units, sieges, and stone strongholds — technology and power across eras."
    },
    {
        id: "occult",
        label: "Occult & esoterica",
        blurb: "Alchemy, vampire myth, witchcraft, and ritual traditions with dense symbolic graphs."
    },
    {
        id: "royalty",
        label: "Royalty & thrones",
        blurb: "Dynasties, successions, courts, and the family trees that organize power lore."
    },
    {
        id: "religion",
        label: "Religion & belief",
        blurb: "Faiths, heresies, councils, and sacred mysteries mapped across people and places."
    },
    {
        id: "disasters",
        label: "Disasters & catastrophes",
        blurb: "Natural and man-made disasters — timelines, places, survivors, and aftermath lore."
    },
    {
        id: "culinary",
        label: "Food & drink",
        blurb: "Cuisines, staples, and drink cultures with geographic and craft lore."
    },
    {
        id: "transport",
        label: "Transport & machines",
        blurb: "Vehicles, routes, and the people who moved the modern world — cars, planes, rails, and their long tails."
    },
    {
        id: "built-environment",
        label: "Built environment",
        blurb: "Buildings, ruins, and abandoned sites — architecture with owners, scandals, and afterlives."
    }
];

function parseRoute() {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, "");

    if (!path) {
        return { type: "home" };
    }

    const categoryMatch = path.match(/^category\/([a-z0-9-]+)$/i);
    if (categoryMatch) {
        return { type: "category", categoryId: categoryMatch[1].toLowerCase() };
    }

    const legalSlug = path.toLowerCase();
    if (isLegalSlug(legalSlug)) {
        return { type: "legal", slug: legalSlug };
    }

    return { type: "page", slug: path };
}

function routeToPath(route) {
    if (!route || route.type === "home") {
        return "/";
    }
    if (route.type === "category") {
        return `/category/${route.categoryId}`;
    }
    if (route.type === "legal") {
        return `/${route.slug}`;
    }
    return `/${route.slug}`;
}

function hideBrokenImage(event) {
    const image = event.currentTarget;
    image.style.display = "none";
    image.setAttribute("data-broken", "true");

    const collageCell = image.closest(".category-collage-cell");
    if (collageCell) {
        collageCell.style.display = "none";
        return;
    }

    const brandLink = image.closest(".subject-brand-link");
    if (brandLink) {
        brandLink.style.display = "none";
        return;
    }

    const logoWrap = image.closest(
        ".subject-card-logo, .subject-brand, .subject-hero-mark, .logo-mark"
    );
    if (logoWrap) {
        logoWrap.style.display = "none";
        return;
    }

    const art = image.closest(".entity-art");
    if (art) {
        art.style.display = "none";
    }
}

const RELATIONSHIP_LABELS = {
    // creator --created--> work; work --created_by--> creator
    created_by: { outgoing: "Created By", incoming: "Created" },
    created: { outgoing: "Created", incoming: "Created By" },
    serialized_in: { outgoing: "Serialized In", incoming: "Serializes" },
    publishes: { outgoing: "Publishes", incoming: "Published By" },
    published: { outgoing: "Published By", incoming: "Publishes" },
    adapted_into: { outgoing: "Adapted Into", incoming: "Adaptation Of" },
    adapted_from: { outgoing: "Adapted From", incoming: "Adaptation Of" },
    produced: { outgoing: "Produced", incoming: "Produced By" },
    preceded: { outgoing: "Preceded", incoming: "Preceded By" },
    followed: { outgoing: "Followed", incoming: "Followed By" },
    caused: { outgoing: "Caused", incoming: "Caused By" },
    part_of: { outgoing: "Part Of", incoming: "Contains" },
    seeks: { outgoing: "Seeks", incoming: "Sought By" },
    found: { outgoing: "Found", incoming: "Found By" },
    reached: { outgoing: "Reached", incoming: "Reached By" },
    suppressed: { outgoing: "Suppressed", incoming: "Suppressed By" },
    records: { outgoing: "Records", incoming: "Recorded By" },
    can_read: { outgoing: "Can Read", incoming: "Read By" },
    member_of: { outgoing: "Member Of", incoming: "Has Member" },
    leads: { outgoing: "Leads", incoming: "Led By" },
    uses: { outgoing: "Uses", incoming: "Used By" },
    contains: { outgoing: "Contains", incoming: "Contained By" },
    opposed_by: { outgoing: "Opposed By", incoming: "Opposes" },
    motivated_by: { outgoing: "Motivated By", incoming: "Motivates" },
    connected_to: { outgoing: "Connected To", incoming: "Connected To" },
    related_to: { outgoing: "Related To", incoming: "Related To" },
    supports: { outgoing: "Supports", incoming: "Supported By" },
    contradicts: { outgoing: "Contradicts", incoming: "Contradicted By" },
    influenced: { outgoing: "Influenced", incoming: "Influenced By" },
    inspired: { outgoing: "Inspired", incoming: "Inspired By" },
    involved: { outgoing: "Involved In", incoming: "Involves" },
    occurred_at: { outgoing: "Occurred At", incoming: "Site Of" },
    located_in: { outgoing: "Located In", incoming: "Contains" }
};

function relationshipLabel(connection) {
    const r = connection.relationship;
    const incoming = connection.direction === "incoming";
    const pair = RELATIONSHIP_LABELS[r];

    if (pair) {
        return pair[incoming ? "incoming" : "outgoing"];
    }

    return String(r || "").replace(/_/g, " ");
}

function SiteSearch({ navigate }) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchError, setSearchError] = useState(null);

    useEffect(() => {
        const term = query.trim();

        if (term.length < 2) {
            setResults([]);
            setLoading(false);
            setSearchError(null);
            return undefined;
        }

        let cancelled = false;
        setLoading(true);
        setSearchError(null);

        const timer = setTimeout(async () => {
            try {
                const entities = await searchEntities(term, 12);

                if (!cancelled) {
                    setResults(entities);
                    setOpen(true);
                }
            } catch {
                if (!cancelled) {
                    setResults([]);
                    setSearchError("Search index unavailable — try again in a moment.");
                    setOpen(true);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }, 160);

        return () => {
            cancelled = true;
            clearTimeout(timer);
        };
    }, [query]);

    useEffect(() => {
        function handlePointer(event) {
            if (!event.target.closest(".site-search")) {
                setOpen(false);
            }
        }

        document.addEventListener("pointerdown", handlePointer);
        return () => document.removeEventListener("pointerdown", handlePointer);
    }, []);

    function resultPath(entity) {
        return (entity.path || `/${entity.slug}`).replace(/^\/+|\/+$/g, "");
    }

    function goToResult(entity) {
        const path = resultPath(entity);
        setQuery("");
        setResults([]);
        setOpen(false);
        navigate(path);
    }

    function onSubmit(event) {
        event.preventDefault();

        if (results[0]) {
            goToResult(results[0]);
        }
    }

    return (
        <div className={`site-search${open && query.trim().length >= 2 ? " is-open" : ""}`}>
            <form className="site-search-form" onSubmit={onSubmit} role="search">
                <label className="visually-hidden" htmlFor="site-search-input">
                    Search Ton-o-Lore
                </label>
                <input
                    id="site-search-input"
                    className="site-search-input"
                    type="search"
                    value={query}
                    placeholder="Search people, places, lore…"
                    autoComplete="off"
                    onChange={(event) => {
                        setQuery(event.target.value);
                        setOpen(true);
                    }}
                    onFocus={() => {
                        if (query.trim().length >= 2) {
                            setOpen(true);
                        }
                    }}
                />
            </form>

            {open && query.trim().length >= 2 ? (
                <div className="site-search-results" role="listbox">
                    {loading ? (
                        <div className="site-search-empty">Searching…</div>
                    ) : searchError ? (
                        <div className="site-search-empty">{searchError}</div>
                    ) : results.length === 0 ? (
                        <div className="site-search-empty">No matches</div>
                    ) : (
                        results.map((entity) => {
                            const path = resultPath(entity);
                            return (
                                <a
                                    className="site-search-result"
                                    key={entity.id}
                                    role="option"
                                    href={`/${path}`}
                                    onMouseDown={(event) => {
                                        // Keep the panel open until click; avoid input blur races.
                                        if (event.button === 0) {
                                            event.preventDefault();
                                        }
                                    }}
                                    onClick={(event) => {
                                        if (
                                            event.metaKey ||
                                            event.ctrlKey ||
                                            event.shiftKey ||
                                            event.altKey
                                        ) {
                                            setOpen(false);
                                            return;
                                        }
                                        event.preventDefault();
                                        goToResult(entity);
                                    }}
                                >
                                    <span className="site-search-result-type">
                                        {entityTypeLabel(entity)}
                                    </span>
                                    <span className="site-search-result-name">
                                        {entity.name}
                                    </span>
                                    {entity.short_description ? (
                                        <span className="site-search-result-desc">
                                            {entity.short_description}
                                        </span>
                                    ) : null}
                                </a>
                            );
                        })
                    )}
                </div>
            ) : null}
        </div>
    );
}

function SiteHeader({ navigate, brand = null }) {
    return (
        <header className="site-header">
            <div className="header-brand-row">
                <a
                    className="logo"
                    href="/"
                    onClick={(event) => {
                        event.preventDefault();
                        navigate(null);
                    }}
                >
                    Ton-o-Lore
                </a>

                {brand?.logo?.url ? (
                    <a
                        className="subject-brand-link"
                        href={brand.path || `/${brand.id}`}
                        title={brand.name}
                        onClick={(event) => {
                            event.preventDefault();
                            navigate(
                                (brand.path || `/${brand.id}`).replace(
                                    /^\//,
                                    ""
                                )
                            );
                        }}
                    >
                        <LogoMark
                            className="subject-brand"
                            logo={brand.logo}
                            alt={brand.logo.alt || brand.name}
                            onError={hideBrokenImage}
                        >
                            <span className="subject-brand-name">
                                {brand.name}
                            </span>
                        </LogoMark>
                    </a>
                ) : null}
            </div>

            <SiteSearch navigate={navigate} />

            <nav className="header-nav" aria-label="Primary">
                <a
                    href="/"
                    onClick={(event) => {
                        event.preventDefault();
                        navigate(null);
                    }}
                >
                    All categories
                </a>
            </nav>
        </header>
    );
}

function PathTrail({ crumbs, navigate }) {
    if (!crumbs?.length) {
        return null;
    }

    return (
        <nav className="path-trail" aria-label="You are here">
            {crumbs.map((crumb, index) => {
                const isLast = index === crumbs.length - 1;
                return (
                    <span className="path-trail-item" key={`${crumb.label}-${index}`}>
                        {index > 0 ? (
                            <span className="path-trail-sep" aria-hidden="true">
                                /
                            </span>
                        ) : null}
                        {crumb.href && !isLast ? (
                            <a
                                href={crumb.href}
                                onClick={(event) => {
                                    event.preventDefault();
                                    if (crumb.route) {
                                        navigate(crumb.route);
                                    } else if (crumb.href === "/") {
                                        navigate(null);
                                    } else {
                                        navigate(
                                            crumb.href.replace(/^\/+/, "")
                                        );
                                    }
                                }}
                            >
                                {crumb.label}
                            </a>
                        ) : (
                            <span
                                className={
                                    isLast ? "path-trail-current" : undefined
                                }
                            >
                                {crumb.label}
                            </span>
                        )}
                    </span>
                );
            })}
        </nav>
    );
}

const HIGHLIGHT_RELATIONSHIPS = new Set([
    "adapted_into",
    "adapted_from",
    "created",
    "created_by",
    "opposed_by",
    "influenced",
    "inspired",
    "caused",
    "member_of",
    "leads",
    "preceded",
    "followed",
    "part_of",
    "contains"
]);

function connectionInterest(connection) {
    const discovery = Number(connection.discovery_score);
    const strength = Number(connection.strength);
    const relationship = String(connection.relationship || "");
    const boost = HIGHLIGHT_RELATIONSHIPS.has(relationship) ? 18 : 0;
    const hasImage = connection.image_url ? 4 : 0;

    return (
        (Number.isFinite(discovery) ? discovery : 0) * 100 +
        (Number.isFinite(strength) ? strength : 0) +
        boost +
        hasImage
    );
}

function rankConnections(connections) {
    const seen = new Set();
    const unique = [];

    for (const connection of connections || []) {
        if (seen.has(connection.entity_id)) {
            continue;
        }
        seen.add(connection.entity_id);
        unique.push(connection);
    }

    unique.sort((a, b) => connectionInterest(b) - connectionInterest(a));

    if (unique.length <= 4) {
        return { featured: unique, more: [], total: unique.length };
    }

    const featuredCount = Math.min(
        6,
        Math.max(3, Math.ceil(unique.length * 0.35))
    );
    const featured = unique.slice(0, featuredCount);
    const more = unique.slice(featuredCount);

    return { featured, more, total: unique.length };
}

function ConnectionCard({
    connection,
    navigate,
    featured = false,
    showBadge = false,
    fromName = "This page"
}) {
    const path = (connection.path || `/${connection.slug}`).replace(
        /^\/+/,
        ""
    );
    const blurb = connectionLoreBlurb(connection, {
        fromName,
        relationshipLabel: entityTypeLabel
    });
    const relation =
        connection.relationship ||
        connection.title ||
        entityTypeLabel(connection);
    const initial = String(connection.name || "?")
        .trim()
        .charAt(0)
        .toUpperCase();

    return (
        <a
            className={`connection connection-card${featured ? " connection-featured" : ""}`}
            href={`/${path}`}
            onClick={(event) => {
                if (
                    event.metaKey ||
                    event.ctrlKey ||
                    event.shiftKey ||
                    event.altKey
                ) {
                    return;
                }
                event.preventDefault();
                navigate({ type: "page", slug: path });
            }}
        >
            <div className="connection-media" aria-hidden="true">
                {connection.image_url ? (
                    <img
                        className="connection-thumb"
                        src={listingThumbSrc(connection.image_url)}
                        alt=""
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        draggable={false}
                        onContextMenu={(event) => event.preventDefault()}
                        onError={hideBrokenImage}
                    />
                ) : (
                    <span className="connection-monogram">{initial}</span>
                )}
            </div>

            <div className="connection-meta">
                <span className="connection-type">{relation}</span>
                {showBadge ? (
                    <span className="connection-badge">Featured</span>
                ) : null}
            </div>

            <h3>{connection.name}</h3>

            <p className="connection-kind">{entityTypeLabel(connection)}</p>

            {blurb ? <p>{blurb}</p> : null}

            <span className="follow">Open →</span>
        </a>
    );
}

function SharedLoreSection({ entityName, connections, navigate }) {
    if (!connections?.length) {
        return null;
    }

    return (
        <section className="shared-lore" id="shared-lore">
            <div className="section-heading">
                <h2>Shared lore</h2>
                <p className="section-lede">
                    Why {entityName} is linked to each mapped page — not just
                    that a connection exists.
                </p>
            </div>
            <ul className="shared-lore-list">
                {connections.map((connection) => {
                    const path = (
                        connection.path || `/${connection.slug}`
                    ).replace(/^\/+/, "");
                    const blurb = connectionLoreBlurb(connection, {
                        fromName: entityName,
                        relationshipLabel: entityTypeLabel
                    });

                    return (
                        <li key={connection.id}>
                            <a
                                className="shared-lore-name"
                                href={`/${path}`}
                                onClick={(event) => {
                                    if (
                                        event.metaKey ||
                                        event.ctrlKey ||
                                        event.shiftKey ||
                                        event.altKey
                                    ) {
                                        return;
                                    }
                                    event.preventDefault();
                                    navigate({ type: "page", slug: path });
                                }}
                            >
                                {connection.name}
                            </a>
                            <span className="shared-lore-type">
                                {entityTypeLabel(connection)}
                            </span>
                            <p>{blurb}</p>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

/** Linked pages as visual trailheads (images when available). */
function PictureLinksSection({ connections, navigate, fromName }) {
    const pictured = (connections || []).filter(
        (connection) => connection.image_url
    );
    const cards = pictured.length ? pictured : (connections || []).slice(0, 24);
    if (!cards.length) {
        return null;
    }

    return (
        <section className="picture-links" id="picture-links">
            <div className="section-heading">
                <h2>Picture links</h2>
                <p className="section-lede">
                    Related pages as visual cards — title, relationship, and a
                    path deeper into the map.
                </p>
            </div>
            <div className="picture-link-grid connection-grid">
                {cards.map((connection) => (
                    <ConnectionCard
                        key={`pic-${connection.id}`}
                        connection={connection}
                        navigate={navigate}
                        fromName={fromName}
                    />
                ))}
            </div>
        </section>
    );
}

function PropertyHubsSection({ hubs, navigate, franchiseName }) {
    if (!hubs?.length) {
        return null;
    }
    return (
        <section className="property-hubs" id="properties">
            <div className="section-heading">
                <h2>Properties</h2>
                <p className="section-lede">
                    Major shelves inside {franchiseName || "this franchise"} —
                    movies, TV, books, games, and more.
                </p>
            </div>
            <div className="connection-grid">
                {hubs.map((hub) => (
                    <ConnectionCard
                        key={hub.id}
                        connection={hub}
                        navigate={navigate}
                        fromName={franchiseName || "Franchise"}
                        featured
                    />
                ))}
            </div>
        </section>
    );
}

function GroupedConnectionsSection({
    groups,
    total,
    navigate,
    fromName
}) {
    return (
        <section className="connections" id="connections">
            <div className="section-heading">
                <h2>Connections</h2>
                <p className="section-lede">
                    {total
                        ? `${total} linked ${total === 1 ? "page" : "pages"}, grouped by kind.`
                        : "No linked pages are mapped from here yet."}
                </p>
            </div>

            {groups.map((group) => (
                <div className="connection-type-group" key={group.id}>
                    <h3 className="connection-type-heading">{group.label}</h3>
                    <div className="connection-grid">
                        {group.connections.map((connection) => (
                            <ConnectionCard
                                key={connection.id}
                                connection={connection}
                                navigate={navigate}
                                fromName={fromName}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

/** Pull named HTML sections out of generated page content for ordered layout. */
function splitGeneratedContent(html) {
    const source = String(html || "");
    const take = (className) => {
        const re = new RegExp(
            `<section class="${className}"[\\s\\S]*?<\\/section>`,
            "i"
        );
        const match = source.match(re);
        return match ? match[0] : "";
    };
    const didYouKnow = take("did-you-know");
    const sources = take("sources");
    const connectionNarrative = take("connection-narrative");
    const remainder = source
        .replace(/<section class="overview"[\s\S]*?<\/section>/gi, "")
        .replace(/<section class="overview format-hubs"[\s\S]*?<\/section>/gi, "")
        .replace(/<section class="did-you-know"[\s\S]*?<\/section>/gi, "")
        .replace(/<section class="sources"[\s\S]*?<\/section>/gi, "")
        .replace(/<section class="connection-narrative"[\s\S]*?<\/section>/gi, "")
        .trim();

    return { didYouKnow, sources, connectionNarrative, remainder };
}

const OTHER_CATEGORY = {
    id: "other",
    label: "Other",
    blurb: "Subjects that span genres or sit outside the main shelves."
};

function categoryStyle(id) {
    const theme = categoryTheme(id);

    return {
        "--category-accent": theme.accent,
        "--category-warm": theme.warm,
        "--category-glow": theme.glow,
        "--category-surface": theme.surface,
        "--accent": theme.accent,
        "--warm": theme.warm,
        "--accent-soft": theme.glow
    };
}

function buildCategorySections(subjects, categories) {
    const catalog = categories.length > 0 ? categories : FALLBACK_CATEGORIES;

    const sections = catalog
        .map((category) => ({
            ...category,
            blurb:
                category.blurb ||
                FALLBACK_CATEGORIES.find((entry) => entry.id === category.id)
                    ?.blurb ||
                "",
            subjects: subjects.filter((subject) =>
                (subject.categories || []).includes(category.id)
            )
        }))
        .filter((section) => section.subjects.length > 0);

    const categorizedIds = new Set(
        sections.flatMap((section) =>
            section.subjects.map((subject) => subject.id)
        )
    );
    const other = subjects.filter((subject) => !categorizedIds.has(subject.id));

    if (other.length) {
        sections.push({
            ...OTHER_CATEGORY,
            subjects: other
        });
    }

    return sections;
}

function useSubjectsCatalog() {
    const [subjects, setSubjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const data = await fetchSubjectsCatalog();
                if (!cancelled) {
                    setSubjects(data.subjects || []);
                    setCategories(data.categories || []);
                }
            } catch {
                if (!cancelled) {
                    setSubjects([]);
                    setCategories([]);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        load();
        return () => {
            cancelled = true;
        };
    }, []);

    return { subjects, categories, loading };
}

function SubjectCard({ subject, navigate }) {
    // Category shelves always open the subject root. Format hubs like
    // /pokemon/anime 404 on static Pages when those hub JSON shells are
    // missing; medium-specific trails live on the subject page itself.
    const href = subject.path || `/${subject.id || subject.slug}`;
    const slug = String(href).replace(/^\//, "");

    return (
        <a
            className={`connection subject-card theme-preview-${subject.theme || subject.id}`}
            href={href}
            onClick={(event) => {
                event.preventDefault();
                navigate({
                    type: "page",
                    slug
                });
            }}
        >
            {subject.logo?.url ? (
                <LogoMark
                    className="subject-card-logo"
                    logo={subject.logo}
                    alt={subject.logo.alt || `${subject.name} logo`}
                    onError={hideBrokenImage}
                />
            ) : null}
            <span className="connection-type">Subject</span>
            <h3>{subject.name}</h3>
            <p>
                {subject.entity_count
                    ? `${subject.entity_count} mapped entities`
                    : "Open the graph and keep going."}
            </p>
            <span className="follow">Enter →</span>
        </a>
    );
}

function Home({ navigate }) {
    const { subjects, categories, loading } = useSubjectsCatalog();

    const sections = useMemo(
        () => buildCategorySections(subjects, categories),
        [categories, subjects]
    );

    return (
        <div className="app theme-home">
            <SiteHeader navigate={navigate} />
            <main className="page page-home">
                <section className="hero hero-home">
                    <div className="hero-home-art" aria-hidden="true">
                        <img
                            src="/brand/tonolore.jpg"
                            alt=""
                            width="1600"
                            height="900"
                            decoding="async"
                            fetchPriority="high"
                        />
                    </div>
                    <div className="hero-home-copy">
                        <div className="eyebrow">Start here</div>
                        <h1 className="brand-hero">Ton-o-Lore</h1>
                        <p className="description">
                            Pick a medium, open a subject, then follow the
                            strongest connections — each page is another door
                            into the lore.
                        </p>
                    </div>
                </section>

                <section className="subjects subjects-home">
                    <div className="subjects-home-art" aria-hidden="true">
                        <img
                            src="/brand/tonolore2.jpg"
                            alt=""
                            width="1400"
                            height="900"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="subjects-home-inner">
                    <div className="section-heading">
                        <h2>Browse by medium</h2>
                        <p className="section-lede">
                            Each shelf groups franchises that share a format —
                            open one to see the subjects inside.
                        </p>
                    </div>
                    {loading ? (
                        <p className="muted">Loading categories…</p>
                    ) : (
                        <>
                            <div className="connection-grid">
                                {sections.map((section) => {
                                    const collageSubjects = section.subjects
                                        .filter((subject) => subject.logo?.url)
                                        .slice(0, 6);
                                    const entityTotal = section.subjects.reduce(
                                        (sum, subject) =>
                                            sum + (subject.entity_count || 0),
                                        0
                                    );
                                    const subjectCount = section.subjects.length;
                                    const categoryRoute = {
                                        type: "category",
                                        categoryId: section.id
                                    };

                                    return (
                                        <a
                                            className="connection subject-card category-card"
                                            href={routeToPath(categoryRoute)}
                                            key={section.id}
                                            style={categoryStyle(section.id)}
                                            onClick={(event) => {
                                                event.preventDefault();
                                                navigate(categoryRoute);
                                            }}
                                        >
                                            <div
                                                className="category-collage"
                                                data-count={
                                                    collageSubjects.length || 0
                                                }
                                            >
                                                {collageSubjects.length > 0 ? (
                                                    collageSubjects.map(
                                                        (subject) => (
                                                            <LogoMark
                                                                key={subject.id}
                                                                className="category-collage-cell"
                                                                logo={
                                                                    subject.logo
                                                                }
                                                                alt=""
                                                                onError={
                                                                    hideBrokenImage
                                                                }
                                                            />
                                                        )
                                                    )
                                                ) : (
                                                    <div className="category-collage-empty">
                                                        {section.label.charAt(0)}
                                                    </div>
                                                )}
                                            </div>
                                            <span className="connection-type">
                                                Category
                                            </span>
                                            <h3>{section.label}</h3>
                                            <p>{section.blurb}</p>
                                            <div className="category-card-meta">
                                                <span>
                                                    {subjectCount}{" "}
                                                    {subjectCount === 1
                                                        ? "subject"
                                                        : "subjects"}
                                                </span>
                                                {entityTotal > 0 ? (
                                                    <span>
                                                        {entityTotal} entities
                                                    </span>
                                                ) : null}
                                            </div>
                                            <span className="follow">Open →</span>
                                        </a>
                                    );
                                })}
                            </div>
                            <p className="subjects-fair-use muted">
                                Subject logos are reduced-resolution marks used
                                for encyclopedia listing context only — not free
                                or redistributable artwork. Rights remain with
                                their respective holders.
                            </p>
                        </>
                    )}
                    </div>
                </section>

                <section className="home-map-break" aria-label="Mapped lore">
                    <div className="home-map-break-art" aria-hidden="true">
                        <img
                            src="/brand/tonolore3.jpg"
                            alt=""
                            width="1400"
                            height="900"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                    <div className="home-map-break-copy">
                        <div className="eyebrow">Mapped entities</div>
                        <h2>A desk full of doors</h2>
                        <p>
                            Franchises, mediums, and threads share one map —
                            follow a picture, a name, or a connection and keep
                            falling through the shelves.
                        </p>
                    </div>
                </section>
            </main>
            <div className="page-actions page-actions-footer">
                <ReportErrorButton
                    pageUrl={`${siteOrigin()}/`}
                    pageTitle="Ton-o-Lore home"
                    entityName="Home"
                />
                <SubmitEditButton
                    pageUrl={`${siteOrigin()}/`}
                    pageTitle="Ton-o-Lore home"
                    entityName="Home"
                />
            </div>
            <SiteFooter navigate={navigate} />
        </div>
    );
}

function CategoryPage({ categoryId, navigate }) {
    const { subjects, categories, loading } = useSubjectsCatalog();

    const section = useMemo(() => {
        return buildCategorySections(subjects, categories).find(
            (entry) => entry.id === categoryId
        );
    }, [categories, categoryId, subjects]);

    const themeStyle = categoryStyle(categoryId);

    if (loading) {
        return (
            <div className="app theme-home" style={themeStyle}>
                <SiteHeader navigate={navigate} />
                <main className="page">
                    <section className="hero category-page-hero">
                        <div className="eyebrow">Loading</div>
                        <h1>Opening the shelf…</h1>
                    </section>
                </main>
                <SiteFooter navigate={navigate} />
            </div>
        );
    }

    if (!section) {
        return (
            <div className="app theme-default">
                <SiteHeader navigate={navigate} />
                <main className="page">
                    <section className="hero">
                        <div className="eyebrow">404</div>
                        <h1>That category isn't on the shelf yet.</h1>
                        <p className="description">
                            Try another category, or return home and pick a
                            subject.
                        </p>
                        <a
                            className="text-link"
                            href="/"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate(null);
                            }}
                        >
                            ← Back to Ton-o-Lore
                        </a>
                    </section>
                </main>
                <SiteFooter navigate={navigate} />
            </div>
        );
    }

    return (
        <div className="app theme-home" style={themeStyle}>
            <SiteHeader navigate={navigate} />
            <main className="page">
                <PathTrail
                    navigate={navigate}
                    crumbs={[
                        { label: "Home", href: "/", route: { type: "home" } },
                        { label: section.label }
                    ]}
                />

                <section className="hero category-page-hero">
                    <div className="eyebrow">Category</div>
                    <h1>{section.label}</h1>
                    <p className="description">{section.blurb}</p>
                </section>

                <section className="subjects">
                    <div className="section-heading">
                        <h2>
                            {section.genres?.length
                                ? "Browse by genre"
                                : "Subjects"}
                        </h2>
                        <p className="section-lede">
                            {section.genres?.length
                                ? section.id === "music"
                                    ? "Eight genre shelves — three deep-lore subjects in each."
                                    : section.id === "tabletop"
                                      ? "RPGs, wargames, and board games — pick a shelf, then a subject."
                                      : "Browse the shelves inside this category."
                                : "Larger graphs first — pick a franchise, then follow its strongest links."}
                        </p>
                    </div>

                    {section.genres?.length ? (
                        section.genres.map((genre) => {
                            const genreSubjects = section.subjects
                                .filter(
                                    (subject) =>
                                        (genre.subjectIds || []).includes(
                                            subject.id
                                        ) ||
                                        subject.musicGenre === genre.id
                                )
                                .sort(
                                    (a, b) =>
                                        (b.entity_count || 0) -
                                            (a.entity_count || 0) ||
                                        a.name.localeCompare(b.name)
                                );

                            if (!genreSubjects.length) {
                                return null;
                            }

                            return (
                                <div
                                    className="subject-category music-genre-shelf"
                                    key={genre.id}
                                    id={`genre-${genre.id}`}
                                >
                                    <h3>{genre.label}</h3>
                                    {genre.blurb ? (
                                        <p className="section-lede">
                                            {genre.blurb}
                                        </p>
                                    ) : null}
                                    <div className="connection-grid">
                                        {genreSubjects.map((subject) => (
                                            <SubjectCard
                                                key={subject.id}
                                                subject={subject}
                                                navigate={navigate}
                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="connection-grid">
                            {section.subjects
                                .slice()
                                .sort((a, b) => {
                                    const byCount =
                                        (b.entity_count || 0) -
                                        (a.entity_count || 0);
                                    if (byCount !== 0) {
                                        return byCount;
                                    }
                                    return a.name.localeCompare(b.name);
                                })
                                .map((subject) => (
                                    <SubjectCard
                                        key={subject.id}
                                        subject={subject}
                                        navigate={navigate}
                                    />
                                ))}
                        </div>
                    )}

                    <p className="subjects-fair-use muted">
                        Subject logos are low-resolution marks used under a
                        fair-use rationale for commentary and learning
                        identification only — not free or redistributable
                        artwork. Rights remain with their respective holders.
                    </p>
                </section>
            </main>
            <div className="page-actions page-actions-footer">
                <ReportErrorButton
                    pageUrl={`${siteOrigin()}/category/${categoryId}`}
                    pageTitle={section.label}
                    entityName={section.label}
                />
                <SubmitEditButton
                    pageUrl={`${siteOrigin()}/category/${categoryId}`}
                    pageTitle={section.label}
                    entityName={section.label}
                />
            </div>
            <SiteFooter navigate={navigate} />
        </div>
    );
}

function App() {
    const [route, setRoute] = useState(parseRoute);
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function navigate(next) {
        let nextRoute;

        if (!next) {
            nextRoute = { type: "home" };
        } else if (typeof next === "string") {
            const slug = next.replace(/^\/+|\/+$/g, "");
            nextRoute = isLegalSlug(slug)
                ? { type: "legal", slug: slug.toLowerCase() }
                : { type: "page", slug };
        } else {
            nextRoute = next;
        }

        window.history.pushState({}, "", routeToPath(nextRoute));
        setRoute(nextRoute);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        function handlePopState() {
            setRoute(parseRoute());
        }

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    useEffect(() => {
        if (route.type !== "page") {
            setPage(null);
            setLoading(false);
            setError(null);
            return undefined;
        }

        let cancelled = false;

        async function loadPage() {
            setLoading(true);
            setError(null);

            try {
                const data = await fetchPageBySlug(route.slug);

                if (!cancelled) {
                    setPage(data);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err.message);
                    setPage(null);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        loadPage();

        return () => {
            cancelled = true;
        };
    }, [route]);

    useEffect(() => {
        function handleLinks(event) {
            const link = event.target.closest("a");

            if (!link) {
                return;
            }

            const href = link.getAttribute("href");

            if (!href || !href.startsWith("/") || href.startsWith("//")) {
                return;
            }

            event.preventDefault();
            const path = href.replace(/^\/+|\/+$/g, "");

            if (!path) {
                navigate(null);
                return;
            }

            const categoryMatch = path.match(/^category\/([a-z0-9-]+)$/i);
            if (categoryMatch) {
                navigate({
                    type: "category",
                    categoryId: categoryMatch[1].toLowerCase()
                });
                return;
            }

            if (isLegalSlug(path)) {
                navigate({ type: "legal", slug: path.toLowerCase() });
                return;
            }

            navigate(path);
        }

        document.addEventListener("click", handleLinks);

        return () => {
            document.removeEventListener("click", handleLinks);
        };
    }, []);

    const origin = siteOrigin();
    const seo = useMemo(() => {
        if (route.type === "home") {
            return {
                title: "Ton-o-Lore | Lore encyclopedia for deep rabbit holes",
                description:
                    "Find people, places, and plot threads across One Piece, Star Wars, Marvel, DC, Pokémon, and more. Canonical lore pages built for search and discovery.",
                canonicalUrl: `${origin}/`,
                imageUrl: `${origin}/favicon.svg`,
                type: "website",
                robots:
                    "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Ton-o-Lore",
                    url: `${origin}/`,
                    potentialAction: {
                        "@type": "SearchAction",
                        target: `${origin}/?q={search_term_string}`,
                        "query-input": "required name=search_term_string"
                    }
                }
            };
        }

        if (route.type === "category") {
            const fallback =
                route.categoryId === "other"
                    ? OTHER_CATEGORY
                    : FALLBACK_CATEGORIES.find(
                          (entry) => entry.id === route.categoryId
                      );
            const label =
                fallback?.label ||
                route.categoryId
                    .split("-")
                    .map((part) => part[0].toUpperCase() + part.slice(1))
                    .join(" ");
            const description =
                fallback?.blurb ||
                `Browse ${label} subjects and lore maps on Ton-o-Lore.`;

            return {
                title: `${label} | Ton-o-Lore`,
                description,
                canonicalUrl: `${origin}${routeToPath(route)}`,
                type: "website",
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    name: label,
                    description,
                    url: `${origin}${routeToPath(route)}`,
                    isPartOf: {
                        "@type": "WebSite",
                        name: "Ton-o-Lore",
                        url: `${origin}/`
                    }
                }
            };
        }

        if (route.type === "legal") {
            const meta = LEGAL_ROUTES[route.slug];
            const title = `${meta?.title || "Legal"} | Ton-o-Lore`;
            const description =
                meta?.description ||
                "Legal and contact information for Ton-o-Lore.";
            return {
                title,
                description,
                canonicalUrl: `${origin}${routeToPath(route)}`,
                type: "website",
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    name: title,
                    description,
                    url: `${origin}${routeToPath(route)}`,
                    isPartOf: {
                        "@type": "WebSite",
                        name: "Ton-o-Lore",
                        url: `${origin}/`
                    }
                }
            };
        }

        if (!page) {
            return {
                title: loading
                    ? "Loading… | Ton-o-Lore"
                    : "Page not found | Ton-o-Lore",
                description:
                    "That path is not mapped yet on Ton-o-Lore. Try another connection or return home.",
                canonicalUrl: `${origin}/${route.slug}`,
                type: "website",
                robots: loading ? "noindex,follow" : "noindex,follow",
                jsonLd: null
            };
        }

        const title = shortenSerpTitle(
            page.page.meta_title || `${page.entity.name} | Ton-o-Lore`,
            page.entity.name,
            60
        );
        const description =
            page.page.meta_description ||
            page.entity.short_description ||
            page.entity.description ||
            `Canonical Ton-o-Lore page for ${page.entity.name}.`;
        const canonicalUrl =
            page.page.canonical_url || `${origin}${page.page.slug.startsWith("/") ? page.page.slug : `/${page.page.slug}`}`;

        const brand = page.subject || null;
        const crumbs = [{ label: "Home", href: "/" }];
        const primaryCategoryId = brand?.categories?.[0] || null;
        const primaryCategory =
            FALLBACK_CATEGORIES.find((entry) => entry.id === primaryCategoryId) ||
            (primaryCategoryId === OTHER_CATEGORY.id ? OTHER_CATEGORY : null);
        if (primaryCategory) {
            crumbs.push({
                label: primaryCategory.label,
                href: `/category/${primaryCategory.id}`
            });
        }
        if (brand?.name && brand?.path && page.page.slug !== brand.path) {
            crumbs.push({ label: brand.name, href: brand.path });
        }
        crumbs.push({ label: page.entity.name });

        const breadcrumb = buildBreadcrumbJsonLd(origin, crumbs);
        const aboutType = schemaTypeForEntity(page.entity);
        const webpage = {
            "@type": "WebPage",
            name: title,
            description,
            url: canonicalUrl,
            isPartOf: {
                "@type": "WebSite",
                name: "Ton-o-Lore",
                url: `${origin}/`
            },
            about: {
                "@type": aboutType,
                name: page.entity.name,
                alternateName: page.entity.aliases || [],
                description
            },
            ...(page.entity.image_url
                ? { primaryImageOfPage: page.entity.image_url }
                : {})
        };

        return {
            title,
            description: String(description).slice(0, 160),
            canonicalUrl,
            imageUrl: page.entity.image_url || `${origin}/favicon.svg`,
            type: "article",
            robots:
                "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
            jsonLd: {
                "@context": "https://schema.org",
                "@graph": breadcrumb ? [webpage, breadcrumb] : [webpage]
            }
        };
    }, [route, page, loading, origin]);

    useDocumentSeo(seo);

    if (route.type === "home") {
        return <Home navigate={navigate} />;
    }

    if (route.type === "category") {
        return (
            <CategoryPage
                categoryId={route.categoryId}
                navigate={navigate}
            />
        );
    }

    if (route.type === "legal") {
        const meta = LEGAL_ROUTES[route.slug];
        return (
            <div className="app theme-default">
                <SiteHeader navigate={navigate} />
                <LegalPage slug={route.slug} navigate={navigate} />
                <div className="page-actions page-actions-footer">
                    <ReportErrorButton
                        pageUrl={`${origin}${routeToPath(route)}`}
                        pageTitle={meta?.title || route.slug}
                        entityName={meta?.title || route.slug}
                    />
                    <SubmitEditButton
                        pageUrl={`${origin}${routeToPath(route)}`}
                        pageTitle={meta?.title || route.slug}
                        entityName={meta?.title || route.slug}
                    />
                </div>
                <SiteFooter navigate={navigate} />
            </div>
        );
    }

    const themeClass = page?.page?.theme
        ? `theme-${page.page.theme}`
        : "theme-default";

    if (loading) {
        return (
            <div className={`app ${themeClass}`}>
                <SiteHeader navigate={navigate} />
                <main className="page">
                    <section className="hero">
                        <div className="eyebrow">Loading</div>
                        <h1>Following the trail…</h1>
                    </section>
                </main>
                <SiteFooter navigate={navigate} />
            </div>
        );
    }

    if (error || !page) {
        return (
            <div className="app theme-default">
                <SiteHeader navigate={navigate} />
                <main className="page">
                    <section className="hero">
                        <div className="eyebrow">404</div>
                        <h1>That path isn't mapped yet.</h1>
                        <p className="description">
                            Try another connection, or return home and pick a
                            subject.
                        </p>
                        <a
                            className="text-link"
                            href="/"
                            onClick={(event) => {
                                event.preventDefault();
                                navigate(null);
                            }}
                        >
                            ← Back to Ton-o-Lore
                        </a>
                    </section>
                </main>
                <div className="page-actions page-actions-footer">
                    <ReportErrorButton
                        pageUrl={`${origin}${routeToPath(route)}`}
                        pageTitle="Page not found"
                        entityName={route.slug}
                    />
                    <SubmitEditButton
                        pageUrl={`${origin}${routeToPath(route)}`}
                        pageTitle="Page not found"
                        entityName={route.slug}
                    />
                </div>
                <SiteFooter navigate={navigate} />
            </div>
        );
    }

    const resolvedConnections = deriveConnectionsFromPage(page);
    const { featured, more, total } = rankConnections(resolvedConnections);
    const allConnections = [...featured, ...more];
    const connectionGroups = groupConnectionsByType(allConnections);
    const propertyHubs = derivePropertyHubs(page, allConnections);
    const generated = splitGeneratedContent(page.page.content);

    const copyright = page.copyright;
    const brand = page.subject || null;
    const isSubjectRoot =
        Boolean(brand?.path) && page.page.slug === brand.path;
    const primaryCategoryId = brand?.categories?.[0] || null;
    const primaryCategory =
        FALLBACK_CATEGORIES.find((entry) => entry.id === primaryCategoryId) ||
        (primaryCategoryId === OTHER_CATEGORY.id ? OTHER_CATEGORY : null);

    const trail = [
        { label: "Home", href: "/", route: { type: "home" } }
    ];

    if (primaryCategory) {
        trail.push({
            label: primaryCategory.label,
            href: `/category/${primaryCategory.id}`,
            route: {
                type: "category",
                categoryId: primaryCategory.id
            }
        });
    }

    if (brand?.name && brand?.path) {
        if (!isSubjectRoot) {
            trail.push({
                label: brand.name,
                href: brand.path,
                route: {
                    type: "page",
                    slug: brand.path.replace(/^\/+/, "")
                }
            });
        }
    }

    trail.push({ label: page.entity.name });

    return (
        <div className={`app ${themeClass}`}>
            <div className="theme-atmosphere" aria-hidden="true" />
            <SiteHeader navigate={navigate} brand={brand} />

            <main className="page page-flow">
                <PathTrail crumbs={trail} navigate={navigate} />

                <div className="page-actions">
                    <ReportErrorButton
                        pageUrl={
                            page.page.canonical_url ||
                            `${origin}${page.page.slug}`
                        }
                        pageTitle={
                            page.page.meta_title || page.entity.name
                        }
                        entityName={page.entity.name}
                    />
                    <SubmitEditButton
                        pageUrl={
                            page.page.canonical_url ||
                            `${origin}${page.page.slug}`
                        }
                        pageTitle={
                            page.page.meta_title || page.entity.name
                        }
                        entityName={page.entity.name}
                    />
                </div>

                {/* 1–2. Title, then picture */}
                <section className="hero page-flow-hero">
                    {brand?.logo?.url && isSubjectRoot ? (
                        <LogoMark
                            as="figure"
                            className="subject-hero-mark"
                            logo={brand.logo}
                            alt={brand.logo.alt || brand.name}
                            onError={hideBrokenImage}
                        >
                            {brand.logo.credit ? (
                                <figcaption>{brand.logo.credit}</figcaption>
                            ) : null}
                        </LogoMark>
                    ) : null}

                    <IpInfobox
                        title={page.entity.name}
                        entityType={entityTypeLabel(page.entity)}
                        aliases={page.entity.aliases}
                        franchise={brand?.name || page.entity.universe}
                        image={entityImageToMediaAsset(
                            page.entity,
                            page.page.overview ? "overview" : "content"
                        )}
                        onBrokenImage={hideBrokenImage}
                    />
                </section>

                {/* 3. Paragraphs */}
                <section className="page-flow-paragraphs" id="overview">
                    {page.page.overview ? (
                        <div
                            className="what-is"
                            dangerouslySetInnerHTML={{
                                __html: page.page.overview
                            }}
                        />
                    ) : (
                        <p className="description">
                            {page.entity.description}
                        </p>
                    )}
                </section>

                <PropertyHubsSection
                    hubs={propertyHubs}
                    navigate={navigate}
                    franchiseName={brand?.name || page.entity.name}
                />

                {/* 4. Picture links */}
                <PictureLinksSection
                    connections={allConnections}
                    navigate={navigate}
                    fromName={page.entity.name}
                />

                {/* 5. Connections */}
                <GroupedConnectionsSection
                    groups={connectionGroups}
                    total={total}
                    navigate={navigate}
                    fromName={page.entity.name}
                />

                {/* 6. Did you know */}
                {generated.didYouKnow ? (
                    <div
                        className="page-flow-did-you-know"
                        dangerouslySetInnerHTML={{
                            __html: generated.didYouKnow
                        }}
                    />
                ) : null}

                {/* 7. Everything else */}
                <SharedLoreSection
                    entityName={page.entity.name}
                    connections={allConnections}
                    navigate={navigate}
                />

                {generated.connectionNarrative ? (
                    <div
                        className="content"
                        dangerouslySetInnerHTML={{
                            __html: generated.connectionNarrative
                        }}
                    />
                ) : null}

                {generated.remainder ? (
                    <section
                        className="content"
                        dangerouslySetInnerHTML={{
                            __html: generated.remainder
                        }}
                    />
                ) : null}

                {generated.sources ? (
                    <div
                        className="page-flow-sources"
                        dangerouslySetInnerHTML={{
                            __html: generated.sources
                        }}
                    />
                ) : null}

                {page.rabbit_holes.length > 0 && (
                    <section className="rabbit-holes">
                        <div className="section-heading">
                            <h2>Guided rabbit holes</h2>
                            <p className="section-lede">
                                Longer trails curated for discovery.
                            </p>
                        </div>

                        <div className="rabbit-hole-grid">
                            {page.rabbit_holes.map((rabbitHole) => (
                                <div
                                    className="rabbit-link connection"
                                    key={rabbitHole.slug}
                                >
                                    <span className="connection-type">
                                        {rabbitHole.depth} steps
                                    </span>
                                    <h3>{rabbitHole.title}</h3>
                                    <p>
                                        Weirdness {rabbitHole.weirdness_score}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {copyright?.title && copyright?.body ? (
                    <section className="copyright-notice">
                        <strong>{copyright.title}</strong>
                        <p>{copyright.body}</p>
                    </section>
                ) : null}
            </main>
            <SiteFooter navigate={navigate} />
        </div>
    );
}

export default App;
