import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import "./musicSubjectThemes.css";
import "./tabletopCardThemes.css";
import "./expansionSubjectThemes.css";
import { categoryTheme } from "./categoryThemes";
import { connectionLoreBlurb } from "./connectionLore";
import { entityTypeLabel } from "./entityTypeLabel";
import { entityImageToMediaAsset, IpInfobox } from "./fairUse";
import {
    fetchPageBySlug,
    fetchSubjectsCatalog,
    searchEntities
} from "./staticData";
import { siteOrigin, useDocumentSeo } from "./useDocumentSeo";

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
        blurb: "Empires, wars, and trade routes with dense people-and-place graphs."
    },
    {
        id: "sports",
        label: "Sports",
        blurb: "Leagues, dynasties, and ritual competition with lasting fan lore."
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
        blurb: "Folk heroes and cycle tales that keep getting retold across media."
    },
    {
        id: "culinary",
        label: "Food & drink",
        blurb: "Cuisines, staples, and drink cultures with geographic and craft lore."
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

    return { type: "page", slug: path };
}

function routeToPath(route) {
    if (!route || route.type === "home") {
        return "/";
    }
    if (route.type === "category") {
        return `/category/${route.categoryId}`;
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

    const logoWrap = image.closest(".subject-card-logo, .subject-brand, .subject-hero-mark");
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

    useEffect(() => {
        const term = query.trim();

        if (term.length < 2) {
            setResults([]);
            setLoading(false);
            return undefined;
        }

        let cancelled = false;
        setLoading(true);

        const timer = setTimeout(async () => {
            try {
                const entities = await searchEntities(term, 8);

                if (!cancelled) {
                    setResults(entities);
                    setOpen(true);
                }
            } catch {
                if (!cancelled) {
                    setResults([]);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }, 180);

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
                        className="subject-brand"
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
                        <img
                            src={brand.logo.url}
                            alt={brand.logo.alt || brand.name}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={hideBrokenImage}
                        />
                        <span className="subject-brand-name">{brand.name}</span>
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

    return (
        <a
            className={`connection${featured ? " connection-featured" : ""}`}
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
            {connection.image_url ? (
                <img
                    className="connection-thumb"
                    src={connection.image_url}
                    alt=""
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={hideBrokenImage}
                />
            ) : null}

            <div className="connection-meta">
                <span className="connection-type">
                    {entityTypeLabel(connection)}
                </span>
                {showBadge ? (
                    <span className="connection-badge">Featured</span>
                ) : null}
            </div>

            <h3>{connection.name}</h3>

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
    return (
        <a
            className={`connection subject-card theme-preview-${subject.theme || subject.id}`}
            href={subject.path}
            onClick={(event) => {
                event.preventDefault();
                navigate({
                    type: "page",
                    slug: subject.slug || subject.id
                });
            }}
        >
            {subject.logo?.url ? (
                <div className="subject-card-logo">
                    <img
                        src={subject.logo.url}
                        alt={subject.logo.alt || `${subject.name} logo`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={hideBrokenImage}
                    />
                </div>
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
            <main className="page">
                <section className="hero hero-home">
                    <img
                        src="/assets/tonolore.jpg"
                        alt="Ton-o-Lore banner"
                        style={{
                            width: "100%",
                            maxWidth: "960px",
                            display: "block",
                            margin: "0 auto 1rem",
                            borderRadius: "18px",
                            border: "1px solid rgba(255,255,255,0.08)",
                            objectFit: "cover"
                        }}
                    />
                    <div className="eyebrow">Start here</div>
                    <h1 className="brand-hero">Ton-o-Lore</h1>
                    <p className="description">
                        Pick a medium, open a subject, then follow the strongest
                        connections — each page is another door into the lore.
                    </p>
                </section>

                <section className="subjects">
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
                                                            <div
                                                                className="category-collage-cell"
                                                                key={subject.id}
                                                            >
                                                                <img
                                                                    src={
                                                                        subject
                                                                            .logo
                                                                            .url
                                                                    }
                                                                    alt=""
                                                                    loading="lazy"
                                                                    referrerPolicy="no-referrer"
                                    onError={hideBrokenImage} />
                                                            </div>
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
                                Category collage logos are low-resolution marks
                                used under a fair-use rationale for commentary
                                and learning identification only — not free or
                                redistributable artwork. Rights remain with
                                their respective holders.
                            </p>
                        </>
                    )}
                </section>
            </main>
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
            nextRoute = {
                type: "page",
                slug: next.replace(/^\/+|\/+$/g, "")
            };
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
                title: "Ton-o-Lore — Living lore maps for deep rabbit holes",
                description:
                    "Explore canonical pages for people, places, events, and ideas across One Piece, Star Wars, Pokémon, Harry Potter, and more — built for long-tail discovery.",
                canonicalUrl: `${origin}/`,
                type: "website",
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Ton-o-Lore",
                    url: `${origin}/`
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

        if (!page) {
            return {
                title: loading
                    ? "Loading… | Ton-o-Lore"
                    : "Page not found | Ton-o-Lore",
                description:
                    "That path is not mapped yet on Ton-o-Lore. Try another connection or return home.",
                canonicalUrl: `${origin}/${route.slug}`,
                type: "website",
                jsonLd: null
            };
        }

        const title =
            page.page.meta_title || `${page.entity.name} | Ton-o-Lore`;
        const description =
            page.page.meta_description ||
            page.entity.short_description ||
            page.entity.description ||
            `Canonical Ton-o-Lore page for ${page.entity.name}.`;
        const canonicalUrl =
            page.page.canonical_url || `${origin}${page.page.slug}`;

        return {
            title,
            description,
            canonicalUrl,
            imageUrl: page.entity.image_url || null,
            type: "article",
            jsonLd: {
                "@context": "https://schema.org",
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
                    "@type": "Thing",
                    name: page.entity.name,
                    alternateName: page.entity.aliases || [],
                    description
                },
                ...(page.entity.image_url
                    ? { primaryImageOfPage: page.entity.image_url }
                    : {})
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
            </div>
        );
    }

    const { featured, more, total } = rankConnections(page.connections);

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

            <main className="page">
                <PathTrail crumbs={trail} navigate={navigate} />

                <section className="hero">
                    {brand?.logo?.url && isSubjectRoot ? (
                        <figure className="subject-hero-mark">
                            <img
                                src={brand.logo.url}
                                alt={brand.logo.alt || brand.name}
                                loading="lazy"
                                referrerPolicy="no-referrer"
                                onError={hideBrokenImage}
                            />
                            {brand.logo.credit ? (
                                <figcaption>{brand.logo.credit}</figcaption>
                            ) : null}
                        </figure>
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

                    {page.page.overview ? (
                        <div
                            id="overview"
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

                <SharedLoreSection
                    entityName={page.entity.name}
                    connections={[...featured, ...more]}
                    navigate={navigate}
                />

                <section className="connections">
                    <div className="section-heading">
                        <h2>Where to go next</h2>
                        <p className="section-lede">
                            {total
                                ? more.length
                                    ? `Start with the strongest links — ${featured.length} featured of ${total}.`
                                    : `${total} linked ${total === 1 ? "page" : "pages"} from here.`
                                : "No linked pages are mapped from here yet."}
                        </p>
                    </div>

                    {featured.length ? (
                        <div
                            className={`connection-grid${more.length ? " connection-grid-featured" : ""}`}
                        >
                            {featured.map((connection) => (
                                <ConnectionCard
                                    key={connection.id}
                                    connection={connection}
                                    navigate={navigate}
                                    featured={Boolean(more.length)}
                                    showBadge={Boolean(more.length)}
                                    fromName={page.entity.name}
                                />
                            ))}
                        </div>
                    ) : null}

                    {more.length ? (
                        <details className="more-connections">
                            <summary>
                                More connections ({more.length})
                            </summary>
                            <div className="connection-grid">
                                {more.map((connection) => (
                                    <ConnectionCard
                                        key={connection.id}
                                        connection={connection}
                                        navigate={navigate}
                                        fromName={page.entity.name}
                                    />
                                ))}
                            </div>
                        </details>
                    ) : null}
                </section>

                <section
                    className="content"
                    dangerouslySetInnerHTML={{
                        __html: page.page.content
                    }}
                />

                {copyright?.title && copyright?.body ? (
                    <section className="copyright-notice">
                        <strong>{copyright.title}</strong>
                        <p>{copyright.body}</p>
                    </section>
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
            </main>
        </div>
    );
}

export default App;
