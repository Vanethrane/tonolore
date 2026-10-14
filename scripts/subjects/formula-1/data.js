/*
 * Formula 1 subject data — constructors, circuits, and the drivers' championship.
 */

const entities = [];
const relationships = [];

function entity(
    slug,
    name,
    type,
    short_description,
    description,
    evidence = "documented",
    extras = {}
) {
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

/* ---------- Root / stewards ---------- */

entity(
    "formula-1",
    "Formula 1",
    "topic",
    "The FIA world championship — constructors, circuits, and the drivers who own weekends.",
    "Formula 1 is the FIA World Championship that began in 1950. Its lore runs through Ferrari, McLaren, Mercedes, and Red Bull; through Monaco, Monza, and Silverstone; and through Senna, Schumacher, Hamilton, and Verstappen."
);

entity(
    "fia",
    "FIA",
    "organization",
    "The Fédération Internationale de l'Automobile — sport's rule-maker.",
    "The FIA governs Formula 1: the technical regulations, the stewards, and the World Championships it awards to drivers and constructors."
);

entity(
    "formula-one-group",
    "Formula One Group",
    "organization",
    "Commercial rights holder that sells the season as a television product.",
    "The Formula One Group holds the commercial rights to the championship — the paddock, the media, and the calendar Bernie Ecclestone built and Liberty Media later restyled."
);

entity(
    "bernie-ecclestone",
    "Bernie Ecclestone",
    "person",
    "Promoter who turned Formula 1 into a single television package.",
    "Bernie Ecclestone spent decades as Formula 1's commercial boss, packing the calendar, the rights fees, and the one-stop television deal the modern Formula One Group inherited."
);

/* ---------- Constructors ---------- */

entity(
    "scuderia-ferrari",
    "Scuderia Ferrari",
    "organization",
    "Maranello constructor — the only team present since 1950.",
    "Scuderia Ferrari is Formula 1's oldest surviving team: Enzo's scarlet cars, Schumacher's early-2000s titles, and the constructors' prize the tifosi still treat as a birthright."
);

entity(
    "enzo-ferrari",
    "Enzo Ferrari",
    "person",
    "Founder whose name is still on the red cars.",
    "Enzo Ferrari founded the Scuderia that entered the first World Championship and built the Maranello works that still race in Formula 1."
);

entity(
    "mclaren",
    "McLaren",
    "organization",
    "Woking constructor of Senna, Prost, and later title hunts.",
    "McLaren is the British team of the Honda turbo years, the Senna–Prost war, and later constructors' campaigns that still treat the papaya car as a title threat."
);

entity(
    "mercedes-amg-f1",
    "Mercedes-AMG Petronas",
    "organization",
    "Hybrid-era factory team of Hamilton's seven-title stretch.",
    "Mercedes-AMG Petronas dominated the hybrid era from 2014, winning constructors' championships in a row while Lewis Hamilton and Toto Wolff defined the garage."
);

entity(
    "toto-wolff",
    "Toto Wolff",
    "person",
    "Team principal of Mercedes' hybrid dynasty.",
    "Toto Wolff has been the public head of Mercedes-AMG Petronas through the hybrid titles and the later fight to catch Red Bull."
);

entity(
    "red-bull-racing",
    "Red Bull Racing",
    "organization",
    "Energy-drink team of Vettel's four and Verstappen's era.",
    "Red Bull Racing won four constructors' and drivers' titles with Sebastian Vettel, then built a second dynasty around Max Verstappen and the Newey-era cars."
);

entity(
    "christian-horner",
    "Christian Horner",
    "person",
    "Team principal who took Red Bull from newcomer to dynasty.",
    "Christian Horner has led Red Bull Racing since the team's first seasons, through Vettel's four titles and Verstappen's championship years."
);

/* ---------- Drivers ---------- */

entity(
    "juan-manuel-fangio",
    "Juan Manuel Fangio",
    "person",
    "Five-time champion who set the early standard.",
    "Juan Manuel Fangio won five World Drivers' Championships in the 1950s, a record that stood until Michael Schumacher broke it."
);

entity(
    "niki-lauda",
    "Niki Lauda",
    "person",
    "Three-time champion who came back from the Nürburgring fire.",
    "Niki Lauda won titles with Ferrari and McLaren, survived the 1976 Nürburgring crash, and later became a Mercedes director in the hybrid era."
);

entity(
    "ayrton-senna",
    "Ayrton Senna",
    "person",
    "McLaren's three-time champion, killed at Imola in 1994.",
    "Ayrton Senna won three Drivers' Championships with McLaren, made Monaco his personal circuit, and died at the 1994 San Marino Grand Prix — a loss that remade Formula 1 safety."
);

entity(
    "alain-prost",
    "Alain Prost",
    "person",
    "The Professor — Senna's teammate-rival and four-time champion.",
    "Alain Prost won four Drivers' Championships and spent the late 1980s in a civil war with Ayrton Senna inside McLaren, the defining teammate rivalry of the era."
);

entity(
    "michael-schumacher",
    "Michael Schumacher",
    "person",
    "Seven-time champion who built Ferrari's modern dynasty.",
    "Michael Schumacher won two titles with Benetton, then five in a row with Ferrari, breaking Fangio's record and making the early 2000s a scarlet procession."
);

entity(
    "sebastian-vettel",
    "Sebastian Vettel",
    "person",
    "Red Bull's four-in-a-row champion of the early 2010s.",
    "Sebastian Vettel won four consecutive Drivers' Championships with Red Bull Racing from 2010 to 2013, the first dynasty of the energy-drink team."
);

entity(
    "lewis-hamilton",
    "Lewis Hamilton",
    "person",
    "Seven-time champion of McLaren youth and Mercedes hybrid years.",
    "Lewis Hamilton matched Schumacher's seven Drivers' Championships, winning first with McLaren and then as the face of Mercedes' hybrid era, with a record haul of race wins."
);

entity(
    "max-verstappen",
    "Max Verstappen",
    "person",
    "Red Bull champion of the 2020s, title-decided in Abu Dhabi 2021.",
    "Max Verstappen took the 2021 Drivers' Championship from Lewis Hamilton on the last lap in Abu Dhabi, then turned Red Bull Racing into a second-era dynasty."
);

/* ---------- Circuits / Grands Prix ---------- */

entity(
    "monaco",
    "Circuit de Monaco",
    "place",
    "Street circuit through Monte Carlo — the glamour bottleneck.",
    "The Circuit de Monaco is the street track around the principality: barriers, the tunnel, and the Grand Prix that still confers more prestige than its overtaking statistics."
);

entity(
    "monza",
    "Monza",
    "place",
    "Temple of Speed — Ferrari's home grand prix.",
    "Monza is the Autodromo Nazionale, the high-speed Italian circuit where the tifosi turn the Italian Grand Prix into a Ferrari festival."
);

entity(
    "silverstone",
    "Silverstone",
    "place",
    "Former airfield that hosted the first World Championship race.",
    "Silverstone in Northamptonshire staged the 1950 British Grand Prix, the first round of the World Championship, and remains the home of the British Grand Prix."
);

entity(
    "spa-francorchamps",
    "Spa-Francorchamps",
    "place",
    "Ardennes circuit of Eau Rouge and weather lotteries.",
    "Spa-Francorchamps is the Belgian grand-prix circuit: Eau Rouge–Raidillon, changing weather, and a drivers' favorite that still decides seasons."
);

entity(
    "imola",
    "Imola",
    "place",
    "Autodromo Enzo e Dino Ferrari — site of Senna's death.",
    "Imola is the Italian circuit that hosted the San Marino Grand Prix. In 1994 it became the weekend Formula 1 dates safety from: Ratzenberger on Saturday, Senna on Sunday."
);

entity(
    "monaco-grand-prix",
    "Monaco Grand Prix",
    "event",
    "The street race that still defines a driver's legend.",
    "The Monaco Grand Prix is the May weekend on the Circuit de Monaco. Senna's six wins there remain the record that later champions still chase."
);

entity(
    "italian-grand-prix",
    "Italian Grand Prix",
    "event",
    "Ferrari's home race at Monza.",
    "The Italian Grand Prix at Monza is Ferrari's home grand prix, a high-speed Sunday the tifosi treat as a national holiday when the red cars win."
);

entity(
    "british-grand-prix",
    "British Grand Prix",
    "event",
    "Silverstone race that opened the World Championship in 1950.",
    "The British Grand Prix at Silverstone was the first round of the 1950 World Championship and remains Lewis Hamilton's home crowd."
);

entity(
    "san-marino-grand-prix-1994",
    "1994 San Marino Grand Prix",
    "event",
    "Imola weekend that killed Senna and remade safety.",
    "The 1994 San Marino Grand Prix at Imola killed Roland Ratzenberger and Ayrton Senna. The FIA's later safety revolution — circuits, cockpits, the halo's ancestors — dates from that weekend."
);

/* ---------- Championships / concepts ---------- */

entity(
    "world-drivers-championship",
    "World Drivers' Championship",
    "object",
    "The drivers' title Fangio, Schumacher, Hamilton, and Verstappen chased.",
    "The World Drivers' Championship is the FIA title awarded each season to the highest-scoring driver, the prize that makes Senna, Schumacher, Hamilton, and Verstappen comparable across eras."
);

entity(
    "constructors-championship",
    "World Constructors' Championship",
    "object",
    "The team title awarded since 1958.",
    "The World Constructors' Championship is the FIA title for constructors, the prize Ferrari, McLaren, Mercedes, and Red Bull treat as proof the factory — not only the driver — won the year."
);

entity(
    "hybrid-era",
    "Hybrid era",
    "concept",
    "2014-onwards power-unit rules that Mercedes first solved.",
    "The hybrid era is the Formula 1 regulations period that began in 2014 with turbo-hybrid power units. Mercedes won the first stretch; Red Bull later took the advantage."
);

entity(
    "drs",
    "DRS",
    "concept",
    "Drag Reduction System — the overtaking flap of the modern era.",
    "DRS is the adjustable rear wing Formula 1 added to help passing, a regulated overtaking aid that defines how hybrid-era races look on television."
);

/* ---------- Relationships ---------- */

rel("fia", "formula-1", "produced", "The FIA governs Formula 1 and awards its world championships.", 0.99, 0.98);
rel("fia", "world-drivers-championship", "created", "The FIA awards the World Drivers' Championship.", 0.98, 0.96);
rel("fia", "constructors-championship", "created", "The FIA awards the World Constructors' Championship.", 0.97, 0.95);
rel("bernie-ecclestone", "formula-one-group", "created", "Bernie Ecclestone built the commercial machine the Formula One Group inherited.", 0.96, 0.93);
rel("formula-one-group", "formula-1", "produced", "The Formula One Group sells the championship as a global television product.", 0.96, 0.93);

rel("enzo-ferrari", "scuderia-ferrari", "created", "Enzo Ferrari founded the Scuderia that still races in Formula 1.", 0.99, 0.97);
rel("michael-schumacher", "scuderia-ferrari", "member_of", "Michael Schumacher won five straight titles with Ferrari.", 0.98, 0.96);
rel("niki-lauda", "scuderia-ferrari", "member_of", "Niki Lauda won Drivers' Championships with Ferrari before his McLaren years.", 0.94, 0.9);
rel("ayrton-senna", "mclaren", "member_of", "Ayrton Senna won his three titles with McLaren.", 0.98, 0.96);
rel("alain-prost", "mclaren", "member_of", "Alain Prost won titles as Senna's McLaren teammate and rival.", 0.96, 0.94);
rel("ayrton-senna", "alain-prost", "opposed_by", "Senna and Prost's McLaren years were Formula 1's defining teammate war.", 0.97, 0.95);
rel("lewis-hamilton", "mercedes-amg-f1", "member_of", "Lewis Hamilton won six of his seven titles with Mercedes.", 0.98, 0.96);
rel("toto-wolff", "mercedes-amg-f1", "leads", "Toto Wolff is the team principal of Mercedes-AMG Petronas.", 0.97, 0.94);
rel("max-verstappen", "red-bull-racing", "member_of", "Max Verstappen is Red Bull Racing's 2020s champion.", 0.99, 0.97);
rel("sebastian-vettel", "red-bull-racing", "member_of", "Sebastian Vettel won four straight titles with Red Bull Racing.", 0.97, 0.95);
rel("christian-horner", "red-bull-racing", "leads", "Christian Horner has led Red Bull Racing since its first seasons.", 0.97, 0.94);
rel("max-verstappen", "lewis-hamilton", "opposed_by", "Verstappen took the 2021 title from Hamilton on the last lap in Abu Dhabi.", 0.96, 0.94);

rel("juan-manuel-fangio", "world-drivers-championship", "uses", "Fangio's five Drivers' Championships were the record Schumacher broke.", 0.96, 0.93);
rel("michael-schumacher", "world-drivers-championship", "uses", "Schumacher's seven Drivers' Championships reset the career standard.", 0.98, 0.96);
rel("lewis-hamilton", "world-drivers-championship", "uses", "Hamilton matched Schumacher on seven World Drivers' Championships.", 0.98, 0.96);
rel("max-verstappen", "world-drivers-championship", "uses", "Verstappen's title run is the Drivers' Championship of the 2020s.", 0.96, 0.93);
rel("scuderia-ferrari", "constructors-championship", "uses", "Ferrari has treated the Constructors' Championship as a birthright prize.", 0.95, 0.92);
rel("mercedes-amg-f1", "constructors-championship", "uses", "Mercedes won a record hybrid-era run of Constructors' Championships.", 0.97, 0.94);
rel("red-bull-racing", "constructors-championship", "uses", "Red Bull Racing added constructors' titles in the Vettel and Verstappen eras.", 0.96, 0.93);
rel("mercedes-amg-f1", "hybrid-era", "caused", "Mercedes solved the 2014 hybrid rules first and built a dynasty on them.", 0.96, 0.94);
rel("hybrid-era", "formula-1", "part_of", "The hybrid era is the 2014-onwards regulations chapter of Formula 1.", 0.96, 0.93);
rel("drs", "hybrid-era", "part_of", "DRS is the overtaking aid that frames how hybrid-era races look.", 0.93, 0.89);

rel("monaco-grand-prix", "monaco", "occurred_at", "The Monaco Grand Prix is run on the Circuit de Monaco.", 0.99, 0.97);
rel("italian-grand-prix", "monza", "occurred_at", "The Italian Grand Prix is run at Monza.", 0.99, 0.97);
rel("british-grand-prix", "silverstone", "occurred_at", "The British Grand Prix is run at Silverstone.", 0.99, 0.97);
rel("ayrton-senna", "monaco-grand-prix", "involved", "Senna won the Monaco Grand Prix a record six times.", 0.97, 0.95);
rel("lewis-hamilton", "british-grand-prix", "involved", "Hamilton's home grand prix is the British Grand Prix at Silverstone.", 0.95, 0.91);
rel("scuderia-ferrari", "italian-grand-prix", "involved", "Ferrari's home grand prix is the Italian Grand Prix at Monza.", 0.96, 0.93);
rel("san-marino-grand-prix-1994", "imola", "occurred_at", "The 1994 San Marino Grand Prix was run at Imola.", 0.99, 0.97);
rel("san-marino-grand-prix-1994", "ayrton-senna", "involved", "Ayrton Senna was killed at the 1994 San Marino Grand Prix.", 0.99, 0.98);
rel("san-marino-grand-prix-1994", "formula-1", "caused", "Senna's death at Imola forced Formula 1's modern safety revolution.", 0.96, 0.94);
rel("british-grand-prix", "formula-1", "preceded", "The 1950 British Grand Prix at Silverstone opened the World Championship.", 0.97, 0.94);

rel("monaco-grand-prix", "formula-1", "part_of", "The Monaco Grand Prix is Formula 1's street-circuit classic.", 0.97, 0.95);
rel("italian-grand-prix", "formula-1", "part_of", "The Italian Grand Prix is Ferrari's home Formula 1 race.", 0.96, 0.93);
rel("british-grand-prix", "formula-1", "part_of", "The British Grand Prix is the championship's founding race.", 0.96, 0.93);
rel("scuderia-ferrari", "formula-1", "part_of", "Ferrari is the only constructor present since the first World Championship.", 0.97, 0.95);
rel("mclaren", "formula-1", "part_of", "McLaren is the British constructor of the Senna–Prost era.", 0.95, 0.92);
rel("mercedes-amg-f1", "formula-1", "part_of", "Mercedes-AMG Petronas is the hybrid-era factory team.", 0.96, 0.93);
rel("red-bull-racing", "formula-1", "part_of", "Red Bull Racing is the constructor of the Vettel and Verstappen dynasties.", 0.96, 0.93);
rel("world-drivers-championship", "formula-1", "part_of", "The World Drivers' Championship is Formula 1's individual title.", 0.98, 0.97);
rel("constructors-championship", "formula-1", "part_of", "The Constructors' Championship is Formula 1's team title.", 0.98, 0.96);
rel("spa-francorchamps", "formula-1", "connected_to", "Spa-Francorchamps is a drivers' favorite on the Formula 1 calendar.", 0.93, 0.89);

module.exports = { entities, relationships };
