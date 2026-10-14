/*
 * NASA subject data — programs, centers, crews, and the public spacecraft story.
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

/* ---------- Root / people ---------- */

entity(
    "nasa",
    "NASA",
    "topic",
    "U.S. civilian space agency whose missions, centers, and crews became public lore.",
    "The National Aeronautics and Space Administration, created in 1958, is the civilian agency that ran Mercury through Apollo, the Shuttle, robotic explorers, and now Artemis. Its lore lives in named programs, flight centers, and the people who designed and flew them."
);

entity(
    "werner-von-braun",
    "Wernher von Braun",
    "person",
    "Rocket engineer who led Saturn V development at Marshall.",
    "Wernher von Braun headed the Army ballistic team that became NASA's Marshall Space Flight Center and directed the Saturn family that lofted Apollo. His German V-2 past is part of the same documented career that made the Moon rocket."
);

entity(
    "neil-armstrong",
    "Neil Armstrong",
    "person",
    "Apollo 11 commander and first person to walk on the Moon.",
    "Neil Armstrong commanded Apollo 11, piloted the lunar module Eagle to the Sea of Tranquility, and spoke the first words from the surface. A Gemini 8 veteran, he later left flight status and taught engineering."
);

entity(
    "buzz-aldrin",
    "Buzz Aldrin",
    "person",
    "Apollo 11 lunar module pilot and second person on the Moon.",
    "Buzz Aldrin flew Gemini 12 and then Apollo 11, joining Armstrong on the lunar surface and photographing the mission that made NASA's most public image."
);

entity(
    "michael-collins",
    "Michael Collins",
    "person",
    "Apollo 11 command-module pilot who orbited alone during the landing.",
    "Michael Collins stayed in Columbia while Armstrong and Aldrin walked, completing the three-man crew that NASA sent to the first lunar landing."
);

entity(
    "sally-ride",
    "Sally Ride",
    "person",
    "Physicist and first American woman in space, on Challenger in 1983.",
    "Sally Ride flew STS-7 and STS-41-G. After the Challenger investigation she left the astronaut office and later founded science-education programs."
);

entity(
    "katherine-johnson",
    "Katherine Johnson",
    "person",
    "Langley mathematician whose trajectories backed Mercury and Apollo.",
    "Katherine Johnson computed launch windows and backup trajectories at Langley, including John Glenn's orbital flight and Apollo lunar-return paths, work later recognized as central to early NASA."
);

entity(
    "gene-kranz",
    "Gene Kranz",
    "person",
    "Flight director of the White Team, including Apollo 13.",
    "Gene Kranz ran Mission Control shifts from Gemini through Apollo, becoming the public face of the 'failure is not an option' recovery when Apollo 13 aborted its landing."
);

entity(
    "christopher-kraft",
    "Christopher C. Kraft Jr.",
    "person",
    "Architect of Mission Control and first NASA flight director.",
    "Christopher Kraft designed real-time flight control for Mercury and ran the first missions from the ground, then directed Johnson Space Center as human spaceflight scaled up."
);

/* ---------- Programs / missions ---------- */

entity(
    "mercury-program",
    "Project Mercury",
    "organization",
    "First U.S. human spaceflight program — one astronaut, one orbit at a time.",
    "Project Mercury (1958–63) put Alan Shepard and then John Glenn into space and proved that NASA could launch, track, and recover a crewed capsule."
);

entity(
    "gemini-program",
    "Project Gemini",
    "organization",
    "Two-seat program that rehearsed rendezvous, EVA, and long-duration flight.",
    "Project Gemini (1961–66) trained the Apollo generation: orbital rendezvous, spacewalks, and two-week missions that made a lunar landing operationally plausible."
);

entity(
    "apollo-program",
    "Apollo program",
    "organization",
    "Crewed lunar program that landed twelve astronauts between 1969 and 1972.",
    "Apollo was NASA's Moon program: Saturn V, the command/service module, and the lunar module. Apollo 11 landed first; later flights explored Hadley, Descartes, and Taurus–Littrow."
);

entity(
    "apollo-11",
    "Apollo 11",
    "event",
    "July 1969 mission that first landed people on the Moon.",
    "Apollo 11 launched from Kennedy Space Center on 16 July 1969, landed Eagle on 20 July, and returned Armstrong, Aldrin, and Collins to Earth on 24 July."
);

entity(
    "saturn-v",
    "Saturn V",
    "object",
    "Three-stage heavy lift rocket that sent Apollo toward the Moon.",
    "Saturn V, developed at Marshall under von Braun, remains the tallest rocket NASA has flown. It launched Apollo lunar missions and Skylab from Kennedy's pads."
);

entity(
    "space-shuttle-program",
    "Space Shuttle program",
    "organization",
    "Reusable orbiter program that built the ISS and flew Hubble.",
    "The Space Shuttle (1981–2011) lofted crews and cargo from Kennedy, serviced Hubble, and assembled the U.S. segments of the International Space Station."
);

entity(
    "artemis-program",
    "Artemis program",
    "organization",
    "Current NASA program to return crews to the Moon and prepare for Mars.",
    "Artemis uses SLS, Orion, and commercial landers to restore lunar landing capability, starting with uncrewed and crewed tests around the Moon."
);

entity(
    "orion-spacecraft",
    "Orion",
    "object",
    "Crew capsule built for Artemis deep-space flights.",
    "Orion is the NASA crew vehicle for Artemis, designed for missions beyond low Earth orbit and already flown uncrewed around the Moon on Artemis I."
);

entity(
    "voyager-program",
    "Voyager program",
    "organization",
    "Twin Grand Tour probes that left the planets and entered interstellar space.",
    "Voyager 1 and 2, managed at JPL, flew the outer planets in the 1970s–80s. Both later crossed the heliopause and still return data from interstellar space."
);

entity(
    "voyager-1",
    "Voyager 1",
    "object",
    "First human-made object to enter interstellar space.",
    "Voyager 1 flew Jupiter and Saturn, then left the ecliptic. In 2012 it crossed into interstellar space while still talking to JPL's Deep Space Network."
);

entity(
    "mars-exploration-program",
    "Mars Exploration Program",
    "organization",
    "NASA's long campaign of orbiters, landers, and rovers at Mars.",
    "The Mars Exploration Program at JPL sequenced Pathfinder, the MER rovers, Curiosity, InSight, and Perseverance as a continuous robotic presence on and around Mars."
);

entity(
    "curiosity-rover",
    "Curiosity",
    "object",
    "Car-sized Mars Science Laboratory rover in Gale Crater since 2012.",
    "Curiosity sky-craned into Gale Crater to read ancient habitable environments, climbing Aeolis Mons and sampling rocks with a chemistry lab on wheels."
);

entity(
    "perseverance-rover",
    "Perseverance",
    "object",
    "Mars 2020 rover caching samples in Jezero Crater and carrying Ingenuity.",
    "Perseverance landed in Jezero in 2021 to collect core samples for a future return and deployed the Ingenuity helicopter, extending rover lore into flight on Mars."
);

entity(
    "hubble-space-telescope",
    "Hubble Space Telescope",
    "object",
    "Orbital observatory launched in 1990 and repaired in space by Shuttle crews.",
    "Hubble, a NASA–ESA telescope operated with Goddard, transformed public astronomy after Shuttle servicing missions corrected its mirror and kept it working for decades."
);

entity(
    "james-webb-space-telescope",
    "James Webb Space Telescope",
    "object",
    "Infrared successor to Hubble, stationed at Sun–Earth L2.",
    "JWST launched in 2021 as a NASA-led observatory with ESA and CSA, unfolding a sunshield and gold mirrors to image the early universe and nearby exoplanets."
);

entity(
    "international-space-station",
    "International Space Station",
    "object",
    "Continuously crewed orbital lab assembled by Shuttle and partners.",
    "The ISS is the shared station NASA operates with Roscosmos, ESA, JAXA, and CSA — the longest human presence in orbit and the destination that closed the Shuttle era."
);

/* ---------- Centers / places ---------- */

entity(
    "kennedy-space-center",
    "Kennedy Space Center",
    "place",
    "Florida launch center on Merritt Island beside Cape Canaveral.",
    "Kennedy Space Center is NASA's primary launch site: Apollo and Shuttle from LC-39, now Artemis and commercial crews, with the Vehicle Assembly Building as its landmark."
);

entity(
    "cape-canaveral",
    "Cape Canaveral",
    "place",
    "Coastal range east of Kennedy that hosted Mercury and Gemini launches.",
    "Cape Canaveral Space Force Station adjoins Kennedy. NASA's earliest crewed flights left its pads before Apollo moved to the larger Complex 39."
);

entity(
    "johnson-space-center",
    "Johnson Space Center",
    "place",
    "Houston center for astronauts, Mission Control, and human spaceflight.",
    "Johnson Space Center in Houston houses Mission Control, the astronaut corps, and the Apollo and Shuttle training legacy that Kraft and Kranz built."
);

entity(
    "jet-propulsion-laboratory",
    "Jet Propulsion Laboratory",
    "organization",
    "Caltech-managed NASA center that flies most planetary robots.",
    "JPL in Pasadena designs and operates Voyager, the Mars rovers, and many deep-space missions, linking campus engineering to NASA's robotic program."
);

entity(
    "marshall-space-flight-center",
    "Marshall Space Flight Center",
    "place",
    "Huntsville center that built Saturn V and later Shuttle propulsion.",
    "Marshall Space Flight Center in Huntsville grew from von Braun's Army team and remains NASA's lead for heavy lift, including Saturn V and SLS."
);

entity(
    "goddard-space-flight-center",
    "Goddard Space Flight Center",
    "place",
    "Greenbelt center that operates Hubble and many Earth and space science missions.",
    "Goddard in Maryland is NASA's science-operations hub for Hubble, Earth observatories, and a large share of unmanned astrophysics flight software."
);

/* ---------- Relationships ---------- */

rel("mercury-program", "nasa", "part_of", "Project Mercury was NASA's first crewed spaceflight program.", 0.99, 0.98);
rel("gemini-program", "nasa", "part_of", "Project Gemini was NASA's rendezvous-and-EVA rehearsal for Apollo.", 0.98, 0.96);
rel("apollo-program", "nasa", "part_of", "The Apollo program was NASA's crewed lunar landing effort.", 0.99, 0.98);
rel("space-shuttle-program", "nasa", "part_of", "The Space Shuttle was NASA's reusable orbiter program.", 0.98, 0.96);
rel("artemis-program", "nasa", "part_of", "Artemis is NASA's current program to return crews to the Moon.", 0.98, 0.96);
rel("voyager-program", "nasa", "part_of", "The Voyager program is NASA's Grand Tour and interstellar mission pair.", 0.97, 0.95);
rel("mars-exploration-program", "nasa", "part_of", "The Mars Exploration Program is NASA's long robotic campaign at Mars.", 0.97, 0.95);

rel("gemini-program", "mercury-program", "followed", "Gemini followed Mercury as NASA's second crewed program.", 0.96, 0.93);
rel("apollo-program", "gemini-program", "followed", "Apollo followed Gemini once rendezvous and EVA had been proven.", 0.97, 0.94);
rel("artemis-program", "apollo-program", "followed", "Artemis is NASA's later lunar-return program after Apollo.", 0.94, 0.9);

rel("apollo-11", "apollo-program", "part_of", "Apollo 11 was the first landing mission of the Apollo program.", 0.99, 0.98);
rel("saturn-v", "apollo-program", "part_of", "Saturn V was the launch vehicle of the Apollo lunar missions.", 0.98, 0.96);
rel("apollo-11", "saturn-v", "uses", "Apollo 11 left Earth on a Saturn V from Kennedy Space Center.", 0.98, 0.96);
rel("orion-spacecraft", "artemis-program", "part_of", "Orion is the crew capsule of the Artemis program.", 0.97, 0.94);
rel("voyager-1", "voyager-program", "part_of", "Voyager 1 is one of the two Voyager Grand Tour probes.", 0.99, 0.97);
rel("curiosity-rover", "mars-exploration-program", "part_of", "Curiosity is the Mars Science Laboratory rover of the Mars program.", 0.98, 0.95);
rel("perseverance-rover", "mars-exploration-program", "part_of", "Perseverance is the Mars 2020 rover of the Mars Exploration Program.", 0.98, 0.95);
rel("perseverance-rover", "curiosity-rover", "followed", "Perseverance followed Curiosity as NASA's next nuclear-powered Mars rover.", 0.94, 0.9);

rel("werner-von-braun", "saturn-v", "created", "Wernher von Braun led the Marshall team that built Saturn V.", 0.98, 0.96);
rel("werner-von-braun", "marshall-space-flight-center", "leads", "Von Braun directed Marshall Space Flight Center in the Saturn years.", 0.97, 0.94);
rel("christopher-kraft", "johnson-space-center", "created", "Christopher Kraft designed Mission Control, later housed at Johnson.", 0.96, 0.93);
rel("gene-kranz", "johnson-space-center", "leads", "Gene Kranz ran White Team shifts from Houston Mission Control.", 0.96, 0.93);
rel("katherine-johnson", "mercury-program", "supports", "Katherine Johnson's trajectories backed Mercury orbital flights.", 0.95, 0.92);
rel("katherine-johnson", "apollo-program", "supports", "Johnson also computed backup Apollo lunar-return paths at Langley.", 0.94, 0.9);

rel("neil-armstrong", "apollo-11", "leads", "Neil Armstrong commanded Apollo 11 and first stepped onto the Moon.", 0.99, 0.98);
rel("buzz-aldrin", "apollo-11", "involved", "Buzz Aldrin was the lunar module pilot on Apollo 11.", 0.98, 0.96);
rel("michael-collins", "apollo-11", "involved", "Michael Collins piloted the Apollo 11 command module in lunar orbit.", 0.98, 0.96);
rel("sally-ride", "space-shuttle-program", "involved", "Sally Ride flew twice on the Space Shuttle, beginning with STS-7.", 0.96, 0.93);

rel("apollo-11", "kennedy-space-center", "occurred_at", "Apollo 11 launched from Kennedy Space Center's Launch Complex 39.", 0.98, 0.96);
rel("kennedy-space-center", "cape-canaveral", "located_in", "Kennedy Space Center sits on Merritt Island beside Cape Canaveral.", 0.95, 0.92);
rel("mercury-program", "cape-canaveral", "occurred_at", "Mercury crewed flights launched from Cape Canaveral pads.", 0.95, 0.92);
rel("hubble-space-telescope", "space-shuttle-program", "uses", "Shuttle crews launched Hubble and later repaired it in orbit.", 0.96, 0.93);
rel("hubble-space-telescope", "goddard-space-flight-center", "connected_to", "Goddard operates Hubble as NASA's science-operations center.", 0.95, 0.91);
rel("international-space-station", "space-shuttle-program", "uses", "The Shuttle assembled and stocked U.S. segments of the ISS.", 0.96, 0.93);
rel("voyager-program", "jet-propulsion-laboratory", "produced", "JPL built and still operates the Voyager probes.", 0.97, 0.94);
rel("mars-exploration-program", "jet-propulsion-laboratory", "produced", "JPL runs NASA's Mars rover and orbiter campaign.", 0.97, 0.94);
rel("james-webb-space-telescope", "hubble-space-telescope", "followed", "JWST followed Hubble as NASA's flagship space observatory.", 0.94, 0.9);
rel("jet-propulsion-laboratory", "nasa", "part_of", "JPL is the Caltech-managed NASA center for robotic deep space.", 0.97, 0.94);
rel("kennedy-space-center", "nasa", "part_of", "Kennedy Space Center is NASA's primary launch site.", 0.98, 0.96);
rel("johnson-space-center", "nasa", "part_of", "Johnson Space Center is NASA's human-spaceflight headquarters.", 0.98, 0.96);
rel("marshall-space-flight-center", "nasa", "part_of", "Marshall is NASA's Huntsville propulsion and heavy-lift center.", 0.96, 0.93);
rel("goddard-space-flight-center", "nasa", "part_of", "Goddard is NASA's Greenbelt science-operations center.", 0.96, 0.93);

module.exports = { entities, relationships };
