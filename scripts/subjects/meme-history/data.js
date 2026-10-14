/*
 * Meme history subject data — image macros, copypasta, and vernacular folklore.
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

/* ---------- Root / theory / archives ---------- */

entity(
    "meme-history",
    "Meme history",
    "topic",
    "Image macros, copypasta, and viral forms tracked as vernacular folklore.",
    "Meme history treats catchphrases, image macros, and copypasta as dated folklore: Dawkins's coinage, Godwin's law, lolcats, rickrolls, Advice Animals, and the wikis that cataloged them. Entries here describe circulation, not endorsement."
);

entity(
    "richard-dawkins",
    "Richard Dawkins",
    "person",
    "Biologist who coined 'meme' as a unit of cultural imitation.",
    "Richard Dawkins introduced the meme in The Selfish Gene (1976) as an analog of the gene. Internet users later reused the word for jokes and macros he did not invent."
);

entity(
    "the-selfish-gene",
    "The Selfish Gene",
    "work",
    "1976 book in which Dawkins named the meme.",
    "The Selfish Gene's meme chapter gave later internet culture a scientific-sounding label for jokes that copy with variation."
);

entity(
    "know-your-meme",
    "Know Your Meme",
    "work",
    "Research wiki that documents origins, spreads, and derivatives of internet memes.",
    "Know Your Meme, launched in 2008, became the default citation for 'where did this image come from,' a folklore archive with entries, confirmation, and research staff."
);

entity(
    "4chan",
    "4chan",
    "place",
    "Anonymous imageboard that incubated many 2000s meme formats.",
    "4chan's boards, especially /b/, were a factory for rage comics, rickrolls, Advice Animals, and Pepe's early spread. Documenting that role is history of a venue, not a brief for it."
);

entity(
    "something-awful",
    "Something Awful",
    "place",
    "Comedy forum whose FYAD culture fed early image-macro taste.",
    "Something Awful's forums, older than 4chan, mixed Photoshop phorums and in-jokes that later leaked into broader meme grammar."
);

entity(
    "ytmnd",
    "YTMND",
    "work",
    "Site of looping image-plus-sound pages that prefigured viral video jokes.",
    "You're The Man Now Dog hosted user-made sites that combined a still, a loop, and a sound clip — a 2000s ancestor of the image macro and the rickroll's forced replay."
);

/* ---------- Laws / forms ---------- */

entity(
    "godwins-law",
    "Godwin's law",
    "topic",
    "Usenet observation that long threads drift toward Nazi comparisons.",
    "Mike Godwin stated in 1990 that as an online discussion grows, the probability of a Hitler or Nazi comparison approaches one. The 'law' became a meme about argument, not a statute."
);

entity(
    "mike-godwin",
    "Mike Godwin",
    "person",
    "Attorney who formulated Godwin's law on Usenet.",
    "Mike Godwin posted the Nazi-comparison observation as a counter-meme, hoping self-consciousness would slow cheap analogies."
);

entity(
    "image-macro",
    "Image macro",
    "topic",
    "Picture with bold caption text, the basic unit of many 2000s memes.",
    "An image macro puts Impact (or similar) type on a still — lolcats, Advice Animals, and countless later formats are species of this form."
);

entity(
    "copypasta",
    "Copypasta",
    "topic",
    "Block of text meant to be pasted, not originally authored, again and again.",
    "Copypasta is folklore as clipboard: Navy Seal pastes, creepypasta cousins, and forum walls of identical text whose joke is the repetition."
);

entity(
    "viral-video",
    "Viral video",
    "topic",
    "Clip whose spread is the story — shares, parodies, and forced rewatch.",
    "Viral video is the moving-image side of meme history: Charlie bit my finger, Keyboard Cat, and the rickroll all traveled as files people made each other watch."
);

entity(
    "advice-animal",
    "Advice Animal",
    "topic",
    "Centered animal or stock face on a color wheel, with setup and punchline bars.",
    "Advice Animals — Courage Wolf, Socially Awkward Penguin, Bad Luck Brian — standardized the image macro into a character with a repeating personality."
);

/* ---------- Named memes / people ---------- */

entity(
    "lolcats",
    "Lolcats",
    "work",
    "Misspelled-English captions on cat photos, breakout image-macro wave.",
    "Lolcats, booming around 2007 on I Can Has Cheezburger, made 'cat + broken English' the first meme format many offline relatives recognized."
);

entity(
    "i-can-has-cheezburger",
    "I Can Has Cheezburger",
    "work",
    "Blog and later network that industrialized lolcats and other macros.",
    "I Can Has Cheezburger aggregated user-submitted cat macros, then built a meme-media company around the form that Know Your Meme would later historicize."
);

entity(
    "rickroll",
    "Rickroll",
    "work",
    "Bait-and-switch to Rick Astley's 1987 video 'Never Gonna Give You Up.'",
    "The rickroll, spreading from 4chan in 2007, disguised a link as something else and played Astley's clip. It is the canonical bait meme of the late 2000s."
);

entity(
    "rick-astley",
    "Rick Astley",
    "person",
    "Singer whose 1987 hit became the rickroll's payload.",
    "Rick Astley recorded Never Gonna Give You Up without intending a meme. He later acknowledged the rickroll as a second life for the song."
);

entity(
    "never-gonna-give-you-up",
    "Never Gonna Give You Up",
    "work",
    "1987 Stock Aitken Waterman single that the rickroll replays.",
    "The official video of Never Gonna Give You Up is the destination of a classic rickroll, a 1980s pop object reused as a 2000s prank."
);

entity(
    "pepe-the-frog",
    "Pepe the Frog",
    "work",
    "Matt Furie comic character later reused, and politicized, as an image macro.",
    "Pepe began in Furie's Boy's Club as a laid-back frog. Boards and later political factions reused the drawing; this entry tracks that circulation as cultural history, not an endorsement of any later use."
);

entity(
    "matt-furie",
    "Matt Furie",
    "person",
    "Cartoonist who created Pepe in the comic Boy's Club.",
    "Matt Furie drew Pepe as a stoner roommate, then spent years trying to reclaim or kill the character after far-right reuse — a documented authorship fight over a meme."
);

entity(
    "boys-club",
    "Boy's Club",
    "work",
    "Alt comic in which Pepe the Frog first said 'feels good man.'",
    "Boy's Club is the source text. The 'feels good man' urinal panel is the panel boards first copied."
);

entity(
    "doge",
    "Doge",
    "work",
    "Shiba Inu photo with Comic Sans inner monologue.",
    "Doge (2013) put colored Comic Sans fragments — wow, such, very — on a Shiba. It later leaked into cryptocurrency branding, a second afterlife of the same still."
);

entity(
    "nyan-cat",
    "Nyan Cat",
    "work",
    "Pop-Tart cat that flies through space on a looping song.",
    "Nyan Cat combined a GIF and a vocaloid-adjacent loop into a 2011 earworm, a viral video and image-macro hybrid."
);

entity(
    "keyboard-cat",
    "Keyboard Cat",
    "work",
    "Cat in a shirt 'playing' a keyboard, used to fail-end other clips.",
    "Keyboard Cat, footage of Fatso from the 1980s recirculated in 2009, became a punchline overlay: play this when something goes wrong."
);

entity(
    "grumpy-cat",
    "Grumpy Cat",
    "work",
    "Tardar Sauce's scowling face as a captioned brand.",
    "Grumpy Cat turned a house cat's underbite into an Advice-Animal-like macro and then a licensed character, late-lolcat commercial folklore."
);

entity(
    "bad-luck-brian",
    "Bad Luck Brian",
    "work",
    "Yearbook photo Advice Animal whose captions narrate petty disaster.",
    "Bad Luck Brian is a stock-faced Advice Animal: the smile becomes a curse. It is a type specimen of the 2012 Facebook-macro wave."
);

entity(
    "all-your-base",
    "All your base",
    "work",
    "Broken English from Zero Wing that became an early web flash meme.",
    "All your base are belong to us, from a 1990s game translation, was animated and forumed into one of the first widely archived web memes, before lolcats."
);

entity(
    "rage-comic",
    "Rage comic",
    "work",
    "MS Paint strip using repeating faces like Forever Alone and Rage Guy.",
    "Rage comics, booming on Reddit and 4chan around 2008–12, were sequential image macros: a tiny cast of faces telling a one-page anecdote."
);

entity(
    "creepypasta",
    "Creepypasta",
    "topic",
    "Horror copypasta — stories meant to be pasted as if they were true.",
    "Creepypasta is copypasta's ghost-story register: Slender Man-adjacent forum tales and 'I found this tape' texts that travel by paste."
);

/* ---------- Relationships ---------- */

rel("richard-dawkins", "the-selfish-gene", "created", "Dawkins coined the word meme in The Selfish Gene.", 0.99, 0.97);
rel("the-selfish-gene", "meme-history", "inspired", "Dawkins's meme chapter later labeled the folklore this subject tracks.", 0.94, 0.9);
rel("know-your-meme", "meme-history", "produced", "Know Your Meme became the reference desk of internet meme history.", 0.96, 0.93);

rel("mike-godwin", "godwins-law", "created", "Mike Godwin formulated Godwin's law on Usenet in 1990.", 0.99, 0.97);
rel("godwins-law", "meme-history", "part_of", "Godwin's law is an early named law of online argument-as-meme.", 0.95, 0.91);

rel("image-macro", "meme-history", "part_of", "The image macro is the basic still-plus-caption form of 2000s meme history.", 0.97, 0.94);
rel("lolcats", "image-macro", "member_of", "Lolcats are the breakout cat-photo image macros.", 0.97, 0.94);
rel("i-can-has-cheezburger", "lolcats", "produced", "I Can Has Cheezburger aggregated and spread lolcats.", 0.96, 0.93);
rel("advice-animal", "image-macro", "part_of", "Advice Animals are a standardized character class of image macro.", 0.96, 0.93);
rel("bad-luck-brian", "advice-animal", "member_of", "Bad Luck Brian is a yearbook-photo Advice Animal.", 0.96, 0.93);
rel("grumpy-cat", "lolcats", "followed", "Grumpy Cat is a later commercial wave of the lolcat face-plus-caption form.", 0.92, 0.88);

rel("copypasta", "meme-history", "part_of", "Copypasta is the pasted-text tradition of meme folklore.", 0.96, 0.93);
rel("creepypasta", "copypasta", "part_of", "Creepypasta is horror told in the copypasta register.", 0.95, 0.91);
rel("viral-video", "meme-history", "part_of", "Viral video is the moving-image half of meme circulation.", 0.95, 0.91);

rel("rickroll", "viral-video", "member_of", "The rickroll is a bait-and-switch viral-video meme.", 0.97, 0.94);
rel("rickroll", "4chan", "occurred_at", "The rickroll spread from 4chan before it hit the wider web.", 0.94, 0.9);
rel("rick-astley", "never-gonna-give-you-up", "produced", "Rick Astley recorded Never Gonna Give You Up in 1987.", 0.98, 0.96);
rel("rickroll", "never-gonna-give-you-up", "uses", "A rickroll plays Never Gonna Give You Up as the punchline.", 0.98, 0.96);
rel("ytmnd", "rickroll", "influenced", "YTMND's forced loops trained the bait-and-replay habit the rickroll perfected.", 0.9, 0.86);

rel("matt-furie", "pepe-the-frog", "created", "Matt Furie created Pepe the Frog in Boy's Club.", 0.99, 0.97);
rel("pepe-the-frog", "boys-club", "part_of", "Pepe first appeared in the comic Boy's Club.", 0.98, 0.96);
rel("pepe-the-frog", "image-macro", "member_of", "Pepe was reused as an image macro far beyond the comic.", 0.95, 0.91);
rel("pepe-the-frog", "4chan", "occurred_at", "Pepe's early meme life circulated on 4chan boards.", 0.94, 0.9);
rel("matt-furie", "pepe-the-frog", "opposed_by", "Furie later tried to reclaim or retire Pepe after political reuse he did not authorize.", 0.93, 0.89);

rel("doge", "image-macro", "member_of", "Doge is a Comic Sans inner-monologue image macro.", 0.95, 0.91);
rel("nyan-cat", "viral-video", "member_of", "Nyan Cat spread as a looping video and GIF.", 0.94, 0.9);
rel("keyboard-cat", "viral-video", "member_of", "Keyboard Cat became a fail-ending viral clip.", 0.94, 0.9);
rel("rage-comic", "image-macro", "part_of", "Rage comics string repeating faces into a short image-macro strip.", 0.94, 0.9);
rel("all-your-base", "meme-history", "preceded", "All your base circulated as an early web meme before the lolcat boom.", 0.93, 0.89);
rel("4chan", "advice-animal", "produced", "4chan boards minted many Advice Animal templates.", 0.93, 0.89);
rel("something-awful", "image-macro", "influenced", "Something Awful's Photoshop culture fed later image-macro taste.", 0.9, 0.86);
rel("know-your-meme", "lolcats", "connected_to", "Know Your Meme documented lolcats as a type specimen of the image macro.", 0.91, 0.87);
rel("know-your-meme", "rickroll", "connected_to", "Know Your Meme's rickroll entry is a standard origin write-up.", 0.91, 0.87);

module.exports = { entities, relationships };
