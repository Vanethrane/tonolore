/*
 * Cosmere subject data — Brandon Sanderson's shared fantasy universe.
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

/* ---------- Root / creator ---------- */

entity(
    "cosmere",
    "Cosmere",
    "topic",
    "Brandon Sanderson's interconnected fantasy universe.",
    "The Cosmere is the shared universe behind Mistborn, The Stormlight Archive, Elantris, Warbreaker, White Sand, and related works by Brandon Sanderson. Shards of Adonalsium, Investiture, and worldhoppers like Hoid tie the planets together across the Physical, Cognitive, and Spiritual Realms."
);

entity(
    "brandon-sanderson",
    "Brandon Sanderson",
    "person",
    "Author of the Cosmere novels.",
    "Brandon Sanderson created the Cosmere, writing Mistborn, The Stormlight Archive, Elantris, Warbreaker, and later Cosmere novels published with Dragonsteel Entertainment."
);

entity(
    "dragonsteel-entertainment",
    "Dragonsteel Entertainment",
    "organization",
    "Sanderson's company for Cosmere publishing and events.",
    "Dragonsteel Entertainment supports Brandon Sanderson's Cosmere publishing, adaptations, and community projects around Mistborn and The Stormlight Archive."
);

/* ---------- Metaphysics ---------- */

entity(
    "adonalsium",
    "Adonalsium",
    "mystery",
    "The being whose Shattering created the Shards.",
    "Adonalsium was the source of Investiture before the Shattering. Its power divided into sixteen Shards that shaped Cosmere worlds such as Scadrial, Roshar, and Nalthis."
);

entity(
    "shattering",
    "The Shattering",
    "event",
    "The ancient event that split Adonalsium into sixteen Shards.",
    "The Shattering of Adonalsium created the Shards of Adonalsium, setting the Cosmere's god-level powers into motion across many planets."
);

entity(
    "investiture",
    "Investiture",
    "concept",
    "The power underlying Cosmere magic systems.",
    "Investiture is the fundamental energy of the Cosmere, expressed as Allomancy on Scadrial, Surgebinding on Roshar, Breath on Nalthis, and other planetary magics."
);

entity(
    "shard",
    "Shard",
    "concept",
    "One of sixteen divine powers from Adonalsium.",
    "A Shard is a fragment of Adonalsium's power held by a Vessel. Known Shards include Ruin, Preservation, Honor, Cultivation, Odium, Endowment, Autonomy, and Harmony."
);

entity(
    "vessel",
    "Vessel",
    "concept",
    "A person who holds a Shard.",
    "A Vessel is the person Ascended to hold a Shard of Adonalsium, such as Sazed becoming Harmony or Rayse holding Odium."
);

entity(
    "physical-realm",
    "Physical Realm",
    "concept",
    "The tangible world of bodies and planets.",
    "The Physical Realm is where Cosmere peoples live day to day, from Luthadel on Scadrial to Kholinar and Urithiru on Roshar."
);

entity(
    "cognitive-realm",
    "Cognitive Realm",
    "concept",
    "Also called Shadesmar; realm of minds and ideas.",
    "The Cognitive Realm, often called Shadesmar on Roshar, is where spren, Cognitive Shadows, and worldhoppers travel between Cosmere planets."
);

entity(
    "spiritual-realm",
    "Spiritual Realm",
    "concept",
    "Realm of Connections, Identity, and raw Investiture.",
    "The Spiritual Realm holds Connection, Identity, and the deeper structure of Investiture that Shards and Surgebinders draw upon."
);

entity(
    "shadesmar",
    "Shadesmar",
    "place",
    "Rosharan name for the Cognitive Realm.",
    "Shadesmar is how Rosharans know the Cognitive Realm — a sea of beads where Kaladin, Shallan, and other Surgebinders confront Odium's influence."
);

entity(
    "perpendicularity",
    "Perpendicularity",
    "concept",
    "A stable portal between realms.",
    "A Perpendicularity is a concentrated well of Investiture allowing travel between the Physical and Cognitive Realms, used by worldhoppers across the Cosmere."
);

entity(
    "worldhopper",
    "Worldhopper",
    "concept",
    "Someone who travels between Cosmere planets.",
    "Worldhoppers move between Cosmere worlds through the Cognitive Realm. Hoid is the most famous, appearing in Mistborn, The Stormlight Archive, and Warbreaker."
);

/* ---------- Shards / powers ---------- */

entity("ruin", "Ruin", "concept", "Shard of entropy and decay.", "Ruin is the Shard once held by Ati, opposing Preservation on Scadrial until both are remade as Harmony.");
entity("preservation", "Preservation", "concept", "Shard of stasis and protection.", "Preservation is the Shard once held by Leras, paired against Ruin in the creation and defense of Scadrial.");
entity("harmony", "Harmony", "person", "Sazed holding Ruin and Preservation together.", "Harmony is Sazed after Ascending with both Ruin and Preservation, guiding Scadrial into the era of Wax and Wayne.");
entity("honor", "Honor", "concept", "Shard associated with oaths and Roshar.", "Honor, once held by Tanavast, shaped Roshar's Surgebinding and the Knights Radiant before Odium's long war.");
entity("cultivation", "Cultivation", "concept", "Shard of growth and change on Roshar.", "Cultivation works beside Honor's legacy on Roshar, pruning and growing people such as Dalinar Kholin and Lift.");
entity("odium", "Odium", "concept", "Shard of divine hatred.", "Odium, held by Rayse and later Taravangian, is the primary antagonist of The Stormlight Archive and a threat across the Cosmere.");
entity("endowment", "Endowment", "concept", "Shard of Nalthis and Breath.", "Endowment grants Breath on Nalthis, enabling Awakening and the Returned of Warbreaker.");
entity("autonomy", "Autonomy", "concept", "Shard tied to Taldain and beyond.", "Autonomy, associated with Bavadin, influences White Sand's Taldain and schemes that reach Scadrial and other Cosmere worlds.");
entity("devotion", "Devotion", "concept", "Fallen Shard of Sel.", "Devotion was a Shard on Sel whose power, with Dominion, underpins AonDor and the magic of Elantris.");
entity("dominion", "Dominion", "concept", "Fallen Shard of Sel.", "Dominion was shattered on Sel alongside Devotion, leaving the complex regional magics of Elantris and the surrounding empires.");

/* ---------- Series / works ---------- */

entity("mistborn", "Mistborn", "work", "Scadrial saga of ash, metals, and empire.", "Mistborn follows Vin, Kelsier, and later Wax and Wayne on Scadrial, where Allomancy, Feruchemy, and Hemalurgy express Ruin and Preservation.");
entity("the-final-empire", "The Final Empire", "work", "First Mistborn novel.", "The Final Empire introduces Vin, Kelsier, and the struggle against the Lord Ruler in Luthadel.", "fiction", { parentSlug: "mistborn" });
entity("the-well-of-ascension", "The Well of Ascension", "work", "Second Mistborn novel.", "The Well of Ascension continues Vin and Elend's fight for Luthadel as Ruin's influence grows.", "fiction", { parentSlug: "mistborn" });
entity("the-hero-of-ages", "The Hero of Ages", "work", "Third Mistborn novel.", "The Hero of Ages resolves Ruin and Preservation as Sazed becomes Harmony.", "fiction", { parentSlug: "mistborn" });
entity("the-alloy-of-law", "The Alloy of Law", "work", "Era 2 Mistborn opener.", "The Alloy of Law moves Scadrial forward to Waxillium Ladrian and Wayne in Elendel.", "fiction", { parentSlug: "mistborn" });
entity("shadows-of-self", "Shadows of Self", "work", "Era 2 Mistborn novel.", "Shadows of Self deepens Wax and Wayne's investigation amid Harmony's politics.", "fiction", { parentSlug: "mistborn" });
entity("the-bands-of-mourning", "The Bands of Mourning", "work", "Era 2 Mistborn novel.", "The Bands of Mourning sends Wax's crew after mythical metalborn artifacts.", "fiction", { parentSlug: "mistborn" });
entity("the-lost-metal", "The Lost Metal", "work", "Era 2 Mistborn finale.", "The Lost Metal closes Wax and Wayne's arc as Autonomy's schemes threaten Scadrial.", "fiction", { parentSlug: "mistborn" });

entity("the-stormlight-archive", "The Stormlight Archive", "work", "Epic Rosharan saga of Radiants and Odium.", "The Stormlight Archive follows Kaladin, Shallan, Dalinar, and others on Roshar as the Knights Radiant return and Odium wages war.");
entity("the-way-of-kings", "The Way of Kings", "work", "First Stormlight novel.", "The Way of Kings introduces Bridge Four, Shallan's scholarship, and Dalinar's visions on the Shattered Plains.", "fiction", { parentSlug: "the-stormlight-archive" });
entity("words-of-radiance", "Words of Radiance", "work", "Second Stormlight novel.", "Words of Radiance advances Shallan's past, Kaladin's oaths, and the coming of the Everstorm.", "fiction", { parentSlug: "the-stormlight-archive" });
entity("oathbringer", "Oathbringer", "work", "Third Stormlight novel.", "Oathbringer centers Dalinar Kholin's past and the battle for Thaylen City against Odium.", "fiction", { parentSlug: "the-stormlight-archive" });
entity("rhythm-of-war", "Rhythm of War", "work", "Fourth Stormlight novel.", "Rhythm of War explores Urithiru, Navani's scholarship, and the war for Roshar's soul.", "fiction", { parentSlug: "the-stormlight-archive" });
entity("wind-and-truth", "Wind and Truth", "work", "Fifth Stormlight novel.", "Wind and Truth continues the contest of champions and the wider Cosmere stakes around Odium.", "fiction", { parentSlug: "the-stormlight-archive" });

entity("elantris", "Elantris", "work", "Novel of the fallen city on Sel.", "Elantris follows Raoden, Sarene, and Hrathen as the magic of AonDor and the city of Elantris unravel on Sel.");
entity("warbreaker", "Warbreaker", "work", "Novel of Breath, Awakening, and Hallandren.", "Warbreaker follows Vivenna, Siri, Lightsong, and Vasher in Hallandren, where Breath and Awakening define power.");
entity("white-sand", "White Sand", "work", "Graphic novel of Taldain's sand mastery.", "White Sand is set on Taldain, where sand mastery and Autonomy's influence shape politics under dual suns.");
entity("arcanum-unbounded", "Arcanum Unbounded", "work", "Cosmere short fiction collection.", "Arcanum Unbounded gathers Cosmere novellas and stories that expand Mistborn, Stormlight, and other planetary systems.");
entity("mistborn-secret-history", "Mistborn: Secret History", "work", "Cognitive Realm story of Kelsier.", "Mistborn: Secret History follows Kelsier through the Cognitive Realm after The Hero of Ages, linking Scadrial to wider Cosmere lore.", "fiction", { parentSlug: "mistborn" });
entity("tress-of-the-emerald-sea", "Tress of the Emerald Sea", "work", "Secret Project novel on Lumar.", "Tress of the Emerald Sea follows Tress across the spore seas of Lumar, narrated with Cosmere-aware wit.");
entity("yumi-and-the-nightmare-painter", "Yumi and the Nightmare Painter", "work", "Secret Project novel of nightmares and art.", "Yumi and the Nightmare Painter pairs Yumi and Painter across stacked societies shaped by Investiture.");
entity("the-sunlit-man", "The Sunlit Man", "work", "Secret Project novel of Nomad.", "The Sunlit Man follows Nomad across a deadly planet, tying Stormlight-era characters into wider Cosmere flight.");

/* ---------- Worlds ---------- */

entity("scadrial", "Scadrial", "place", "World of Mistborn.", "Scadrial is the planet of Mistborn, home to Luthadel, Elendel, Allomancy, and the Shards Ruin and Preservation.");
entity("roshar", "Roshar", "place", "World of The Stormlight Archive.", "Roshar is the storm-swept world of The Stormlight Archive, home to spren, Surgebinding, and the war against Odium.");
entity("nalthis", "Nalthis", "place", "World of Warbreaker.", "Nalthis is the world of Warbreaker, where Endowment's Breath enables Awakening and the Returned.");
entity("sel", "Sel", "place", "World of Elantris.", "Sel is the world of Elantris, where regional magics like AonDor remain after Devotion and Dominion fell.");
entity("taldain", "Taldain", "place", "World of White Sand.", "Taldain is the tidally locked world of White Sand, linked to Autonomy and sand mastery.");
entity("lumar", "Lumar", "place", "World of Tress of the Emerald Sea.", "Lumar is the spore-sea planet visited in Tress of the Emerald Sea.");
entity("threnody", "Threnody", "place", "World of Shadows for Silence.", "Threnody is a dangerous Cosmere world associated with Shades and the Forests of Hell.");
entity("first-of-the-sun", "First of the Sun", "place", "World of Sixth of the Dusk.", "First of the Sun is a Cosmere planetary system whose islands and Aviar appear in Sixth of the Dusk.");

entity("luthadel", "Luthadel", "place", "Capital of the Final Empire.", "Luthadel is the ash-covered capital where Vin and Kelsier strike at the Lord Ruler.", "fiction", { parentSlug: "scadrial" });
entity("elendel", "Elendel", "place", "Major city of Mistborn Era 2.", "Elendel is the Basin metropolis of Wax and Wayne's era on Scadrial.", "fiction", { parentSlug: "scadrial" });
entity("kholinar", "Kholinar", "place", "Capital of Alethkar.", "Kholinar is Alethkar's capital on Roshar, central to Dalinar's kingdom and Odium's assaults.", "fiction", { parentSlug: "roshar" });
entity("urithiru", "Urithiru", "place", "Tower city of the Knights Radiant.", "Urithiru is the ancient tower that becomes the Knights Radiant's seat in The Stormlight Archive.", "fiction", { parentSlug: "roshar" });
entity("shattered-plains", "Shattered Plains", "place", "Warcamps and plateaus of Alethkar's war.", "The Shattered Plains are where Bridge Four, Dalinar, and the Alethi fight the Parshendi.", "fiction", { parentSlug: "roshar" });
entity("hallandren", "Hallandren", "place", "Kingdom of the Returned.", "Hallandren is the colorful kingdom of Warbreaker, ruled from T'Telir with Breath and politics.", "fiction", { parentSlug: "nalthis" });
entity("elantris-city", "Elantris (city)", "place", "Fallen city of the Elantrians.", "The city of Elantris was once glorious on Sel before the Reod, and is restored through Raoden's story.", "fiction", { parentSlug: "sel" });

/* ---------- Magic systems ---------- */

entity("allomancy", "Allomancy", "concept", "Scadrial magic of burning metals.", "Allomancy lets metalborn like Vin and Kelsier burn metals for power, a gift rooted in Preservation.");
entity("feruchemy", "Feruchemy", "concept", "Scadrial magic of storing attributes.", "Feruchemy stores personal attributes in metalminds, practiced by Terris people such as Sazed.");
entity("hemalurgy", "Hemalurgy", "concept", "Scadrial magic of stealing power with spikes.", "Hemalurgy steals Investiture through metal spikes, a destructive art associated with Ruin.");
entity("surgebinding", "Surgebinding", "concept", "Rosharan magic of the Knights Radiant.", "Surgebinding channels Stormlight through Nahel bonds with spren, powering Kaladin, Shallan, and other Radiants.");
entity("stormlight", "Stormlight", "concept", "Investiture carried in Rosharan storms.", "Stormlight is the glowing Investiture Radiants inhale to heal, Lash, Soulcast, and fight.");
entity("spren", "Spren", "concept", "Cognitive beings of Roshar.", "Spren are Cognitive entities on Roshar; honorspren like Syl and Cryptics like Pattern bond Surgebinders.");
entity("nahel-bond", "Nahel bond", "concept", "Bond between Radiant and spren.", "The Nahel bond links a Knights Radiant to a spren, granting Surgebinding as oaths deepen.");
entity("awakening", "Awakening", "concept", "Nalthian magic using Breath.", "Awakening uses Breath to animate objects, practiced by Vasher and others in Warbreaker.");
entity("biochromatic-breath", "BioChromatic Breath", "concept", "Investiture of Nalthis.", "BioChromatic Breath is Endowment's Investiture on Nalthis, accumulated for Heightening and Awakening.");
entity("aondor", "AonDor", "concept", "Selish magic of Aons.", "AonDor channels the Dor through Aons, the symbolic magic restored with Elantris.");

/* ---------- People ---------- */

entity("hoid", "Hoid", "person", "Worldhopping storyteller also called Wit.", "Hoid (Wit on Roshar) worldhops across the Cosmere, appearing in Mistborn, The Stormlight Archive, Warbreaker, and beyond.");
entity("kelsier", "Kelsier", "person", "Survivor of Hathsin; Mistborn revolutionary.", "Kelsier leads the crew against the Final Empire, becomes a Cognitive legend, and later influences Scadrial from beyond.");
entity("vin", "Vin", "person", "Mistborn heroine of the Final Empire.", "Vin rises from street urchin to Mistborn hero beside Kelsier and Elend, confronting Ruin.");
entity("elend-venture", "Elend Venture", "person", "Scholar-king allied with Vin.", "Elend Venture becomes emperor of the New Empire and fights beside Vin through the Mistborn trilogy.");
entity("sazed", "Sazed", "person", "Terris Keeper who becomes Harmony.", "Sazed is a Keeper of Feruchemical knowledge who Ascends as Harmony at the end of The Hero of Ages.");
entity("waxillium-ladrian", "Waxillium Ladrian", "person", "Lawman Twinborn of Era 2.", "Waxillium Ladrian balances house politics and Allomantic action with Wayne in Elendel.");
entity("wayne", "Wayne", "person", "Wax's Feruchemical partner.", "Wayne is a slider and master of disguise who partners with Wax through Mistborn Era 2.");
entity("kaladin", "Kaladin", "person", "Bridge Four captain and Windrunner.", "Kaladin Stormblessed leads Bridge Four, bonds Syl, and becomes a Windrunner of the Knights Radiant.");
entity("shallan-davar", "Shallan Davar", "person", "Lightweaver and scholar.", "Shallan Davar is a Lightweaver bonded to Pattern, uncovering truths about herself, Urithiru, and the Cosmere.");
entity("dalinar-kholin", "Dalinar Kholin", "person", "Blackthorn and Bondsmith.", "Dalinar Kholin unites Alethkar, bonds the Stormfather, and opposes Odium as a Bondsmith.");
entity("adolin-kholin", "Adolin Kholin", "person", "Alethi swordsman and Shallan's husband.", "Adolin Kholin fights on the Shattered Plains and later champions Mayalaran in the war for Roshar.");
entity("jasnah-kholin", "Jasnah Kholin", "person", "Scholar queen and Elsecaller.", "Jasnah Kholin is an Elsecaller whose scholarship and Surgebinding guide the Radiants.");
entity("navani-kholin", "Navani Kholin", "person", "Artifabrian and Bondsmith.", "Navani Kholin engineers fabrial science and later bonds the Sibling in Urithiru.");
entity("szeth", "Szeth", "person", "Assassin in White; Skybreaker.", "Szeth-son-son-Vallano begins as the Assassin in White and later walks a Skybreaker path under conflicting oaths.");
entity("sylphrena", "Sylphrena", "person", "Honorspren bonded to Kaladin.", "Sylphrena (Syl) is the honorspren whose Nahel bond makes Kaladin a Windrunner.");
entity("pattern", "Pattern", "person", "Cryptic bonded to Shallan.", "Pattern is the Cryptic spren who enables Shallan's Lightweaving and forces uncomfortable truths.");
entity("vasher", "Vasher", "person", "Returned Awakener; also Zahel.", "Vasher is a Returned master of Awakening who appears in Warbreaker and later on Roshar as Zahel.");
entity("vivenna", "Vivenna", "person", "Idrian princess in Hallandren.", "Vivenna travels to Hallandren in Warbreaker, learning Breath, identity, and war.");
entity("lightsong", "Lightsong", "person", "Returned god of bravery.", "Lightsong the Bold is a Returned in Hallandren whose humor hides a pivotal sacrifice.");
entity("raoden", "Raoden", "person", "Prince of Arelon; Elantrian.", "Raoden becomes an Elantrian and restores hope in the fallen city of Elantris.");
entity("sarene", "Sarene", "person", "Teoish princess allied with Raoden.", "Sarene's politics and courage help reshape Arelon beside Raoden and against Hrathen's conversion war.");
entity("hrathen", "Hrathen", "person", "Gyorn of Shu-Dereth.", "Hrathen is a Derethi gyorn whose mission in Kae becomes a crisis of faith in Elantris.");
entity("lord-ruler", "The Lord Ruler", "person", "Immortal tyrant of the Final Empire.", "The Lord Ruler ruled the Final Empire for a thousand years through Allomancy, Feruchemy, and Hemalurgy.");
entity("rayse", "Rayse", "person", "Original Vessel of Odium.", "Rayse held Odium for millennia, driving the wars that threaten Roshar and the wider Cosmere.");
entity("taravangian", "Taravangian", "person", "King of Kharbranth who takes Odium.", "Taravangian schemes through Diagram and Diagram-born politics before Ascending as Odium's new Vessel.");

/* ---------- Organizations ---------- */

entity("knights-radiant", "Knights Radiant", "organization", "Surgebinding orders of Roshar.", "The Knights Radiant are Surgebinding orders such as Windrunners and Lightweavers who return to oppose Odium.");
entity("bridge-four", "Bridge Four", "organization", "Kaladin's crew of bridgemen.", "Bridge Four begins as disposable bridgemen and becomes Kaladin's chosen family of Windrunners.");
entity("ghostbloods", "Ghostbloods", "organization", "Secret Cosmere-aware society.", "The Ghostbloods pursue Investiture and worldhopping agendas, opposing and recruiting figures like Shallan.");
entity("final-empire", "Final Empire", "organization", "Lord Ruler's ash-choked dominion.", "The Final Empire is the Lord Ruler's thousand-year regime overthrown by Kelsier and Vin.");
entity("kholin-family", "Kholin family", "organization", "Alethi royal house.", "The Kholin family — Dalinar, Adolin, Jasnah, Navani — stands at the center of The Stormlight Archive.");

/* ---------- Relationships ---------- */

rel("brandon-sanderson", "cosmere", "created", "Brandon Sanderson created the Cosmere.", 0.99, 0.99);
rel("brandon-sanderson", "mistborn", "created", "Sanderson wrote Mistborn within the Cosmere.", 0.99, 0.98);
rel("brandon-sanderson", "the-stormlight-archive", "created", "Sanderson wrote The Stormlight Archive within the Cosmere.", 0.99, 0.98);
rel("brandon-sanderson", "elantris", "created", "Sanderson wrote Elantris within the Cosmere.", 0.98, 0.96);
rel("brandon-sanderson", "warbreaker", "created", "Sanderson wrote Warbreaker within the Cosmere.", 0.98, 0.96);
rel("brandon-sanderson", "dragonsteel-entertainment", "created", "Sanderson founded Dragonsteel Entertainment.", 0.95, 0.9);

rel("mistborn", "cosmere", "part_of", "Mistborn is a Cosmere saga set on Scadrial.", 0.99, 0.99);
rel("the-stormlight-archive", "cosmere", "part_of", "The Stormlight Archive is a Cosmere saga set on Roshar.", 0.99, 0.99);
rel("elantris", "cosmere", "part_of", "Elantris is a Cosmere novel set on Sel.", 0.99, 0.97);
rel("warbreaker", "cosmere", "part_of", "Warbreaker is a Cosmere novel set on Nalthis.", 0.99, 0.97);
rel("white-sand", "cosmere", "part_of", "White Sand is a Cosmere story set on Taldain.", 0.98, 0.95);
rel("arcanum-unbounded", "cosmere", "part_of", "Arcanum Unbounded collects Cosmere short fiction.", 0.99, 0.96);

rel("adonalsium", "shattering", "connected_to", "Adonalsium was divided in the Shattering.", 0.99, 0.99);
rel("shattering", "shard", "caused", "The Shattering created the sixteen Shards.", 0.99, 0.99);
rel("shard", "investiture", "connected_to", "Shards are vast concentrations of Investiture.", 0.98, 0.97);
rel("investiture", "cosmere", "part_of", "Investiture is the shared power of the Cosmere.", 0.99, 0.98);

rel("ruin", "scadrial", "connected_to", "Ruin is bound to Scadrial's history.", 0.99, 0.97);
rel("preservation", "scadrial", "connected_to", "Preservation shaped Scadrial with Ruin.", 0.99, 0.97);
rel("sazed", "harmony", "connected_to", "Sazed Ascends as Harmony.", 0.99, 0.99);
rel("harmony", "ruin", "contains", "Harmony holds Ruin together with Preservation.", 0.98, 0.96);
rel("harmony", "preservation", "contains", "Harmony holds Preservation together with Ruin.", 0.98, 0.96);
rel("honor", "roshar", "connected_to", "Honor's legacy defines Rosharan Surgebinding.", 0.99, 0.97);
rel("cultivation", "roshar", "connected_to", "Cultivation remains active on Roshar.", 0.98, 0.96);
rel("odium", "roshar", "connected_to", "Odium wages war for Roshar.", 0.99, 0.98);
rel("endowment", "nalthis", "connected_to", "Endowment grants Breath on Nalthis.", 0.99, 0.97);
rel("autonomy", "taldain", "connected_to", "Autonomy is strongly tied to Taldain.", 0.97, 0.95);
rel("devotion", "sel", "connected_to", "Devotion's power remains on Sel.", 0.97, 0.94);
rel("dominion", "sel", "connected_to", "Dominion's power remains on Sel.", 0.97, 0.94);

rel("scadrial", "mistborn", "occurred_at", "Mistborn is set on Scadrial.", 0.99, 0.99);
rel("roshar", "the-stormlight-archive", "occurred_at", "The Stormlight Archive is set on Roshar.", 0.99, 0.99);
rel("nalthis", "warbreaker", "occurred_at", "Warbreaker is set on Nalthis.", 0.99, 0.98);
rel("sel", "elantris", "occurred_at", "Elantris is set on Sel.", 0.99, 0.98);
rel("taldain", "white-sand", "occurred_at", "White Sand is set on Taldain.", 0.98, 0.96);
rel("lumar", "tress-of-the-emerald-sea", "occurred_at", "Tress of the Emerald Sea is set on Lumar.", 0.98, 0.95);

rel("allomancy", "scadrial", "located_in", "Allomancy is native to Scadrial.", 0.99, 0.97);
rel("feruchemy", "scadrial", "located_in", "Feruchemy is native to Scadrial.", 0.99, 0.97);
rel("hemalurgy", "scadrial", "located_in", "Hemalurgy is practiced on Scadrial.", 0.98, 0.96);
rel("surgebinding", "roshar", "located_in", "Surgebinding is native to Roshar.", 0.99, 0.98);
rel("stormlight", "roshar", "located_in", "Stormlight fuels Rosharan magic.", 0.99, 0.97);
rel("spren", "roshar", "located_in", "Spren are native to Roshar's Cognitive ecology.", 0.99, 0.97);
rel("awakening", "nalthis", "located_in", "Awakening is practiced on Nalthis.", 0.99, 0.97);
rel("biochromatic-breath", "nalthis", "located_in", "Breath is Endowment's gift on Nalthis.", 0.99, 0.97);
rel("aondor", "sel", "located_in", "AonDor is a Selish magic system.", 0.99, 0.96);

rel("vin", "mistborn", "involved", "Vin is the central Mistborn of Era 1.", 0.99, 0.98);
rel("kelsier", "mistborn", "involved", "Kelsier drives the rebellion in Mistborn.", 0.99, 0.98);
rel("kelsier", "vin", "influenced", "Kelsier trains and inspires Vin.", 0.98, 0.97);
rel("vin", "elend-venture", "connected_to", "Vin and Elend fight together for Scadrial.", 0.98, 0.96);
rel("vin", "allomancy", "uses", "Vin is a full Mistborn Allomancer.", 0.99, 0.97);
rel("kelsier", "allomancy", "uses", "Kelsier is a Mistborn Allomancer.", 0.99, 0.97);
rel("sazed", "feruchemy", "uses", "Sazed is a Feruchemist Keeper.", 0.99, 0.97);
rel("sazed", "the-hero-of-ages", "involved", "Sazed's Ascension closes The Hero of Ages.", 0.99, 0.98);
rel("lord-ruler", "final-empire", "leads", "The Lord Ruler ruled the Final Empire.", 0.99, 0.98);
rel("kelsier", "final-empire", "opposed_by", "Kelsier leads the uprising against the Final Empire.", 0.97, 0.96);
rel("waxillium-ladrian", "wayne", "connected_to", "Wax and Wayne partner through Era 2.", 0.99, 0.97);
rel("waxillium-ladrian", "the-alloy-of-law", "involved", "Wax is the protagonist of The Alloy of Law.", 0.98, 0.96);

rel("kaladin", "the-stormlight-archive", "involved", "Kaladin is a primary Stormlight protagonist.", 0.99, 0.99);
rel("shallan-davar", "the-stormlight-archive", "involved", "Shallan is a primary Stormlight protagonist.", 0.99, 0.99);
rel("dalinar-kholin", "the-stormlight-archive", "involved", "Dalinar is a primary Stormlight protagonist.", 0.99, 0.99);
rel("kaladin", "sylphrena", "connected_to", "Kaladin's Nahel bond is with Syl.", 0.99, 0.99);
rel("shallan-davar", "pattern", "connected_to", "Shallan's Nahel bond is with Pattern.", 0.99, 0.99);
rel("kaladin", "bridge-four", "leads", "Kaladin captains Bridge Four.", 0.99, 0.98);
rel("kaladin", "surgebinding", "uses", "Kaladin Surgebinds as a Windrunner.", 0.99, 0.97);
rel("shallan-davar", "surgebinding", "uses", "Shallan Surgebinds as a Lightweaver.", 0.99, 0.97);
rel("dalinar-kholin", "knights-radiant", "leads", "Dalinar helps restore the Knights Radiant.", 0.98, 0.97);
rel("knights-radiant", "surgebinding", "uses", "Radiants wield Surgebinding through oaths.", 0.99, 0.98);
rel("odium", "dalinar-kholin", "opposed_by", "Dalinar stands against Odium.", 0.98, 0.97);
rel("rayse", "odium", "connected_to", "Rayse was Odium's Vessel.", 0.99, 0.98);
rel("taravangian", "odium", "connected_to", "Taravangian becomes Odium's Vessel.", 0.99, 0.97);
rel("szeth", "the-way-of-kings", "involved", "Szeth's assassinations open The Way of Kings.", 0.97, 0.95);
rel("ghostbloods", "shallan-davar", "connected_to", "Shallan becomes entangled with the Ghostbloods.", 0.97, 0.95);

rel("vasher", "warbreaker", "involved", "Vasher is central to Warbreaker.", 0.99, 0.97);
rel("vivenna", "warbreaker", "involved", "Vivenna is a protagonist of Warbreaker.", 0.99, 0.97);
rel("vasher", "awakening", "uses", "Vasher is a master Awakener.", 0.99, 0.96);
rel("raoden", "elantris", "involved", "Raoden is a protagonist of Elantris.", 0.99, 0.97);
rel("sarene", "elantris", "involved", "Sarene is a protagonist of Elantris.", 0.99, 0.97);
rel("hrathen", "elantris", "involved", "Hrathen's mission drives Elantris' conflict.", 0.98, 0.95);
rel("raoden", "aondor", "uses", "Raoden restores and uses AonDor.", 0.98, 0.96);

rel("hoid", "cosmere", "connected_to", "Hoid worldhops throughout the Cosmere.", 0.99, 0.99);
rel("hoid", "the-stormlight-archive", "involved", "Hoid appears as Wit in The Stormlight Archive.", 0.98, 0.97);
rel("hoid", "mistborn", "involved", "Hoid appears in Mistborn stories.", 0.96, 0.94);
rel("hoid", "warbreaker", "involved", "Hoid appears in Warbreaker.", 0.95, 0.93);
rel("hoid", "worldhopper", "connected_to", "Hoid is the Cosmere's iconic worldhopper.", 0.99, 0.98);

rel("shadesmar", "cognitive-realm", "connected_to", "Shadesmar is Roshar's view of the Cognitive Realm.", 0.99, 0.97);
rel("perpendicularity", "worldhopper", "uses", "Worldhoppers often travel via Perpendicularities.", 0.97, 0.95);
rel("kholin-family", "dalinar-kholin", "contains", "Dalinar is a central Kholin.", 0.98, 0.95);
rel("kholin-family", "adolin-kholin", "contains", "Adolin is a central Kholin.", 0.97, 0.94);
rel("kholin-family", "jasnah-kholin", "contains", "Jasnah is a central Kholin.", 0.97, 0.94);

module.exports = { entities, relationships };
