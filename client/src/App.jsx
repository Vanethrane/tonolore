import React, { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:3001/api";

function getSlug() {
    const path = window.location.pathname.replace(/^\/+|\/+$/g, "");
    return path || null;
}

function relationshipLabel(connection) {
    const r = connection.relationship;
    const incoming = connection.direction === "incoming";

    const labels = {
        created_by: {
            outgoing: "Created By",
            incoming: "Created"
        },
        created: {
            outgoing: "Created",
            incoming: "Created By"
        },
        serialized_in: {
            outgoing: "Serialized In",
            incoming: "Serializes"
        },
        publishes: {
            outgoing: "Publishes",
            incoming: "Published By"
        },
        published: {
            outgoing: "Published By",
            incoming: "Publishes"
        },
        adapted_into: {
            outgoing: "Adapted Into",
            incoming: "Adaptation Of"
        },
        adapted_from: {
            outgoing: "Adapted From",
            incoming: "Adaptation Of"
        },
        produced: {
            outgoing: "Produced",
            incoming: "Produced By"
        },
        preceded: {
            outgoing: "Preceded",
            incoming: "Preceded By"
        },
        followed: {
            outgoing: "Followed",
            incoming: "Followed By"
        },
        caused: {
            outgoing: "Caused",
            incoming: "Caused By"
        },
        part_of: {
            outgoing: "Part Of",
            incoming: "Contains"
        },
        seeks: {
            outgoing: "Seeks",
            incoming: "Sought By"
        },
        found: {
            outgoing: "Found",
            incoming: "Found By"
        },
        reached: {
            outgoing: "Reached",
            incoming: "Reached By"
        },
        suppressed: {
            outgoing: "Suppressed",
            incoming: "Suppressed By"
        },
        records: {
            outgoing: "Records",
            incoming: "Recorded By"
        },
        can_read: {
            outgoing: "Can Read",
            incoming: "Read By"
        },
        member_of: {
            outgoing: "Member Of",
            incoming: "Has Member"
        },
        leads: {
            outgoing: "Leads",
            incoming: "Led By"
        },
        uses: {
            outgoing: "Uses",
            incoming: "Used By"
        },
        contains: {
            outgoing: "Contains",
            incoming: "Contained By"
        },
        opposed_by: {
            outgoing: "Opposed By",
            incoming: "Opposes"
        },
        motivated_by: {
            outgoing: "Motivated By",
            incoming: "Motivates"
        },
        connected_to: {
            outgoing: "Connected To",
            incoming: "Connected To"
        },
        related_to: {
            outgoing: "Related To",
            incoming: "Related To"
        },
        supports: {
            outgoing: "Supports",
            incoming: "Supported By"
        },
        contradicts: {
            outgoing: "Contradicts",
            incoming: "Contradicted By"
        },
        influenced: {
            outgoing: "Influenced",
            incoming: "Influenced By"
        },
        inspired: {
            outgoing: "Inspired",
            incoming: "Inspired By"
        }
    };

    return labels[r]?.[incoming ? "incoming" : "outgoing"]
        || r.replace(/_/g, " ");
}

function Home({ navigate }) {
    return (
        <main className="page">
            <div className="tonolore-art" aria-label="Tonolore original pirate-adventure artwork"></div>
            <section className="hero">
                <div className="eyebrow">Start Here</div>
                <h1>Where the rabbit hole begins.</h1>
                <p className="description">
                    Tonolore connects people, places, events, ideas, mysteries,
                    technologies, and stories into a web of increasingly strange
                    connections.
                </p>

                <a
                    className="connection"
                    href="/one-piece"
                    onClick={(event) => {
                        event.preventDefault();
                        navigate("one-piece");
                    }}
                >
                    <span className="connection-type">TOPIC</span>
                    <h3>One Piece</h3>
                    <p>
                        Start with a pirate manga and see how far the connections go.
                    </p>
                    <span className="follow">Enter the rabbit hole →</span>
                </a>
            </section>
        </main>
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

            if (!href || !href.startsWith("/")) {
                return;
            }

            if (href.startsWith("//")) {
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

    if (!slug) {
        return <Home navigate={navigate} />;
    }

    if (loading) {
        return (
            <main className="page">
                <section className="hero">
                    <div className="eyebrow">Loading</div>
                    <h1>Following the trail...</h1>
                </section>
            </main>
        );
    }

    if (error || !page) {
        return (
            <main className="page">
                <section className="hero">
                    <div className="eyebrow">404</div>
                    <h1>Rabbit hole not found.</h1>
                    <p className="description">
                        That connection hasn't been mapped yet.
                    </p>
                </section>
            </main>
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

    return (
        <main className="page">

            {/* TITLE + WHAT IS THIS */}
            <section className="hero">
                <div className="eyebrow">{page.entity.type}</div>
                <h1>{page.entity.name}</h1>

                <div
                    className="what-is"
                    dangerouslySetInnerHTML={{
                        __html: page.page.overview
                    }}
                />
            </section>

            {/* IMMEDIATE GRAPH */}
            <section className="connections">
                <h2>Where the rabbit hole goes next</h2>

                <div className="connection-grid">
                    {graphConnections.map((connection) => (
                        <a
                            className="connection"
                            href={`/${connection.slug}`}
                            key={connection.id}
                        >
                            <span className="connection-type">
                                {relationshipLabel(connection)}
                            </span>

                            <h3>{connection.name}</h3>

                            <p>
                                {connection.title ||
                                    connection.short_description}
                            </p>

                            <span className="follow">
                                Follow →
                            </span>
                        </a>
                    ))}
                </div>
            </section>

            {/* EXPANDABLE INFORMATION */}
            <section
                className="content"
                dangerouslySetInnerHTML={{
                    __html: page.page.content
                }}
            />

            {/* RABBIT HOLE JOURNEYS */}
            {page.rabbit_holes.length > 0 && (
                <section className="rabbit-holes">
                    <h2>Rabbit holes</h2>

                    <div className="rabbit-hole-grid">
                        {page.rabbit_holes.map((rabbitHole) => (
                            <a
                                className="rabbit-link"
                                href={`/rabbit-hole/${rabbitHole.slug}`}
                                key={rabbitHole.slug}
                            >
                                <span>{rabbitHole.depth} steps</span>
                                <strong>{rabbitHole.title}</strong>
                                <small>
                                    Weirdness {rabbitHole.weirdness_score}
                                </small>
                            </a>
                        ))}
                    </div>
                </section>
            )}

        </main>
    );
}

export default App;

