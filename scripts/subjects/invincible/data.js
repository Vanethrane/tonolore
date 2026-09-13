/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "invincible",
        "name": "Invincible",
        "type": "topic",
        "evidence": "fiction",
        "short_description": "Robert Kirkman's brutal superhero comic and Amazon series.",
        "description": "Invincible is Robert Kirkman's Image Comics superhero saga and Amazon Prime Video adaptation about Mark Grayson, a Viltrumite hero who discovers his father Omni-Man's genocidal mission and faces cosmic war, betrayal, and moral compromise.",
        "aliases": []
    },
    {
        "slug": "robert-kirkman",
        "name": "Robert Kirkman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Creator of Invincible.",
        "description": "Robert Kirkman co-created Invincible with Cory Walker for Image Comics, writing Mark Grayson's coming-of-age amid Viltrumite conquest and subverting superhero tropes with graphic violence.",
        "aliases": []
    },
    {
        "slug": "image-comics",
        "name": "Image Comics",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Publisher of the Invincible comic.",
        "description": "Image Comics publishes Invincible and Kirkman's other creator-owned titles, distributing the long-running comic that inspired the Amazon adaptation.",
        "aliases": []
    },
    {
        "slug": "amazon-studios",
        "name": "Amazon Studios",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Producer of the Invincible animated series.",
        "description": "Amazon Studios produces Invincible for Prime Video, adapting Kirkman's comic with animated brutality and expanding the Guardians of the Globe and Viltrumite mythology.",
        "aliases": []
    },
    {
        "slug": "invincible-comic",
        "name": "Invincible (comic)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Original Kirkman Image Comics series.",
        "description": "The Invincible comic follows Mark Grayson from power discovery through Viltrumite war, the Guardians massacre, Thragg's rebellion, and Mark's efforts to build a better world.",
        "aliases": []
    },
    {
        "slug": "invincible-tv-series",
        "name": "Invincible (TV series)",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Amazon Prime Video animated adaptation.",
        "description": "The Invincible TV series adapts Kirkman's early arcs for Prime Video, dramatizing Omni-Man's betrayal, the Guardians battle, and Mark's struggle to become a true hero.",
        "aliases": []
    },
    {
        "slug": "guardians-massacre-arc",
        "name": "Guardians Massacre Arc",
        "type": "work",
        "evidence": "fiction",
        "short_description": "Storyline where Omni-Man slaughters the Guardians.",
        "description": "The Guardians Massacre Arc is Invincible's shocking turning point when Nolan Grayson reveals his Viltrumite mission by killing the Guardians of the Globe.",
        "aliases": []
    },
    {
        "slug": "viltrumite-empire",
        "name": "Viltrumite Empire",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Interstellar empire of conquering superhumans.",
        "description": "The Viltrumite Empire sends warriors like Omni-Man to infiltrate and conquer planets, enforcing a doctrine of genetic purity and galactic domination.",
        "aliases": []
    },
    {
        "slug": "viltrumites",
        "name": "Viltrumites",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Alien race of nearly invulnerable conquerors.",
        "description": "Viltrumites are a powerful alien species with flight, strength, and longevity, bred as planetary conquerors serving the Viltrumite Empire.",
        "aliases": []
    },
    {
        "slug": "global-defense-agency",
        "name": "Global Defense Agency",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Secret organization monitoring superhuman threats.",
        "description": "The Global Defense Agency (GDA), led by Cecil Stedman, coordinates Earth's defense, funds the Guardians, and manipulates events to contain Viltrumite and superhuman crises.",
        "aliases": []
    },
    {
        "slug": "guardians-of-the-globe",
        "name": "Guardians of the Globe",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Earth's premier superhero team.",
        "description": "The Guardians of the Globe are Earth's flagship hero team — including Immortal, Red Rush, and others — destroyed by Omni-Man in Invincible's defining massacre.",
        "aliases": []
    },
    {
        "slug": "coalition-of-planets",
        "name": "Coalition of Planets",
        "type": "organization",
        "evidence": "fiction",
        "short_description": "Alliance opposing Viltrumite expansion.",
        "description": "The Coalition of Planets unites worlds resisting Viltrumite conquest, with allies like Allen the Alien supporting Mark Grayson against Thragg.",
        "aliases": []
    },
    {
        "slug": "earth-invincible",
        "name": "Earth (Invincible)",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Primary setting of Mark Grayson's hero career.",
        "description": "Earth in Invincible is the planet Omni-Man was sent to conquer, home to the GDA, Guardians, and Mark Grayson's struggle to protect humanity.",
        "aliases": []
    },
    {
        "slug": "viltrum",
        "name": "Viltrum",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Homeworld of the Viltrumite Empire.",
        "description": "Viltrum is the Viltrumite homeworld and seat of their empire, where Thragg and the ruling council direct conquest across the galaxy.",
        "aliases": []
    },
    {
        "slug": "gda-headquarters",
        "name": "GDA Headquarters",
        "type": "place",
        "evidence": "fiction",
        "short_description": "Secret base of the Global Defense Agency.",
        "description": "GDA Headquarters is Cecil Stedman's command center for monitoring superhumans, deploying the Guardians, and managing crises like the Omni-Man revelation.",
        "aliases": []
    },
    {
        "slug": "viltrumite-powers",
        "name": "Viltrumite Powers",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Flight, strength, and durability of Viltrumites.",
        "description": "Viltrumite powers include superhuman strength, flight, near-invulnerability, and extended lifespan — shared by Omni-Man, Mark Grayson, and their kind.",
        "aliases": []
    },
    {
        "slug": "sequids",
        "name": "Sequids",
        "type": "concept",
        "evidence": "fiction",
        "short_description": "Hive-mind parasites threatening allied worlds.",
        "description": "Sequids are a hive-minded species that attach to hosts and multiply, becoming a major Coalition threat separate from the Viltrumite war.",
        "aliases": []
    },
    {
        "slug": "mark-grayson",
        "name": "Mark Grayson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Teen hero Invincible and Omni-Man's son.",
        "description": "Mark Grayson is the teenage son of Omni-Man who develops Viltrumite powers, adopts the name Invincible, and fights to stop his father's conquest while forging his own heroic path.",
        "aliases": []
    },
    {
        "slug": "omni-man",
        "name": "Omni-Man",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Viltrumite conqueror disguised as Earth's greatest hero.",
        "description": "Omni-Man (Nolan Grayson) poses as Earth's premier superhero while secretly advancing Viltrumite conquest, culminating in the Guardians massacre before his conflict with Mark.",
        "aliases": []
    },
    {
        "slug": "atom-eve",
        "name": "Atom Eve",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Matter-manipulating hero and Mark's ally.",
        "description": "Atom Eve (Samantha Eve Wilkins) can restructure matter at the atomic level, partnering with Mark Grayson and resisting GDA manipulation.",
        "aliases": []
    },
    {
        "slug": "cecil-stedman",
        "name": "Cecil Stedman",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Ruthless director of the Global Defense Agency.",
        "description": "Cecil Stedman runs the GDA with pragmatic brutality, recruiting Mark, reviving Immortal, and making morally gray choices to defend Earth from Viltrumites.",
        "aliases": []
    },
    {
        "slug": "immortal",
        "name": "Immortal",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Resurrecting Guardian and veteran hero.",
        "description": "Immortal is a long-lived Guardian of the Globe who repeatedly returns from death, surviving Omni-Man's attack and continuing to fight for Earth.",
        "aliases": []
    },
    {
        "slug": "red-rush",
        "name": "Red Rush",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Speedster Guardian killed by Omni-Man.",
        "description": "Red Rush is the Guardians' super-speed member whose desperate fight against Omni-Man highlights the Viltrumite's overwhelming power in the massacre.",
        "aliases": []
    },
    {
        "slug": "thragg",
        "name": "Thragg",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Grand Regent of the Viltrumite Empire.",
        "description": "Thragg is the Viltrumite Grand Regent who leads the empire's conquest, clashes with Omni-Man and Mark, and embodies Viltrumite supremacy.",
        "aliases": []
    },
    {
        "slug": "allen-the-alien",
        "name": "Allen the Alien",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Coalition evaluator who befriends Mark.",
        "description": "Allen the Alien tests Earth's heroes for the Coalition of Planets and becomes one of Mark Grayson's closest allies in the war against Viltrum.",
        "aliases": []
    },
    {
        "slug": "robot",
        "name": "Robot",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Genius Guardian who transfers his mind to clones.",
        "description": "Robot (Rudy Connors) is the Guardians' brilliant strategist who inhabits successive clone bodies, pursuing utopian plans with unsettling determination.",
        "aliases": []
    },
    {
        "slug": "battle-beast",
        "name": "Battle Beast",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Warrior who fought Omni-Man to a standstill.",
        "description": "Battle Beast is an intergalactic warrior of immense strength who battles Omni-Man and later allies with Mark against greater threats.",
        "aliases": []
    },
    {
        "slug": "conquest",
        "name": "Conquest",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Viltrumite enforcer sent to kill Mark.",
        "description": "Conquest is a scarred Viltrumite veteran dispatched to eliminate Mark Grayson, delivering one of Invincible's most brutal confrontations.",
        "aliases": []
    },
    {
        "slug": "anissa",
        "name": "Anissa",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Viltrumite sent to breed with Mark.",
        "description": "Anissa is a Viltrumite warrior assigned to mate with Mark Grayson for the empire's breeding program, forcing traumatic conflict.",
        "aliases": []
    },
    {
        "slug": "monster-girl",
        "name": "Monster Girl",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Guardian who ages backward when transforming.",
        "description": "Monster Girl (Amanda) is a Guardian who becomes a powerful monster form at the cost of reversed aging, surviving the team's darkest battles.",
        "aliases": []
    },
    {
        "slug": "darkwing",
        "name": "Darkwing",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Batman-like Guardian of the Globe.",
        "description": "Darkwing is a Gotham-style Guardian who patrols his city until Omni-Man's massacre, representing Earth's street-level hero tradition.",
        "aliases": []
    },
    {
        "slug": "debbie-grayson",
        "name": "Debbie Grayson",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Mark's mother and Nolan's wife.",
        "description": "Debbie Grayson is Mark's mother who must reconcile her love for Nolan with the horror of his Viltrumite mission after the truth emerges.",
        "aliases": []
    },
    {
        "slug": "mauler-twins",
        "name": "Mauler Twins",
        "type": "person",
        "evidence": "fiction",
        "short_description": "Duplicating villains who harass heroes.",
        "description": "The Mauler Twins are duplicate supervillains whose endless cloning and bickering make them recurring nuisances for Mark and the GDA.",
        "aliases": []
    },
    {
        "slug": "invincible-figures",
        "name": "Invincible figures",
        "type": "topic",
        "short_description": "People and named forces central to Invincible.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Invincible."
    },
    {
        "slug": "invincible-places",
        "name": "Invincible places",
        "type": "place",
        "short_description": "Locations and geographies that frame Invincible.",
        "description": "Places, regions, and built sites that give Invincible its map — where events and figures concentrate."
    },
    {
        "slug": "invincible-events",
        "name": "Invincible events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Invincible.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Invincible timeline."
    },
    {
        "slug": "invincible-objects",
        "name": "Invincible objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Invincible.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Invincible."
    },
    {
        "slug": "invincible-factions",
        "name": "Invincible factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Invincible.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Invincible."
    },
    {
        "slug": "invincible-concepts",
        "name": "Invincible concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Invincible.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Invincible readable as a lore graph."
    },
    {
        "slug": "invincible-eras",
        "name": "Invincible eras",
        "type": "event",
        "short_description": "Periodization for Invincible.",
        "description": "Named eras and phases that help readers track how Invincible changes across time."
    }
];

const relationships = [
    [
        "robert-kirkman",
        "invincible",
        "created",
        "Kirkman created Invincible.",
        0.99,
        0.99
    ],
    [
        "robert-kirkman",
        "invincible-comic",
        "created",
        "Kirkman writes the Invincible comic.",
        0.99,
        0.98
    ],
    [
        "image-comics",
        "invincible-comic",
        "publishes",
        "Image Comics publishes Invincible.",
        0.98,
        0.96
    ],
    [
        "amazon-studios",
        "invincible-tv-series",
        "produced",
        "Amazon Studios produces Invincible.",
        0.98,
        0.96
    ],
    [
        "invincible-comic",
        "invincible",
        "part_of",
        "The comic is the core Invincible work.",
        0.99,
        0.99
    ],
    [
        "invincible-tv-series",
        "invincible",
        "part_of",
        "The TV series adapts Invincible.",
        0.98,
        0.97
    ],
    [
        "invincible-comic",
        "invincible-tv-series",
        "adapted_into",
        "The comic was adapted for Prime Video.",
        0.98,
        0.96
    ],
    [
        "guardians-massacre-arc",
        "invincible-comic",
        "part_of",
        "The massacre arc is a pivotal comic storyline.",
        0.98,
        0.96
    ],
    [
        "guardians-massacre-arc",
        "invincible-tv-series",
        "part_of",
        "Season 1 adapts the Guardians massacre.",
        0.97,
        0.95
    ],
    [
        "mark-grayson",
        "viltrumites",
        "member_of",
        "Mark is half-Viltrumite.",
        0.99,
        0.98
    ],
    [
        "omni-man",
        "viltrumites",
        "member_of",
        "Omni-Man is a Viltrumite warrior.",
        0.99,
        0.98
    ],
    [
        "thragg",
        "viltrumite-empire",
        "leads",
        "Thragg leads the Viltrumite Empire.",
        0.99,
        0.98
    ],
    [
        "viltrumite-empire",
        "viltrum",
        "located_in",
        "The empire is based on Viltrum.",
        0.98,
        0.96
    ],
    [
        "viltrumites",
        "viltrumite-powers",
        "uses",
        "Viltrumites wield superhuman abilities.",
        0.99,
        0.98
    ],
    [
        "mark-grayson",
        "viltrumite-powers",
        "uses",
        "Mark flies and fights with Viltrumite power.",
        0.99,
        0.98
    ],
    [
        "omni-man",
        "viltrumite-powers",
        "uses",
        "Omni-Man demonstrates peak Viltrumite strength.",
        0.99,
        0.98
    ],
    [
        "mark-grayson",
        "omni-man",
        "related_to",
        "Mark is Omni-Man's son.",
        0.99,
        0.99
    ],
    [
        "debbie-grayson",
        "mark-grayson",
        "related_to",
        "Debbie is Mark's mother.",
        0.98,
        0.96
    ],
    [
        "debbie-grayson",
        "omni-man",
        "related_to",
        "Debbie was married to Nolan Grayson.",
        0.97,
        0.95
    ],
    [
        "mark-grayson",
        "omni-man",
        "opposed_by",
        "Mark fights his father after the massacre.",
        0.99,
        0.98
    ],
    [
        "omni-man",
        "guardians-of-the-globe",
        "opposed_by",
        "Omni-Man slaughters the Guardians.",
        0.99,
        0.99
    ],
    [
        "guardians-massacre-arc",
        "guardians-of-the-globe",
        "involved",
        "The arc destroys the Guardians team.",
        0.99,
        0.98
    ],
    [
        "immortal",
        "guardians-of-the-globe",
        "member_of",
        "Immortal is a Guardian.",
        0.98,
        0.96
    ],
    [
        "red-rush",
        "guardians-of-the-globe",
        "member_of",
        "Red Rush served on the Guardians.",
        0.98,
        0.96
    ],
    [
        "robot",
        "guardians-of-the-globe",
        "member_of",
        "Robot strategized for the Guardians.",
        0.98,
        0.96
    ],
    [
        "monster-girl",
        "guardians-of-the-globe",
        "member_of",
        "Monster Girl is a Guardian.",
        0.97,
        0.95
    ],
    [
        "darkwing",
        "guardians-of-the-globe",
        "member_of",
        "Darkwing was a Guardian.",
        0.97,
        0.95
    ],
    [
        "guardians-of-the-globe",
        "global-defense-agency",
        "part_of",
        "The GDA funds and directs the Guardians.",
        0.97,
        0.95
    ],
    [
        "cecil-stedman",
        "global-defense-agency",
        "leads",
        "Cecil directs the GDA.",
        0.99,
        0.98
    ],
    [
        "global-defense-agency",
        "gda-headquarters",
        "located_in",
        "The GDA operates from its headquarters.",
        0.97,
        0.95
    ],
    [
        "global-defense-agency",
        "earth-invincible",
        "located_in",
        "The GDA defends Earth.",
        0.98,
        0.96
    ],
    [
        "mark-grayson",
        "atom-eve",
        "supports",
        "Mark and Atom Eve fight together.",
        0.97,
        0.95
    ],
    [
        "cecil-stedman",
        "mark-grayson",
        "supports",
        "Cecil recruits and backs Mark.",
        0.96,
        0.94
    ],
    [
        "allen-the-alien",
        "mark-grayson",
        "supports",
        "Allen allies with Mark against Viltrum.",
        0.97,
        0.95
    ],
    [
        "allen-the-alien",
        "coalition-of-planets",
        "member_of",
        "Allen serves the Coalition.",
        0.97,
        0.95
    ],
    [
        "coalition-of-planets",
        "viltrumite-empire",
        "opposed_by",
        "The Coalition resists Viltrumite conquest.",
        0.98,
        0.96
    ],
    [
        "conquest",
        "mark-grayson",
        "opposed_by",
        "Conquest is sent to kill Mark.",
        0.98,
        0.96
    ],
    [
        "thragg",
        "mark-grayson",
        "opposed_by",
        "Thragg wars against Mark and Earth.",
        0.99,
        0.98
    ],
    [
        "anissa",
        "mark-grayson",
        "connected_to",
        "Anissa is assigned to Mark by Viltrum.",
        0.96,
        0.93
    ],
    [
        "battle-beast",
        "omni-man",
        "opposed_by",
        "Battle Beast fights Omni-Man.",
        0.97,
        0.95
    ],
    [
        "sequids",
        "coalition-of-planets",
        "opposed_by",
        "Sequids threaten Coalition worlds.",
        0.95,
        0.92
    ],
    [
        "mauler-twins",
        "mark-grayson",
        "opposed_by",
        "The Mauler Twins harass Invincible.",
        0.94,
        0.9
    ],
    [
        "invincible",
        "invincible-figures",
        "contains",
        "Invincible figures is a primary trailhead under Invincible.",
        0.88,
        0.82
    ],
    [
        "invincible",
        "invincible-places",
        "contains",
        "Invincible places is a primary trailhead under Invincible.",
        0.88,
        0.82
    ],
    [
        "invincible",
        "invincible-events",
        "contains",
        "Invincible events is a primary trailhead under Invincible.",
        0.88,
        0.82
    ],
    [
        "invincible",
        "invincible-objects",
        "contains",
        "Invincible objects & artifacts is a primary trailhead under Invincible.",
        0.88,
        0.82
    ],
    [
        "invincible",
        "invincible-factions",
        "contains",
        "Invincible factions & groups is a primary trailhead under Invincible.",
        0.88,
        0.82
    ],
    [
        "invincible",
        "invincible-concepts",
        "contains",
        "Invincible concepts is a primary trailhead under Invincible.",
        0.88,
        0.82
    ],
    [
        "invincible",
        "invincible-eras",
        "contains",
        "Invincible eras is a primary trailhead under Invincible.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
