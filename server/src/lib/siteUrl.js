function getSiteUrl(req) {
    const fromEnv = String(process.env.SITE_URL || "").replace(/\/+$/, "");

    if (fromEnv) {
        return fromEnv;
    }

    if (req) {
        const host = req.get("x-forwarded-host") || req.get("host");
        const proto =
            req.get("x-forwarded-proto") ||
            (req.secure ? "https" : "http");

        if (host) {
            return `${proto}://${host}`.replace(/\/+$/, "");
        }
    }

    return "http://localhost:5173";
}

function absoluteCanonical(siteUrl, slugPath) {
    const path = String(slugPath || "/").startsWith("/")
        ? slugPath
        : `/${slugPath}`;

    return `${siteUrl}${path}`;
}

module.exports = {
    getSiteUrl,
    absoluteCanonical
};
