import React, { useEffect, useMemo, useState } from "react";
import "./App.css";
import { siteOrigin, useDocumentSeo } from "./useDocumentSeo";

const API =
    import.meta.env.VITE_API_URL ||
    (import.meta.env.PROD ? "/api" : "http://localhost:3001/api");

function getSlug() {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
    return path || null;
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
                const response = await fetch(
                    `${API}/entities?search=${encodeURIComponent(term)}&limit=8`
                );

                if (!response.ok) {
                    throw new Error("Search failed");
                }

                const data = await response.json();

                if (!cancelled) {
                    setResults(data.entities || []);
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
                                        {entity.type}
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
                        />
                        <span className="subject-brand-name">{brand.name}</span>
                    </a>
                ) : null}
            </div>

            <SiteSearch navigate={navigate} />

            <p className="tagline">Follow the connections.</p>
        </header>
    );
}

function Home({ navigate }) {
    const [subjects, setSubjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            try {
                const response = await fetch(`${API}/pages/subjects`);
                if (!response.ok) {
                    throw new Error("Failed to load subjects");
                }
                const data = await response.json();
                if (!cancelled) {
                    setSubjects(data.subjects || []);
                    setCategories(data.categories || []);
                }
            } catch {
                if (!cancelled) {
                    setSubjects([
                        {
                            id: "one-piece",
                            name: "One Piece",
                            path: "/one-piece",
                            entity_count: null,
                            categories: ["anime"]
                        }
                    ]);
                    setCategories([{ id: "anime", label: "Anime" }]);
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

    const categorized = useMemo(() => {
        const catalog =
            categories.length > 0
                ? categories
                : [
                      { id: "anime", label: "Anime" },
                      { id: "video-games", label: "Video games" },
                      { id: "books", label: "Books & literature" },
                      { id: "movies", label: "Movies" },
                      { id: "television", label: "Television" },
                      { id: "comics", label: "Comics & manga" },
                      { id: "tabletop", label: "Tabletop" }
                  ];

        const sections = catalog
            .map((category) => ({
                ...category,
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
        const other = subjects.filter(
            (subject) => !categorizedIds.has(subject.id)
        );

        if (other.length) {
            sections.push({
                id: "other",
                label: "Other",
                subjects: other
            });
        }

        return sections;
    }, [categories, subjects]);

    function renderSubjectCard(subject, key) {
        return (
            <a
                className={`connection subject-card theme-preview-${subject.theme || subject.id}`}
                href={subject.path}
                key={key || subject.id}
                onClick={(event) => {
                    event.preventDefault();
                    navigate(subject.slug || subject.id);
                }}
            >
                {subject.logo?.url ? (
                    <div className="subject-card-logo">
                        <img
                            src={subject.logo.url}
                            alt={
                                subject.logo.alt || `${subject.name} logo`
                            }
                            loading="lazy"
                            referrerPolicy="no-referrer"
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

    return (
        <div className="app theme-home">
            <SiteHeader navigate={navigate} />
            <main className="page">
                <section className="hero hero-home">
                    <div className="eyebrow">Start here</div>
                    <h1 className="brand-hero">Ton-o-Lore</h1>
                    <p className="description">
                        A living map of people, places, events, and ideas —
                        built so every page opens another path.
                    </p>
                </section>

                <section className="subjects">
                    <h2>Browse by category</h2>
                    {loading ? (
                        <p className="muted">Loading subjects…</p>
                    ) : (
                        <>
                            {categorized.map((section) => (
                                <div
                                    className="subject-category"
                                    key={section.id}
                                >
                                    <h3>{section.label}</h3>
                                    <div className="connection-grid">
                                        {section.subjects.map((subject) =>
                                            renderSubjectCard(
                                                subject,
                                                `${section.id}-${subject.id}`
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                            <p className="subjects-fair-use muted">
                                Subject logos are low-resolution marks used
                                under a fair-use rationale for commentary and
                                learning identification only — not free or
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

function App() {
    const [slug, setSlug] = useState(getSlug());
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    function navigate(nextSlug) {
        const path = nextSlug ? `/${nextSlug}` : "/";
        window.history.pushState({}, "", path);
        setSlug(nextSlug || null);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        const handlePopState = () => {
            setSlug(getSlug());
        };

        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, []);

    useEffect(() => {
        if (!slug) {
            setPage(null);
            return;
        }

        let cancelled = false;

        async function loadPage() {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${API}/pages/${slug}`);

                if (!response.ok) {
                    throw new Error("Page not found");
                }

                const data = await response.json();

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
    }, [slug]);

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
            const nextSlug = href.replace(/^\/+|\/+$/g, "");
            navigate(nextSlug || null);
        }

        document.addEventListener("click", handleLinks);

        return () => {
            document.removeEventListener("click", handleLinks);
        };
    }, []);

    const origin = siteOrigin();
    const seo = useMemo(() => {
        if (!slug) {
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

        if (!page) {
            return {
                title: loading
                    ? "Loading… | Ton-o-Lore"
                    : "Page not found | Ton-o-Lore",
                description:
                    "That path is not mapped yet on Ton-o-Lore. Try another connection or return home.",
                canonicalUrl: `${origin}/${slug}`,
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
    }, [slug, page, loading, origin]);

    useDocumentSeo(seo);

    if (!slug) {
        return <Home navigate={navigate} />;
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

    const seen = new Set();
    const graphConnections = page.connections.filter((connection) => {
        if (seen.has(connection.entity_id)) {
            return false;
        }
        seen.add(connection.entity_id);
        return true;
    });

    const copyright = page.copyright;
    const brand = page.subject || null;
    const isSubjectRoot =
        Boolean(brand?.path) &&
        page.page.slug === brand.path;

    return (
        <div className={`app ${themeClass}`}>
            <div className="theme-atmosphere" aria-hidden="true" />
            <SiteHeader navigate={navigate} brand={brand} />

            <main className="page">
                <section className="hero">
                    {brand?.logo?.url && isSubjectRoot ? (
                        <figure className="subject-hero-mark">
                            <img
                                src={brand.logo.url}
                                alt={brand.logo.alt || brand.name}
                                loading="lazy"
                                referrerPolicy="no-referrer"
                            />
                            {brand.logo.credit ? (
                                <figcaption>{brand.logo.credit}</figcaption>
                            ) : null}
                        </figure>
                    ) : null}
                    <div className="eyebrow">{page.entity.type}</div>
                    <h1>{page.entity.name}</h1>
                    {page.entity.aliases?.length ? (
                        <p className="aliases muted">
                            Also known as {page.entity.aliases.join(", ")}
                        </p>
                    ) : null}

                    {page.entity.image_url ? (
                        <figure className="entity-art">
                            <img
                                src={page.entity.image_url}
                                alt={
                                    page.entity.image_alt ||
                                    page.entity.name
                                }
                                loading="lazy"
                                referrerPolicy="no-referrer"
                            />
                            <figcaption>
                                {page.entity.image_license === "fair_use" ? (
                                    <span>
                                        Fair-use identification thumbnail
                                        — not free artwork.
                                    </span>
                                ) : null}
                                {page.entity.image_credit ? (
                                    <span>{page.entity.image_credit}</span>
                                ) : null}
                                {page.entity.image_source ? (
                                    <span>
                                        <a
                                            href={page.entity.image_source}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Source
                                        </a>
                                    </span>
                                ) : null}
                            </figcaption>
                        </figure>
                    ) : null}

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

                <section className="connections">
                    <h2>Where the rabbit hole goes next</h2>

                    <div className="connection-grid">
                        {graphConnections.map((connection) => (
                            <a
                                className="connection"
                                href={connection.path}
                                key={connection.id}
                            >
                                {connection.image_url ? (
                                    <img
                                        className="connection-thumb"
                                        src={connection.image_url}
                                        alt=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer"
                                    />
                                ) : null}

                                <span className="connection-type">
                                    {relationshipLabel(connection)}
                                </span>

                                <h3>{connection.name}</h3>

                                <p>
                                    {connection.title ||
                                        connection.short_description}
                                </p>

                                <span className="follow">Follow ?</span>
                            </a>
                        ))}
                    </div>
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
                        <h2>Guided rabbit holes</h2>

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
