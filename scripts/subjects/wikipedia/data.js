/*
 * Wikipedia subject data — founders, policies, and the wiki that outgrew Nupedia.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "documented", extras = {}) {
    entities.push({
        slug,
        name,
        type,
        evidence,
        short_description,
        description,
        aliases: extras.aliases || [],
        parentSlug: extras.parentSlug || undefined
    });
}

function rel(from, to, relationship, title, strength = 0.95, discoveryScore = 0.9) {
    relationships.push([from, to, relationship, title, strength, discoveryScore]);
}

/* ---------- Root / people / precursors ---------- */

entity(
    "wikipedia",
    "Wikipedia",
    "topic",
    "The collaborative encyclopedia — policies, projects, and knowledge-graph culture.",
    "Wikipedia is the free encyclopedia anyone can edit, launched in 2001 as a feeder for Nupedia and then overtaking it. Its lore is policies, language editions, the Wikimedia Foundation, and a citation culture that treats verifiability as the product."
);

entity(
    "jimmy-wales",
    "Jimmy Wales",
    "person",
    "Co-founder who remained the public face after Nupedia folded.",
    "Jimmy Wales funded Nupedia through Bomis, opened Wikipedia in January 2001, and later chaired the Wikimedia Foundation as the project became a global reference."
);

entity(
    "larry-sanger",
    "Larry Sanger",
    "person",
    "Nupedia editor-in-chief who proposed the Wikipedia feeder wiki.",
    "Larry Sanger ran Nupedia's expert process, suggested using a wiki to draft articles faster, and left Wikipedia in 2002 as the community outgrew that original plan."
);

entity(
    "ward-cunningham",
    "Ward Cunningham",
    "person",
    "Programmer who invented the wiki and named it WikiWikiWeb.",
    "Ward Cunningham shipped the first wiki in 1995. Wikipedia borrowed the edit-anyone page model, not his Portland Pattern Repository's content."
);

entity(
    "nupedia",
    "Nupedia",
    "work",
    "Expert-reviewed free encyclopedia that Wikipedia was meant to feed.",
    "Nupedia (2000–03) used a seven-step expert review. It published only a few dozen finished articles while Wikipedia, started as its draft space, grew past it."
);

entity(
    "bomis",
    "Bomis",
    "organization",
    "Wales's web company that funded Nupedia and early Wikipedia.",
    "Bomis was the for-profit portal that paid for Nupedia's staff and servers until the nonprofit Wikimedia Foundation took over the encyclopedia."
);

entity(
    "wiki",
    "Wiki",
    "topic",
    "Editable website pattern Cunningham named from Hawaiian 'wiki wiki.'",
    "A wiki is a site whose pages readers can revise in place. Wikipedia is the largest application of that pattern, running on MediaWiki rather than Cunningham's original software."
);

entity(
    "mediawiki",
    "MediaWiki",
    "object",
    "PHP wiki engine written for Wikipedia and later other wikis.",
    "MediaWiki replaced UseModWiki as Wikipedia's software, adding namespaces, talk pages, and the template culture that still structures the site."
);

/* ---------- Editions / foundation / sister projects ---------- */

entity(
    "english-wikipedia",
    "English Wikipedia",
    "work",
    "First and largest language edition, launched 15 January 2001.",
    "English Wikipedia is the original edition and still the largest. Its policies, featured-article process, and arbitration culture were copied, then localized, by other languages."
);

entity(
    "wikimedia-foundation",
    "Wikimedia Foundation",
    "organization",
    "San Francisco nonprofit that hosts Wikipedia and sister projects.",
    "The Wikimedia Foundation (2003) holds the servers, trademarks, and fundraising for Wikipedia, Commons, Wikidata, and the other Wikimedia projects."
);

entity(
    "wikimedia-commons",
    "Wikimedia Commons",
    "work",
    "Shared media repository that Wikipedia editions draw images from.",
    "Wikimedia Commons is the free-file depot for photographs, diagrams, and scans reused across language Wikipedias under open licenses."
);

entity(
    "wikidata",
    "Wikidata",
    "work",
    "Structured-data sister project that feeds infoboxes and interlanguage links.",
    "Wikidata stores items and statements that language editions query, turning the encyclopedia's hidden graph into an explicit one."
);

entity(
    "cc-by-sa",
    "CC BY-SA",
    "object",
    "Creative Commons license that now covers Wikipedia text.",
    "Wikipedia text moved from GFDL to Creative Commons Attribution-ShareAlike, the license that lets forks exist if they credit and share alike."
);

/* ---------- Policies / culture ---------- */

entity(
    "five-pillars",
    "Five pillars",
    "topic",
    "Short statement of what Wikipedia is and is not.",
    "The Five pillars summarize the encyclopedia: NPOV, free content, no original research in the civility sense of conduct, and that Wikipedia has no firm rules — a doorway to the longer policy set."
);

entity(
    "neutral-point-of-view",
    "Neutral point of view",
    "topic",
    "Core policy that articles should fairly represent published views.",
    "Neutral point of view (NPOV) is the pillar that forbids advocacy pages. Editors are expected to describe disputes rather than join them, with weight matching reliable sources."
);

entity(
    "no-original-research",
    "No original research",
    "topic",
    "Policy against unpublished synthesis and first-hand claims.",
    "No original research (NOR) keeps Wikipedia from being a journal. Claims need published, reliable sources, not an editor's unpublished experiment or novel argument."
);

entity(
    "verifiability",
    "Verifiability",
    "topic",
    "Policy that readers must be able to check material in reliable sources.",
    "Verifiability, not truth as personal knowledge, is the test. The [citation needed] tag is the vernacular of that rule."
);

entity(
    "citation-culture",
    "Citation culture",
    "topic",
    "Habit of footnoting and tagging unsourced lines as a civic practice.",
    "Wikipedia's citation culture — templates, citation-needed tags, and featured-article source reviews — made referencing a visible part of the page, not just an academic appendix."
);

entity(
    "reliable-sources",
    "Reliable sources",
    "topic",
    "Guideline for what counts as a usable published authority.",
    "Reliable sources are the newspapers, books, and journals Wikipedia prefers. The guideline is fought over article by article and underpins both NPOV and verifiability."
);

entity(
    "notability",
    "Notability",
    "topic",
    "Threshold of significant coverage that keeps articles from being deleted.",
    "Notability is the inclusion test: a topic usually needs multiple independent reliable sources. Deletion debates are often notability debates."
);

entity(
    "featured-article",
    "Featured article",
    "topic",
    "Highest community content rating, reviewed for prose, sources, and NPOV.",
    "A featured article has passed a public review against a style and sourcing checklist. The bronze star in the corner is English Wikipedia's prestige mark."
);

entity(
    "arbitration-committee",
    "Arbitration Committee",
    "organization",
    "Elected panel that issues binding decisions on English Wikipedia conduct.",
    "The Arbitration Committee (ArbCom) is English Wikipedia's last-stop court for editor disputes after administrators and the community cannot settle them."
);

entity(
    "wikipedian",
    "Wikipedian",
    "topic",
    "Volunteer editor in the Wikipedia community.",
    "Wikipedians write, revert, and argue under user names. The community, not the Foundation staff, still makes most content decisions."
);

entity(
    "usemodwiki",
    "UseModWiki",
    "object",
    "Perl wiki that ran Wikipedia's first months.",
    "UseModWiki was the software of the first Wikipedia pages, later migrated into MediaWiki once the English edition outgrew it."
);

entity(
    "deletionism",
    "Deletionism and inclusionism",
    "topic",
    "Long argument over how high the notability bar should sit.",
    "Deletionists favor strict notability and pruning; inclusionists favor keeping sourced stubs. The split is a standing culture war inside the same Five pillars."
);

entity(
    "talk-page",
    "Talk page",
    "object",
    "Discussion namespace attached to every article and user.",
    "Talk pages are where Wikipedians negotiate wording, sources, and disputes beside the article, the backstage of NPOV."
);

entity(
    "interlanguage-links",
    "Interlanguage links",
    "object",
    "Sidebar links from one language edition to another, now via Wikidata.",
    "Interlanguage links once lived as manual wiki text; Wikidata now holds the sitelinks that connect the same topic across editions."
);

/* ---------- Relationships ---------- */

rel("jimmy-wales", "wikipedia", "created", "Jimmy Wales co-founded Wikipedia and remained its most public advocate.", 0.98, 0.96);
rel("larry-sanger", "wikipedia", "created", "Larry Sanger proposed the wiki feeder and named Wikipedia.", 0.97, 0.95);
rel("larry-sanger", "nupedia", "leads", "Sanger was editor-in-chief of Nupedia.", 0.97, 0.94);
rel("jimmy-wales", "nupedia", "created", "Wales funded Nupedia through Bomis as a free expert encyclopedia.", 0.96, 0.93);
rel("nupedia", "wikipedia", "preceded", "Nupedia preceded Wikipedia and was meant to receive its drafts.", 0.97, 0.94);
rel("wikipedia", "nupedia", "followed", "Wikipedia overtook and outlived the Nupedia review process.", 0.96, 0.93);
rel("bomis", "nupedia", "produced", "Bomis paid for Nupedia's early staff and hosting.", 0.95, 0.91);
rel("bomis", "wikipedia", "produced", "Bomis also hosted Wikipedia until the Wikimedia Foundation formed.", 0.94, 0.9);

rel("ward-cunningham", "wiki", "created", "Ward Cunningham invented the wiki and the first WikiWikiWeb.", 0.99, 0.97);
rel("wiki", "wikipedia", "inspired", "The wiki pattern is the editing model Wikipedia scaled to an encyclopedia.", 0.97, 0.94);
rel("usemodwiki", "wikipedia", "preceded", "UseModWiki ran Wikipedia before MediaWiki replaced it.", 0.95, 0.91);
rel("mediawiki", "usemodwiki", "followed", "MediaWiki followed UseModWiki as Wikipedia's engine.", 0.96, 0.93);
rel("mediawiki", "wikipedia", "supports", "MediaWiki is the software that still serves Wikipedia pages.", 0.97, 0.94);

rel("english-wikipedia", "wikipedia", "part_of", "English Wikipedia is the original language edition of the project.", 0.99, 0.98);
rel("wikimedia-foundation", "wikipedia", "produced", "The Wikimedia Foundation hosts and fundraises for Wikipedia.", 0.97, 0.94);
rel("jimmy-wales", "wikimedia-foundation", "created", "Wales helped establish the Wikimedia Foundation in 2003.", 0.96, 0.93);
rel("wikimedia-commons", "wikimedia-foundation", "part_of", "Commons is a Wikimedia Foundation sister project.", 0.95, 0.91);
rel("wikidata", "wikimedia-foundation", "part_of", "Wikidata is a Wikimedia Foundation sister project.", 0.95, 0.91);
rel("wikimedia-commons", "english-wikipedia", "supports", "Commons supplies freely licensed files to English Wikipedia articles.", 0.94, 0.9);
rel("wikidata", "interlanguage-links", "produced", "Wikidata now stores the sitelinks that connect language editions.", 0.95, 0.91);
rel("cc-by-sa", "wikipedia", "supports", "Wikipedia text is licensed under CC BY-SA so others can reuse it.", 0.96, 0.93);

rel("five-pillars", "english-wikipedia", "part_of", "The Five pillars are English Wikipedia's short statement of principle.", 0.96, 0.93);
rel("neutral-point-of-view", "five-pillars", "part_of", "Neutral point of view is the first of the Five pillars.", 0.97, 0.94);
rel("no-original-research", "five-pillars", "part_of", "No original research is enforced as a core content policy beside the pillars.", 0.95, 0.91);
rel("verifiability", "citation-culture", "caused", "The verifiability policy produced Wikipedia's visible citation-needed culture.", 0.96, 0.93);
rel("reliable-sources", "verifiability", "supports", "Reliable sources are what verifiability asks editors to cite.", 0.96, 0.93);
rel("citation-culture", "featured-article", "supports", "Featured-article review demands the dense sourcing citation culture prizes.", 0.94, 0.9);
rel("notability", "deletionism", "caused", "Notability guidelines are the usual ground of deletionist and inclusionist fights.", 0.94, 0.9);
rel("featured-article", "english-wikipedia", "part_of", "Featured articles are English Wikipedia's highest content designation.", 0.95, 0.91);
rel("arbitration-committee", "english-wikipedia", "part_of", "ArbCom is English Wikipedia's binding conduct panel.", 0.95, 0.91);
rel("wikipedian", "wikipedia", "member_of", "Wikipedians are the volunteer editors who write the encyclopedia.", 0.97, 0.94);
rel("talk-page", "wikipedian", "uses", "Wikipedians negotiate article text on talk pages.", 0.94, 0.9);
rel("neutral-point-of-view", "talk-page", "occurred_at", "NPOV disputes are argued on talk pages before they reach administrators.", 0.92, 0.88);

module.exports = { entities, relationships };
