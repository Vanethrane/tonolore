/*
 * My Little Pony subject data — Friendship Is Magic, the Mane Six, and Equestria.
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

/* ---------- Root / creators / works ---------- */

entity(
    "my-little-pony",
    "My Little Pony",
    "topic",
    "Hasbro ponies from G1 toys through Friendship Is Magic, Equestria, and the Mane Six.",
    "My Little Pony is Hasbro's horse-toy franchise that Bonnie Zacherle launched in the 1980s and Lauren Faust remade as Friendship Is Magic: Twilight Sparkle, the Mane Six, Princess Celestia, and a map of Equestria that the later films still inherit.",
    "documented"
);

entity(
    "hasbro",
    "Hasbro",
    "organization",
    "Toy company that owns My Little Pony and commissioned Friendship Is Magic.",
    "Hasbro holds My Little Pony from the original G1 ponies through Friendship Is Magic, Equestria Girls, and A New Generation, pairing the toy line with television that sold cutie marks and playsets.",
    "documented"
);

entity(
    "bonnie-zacherle",
    "Bonnie Zacherle",
    "person",
    "Illustrator who created the original My Little Pony toy look.",
    "Bonnie Zacherle designed the first-generation My Little Pony figures for Hasbro, the pastel horses with symbols on their flanks that later shows would call cutie marks.",
    "documented"
);

entity(
    "lauren-faust",
    "Lauren Faust",
    "person",
    "Developer who remade the brand as Friendship Is Magic and the Mane Six.",
    "Lauren Faust developed My Little Pony: Friendship Is Magic for Hasbro, writing Twilight Sparkle, Rainbow Dash, Pinkie Pie, and the rest of the Mane Six as adventure-comedy leads instead of only toy mascots.",
    "documented"
);

entity(
    "g1-my-little-pony",
    "My Little Pony (G1)",
    "work",
    "1980s toy line and cartoons that introduced the original pastel ponies.",
    "Generation 1 My Little Pony is Bonnie Zacherle's toy era: brushable manes, symbols on the flanks, and Saturday-morning specials that Hasbro later treated as the first age of the franchise.",
    "documented"
);

entity(
    "friendship-is-magic",
    "My Little Pony: Friendship Is Magic",
    "work",
    "2010 series that put Twilight Sparkle and the Mane Six in Equestria.",
    "Friendship Is Magic is Lauren Faust's series: Twilight Sparkle studies friendship in Ponyville, Princess Celestia rules from Canterlot, and the Mane Six wield the Elements of Harmony for nine seasons."
);

entity(
    "equestria-girls",
    "My Little Pony: Equestria Girls",
    "work",
    "Spin-off films that send the Mane Six through a mirror as human teens.",
    "Equestria Girls is the high-school spin-off in which Twilight, Sunset Shimmer, and the rest of the Mane Six cross a magic mirror into a human world that still runs on friendship magic."
);

entity(
    "a-new-generation",
    "My Little Pony: A New Generation",
    "work",
    "2021 film that opened Generation 5 after Friendship Is Magic.",
    "A New Generation is the CG film that follows Friendship Is Magic, sending a new earth pony into an Equestria that has forgotten how unicorns, pegasi, and earth ponies once lived together."
);

/* ---------- Places ---------- */

entity(
    "equestria",
    "Equestria",
    "place",
    "Pony nation of Canterlot, Ponyville, and the Crystal Empire.",
    "Equestria is the kingdom Princess Celestia and Princess Luna rule: Ponyville in the countryside, Canterlot on the mountain, and later the Crystal Empire to the north, the map Friendship Is Magic never leaves for long."
);

entity(
    "ponyville",
    "Ponyville",
    "place",
    "Market town where Twilight Sparkle learns friendship with the Mane Six.",
    "Ponyville is the earth-pony town of Sugarcube Corner, Sweet Apple Acres, and Carousel Boutique, the place Celestia sends Twilight Sparkle so the Mane Six can form."
);

entity(
    "canterlot",
    "Canterlot",
    "place",
    "Mountain capital and seat of Princess Celestia.",
    "Canterlot is Equestria's white-tower capital, home of the royal sisters, the Grand Galloping Gala, and the school Twilight leaves when she moves to Ponyville."
);

entity(
    "crystal-empire",
    "Crystal Empire",
    "place",
    "Northern crystal city Princess Cadance and Shining Armor restore.",
    "The Crystal Empire is the glittering northern city that returns from a curse, ruled by Princess Cadance and Shining Armor, and later a second home for Twilight's family on the Equestria map."
);

/* ---------- Mane Six and court ---------- */

entity(
    "mane-six",
    "Mane Six",
    "organization",
    "Twilight Sparkle, Rainbow Dash, Pinkie Pie, Rarity, Fluttershy, and Applejack.",
    "The Mane Six are the six ponies at the center of Friendship Is Magic: Twilight Sparkle and her five Ponyville friends, bearers of the Elements of Harmony and the show's standing party."
);

entity(
    "twilight-sparkle",
    "Twilight Sparkle",
    "person",
    "Unicorn, then alicorn, student of Celestia and leader of the Mane Six.",
    "Twilight Sparkle is the bookish unicorn Celestia sends to Ponyville, the leader of the Mane Six, and later a princess whose library and castle become the friendship school of Equestria."
);

entity(
    "rainbow-dash",
    "Rainbow Dash",
    "person",
    "Pegasos athlete who performs the sonic rainboom and represents loyalty.",
    "Rainbow Dash is the weather-team pegasus of Ponyville, fastest flyer of the Mane Six, bearer of Loyalty, and the pony whose rainboom first tied the six together."
);

entity(
    "pinkie-pie",
    "Pinkie Pie",
    "person",
    "Earth-pony party planner of Sugarcube Corner and bearer of Laughter.",
    "Pinkie Pie is the pink earth pony who throws Ponyville's parties, breaks the fourth wall, and holds the Element of Laughter among the Mane Six."
);

entity(
    "rarity",
    "Rarity",
    "person",
    "Unicorn couturier of Carousel Boutique and bearer of Generosity.",
    "Rarity is the fashion-unicorn of Ponyville whose Carousel Boutique, gem-finding magic, and Element of Generosity make her the Mane Six's designer and occasional dramatist."
);

entity(
    "fluttershy",
    "Fluttershy",
    "person",
    "Soft-spoken pegasus who speaks to animals and bears Kindness.",
    "Fluttershy is the pegasus who lives in a lakeside cottage, stares down dragons when she must, and holds the Element of Kindness in the Mane Six."
);

entity(
    "applejack",
    "Applejack",
    "person",
    "Earth-pony farmer of Sweet Apple Acres and bearer of Honesty.",
    "Applejack is the apple-farming earth pony of the Apple family, the Mane Six's straight talker, and the bearer of Honesty who keeps Twilight's plans on the ground."
);

entity(
    "spike",
    "Spike",
    "person",
    "Baby dragon who is Twilight's assistant and sends letters to Celestia.",
    "Spike is the dragon who hatches as Twilight's number-one assistant, breathes the scroll-mail that reaches Princess Celestia, and lives with the Mane Six in Ponyville."
);

entity(
    "princess-celestia",
    "Princess Celestia",
    "person",
    "Sun-raising alicorn who rules Equestria and teaches Twilight Sparkle.",
    "Princess Celestia raises the sun, shares the throne with Princess Luna, and sends Twilight Sparkle to Ponyville so friendship — not only books — will finish her student's education."
);

entity(
    "princess-luna",
    "Princess Luna",
    "person",
    "Moon-raising sister of Celestia who was once Nightmare Moon.",
    "Princess Luna raises the moon, returns from a thousand-year exile as Nightmare Moon, and rejoins Celestia on the Canterlot throne after the Mane Six use the Elements of Harmony."
);

entity(
    "nightmare-moon",
    "Nightmare Moon",
    "person",
    "Armored night-mare form of Princess Luna who tries to bring eternal night.",
    "Nightmare Moon is Luna's bitter, armored self from the two-part premiere, the tyrant the Mane Six defeat with the Elements of Harmony so Luna can come home to Canterlot."
);

entity(
    "princess-cadance",
    "Princess Cadance",
    "person",
    "Alicorn of love who rules the Crystal Empire with Shining Armor.",
    "Princess Cadance is Twilight Sparkle's foal-sitter turned princess, wife of Shining Armor, and later sovereign of the Crystal Empire on Equestria's northern edge."
);

entity(
    "starlight-glimmer",
    "Starlight Glimmer",
    "person",
    "Unicorn reformer who becomes Twilight's later student.",
    "Starlight Glimmer begins as a cutie-mark egalitarian villain, then becomes Twilight Sparkle's pupil and a later friend of the Mane Six after Friendship Is Magic's mid-run turn."
);

entity(
    "sunset-shimmer",
    "Sunset Shimmer",
    "person",
    "Celestia's former student who becomes the lead of Equestria Girls.",
    "Sunset Shimmer is the unicorn who flees through the mirror, first as a rival to Twilight, then as the redeemed lead of the Equestria Girls films."
);

entity(
    "discord",
    "Discord",
    "person",
    "Draconequus of chaos who later befriends Fluttershy.",
    "Discord is the spirit of chaos the Mane Six first stone, then reform: a mismatched draconequus whose friendship with Fluttershy keeps him from remaking Equestria as a gag."
);

/* ---------- Objects / concepts ---------- */

entity(
    "elements-of-harmony",
    "Elements of Harmony",
    "object",
    "Six jewels — and later Twilight's own magic — that the Mane Six wield.",
    "The Elements of Harmony are the artifacts of Honesty, Kindness, Laughter, Generosity, Loyalty, and Magic that the Mane Six use on Nightmare Moon, Discord, and later threats to Equestria."
);

entity(
    "cutie-mark",
    "Cutie mark",
    "concept",
    "Flank symbol that appears when a pony finds a talent.",
    "A cutie mark is the image that appears on a pony's flank when they discover a purpose — Twilight's spark, Rainbow's lightning cloud — the brand idea Bonnie Zacherle's G1 symbols became in Friendship Is Magic."
);

entity(
    "friendship-magic",
    "Friendship magic",
    "concept",
    "The show's rule that bonds between ponies are a working kind of spell.",
    "Friendship magic is the premise of Friendship Is Magic: that the Mane Six's loyalty, honesty, and the rest can be cast as light, rainbows, and a school Twilight later founds in Ponyville."
);

/* ---------- Relationships ---------- */

rel("hasbro", "my-little-pony", "created", "Hasbro owns My Little Pony and commissions its toy-and-TV eras.", 0.99, 0.98);
rel("bonnie-zacherle", "g1-my-little-pony", "created", "Bonnie Zacherle designed the original My Little Pony toys.", 0.98, 0.96);
rel("lauren-faust", "friendship-is-magic", "created", "Lauren Faust developed Friendship Is Magic and the Mane Six.", 0.99, 0.98);
rel("g1-my-little-pony", "friendship-is-magic", "preceded", "The G1 toy era came before Friendship Is Magic remade the brand.", 0.96, 0.93);
rel("friendship-is-magic", "a-new-generation", "preceded", "Friendship Is Magic is the series A New Generation follows.", 0.95, 0.92);
rel("friendship-is-magic", "my-little-pony", "part_of", "Friendship Is Magic is the flagship modern series of My Little Pony.", 0.98, 0.96);
rel("equestria-girls", "friendship-is-magic", "adapted_from", "Equestria Girls spins the Mane Six into a human-world film series.", 0.94, 0.9);
rel("g1-my-little-pony", "my-little-pony", "part_of", "Generation 1 is the original toy-and-cartoon age of My Little Pony.", 0.96, 0.93);
rel("a-new-generation", "my-little-pony", "part_of", "A New Generation opens the Generation 5 chapter of My Little Pony.", 0.94, 0.9);

rel("equestria", "friendship-is-magic", "located_in", "Friendship Is Magic is set in Equestria.", 0.97, 0.95);
rel("ponyville", "equestria", "located_in", "Ponyville is a market town in Equestria.", 0.97, 0.94);
rel("canterlot", "equestria", "located_in", "Canterlot is the mountain capital of Equestria.", 0.97, 0.94);
rel("crystal-empire", "equestria", "located_in", "The Crystal Empire sits on Equestria's northern map.", 0.95, 0.92);

rel("mane-six", "friendship-is-magic", "part_of", "The Mane Six are the standing heroes of Friendship Is Magic.", 0.98, 0.97);
rel("twilight-sparkle", "mane-six", "leads", "Twilight Sparkle leads the Mane Six as Celestia's student and later a princess.", 0.98, 0.96);
rel("rainbow-dash", "mane-six", "member_of", "Rainbow Dash is the loyalty-bearing pegasus of the Mane Six.", 0.97, 0.95);
rel("pinkie-pie", "mane-six", "member_of", "Pinkie Pie is the laughter-bearing earth pony of the Mane Six.", 0.97, 0.95);
rel("rarity", "mane-six", "member_of", "Rarity is the generosity-bearing unicorn of the Mane Six.", 0.97, 0.95);
rel("fluttershy", "mane-six", "member_of", "Fluttershy is the kindness-bearing pegasus of the Mane Six.", 0.97, 0.95);
rel("applejack", "mane-six", "member_of", "Applejack is the honesty-bearing earth pony of the Mane Six.", 0.97, 0.95);

rel("twilight-sparkle", "friendship-is-magic", "involved", "Twilight Sparkle is the viewpoint pony of Friendship Is Magic.", 0.98, 0.96);
rel("twilight-sparkle", "ponyville", "located_in", "Twilight Sparkle moves to Ponyville to study friendship.", 0.96, 0.93);
rel("mane-six", "ponyville", "located_in", "The Mane Six live and work in Ponyville.", 0.96, 0.93);
rel("spike", "twilight-sparkle", "supports", "Spike is Twilight Sparkle's assistant and letter-sending dragon.", 0.96, 0.93);
rel("spike", "mane-six", "connected_to", "Spike lives with Twilight and the Mane Six in Ponyville.", 0.94, 0.9);

rel("princess-celestia", "equestria", "leads", "Princess Celestia rules Equestria and raises the sun.", 0.97, 0.95);
rel("princess-celestia", "canterlot", "located_in", "Princess Celestia holds court in Canterlot.", 0.96, 0.93);
rel("princess-luna", "equestria", "leads", "Princess Luna shares Equestria's throne and raises the moon.", 0.95, 0.92);
rel("princess-celestia", "twilight-sparkle", "connected_to", "Celestia is Twilight Sparkle's teacher and later fellow princess.", 0.96, 0.93);
rel("nightmare-moon", "princess-luna", "adapted_from", "Nightmare Moon is Princess Luna's armored exile-self.", 0.96, 0.93);
rel("mane-six", "nightmare-moon", "opposed_by", "The Mane Six use the Elements of Harmony against Nightmare Moon.", 0.96, 0.93);
rel("mane-six", "elements-of-harmony", "uses", "The Mane Six wield the Elements of Harmony.", 0.97, 0.95);
rel("friendship-is-magic", "friendship-magic", "uses", "Friendship Is Magic treats friendship as a working kind of spell.", 0.95, 0.92);
rel("cutie-mark", "my-little-pony", "part_of", "Cutie marks are the talent-symbols of the My Little Pony world.", 0.94, 0.9);
rel("g1-my-little-pony", "cutie-mark", "inspired", "G1 flank symbols became the cutie marks of Friendship Is Magic.", 0.93, 0.89);

rel("princess-cadance", "crystal-empire", "leads", "Princess Cadance rules the restored Crystal Empire.", 0.95, 0.92);
rel("starlight-glimmer", "twilight-sparkle", "connected_to", "Starlight Glimmer becomes Twilight Sparkle's later student.", 0.94, 0.9);
rel("sunset-shimmer", "equestria-girls", "involved", "Sunset Shimmer is the redeemed lead of the Equestria Girls films.", 0.95, 0.91);
rel("sunset-shimmer", "princess-celestia", "connected_to", "Sunset Shimmer was Celestia's student before fleeing through the mirror.", 0.93, 0.89);
rel("discord", "mane-six", "opposed_by", "The Mane Six first imprison Discord, then befriend him.", 0.94, 0.9);
rel("discord", "fluttershy", "connected_to", "Fluttershy's friendship is what keeps Discord from remaking Equestria.", 0.94, 0.9);
rel("lauren-faust", "mane-six", "created", "Lauren Faust created the Mane Six as adventure-comedy leads.", 0.97, 0.95);

module.exports = { entities, relationships };
