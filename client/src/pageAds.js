/**
 * Ad tags for every route except the homepage.
 * Mobile and desktop banners are mutually exclusive.
 * Popunder, the matching banner, and push run on each non-home page.
 */

const POPUNDER_SRC =
    "https://motionless-bus.com/b.3WVH0IP/3/pPv/bJmpVgJoZIDO0Z3INaTHAi3yN_DJYx5/L/TEcD1bMZDvcg0/NtzUMM";

const MOBILE_BANNER_SRC =
    "//massivesalad.com/bpXmV.sYdYGNlt0cYwW/cT/seQmf9gu/ZAUflIkOP/T/cF1/MLD-cV0KNLzNcPtVNjznU_wZNDzuQA4LMJQA";

const PC_BANNER_SRC =
    "//massivesalad.com/bnXEV.s/dpGNlv0lYDWucM/tegmh9bu/Z/UclHkzPXTDcf1eMRDPcH0TOpDRkftUNzzXUNwuNjzTQA5CM/wT";

const PUSH_SRC =
    "//massivesalad.com/bQXDVIs.d/GElQ0/YiWlcI/Je/mX9iu/ZHUllRk/P_TAcY1YM/Duc/1_M/DsUwtGNnzBUAwkNNzVUAwHOkQA";

function appendLoader(parent, src) {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.referrerPolicy = "no-referrer-when-downgrade";
    parent.appendChild(script);
}

export function syncPageAds(isHome) {
    document.getElementById("tonolore-page-ads")?.remove();

    if (isHome || typeof document === "undefined") {
        return;
    }

    const host = document.createElement("div");
    host.id = "tonolore-page-ads";
    document.body.appendChild(host);

    appendLoader(host, POPUNDER_SRC);

    const mobile = window.matchMedia("(max-width: 800px)").matches;
    appendLoader(host, mobile ? MOBILE_BANNER_SRC : PC_BANNER_SRC);
    appendLoader(host, PUSH_SRC);
}
