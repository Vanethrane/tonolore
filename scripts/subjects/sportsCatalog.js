/**
 * Sports category: sport shelves × 5+ subjects each.
 * Used by categories.js, scaffolding, registry, and category page shelves.
 */

const SPORTS = [
    {
        id: "basketball",
        label: "Basketball",
        blurb: "Court leagues, tournaments, and dynasties from the NBA to FIBA.",
        accent: "#c8102e",
        subjects: [
            {
                id: "nba",
                name: "NBA",
                existing: true,
                rights: "NBA / respective teams and rights holders",
                accent: "#c8102e",
                blurb: "The National Basketball Association — franchises, eras, and court mythology."
            },
            {
                id: "wnba",
                name: "WNBA",
                rights: "WNBA / respective teams and rights holders",
                accent: "#ff7400",
                blurb: "The Women's National Basketball Association — stars, rivalries, and expanding league lore."
            },
            {
                id: "ncaa-mens-basketball",
                name: "NCAA men's basketball",
                rights: "NCAA / respective conferences, schools, and rights holders",
                accent: "#0055a5",
                blurb: "March Madness and college basketball — programs, brackets, and campus dynasties."
            },
            {
                id: "euroleague",
                name: "EuroLeague",
                rights: "Euroleague Basketball / respective clubs and rights holders",
                accent: "#ff6600",
                blurb: "Europe's top club basketball competition — Final Four lore and continental rivalries."
            },
            {
                id: "fiba-basketball-world-cup",
                name: "FIBA Basketball World Cup",
                rights: "FIBA / respective federations and rights holders",
                accent: "#0033a0",
                blurb: "The global national-team basketball championship run by FIBA."
            }
        ]
    },
    {
        id: "soccer",
        label: "Soccer",
        blurb: "Association football — clubs, cups, and the world's most followed sport.",
        accent: "#0a6b3c",
        subjects: [
            {
                id: "fifa-world-cup",
                name: "FIFA World Cup",
                existing: true,
                rights: "FIFA / respective federations and rights holders",
                accent: "#0a6b3c",
                blurb: "The quadrennial football tournament that remaps national sporting identity."
            },
            {
                id: "uefa-champions-league",
                name: "UEFA Champions League",
                rights: "UEFA / respective clubs and rights holders",
                accent: "#001489",
                blurb: "Europe's elite club competition — anthems, nights in Lisbon and Istanbul, and continental crowns."
            },
            {
                id: "premier-league",
                name: "Premier League",
                rights: "Premier League / respective clubs and rights holders",
                accent: "#3d195b",
                blurb: "England's top flight — title races, relegation battles, and global broadcast lore."
            },
            {
                id: "la-liga",
                name: "La Liga",
                rights: "Liga Nacional de Fútbol Profesional / respective clubs and rights holders",
                accent: "#ee8700",
                blurb: "Spain's Primera División — El Clásico, tiki-taka eras, and club academies."
            },
            {
                id: "mls",
                name: "Major League Soccer",
                rights: "MLS / respective clubs and rights holders",
                accent: "#c8102e",
                blurb: "North America's top soccer league — expansion clubs, Designated Players, and cup runs."
            }
        ]
    },
    {
        id: "baseball",
        label: "Baseball",
        blurb: "Diamonds, seasons, and national pastimes from MLB to international classics.",
        accent: "#002d62",
        subjects: [
            {
                id: "mlb",
                name: "Major League Baseball",
                rights: "MLB / respective clubs and rights holders",
                accent: "#002d62",
                blurb: "America's major leagues — pennants, World Series, and ballpark mythology."
            },
            {
                id: "nippon-professional-baseball",
                name: "Nippon Professional Baseball",
                rights: "NPB / respective clubs and rights holders",
                accent: "#e60012",
                blurb: "Japan's top baseball leagues — Central and Pacific, Japan Series, and samurai baseball lore."
            },
            {
                id: "negro-leagues",
                name: "Negro Leagues",
                rights: "Negro Leagues Baseball Museum / respective estates and rights holders",
                accent: "#1a1a1a",
                blurb: "Black baseball before and beside integration — teams, barnstorming, and Hall of Fame recognition."
            },
            {
                id: "world-baseball-classic",
                name: "World Baseball Classic",
                rights: "WBSC / MLB / respective federations and rights holders",
                accent: "#0c2340",
                blurb: "The premier national-team baseball tournament on the modern calendar."
            },
            {
                id: "college-world-series",
                name: "College World Series",
                rights: "NCAA / respective schools and rights holders",
                accent: "#cf0a2c",
                blurb: "NCAA Division I baseball's Omaha finale — programs, pitch counts, and summer lore."
            }
        ]
    },
    {
        id: "american-football",
        label: "American football",
        blurb: "Gridiron leagues from the NFL and college football to Canadian and spring circuits.",
        accent: "#013369",
        subjects: [
            {
                id: "nfl",
                name: "NFL",
                rights: "NFL / respective clubs and rights holders",
                accent: "#013369",
                blurb: "The National Football League — franchises, Super Bowls, and Sunday mythology."
            },
            {
                id: "ncaa-football",
                name: "NCAA football",
                rights: "NCAA / respective conferences, schools, and rights holders",
                accent: "#bb0000",
                blurb: "College football — conferences, rivalries, and the road to national titles."
            },
            {
                id: "cfl",
                name: "Canadian Football League",
                rights: "CFL / respective clubs and rights holders",
                accent: "#c8102e",
                blurb: "Canada's pro gridiron league — three-downs football, Grey Cup, and northern rivalries."
            },
            {
                id: "super-bowl",
                name: "Super Bowl",
                rights: "NFL / respective clubs and rights holders",
                accent: "#d4af37",
                blurb: "The NFL championship game — Roman numerals, halftime lore, and American spectacle."
            },
            {
                id: "ufl",
                name: "United Football League",
                rights: "UFL / respective clubs and rights holders",
                accent: "#0b1f3a",
                blurb: "Spring pro football in the U.S. — merged USFL/XFL lineage and developmental lore."
            }
        ]
    },
    {
        id: "motorsport",
        label: "Motorsport",
        blurb: "Racing series from Formula 1 and NASCAR to endurance and two wheels.",
        accent: "#e10600",
        subjects: [
            {
                id: "formula-1",
                name: "Formula 1",
                existing: true,
                rights: "Formula One Group / FIA / respective teams and rights holders",
                accent: "#e10600",
                blurb: "Grand Prix racing — constructors, circuits, and technical eras at the limit."
            },
            {
                id: "nascar",
                name: "NASCAR",
                rights: "NASCAR / respective teams and rights holders",
                accent: "#ffd100",
                blurb: "Stock-car racing's premier series — Daytona, playoffs, and oval-track lore."
            },
            {
                id: "motogp",
                name: "MotoGP",
                rights: "Dorna / FIM / respective teams and rights holders",
                accent: "#e30613",
                blurb: "Motorcycle Grand Prix racing — classes, circuits, and factory rivalries."
            },
            {
                id: "indycar",
                name: "IndyCar",
                rights: "IndyCar / respective teams and rights holders",
                accent: "#c8102e",
                blurb: "American open-wheel racing — Indianapolis 500 and the championship trail."
            },
            {
                id: "24-hours-of-le-mans",
                name: "24 Hours of Le Mans",
                rights: "ACO / FIA WEC / respective manufacturers and rights holders",
                accent: "#003399",
                blurb: "The legendary endurance race on the Circuit de la Sarthe."
            }
        ]
    },
    {
        id: "tennis",
        label: "Tennis",
        blurb: "Majors, Davis Cup, and the tours that structure the tennis calendar.",
        accent: "#006633",
        subjects: [
            {
                id: "wimbledon",
                name: "Wimbledon",
                rights: "AELTC / respective rights holders",
                accent: "#006633",
                blurb: "The Championships at the All England Club — grass, strawberries, and Slam lore."
            },
            {
                id: "us-open-tennis",
                name: "US Open (tennis)",
                rights: "USTA / respective rights holders",
                accent: "#002f6c",
                blurb: "The American Slam at Flushing Meadows — hard courts and night-session lore."
            },
            {
                id: "french-open",
                name: "French Open",
                rights: "FFT / respective rights holders",
                accent: "#f37021",
                blurb: "Roland-Garros — clay-court grind and Paris Slam tradition."
            },
            {
                id: "australian-open",
                name: "Australian Open",
                rights: "Tennis Australia / respective rights holders",
                accent: "#0091d2",
                blurb: "The season-opening Slam in Melbourne — heat, arenas, and summer tennis."
            },
            {
                id: "davis-cup",
                name: "Davis Cup",
                rights: "ITF / respective federations and rights holders",
                accent: "#001f5b",
                blurb: "Men's national-team tennis competition — ties, upsets, and country pride."
            }
        ]
    },
    {
        id: "combat-sports",
        label: "Combat sports",
        blurb: "Striking and grappling sports from MMA and boxing to Olympic combat arts.",
        accent: "#8b0000",
        subjects: [
            {
                id: "ufc",
                name: "UFC",
                rights: "UFC / Endeavor / respective fighters and rights holders",
                accent: "#d20a0a",
                blurb: "Ultimate Fighting Championship — octagon eras, title lineages, and MMA's mainstream face."
            },
            {
                id: "boxing",
                name: "Boxing",
                rights: "Respective promoters, sanctioning bodies, and rights holders",
                accent: "#c5a572",
                blurb: "The sweet science — weight classes, belts, and championship lore across eras."
            },
            {
                id: "olympic-wrestling",
                name: "Olympic wrestling",
                rights: "UWW / IOC / respective federations and rights holders",
                accent: "#0033a0",
                blurb: "Freestyle and Greco-Roman wrestling on the Olympic and world stage."
            },
            {
                id: "judo",
                name: "Judo",
                rights: "IJF / Kodokan / respective federations and rights holders",
                accent: "#000080",
                blurb: "The Olympic martial art of throws and groundwork founded by Jigoro Kano."
            },
            {
                id: "kickboxing",
                name: "Kickboxing",
                rights: "Respective promotions, federations, and rights holders",
                accent: "#ff4500",
                blurb: "Stand-up striking sports — rulesets from full contact to K-1 style lore."
            }
        ]
    },
    {
        id: "olympics-multi",
        label: "Olympics & multi-sport",
        blurb: "Multi-sport festivals that gather nations under shared ceremonial lore.",
        accent: "#0085c7",
        subjects: [
            {
                id: "summer-olympics",
                name: "Summer Olympics",
                rights: "IOC / respective NOCs and rights holders",
                accent: "#0085c7",
                blurb: "The Summer Olympic Games — host cities, sports programs, and ceremonial tradition."
            },
            {
                id: "winter-olympics",
                name: "Winter Olympics",
                rights: "IOC / respective NOCs and rights holders",
                accent: "#00a651",
                blurb: "The Winter Olympic Games — snow and ice sports, host mountains, and cold-weather lore."
            },
            {
                id: "paralympic-games",
                name: "Paralympic Games",
                rights: "IPC / respective NPCs and rights holders",
                accent: "#e4002b",
                blurb: "Elite Para sport's flagship Games — classifications, sports, and Paralympic movement lore."
            },
            {
                id: "asian-games",
                name: "Asian Games",
                rights: "OCA / respective NOCs and rights holders",
                accent: "#f47321",
                blurb: "Asia's continental multi-sport Games under the Olympic Council of Asia."
            },
            {
                id: "commonwealth-games",
                name: "Commonwealth Games",
                rights: "CGF / respective CGAs and rights holders",
                accent: "#003087",
                blurb: "The multi-sport Games of the Commonwealth — shared history and rotating hosts."
            }
        ]
    }
];

function allSportsSubjects() {
    return SPORTS.flatMap((sport) =>
        sport.subjects.map((subject) => ({
            ...subject,
            sportId: sport.id,
            sportLabel: sport.label
        }))
    );
}

function sportsSubjectIds() {
    return allSportsSubjects().map((subject) => subject.id);
}

function newSportsSubjects() {
    return allSportsSubjects().filter((subject) => !subject.existing);
}

function newSportsSubjectIds() {
    return newSportsSubjects().map((subject) => subject.id);
}

function sportIdForSubject(subjectId) {
    const hit = allSportsSubjects().find((subject) => subject.id === subjectId);
    return hit ? hit.sportId : null;
}

function sportsShelvesForCatalog() {
    return SPORTS.map((sport) => ({
        id: sport.id,
        label: sport.label,
        blurb: sport.blurb,
        subjectIds: sport.subjects.map((subject) => subject.id)
    }));
}

function subjectCategoryMap() {
    return Object.fromEntries(
        sportsSubjectIds().map((id) => [id, ["sports"]])
    );
}

module.exports = {
    SPORTS,
    allSportsSubjects,
    sportsSubjectIds,
    newSportsSubjects,
    newSportsSubjectIds,
    sportIdForSubject,
    sportsShelvesForCatalog,
    subjectCategoryMap
};
