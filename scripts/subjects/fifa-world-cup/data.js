/*
 * FIFA World Cup subject data — trophies, hosts, and the tournament's defining chapters.
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
    "fifa-world-cup",
    "FIFA World Cup",
    "topic",
    "The men's world championship — hosts, heroes, and the trophy lifted every four years.",
    "The FIFA World Cup is the quadrennial tournament FIFA first staged in 1930. Its lore runs through Uruguay, Pelé's Brazil, Maradona in Mexico, Zidane in France, Germany 2014, Messi's 2022, and the two trophies — Jules Rimet and the current FIFA World Cup Trophy."
);

entity(
    "fifa",
    "FIFA",
    "organization",
    "World football's governing body that owns the World Cup.",
    "FIFA — the Fédération Internationale de Football Association — organizes the World Cup, sets the qualifying paths, and awards the trophy that national teams spend four years chasing."
);

entity(
    "jules-rimet",
    "Jules Rimet",
    "person",
    "FIFA president who made the first World Cup happen.",
    "Jules Rimet was the FIFA president who drove the 1930 tournament in Uruguay. The original trophy later bore his name until Brazil kept it after a third win."
);

entity(
    "joao-havelange",
    "João Havelange",
    "person",
    "FIFA president who turned the World Cup into a global television product.",
    "João Havelange ran FIFA from 1974 to 1998, expanding the World Cup field and the commercial machine that later presidents inherited."
);

entity(
    "gianni-infantino",
    "Gianni Infantino",
    "person",
    "FIFA president of the Qatar 2022 and expanded-field era.",
    "Gianni Infantino became FIFA president in 2016 and oversaw the 2022 World Cup in Qatar plus the plan to enlarge later tournaments."
);

/* ---------- National teams ---------- */

entity(
    "uruguay-national-team",
    "Uruguay national team",
    "organization",
    "Hosts and winners of the first World Cup.",
    "Uruguay won the 1930 World Cup on home soil and again in 1950 at the Maracanã, a small nation whose early titles still sit at the root of the tournament."
);

entity(
    "brazil-national-team",
    "Brazil national team",
    "organization",
    "Five-time champion — Pelé, 1970, and the yellow shirt as canon.",
    "Brazil is the World Cup's most titled side: 1958, 1962, 1970, 1994, and 2002, the Seleção of Pelé, the 1970 Mexico side, and Ronaldo's 2002 redemption."
);

entity(
    "argentina-national-team",
    "Argentina national team",
    "organization",
    "Maradona's 1986 and Messi's 2022 — two number-tens, two trophies.",
    "Argentina won the World Cup in 1978, 1986, and 2022. The last two are personal myths: Maradona in Mexico and Messi in Qatar."
);

entity(
    "france-national-team",
    "France national team",
    "organization",
    "Zidane's 1998 hosts and later champions.",
    "France won the World Cup as hosts in 1998 with Zinedine Zidane, then again in 2018, a second-generation champion after the 2006 final heartbreak."
);

entity(
    "germany-national-team",
    "Germany national team",
    "organization",
    "Machine of 1954, 1974, 1990, and the 2014 Rio final.",
    "Germany — as West Germany and then a unified side — has four World Cup titles, the last in 2014 when they beat Argentina in Rio."
);

/* ---------- Players ---------- */

entity(
    "pele",
    "Pelé",
    "person",
    "Brazil's teenager of 1958 and the only man with three World Cups.",
    "Pelé won the World Cup in 1958 as a seventeen-year-old, again in 1962, and completed the trio in 1970 — the only player with three winner's medals."
);

entity(
    "diego-maradona",
    "Diego Maradona",
    "person",
    "Argentina's 1986 captain of the Hand of God and the Goal of the Century.",
    "Diego Maradona dragged Argentina to the 1986 title in Mexico: a punched goal against England, then a slalom through the same side, and a final against West Germany."
);

entity(
    "zinedine-zidane",
    "Zinedine Zidane",
    "person",
    "France's 1998 final scorer and the 2006 red-card tragedy.",
    "Zinedine Zidane headed two goals in the 1998 final against Brazil, then ended his career with a headbutt in the 2006 final — two World Cup images that still travel together."
);

entity(
    "ronaldo-nazario",
    "Ronaldo",
    "person",
    "Brazil's 2002 final hat-trick-adjacent redemption after 1998.",
    "Ronaldo Nazário was a spectator-body in the 1998 final, then the eight-goal top scorer who led Brazil to the 2002 title in Japan and South Korea."
);

entity(
    "lionel-messi",
    "Lionel Messi",
    "person",
    "Argentina's 2022 captain who closed the one missing prize.",
    "Lionel Messi won the 2022 World Cup in Qatar, scoring in the final against France and ending the argument that his career lacked the trophy Maradona had."
);

entity(
    "johan-cruyff",
    "Johan Cruyff",
    "person",
    "Netherlands playmaker of Total Football at the 1974 World Cup.",
    "Johan Cruyff never won the World Cup, but his 1974 Netherlands side — Total Football, the Cruyff turn — remains one of the tournament's most quoted losing teams."
);

/* ---------- Tournament chapters ---------- */

entity(
    "fifa-world-cup-1930",
    "1930 FIFA World Cup",
    "event",
    "First tournament — Uruguay hosts and wins.",
    "The 1930 FIFA World Cup in Uruguay was the first. Thirteen teams, a Jules Rimet trophy, and a home final Uruguay won against Argentina at Estadio Centenario."
);

entity(
    "fifa-world-cup-1958",
    "1958 FIFA World Cup",
    "event",
    "Sweden hosts; a seventeen-year-old Pelé announces Brazil.",
    "The 1958 World Cup in Sweden was Brazil's first title. Pelé scored in the final against the hosts and became the tournament's lasting face."
);

entity(
    "fifa-world-cup-1970",
    "1970 FIFA World Cup",
    "event",
    "Mexico — Brazil's crowning side in the first color-TV World Cup.",
    "The 1970 World Cup in Mexico is remembered as Brazil's greatest side: Pelé, Jairzinho, Carlos Alberto's final goal, and the first tournament widely watched in color."
);

entity(
    "fifa-world-cup-1974",
    "1974 FIFA World Cup",
    "event",
    "West Germany wins; Cruyff's Netherlands becomes the beautiful loser.",
    "The 1974 World Cup in West Germany gave the hosts the trophy and the world Total Football — Cruyff's Netherlands lost the final and still entered the canon."
);

entity(
    "fifa-world-cup-1986",
    "1986 FIFA World Cup",
    "event",
    "Mexico — Maradona's tournament.",
    "The 1986 World Cup in Mexico is Maradona's: the quarter-final against England, the final against West Germany, and Argentina's second title."
);

entity(
    "fifa-world-cup-1998",
    "1998 FIFA World Cup",
    "event",
    "France hosts and Zidane wins it on home grass.",
    "The 1998 World Cup in France ended with Zidane's two headers against Brazil at the Stade de France, the host's first title."
);

entity(
    "fifa-world-cup-2002",
    "2002 FIFA World Cup",
    "event",
    "Korea and Japan — Ronaldo's Brazil and the first Asian World Cup.",
    "The 2002 World Cup, co-hosted by South Korea and Japan, was Brazil's fifth title and Ronaldo's redemption after the 1998 final."
);

entity(
    "fifa-world-cup-2014",
    "2014 FIFA World Cup",
    "event",
    "Brazil hosts; Germany wins in Rio after 7–1.",
    "The 2014 World Cup in Brazil is remembered for Germany's 7–1 semi-final against the hosts and Mario Götze's extra-time winner against Argentina in the Rio final."
);

entity(
    "fifa-world-cup-2022",
    "2022 FIFA World Cup",
    "event",
    "Qatar — Messi's Argentina in a final against France.",
    "The 2022 World Cup in Qatar was the first winter tournament in the Middle East. Argentina beat France on penalties after a final that already felt historic."
);

entity(
    "hand-of-god",
    "Hand of God",
    "event",
    "Maradona's punched quarter-final goal against England in 1986.",
    "The Hand of God is Maradona's 1986 quarter-final opener against England — a fist he later named, four minutes before the Goal of the Century in the same match."
);

/* ---------- Places / objects ---------- */

entity(
    "estadio-centenario",
    "Estadio Centenario",
    "place",
    "Montevideo stadium built for the first World Cup.",
    "Estadio Centenario in Montevideo was built for 1930 and hosted the first World Cup final, a concrete monument FIFA still treats as a founding ground."
);

entity(
    "maracana",
    "Maracanã",
    "place",
    "Rio cathedral of the 1950 shock and the 2014 final.",
    "The Maracanã in Rio de Janeiro staged the 1950 final Uruguay won in front of a Brazilian crowd, then the 2014 final Germany won on the same grass."
);

entity(
    "estadio-azteca",
    "Estadio Azteca",
    "place",
    "Mexico City stadium of 1970 and Maradona's 1986 quarter-final.",
    "Estadio Azteca hosted the 1970 and 1986 World Cup finals and the 1986 quarter-final in which Maradona scored both the Hand of God and the Goal of the Century."
);

entity(
    "lusail-stadium",
    "Lusail Stadium",
    "place",
    "Qatar final venue of Messi's 2022 night.",
    "Lusail Stadium hosted the 2022 World Cup final, the night Lionel Messi lifted the trophy after Argentina's penalty win over France."
);

entity(
    "jules-rimet-trophy",
    "Jules Rimet Trophy",
    "object",
    "Original World Cup, retired when Brazil won it a third time.",
    "The Jules Rimet Trophy was the prize from 1930 until 1970, when Brazil's third title retired it. The cup was later stolen in Rio and never recovered."
);

entity(
    "fifa-world-cup-trophy",
    "FIFA World Cup Trophy",
    "object",
    "Gold cup used since 1974 — the one Messi kissed in 2022.",
    "The FIFA World Cup Trophy replaced the Jules Rimet cup in 1974. Champions keep a replica; FIFA keeps the original that Germany, France, and Argentina have lifted since."
);

entity(
    "total-football",
    "Total Football",
    "concept",
    "Dutch positional interchange that Cruyff took to the 1974 World Cup.",
    "Total Football is the Netherlands' 1970s idea that any outfield player could take any role. Cruyff's 1974 World Cup side is the tournament's textbook."
);

/* ---------- Relationships ---------- */

rel("jules-rimet", "fifa-world-cup", "created", "Jules Rimet drove FIFA to stage the first World Cup in 1930.", 0.99, 0.98);
rel("jules-rimet", "fifa", "leads", "Jules Rimet was the FIFA president who made the World Cup real.", 0.97, 0.95);
rel("fifa", "fifa-world-cup", "produced", "FIFA organizes the World Cup every four years.", 0.99, 0.98);
rel("joao-havelange", "fifa", "leads", "João Havelange ran FIFA through the television-era World Cups.", 0.95, 0.92);
rel("gianni-infantino", "fifa", "leads", "Gianni Infantino is the FIFA president of the Qatar 2022 era.", 0.95, 0.91);
rel("jules-rimet", "jules-rimet-trophy", "created", "The original World Cup trophy was named for Jules Rimet.", 0.97, 0.95);
rel("jules-rimet-trophy", "fifa-world-cup-trophy", "preceded", "The Jules Rimet Trophy was retired before the current FIFA World Cup Trophy.", 0.96, 0.93);

rel("pele", "brazil-national-team", "member_of", "Pelé is the defining player of Brazil's World Cup lineage.", 0.99, 0.98);
rel("ronaldo-nazario", "brazil-national-team", "member_of", "Ronaldo led Brazil to the 2002 World Cup title.", 0.97, 0.94);
rel("diego-maradona", "argentina-national-team", "member_of", "Maradona captained Argentina to the 1986 World Cup.", 0.99, 0.97);
rel("lionel-messi", "argentina-national-team", "member_of", "Messi captained Argentina to the 2022 World Cup.", 0.99, 0.97);
rel("zinedine-zidane", "france-national-team", "member_of", "Zidane headed France to the 1998 World Cup on home soil.", 0.98, 0.96);
rel("johan-cruyff", "total-football", "uses", "Cruyff was the playmaker of Total Football at the 1974 World Cup.", 0.97, 0.94);

rel("uruguay-national-team", "fifa-world-cup-1930", "involved", "Uruguay hosted and won the first World Cup.", 0.99, 0.97);
rel("fifa-world-cup-1930", "estadio-centenario", "occurred_at", "The 1930 World Cup final was played at Estadio Centenario.", 0.98, 0.96);
rel("pele", "fifa-world-cup-1958", "involved", "Pelé won the 1958 World Cup in Sweden at seventeen.", 0.99, 0.97);
rel("pele", "fifa-world-cup-1970", "involved", "Pelé's 1970 Brazil side is the tournament's most quoted champion.", 0.98, 0.96);
rel("fifa-world-cup-1970", "estadio-azteca", "occurred_at", "The 1970 World Cup final was played at Estadio Azteca.", 0.96, 0.93);
rel("diego-maradona", "fifa-world-cup-1986", "involved", "Maradona made the 1986 World Cup his personal tournament.", 0.99, 0.97);
rel("diego-maradona", "hand-of-god", "caused", "Maradona punched in the Hand of God against England.", 0.98, 0.96);
rel("hand-of-god", "fifa-world-cup-1986", "part_of", "The Hand of God happened in the 1986 World Cup quarter-final.", 0.98, 0.96);
rel("hand-of-god", "estadio-azteca", "occurred_at", "The Hand of God was scored at Estadio Azteca.", 0.97, 0.94);
rel("zinedine-zidane", "fifa-world-cup-1998", "involved", "Zidane scored twice in the 1998 World Cup final.", 0.98, 0.96);
rel("ronaldo-nazario", "fifa-world-cup-1998", "involved", "Ronaldo started the 1998 final after a pre-match collapse.", 0.95, 0.91);
rel("ronaldo-nazario", "fifa-world-cup-2002", "involved", "Ronaldo led Brazil to the 2002 World Cup title.", 0.97, 0.95);
rel("johan-cruyff", "fifa-world-cup-1974", "involved", "Cruyff's Netherlands reached the 1974 World Cup final and lost.", 0.96, 0.93);
rel("germany-national-team", "fifa-world-cup-2014", "involved", "Germany won the 2014 World Cup in Brazil.", 0.98, 0.96);
rel("fifa-world-cup-2014", "maracana", "occurred_at", "The 2014 World Cup final was played at the Maracanã.", 0.97, 0.94);
rel("lionel-messi", "fifa-world-cup-2022", "involved", "Messi won the 2022 World Cup with Argentina in Qatar.", 0.99, 0.97);
rel("fifa-world-cup-2022", "lusail-stadium", "occurred_at", "The 2022 World Cup final was played at Lusail Stadium.", 0.98, 0.96);
rel("france-national-team", "fifa-world-cup-2022", "opposed_by", "France met Argentina in the 2022 World Cup final.", 0.95, 0.92);
rel("lionel-messi", "diego-maradona", "followed", "Messi's 2022 title is told as the closing of Maradona's 1986 myth.", 0.94, 0.91);
rel("brazil-national-team", "jules-rimet-trophy", "uses", "Brazil retired the Jules Rimet Trophy with a third World Cup in 1970.", 0.96, 0.93);
rel("lionel-messi", "fifa-world-cup-trophy", "uses", "Messi lifted the FIFA World Cup Trophy in 2022.", 0.97, 0.95);
rel("germany-national-team", "fifa-world-cup-trophy", "uses", "Germany lifted the current trophy in 2014.", 0.95, 0.91);
rel("total-football", "fifa-world-cup-1974", "involved", "Total Football had its World Cup stage in 1974.", 0.95, 0.92);

rel("fifa-world-cup-1930", "fifa-world-cup", "part_of", "The 1930 tournament was the first FIFA World Cup.", 0.99, 0.98);
rel("fifa-world-cup-1958", "fifa-world-cup", "part_of", "The 1958 tournament is Pelé's first World Cup chapter.", 0.97, 0.95);
rel("fifa-world-cup-1970", "fifa-world-cup", "part_of", "The 1970 tournament is Brazil's crowning World Cup side.", 0.97, 0.94);
rel("fifa-world-cup-1986", "fifa-world-cup", "part_of", "The 1986 tournament is Maradona's World Cup.", 0.97, 0.95);
rel("fifa-world-cup-1998", "fifa-world-cup", "part_of", "The 1998 tournament is Zidane's home World Cup.", 0.96, 0.93);
rel("fifa-world-cup-2014", "fifa-world-cup", "part_of", "The 2014 tournament is Germany's Rio World Cup.", 0.96, 0.93);
rel("fifa-world-cup-2022", "fifa-world-cup", "part_of", "The 2022 tournament is Messi's World Cup.", 0.97, 0.95);
rel("fifa-world-cup-trophy", "fifa-world-cup", "part_of", "The FIFA World Cup Trophy is the prize of the modern tournament.", 0.98, 0.96);
rel("uruguay-national-team", "fifa-world-cup", "part_of", "Uruguay is the first World Cup champion.", 0.95, 0.92);
rel("brazil-national-team", "fifa-world-cup", "part_of", "Brazil is the World Cup's most titled national team.", 0.97, 0.95);
rel("argentina-national-team", "fifa-world-cup", "part_of", "Argentina's World Cup story is Maradona then Messi.", 0.96, 0.94);

module.exports = { entities, relationships };
