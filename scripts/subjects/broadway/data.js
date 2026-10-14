/*
 * Broadway subject data — the theatre district, houses, hits, and the institutions around Times Square.
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

/* ---------- Root / district / places ---------- */

entity(
    "broadway",
    "Broadway",
    "topic",
    "New York's commercial theatre district: Times Square houses, Tonys, Equity, and the long-run hits.",
    "Broadway is the Midtown theatre industry around Times Square and 42nd Street — Shubert, Nederlander, and Jujamcyn houses, Actors' Equity contracts, the Tony Awards, and a canon of musicals from A Chorus Line and The Phantom of the Opera to Hamilton."
);

entity(
    "broadway-theatre-district",
    "Broadway theatre district",
    "place",
    "Cluster of large commercial houses around Times Square in Midtown Manhattan.",
    "The Broadway theatre district is the zoned group of theatres, mostly between 41st and 54th Streets near Broadway and Seventh Avenue, that the League and the Tonys treat as the commercial first class of American theatre."
);

entity(
    "times-square",
    "Times Square",
    "place",
    "Bowtie of Broadway and Seventh Avenue that fronts the theatre district.",
    "Times Square is the crossing of Broadway and Seventh that became the glowing front door of the theatre district, TKTS booth, and tourist crowd that feeds the nearby houses."
);

entity(
    "forty-second-street",
    "42nd Street",
    "place",
    "Cross-street of grindhouses, then restoration, that still names a Broadway musical.",
    "42nd Street is the Midtown crosstown that ran from dime museums and movie grinders to a restored row of Broadway houses, and that gave its name to the 1933 film and the later stage musical."
);

entity(
    "the-great-white-way",
    "the Great White Way",
    "concept",
    "Nickname for the electrically lit stretch of Broadway through the theatre district.",
    "The Great White Way is the old newspaper name for Broadway's white electric signs, still used for the lighted canyon of marquees from Times Square through the Forties."
);

entity(
    "tkts",
    "TKTS",
    "place",
    "Discount-ticket booth under the red glass steps in Duffy Square.",
    "TKTS is the Theatre Development Fund booth in Times Square that sells same-day seats, the red-step landmark that funnels walk-up audiences into Broadway houses."
);

/* ---------- Organizations ---------- */

entity(
    "shubert-organization",
    "The Shubert Organization",
    "organization",
    "Largest Broadway landlord, still named for the Shubert brothers.",
    "The Shubert Organization owns and operates more Broadway theatres than anyone else, including the Shubert Theatre, and remains the landlord half of many long-run deals."
);

entity(
    "shubert-theatre",
    "Shubert Theatre",
    "place",
    "Shubert house on 44th Street, long home of A Chorus Line and later hits.",
    "The Shubert Theatre is the flagship Shubert house on West 44th Street, the stage that housed A Chorus Line's original run and still sits at the geographic center of Shubert Alley."
);

entity(
    "actors-equity",
    "Actors' Equity Association",
    "organization",
    "Union that sets Broadway production contracts for actors and stage managers.",
    "Actors' Equity Association is the labor union whose Production Contract governs Broadway performers and stage managers, the rulebook behind every Tony-eligible company."
);

entity(
    "broadway-league",
    "The Broadway League",
    "organization",
    "Trade group of producers and presenters that co-presents the Tony Awards.",
    "The Broadway League is the producers' and theatre-owners' association that tracks grosses, runs audience research, and co-presents the Tony Awards with the American Theatre Wing."
);

entity(
    "jujamcyn",
    "Jujamcyn Theaters",
    "organization",
    "Smaller Broadway landlord of houses such as the St. James and Walter Kerr.",
    "Jujamcyn Theaters is the third historic Broadway landlord beside Shubert and Nederlander, a smaller chain whose houses have held The Book of Mormon, A Chorus Line transfers, and other long runs."
);

entity(
    "nederlander-organization",
    "The Nederlander Organization",
    "organization",
    "Family-run Broadway and touring landlord opposite the Shuberts.",
    "The Nederlander Organization is the other large family landlord of Broadway houses, including the Gershwin (Wicked) and the main touring circuit that carries Broadway titles on the road."
);

entity(
    "tony-awards",
    "Tony Awards",
    "event",
    "Annual prizes for Broadway plays and musicals, co-presented by the League and the Wing.",
    "The Antoinette Perry Awards — the Tonys — are the June ceremony that crowns Broadway's best play, musical, and performances, jointly presented by the Broadway League and the American Theatre Wing."
);

/* ---------- Houses ---------- */

entity(
    "richard-rodgers-theatre",
    "Richard Rodgers Theatre",
    "place",
    "Nederlander house on 46th Street that has hosted Hamilton's Broadway run.",
    "The Richard Rodgers Theatre is the 46th Street house, now a Nederlander property, where Hamilton opened in 2015 and became the decade's defining Broadway booking."
);

entity(
    "majestic-theatre",
    "Majestic Theatre",
    "place",
    "Shubert house that held The Phantom of the Opera for decades.",
    "The Majestic Theatre on 44th Street is the Shubert house whose chandelier and underground lair housed The Phantom of the Opera from 1988 through the end of its original Broadway run."
);

entity(
    "winter-garden-theatre",
    "Winter Garden Theatre",
    "place",
    "Shubert house on 50th Street, long home of Cats and later School of Rock and more.",
    "The Winter Garden Theatre is the large Shubert house on Broadway at 50th Street that hosted Cats for eighteen years and remains a flagship musical barn."
);

entity(
    "gershwin-theatre",
    "Gershwin Theatre",
    "place",
    "Nederlander barn on 51st Street that has housed Wicked since 2003.",
    "The Gershwin Theatre is the largest Broadway house, a Nederlander theatre on 51st Street that has been Wicked's New York home since the musical opened."
);

/* ---------- Works (siblings that link to the district) ---------- */

entity(
    "hamilton",
    "Hamilton",
    "work",
    "Lin-Manuel Miranda musical that became Broadway's defining 2010s hit at the Richard Rodgers.",
    "Hamilton is the hip-hop Founders musical that moved from the Public Theater to the Richard Rodgers Theatre in 2015, swept the Tonys, and became the show other Broadway hits are still measured against."
);

entity(
    "phantom-of-the-opera",
    "The Phantom of the Opera",
    "work",
    "Andrew Lloyd Webber musical that ran at the Majestic longer than any other Broadway show.",
    "The Phantom of the Opera is the chandelier musical that opened at the Majestic in 1988 and became Broadway's longest-running show, the late-century monument the district still points to."
);

entity(
    "a-chorus-line",
    "A Chorus Line",
    "work",
    "Michael Bennett workshop musical about the gypsies on the line, a long Shubert tenant.",
    "A Chorus Line is the 1975 musical built from dancers' taped stories, staged by Michael Bennett, that opened at the Shubert and held the longest-run record until Cats."
);

entity(
    "forty-second-street-musical",
    "42nd Street (musical)",
    "work",
    "Gower Champion / David Merrick backstage musical named for the street itself.",
    "42nd Street is the 1980 Merrick musical of kids-from-the-chorus lore, named for the Midtown street, that opened as Champion died and became a Tony-winning valentine to the district."
);

entity(
    "wicked",
    "Wicked",
    "work",
    "Schwartz and Holzman Oz prequel that has held the Gershwin since 2003.",
    "Wicked is the musical about Elphaba and Glinda that opened at the Gershwin Theatre in 2003 and became the twenty-first century's other immovable Broadway booking beside Hamilton and The Lion King."
);

entity(
    "the-lion-king",
    "The Lion King",
    "work",
    "Julie Taymor Disney musical that turned puppet-mask staging into a Times Square fixture.",
    "The Lion King is the 1997 Julie Taymor staging of the Disney film, a puppet-and-mask spectacle that settled at the New Amsterdam and later the Minskoff as a permanent Times Square export."
);

entity(
    "chicago-musical",
    "Chicago",
    "work",
    "Kander and Ebb murder-trial musical whose revival became a long Broadway tenant.",
    "Chicago is the 1975 Kander and Ebb show about Roxie and Velma, revived in 1996 in concert clothes, that became one of the district's longest-running revival tenants."
);

entity(
    "les-miserables",
    "Les Misérables",
    "work",
    "Boublil and Schönberg epic that defined the 1980s British invasion on Broadway.",
    "Les Misérables is the sung-through Paris barricade musical that opened on Broadway in 1987, won the Tony for Best Musical, and stands with Phantom as the British megamusical wave."
);

entity(
    "cats",
    "Cats",
    "work",
    "Lloyd Webber / Eliot musical that took the long-run crown at the Winter Garden.",
    "Cats is the junkyard-cats musical that opened at the Winter Garden in 1982, ran for eighteen years, and briefly held Broadway's longest-run record after A Chorus Line."
);

entity(
    "rent",
    "Rent",
    "work",
    "Jonathan Larson's East Village rock musical that jumped to Broadway in 1996.",
    "Rent is the La Bohème rewrite that moved from the New York Theatre Workshop to Broadway, won the Pulitzer and the Tony, and marked a 1990s turn toward younger, rock-scored houses."
);

entity(
    "the-book-of-mormon",
    "The Book of Mormon",
    "work",
    "Parker, Stone, and Lopez satire that became a 2010s Tony-winning long run.",
    "The Book of Mormon is the 2011 musical that opened at the Eugene O'Neill, won Best Musical at the Tonys, and sat beside Wicked and later Hamilton as a tourist-proof comedy."
);

entity(
    "oklahoma",
    "Oklahoma!",
    "work",
    "Rodgers and Hammerstein 1943 musical that reset what a Broadway book show could be.",
    "Oklahoma! is the 1943 Rodgers and Hammerstein show that integrated song, story, and ballet and became the template later Golden Age musicals — and the Tony era — still answer to."
);

entity(
    "west-side-story",
    "West Side Story",
    "work",
    "Bernstein, Sondheim, and Robbins rewrite of Romeo and Juliet on the West Side.",
    "West Side Story is the 1957 street-gang musical that took Romeo and Juliet to the West Side, with Bernstein's score, Sondheim's lyrics, and Robbins's dances as a mid-century Broadway peak."
);

entity(
    "production-contract",
    "Equity Production Contract",
    "concept",
    "Actors' Equity agreement that defines a Broadway company.",
    "The Equity Production Contract is the union agreement that makes a Midtown house a Broadway job: minimums, rehearsal rules, and the contract the Tonys assume when they count a show."
);

/* ---------- Relationships ---------- */

rel("broadway-theatre-district", "broadway", "part_of", "The theatre district is the geographic body of Broadway.", 0.99, 0.98);
rel("broadway-theatre-district", "times-square", "located_in", "The Broadway theatre district is clustered around Times Square.", 0.97, 0.95);
rel("times-square", "broadway", "part_of", "Times Square is the lighted front door of Broadway.", 0.96, 0.93);
rel("forty-second-street", "broadway-theatre-district", "located_in", "42nd Street cuts through the Broadway theatre district.", 0.96, 0.93);
rel("the-great-white-way", "broadway", "part_of", "The Great White Way is the nickname for Broadway's lighted marquees.", 0.95, 0.92);
rel("tkts", "times-square", "located_in", "The TKTS booth stands in Duffy Square at Times Square.", 0.96, 0.93);
rel("tkts", "broadway", "supports", "TKTS sells same-day seats that feed Broadway houses.", 0.93, 0.89);

rel("shubert-organization", "broadway", "produced", "The Shubert Organization is Broadway's largest theatre landlord.", 0.97, 0.95);
rel("shubert-organization", "shubert-theatre", "contains", "The Shubert Organization owns the Shubert Theatre.", 0.97, 0.94);
rel("shubert-theatre", "broadway-theatre-district", "located_in", "The Shubert Theatre sits on 44th Street in the theatre district.", 0.96, 0.93);
rel("nederlander-organization", "broadway", "produced", "The Nederlander Organization is a principal Broadway landlord.", 0.95, 0.92);
rel("nederlander-organization", "richard-rodgers-theatre", "contains", "The Nederlander Organization operates the Richard Rodgers Theatre.", 0.95, 0.92);
rel("nederlander-organization", "gershwin-theatre", "contains", "The Nederlander Organization operates the Gershwin Theatre.", 0.95, 0.91);
rel("jujamcyn", "broadway", "produced", "Jujamcyn Theaters is the third historic Broadway landlord.", 0.93, 0.89);
rel("majestic-theatre", "shubert-organization", "part_of", "The Majestic Theatre is a Shubert house.", 0.96, 0.93);
rel("winter-garden-theatre", "shubert-organization", "part_of", "The Winter Garden Theatre is a Shubert house.", 0.95, 0.92);
rel("richard-rodgers-theatre", "broadway-theatre-district", "located_in", "The Richard Rodgers Theatre stands on 46th Street in the district.", 0.95, 0.92);
rel("gershwin-theatre", "broadway-theatre-district", "located_in", "The Gershwin Theatre stands on 51st Street in the district.", 0.94, 0.9);

rel("actors-equity", "broadway", "supports", "Actors' Equity sets the Production Contract that governs Broadway companies.", 0.96, 0.93);
rel("actors-equity", "production-contract", "created", "Actors' Equity bargains the Production Contract used on Broadway.", 0.96, 0.93);
rel("broadway-league", "tony-awards", "produced", "The Broadway League co-presents the Tony Awards.", 0.97, 0.94);
rel("tony-awards", "broadway", "part_of", "The Tony Awards are Broadway's annual prizes.", 0.98, 0.96);
rel("broadway-league", "broadway", "produced", "The Broadway League is the producers' and owners' trade group for Broadway.", 0.95, 0.92);

rel("hamilton", "broadway", "part_of", "Hamilton is the defining 2010s Broadway hit.", 0.97, 0.95);
rel("hamilton", "richard-rodgers-theatre", "occurred_at", "Hamilton's Broadway run is at the Richard Rodgers Theatre.", 0.97, 0.94);
rel("hamilton", "tony-awards", "involved", "Hamilton swept the 2016 Tony Awards.", 0.96, 0.93);

rel("phantom-of-the-opera", "broadway", "part_of", "The Phantom of the Opera is Broadway's longest original-run monument.", 0.97, 0.94);
rel("phantom-of-the-opera", "majestic-theatre", "occurred_at", "The Phantom of the Opera ran at the Majestic Theatre.", 0.97, 0.95);
rel("a-chorus-line", "broadway", "part_of", "A Chorus Line is a defining 1970s Broadway musical.", 0.96, 0.93);
rel("a-chorus-line", "shubert-theatre", "occurred_at", "A Chorus Line's original Broadway run was at the Shubert Theatre.", 0.96, 0.93);
rel("forty-second-street-musical", "forty-second-street", "inspired", "The musical 42nd Street takes its name and myth from the Midtown street.", 0.95, 0.91);
rel("forty-second-street-musical", "broadway", "part_of", "42nd Street is a backstage musical about Broadway itself.", 0.94, 0.9);

rel("wicked", "gershwin-theatre", "occurred_at", "Wicked has played the Gershwin Theatre since 2003.", 0.97, 0.94);
rel("wicked", "broadway", "part_of", "Wicked is a long-running Broadway musical at the Gershwin.", 0.95, 0.92);
rel("the-lion-king", "broadway", "part_of", "The Lion King is a permanent Times Square-scale Broadway spectacle.", 0.95, 0.92);
rel("chicago-musical", "broadway", "part_of", "Chicago's revival became one of Broadway's longest tenants.", 0.94, 0.9);
rel("les-miserables", "broadway", "part_of", "Les Misérables was a flagship of the 1980s Broadway British invasion.", 0.94, 0.9);
rel("cats", "winter-garden-theatre", "occurred_at", "Cats ran at the Winter Garden Theatre for eighteen years.", 0.96, 0.93);
rel("cats", "a-chorus-line", "followed", "Cats took Broadway's longest-run record from A Chorus Line.", 0.94, 0.9);
rel("phantom-of-the-opera", "cats", "followed", "The Phantom of the Opera later passed Cats as Broadway's longest-running show.", 0.93, 0.89);
rel("rent", "broadway", "part_of", "Rent moved from downtown to become a 1990s Broadway landmark.", 0.93, 0.89);
rel("the-book-of-mormon", "broadway", "part_of", "The Book of Mormon is a 2010s Tony-winning Broadway long run.", 0.93, 0.89);
rel("the-book-of-mormon", "tony-awards", "involved", "The Book of Mormon won Best Musical at the Tony Awards.", 0.94, 0.9);
rel("oklahoma", "broadway", "part_of", "Oklahoma! reset the Broadway book musical in 1943.", 0.95, 0.91);
rel("west-side-story", "broadway", "part_of", "West Side Story is a mid-century peak of the Broadway musical.", 0.94, 0.9);

module.exports = { entities, relationships };
