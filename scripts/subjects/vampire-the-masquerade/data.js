/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "vampire-the-masquerade",
        "name": "Vampire: The Masquerade",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "World of Darkness RPG of clans, the Camarilla, and the Masquerade.",
        "description": "Vampire: The Masquerade is the tabletop RPG where players portray Kindred—vampires bound by the Masquerade, clan curse, and sect politics among the Camarilla, Sabbat, and Anarchs in the World of Darkness.",
        "aliases": []
    },
    {
        "slug": "white-wolf",
        "name": "White Wolf",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Original publisher of Vampire and the World of Darkness.",
        "description": "White Wolf Publishing created Vampire: The Masquerade and the broader World of Darkness, defining clan lore, sect conflict, and Storyteller-era RPG design.",
        "aliases": []
    },
    {
        "slug": "paradox-interactive",
        "name": "Paradox Interactive",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Current steward of the World of Darkness IP.",
        "description": "Paradox Interactive owns the World of Darkness brand today, licensing Vampire: The Masquerade RPGs and related games after White Wolf's later corporate history.",
        "aliases": []
    },
    {
        "slug": "mark-rein-hagen",
        "name": "Mark Rein·Hagen",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of Vampire: The Masquerade.",
        "description": "Mark Rein·Hagen co-founded White Wolf and created Vampire: The Masquerade, framing personal horror, clan identity, and sect intrigue as core play.",
        "aliases": []
    },
    {
        "slug": "world-of-darkness",
        "name": "World of Darkness",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Gothic-punk shared universe of modern supernatural horror.",
        "description": "The World of Darkness is a mirror of our world where vampires, werewolves, and mages hide in shadow—a tone of personal horror behind urban Gothic façades.",
        "aliases": []
    },
    {
        "slug": "kindred",
        "name": "Kindred",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Vampires of the Masquerade setting.",
        "description": "Kindred are vampires who survive on blood, suffer clan banes and compulsions, and navigate centuries of politics while hiding from mortal society.",
        "aliases": []
    },
    {
        "slug": "the-masquerade",
        "name": "The Masquerade",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Law that vampires must hide from humanity.",
        "description": "The Masquerade is the Camarilla's foundational tradition: Kindred must conceal their existence from mortals, punishing breaches that risk the species.",
        "aliases": []
    },
    {
        "slug": "the-embrace",
        "name": "The Embrace",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Act of creating a new vampire.",
        "description": "The Embrace is the ritual by which a sire drains and feeds vitae to a childe, birthing a new Kindred bound to clan curse and sect law.",
        "aliases": []
    },
    {
        "slug": "disciplines",
        "name": "Disciplines",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Supernatural powers of the blood.",
        "description": "Disciplines are vampiric powers—from Dominate and Presence to Obfuscate—tied to clan lineage and learned through experience and mentors.",
        "aliases": []
    },
    {
        "slug": "blood-bond",
        "name": "Blood Bond",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Emotional thrall created by repeated feeding.",
        "description": "A blood bond forms when a Kindred drinks a regnant's vitae repeatedly, forging devotion that can enslave lovers, childer, or unwitting ghouls.",
        "aliases": []
    },
    {
        "slug": "coterie",
        "name": "Coterie",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Typical player group of allied Kindred.",
        "description": "A coterie is the circle of vampires who hunt, politick, and survive together—often the default unit of Vampire chronicles.",
        "aliases": []
    },
    {
        "slug": "prince",
        "name": "Prince",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Ruler of a Camarilla city.",
        "description": "The Prince claims domain over a city, enforcing Traditions, granting hunting rights, and arbitrating disputes among local Kindred.",
        "aliases": []
    },
    {
        "slug": "elysium",
        "name": "Elysium",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Neutral ground where violence is forbidden.",
        "description": "Elysium is sacred neutral territory—often art galleries or historic halls—where sect members negotiate under a ban on open conflict.",
        "aliases": []
    },
    {
        "slug": "ghouls",
        "name": "Ghouls",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Mortals fed vampire blood without the Embrace.",
        "description": "Ghouls are mortals who drink Kindred vitae, gaining minor powers and slowed aging while bound to their regnant's will.",
        "aliases": []
    },
    {
        "slug": "camarilla",
        "name": "Camarilla",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Conservative sect upholding the Masquerade.",
        "description": "The Camarilla is the sect of elders and princes who enforce the Masquerade, Traditions, and feudal domain rights across Western cities.",
        "aliases": []
    },
    {
        "slug": "sabbat",
        "name": "Sabbat",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Antitribu sect reveling in vampiric nature.",
        "description": "The Sabbat rejects humanity, embracing packs, ritae, and war against the Camarilla as monsters unashamed of the Beast.",
        "aliases": []
    },
    {
        "slug": "anarch-movement",
        "name": "Anarch Movement",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Revolutionary Kindred opposing elder tyranny.",
        "description": "The Anarch Movement fights Camarilla feudalism, seeking baronies and freedoms for younger Kindred tired of elder manipulation.",
        "aliases": []
    },
    {
        "slug": "second-inquisition",
        "name": "Second Inquisition",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Modern hunter coalition threatening the Masquerade.",
        "description": "The Second Inquisition unites intelligence agencies and Vatican hunters who exploit data leaks to exterminate Kindred in the late modern nights.",
        "aliases": []
    },
    {
        "slug": "clans",
        "name": "Clans",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Lineages of shared blood and curse.",
        "description": "Clans are vampiric bloodlines descended from Antediluvians, each with a signature Discipline, bane, and compulsion shaping Kindred identity.",
        "aliases": []
    },
    {
        "slug": "brujah",
        "name": "Brujah",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Clan of passion, rebellion, and rage.",
        "description": "Brujah are passionate rebels whose compulsion toward outrage and political fury makes them Anarch firebrands and Camarilla troublemakers alike.",
        "aliases": []
    },
    {
        "slug": "gangrel",
        "name": "Gangrel",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Clan of shapeshifting wilderness survivors.",
        "description": "Gangrel roam borders and wild places, Protean shapeshifters who often abandon sects when cities grow too claustrophobic.",
        "aliases": []
    },
    {
        "slug": "malkavian",
        "name": "Malkavian",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Clan touched by prophetic madness.",
        "description": "Malkavians bear the clan's fractured insight—omens, compulsions, and Dementation or Auspex gifts that unsettle princes and coteries.",
        "aliases": []
    },
    {
        "slug": "nosferatu",
        "name": "Nosferatu",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Clan of spies disfigured by the Embrace.",
        "description": "Nosferatu hide in sewers and networks, trading secrets through Obfuscate and Animalism while their appearance enforces the Masquerade's secrecy.",
        "aliases": []
    },
    {
        "slug": "toreador",
        "name": "Toreador",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Clan of artists, hedonists, and social predators.",
        "description": "Toreador obsess over beauty and sensation, using Presence to captivate Elysium salons while their clan bane fixates them on aesthetic obsession.",
        "aliases": []
    },
    {
        "slug": "tremere",
        "name": "Tremere",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Clan of blood sorcerers and pyramid hierarchy.",
        "description": "Tremere wield Blood Sorcery (Thaumaturgy) within a rigid pyramid, once usurpers who became indispensable—and feared—Camarilla tools.",
        "aliases": []
    },
    {
        "slug": "ventrue",
        "name": "Ventrue",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Clan of blue-blood leaders and domain lords.",
        "description": "Ventrue claim princes and primogen seats, feeding only from a chosen vessel type and embodying Camarilla aristocracy.",
        "aliases": []
    },
    {
        "slug": "lasombra",
        "name": "Lasombra",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Clan of shadow masters leading the Sabbat.",
        "description": "Lasombra command shadows and ambition, historically anchoring Sabbat leadership with Obtenebration and ruthless political theology.",
        "aliases": []
    },
    {
        "slug": "tzimisce",
        "name": "Tzimisce",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Clan of flesh-shapers and territorial fiends.",
        "description": "Tzimisce practice Vicissitude in Eastern domains and Sabbat packs, treating bodies and land as clay for horrifying transformation.",
        "aliases": []
    },
    {
        "slug": "banu-haqim",
        "name": "Banu Haqim",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Clan of judges and assassins (formerly Assamites).",
        "description": "Banu Haqim enforce codes of blood and judgment, blending warrior traditions with a clan-wide hunger that once made them Camarilla pariahs.",
        "aliases": []
    },
    {
        "slug": "caine",
        "name": "Caine",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mythic first vampire of Kindred lore.",
        "description": "Caine is the biblical figure Kindred myth names as the first vampire, cursed by God and siring the Antediluvians whose lines became clans.",
        "aliases": []
    },
    {
        "slug": "antediluvians",
        "name": "Antediluvians",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Ancient clan founders feared in Gehenna lore.",
        "description": "Antediluvians are the millennia-old progenitors of clans, sleeping threats whose awakening Gehenna prophecies tie to the Jyhad.",
        "aliases": []
    },
    {
        "slug": "jyhad",
        "name": "Jyhad",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Hidden war of elders manipulating younger Kindred.",
        "description": "The Jyhad is the endless shadow conflict where methuselahs and elders use childer and sects as pawns while denying their own involvement.",
        "aliases": []
    },
    {
        "slug": "vampire-the-masquerade-figures",
        "name": "Vampire: The Masquerade figures",
        "type": "topic",
        "short_description": "People and named forces central to Vampire: The Masquerade.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Vampire: The Masquerade."
    },
    {
        "slug": "vampire-the-masquerade-places",
        "name": "Vampire: The Masquerade places",
        "type": "place",
        "short_description": "Locations and geographies that frame Vampire: The Masquerade.",
        "description": "Places, regions, and built sites that give Vampire: The Masquerade its map — where events and figures concentrate."
    },
    {
        "slug": "vampire-the-masquerade-events",
        "name": "Vampire: The Masquerade events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Vampire: The Masquerade.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Vampire: The Masquerade timeline."
    },
    {
        "slug": "vampire-the-masquerade-objects",
        "name": "Vampire: The Masquerade objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Vampire: The Masquerade.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Vampire: The Masquerade."
    },
    {
        "slug": "vampire-the-masquerade-factions",
        "name": "Vampire: The Masquerade factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Vampire: The Masquerade.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Vampire: The Masquerade."
    },
    {
        "slug": "vampire-the-masquerade-concepts",
        "name": "Vampire: The Masquerade concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Vampire: The Masquerade.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Vampire: The Masquerade readable as a lore graph."
    },
    {
        "slug": "vampire-the-masquerade-eras",
        "name": "Vampire: The Masquerade eras",
        "type": "event",
        "short_description": "Periodization for Vampire: The Masquerade.",
        "description": "Named eras and phases that help readers track how Vampire: The Masquerade changes across time."
    },
    {
        "slug": "vampire-the-masquerade-works",
        "name": "Vampire: The Masquerade works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Vampire: The Masquerade.",
        "description": "Primary works and adaptations through which most audiences encounter Vampire: The Masquerade."
    }
];

const relationships = [
    [
        "mark-rein-hagen",
        "vampire-the-masquerade",
        "created",
        "Rein·Hagen created Vampire: The Masquerade.",
        0.99,
        0.99
    ],
    [
        "white-wolf",
        "vampire-the-masquerade",
        "published",
        "White Wolf originally published Vampire.",
        0.98,
        0.97
    ],
    [
        "paradox-interactive",
        "world-of-darkness",
        "publishes",
        "Paradox stewards the World of Darkness today.",
        0.96,
        0.93
    ],
    [
        "vampire-the-masquerade",
        "world-of-darkness",
        "part_of",
        "Vampire is a core World of Darkness game.",
        0.99,
        0.98
    ],
    [
        "kindred",
        "vampire-the-masquerade",
        "part_of",
        "Players portray Kindred in Vampire.",
        0.99,
        0.99
    ],
    [
        "the-masquerade",
        "camarilla",
        "part_of",
        "The Camarilla enforces the Masquerade.",
        0.98,
        0.97
    ],
    [
        "clans",
        "kindred",
        "part_of",
        "Every Kindred belongs to a clan.",
        0.98,
        0.96
    ],
    [
        "disciplines",
        "kindred",
        "part_of",
        "Kindred wield clan Disciplines.",
        0.97,
        0.95
    ],
    [
        "the-embrace",
        "kindred",
        "created",
        "The Embrace creates new Kindred.",
        0.98,
        0.96
    ],
    [
        "coterie",
        "vampire-the-masquerade",
        "part_of",
        "Chronicles center on coteries.",
        0.96,
        0.93
    ],
    [
        "prince",
        "camarilla",
        "part_of",
        "Princes rule Camarilla domains.",
        0.97,
        0.95
    ],
    [
        "elysium",
        "camarilla",
        "part_of",
        "Elysium traditions belong to Camarilla cities.",
        0.95,
        0.92
    ],
    [
        "camarilla",
        "sabbat",
        "opposed_by",
        "Camarilla and Sabbat war across the nights.",
        0.98,
        0.96
    ],
    [
        "anarch-movement",
        "camarilla",
        "opposed_by",
        "Anarchs rebel against Camarilla elders.",
        0.97,
        0.95
    ],
    [
        "second-inquisition",
        "the-masquerade",
        "opposed_by",
        "Hunters threaten to break the Masquerade.",
        0.96,
        0.94
    ],
    [
        "second-inquisition",
        "kindred",
        "opposed_by",
        "The Inquisition hunts Kindred globally.",
        0.97,
        0.95
    ],
    [
        "brujah",
        "clans",
        "member_of",
        "Brujah are a major clan.",
        0.98,
        0.96
    ],
    [
        "gangrel",
        "clans",
        "member_of",
        "Gangrel are a major clan.",
        0.98,
        0.96
    ],
    [
        "malkavian",
        "clans",
        "member_of",
        "Malkavians are a major clan.",
        0.98,
        0.96
    ],
    [
        "nosferatu",
        "clans",
        "member_of",
        "Nosferatu are a major clan.",
        0.98,
        0.96
    ],
    [
        "toreador",
        "clans",
        "member_of",
        "Toreador are a major clan.",
        0.98,
        0.96
    ],
    [
        "tremere",
        "clans",
        "member_of",
        "Tremere are a major clan.",
        0.98,
        0.96
    ],
    [
        "ventrue",
        "clans",
        "member_of",
        "Ventrue are a major clan.",
        0.98,
        0.96
    ],
    [
        "lasombra",
        "clans",
        "member_of",
        "Lasombra are a major clan.",
        0.97,
        0.95
    ],
    [
        "tzimisce",
        "clans",
        "member_of",
        "Tzimisce are a major clan.",
        0.97,
        0.95
    ],
    [
        "banu-haqim",
        "clans",
        "member_of",
        "Banu Haqim are a major clan.",
        0.97,
        0.95
    ],
    [
        "brujah",
        "camarilla",
        "member_of",
        "Brujah often appear in Camarilla cities.",
        0.94,
        0.9
    ],
    [
        "brujah",
        "anarch-movement",
        "connected_to",
        "Brujah frequently lead Anarch causes.",
        0.95,
        0.92
    ],
    [
        "ventrue",
        "camarilla",
        "member_of",
        "Ventrue traditionally anchor the Camarilla.",
        0.96,
        0.93
    ],
    [
        "lasombra",
        "sabbat",
        "member_of",
        "Lasombra historically lead Sabbat packs.",
        0.96,
        0.93
    ],
    [
        "tzimisce",
        "sabbat",
        "member_of",
        "Tzimisce are iconic Sabbat horrors.",
        0.95,
        0.92
    ],
    [
        "tremere",
        "camarilla",
        "member_of",
        "Tremere serve Camarilla princes as warlocks.",
        0.94,
        0.9
    ],
    [
        "ghouls",
        "kindred",
        "connected_to",
        "Ghouls serve Kindred through the blood bond.",
        0.96,
        0.93
    ],
    [
        "blood-bond",
        "ghouls",
        "related_to",
        "Ghouls often fall under blood bonds.",
        0.95,
        0.91
    ],
    [
        "caine",
        "antediluvians",
        "created",
        "Myth names Caine sire of the Antediluvians.",
        0.94,
        0.88
    ],
    [
        "antediluvians",
        "clans",
        "connected_to",
        "Clans descend from Antediluvian founders.",
        0.96,
        0.93
    ],
    [
        "jyhad",
        "antediluvians",
        "motivated_by",
        "Elders wage the Jyhad for Antediluvian stakes.",
        0.93,
        0.88
    ],
    [
        "jyhad",
        "camarilla",
        "related_to",
        "Sect wars are fronts in the Jyhad.",
        0.92,
        0.87
    ],
    [
        "vampire-the-masquerade",
        "vampire-the-masquerade-figures",
        "contains",
        "Vampire: The Masquerade figures is a primary trailhead under Vampire: The Masquerade.",
        0.88,
        0.82
    ],
    [
        "vampire-the-masquerade",
        "vampire-the-masquerade-places",
        "contains",
        "Vampire: The Masquerade places is a primary trailhead under Vampire: The Masquerade.",
        0.88,
        0.82
    ],
    [
        "vampire-the-masquerade",
        "vampire-the-masquerade-events",
        "contains",
        "Vampire: The Masquerade events is a primary trailhead under Vampire: The Masquerade.",
        0.88,
        0.82
    ],
    [
        "vampire-the-masquerade",
        "vampire-the-masquerade-objects",
        "contains",
        "Vampire: The Masquerade objects & artifacts is a primary trailhead under Vampire: The Masquerade.",
        0.88,
        0.82
    ],
    [
        "vampire-the-masquerade",
        "vampire-the-masquerade-factions",
        "contains",
        "Vampire: The Masquerade factions & groups is a primary trailhead under Vampire: The Masquerade.",
        0.88,
        0.82
    ],
    [
        "vampire-the-masquerade",
        "vampire-the-masquerade-concepts",
        "contains",
        "Vampire: The Masquerade concepts is a primary trailhead under Vampire: The Masquerade.",
        0.88,
        0.82
    ],
    [
        "vampire-the-masquerade",
        "vampire-the-masquerade-eras",
        "contains",
        "Vampire: The Masquerade eras is a primary trailhead under Vampire: The Masquerade.",
        0.88,
        0.82
    ],
    [
        "vampire-the-masquerade",
        "vampire-the-masquerade-works",
        "contains",
        "Vampire: The Masquerade works & media is a primary trailhead under Vampire: The Masquerade.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
