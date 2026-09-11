/*
 * Vampire: The Masquerade subject data — World of Darkness tabletop RPG.
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

/* ---------- Root / publishers ---------- */

entity(
    "vampire-the-masquerade",
    "Vampire: The Masquerade",
    "topic",
    "World of Darkness RPG of clans, the Camarilla, and the Masquerade.",
    "Vampire: The Masquerade is the tabletop RPG where players portray Kindred—vampires bound by the Masquerade, clan curse, and sect politics among the Camarilla, Sabbat, and Anarchs in the World of Darkness."
);

entity(
    "white-wolf",
    "White Wolf",
    "organization",
    "Original publisher of Vampire and the World of Darkness.",
    "White Wolf Publishing created Vampire: The Masquerade and the broader World of Darkness, defining clan lore, sect conflict, and Storyteller-era RPG design."
);

entity(
    "paradox-interactive",
    "Paradox Interactive",
    "organization",
    "Current steward of the World of Darkness IP.",
    "Paradox Interactive owns the World of Darkness brand today, licensing Vampire: The Masquerade RPGs and related games after White Wolf's later corporate history."
);

entity(
    "mark-rein-hagen",
    "Mark Rein·Hagen",
    "person",
    "Creator of Vampire: The Masquerade.",
    "Mark Rein·Hagen co-founded White Wolf and created Vampire: The Masquerade, framing personal horror, clan identity, and sect intrigue as core play."
);

/* ---------- Setting / core concepts ---------- */

entity(
    "world-of-darkness",
    "World of Darkness",
    "concept",
    "Gothic-punk shared universe of modern supernatural horror.",
    "The World of Darkness is a mirror of our world where vampires, werewolves, and mages hide in shadow—a tone of personal horror behind urban Gothic façades."
);

entity(
    "kindred",
    "Kindred",
    "concept",
    "Vampires of the Masquerade setting.",
    "Kindred are vampires who survive on blood, suffer clan banes and compulsions, and navigate centuries of politics while hiding from mortal society."
);

entity(
    "the-masquerade",
    "The Masquerade",
    "concept",
    "Law that vampires must hide from humanity.",
    "The Masquerade is the Camarilla's foundational tradition: Kindred must conceal their existence from mortals, punishing breaches that risk the species."
);

entity(
    "the-embrace",
    "The Embrace",
    "concept",
    "Act of creating a new vampire.",
    "The Embrace is the ritual by which a sire drains and feeds vitae to a childe, birthing a new Kindred bound to clan curse and sect law."
);

entity(
    "disciplines",
    "Disciplines",
    "concept",
    "Supernatural powers of the blood.",
    "Disciplines are vampiric powers—from Dominate and Presence to Obfuscate—tied to clan lineage and learned through experience and mentors."
);

entity(
    "blood-bond",
    "Blood Bond",
    "concept",
    "Emotional thrall created by repeated feeding.",
    "A blood bond forms when a Kindred drinks a regnant's vitae repeatedly, forging devotion that can enslave lovers, childer, or unwitting ghouls."
);

entity(
    "coterie",
    "Coterie",
    "concept",
    "Typical player group of allied Kindred.",
    "A coterie is the circle of vampires who hunt, politick, and survive together—often the default unit of Vampire chronicles."
);

entity(
    "prince",
    "Prince",
    "concept",
    "Ruler of a Camarilla city.",
    "The Prince claims domain over a city, enforcing Traditions, granting hunting rights, and arbitrating disputes among local Kindred."
);

entity(
    "elysium",
    "Elysium",
    "concept",
    "Neutral ground where violence is forbidden.",
    "Elysium is sacred neutral territory—often art galleries or historic halls—where sect members negotiate under a ban on open conflict."
);

entity(
    "ghouls",
    "Ghouls",
    "concept",
    "Mortals fed vampire blood without the Embrace.",
    "Ghouls are mortals who drink Kindred vitae, gaining minor powers and slowed aging while bound to their regnant's will."
);

/* ---------- Sects ---------- */

entity(
    "camarilla",
    "Camarilla",
    "organization",
    "Conservative sect upholding the Masquerade.",
    "The Camarilla is the sect of elders and princes who enforce the Masquerade, Traditions, and feudal domain rights across Western cities."
);

entity(
    "sabbat",
    "Sabbat",
    "organization",
    "Antitribu sect reveling in vampiric nature.",
    "The Sabbat rejects humanity, embracing packs, ritae, and war against the Camarilla as monsters unashamed of the Beast."
);

entity(
    "anarch-movement",
    "Anarch Movement",
    "organization",
    "Revolutionary Kindred opposing elder tyranny.",
    "The Anarch Movement fights Camarilla feudalism, seeking baronies and freedoms for younger Kindred tired of elder manipulation."
);

entity(
    "second-inquisition",
    "Second Inquisition",
    "organization",
    "Modern hunter coalition threatening the Masquerade.",
    "The Second Inquisition unites intelligence agencies and Vatican hunters who exploit data leaks to exterminate Kindred in the late modern nights."
);

/* ---------- Clans (umbrella + representatives) ---------- */

entity(
    "clans",
    "Clans",
    "concept",
    "Lineages of shared blood and curse.",
    "Clans are vampiric bloodlines descended from Antediluvians, each with a signature Discipline, bane, and compulsion shaping Kindred identity."
);

entity(
    "brujah",
    "Brujah",
    "concept",
    "Clan of passion, rebellion, and rage.",
    "Brujah are passionate rebels whose compulsion toward outrage and political fury makes them Anarch firebrands and Camarilla troublemakers alike."
);

entity(
    "gangrel",
    "Gangrel",
    "concept",
    "Clan of shapeshifting wilderness survivors.",
    "Gangrel roam borders and wild places, Protean shapeshifters who often abandon sects when cities grow too claustrophobic."
);

entity(
    "malkavian",
    "Malkavian",
    "concept",
    "Clan touched by prophetic madness.",
    "Malkavians bear the clan's fractured insight—omens, compulsions, and Dementation or Auspex gifts that unsettle princes and coteries."
);

entity(
    "nosferatu",
    "Nosferatu",
    "concept",
    "Clan of spies disfigured by the Embrace.",
    "Nosferatu hide in sewers and networks, trading secrets through Obfuscate and Animalism while their appearance enforces the Masquerade's secrecy."
);

entity(
    "toreador",
    "Toreador",
    "concept",
    "Clan of artists, hedonists, and social predators.",
    "Toreador obsess over beauty and sensation, using Presence to captivate Elysium salons while their clan bane fixates them on aesthetic obsession."
);

entity(
    "tremere",
    "Tremere",
    "concept",
    "Clan of blood sorcerers and pyramid hierarchy.",
    "Tremere wield Blood Sorcery (Thaumaturgy) within a rigid pyramid, once usurpers who became indispensable—and feared—Camarilla tools."
);

entity(
    "ventrue",
    "Ventrue",
    "concept",
    "Clan of blue-blood leaders and domain lords.",
    "Ventrue claim princes and primogen seats, feeding only from a chosen vessel type and embodying Camarilla aristocracy."
);

entity(
    "lasombra",
    "Lasombra",
    "concept",
    "Clan of shadow masters leading the Sabbat.",
    "Lasombra command shadows and ambition, historically anchoring Sabbat leadership with Obtenebration and ruthless political theology."
);

entity(
    "tzimisce",
    "Tzimisce",
    "concept",
    "Clan of flesh-shapers and territorial fiends.",
    "Tzimisce practice Vicissitude in Eastern domains and Sabbat packs, treating bodies and land as clay for horrifying transformation."
);

entity(
    "banu-haqim",
    "Banu Haqim",
    "concept",
    "Clan of judges and assassins (formerly Assamites).",
    "Banu Haqim enforce codes of blood and judgment, blending warrior traditions with a clan-wide hunger that once made them Camarilla pariahs."
);

/* ---------- Myth / lore touchstones ---------- */

entity(
    "caine",
    "Caine",
    "person",
    "Mythic first vampire of Kindred lore.",
    "Caine is the biblical figure Kindred myth names as the first vampire, cursed by God and siring the Antediluvians whose lines became clans."
);

entity(
    "antediluvians",
    "Antediluvians",
    "concept",
    "Ancient clan founders feared in Gehenna lore.",
    "Antediluvians are the millennia-old progenitors of clans, sleeping threats whose awakening Gehenna prophecies tie to the Jyhad."
);

entity(
    "jyhad",
    "Jyhad",
    "concept",
    "Hidden war of elders manipulating younger Kindred.",
    "The Jyhad is the endless shadow conflict where methuselahs and elders use childer and sects as pawns while denying their own involvement."
);

/* ---------- Relationships ---------- */

rel("mark-rein-hagen", "vampire-the-masquerade", "created", "Rein·Hagen created Vampire: The Masquerade.", 0.99, 0.99);
rel("white-wolf", "vampire-the-masquerade", "published", "White Wolf originally published Vampire.", 0.98, 0.97);
rel("paradox-interactive", "world-of-darkness", "publishes", "Paradox stewards the World of Darkness today.", 0.96, 0.93);
rel("vampire-the-masquerade", "world-of-darkness", "part_of", "Vampire is a core World of Darkness game.", 0.99, 0.98);

rel("kindred", "vampire-the-masquerade", "part_of", "Players portray Kindred in Vampire.", 0.99, 0.99);
rel("the-masquerade", "camarilla", "part_of", "The Camarilla enforces the Masquerade.", 0.98, 0.97);
rel("clans", "kindred", "part_of", "Every Kindred belongs to a clan.", 0.98, 0.96);
rel("disciplines", "kindred", "part_of", "Kindred wield clan Disciplines.", 0.97, 0.95);
rel("the-embrace", "kindred", "created", "The Embrace creates new Kindred.", 0.98, 0.96);
rel("coterie", "vampire-the-masquerade", "part_of", "Chronicles center on coteries.", 0.96, 0.93);
rel("prince", "camarilla", "part_of", "Princes rule Camarilla domains.", 0.97, 0.95);
rel("elysium", "camarilla", "part_of", "Elysium traditions belong to Camarilla cities.", 0.95, 0.92);

rel("camarilla", "sabbat", "opposed_by", "Camarilla and Sabbat war across the nights.", 0.98, 0.96);
rel("anarch-movement", "camarilla", "opposed_by", "Anarchs rebel against Camarilla elders.", 0.97, 0.95);
rel("second-inquisition", "the-masquerade", "opposed_by", "Hunters threaten to break the Masquerade.", 0.96, 0.94);
rel("second-inquisition", "kindred", "opposed_by", "The Inquisition hunts Kindred globally.", 0.97, 0.95);

rel("brujah", "clans", "member_of", "Brujah are a major clan.", 0.98, 0.96);
rel("gangrel", "clans", "member_of", "Gangrel are a major clan.", 0.98, 0.96);
rel("malkavian", "clans", "member_of", "Malkavians are a major clan.", 0.98, 0.96);
rel("nosferatu", "clans", "member_of", "Nosferatu are a major clan.", 0.98, 0.96);
rel("toreador", "clans", "member_of", "Toreador are a major clan.", 0.98, 0.96);
rel("tremere", "clans", "member_of", "Tremere are a major clan.", 0.98, 0.96);
rel("ventrue", "clans", "member_of", "Ventrue are a major clan.", 0.98, 0.96);
rel("lasombra", "clans", "member_of", "Lasombra are a major clan.", 0.97, 0.95);
rel("tzimisce", "clans", "member_of", "Tzimisce are a major clan.", 0.97, 0.95);
rel("banu-haqim", "clans", "member_of", "Banu Haqim are a major clan.", 0.97, 0.95);

rel("brujah", "camarilla", "member_of", "Brujah often appear in Camarilla cities.", 0.94, 0.9);
rel("brujah", "anarch-movement", "connected_to", "Brujah frequently lead Anarch causes.", 0.95, 0.92);
rel("ventrue", "camarilla", "member_of", "Ventrue traditionally anchor the Camarilla.", 0.96, 0.93);
rel("lasombra", "sabbat", "member_of", "Lasombra historically lead Sabbat packs.", 0.96, 0.93);
rel("tzimisce", "sabbat", "member_of", "Tzimisce are iconic Sabbat horrors.", 0.95, 0.92);
rel("tremere", "camarilla", "member_of", "Tremere serve Camarilla princes as warlocks.", 0.94, 0.9);

rel("ghouls", "kindred", "connected_to", "Ghouls serve Kindred through the blood bond.", 0.96, 0.93);
rel("blood-bond", "ghouls", "related_to", "Ghouls often fall under blood bonds.", 0.95, 0.91);
rel("caine", "antediluvians", "created", "Myth names Caine sire of the Antediluvians.", 0.94, 0.88);
rel("antediluvians", "clans", "connected_to", "Clans descend from Antediluvian founders.", 0.96, 0.93);
rel("jyhad", "antediluvians", "motivated_by", "Elders wage the Jyhad for Antediluvian stakes.", 0.93, 0.88);
rel("jyhad", "camarilla", "related_to", "Sect wars are fronts in the Jyhad.", 0.92, 0.87);

module.exports = { entities, relationships };
