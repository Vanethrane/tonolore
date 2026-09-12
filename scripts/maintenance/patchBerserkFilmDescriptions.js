/**
 * Fill incomplete Berserk Golden Age film enrichment + related stubs.
 * Run: node scripts/maintenance/patchBerserkFilmDescriptions.js
 */

const fs = require("fs");
const path = require("path");

const expandedPath = path.join(
    __dirname,
    "..",
    "subjects",
    "berserk",
    "expanded.json"
);

const FILM_DESCRIPTION = `Berserk: The Golden Age Arc is a trilogy of anime films adapted from Kentaro Miura's Berserk manga. The films cover the same titular story arc as the 1997 anime and serve as a prequel to the 2016 anime. They were written by Ichirō Ōkouchi, directed by Toshiyuki Kubooka, scored by Shirō Sagisu (with Susumu Hirasawa providing the opening themes), and produced by Studio 4°C. The three films were the first installments in a now-shelved "Berserk Saga Project" that aimed to adapt the entire manga. A remastered television re-edit, the Memorial Edition, premiered on 2 October 2022.

I – The Egg of the King covers the Golden Age Arc from Guts' first encounter with the Band of the Falcon to Griffith telling Charlotte of his views on friendship, differing from the manga as follows:

Guts' childhood under Gambino is omitted or reduced to implication rather than dramatized in full. Early Band of the Falcon missions and camp life are heavily compressed, including Guts' first battle celebration with the Hawks. Corkus's early hostility and other character-building beats are trimmed so the film can reach the Griffith–Guts–Casca triangle faster.

II – The Battle for Doldrey covers from the battle against Adon to Griffith's torture after Guts departs from the Band of the Falcon, with the following differences from the manga:

The "Bonfire of Dreams" conversation between Guts and Casca is cut from the theatrical version (partly restored later in the Memorial Edition). The Midland court subplot around the Queen and Griffith's political maneuvering is largely removed. Griffith's past with Gennon and quieter Judeau and Corkus conversations before Guts leaves are reduced or absent. Side beats such as Zodd's intervention at Doldrey are simplified, and Guts' post-departure training at Godot's forge is skipped before the story returns to Griffith's fall.

III – The Advent covers from the end of Griffith's torture in the Tower of Rebirth to the aftermath of the Eclipse, with the following differences from the manga:

The Bakiraka assassination attempt and Wyald with the Black Dog Knights are omitted entirely. Silat's tournament introduction and several approach-to-rescue set pieces are cut. Intimate Casca–Guts dialogue — including childhood trauma surfacing — is greatly shortened. Eclipse farewells such as Judeau's last words to Casca are reduced. The Skull Knight's first appearance is rearranged relative to the manga, and the trilogy ends on the Eclipse's immediate aftermath rather than continuing into the Black Swordsman revenge path.`;

function writeJson(filePath, data) {
    const tmp = `${filePath}.${process.pid}.tmp`;
    fs.writeFileSync(tmp, JSON.stringify(data));
    fs.renameSync(tmp, filePath);
}

function main() {
    const expanded = JSON.parse(fs.readFileSync(expandedPath, "utf8"));
    const film = (expanded.enrichments || []).find(
        (row) => row.slug === "berserk-movies"
    );
    if (!film) {
        throw new Error("berserk-movies enrichment not found");
    }

    film.description = FILM_DESCRIPTION;
    film.short_description = `${FILM_DESCRIPTION.slice(0, 157)}…`;

    const behelit = (expanded.enrichments || []).find(
        (row) => row.slug === "behelit"
    );
    if (behelit?.description) {
        behelit.description = behelit.description.replace(
            "also referred to as ,",
            "also referred to as Behelits"
        );
        if (behelit.short_description) {
            behelit.short_description = behelit.short_description.replace(
                "also referred to as ,",
                "also referred to as Behelits"
            );
        }
    }

    writeJson(expandedPath, expanded);
    console.log(
        `Patched berserk-movies description (${FILM_DESCRIPTION.length} chars)`
    );
}

main();
