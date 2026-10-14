/*
 * Silk Road subject data — overland oases, maritime legs, and the goods that moved.
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

/* ---------- Root / routes ---------- */

entity(
    "silk-road",
    "Silk Road",
    "topic",
    "Overland and maritime corridors that moved silk, faiths, and techniques across Eurasia.",
    "The Silk Road is the modern name for the linked caravan and sea routes between China, Central Asia, Iran, India, and the Mediterranean. No single highway existed; oasis cities, empires, and monsoon shipping made the traffic."
);

entity(
    "overland-silk-road",
    "Overland Silk Road",
    "place",
    "Oasis chain from Chang'an through the Tarim to Iran and the Levant.",
    "The overland Silk Road ran the Hexi Corridor, split around the Taklamakan, and rejoined at Kashgar toward Samarkand and the Iranian plateau — the caravan spine Zhang Qian opened to Han knowledge."
);

entity(
    "maritime-silk-route",
    "Maritime silk route",
    "place",
    "Monsoon sea lanes from South China through the Indian Ocean.",
    "The maritime silk route linked Guangzhou and Quanzhou to Srivijaya, India, the Persian Gulf, and the Red Sea. It carried more bulk than camels and, in some centuries, more religious traffic too."
);

entity(
    "hexi-corridor",
    "Hexi Corridor",
    "place",
    "Gansu passage between the Tibetan plateau and the Gobi.",
    "The Hexi Corridor is the bottleneck from the Chinese interior toward Dunhuang. Whoever held its oasis towns could tax or close the eastern overland trade."
);

entity(
    "taklamakan-desert",
    "Taklamakan Desert",
    "place",
    "Tarim waste that forced the northern and southern oasis roads apart.",
    "The Taklamakan fills the Tarim Basin. Caravans hugged the northern or southern rim — Kucha or Khotan — rather than crossing the dune sea."
);

/* ---------- Cities ---------- */

entity(
    "changan",
    "Chang'an",
    "place",
    "Han and Tang eastern capital, departure city of the overland trade.",
    "Chang'an — later Xi'an — was the planned imperial city from which Han missions and Tang caravans left west. Its markets received the return flow of glass, horses, and foreign monks."
);

entity(
    "dunhuang",
    "Dunhuang",
    "place",
    "Jade Gate oasis and the cave-library of the eastern road.",
    "Dunhuang sits where the Hexi Corridor meets the Tarim split. The Mogao Caves record the Buddhist, Sogdian, and Chinese traffic that paused there."
);

entity(
    "kashgar",
    "Kashgar",
    "place",
    "Western Tarim crossroads before the Pamir climbs.",
    "Kashgar is where northern and southern Tarim routes meet and where the road lifts toward Ferghana, Samarkand, and India. It has been a market of many languages for two millennia."
);

entity(
    "samarkand",
    "Samarkand",
    "place",
    "Sogdian and later Timurid city on the Zeravshan.",
    "Samarkand was the great Sogdian caravan capital, then a Mongol ruin, then Timur's showcase. Silk, paper, and diplomats passed it on the way between China and Iran."
);

entity(
    "baghdad",
    "Baghdad",
    "place",
    "Abbasid capital that pulled Silk Road and Indian Ocean goods into one court.",
    "Baghdad, founded in 762, sat on the Tigris as the Abbasid hinge: overland routes from Khurasan and sea goods up from the Gulf met a city hungry for paper, silk, and translation."
);

entity(
    "palmyra",
    "Palmyra",
    "place",
    "Syrian desert caravan city that taxed the last leg toward Rome.",
    "Palmyra grew rich moving silk, incense, and spices between the Euphrates and the Mediterranean until Rome crushed its revolt in the 270s. It is the western desert twin of the oasis towns."
);

entity(
    "quanzhou",
    "Quanzhou",
    "place",
    "Song–Yuan port Marco Polo knew as Zayton.",
    "Quanzhou was the great medieval Chinese terminus of the maritime silk route: Muslim, Tamil, and Chinese merchants under one customs regime, facing the monsoon."
);

entity(
    "mogao-caves",
    "Mogao Caves",
    "place",
    "Cave-temples and manuscript hoard at Dunhuang.",
    "The Mogao Caves preserve wall-paintings and the sealed library that documents Buddhism's travel, Sogdian letters, and the everyday paper of the eastern Silk Road."
);

/* ---------- People / empires / conditions ---------- */

entity(
    "zhang-qian",
    "Zhang Qian",
    "person",
    "Han envoy whose reports opened the Western Regions to Chinese policy.",
    "Zhang Qian's missions (138–126 BCE and after) for Emperor Wu reached the Yuezhi and Ferghana. His geography made the Han court treat Central Asia as a reachable diplomatic field."
);

entity(
    "emperor-wu-of-han",
    "Emperor Wu of Han",
    "person",
    "Han emperor who sent Zhang Qian and fought for the Hexi Corridor.",
    "Emperor Wu (r. 141–87 BCE) pushed Han power into the Gansu corridor and Ferghana horse country, the political beginning of a sustained Chinese stake in the overland road."
);

entity(
    "marco-polo",
    "Marco Polo",
    "person",
    "Venetian traveler whose book advertised Yuan Cathay to Europe.",
    "Marco Polo's late-thirteenth-century journey, whether every mile is exact, is the European popular memory of the Pax Mongolica roads from the Levant to Khanbaliq and the China coast."
);

entity(
    "han-dynasty",
    "Han dynasty",
    "organization",
    "Chinese empire that first institutionalized the Western Regions traffic.",
    "The Han dynasty created the protectorate system in the Tarim, imported Ferghana horses, and exported silk that Parthians and Romans already craved."
);

entity(
    "sogdians",
    "Sogdians",
    "organization",
    "Iranian merchant people who ran the Central Asian caravan trade.",
    "Sogdians from Samarkand, Bukhara, and the surrounding oases were the middlemen of the early medieval road: letters at Dunhuang, fire temples and Buddhist gifts, and networks into Tang Chang'an."
);

entity(
    "mongol-empire",
    "Mongol Empire",
    "organization",
    "Thirteenth-century polity that briefly put one power over most of the land route.",
    "The Mongol Empire joined China, the steppe, and Iran under related khanates. Its messengers and passports are what later writers mean by a Pax Mongolica on the Silk Road."
);

entity(
    "pax-mongolica",
    "Pax Mongolica",
    "concept",
    "Relative security of Eurasian roads under the Mongol khanates.",
    "Pax Mongolica names the thirteenth- and fourteenth-century window when Italian, Persian, and Chinese travelers could move farther under Mongol safe-conduct than under the fractured states before and after."
);

entity(
    "kushan-empire",
    "Kushan Empire",
    "organization",
    "Central Asian dynasty that midwifed Buddhism into the Tarim and China.",
    "The Kushans, heirs of the Yuezhi, ruled a zone from Bactria to northern India. Their coins and monasteries are a main vehicle of the first great Buddhist transmission north and east."
);

/* ---------- Goods, faiths, research ---------- */

entity(
    "silk",
    "Silk",
    "object",
    "Chinese textile that named the road in later European speech.",
    "Silk was the prestige good Romans already associated with the Seres. It moved west as yarn and cloth; sericulture itself later leaked to Central Asia and Byzantium."
);

entity(
    "camel-caravans",
    "Camel caravans",
    "organization",
    "Bactrian camel trains that made the desert legs possible.",
    "Camel caravans — two-humped Bactrians on the cold deserts — carried silk, jade, and bullion between oases. The animal, not a paved road, is the overland technology."
);

entity(
    "buddhism-transmission",
    "Buddhism transmission",
    "event",
    "Movement of monks, texts, and images from India into China via Central Asia.",
    "Buddhism's transmission along the Silk Road is a centuries-long event: Kushan patronage, Dunhuang caves, and translators in Chang'an who made Indian sutras into Chinese religion."
);

entity(
    "paper",
    "Paper",
    "object",
    "Chinese writing material that traveled west to the Islamic world.",
    "Paper, long used in Han China, reached Samarkand and then Abbasid cities after the eighth century. It multiplied books along the same routes that had carried silk."
);

entity(
    "ferghana-horses",
    "Ferghana horses",
    "object",
    "Heavenly horses the Han court sought in the far west.",
    "The Ferghana horses of Dayuan were a Han strategic obsession: Zhang Qian reported them, and later campaigns tried to secure the bloodstock that made the western policy worth the cost."
);

entity(
    "yuezhi",
    "Yuezhi",
    "organization",
    "Nomad people Zhang Qian was sent to find, later founders of Kushan power.",
    "The Yuezhi, driven from the Gansu borderlands, resettled in Bactria. Zhang Qian's failed alliance with them still mapped the road; their Kushan heirs carried Buddhism east."
);

entity(
    "parthian-empire",
    "Parthian Empire",
    "organization",
    "Iranian power that sat between Han goods and Rome.",
    "The Parthian Empire controlled the Iranian plateau legs and preferred to mediate silk rather than let Rome and China meet. Palmyra and the steppe routes were work-arounds as much as main streets."
);

entity(
    "srivijaya",
    "Srivijaya",
    "organization",
    "Sumatran thalassocracy that taxed the maritime silk route.",
    "Srivijaya, based at Palembang, controlled the Strait of Malacca approaches. Chinese and Arab writers treat it as the checkpoint of the sea road to India and China."
);

entity(
    "dunhuang-manuscripts",
    "Dunhuang manuscripts",
    "work",
    "Sealed library of the Mogao Caves, opened in the early twentieth century.",
    "The Dunhuang manuscripts — Buddhist sutras, contracts, and Sogdian letters — are the documentary core for how religion and trade actually looked on the eastern Silk Road."
);

/* ---------- Relationships ---------- */

rel("overland-silk-road", "silk-road", "part_of", "The oasis caravan chain is the overland half of the Silk Road.", 0.98, 0.96);
rel("maritime-silk-route", "silk-road", "part_of", "The monsoon sea lanes are the maritime half of the Silk Road.", 0.97, 0.95);
rel("hexi-corridor", "overland-silk-road", "part_of", "The Hexi Corridor is the eastern bottleneck of the overland road.", 0.96, 0.93);
rel("taklamakan-desert", "overland-silk-road", "located_in", "The Taklamakan splits the Tarim legs of the overland road.", 0.95, 0.92);

rel("changan", "overland-silk-road", "located_in", "Chang'an is the classic eastern terminus of the overland road.", 0.97, 0.95);
rel("dunhuang", "hexi-corridor", "located_in", "Dunhuang sits at the west end of the Hexi Corridor.", 0.97, 0.94);
rel("kashgar", "overland-silk-road", "located_in", "Kashgar is the western Tarim crossroads of the overland road.", 0.96, 0.93);
rel("samarkand", "overland-silk-road", "located_in", "Samarkand is the Sogdian hinge of the overland road.", 0.96, 0.93);
rel("palmyra", "overland-silk-road", "located_in", "Palmyra taxed the Syrian desert approach to the Mediterranean.", 0.94, 0.9);
rel("baghdad", "overland-silk-road", "located_in", "Abbasid Baghdad pulled overland Khurasan traffic into one capital.", 0.93, 0.89);
rel("quanzhou", "maritime-silk-route", "located_in", "Quanzhou was a chief Chinese port of the maritime silk route.", 0.96, 0.93);
rel("mogao-caves", "dunhuang", "located_in", "The Mogao Caves are cut into the cliffs at Dunhuang.", 0.98, 0.96);

rel("zhang-qian", "emperor-wu-of-han", "supports", "Zhang Qian traveled as Emperor Wu's envoy to the Western Regions.", 0.97, 0.95);
rel("emperor-wu-of-han", "han-dynasty", "leads", "Emperor Wu drove Han expansion into the corridor and the Tarim.", 0.96, 0.93);
rel("zhang-qian", "yuezhi", "involved", "Zhang Qian's brief was to find the Yuezhi as allies against the Xiongnu.", 0.95, 0.92);
rel("zhang-qian", "overland-silk-road", "inspired", "Zhang Qian's reports made the overland west a standing Han concern.", 0.95, 0.92);
rel("han-dynasty", "changan", "located_in", "The Han court that opened the west sat at Chang'an.", 0.95, 0.91);
rel("han-dynasty", "ferghana-horses", "uses", "The Han fought and bargained for Ferghana horses.", 0.94, 0.9);
rel("yuezhi", "kushan-empire", "created", "Yuezhi groups in Bactria became the Kushan dynasty.", 0.93, 0.89);

rel("sogdians", "samarkand", "located_in", "Samarkand was a chief Sogdian caravan city.", 0.96, 0.93);
rel("sogdians", "camel-caravans", "uses", "Sogdian firms organized many of the Central Asian camel caravans.", 0.94, 0.9);
rel("camel-caravans", "overland-silk-road", "uses", "Bactrian caravans were the transport of the desert legs.", 0.97, 0.94);
rel("silk", "silk-road", "produced", "Chinese silk is the good that later named the whole network.", 0.96, 0.93);
rel("parthian-empire", "silk", "involved", "Parthia mediated Chinese silk toward the Roman world.", 0.93, 0.89);
rel("paper", "baghdad", "located_in", "Paper-making took root in the Abbasid world after arriving from the east.", 0.92, 0.88);
rel("paper", "samarkand", "located_in", "Samarkand is the traditional first western paper center on the road.", 0.92, 0.88);

rel("kushan-empire", "buddhism-transmission", "supports", "Kushan patronage carried Buddhism toward the Tarim and China.", 0.95, 0.92);
rel("buddhism-transmission", "dunhuang", "occurred_at", "Dunhuang's caves record Buddhism's long halt on the eastern road.", 0.95, 0.91);
rel("buddhism-transmission", "changan", "occurred_at", "Chang'an became a translation capital for incoming sutras.", 0.94, 0.9);
rel("mogao-caves", "buddhism-transmission", "produced", "The Mogao Caves are a monumental archive of transmitted Buddhism.", 0.95, 0.92);
rel("dunhuang-manuscripts", "mogao-caves", "located_in", "The sealed library was hidden in a Mogao cave.", 0.97, 0.95);

rel("mongol-empire", "pax-mongolica", "created", "Mongol conquests created the conditions called Pax Mongolica.", 0.97, 0.94);
rel("pax-mongolica", "marco-polo", "supports", "Polo's journey is the famous European use of the Mongol-era roads.", 0.94, 0.9);
rel("marco-polo", "quanzhou", "located_in", "Polo described the port of Zayton, identified with Quanzhou.", 0.9, 0.86);
rel("srivijaya", "maritime-silk-route", "leads", "Srivijaya taxed and policed a central stretch of the maritime route.", 0.93, 0.89);
rel("silk", "maritime-silk-route", "connected_to", "Silk also moved on ships when monsoon freight undercut the caravan.", 0.92, 0.88);

module.exports = { entities, relationships };
