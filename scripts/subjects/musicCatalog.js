/**
 * Music category: 8 genres × 3 subjects each (24 subjects).
 * Used by categories.js, scaffolding, and the client genre shelves.
 */

const MUSIC_GENRES = [
    {
        id: "rock",
        label: "Rock",
        blurb: "Bands and catalogs that rewired guitars, albums, and arena myth.",
        accent: "#e05050",
        subjects: [
            {
                id: "the-beatles",
                name: "The Beatles",
                rights: "Apple Corps / Sony Music / respective rights holders",
                blurb: "The Liverpool band whose songbook and studio experiments became a global popular-music grammar."
            },
            {
                id: "pink-floyd",
                name: "Pink Floyd",
                rights: "Pink Floyd Ltd. / respective rights holders",
                blurb: "Progressive and psychedelic rock built around concept albums, sound design, and lasting stage mythology."
            },
            {
                id: "led-zeppelin",
                name: "Led Zeppelin",
                rights: "Led Zeppelin / Warner Music / respective rights holders",
                blurb: "Hard-rock architects whose riffs, folklore borrowings, and album lore still structure the genre."
            }
        ]
    },
    {
        id: "hip-hop",
        label: "Hip-hop",
        blurb: "Crews, catalogs, and myth-making from the block to the global chart.",
        accent: "#f0a020",
        subjects: [
            {
                id: "wu-tang-clan",
                name: "Wu-Tang Clan",
                rights: "Wu-Tang Productions / respective rights holders",
                blurb: "A Staten Island collective whose martial-arts mythology and sprawling solo catalog remapped hip-hop lore."
            },
            {
                id: "public-enemy",
                name: "Public Enemy",
                rights: "Public Enemy / Def Jam / respective rights holders",
                blurb: "Bomb-squad production and political storytelling that made hip-hop a public square."
            },
            {
                id: "outkast",
                name: "OutKast",
                rights: "OutKast / LaFace / respective rights holders",
                blurb: "Atlanta duo whose Southern futurism and dual personas expanded what hip-hop albums could be."
            }
        ]
    },
    {
        id: "jazz",
        label: "Jazz",
        blurb: "Improvisers, composers, and sessions that keep rewriting the standard book.",
        accent: "#5b9cff",
        subjects: [
            {
                id: "miles-davis",
                name: "Miles Davis",
                rights: "Estate of Miles Davis / respective rights holders",
                blurb: "Trumpeter and bandleader whose eras — cool, modal, electric — mark successive maps of modern jazz."
            },
            {
                id: "john-coltrane",
                name: "John Coltrane",
                rights: "Estate of John Coltrane / respective rights holders",
                blurb: "Saxophonist whose sheets of sound and spiritual late work remain a center of jazz study."
            },
            {
                id: "duke-ellington",
                name: "Duke Ellington",
                rights: "Estate of Duke Ellington / respective rights holders",
                blurb: "Composer-bandleader who treated the orchestra as a lifelong instrument of American music."
            }
        ]
    },
    {
        id: "electronic",
        label: "Electronic",
        blurb: "Machines, clubs, and studio identities that turned electricity into genre.",
        accent: "#3dcf9a",
        subjects: [
            {
                id: "daft-punk",
                name: "Daft Punk",
                rights: "Daft Punk / respective rights holders",
                blurb: "Helmeted duo whose house, disco, and robot mythos crossed club culture into mainstream lore."
            },
            {
                id: "kraftwerk",
                name: "Kraftwerk",
                rights: "Kraftwerk / Kling Klang / respective rights holders",
                blurb: "Düsseldorf pioneers who framed the man-machine ideal for generations of electronic music."
            },
            {
                id: "aphex-twin",
                name: "Aphex Twin",
                rights: "Richard D. James / Warp Records / respective rights holders",
                blurb: "Alias-rich IDM and acid work that made Richard D. James a lore figure of experimental electronica."
            }
        ]
    },
    {
        id: "classical",
        label: "Classical",
        blurb: "Composers whose catalogs still organize concert halls and music education.",
        accent: "#d4a24c",
        subjects: [
            {
                id: "ludwig-van-beethoven",
                name: "Ludwig van Beethoven",
                rights: "Public-domain compositions; editions and marks © respective rights holders",
                blurb: "Composer whose symphonies and late style mark the hinge from Classical to Romantic eras."
            },
            {
                id: "wolfgang-amadeus-mozart",
                name: "Wolfgang Amadeus Mozart",
                rights: "Public-domain compositions; editions and marks © respective rights holders",
                blurb: "Prodigy-composer of opera, symphony, and chamber works that define the Classical repertoire."
            },
            {
                id: "johann-sebastian-bach",
                name: "Johann Sebastian Bach",
                rights: "Public-domain compositions; editions and marks © respective rights holders",
                blurb: "Baroque master of counterpoint whose sacred and keyboard works remain a foundation of Western music."
            }
        ]
    },
    {
        id: "country",
        label: "Country",
        blurb: "Storytellers of place, faith, work, and the American road.",
        accent: "#c9a227",
        subjects: [
            {
                id: "johnny-cash",
                name: "Johnny Cash",
                rights: "Estate of Johnny Cash / respective rights holders",
                blurb: "The Man in Black — prison shows, outlaw myth, and a catalog that bridges country and American folk."
            },
            {
                id: "dolly-parton",
                name: "Dolly Parton",
                rights: "Dolly Parton / respective rights holders",
                blurb: "Songwriter, performer, and Appalachian icon whose authorship and persona reshaped country stardom."
            },
            {
                id: "hank-williams",
                name: "Hank Williams",
                rights: "Estate of Hank Williams / respective rights holders",
                blurb: "Honky-tonk architect whose brief career set the emotional grammar of modern country song."
            }
        ]
    },
    {
        id: "metal",
        label: "Metal",
        blurb: "Riffs, mascots, and underground-to-arena worlds built on volume and myth.",
        accent: "#9a9aaa",
        subjects: [
            {
                id: "black-sabbath",
                name: "Black Sabbath",
                rights: "Black Sabbath / respective rights holders",
                blurb: "Birmingham originators whose doom-laden riffs and occult imagery named heavy metal."
            },
            {
                id: "metallica",
                name: "Metallica",
                rights: "Metallica / respective rights holders",
                blurb: "Thrash-to-arena titans whose catalog and fan culture dominate modern metal lore."
            },
            {
                id: "iron-maiden",
                name: "Iron Maiden",
                rights: "Iron Maiden / respective rights holders",
                blurb: "New Wave of British Heavy Metal flagship, with Eddie the mascot as a lasting visual myth."
            }
        ]
    },
    {
        id: "pop",
        label: "Pop",
        blurb: "Global star systems where image, choreography, and hit craft intertwine.",
        accent: "#e0459a",
        subjects: [
            {
                id: "michael-jackson",
                name: "Michael Jackson",
                rights: "Estate of Michael Jackson / respective rights holders",
                blurb: "The King of Pop — video era spectacle, dance vocabulary, and a catalog that still defines mainstream pop."
            },
            {
                id: "madonna",
                name: "Madonna",
                rights: "Madonna / respective rights holders",
                blurb: "Reinvention as method: pop authorship, image cycles, and cultural provocation across decades."
            },
            {
                id: "prince",
                name: "Prince",
                rights: "Estate of Prince / respective rights holders",
                blurb: "Minneapolis polymath whose vault, personas, and genre-fluid catalog remain a pop-mythology center."
            }
        ]
    }
];

function allMusicSubjects() {
    return MUSIC_GENRES.flatMap((genre) =>
        genre.subjects.map((subject) => ({
            ...subject,
            genreId: genre.id,
            genreLabel: genre.label,
            accent: genre.accent
        }))
    );
}

function musicSubjectIds() {
    return allMusicSubjects().map((subject) => subject.id);
}

function genreIdForSubject(subjectId) {
    for (const genre of MUSIC_GENRES) {
        if (genre.subjects.some((subject) => subject.id === subjectId)) {
            return genre.id;
        }
    }
    return null;
}

module.exports = {
    MUSIC_GENRES,
    allMusicSubjects,
    musicSubjectIds,
    genreIdForSubject
};
