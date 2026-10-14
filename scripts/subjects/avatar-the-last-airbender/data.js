/*
 * Avatar: The Last Airbender subject data — the Gaang, the four nations, and the Avatar cycle.
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

/* ---------- Root / creators ---------- */

entity(
    "avatar-the-last-airbender",
    "Avatar: The Last Airbender",
    "topic",
    "Aang, the Gaang, and a hundred-year war among four bending nations.",
    "Avatar: The Last Airbender is the Nickelodeon saga of Aang, the last Air Nomad and current Avatar, traveling with Katara, Sokka, Toph, and later Zuko to end the Fire Nation's war before Sozin's Comet. The Legend of Korra is a later sibling series in the same world."
);

entity(
    "michael-dante-dimartino",
    "Michael Dante DiMartino",
    "person",
    "Co-creator of Avatar: The Last Airbender.",
    "Michael Dante DiMartino co-created Avatar with Bryan Konietzko, writing and showrunning Aang's war story and later The Legend of Korra.",
    "documented"
);

entity(
    "bryan-konietzko",
    "Bryan Konietzko",
    "person",
    "Co-creator and visual lead of Avatar.",
    "Bryan Konietzko co-created Avatar, shaping the four nations' look, the bending arts, and the later Korra continuation.",
    "documented"
);

/* ---------- Works ---------- */

entity(
    "atla-series",
    "Avatar: The Last Airbender (series)",
    "work",
    "2005–08 Nickelodeon series of three books: Water, Earth, Fire.",
    "The original series follows Aang's awakening, the Gaang's training through the Water Tribes and Earth Kingdom, and the comet-deadline fight with Ozai.",
    "documented"
);

entity(
    "legend-of-korra",
    "The Legend of Korra",
    "work",
    "2012–14 sibling series set seventy years later.",
    "The Legend of Korra follows the next Avatar, Korra of the Southern Water Tribe, through Republic City, new bending forms, and later spiritual crises.",
    "documented"
);

/* ---------- Nations / groups / places ---------- */

entity(
    "the-gaang",
    "The Gaang",
    "organization",
    "Aang's traveling family — Katara, Sokka, Toph, Appa, and later Zuko.",
    "The Gaang is the found family that crosses the map with Aang: waterbenders, a warrior, an earthbending prodigy, a sky bison, and the Fire Nation prince who finally joins."
);

entity(
    "air-nomads",
    "Air Nomads",
    "organization",
    "Pacifist airbenders wiped out at the war's start.",
    "The Air Nomads were the monastic people of the air temples, Aang's people, erased in Fire Lord Sozin's comet attack that opened the Hundred Year War."
);

entity(
    "water-tribes",
    "Water Tribes",
    "organization",
    "Northern and Southern pole peoples of waterbending.",
    "The Water Tribes are the polar nations Katara and Sokka come from — a reduced South and a fortified North — whose bending heals, freezes, and later bloodbends."
);

entity(
    "earth-kingdom",
    "Earth Kingdom",
    "organization",
    "Vast green nation of Ba Sing Se, Omashu, and earthbenders.",
    "The Earth Kingdom is the largest nation, a continent of villages, Dai Li secrets, and Ba Sing Se's walls, where Toph invents metalbending."
);

entity(
    "fire-nation",
    "Fire Nation",
    "organization",
    "Imperial island nation that launched the Hundred Year War.",
    "The Fire Nation is the industrial empire of Sozin, Azulon, and Ozai — Zuko and Azula's home — whose comet-boosted firebending nearly ends the other nations."
);

entity(
    "kyoshi-warriors",
    "Kyoshi Warriors",
    "organization",
    "All-women fighters Suki leads in Kyoshi's paint.",
    "The Kyoshi Warriors are the green-and-gold protectors of Kyoshi Island, fans and armor in the style of Avatar Kyoshi, led on screen by Suki."
);

entity(
    "ba-sing-se",
    "Ba Sing Se",
    "place",
    "Walled Earth Kingdom capital that denies the war.",
    "Ba Sing Se is the Earth Kingdom's enormous capital, ringed by walls, run by the Dai Li, and famous for the rule that there is no war in Ba Sing Se."
);

entity(
    "southern-water-tribe",
    "Southern Water Tribe",
    "place",
    "Katara and Sokka's home at the South Pole.",
    "The Southern Water Tribe is the snow village Aang first meets after the iceberg, stripped of waterbenders by Fire Nation raids."
);

/* ---------- Characters / creatures / concepts ---------- */

entity(
    "aang",
    "Aang",
    "person",
    "The last airbender and Avatar of his age.",
    "Aang is the Air Nomad boy who fled his destiny, slept in an iceberg a hundred years, and must master all four elements before Sozin's Comet."
);

entity(
    "katara",
    "Katara",
    "person",
    "Waterbender of the South and the Gaang's fierce center.",
    "Katara is the Southern waterbender who becomes Aang's teacher and the group's moral engine, later a master who heals and fights."
);

entity(
    "sokka",
    "Sokka",
    "person",
    "Nonbender warrior, tactician, and comic spine of the Gaang.",
    "Sokka is Katara's brother, a boomerang-and-sword planner who treats the war as a problem he can out-think even without bending."
);

entity(
    "toph-bei-fong",
    "Toph Beifong",
    "person",
    "Blind earthbending prodigy who invents metalbending.",
    "Toph Beifong is the greatest earthbender of her age, who sees with seismic sense, joins the Gaang from an Earth Kingdom tournament, and invents metalbending."
);

entity(
    "zuko",
    "Zuko",
    "person",
    "Banished prince who hunts the Avatar, then joins him.",
    "Zuko is Fire Lord Ozai's scarred heir, sent to capture Aang, traveling with Uncle Iroh until he chooses the Gaang and a different Fire Nation."
);

entity(
    "iroh",
    "Iroh",
    "person",
    "Dragon of the West — Zuko's uncle and tea-loving general.",
    "Iroh is the retired general and firebending master who steers Zuko with tea, pai sho, and a grief that makes him the Fire Nation's gentlest voice."
);

entity(
    "azula",
    "Azula",
    "person",
    "Prodigy princess of blue fire and lightning.",
    "Azula is Ozai's favored child, a precise firebender who takes Ba Sing Se, hunts the Gaang with Mai and Ty Lee, and cracks under the crown."
);

entity(
    "ozai",
    "Ozai",
    "person",
    "Fire Lord of the comet-era war.",
    "Ozai is the Fire Lord who burned Zuko, elevated Azula, and plans to finish the Earth Kingdom when Sozin's Comet arrives."
);

entity(
    "sozin",
    "Sozin",
    "person",
    "Fire Lord who began the war on the comet.",
    "Sozin is Roku's friend-turned-imperial, the Fire Lord whose comet attack on the Air Nomads starts the Hundred Year War."
);

entity(
    "avatar-roku",
    "Avatar Roku",
    "person",
    "Aang's Fire Nation-born predecessor.",
    "Avatar Roku is the Avatar before Aang, a Fire Nation noble who failed to stop Sozin and later guides Aang from the spirit world."
);

entity(
    "appa",
    "Appa",
    "person",
    "Aang's sky bison and the Gaang's flying home.",
    "Appa is the six-legged sky bison who carries the Gaang, Aang's animal guide, stolen and recovered in one of the series' longest hunts."
);

entity(
    "momo",
    "Momo",
    "person",
    "Winged lemur who joins at the Southern Air Temple.",
    "Momo is the lemur the Gaang finds in the empty air temple, a small scavenger who stays with Aang through the war."
);

entity(
    "suki",
    "Suki",
    "person",
    "Leader of the Kyoshi Warriors and Sokka's partner.",
    "Suki leads the Kyoshi Warriors, trains Sokka, is captured by the Fire Nation, and later fights beside the Gaang on the day of the comet."
);

entity(
    "korra",
    "Korra",
    "person",
    "Next Avatar — waterbender of the South in the sibling series.",
    "Korra is the Avatar after Aang, a Southern Water Tribe prodigy who must learn airbending and a modern world's politics in The Legend of Korra."
);

entity(
    "sozins-comet",
    "Sozin's Comet",
    "event",
    "Once-a-century firebending surge that started and could end the war.",
    "Sozin's Comet is the celestial event that let Sozin destroy the Air Nomads and, a hundred years later, gives Ozai the power Aang must meet."
);

entity(
    "avatar-state",
    "Avatar State",
    "concept",
    "Channel of every past Avatar's power — and a single point of failure.",
    "The Avatar State is the glowing, overwhelming form in which Aang channels prior Avatars; if he dies in it, the cycle ends."
);

entity(
    "avatar-cycle",
    "Avatar cycle",
    "concept",
    "Reincarnation order: water, earth, fire, air.",
    "The Avatar cycle reincarnates through the four nations in order, tying Roku to Aang to Korra and binding the world to one spirit in many lives."
);

entity(
    "energybending",
    "Energybending",
    "concept",
    "Lion-turtle art Aang uses to take Ozai's firebending.",
    "Energybending is the ancient bending of life-energy the lion turtle grants Aang, the way he ends Ozai's threat without killing him."
);

/* ---------- Relationships ---------- */

rel("michael-dante-dimartino", "avatar-the-last-airbender", "created", "Michael Dante DiMartino co-created Avatar: The Last Airbender.", 0.99, 0.99);
rel("bryan-konietzko", "avatar-the-last-airbender", "created", "Bryan Konietzko co-created Avatar: The Last Airbender.", 0.99, 0.99);
rel("michael-dante-dimartino", "atla-series", "created", "DiMartino showran the original series.", 0.98, 0.96);
rel("bryan-konietzko", "atla-series", "created", "Konietzko shaped the original series' world and look.", 0.98, 0.96);
rel("michael-dante-dimartino", "legend-of-korra", "created", "DiMartino co-created The Legend of Korra.", 0.97, 0.94);
rel("bryan-konietzko", "legend-of-korra", "created", "Konietzko co-created The Legend of Korra.", 0.97, 0.94);

rel("atla-series", "avatar-the-last-airbender", "part_of", "The 2005 series is the core Avatar: The Last Airbender work.", 0.99, 0.98);
rel("legend-of-korra", "avatar-the-last-airbender", "part_of", "Korra is a sibling series in the same Avatar world.", 0.96, 0.93);
rel("atla-series", "legend-of-korra", "followed", "The Legend of Korra follows seventy years after Aang's war.", 0.95, 0.91);

rel("atla-series", "aang", "involved", "The original series is Aang's story as the last airbender.", 0.99, 0.97);
rel("atla-series", "the-gaang", "involved", "The series is the Gaang's journey across the four nations.", 0.98, 0.96);
rel("atla-series", "sozins-comet", "involved", "The series races toward Sozin's Comet.", 0.97, 0.94);
rel("legend-of-korra", "korra", "involved", "The Legend of Korra is Korra's story as the next Avatar.", 0.98, 0.96);

rel("aang", "the-gaang", "leads", "Aang is the Avatar the Gaang travels to restore.", 0.98, 0.96);
rel("katara", "the-gaang", "member_of", "Katara is a core member of the Gaang.", 0.98, 0.96);
rel("sokka", "the-gaang", "member_of", "Sokka is a core member of the Gaang.", 0.98, 0.96);
rel("toph-bei-fong", "the-gaang", "member_of", "Toph joins the Gaang as Aang's earthbending teacher.", 0.97, 0.94);
rel("appa", "the-gaang", "member_of", "Appa carries the Gaang.", 0.97, 0.94);
rel("momo", "the-gaang", "member_of", "Momo travels with the Gaang.", 0.94, 0.9);
rel("zuko", "the-gaang", "member_of", "Zuko finally joins the Gaang as Aang's firebending teacher.", 0.95, 0.91);
rel("aang", "air-nomads", "member_of", "Aang is the last surviving Air Nomad.", 0.99, 0.97);
rel("katara", "water-tribes", "member_of", "Katara is a waterbender of the Southern Water Tribe.", 0.98, 0.96);
rel("sokka", "water-tribes", "member_of", "Sokka is a warrior of the Southern Water Tribe.", 0.97, 0.94);
rel("toph-bei-fong", "earth-kingdom", "member_of", "Toph is an Earth Kingdom earthbender.", 0.96, 0.93);
rel("zuko", "fire-nation", "member_of", "Zuko is a prince of the Fire Nation.", 0.98, 0.96);
rel("iroh", "fire-nation", "member_of", "Iroh is a Fire Nation general and uncle to the throne.", 0.97, 0.94);
rel("azula", "fire-nation", "member_of", "Azula is a princess of the Fire Nation.", 0.97, 0.94);
rel("ozai", "fire-nation", "leads", "Ozai is Fire Lord during Aang's war.", 0.98, 0.96);
rel("sozin", "fire-nation", "leads", "Sozin was the Fire Lord who began the war.", 0.97, 0.94);
rel("suki", "kyoshi-warriors", "leads", "Suki leads the Kyoshi Warriors.", 0.97, 0.94);
rel("korra", "water-tribes", "member_of", "Korra is born to the Southern Water Tribe.", 0.96, 0.93);
rel("avatar-roku", "fire-nation", "member_of", "Roku was born in the Fire Nation before becoming Avatar.", 0.95, 0.91);

rel("aang", "ozai", "opposed_by", "Aang's war ends in a confrontation with Ozai.", 0.97, 0.94);
rel("zuko", "ozai", "opposed_by", "Zuko breaks from Ozai to help the Avatar.", 0.96, 0.93);
rel("azula", "the-gaang", "opposed_by", "Azula hunts the Gaang through the Earth Kingdom.", 0.96, 0.93);
rel("iroh", "zuko", "supports", "Iroh guides Zuko away from Ozai's path.", 0.98, 0.96);
rel("suki", "sokka", "supports", "Suki fights beside Sokka and trains him as a warrior.", 0.94, 0.9);
rel("aang", "appa", "connected_to", "Appa is Aang's sky bison and animal guide.", 0.97, 0.94);
rel("aang", "avatar-state", "uses", "Aang enters the Avatar State when past lives seize the fight.", 0.97, 0.94);
rel("aang", "energybending", "uses", "Aang uses energybending to strip Ozai of firebending.", 0.96, 0.93);
rel("aang", "avatar-cycle", "part_of", "Aang is the Avatar of his turn in the cycle.", 0.97, 0.94);
rel("korra", "avatar-cycle", "part_of", "Korra is the Avatar after Aang.", 0.96, 0.93);
rel("avatar-roku", "avatar-cycle", "part_of", "Roku is the Avatar before Aang.", 0.96, 0.93);
rel("sozin", "sozins-comet", "uses", "Sozin used the comet to destroy the Air Nomads.", 0.97, 0.94);
rel("ozai", "sozins-comet", "uses", "Ozai plans to burn the Earth Kingdom under the comet.", 0.96, 0.93);
rel("sozins-comet", "air-nomads", "caused", "The comet attack is what ended the Air Nomads as a people.", 0.96, 0.93);

rel("the-gaang", "southern-water-tribe", "located_in", "The Gaang first gathers at the Southern Water Tribe.", 0.93, 0.88);
rel("southern-water-tribe", "water-tribes", "part_of", "The South is one of the Water Tribes.", 0.97, 0.94);
rel("ba-sing-se", "earth-kingdom", "part_of", "Ba Sing Se is the Earth Kingdom capital.", 0.97, 0.94);
rel("azula", "ba-sing-se", "involved", "Azula's coup takes Ba Sing Se from the inside.", 0.95, 0.91);
rel("atla-series", "sozins-comet", "occurred_at", "The series climax is timed to Sozin's Comet.", 0.95, 0.91);

module.exports = { entities, relationships };
