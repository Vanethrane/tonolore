/*
 * Journey to the West subject data — Tang pilgrimage, disciples, and the novel.
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

/* ---------- Root / works / cosmos ---------- */

entity(
    "journey-to-the-west",
    "Journey to the West",
    "topic",
    "Tang monk, Monkey King, and the eighty-one tribulations on the road to India.",
    "Journey to the West is the public-domain Chinese cycle of Xuanzang's scripture pilgrimage, recast as a hundred-chapter Ming novel: Sun Wukong, Zhu Bajie, Sha Wujing, and a comedy of demons between Chang'an and Thunderclap Monastery."
);

entity(
    "journey-to-the-west-novel",
    "Journey to the West (novel)",
    "work",
    "Ming hundred-chapter novel attributed to Wu Cheng'en.",
    "The novel Xiyouji, printed in the 1590s and traditionally ascribed to Wu Cheng'en, is the canonical telling: Wukong's rebellion, the disciples' recruitment, and the westward episodes that later opera and film keep retelling."
);

entity(
    "wu-chengen",
    "Wu Cheng'en",
    "person",
    "Ming scholar traditionally named as the novel's author.",
    "Wu Cheng'en (c. 1500–1582) of Huai'an is the author most historians assign to the hundred-chapter Journey to the West, working from older Xuanzang lore and monkey-saint plays."
);

entity(
    "xuanzang-historical",
    "Xuanzang",
    "person",
    "Seventh-century monk whose India pilgrimage the novel mythologizes.",
    "Xuanzang left Tang Chang'an in 629, studied at Nalanda, and returned with scriptures. The novel's Tang Sanzang is his legendary double — gentler, more endangered, and escorted by converted demons."
);

entity(
    "tang-pilgrimage",
    "Tang pilgrimage",
    "organization",
    "The scripture-seeking party: master, three disciples, and the dragon horse.",
    "The Tang pilgrimage is the traveling household Guanyin assembles: Sanzang, Wukong, Bajie, Wujing, and the White Dragon Horse, bound to fetch Mahayana texts from the West."
);

/* ---------- Places ---------- */

entity(
    "changan",
    "Chang'an",
    "place",
    "Tang capital from which the pilgrimage is commissioned.",
    "Chang'an is the eastern terminus: Emperor Taizong's court, the ordination of Sanzang, and the city the scriptures must return to if the quest is to count."
);

entity(
    "flower-fruit-mountain",
    "Flower–Fruit Mountain",
    "place",
    "Wukong's birthplace and monkey kingdom.",
    "Flower–Fruit Mountain is the blessed island where the stone monkey is born, claims the Water-Curtain Cave, and first styles himself king before the revolt against Heaven."
);

entity(
    "water-curtain-cave",
    "Water-Curtain Cave",
    "place",
    "Hidden cave-palace behind the waterfall on Flower–Fruit Mountain.",
    "Water-Curtain Cave is Wukong's first throne-room, found by leaping the falls — the earthly seat he leaves for the Register of Immortals and the war on Heaven."
);

entity(
    "heaven",
    "Heaven",
    "place",
    "Jade Emperor's court that Wukong wrecks and later must serve.",
    "The celestial court — halls, peach garden, and stables — is the bureaucracy Wukong first joins as Protector of the Horses and then smashes as Great Sage Equal to Heaven."
);

entity(
    "flaming-mountains",
    "Flaming Mountains",
    "place",
    "Burning range that only Princess Iron Fan's palm-leaf fan can cool.",
    "The Flaming Mountains block the pilgrims in the novel's middle west. Wukong must borrow the Banana-Leaf Fan from Iron Fan and outwit the Bull Demon King to cross."
);

entity(
    "thunderclap-monastery",
    "Thunderclap Monastery",
    "place",
    "Buddha's Western temple where the scriptures are granted.",
    "Thunderclap Monastery on Vulture Peak is the pilgrimage's goal: the Buddha's seat, the blank and then true scriptures, and the disciples' final appointments."
);

entity(
    "western-heaven",
    "Western Heaven",
    "place",
    "Sacred west of the novel — India as Buddhist paradise on earth.",
    "Western Heaven is the story's name for the scripture-land: not a map of every Indian kingdom, but the religious west toward which Taizong sends Sanzang."
);

/* ---------- Pilgrims and gods ---------- */

entity(
    "tang-sanzang",
    "Tang Sanzang",
    "person",
    "Tripitaka — the Tang monk who must fetch the scriptures.",
    "Tang Sanzang is the reincarnated disciple Gold Cicada, so compassionate he is almost helpless. Guanyin gives him disciples and the tight fillet to finish Xuanzang's work in romance form."
);

entity(
    "sun-wukong",
    "Sun Wukong",
    "person",
    "Monkey King, Great Sage Equal to Heaven, and the pilgrimage's fighter.",
    "Sun Wukong is born of stone, learns seventy-two transformations, raids Heaven, and is pinned under Five Elements Mountain until Sanzang frees him. The golden cudgel and the headband define his service."
);

entity(
    "zhu-bajie",
    "Zhu Bajie",
    "person",
    "Pig disciple, once Marshal of the Heavenly Reeds, now a gluttonous fighter.",
    "Zhu Bajie was banished for drunken assault in Heaven and reincarnated as a pig-man at Gao Village. He carries the nine-tooth rake, lusts, complains, and still holds the line."
);

entity(
    "sha-wujing",
    "Sha Wujing",
    "person",
    "River-sand monk, once a curtained heavenly general.",
    "Sha Wujing, the most steadfast disciple, was exiled to the Flowing Sand River for breaking a crystal cup. He becomes the quiet porter of the luggage and a reliable staff-fighter."
);

entity(
    "white-dragon-horse",
    "White Dragon Horse",
    "person",
    "Third prince of the West Sea, condemned to be Sanzang's mount.",
    "The White Dragon Horse ate Sanzang's first horse and was sentenced to carry the monk. He rarely speaks, but he is the fifth pilgrim and a dragon under the saddle."
);

entity(
    "jade-emperor",
    "Jade Emperor",
    "person",
    "Heavenly sovereign whose court Wukong first mocks and later obeys.",
    "The Jade Emperor is the bureaucratic high god of the novel's Heaven. He cannot contain Wukong without the Buddha; after the revolt he remains the civil authority the pilgrims still petition."
);

entity(
    "buddha",
    "Buddha",
    "person",
    "Tathagata who pins Wukong and grants the scriptures at the end.",
    "The Buddha of Thunderclap outwits Wukong on the palm-as-mountain wager, imprisons him for five hundred years, and is the giver of the Tripitaka texts that close the book."
);

entity(
    "guanyin",
    "Guanyin",
    "person",
    "Bodhisattva who recruits the disciples and watches the road.",
    "Guanyin, sent by the Buddha, converts Wukong, Bajie, Wujing, and the dragon, gives Sanzang the fillet, and appears whenever the pilgrims' charity or folly stalls the quest."
);

entity(
    "emperor-taizong",
    "Emperor Taizong",
    "person",
    "Tang emperor who commissions the scripture quest after the underworld dream.",
    "Taizong, in the novel's opening arc, tours the underworld, returns in debt to the dead, and sends Sanzang west so the dynasty may have true Buddhist texts."
);

/* ---------- Objects, demons, events ---------- */

entity(
    "golden-cudgel",
    "Golden cudgel",
    "object",
    "Ruyi Jingu Bang — the shrinking staff Wukong took from the Dragon Palace.",
    "The golden cudgel, a needle in the ear and a pillar in battle, is the weapon Ao Guang could not keep. It answers Wukong's will and marks him as more than a monkey king."
);

entity(
    "tightening-fillet",
    "Tightening fillet",
    "object",
    "Gold band Guanyin gives Sanzang to control Wukong.",
    "The tightening fillet clamps Wukong's brow. When Sanzang recites the spell, pain forces the disciple back from murder and desertion — the novel's check on divine violence."
);

entity(
    "peaches-of-immortality",
    "Peaches of immortality",
    "object",
    "Heavenly peaches Wukong eats when he is left to watch the garden.",
    "The peaches of the Lady Queen's garden confer long life. Wukong's theft, with the elixir and heavenly wine, is the crime that turns a stable-hand revolt into a war on Heaven."
);

entity(
    "princess-iron-fan",
    "Princess Iron Fan",
    "person",
    "Raksasi whose palm-leaf fan can quench the Flaming Mountains.",
    "Princess Iron Fan is wife of the Bull Demon King and mother of Red Boy. The pilgrims cannot pass her mountains until Wukong borrows, steals, and finally wins the use of her fan."
);

entity(
    "bull-demon-king",
    "Bull Demon King",
    "person",
    "Former sworn brother of Wukong who blocks the fan and the road.",
    "The Bull Demon King once pledged brotherhood with Wukong, then grew into a local tyrant. Their fight over Iron Fan is one of the novel's longest set pieces."
);

entity(
    "white-bone-demon",
    "White Bone Demon",
    "person",
    "Skeleton spirit who three times takes human shape to eat Sanzang.",
    "The White Bone Demon is the episode that almost ends the fellowship: Wukong kills her disguises, Sanzang recites the fillet spell and banishes him, and only Guanyin restores the band."
);

entity(
    "revolt-against-heaven",
    "Revolt against Heaven",
    "event",
    "Wukong's war on the Jade Emperor before the five-century imprisonment.",
    "The revolt against Heaven fills the novel's first seven chapters: the Sage's title, the wrecked peach banquet, the failure of the heavenly armies, and the Buddha's wager."
);

entity(
    "eighty-one-tribulations",
    "Eighty-one tribulations",
    "event",
    "Predestined ordeals the pilgrims must suffer to earn the scriptures.",
    "The eighty-one tribulations are the novel's plot engine: demons who want Sanzang's flesh, false monasteries, and divine tests counted so the west may be paid for in hardship."
);

entity(
    "five-elements-mountain",
    "Five Elements Mountain",
    "place",
    "Mountain the Buddha drops as his palm to pin Wukong.",
    "Five Elements Mountain is the prison of five hundred years. Sanzang lifts the talisman and takes the starved sage as his first disciple."
);

entity(
    "nezha",
    "Nezha",
    "person",
    "Lotus warrior-child sent among the heavenly troops against Wukong.",
    "Nezha, son of the Pagoda-Bearer Li Jing, fights Wukong in the revolt with spear and fire-wheels and later appears as a heavenly enforcer on the pilgrimage road."
);

/* ---------- Relationships ---------- */

rel("wu-chengen", "journey-to-the-west-novel", "produced", "Wu Cheng'en is the traditional author of the hundred-chapter novel.", 0.96, 0.93);
rel("journey-to-the-west-novel", "journey-to-the-west", "part_of", "The Ming novel is the canonical telling of the Journey to the West cycle.", 0.99, 0.97);
rel("xuanzang-historical", "tang-sanzang", "inspired", "The historical Xuanzang is the model for Tang Sanzang.", 0.97, 0.95);
rel("xuanzang-historical", "journey-to-the-west-novel", "inspired", "Xuanzang's pilgrimage is the historical seed of the novel.", 0.96, 0.93);

rel("tang-sanzang", "tang-pilgrimage", "leads", "Sanzang is master of the scripture pilgrimage.", 0.99, 0.97);
rel("sun-wukong", "tang-pilgrimage", "member_of", "Wukong is the senior disciple of the pilgrimage.", 0.98, 0.96);
rel("zhu-bajie", "tang-pilgrimage", "member_of", "Bajie is the second disciple of the pilgrimage.", 0.97, 0.94);
rel("sha-wujing", "tang-pilgrimage", "member_of", "Wujing is the third disciple of the pilgrimage.", 0.97, 0.94);
rel("white-dragon-horse", "tang-pilgrimage", "member_of", "The White Dragon Horse is the fifth pilgrim.", 0.96, 0.93);
rel("guanyin", "tang-pilgrimage", "created", "Guanyin assembled the disciples and bound them to Sanzang.", 0.97, 0.95);

rel("emperor-taizong", "tang-sanzang", "supports", "Taizong commissions Sanzang to fetch the scriptures.", 0.96, 0.93);
rel("emperor-taizong", "changan", "located_in", "Taizong rules from Tang Chang'an.", 0.97, 0.94);
rel("tang-sanzang", "changan", "located_in", "Sanzang's quest begins and must end in Chang'an.", 0.95, 0.92);

rel("sun-wukong", "flower-fruit-mountain", "located_in", "Wukong is born and first crowned on Flower–Fruit Mountain.", 0.98, 0.96);
rel("water-curtain-cave", "flower-fruit-mountain", "located_in", "Water-Curtain Cave is the hidden palace of the mountain.", 0.97, 0.95);
rel("sun-wukong", "golden-cudgel", "uses", "Wukong fights with the golden cudgel.", 0.99, 0.97);
rel("sun-wukong", "tightening-fillet", "uses", "The fillet is the pain-band that binds Wukong to Sanzang.", 0.97, 0.95);
rel("tang-sanzang", "tightening-fillet", "uses", "Sanzang recites the spell that tightens the fillet.", 0.97, 0.94);

rel("sun-wukong", "jade-emperor", "opposed_by", "Wukong revolts against the Jade Emperor's court.", 0.97, 0.95);
rel("revolt-against-heaven", "heaven", "occurred_at", "The revolt is fought through the halls of Heaven.", 0.97, 0.94);
rel("sun-wukong", "revolt-against-heaven", "leads", "Wukong leads the war that earns him the Great Sage title and the fall.", 0.98, 0.96);
rel("jade-emperor", "heaven", "leads", "The Jade Emperor sits at the head of Heaven's bureaucracy.", 0.98, 0.96);
rel("peaches-of-immortality", "revolt-against-heaven", "caused", "Theft of the peaches helps turn Wukong's service into open revolt.", 0.94, 0.9);
rel("buddha", "sun-wukong", "opposed_by", "The Buddha wins the wager and pins Wukong under the mountain.", 0.97, 0.95);
rel("five-elements-mountain", "buddha", "created", "The mountain is the Buddha's palm made stone.", 0.96, 0.93);
rel("nezha", "revolt-against-heaven", "involved", "Nezha is sent among the heavenly champions against Wukong.", 0.93, 0.89);

rel("eighty-one-tribulations", "tang-pilgrimage", "involved", "The tribulations are the ordeals counted against the pilgrims.", 0.97, 0.94);
rel("white-bone-demon", "tang-sanzang", "opposed_by", "The White Bone Demon hunts Sanzang's flesh in three disguises.", 0.95, 0.92);
rel("princess-iron-fan", "flaming-mountains", "uses", "Only Iron Fan's palm-leaf fan can quench the Flaming Mountains.", 0.96, 0.93);
rel("bull-demon-king", "princess-iron-fan", "connected_to", "The Bull Demon King is Iron Fan's husband and Wukong's fallen brother.", 0.95, 0.91);
rel("flaming-mountains", "eighty-one-tribulations", "part_of", "Crossing the Flaming Mountains is one of the numbered ordeals.", 0.94, 0.9);
rel("thunderclap-monastery", "western-heaven", "located_in", "Thunderclap Monastery is the scripture-house of the Western Heaven.", 0.96, 0.93);
rel("buddha", "thunderclap-monastery", "located_in", "The Buddha grants the texts at Thunderclap Monastery.", 0.97, 0.94);
rel("tang-pilgrimage", "thunderclap-monastery", "located_in", "The pilgrims' road ends at Thunderclap Monastery.", 0.95, 0.92);

module.exports = { entities, relationships };
