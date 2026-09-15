/**
 * One-shot: nest Marvel/DC format hubs + hub entities.
 *   node scripts/maintenance/applyBigTwoNesting.js
 */

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");

function patchFormatHubs() {
    const p = path.join(root, "scripts", "subjects", "formatHubs.js");
    let s = fs.readFileSync(p, "utf8");
    const start = s.indexOf("    marvel: {");
    const ff = s.indexOf('\n    "final-fantasy": {');
    if (start < 0 || ff < 0) {
        throw new Error("formatHubs markers missing");
    }
    const block = `    marvel: {
        hubs: [
            hub(
                "comics",
                "Marvel Comics",
                "comics",
                "Marvel's shared comic universe.",
                "Marvel Comics is the publishing universe of the Avengers, X-Men, Fantastic Four, Spider-Man, Iron Man, Wolverine, and more — all under one Marvel shelf.",
                [
                    "spider-man",
                    "iron-man",
                    "wolverine",
                    "x-men",
                    "avengers",
                    "fantastic-four",
                    "guardians-of-the-galaxy",
                    "deadpool",
                    "ms-marvel",
                    "black-panther",
                    "doctor-strange"
                ]
            ),
            hub(
                "movies",
                "Marvel Movies",
                "movies",
                "MCU and Marvel film adaptations.",
                "Marvel movies center on the Marvel Cinematic Universe and related theatrical adaptations.",
                [
                    "mcu",
                    work(
                        "avengers-endgame",
                        "Avengers: Endgame",
                        "Culmination of the Infinity Saga.",
                        "Avengers: Endgame concludes the Infinity Saga as Earth's heroes attempt to reverse Thanos's snap."
                    ),
                    work(
                        "iron-man-2008",
                        "Iron Man (2008)",
                        "Film that launched the MCU.",
                        "Iron Man (2008) introduces Tony Stark as Iron Man and begins the Marvel Cinematic Universe."
                    )
                ]
            )
        ]
    },

    dc: {
        hubs: [
            hub(
                "comics",
                "DC Comics",
                "comics",
                "DC's shared comic universe.",
                "DC Comics is home to Superman, Batman, Catwoman, Wonder Woman, the Justice League, Green Lantern, Aquaman, and decades of shared continuity — all under one DC shelf.",
                [
                    "batman",
                    "superman",
                    "catwoman",
                    "wonder-woman",
                    "justice-league",
                    "green-lantern",
                    "aquaman",
                    "flash",
                    "joker",
                    "harley-quinn"
                ]
            ),
            hub(
                "movies",
                "DC Movies",
                "movies",
                "Theatrical DC adaptations.",
                "DC movies adapt Superman, Batman, Wonder Woman, and the wider Justice League mythos for the screen."
            )
        ]
    },

`;
    fs.writeFileSync(p, s.slice(0, start) + block + s.slice(ff + 1));
    console.log("formatHubs: marvel/dc nested; spider-man peer hubs removed");
}

function ensureEntity(fileRel, slug, entity) {
    const p = path.join(root, fileRel);
    let s = fs.readFileSync(p, "utf8");
    if (s.includes(`"slug": "${slug}"`)) {
        return false;
    }
    s = s.replace(
        "const entities = [",
        `const entities = [\n    ${JSON.stringify(entity, null, 8).replace(/^/gm, "    ").trimStart()},\n`
    );
    // JSON.stringify with indent is messy — use hand template instead
    const chunk = `    {
        "slug": "${entity.slug}",
        "name": "${entity.name}",
        "type": "${entity.type}",
        "evidence": "fiction",
        "short_description": ${JSON.stringify(entity.short_description)},
        "description": ${JSON.stringify(entity.description)},
        "aliases": []
    },
`;
    s = fs.readFileSync(p, "utf8");
    if (s.includes(`"slug": "${slug}"`)) {
        return false;
    }
    fs.writeFileSync(
        p,
        s.replace("const entities = [", `const entities = [\n${chunk}`)
    );
    return true;
}

function patchMarvel() {
    const added = ensureEntity("scripts/subjects/marvel/data.js", "spider-verse", {
        slug: "spider-verse",
        name: "Spider-Verse",
        type: "topic",
        short_description: "Marvel hub for Spider-Man and spider-heroes.",
        description:
            "The Spider-Verse is Marvel's nest for Peter Parker, Miles Morales, Ghost-Spider, Venom, and the wider spider-mythos — nested under Marvel rather than a separate encyclopedia subject."
    });
    console.log("marvel spider-verse:", added ? "added" : "exists");
}

function patchDc() {
    const hubs = [
        {
            slug: "green-lantern-corps",
            name: "Green Lantern Corps",
            type: "organization",
            short_description: "Space-cop corps of ring-wielders across the DC Universe.",
            description:
                "The Green Lantern Corps polices sectors of space with power rings — nested under DC so Lanterns and villains share one encyclopedia universe."
        },
        {
            slug: "atlantis",
            name: "Atlantis",
            type: "place",
            short_description: "Undersea kingdom of Aquaman in the DC Universe.",
            description:
                "Atlantis is Aquaman's undersea kingdom in DC Comics, nested under the shared DC encyclopedia shelf."
        },
        {
            slug: "speed-force",
            name: "Speed Force",
            type: "topic",
            short_description: "Extradimensional energy that powers DC speedsters.",
            description:
                "The Speed Force powers the Flash and related speedsters — nested under DC rather than a standalone subject."
        },
        {
            slug: "endless",
            name: "The Endless",
            type: "organization",
            short_description: "Dream and kin from DC/Vertigo myth.",
            description:
                "The Endless — including Dream — belong to DC/Vertigo continuity and nest under the DC Comics shelf."
        },
        {
            slug: "green-lantern",
            name: "Green Lantern",
            type: "person",
            short_description: "Ring-wielding DC space-cop hero.",
            description:
                "Green Lantern (including Hal Jordan and other bearers) is a core DC IP nested under the Justice League / Corps mythos."
        },
        {
            slug: "aquaman",
            name: "Aquaman",
            type: "person",
            short_description: "King of Atlantis and Justice League member.",
            description:
                "Aquaman rules Atlantis and fights with the Justice League — nested under DC Comics."
        },
        {
            slug: "flash",
            name: "The Flash",
            type: "person",
            short_description: "Scarlet speedster of the Justice League.",
            description:
                "The Flash (Barry Allen and related speedsters) is a core DC IP nested under the shared DC universe."
        },
        {
            slug: "poison-ivy",
            name: "Poison Ivy",
            type: "person",
            short_description: "Gotham eco-villain Pamela Isley.",
            description:
                "Poison Ivy is part of Batman's Gotham rogues gallery — nested under DC Comics."
        },
        {
            slug: "bane",
            name: "Bane",
            type: "person",
            short_description: "Venom-enhanced Gotham villain.",
            description:
                "Bane is a major Batman antagonist nested under Gotham / DC Comics."
        }
    ];
    let n = 0;
    for (const hub of hubs) {
        if (ensureEntity("scripts/subjects/dc/data.js", hub.slug, hub)) {
            n += 1;
        }
    }
    console.log("dc hubs added:", n);
}

patchFormatHubs();
patchMarvel();
patchDc();
console.log("applyBigTwoNesting done");
