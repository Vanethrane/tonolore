/*
 * Oceanography subject data — expeditions, currents, trenches, and the labs that mapped them.
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

/* ---------- Root / expeditions / people ---------- */

entity(
    "oceanography",
    "Oceanography",
    "topic",
    "Currents, trenches, and vessels that chart the planet's connected seas.",
    "Oceanography is the science of the world ocean: Challenger-era sounding and dredging, Cousteau's public diving, plate-tectonic seafloor, hydrothermal vents, and the labs at Scripps and Woods Hole that still run the ships."
);

entity(
    "challenger-expedition",
    "Challenger expedition",
    "event",
    "1872–76 circumnavigation that founded modern oceanography.",
    "HMS Challenger's scientific cruise sounded the deep, dredged new animals, and sampled chemistry worldwide. Its fifty-volume Report made oceanography a discipline rather than a navy sideline."
);

entity(
    "hms-challenger",
    "HMS Challenger",
    "object",
    "Converted Royal Navy corvette of the first global ocean survey.",
    "HMS Challenger carried naturalists, sounding gear, and dredges on the voyage that found the deep that now bears its name in the Mariana Trench."
);

entity(
    "charles-wyville-thomson",
    "Charles Wyville Thomson",
    "person",
    "Chief scientist of the Challenger expedition.",
    "Charles Wyville Thomson organized the Challenger science party and argued that the deep sea was a living province, not a lifeless desert."
);

entity(
    "john-murray",
    "John Murray",
    "person",
    "Challenger naturalist who later edited the expedition Report.",
    "John Murray classified marine deposits, named many Challenger stations' muds, and saw the Report through after Thomson's death."
);

entity(
    "jacques-cousteau",
    "Jacques Cousteau",
    "person",
    "Diver, filmmaker, and co-inventor of the Aqua-Lung who popularized the sea.",
    "Jacques-Yves Cousteau took scuba and the Calypso into living rooms, making mid-century oceanography a public story as well as a shipboard science."
);

entity(
    "calypso",
    "Calypso",
    "object",
    "Cousteau's converted minesweeper and floating film studio.",
    "RV Calypso was the ship from which Cousteau filmed reefs, wrecks, and the first widely seen color footage of the living sea."
);

entity(
    "matthew-maury",
    "Matthew Fontaine Maury",
    "person",
    "Naval officer whose wind and current charts preceded Challenger science.",
    "Matthew Maury compiled logbooks into pilot charts of the Gulf Stream and trade winds, an office science of currents before dredging the deep."
);

entity(
    "marie-tharp",
    "Marie Tharp",
    "person",
    "Cartographer who drew the Mid-Atlantic Ridge rift valley.",
    "Marie Tharp, working with Bruce Heezen at Columbia, mapped a continuous rift down the Mid-Atlantic Ridge and made seafloor spreading visible on paper."
);

entity(
    "bruce-heezen",
    "Bruce Heezen",
    "person",
    "Marine geologist who published Tharp's physiographic maps of the ocean floor.",
    "Bruce Heezen collected echo-sounding profiles that Tharp assembled; together they showed the global mid-ocean ridge as a single mountain chain."
);

entity(
    "robert-ballard",
    "Robert Ballard",
    "person",
    "WHOI geologist who explored vents and later found Titanic.",
    "Robert Ballard used Alvin and towed cameras at the Galápagos Rift and Mid-Atlantic Ridge, then applied the same deep search to wrecks."
);

/* ---------- Features / concepts ---------- */

entity(
    "gulf-stream",
    "Gulf Stream",
    "place",
    "Warm western-boundary current that leaves the Gulf of Mexico for the North Atlantic.",
    "The Gulf Stream is the swift current Maury charted and Franklin popularized, a limb of the Atlantic circulation that carries heat toward Europe."
);

entity(
    "thermohaline-circulation",
    "Thermohaline circulation",
    "topic",
    "Density-driven global overturning set by temperature and salinity.",
    "Thermohaline circulation is the slow conveyor in which cold, salty water sinks and returns at depth, linking the Gulf Stream's surface heat to abyssal flow."
);

entity(
    "salinity",
    "Salinity",
    "topic",
    "Dissolved-salt content that helps set seawater density and circulation.",
    "Salinity, measured from Challenger bottles to modern CTDs, is the other half of density with temperature — the reason ice, evaporation, and rivers steer the conveyor."
);

entity(
    "mariana-trench",
    "Mariana Trench",
    "place",
    "Deepest ocean trench, east of the Mariana Islands.",
    "The Mariana Trench is a Pacific subduction trough whose Challenger Deep is the lowest surveyed point in the world ocean."
);

entity(
    "challenger-deep",
    "Challenger Deep",
    "place",
    "Deepest known spot in the Mariana Trench, named for HMS Challenger.",
    "Challenger Deep was first sounded on the 1875 Challenger station and later measured by bathyscaphs and modern mapping at nearly eleven kilometers."
);

entity(
    "mid-atlantic-ridge",
    "Mid-Atlantic Ridge",
    "place",
    "Slow-spreading plate boundary that splits the Atlantic floor.",
    "The Mid-Atlantic Ridge is the seafloor mountain chain Tharp drew with a central rift, the type example of a spreading ridge."
);

entity(
    "seafloor-spreading",
    "Seafloor spreading",
    "topic",
    "Creation of new oceanic crust at mid-ocean ridges.",
    "Seafloor spreading, proven by magnetic stripes and ridge topography, is the plate-tectonic engine that opened the Atlantic and recycles crust into trenches."
);

entity(
    "hydrothermal-vents",
    "Hydrothermal vents",
    "place",
    "Seafloor hot springs that support chemosynthetic communities.",
    "Hydrothermal vents were documented at the Galápagos Rift in 1977: black smokers and tubeworms living on chemicals, not sunlight, rewriting the energy budget of the deep."
);

entity(
    "galapagos-rift",
    "Galápagos Rift",
    "place",
    "East Pacific spreading center where vents were first seen from Alvin.",
    "The Galápagos Rift is the 1977 type locality of hydrothermal vent biology, dived by Alvin on a National Science Foundation geology cruise."
);

entity(
    "black-smokers",
    "Black smokers",
    "object",
    "Sulfide chimneys that jet superheated, mineral-laden water.",
    "Black smokers are the dark hydrothermal chimneys first photographed on the East Pacific Rise, the mineral stacks that stand for vent chemistry."
);

entity(
    "dsv-alvin",
    "DSV Alvin",
    "object",
    "Woods Hole's three-person deep submersible, workhorse of vent dives.",
    "Alvin, operated by Woods Hole, reached the Galápagos vents, the Titanic, and countless ridge and trench sites as the United States' longest-serving deep research sub."
);

entity(
    "el-nino",
    "El Niño",
    "event",
    "Pacific warming that rearranges weather and the equatorial ocean.",
    "El Niño is the warm phase of ENSO, when trade winds slacken and the eastern Pacific heats — an oceanographic rhythm that Cousteau-era satellites later watched from space."
);

/* ---------- Institutions ---------- */

entity(
    "scripps-institution",
    "Scripps Institution of Oceanography",
    "organization",
    "La Jolla campus that became a leading U.S. ocean laboratory.",
    "Scripps, founded as a marine biological station and later part of UC San Diego, runs ships, the pier, and climate and seafloor research on the Pacific."
);

entity(
    "woods-hole",
    "Woods Hole Oceanographic Institution",
    "organization",
    "Cape Cod independent lab that operates Alvin and deep-sea expeditions.",
    "Woods Hole Oceanographic Institution (WHOI) is the private research lab beside the village of Woods Hole, operator of Alvin and a counterpart to Scripps on the Atlantic."
);

entity(
    "lamont-doherty",
    "Lamont–Doherty Earth Observatory",
    "organization",
    "Columbia observatory where Tharp and Heezen mapped the seafloor.",
    "Lamont–Doherty, then the Lamont Geological Observatory, held the echo-sounding archive Tharp turned into the first complete physiographic map of the oceans."
);

entity(
    "aqua-lung",
    "Aqua-Lung",
    "object",
    "Open-circuit scuba regulator Cousteau and Gagnan patented.",
    "The Aqua-Lung let divers stay down with tanks instead of surface air, the hardware behind Cousteau's films and a generation of reef science."
);

entity(
    "ctd-rosette",
    "CTD rosette",
    "object",
    "Standard instrument package that profiles conductivity, temperature, and depth.",
    "The CTD, often hung on a Niskin rosette, is how modern ships measure salinity and temperature — the Challenger bottle updated."
);

/* ---------- Relationships ---------- */

rel("challenger-expedition", "oceanography", "created", "The Challenger expedition founded oceanography as a global survey science.", 0.98, 0.96);
rel("hms-challenger", "challenger-expedition", "involved", "HMS Challenger was the ship of the 1872–76 expedition.", 0.99, 0.98);
rel("charles-wyville-thomson", "challenger-expedition", "leads", "Charles Wyville Thomson led the Challenger science party.", 0.97, 0.95);
rel("john-murray", "challenger-expedition", "involved", "John Murray served as naturalist and later edited the Challenger Report.", 0.96, 0.93);
rel("challenger-deep", "hms-challenger", "connected_to", "Challenger Deep is named for the ship that first sounded the Mariana Trench.", 0.96, 0.93);

rel("jacques-cousteau", "calypso", "uses", "Cousteau filmed and dived from the Calypso.", 0.97, 0.94);
rel("jacques-cousteau", "aqua-lung", "created", "Cousteau co-invented the Aqua-Lung with Émile Gagnan.", 0.96, 0.93);
rel("jacques-cousteau", "oceanography", "influenced", "Cousteau made ocean life a public subject beyond the research fleet.", 0.94, 0.9);

rel("matthew-maury", "gulf-stream", "created", "Maury compiled the pilot charts that mapped the Gulf Stream for navigators.", 0.95, 0.91);
rel("gulf-stream", "thermohaline-circulation", "part_of", "The Gulf Stream is the swift surface limb of Atlantic overturning.", 0.94, 0.9);
rel("salinity", "thermohaline-circulation", "supports", "Salinity, with temperature, sets the density that drives the conveyor.", 0.95, 0.92);
rel("ctd-rosette", "salinity", "uses", "Ships measure salinity profiles with CTDs on rosette frames.", 0.93, 0.89);

rel("challenger-deep", "mariana-trench", "part_of", "Challenger Deep is the deepest surveyed point of the Mariana Trench.", 0.99, 0.97);
rel("mariana-trench", "seafloor-spreading", "opposed_by", "Trenches consume the crust that ridges create in the spreading cycle.", 0.92, 0.88);
rel("mid-atlantic-ridge", "seafloor-spreading", "produced", "The Mid-Atlantic Ridge is the type locality of slow seafloor spreading.", 0.96, 0.93);
rel("marie-tharp", "mid-atlantic-ridge", "created", "Marie Tharp drew the rift valley that revealed the Mid-Atlantic Ridge as a spreading center.", 0.97, 0.94);
rel("bruce-heezen", "marie-tharp", "supports", "Heezen collected the soundings Tharp assembled into seafloor maps.", 0.96, 0.93);
rel("marie-tharp", "lamont-doherty", "member_of", "Tharp mapped the ocean floor at Lamont.", 0.96, 0.93);
rel("bruce-heezen", "lamont-doherty", "member_of", "Heezen was a Lamont marine geologist.", 0.96, 0.93);
rel("seafloor-spreading", "oceanography", "part_of", "Seafloor spreading is the plate-tectonic core of modern geological oceanography.", 0.95, 0.92);

rel("hydrothermal-vents", "galapagos-rift", "located_in", "The first documented vent community was on the Galápagos Rift.", 0.97, 0.94);
rel("black-smokers", "hydrothermal-vents", "part_of", "Black smokers are the sulfide chimneys of high-temperature vents.", 0.96, 0.93);
rel("dsv-alvin", "hydrothermal-vents", "involved", "Alvin dived the Galápagos Rift when vents were first seen.", 0.96, 0.93);
rel("robert-ballard", "dsv-alvin", "uses", "Ballard explored ridges and wrecks with Alvin and towed systems.", 0.95, 0.91);
rel("robert-ballard", "hydrothermal-vents", "involved", "Ballard was part of the early vent and ridge exploration from WHOI.", 0.94, 0.9);
rel("dsv-alvin", "woods-hole", "part_of", "Alvin is operated by Woods Hole Oceanographic Institution.", 0.98, 0.96);

rel("scripps-institution", "oceanography", "supports", "Scripps is a leading Pacific campus for oceanographic research.", 0.95, 0.91);
rel("woods-hole", "oceanography", "supports", "Woods Hole is a leading Atlantic laboratory for deep-sea work.", 0.95, 0.91);
rel("el-nino", "oceanography", "part_of", "El Niño is a Pacific ocean–atmosphere rhythm studied as climate oceanography.", 0.93, 0.89);
rel("challenger-expedition", "mariana-trench", "occurred_at", "Challenger sounded the deep that became Challenger Deep in the Mariana Trench.", 0.94, 0.9);
rel("calypso", "jacques-cousteau", "produced", "Calypso produced the films that made Cousteau's ocean public.", 0.93, 0.89);

module.exports = { entities, relationships };
