/*
 * Foundation subject data — Asimov's psychohistory saga and the Apple series.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "fiction", extras = {}) {
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

/* ---------- Root / creators ---------- */

entity(
    "foundation-series",
    "Foundation",
    "topic",
    "Asimov's psychohistory, Terminus, and the long fall of Empire.",
    "Foundation is Isaac Asimov's saga of Hari Seldon's psychohistory: a science that predicts the Galactic Empire's fall and plants a Foundation on Terminus to shorten the dark age. The books run through Foundation, Foundation and Empire, and Second Foundation; Apple's series is a later sibling adaptation."
);

entity(
    "isaac-asimov",
    "Isaac Asimov",
    "person",
    "Author of the Foundation novels.",
    "Isaac Asimov wrote the Foundation stories from the 1940s onward, inventing psychohistory, Terminus, the Seldon Plan, and the later ties to his robot novels.",
    "documented"
);

entity(
    "david-s-goyer",
    "David S. Goyer",
    "person",
    "Developer of Apple's Foundation series.",
    "David S. Goyer developed the Apple TV+ Foundation series, opening Asimov's encyclopedia-and-crises structure into a long-form screen saga.",
    "documented"
);

entity(
    "apple-tv",
    "Apple TV+",
    "organization",
    "Streamer that produced the Foundation television series.",
    "Apple TV+ commissioned and released the Foundation series, a screen sibling to Asimov's novels rather than a page-for-page remake.",
    "documented"
);

/* ---------- Works ---------- */

entity(
    "foundation-novel",
    "Foundation (book)",
    "work",
    "1951 fix-up of the early Foundation stories.",
    "Foundation collects the opening stories: Seldon, Gaal Dornick, the Encyclopedia Galactica, Terminus, and the first crises Salvor Hardin and Hober Mallow meet.",
    "documented"
);

entity(
    "foundation-and-empire",
    "Foundation and Empire",
    "work",
    "1952 novel of Bel Riose and the Mule.",
    "Foundation and Empire follows the Empire's last general, Bel Riose, then the Mule — a mutant conqueror psychohistory did not see.",
    "documented"
);

entity(
    "second-foundation-novel",
    "Second Foundation",
    "work",
    "1953 novel that hunts the hidden Second Foundation.",
    "Second Foundation follows the search for Seldon's secret mentalic Foundation after the Mule, ending in the reveal around Star's End.",
    "documented"
);

entity(
    "foundation-apple",
    "Foundation (Apple series)",
    "work",
    "2021– television adaptation as a sibling work.",
    "The Apple series adapts Foundation as a screen sibling: Seldon, Gaal, Empire as repeating Cleons, and Demerzel, rather than a strict copy of the 1951 book.",
    "documented"
);

/* ---------- Groups / places / concepts ---------- */

entity(
    "first-foundation",
    "First Foundation",
    "organization",
    "Encyclopedia project on Terminus that becomes a power.",
    "The First Foundation begins as Seldon's band of encyclopedists on Terminus and becomes a trading, then political, force steering the Seldon Plan in the open."
);

entity(
    "second-foundation",
    "Second Foundation",
    "organization",
    "Hidden mentalic Foundation at Star's End.",
    "The Second Foundation is Seldon's secret counterpart — telepaths who guard the Plan from the shadows, later revealed near Trantor."
);

entity(
    "galactic-empire",
    "Galactic Empire",
    "organization",
    "Trantor-centered state whose fall Seldon predicts.",
    "The Galactic Empire rules millions of worlds from Trantor until decay, periphery wars, and Seldon's mathematics say a thirty-thousand-year dark age is coming."
);

entity(
    "terminus",
    "Terminus",
    "place",
    "Remote planet of the First Foundation and the Vault.",
    "Terminus is the resource-poor world at the Galaxy's edge where Seldon plants the Encyclopedia and the Time Vault that speaks at each crisis."
);

entity(
    "trantor",
    "Trantor",
    "place",
    "Metal-covered imperial capital.",
    "Trantor is the city-planet capital of Empire, a world under metal where Seldon stands trial and where later stories hunt Star's End."
);

entity(
    "time-vault",
    "Time Vault",
    "place",
    "Chamber on Terminus where Seldon appears at crises.",
    "The Time Vault is the Terminus chamber that projects Hari Seldon at predicted crises, confirming or alarming the Foundation as history diverges."
);

entity(
    "psychohistory",
    "Psychohistory",
    "concept",
    "Seldon's statistical science of mass human behavior.",
    "Psychohistory treats populations as gases: individuals vanish, but the fall of Empire and the path of recovery can be calculated if the masses stay unaware."
);

entity(
    "seldon-plan",
    "Seldon Plan",
    "concept",
    "Predicted path that shortens the dark age to a thousand years.",
    "The Seldon Plan is the sequence of crises meant to replace Empire with a Second Empire in a thousand years instead of thirty thousand — unless the Mule breaks it."
);

entity(
    "encyclopedia-galactica",
    "Encyclopedia Galactica",
    "object",
    "Great reference Seldon uses as cover for the Foundation.",
    "The Encyclopedia Galactica is the all-knowledge project that justifies settling Terminus — a cover story that becomes a real book the later stories quote."
);

entity(
    "first-crisis",
    "First Crisis",
    "event",
    "Terminus's first Seldon Crisis against the periphery kingdoms.",
    "The First Crisis is the moment neighboring Anacreon threatens Terminus and Salvor Hardin answers with politics instead of the Encyclopedia's quiet."
);

/* ---------- Characters ---------- */

entity(
    "hari-seldon",
    "Hari Seldon",
    "person",
    "Psychohistorian who founds the Foundations.",
    "Hari Seldon is the Trantor mathematician who proves Empire will fall, stands trial, and plants two Foundations — one visible on Terminus, one hidden."
);

entity(
    "gaal-dornick",
    "Gaal Dornick",
    "person",
    "Young mathematician who meets Seldon on Trantor.",
    "Gaal Dornick arrives from Synnax to work with Seldon, witnesses the trial, and becomes the reader's first eyes on psychohistory and Terminus."
);

entity(
    "salvor-hardin",
    "Salvor Hardin",
    "person",
    "First Mayor of Terminus, hero of the early crises.",
    "Salvor Hardin is the mayor who sees that Terminus's real weapon is science-as-religion and diplomacy, not the Encyclopedia's neutrality."
);

entity(
    "hober-mallow",
    "Hober Mallow",
    "person",
    "Master Trader who wins a later crisis with commerce.",
    "Hober Mallow is the trader-mayor who answers a later Seldon Crisis with trade rather than war, shifting the Foundation from priests to merchants."
);

entity(
    "the-mule",
    "The Mule",
    "person",
    "Mutant conqueror who breaks the Seldon Plan.",
    "The Mule is the emotional-control mutant who conquers Foundation worlds psychohistory could not predict, forcing the Second Foundation into the open."
);

entity(
    "bayta-darell",
    "Bayta Darell",
    "person",
    "Foundation woman who stops the Mule at the last turn.",
    "Bayta Darell travels with her husband into the Mule's war and is the one who sees through Magnifico before the mentalic conquest finishes."
);

entity(
    "bel-riose",
    "Bel Riose",
    "person",
    "Last great Imperial general who fights the Foundation.",
    "Bel Riose is the Empire's capable general in Foundation and Empire, too successful for a dying court, sent against the Foundation on the rim."
);

entity(
    "preem-palver",
    "Preem Palver",
    "person",
    "First Speaker of the Second Foundation.",
    "Preem Palver is the farmer-seeming First Speaker who steers the hidden Foundation after the Mule and the search that follows."
);

entity(
    "r-daneel-olivaw",
    "R. Daneel Olivaw",
    "person",
    "Immortal robot who later stands behind Empire.",
    "R. Daneel Olivaw is Asimov's robot from the earlier detective novels, later revealed as a long gardener of human history around Foundation."
);

entity(
    "cleon",
    "Cleon",
    "person",
    "Emperor name the Apple series clones as a dynasty.",
    "Cleon is the imperial name Asimov used for a late emperor; the Apple series turns Cleonic succession into cloned Brother Dawn, Day, and Dusk."
);

entity(
    "demerzel",
    "Demerzel",
    "person",
    "Imperial aide — Daneel's face in the later books and on Apple.",
    "Demerzel is the emperor's seemingly human minister who the later novels and the Apple series treat as Daneel wearing a courtier's name."
);

entity(
    "anacreon",
    "Anacreon",
    "place",
    "Periphery kingdom that first threatens Terminus.",
    "Anacreon is the nearby former Imperial prefecture that becomes a kingdom and the First Crisis military threat to the Foundation."
);

/* ---------- Relationships ---------- */

rel("isaac-asimov", "foundation-series", "created", "Isaac Asimov created the Foundation series.", 0.99, 0.99);
rel("isaac-asimov", "foundation-novel", "created", "Asimov wrote the stories collected as Foundation.", 0.99, 0.98);
rel("isaac-asimov", "foundation-and-empire", "created", "Asimov wrote Foundation and Empire.", 0.98, 0.96);
rel("isaac-asimov", "second-foundation-novel", "created", "Asimov wrote Second Foundation.", 0.98, 0.96);
rel("david-s-goyer", "foundation-apple", "created", "David S. Goyer developed the Apple Foundation series.", 0.97, 0.94);
rel("apple-tv", "foundation-apple", "produced", "Apple TV+ produced the Foundation series.", 0.97, 0.94);

rel("foundation-novel", "foundation-series", "part_of", "The 1951 book is the opening volume of Foundation.", 0.99, 0.98);
rel("foundation-and-empire", "foundation-series", "part_of", "Foundation and Empire is the second volume.", 0.98, 0.96);
rel("second-foundation-novel", "foundation-series", "part_of", "Second Foundation is the third volume of the original trilogy.", 0.98, 0.96);
rel("foundation-apple", "foundation-series", "part_of", "The Apple series is a screen sibling in the Foundation subject.", 0.95, 0.91);
rel("foundation-novel", "foundation-and-empire", "followed", "Foundation and Empire follows the first book.", 0.97, 0.94);
rel("foundation-and-empire", "second-foundation-novel", "followed", "Second Foundation follows the Mule's war.", 0.97, 0.94);
rel("foundation-novel", "foundation-apple", "adapted_into", "The books were adapted into the Apple series.", 0.94, 0.9);
rel("foundation-apple", "foundation-novel", "adapted_from", "The Apple series is adapted from Asimov's Foundation.", 0.94, 0.9);

rel("foundation-novel", "hari-seldon", "involved", "The first book opens with Hari Seldon and the trial.", 0.98, 0.96);
rel("foundation-novel", "gaal-dornick", "involved", "Gaal Dornick is the first book's viewpoint mathematician.", 0.96, 0.93);
rel("foundation-novel", "salvor-hardin", "involved", "Salvor Hardin carries the first book's Terminus crises.", 0.96, 0.93);
rel("foundation-and-empire", "the-mule", "involved", "The Mule is the conqueror of Foundation and Empire.", 0.98, 0.96);
rel("foundation-and-empire", "bel-riose", "involved", "Bel Riose is the Imperial general of the first half of that book.", 0.95, 0.91);
rel("second-foundation-novel", "preem-palver", "involved", "Preem Palver is a First Speaker in Second Foundation.", 0.95, 0.91);
rel("foundation-apple", "cleon", "involved", "The Apple series centers cloned Cleons as Empire.", 0.95, 0.91);
rel("foundation-apple", "demerzel", "involved", "Demerzel is a continuing figure of the Apple series.", 0.94, 0.9);

rel("hari-seldon", "first-foundation", "created", "Seldon founds the First Foundation on Terminus.", 0.99, 0.97);
rel("hari-seldon", "second-foundation", "created", "Seldon also plants the hidden Second Foundation.", 0.98, 0.96);
rel("hari-seldon", "psychohistory", "created", "Seldon develops psychohistory as a predictive science.", 0.99, 0.97);
rel("hari-seldon", "seldon-plan", "created", "Seldon designs the Plan that the Foundations serve.", 0.98, 0.96);
rel("gaal-dornick", "first-foundation", "member_of", "Gaal is drawn into Seldon's Foundation project.", 0.95, 0.91);
rel("salvor-hardin", "first-foundation", "leads", "Hardin leads Terminus as mayor through early crises.", 0.97, 0.94);
rel("hober-mallow", "first-foundation", "leads", "Mallow leads the Foundation as a trader-mayor.", 0.96, 0.93);
rel("bayta-darell", "first-foundation", "member_of", "Bayta is a daughter of the First Foundation.", 0.95, 0.91);
rel("preem-palver", "second-foundation", "leads", "Palver is First Speaker of the Second Foundation.", 0.96, 0.93);
rel("bel-riose", "galactic-empire", "member_of", "Riose is a general of the Galactic Empire.", 0.96, 0.93);
rel("cleon", "galactic-empire", "leads", "Cleon is an emperor of the Galactic Empire.", 0.95, 0.91);
rel("demerzel", "galactic-empire", "supports", "Demerzel serves as the emperor's lasting minister.", 0.95, 0.91);
rel("demerzel", "r-daneel-olivaw", "connected_to", "Demerzel is Daneel's imperial identity.", 0.94, 0.9);

rel("first-foundation", "terminus", "located_in", "The First Foundation is planted on Terminus.", 0.98, 0.96);
rel("second-foundation", "trantor", "located_in", "The Second Foundation hides at Star's End near Trantor.", 0.95, 0.91);
rel("galactic-empire", "trantor", "located_in", "Empire rules from Trantor.", 0.97, 0.94);
rel("time-vault", "terminus", "located_in", "The Time Vault stands on Terminus.", 0.97, 0.94);
rel("hari-seldon", "time-vault", "uses", "Seldon appears in the Vault at each predicted crisis.", 0.96, 0.93);
rel("first-foundation", "encyclopedia-galactica", "uses", "The Foundation begins under cover of the Encyclopedia Galactica.", 0.96, 0.93);
rel("first-crisis", "terminus", "occurred_at", "The First Crisis breaks on Terminus.", 0.96, 0.93);
rel("first-crisis", "salvor-hardin", "involved", "Hardin solves the First Crisis without firing.", 0.96, 0.93);
rel("anacreon", "first-crisis", "caused", "Anacreon's threat is the First Crisis.", 0.95, 0.91);
rel("the-mule", "seldon-plan", "opposed_by", "The Mule is the mutant the Seldon Plan did not include.", 0.97, 0.94);
rel("the-mule", "first-foundation", "opposed_by", "The Mule conquers First Foundation worlds.", 0.96, 0.93);
rel("psychohistory", "seldon-plan", "caused", "Psychohistory is what makes the Seldon Plan calculable.", 0.97, 0.94);
rel("hari-seldon", "trantor", "located_in", "Seldon's trial and court years happen on Trantor.", 0.95, 0.91);
rel("r-daneel-olivaw", "seldon-plan", "supports", "Daneel later shepherds the long human Plan around Foundation.", 0.9, 0.86);

module.exports = { entities, relationships };
