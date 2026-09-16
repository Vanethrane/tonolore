import React from "react";

export const CONTACT_EMAIL = "vanethrane@gmail.com";
export const SITE_NAME = "Ton-o-Lore";
export const SITE_URL = "https://www.tonolore.com";

export const LEGAL_ROUTES = {
    privacy: {
        path: "/privacy",
        slug: "privacy",
        title: "Privacy Policy",
        description: "How Ton-o-Lore handles privacy, analytics, and personal information."
    },
    terms: {
        path: "/terms",
        slug: "terms",
        title: "Terms of Use",
        description: "Terms for using Ton-o-Lore as an independent educational encyclopedia."
    },
    copyright: {
        path: "/copyright",
        slug: "copyright",
        title: "Copyright & Fair Use",
        description: "Copyright notices, trademarks, and fair-use identification policy for Ton-o-Lore."
    },
    cookies: {
        path: "/cookies",
        slug: "cookies",
        title: "Cookie Notice",
        description: "Cookie and local storage practices on Ton-o-Lore."
    },
    contact: {
        path: "/contact",
        slug: "contact",
        title: "Contact",
        description: "Contact Ton-o-Lore / Vanethrane."
    }
};

export function isLegalSlug(slug) {
    return Boolean(LEGAL_ROUTES[String(slug || "").toLowerCase()]);
}

export function reportErrorMailto({ pageUrl, pageTitle, entityName }) {
    const subject = encodeURIComponent(
        `[Ton-o-Lore error report] ${entityName || pageTitle || "Page"}`
    );
    const body = encodeURIComponent(
        [
            "Thanks for helping improve Ton-o-Lore.",
            "",
            `Page title: ${pageTitle || entityName || "(unknown)"}`,
            `Page URL: ${pageUrl || "(unknown)"}`,
            "",
            "What looks wrong? (factual error, broken link, wrong image, typo, missing context, other)",
            "",
            "",
            "Correct information or suggested fix (optional):",
            "",
            "",
            "Your name (optional):"
        ].join("\n")
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

function LegalShell({ title, navigate, children }) {
    return (
        <main className="page legal-page">
            <section className="hero legal-hero">
                <div className="eyebrow">Legal</div>
                <h1>{title}</h1>
            </section>
            <article className="legal-prose">{children}</article>
            <p className="legal-back">
                <a
                    href="/"
                    onClick={(event) => {
                        event.preventDefault();
                        navigate(null);
                    }}
                >
                    ← Back to Ton-o-Lore
                </a>
            </p>
        </main>
    );
}

export function PrivacyPage({ navigate }) {
    return (
        <LegalShell title="Privacy Policy" navigate={navigate}>
            <p>
                <strong>Effective date:</strong> September 13, 2026
            </p>
            <p>
                {SITE_NAME} ({SITE_URL}) is an independent educational
                encyclopedia project. This policy explains what information we
                collect and how we use it.
            </p>
            <h2>Information we collect</h2>
            <ul>
                <li>
                    <strong>Usage data.</strong> Like most websites, our hosting
                    provider (currently GitHub Pages) and any CDN may collect
                    standard server logs such as IP address, browser type, and
                    requested URLs for security and reliability.
                </li>
                <li>
                    <strong>Local browser storage.</strong> The site may use
                    browser storage for ordinary front-end behavior (for
                    example remembering UI state). We do not use that storage to
                    sell personal profiles.
                </li>
                <li>
                    <strong>Messages you send us.</strong> If you email{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{" "}
                    (including via Contact or Report an error), we receive
                    whatever you include in that message.
                </li>
            </ul>
            <h2>What we do not do</h2>
            <ul>
                <li>We do not require an account to browse the encyclopedia.</li>
                <li>
                    We do not sell personal information to data brokers or
                    advertisers.
                </li>
                <li>
                    We do not intentionally collect sensitive personal data as
                    part of reading pages.
                </li>
            </ul>
            <h2>Cookies and similar tech</h2>
            <p>
                See our{" "}
                <a
                    href="/cookies"
                    onClick={(event) => {
                        event.preventDefault();
                        navigate({ type: "legal", slug: "cookies" });
                    }}
                >
                    Cookie Notice
                </a>{" "}
                for details on cookies and local storage.
            </p>
            <h2>Third parties</h2>
            <p>
                Pages may load identification thumbnails or assets from
                third-party hosts (for example Wikimedia / Fandom CDNs). Those
                providers have their own privacy practices. External links
                (Wikipedia, Fandom, etc.) are not controlled by {SITE_NAME}.
            </p>
            <h2>Children</h2>
            <p>
                {SITE_NAME} is a general-audience educational site. We do not
                knowingly solicit personal information from children.
            </p>
            <h2>Contact</h2>
            <p>
                Privacy questions:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
        </LegalShell>
    );
}

export function TermsPage({ navigate }) {
    return (
        <LegalShell title="Terms of Use" navigate={navigate}>
            <p>
                <strong>Effective date:</strong> September 13, 2026
            </p>
            <p>
                By using {SITE_NAME}, you agree to these terms. If you do not
                agree, please do not use the site.
            </p>
            <h2>What this site is</h2>
            <p>
                {SITE_NAME} is an unofficial, independent educational fan
                encyclopedia. It is not affiliated with, endorsed by, or
                sponsored by the rights holders of the franchises, brands,
                characters, or works described here.
            </p>
            <h2>Informational use only</h2>
            <p>
                Content is provided for commentary, education, and navigation of
                lore relationships. It may contain errors, incomplete entries,
                or outdated summaries. Do not rely on it as legal, medical,
                financial, or official franchise guidance.
            </p>
            <h2>Intellectual property</h2>
            <p>
                Names, marks, characters, logos, and artwork remain the property
                of their respective owners. Low-resolution identification images
                are used under a fair-use rationale for commentary and
                identification only — not free or redistributable artwork. See{" "}
                <a
                    href="/copyright"
                    onClick={(event) => {
                        event.preventDefault();
                        navigate({ type: "legal", slug: "copyright" });
                    }}
                >
                    Copyright &amp; Fair Use
                </a>
                .
            </p>
            <h2>Acceptable use</h2>
            <ul>
                <li>Do not scrape the site in a way that harms availability.</li>
                <li>
                    Do not misrepresent {SITE_NAME} as an official franchise
                    site.
                </li>
                <li>
                    Do not use site content to create or sell unauthorized
                    merchandise.
                </li>
            </ul>
            <h2>Disclaimer</h2>
            <p>
                The site is provided “as is,” without warranties of any kind. To
                the fullest extent permitted by law, {SITE_NAME} and its
                operator are not liable for damages arising from use of the
                site.
            </p>
            <h2>Contact</h2>
            <p>
                Questions:{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
        </LegalShell>
    );
}

export function CopyrightPage({ navigate }) {
    return (
        <LegalShell title="Copyright & Fair Use" navigate={navigate}>
            <p>
                <strong>Effective date:</strong> September 13, 2026
            </p>
            <h2>Ownership</h2>
            <p>
                All franchise names, characters, logos, story elements, and
                related trademarks/copyrights belong to their respective rights
                holders. {SITE_NAME} is an independent educational project and
                is not affiliated with those rights holders.
            </p>
            <h2>Original site materials</h2>
            <p>
                Unless otherwise noted, original prose organization, graph
                navigation, and site design for {SITE_NAME} are provided by the
                site operator for encyclopedia use. Third-party content remains
                with its owners.
            </p>
            <h2>Identification images</h2>
            <p>
                When images appear, they are low-resolution identification
                thumbnails used under a fair-use / fair-dealing rationale for
                commentary and identification of the subject of an encyclopedia
                entry. They are not offered as free, downloadable, or
                redistributable artwork, and are not intended for reprinting on
                merchandise.
            </p>
            <h2>DMCA / takedown requests</h2>
            <p>
                If you are a rights holder and believe material on {SITE_NAME}{" "}
                infringes your rights, email{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with:
            </p>
            <ul>
                <li>Your contact information and authority to act</li>
                <li>Description of the copyrighted work</li>
                <li>Exact URL(s) on {SITE_URL}</li>
                <li>A good-faith statement and signature (electronic is fine)</li>
            </ul>
            <p>
                We will review good-faith notices and remove or revise material
                as appropriate.
            </p>
            <h2>Report factual errors</h2>
            <p>
                Use the <strong>Report an error</strong> button on any lore page,
                or email {CONTACT_EMAIL} directly.
            </p>
        </LegalShell>
    );
}

export function CookiesPage({ navigate }) {
    return (
        <LegalShell title="Cookie Notice" navigate={navigate}>
            <p>
                <strong>Effective date:</strong> September 13, 2026
            </p>
            <p>
                {SITE_NAME} aims to keep tracking light. This notice explains
                cookies and similar technologies.
            </p>
            <h2>Essential / functional</h2>
            <p>
                The site may use local browser storage or similar mechanisms for
                ordinary front-end behavior. These are not used to build
                advertising profiles.
            </p>
            <h2>Hosting and security logs</h2>
            <p>
                Our host may process technical logs (IP, user agent, request
                path) needed to serve and protect the site. That processing is
                controlled by the hosting provider’s policies.
            </p>
            <h2>Third-party media</h2>
            <p>
                Identification images may be loaded from third-party CDNs. Those
                requests can involve the third party’s own cookies or logs.
            </p>
            <h2>Your choices</h2>
            <p>
                You can clear site data in your browser settings and block
                third-party cookies globally. Some images or features may not
                load if network requests are blocked.
            </p>
            <h2>Contact</h2>
            <p>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
        </LegalShell>
    );
}

export function ContactPage({ navigate }) {
    return (
        <LegalShell title="Contact" navigate={navigate}>
            <p>
                Reach the operator of {SITE_NAME} at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
            <h2>Good uses for email</h2>
            <ul>
                <li>Report factual errors or broken pages</li>
                <li>Copyright / DMCA notices</li>
                <li>Privacy questions</li>
                <li>Partnership or press inquiries</li>
            </ul>
            <p>
                <a
                    className="button-link"
                    href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Ton-o-Lore contact")}`}
                >
                    Email {CONTACT_EMAIL}
                </a>
            </p>
            <p className="muted">
                Please include the page URL when reporting an error. There is
                also a <strong>Report an error</strong> button on each lore
                page that pre-fills that information.
            </p>
        </LegalShell>
    );
}

export function LegalPage({ slug, navigate }) {
    switch (String(slug || "").toLowerCase()) {
        case "privacy":
            return <PrivacyPage navigate={navigate} />;
        case "terms":
            return <TermsPage navigate={navigate} />;
        case "copyright":
            return <CopyrightPage navigate={navigate} />;
        case "cookies":
            return <CookiesPage navigate={navigate} />;
        case "contact":
            return <ContactPage navigate={navigate} />;
        default:
            return null;
    }
}

export function SiteFooter({ navigate }) {
    const go = (slug) => (event) => {
        event.preventDefault();
        navigate({ type: "legal", slug });
    };

    return (
        <footer className="site-footer">
            <nav className="site-footer-nav" aria-label="Legal and contact">
                <a href="/privacy" onClick={go("privacy")}>
                    Privacy
                </a>
                <a href="/terms" onClick={go("terms")}>
                    Terms
                </a>
                <a href="/copyright" onClick={go("copyright")}>
                    Copyright
                </a>
                <a href="/cookies" onClick={go("cookies")}>
                    Cookies
                </a>
                <a href="/contact" onClick={go("contact")}>
                    Contact
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
            </nav>
            <p className="site-footer-note muted">
                {SITE_NAME} is an independent educational encyclopedia — not
                affiliated with the rights holders of the franchises described
                here.
            </p>
        </footer>
    );
}

export function ReportErrorButton({ pageUrl, pageTitle, entityName }) {
    const href = reportErrorMailto({ pageUrl, pageTitle, entityName });
    return (
        <a className="report-error-button page-action-button" href={href}>
            Report an error
        </a>
    );
}

function submitEditMailto({ pageUrl, pageTitle, entityName }) {
    const subject = encodeURIComponent(
        `[Ton-o-Lore edit suggestion] ${entityName || pageTitle || "Page"}`
    );
    const body = encodeURIComponent(
        [
            "Something missing? Here's additional information for review:",
            "",
            `Page: ${pageTitle || ""}`,
            `Entity: ${entityName || ""}`,
            `URL: ${pageUrl || ""}`,
            "",
            "Suggested addition / correction:",
            "",
            ""
        ].join("\n")
    );
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export function SubmitEditButton({ pageUrl, pageTitle, entityName }) {
    const [open, setOpen] = React.useState(false);
    const href = submitEditMailto({ pageUrl, pageTitle, entityName });

    const confirmAndMail = () => {
        setOpen(false);
        window.location.href = href;
    };

    return (
        <>
            <button
                type="button"
                className="submit-edit-button page-action-button"
                onClick={() => setOpen(true)}
            >
                Submit an edit
            </button>
            {open ? (
                <div
                    className="submit-edit-modal-backdrop"
                    role="presentation"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="submit-edit-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="submit-edit-title"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <h2 id="submit-edit-title">Submit an edit</h2>
                        <p>
                            Something missing? Submit additional information on
                            this topic for review, and we may add it to the
                            page!
                        </p>
                        <div className="submit-edit-modal-actions">
                            <button
                                type="button"
                                className="page-action-button page-action-button-ghost"
                                onClick={() => setOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="page-action-button"
                                onClick={confirmAndMail}
                            >
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
