/*
 * The Lord of the Rings / Middle-earth subject data.
 */

const entities = [];
const relationships = [];

function entity(slug, name, type, short_description, description, evidence = "fiction", extras = {}) {
    entities.push({
        slug, name, type, evidence, short_description, description,
        aliases: extras.aliases || [],
        parentSlug: extras.parentSlug || undefined
    });
}

function rel(from, to, relationship, title, strength = 0.95, discoveryScore = 0.9) {
    relationships.push([from, to, relationship, title, strength, discoveryScore]);
}

entity("lord-of-the-rings", "The Lord of the Rings", "work",
    "Tolkien's epic of the One Ring and the War of the Ring.",
    "The Lord of the Rings is J.R.R. Tolkien's epic following Frodo Baggins, the Fellowship, and the war to destroy the One Ring forged by Sauron.");

entity("jrr-tolkien", "J.R.R. Tolkien", "person",
    "Author of The Hobbit and The Lord of the Rings.",
    "J.R.R. Tolkien created Middle-earth, writing The Hobbit, The Lord of the Rings, and the wider legendarium later collected in The Silmarillion.");

entity("the-hobbit", "The Hobbit", "work",
    "Prelude adventure of Bilbo Baggins and Smaug.",
    "The Hobbit follows Bilbo Baggins on a quest with Thorin Oakenshield's company to reclaim Erebor from Smaug, during which Bilbo finds the One Ring.");

entity("the-silmarillion", "The Silmarillion", "work",
    "Mythic history of the Elder Days.",
    "The Silmarillion recounts the creation of Arda, the Silmarils, and the ancient wars that precede The Lord of the Rings.");

entity("peter-jackson", "Peter Jackson", "person",
    "Director of the LOTR and Hobbit film trilogies.",
    "Peter Jackson adapted The Lord of the Rings and The Hobbit into major film trilogies that brought Middle-earth to a new global audience.");

entity("frodo-baggins", "Frodo Baggins", "person",
    "Hobbit Ring-bearer of the Quest.",
    "Frodo Baggins inherits the One Ring from Bilbo and carries it toward Mount Doom with Samwise Gamgee.");

entity("samwise-gamgee", "Samwise Gamgee", "person",
    "Frodo's gardener and steadfast companion.",
    "Samwise Gamgee stays with Frodo Baggins through Mordor and is essential to the destruction of the One Ring.");

entity("gandalf", "Gandalf", "person",
    "Wizard of the Istari; guide of the Fellowship.",
    "Gandalf the Grey, later the White, guides the Free Peoples against Sauron and leads the Fellowship from Rivendell.");

entity("aragorn", "Aragorn", "person",
    "Ranger heir of Isildur and king of Gondor.",
    "Aragorn, son of Arathorn, protects the hobbits, fights in the War of the Ring, and reclaims the throne of Gondor.");

entity("legolas", "Legolas", "person",
    "Elven prince of Mirkwood in the Fellowship.",
    "Legolas joins the Fellowship of the Ring and fights beside Gimli and Aragorn through the War of the Ring.");

entity("gimli", "Gimli", "person",
    "Dwarf warrior of the Fellowship.",
    "Gimli son of Glóin represents the Dwarves in the Fellowship and forms an unlikely friendship with Legolas.");

entity("boromir", "Boromir", "person",
    "Son of Denethor; tempted by the Ring.",
    "Boromir of Gondor joins the Fellowship, struggles with the One Ring's lure, and dies defending Merry and Pippin.");

entity("merry-brandybuck", "Merry Brandybuck", "person",
    "Hobbit of the Fellowship.",
    "Meriadoc Brandybuck helps defeat the Witch-king with Éowyn and remains loyal through the War of the Ring.");

entity("pippin-took", "Pippin Took", "person",
    "Hobbit of the Fellowship and Guard of the Citadel.",
    "Peregrin Took looks into the palantír, serves Gondor, and stands with Merry in the final war.");

entity("gollum", "Gollum", "person",
    "Former Ring-bearer also called Sméagol.",
    "Gollum is consumed by the One Ring for centuries and later guides Frodo and Sam into Mordor.");

entity("sauron", "Sauron", "person",
    "Dark Lord and forger of the One Ring.",
    "Sauron forges the One Ring to dominate Middle-earth and wages the War of the Ring from Mordor.");

entity("saruman", "Saruman", "person",
    "Fallen White Wizard of Isengard.",
    "Saruman the White betrays the Istari, breeds Uruk-hai at Isengard, and wars on Rohan.");

entity("galadriel", "Galadriel", "person",
    "Lady of Lothlórien.",
    "Galadriel rules Lothlórien with Celeborn, tests the Fellowship, and refuses the One Ring when Frodo offers it.");

entity("elrond", "Elrond", "person",
    "Lord of Rivendell who hosts the Council.",
    "Elrond shelters Frodo in Rivendell and convenes the Council that forms the Fellowship of the Ring.");

entity("bilbo-baggins", "Bilbo Baggins", "person",
    "Hobbit who finds the Ring in The Hobbit.",
    "Bilbo Baggins finds the One Ring beneath the Misty Mountains and later leaves it to Frodo.");

entity("thorin-oakenshield", "Thorin Oakenshield", "person",
    "Dwarf-king reclaiming Erebor.",
    "Thorin Oakenshield leads the quest in The Hobbit to reclaim the Lonely Mountain from Smaug.");

entity("smaug", "Smaug", "person",
    "Dragon of Erebor.",
    "Smaug the Golden seizes Erebor and is later slain after Bilbo's intrusion into the Lonely Mountain.");

entity("eowyn", "Éowyn", "person",
    "Shieldmaiden of Rohan who fells the Witch-king.",
    "Éowyn defies prophecy with Merry to defeat the Witch-king of Angmar on the Pelennor Fields.");

entity("one-ring", "The One Ring", "object",
    "Master Ring forged by Sauron.",
    "The One Ring grants power and corruption, controlling the Rings of Power and driving the entire War of the Ring.");

entity("fellowship-of-the-ring", "Fellowship of the Ring", "organization",
    "Nine walkers set against Sauron.",
    "The Fellowship of the Ring is formed in Rivendell to help Frodo destroy the One Ring.");

entity("mordor", "Mordor", "place",
    "Black land of Sauron and Mount Doom.",
    "Mordor is Sauron's realm, anchored by Barad-dûr and Mount Doom where the One Ring can be unmade.");

entity("mount-doom", "Mount Doom", "place",
    "Volcano where the Ring was forged and must be destroyed.",
    "Mount Doom, Orodruin, is the only fire that can destroy the One Ring.");

entity("rivendell", "Rivendell", "place",
    "Elven refuge of Elrond.",
    "Rivendell shelters Bilbo and Frodo and hosts the Council of Elrond.");

entity("lothlorien", "Lothlórien", "place",
    "Golden wood ruled by Galadriel.",
    "Lothlórien offers the Fellowship rest, gifts, and Galadriel's mirror.");

entity("rohan", "Rohan", "place",
    "Horse-lords' kingdom of the Mark.",
    "Rohan under Théoden rides to war against Saruman and later to Gondor's aid.");

entity("gondor", "Gondor", "place",
    "Realm of Minas Tirith and the throne Aragorn claims.",
    "Gondor stands as the chief kingdom of Men resisting Mordor in the War of the Ring.");

entity("shire", "The Shire", "place",
    "Homeland of the Hobbits.",
    "The Shire is the pastoral home of Bilbo, Frodo, Sam, Merry, and Pippin.");

entity("isengard", "Isengard", "place",
    "Saruman's fortress of Orthanc.",
    "Isengard becomes an industrial war machine under Saruman until the Ents flood it.");

entity("erebor", "Erebor", "place",
    "Lonely Mountain of the Dwarves.",
    "Erebor is the Dwarven kingdom seized by Smaug and reclaimed in The Hobbit.");

entity("war-of-the-ring", "War of the Ring", "event",
    "Final war against Sauron.",
    "The War of the Ring encompasses Helm's Deep, Pelennor Fields, and the march on the Black Gate while Frodo enters Mordor.");

entity("council-of-elrond", "Council of Elrond", "event",
    "Meeting that forms the Fellowship.",
    "The Council of Elrond in Rivendell decides that the One Ring must be destroyed and names the Fellowship.");

rel("jrr-tolkien", "lord-of-the-rings", "created", "Tolkien wrote The Lord of the Rings.", 0.99, 0.99);
rel("jrr-tolkien", "the-hobbit", "created", "Tolkien wrote The Hobbit.", 0.99, 0.98);
rel("jrr-tolkien", "the-silmarillion", "created", "Tolkien's legendarium fills The Silmarillion.", 0.98, 0.95);
rel("peter-jackson", "lord-of-the-rings", "adapted_into", "Jackson adapted LOTR into films.", 0.97, 0.94);
rel("the-hobbit", "lord-of-the-rings", "preceded", "The Hobbit precedes the War of the Ring.", 0.98, 0.95);

rel("frodo-baggins", "one-ring", "uses", "Frodo bears the One Ring.", 0.99, 0.99);
rel("frodo-baggins", "samwise-gamgee", "connected_to", "Sam never leaves Frodo.", 0.99, 0.99);
rel("frodo-baggins", "fellowship-of-the-ring", "member_of", "Frodo is the Ring-bearer of the Fellowship.", 0.99, 0.97);
rel("frodo-baggins", "shire", "located_in", "Frodo is a Hobbit of the Shire.", 0.98, 0.94);
rel("bilbo-baggins", "one-ring", "found", "Bilbo finds the Ring under the mountains.", 0.99, 0.97);
rel("bilbo-baggins", "frodo-baggins", "connected_to", "Bilbo leaves the Ring to Frodo.", 0.99, 0.97);
rel("gollum", "one-ring", "seeks", "Gollum is enslaved by desire for the Ring.", 0.99, 0.98);
rel("gollum", "frodo-baggins", "connected_to", "Gollum guides and betrays Frodo.", 0.98, 0.97);

rel("sauron", "one-ring", "created", "Sauron forged the One Ring.", 0.99, 0.99);
rel("sauron", "mordor", "leads", "Sauron rules from Mordor.", 0.99, 0.98);
rel("one-ring", "mount-doom", "connected_to", "Only Mount Doom can unmake the Ring.", 0.99, 0.98);
rel("gandalf", "fellowship-of-the-ring", "leads", "Gandalf leads the Fellowship.", 0.99, 0.97);
rel("aragorn", "fellowship-of-the-ring", "member_of", "Aragorn is a Fellowship member.", 0.99, 0.96);
rel("legolas", "fellowship-of-the-ring", "member_of", "Legolas is a Fellowship member.", 0.98, 0.94);
rel("gimli", "fellowship-of-the-ring", "member_of", "Gimli is a Fellowship member.", 0.98, 0.94);
rel("boromir", "fellowship-of-the-ring", "member_of", "Boromir is a Fellowship member.", 0.98, 0.94);
rel("merry-brandybuck", "fellowship-of-the-ring", "member_of", "Merry is a Fellowship member.", 0.98, 0.93);
rel("pippin-took", "fellowship-of-the-ring", "member_of", "Pippin is a Fellowship member.", 0.98, 0.93);

rel("saruman", "isengard", "leads", "Saruman holds Isengard.", 0.99, 0.96);
rel("saruman", "sauron", "connected_to", "Saruman becomes Sauron's rival-ally.", 0.96, 0.94);
rel("galadriel", "lothlorien", "leads", "Galadriel rules Lothlórien.", 0.99, 0.95);
rel("elrond", "rivendell", "leads", "Elrond rules Rivendell.", 0.99, 0.95);
rel("elrond", "council-of-elrond", "involved", "Elrond hosts the Council.", 0.99, 0.96);
rel("council-of-elrond", "fellowship-of-the-ring", "caused", "The Council forms the Fellowship.", 0.99, 0.97);
rel("aragorn", "gondor", "leads", "Aragorn becomes King of Gondor.", 0.98, 0.96);
rel("eowyn", "rohan", "member_of", "Éowyn is of Rohan's royal house.", 0.98, 0.94);
rel("eowyn", "merry-brandybuck", "connected_to", "Éowyn and Merry fell the Witch-king together.", 0.97, 0.95);

rel("thorin-oakenshield", "erebor", "seeks", "Thorin seeks to reclaim Erebor.", 0.99, 0.96);
rel("smaug", "erebor", "located_in", "Smaug occupies Erebor.", 0.99, 0.96);
rel("thorin-oakenshield", "bilbo-baggins", "connected_to", "Bilbo joins Thorin's company.", 0.98, 0.95);
rel("war-of-the-ring", "lord-of-the-rings", "part_of", "The War of the Ring is the saga's climax.", 0.99, 0.97);
rel("war-of-the-ring", "sauron", "opposed_by", "The Free Peoples war against Sauron.", 0.99, 0.97);
rel("mordor", "mount-doom", "contains", "Mount Doom stands in Mordor.", 0.99, 0.96);
rel("lord-of-the-rings", "one-ring", "connected_to", "The saga turns on the One Ring.", 0.99, 0.99);
rel("lord-of-the-rings", "frodo-baggins", "connected_to", "Frodo is the story's Ring-bearer.", 0.99, 0.98);

module.exports = { entities, relationships };
