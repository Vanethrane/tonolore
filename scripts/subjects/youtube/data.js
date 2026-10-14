/*
 * YouTube subject data — founders, genres, and the platform lore of algorithmic fame.
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

/* ---------- Root / founders / acquisition ---------- */

entity(
    "youtube",
    "YouTube",
    "topic",
    "Creator economies, genres, and platform lore from vlogs to algorithmic fame.",
    "YouTube launched in 2005 as a video-sharing site, was bought by Google in 2006, and became the default place to upload, monetize, and recommend moving images. Its lore is founders, AdSense money, the Partner Program, and the genres that grew up on the watch page."
);

entity(
    "chad-hurley",
    "Chad Hurley",
    "person",
    "Co-founder and first CEO, the PayPal alum who designed the early brand.",
    "Chad Hurley co-founded YouTube with Steve Chen and Jawed Karim, served as CEO through the Google sale, and remained the public designer of the play-button logo."
);

entity(
    "steve-chen",
    "Steve Chen",
    "person",
    "Co-founder and first chief technology officer.",
    "Steve Chen built the early YouTube stack with Karim and Hurley after PayPal, then stayed through the Google acquisition as the site scaled."
);

entity(
    "jawed-karim",
    "Jawed Karim",
    "person",
    "Co-founder who uploaded the first public YouTube video.",
    "Jawed Karim registered the site, posted Me at the zoo, and left day-to-day work for graduate school while remaining a named founder in the origin story."
);

entity(
    "me-at-the-zoo",
    "Me at the zoo",
    "work",
    "First YouTube video, shot at the San Diego Zoo on 23 April 2005.",
    "Me at the zoo is eighteen seconds of Karim in front of elephants, the canonical first upload and still the site's oldest public clip."
);

entity(
    "google",
    "Google",
    "organization",
    "Company that bought YouTube in 2006 and folded it into Alphabet.",
    "Google acquired YouTube for $1.65 billion in stock in 2006, keeping the brand while wiring AdSense, search, and later YouTube Premium into the parent company."
);

entity(
    "susan-wojcicki",
    "Susan Wojcicki",
    "person",
    "Long-serving YouTube CEO after the Google era matured.",
    "Susan Wojcicki, an early Google executive, ran YouTube from 2014 to 2023 as Partner Program rules, the algorithm, and creator celebrity became the public story."
);

/* ---------- Money / systems ---------- */

entity(
    "google-adsense",
    "Google AdSense",
    "object",
    "Ad network that first put display money on YouTube watch pages.",
    "AdSense, already Google's publisher network, became the early way YouTube sold ads against videos — the pipe that made 'getting monetized' a career phrase."
);

entity(
    "youtube-partner-program",
    "YouTube Partner Program",
    "organization",
    "Revenue-share program that turned uploads into a job.",
    "The YouTube Partner Program (YPP), opened widely in the late 2000s, splits advertising revenue with qualifying channels and still defines who counts as a professional YouTuber."
);

entity(
    "youtube-algorithm",
    "YouTube algorithm",
    "topic",
    "Recommendation stack that replaced the front page as the discovery engine.",
    "The YouTube algorithm — suggested videos, Home, and later Shorts — decides what plays next. Creators treat it as a character: opaque, decisive, and constantly retuned."
);

entity(
    "content-id",
    "Content ID",
    "object",
    "Automated copyright-matching system that claims or mutes reused audio and video.",
    "Content ID fingerprints uploads against a rights-holder database, the industrial answer to the copyright fights that followed Google's purchase."
);

entity(
    "youtube-premium",
    "YouTube Premium",
    "object",
    "Subscription that removes ads and funds some original and Music features.",
    "YouTube Premium (once YouTube Red) is the paid tier: no ads, background play, and a second check beside AdSense for participating creators."
);

entity(
    "youtube-shorts",
    "YouTube Shorts",
    "work",
    "Vertical short-form feed added to compete with TikTok-era clips.",
    "Shorts folded looping vertical video into YouTube's recommender, extending the algorithm from long watch-time into snack-length clips."
);

/* ---------- Roles / genres / lore ---------- */

entity(
    "youtuber",
    "YouTuber",
    "topic",
    "Creator whose audience and income live primarily on the platform.",
    "YouTuber became the job title for people who post on a channel, talk to a camera, and treat analytics as craft. The Partner Program made the word a career, not a hobby."
);

entity(
    "pewdiepie",
    "PewDiePie",
    "person",
    "Swedish Let's Player who held the most-subscribed crown as platform lore.",
    "Felix Kjellberg, as PewDiePie, turned horror Let's Plays and bro-ish commentary into the long-running most-subscribed channel — a stand-in, in platform history, for the independent creator who outscaled TV brands, including the public T-Series subscriber race. Mention here is documentary, not an endorsement of every era of the channel."
);

entity(
    "t-series",
    "T-Series",
    "organization",
    "Indian music label whose subscriber race with PewDiePie became a 2018–19 event.",
    "T-Series, a film-and-music company, passed PewDiePie as the most-subscribed channel, turning a count on a profile page into a global fandom contest."
);

entity(
    "vlog",
    "Vlog",
    "work",
    "Video blog — diary-style talking-head and day-in-the-life genre.",
    "The vlog is YouTube's diary form: bedrooms, daily vlog crews, and the intimacy that made ordinary people into channels before Shorts compressed the same impulse."
);

entity(
    "lets-play",
    "Let's Play",
    "work",
    "Commentary-over-gameplay genre that minted early Partner stars.",
    "Let's Plays — playing a game aloud for an audience — were a YouTube-native form. PewDiePie's early fame sat inside that genre, beside Minecraft and horror let's-plays."
);

entity(
    "youtube-poop",
    "YouTube Poop",
    "work",
    "Absurdist remix genre that mashed cartoons and scrambled audio.",
    "YouTube Poop (YTP) is a folk-edit style: sentence-mixed cartoons, ear-rape jokes, and source clips reused until Content ID and copyright claims thinned the wildest years."
);

entity(
    "lonelygirl15",
    "lonelygirl15",
    "work",
    "Scripted vlog that the audience first took for a real teenager's diary.",
    "lonelygirl15 (2006) was a fictional video blog whose reveal taught early YouTube that authenticity was already a genre, not a guarantee."
);

entity(
    "smosh",
    "Smosh",
    "organization",
    "Sketch duo that became a house name of early YouTube comedy.",
    "Smosh — Ian Hecox and Anthony Padilla — posted sketch shorts that defined pre-algorithm comedy channels and later expanded into a multi-show brand."
);

entity(
    "youtube-rewind",
    "YouTube Rewind",
    "work",
    "Year-end official recap that turned from celebration to ratioed ritual.",
    "YouTube Rewind compiled viral clips and creators into an annual studio video. Later editions were so widely disliked that the series itself became platform folklore."
);

entity(
    "dislike-button",
    "Dislike button",
    "object",
    "Public downvote whose count YouTube later hid on videos.",
    "The dislike button was a visible score under every video until 2021, when YouTube hid public counts after coordinated raids — a lore object about metrics and power."
);

entity(
    "san-bruno",
    "YouTube San Bruno",
    "place",
    "Longtime YouTube headquarters campus in San Bruno, California.",
    "The San Bruno campus is the office most associated with post-Google YouTube, the place Wojcicki's era ran from beside the 2018 shooting that also entered platform memory."
);

entity(
    "san-diego-zoo",
    "San Diego Zoo",
    "place",
    "Site of the first YouTube upload.",
    "The San Diego Zoo is where Karim filmed Me at the zoo, making a public animal enclosure the geographic origin of the site."
);

entity(
    "play-button",
    "YouTube Play Button",
    "object",
    "Physical award sent when a channel crosses subscriber milestones.",
    "The silver, gold, and later diamond Play Buttons are the trophy case of the Partner era — objects that made subscriber counts ceremonial."
);

entity(
    "youtube-studio",
    "YouTube Studio",
    "object",
    "Creator dashboard for analytics, monetization, and uploads.",
    "YouTube Studio is the back office of being a YouTuber: graphs, copyright claims, and the knobs people blame or praise when the algorithm moves."
);

entity(
    "copyright-strike",
    "Copyright strike",
    "topic",
    "Three-strikes enforcement that can kill a channel.",
    "A copyright strike is the manual penalty beside Content ID: three of them in a window can terminate a channel, the fear that structured remix genres."
);

/* ---------- Relationships ---------- */

rel("chad-hurley", "youtube", "created", "Chad Hurley co-founded YouTube and served as its first CEO.", 0.98, 0.96);
rel("steve-chen", "youtube", "created", "Steve Chen co-founded YouTube and built the early product.", 0.98, 0.96);
rel("jawed-karim", "youtube", "created", "Jawed Karim co-founded YouTube and posted the first public video.", 0.98, 0.96);
rel("jawed-karim", "me-at-the-zoo", "created", "Karim uploaded Me at the zoo, the first YouTube video.", 0.99, 0.97);
rel("me-at-the-zoo", "san-diego-zoo", "occurred_at", "Me at the zoo was filmed at the San Diego Zoo.", 0.98, 0.95);
rel("me-at-the-zoo", "youtube", "part_of", "Me at the zoo is the first clip in YouTube's public archive.", 0.97, 0.94);

rel("google", "youtube", "created", "Google acquired YouTube in 2006 and has owned the platform since.", 0.97, 0.95);
rel("susan-wojcicki", "youtube", "leads", "Susan Wojcicki was YouTube's CEO through the mature Partner era.", 0.95, 0.92);
rel("susan-wojcicki", "google", "member_of", "Wojcicki was a longtime Google executive before and during her YouTube years.", 0.94, 0.9);
rel("youtube", "san-bruno", "located_in", "YouTube's headquarters sat for years on the San Bruno campus.", 0.94, 0.9);

rel("google-adsense", "youtube", "supports", "AdSense supplied the first scalable ads against YouTube videos.", 0.96, 0.93);
rel("google", "google-adsense", "produced", "Google built AdSense and then wired it to YouTube inventory.", 0.96, 0.93);
rel("youtube-partner-program", "google-adsense", "uses", "The Partner Program shares AdSense-style ad revenue with channels.", 0.95, 0.92);
rel("youtube-partner-program", "youtuber", "produced", "The Partner Program turned 'YouTuber' into a paying occupation.", 0.95, 0.91);
rel("youtuber", "youtube", "member_of", "YouTubers are the creators whose channels live on the platform.", 0.97, 0.94);
rel("play-button", "youtube-partner-program", "part_of", "Play Buttons mark subscriber milestones in the Partner era.", 0.93, 0.89);
rel("youtube-studio", "youtuber", "uses", "Creators run analytics and claims from YouTube Studio.", 0.94, 0.9);

rel("youtube-algorithm", "youtube", "part_of", "The recommendation algorithm is how most viewers now find YouTube videos.", 0.96, 0.93);
rel("youtube-shorts", "youtube-algorithm", "uses", "Shorts depend on the same recommender logic, tuned for vertical loops.", 0.93, 0.89);
rel("youtube-premium", "google-adsense", "opposed_by", "Premium is the subscription path that removes the ads AdSense sells.", 0.9, 0.86);
rel("content-id", "copyright-strike", "connected_to", "Content ID claims sit beside strikes as YouTube's copyright machinery.", 0.94, 0.9);
rel("content-id", "youtube-poop", "opposed_by", "Content ID and strikes hemmed in the wildest YouTube Poop remix years.", 0.9, 0.86);

rel("pewdiepie", "youtuber", "member_of", "PewDiePie is the platform-lore example of an independent YouTuber at global scale.", 0.95, 0.91);
rel("pewdiepie", "lets-play", "uses", "PewDiePie's early audience was built on horror and game Let's Plays.", 0.94, 0.9);
rel("pewdiepie", "t-series", "opposed_by", "PewDiePie and T-Series fought a public subscriber race in 2018–19.", 0.94, 0.9);
rel("lets-play", "youtuber", "produced", "Let's Plays minted a generation of Partner-program YouTubers.", 0.93, 0.89);
rel("vlog", "youtuber", "produced", "The vlog is a home genre for talking-head YouTubers.", 0.93, 0.89);
rel("lonelygirl15", "vlog", "inspired", "lonelygirl15 borrowed the vlog's diary frame and then revealed it as fiction.", 0.94, 0.9);
rel("youtube-poop", "youtube", "part_of", "YouTube Poop is a remix genre native to early YouTube.", 0.92, 0.88);
rel("smosh", "youtuber", "member_of", "Smosh was among the first sketch channels to become a YouTuber brand.", 0.93, 0.89);
rel("youtube-rewind", "youtube", "produced", "YouTube produced Rewind as an official year-in-review video.", 0.94, 0.9);
rel("dislike-button", "youtube-rewind", "involved", "Rewind's later editions became famous for huge public dislike counts.", 0.91, 0.87);
rel("chad-hurley", "play-button", "created", "Hurley's play-button mark became the physical award's silhouette.", 0.9, 0.86);

module.exports = { entities, relationships };
