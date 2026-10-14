/**
 * FIFA World Cup — Sports subject package.
 */

const path = require("path");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");
const {
    entities: rawEntities,
    relationships: rawRelationships
} = require("./data");

module.exports = mergeSubjectPackage({
    subjectDir: path.join(__dirname),
    meta: {
        id: "fifa-world-cup",
        name: "FIFA World Cup",
        rootSlug: "fifa-world-cup",
        theme: "fifa-world-cup",
        categories: ["sports"],
        copyright: {
            title: "FIFA World Cup is not owned by Ton-o-Lore.",
            body:
                "FIFA World Cup, related names, marks, and materials are the property of FIFA / respective federations and rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "fifa-world-cup": ["FIFA World Cup", "World Cup", "Mundial"],
        fifa: ["FIFA", "Fédération Internationale de Football Association"],
        "jules-rimet": ["Rimet", "Jules Rimet"],
        "joao-havelange": ["Havelange", "Joao Havelange", "João Havelange"],
        "gianni-infantino": ["Infantino", "Gianni Infantino"],
        "uruguay-national-team": ["Uruguay", "La Celeste", "Uruguay national football team"],
        "brazil-national-team": ["Brazil", "Seleção", "Brazil national football team"],
        "argentina-national-team": ["Argentina", "Albiceleste", "Argentina national football team"],
        "france-national-team": ["France", "Les Bleus", "France national football team"],
        "germany-national-team": ["Germany", "Die Mannschaft", "West Germany", "Germany national football team"],
        pele: ["Pelé", "Pele", "Edson Arantes do Nascimento"],
        "diego-maradona": ["Maradona", "Diego Maradona", "El Diego"],
        "zinedine-zidane": ["Zidane", "Zinedine Zidane", "Zizou"],
        "ronaldo-nazario": ["Ronaldo", "Ronaldo Nazário", "Ronaldo Fenômeno", "Il Fenomeno"],
        "lionel-messi": ["Messi", "Lionel Messi", "La Pulga"],
        "johan-cruyff": ["Cruyff", "Johan Cruyff", "Johan Cruijff"],
        "fifa-world-cup-1930": ["1930 World Cup", "Uruguay 1930", "1930 FIFA World Cup"],
        "fifa-world-cup-1958": ["1958 World Cup", "Sweden 1958", "1958 FIFA World Cup"],
        "fifa-world-cup-1970": ["1970 World Cup", "Mexico 1970", "1970 FIFA World Cup"],
        "fifa-world-cup-1974": ["1974 World Cup", "West Germany 1974", "1974 FIFA World Cup"],
        "fifa-world-cup-1986": ["1986 World Cup", "Mexico 1986", "1986 FIFA World Cup"],
        "fifa-world-cup-1998": ["1998 World Cup", "France 1998", "1998 FIFA World Cup"],
        "fifa-world-cup-2002": ["2002 World Cup", "Korea Japan 2002", "2002 FIFA World Cup"],
        "fifa-world-cup-2014": ["2014 World Cup", "Brazil 2014", "2014 FIFA World Cup"],
        "fifa-world-cup-2022": ["2022 World Cup", "Qatar 2022", "2022 FIFA World Cup"],
        "hand-of-god": ["Hand of God", "Mano de Dios"],
        "estadio-centenario": ["Centenario", "Estadio Centenario"],
        maracana: ["Maracanã", "Maracana", "Estádio do Maracanã"],
        "estadio-azteca": ["Azteca", "Estadio Azteca"],
        "lusail-stadium": ["Lusail", "Lusail Stadium", "Lusail Iconic Stadium"],
        "jules-rimet-trophy": ["Jules Rimet Trophy", "Jules Rimet Cup", "Rimet Trophy"],
        "fifa-world-cup-trophy": ["World Cup trophy", "FIFA World Cup Trophy", "the trophy"],
        "total-football": ["Total Football", "Totaalvoetbal"]
    },
    parents: {
        pele: "brazil-national-team",
        "ronaldo-nazario": "brazil-national-team",
        "diego-maradona": "argentina-national-team",
        "lionel-messi": "argentina-national-team",
        "zinedine-zidane": "france-national-team"
    }
});
