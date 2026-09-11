/**
 * Demon Slayer subject package — Koyoharu Gotouge's Taisho-era demon-hunting manga.
 */

const path = require("path");
const {
    entities: rawEntities,
    relationships: rawRelationships
} = require("./data");
const { mergeSubjectPackage } = require("../../lib/mergeSubjectPackage");

module.exports = mergeSubjectPackage({
    subjectDir: path.join(__dirname),
    meta: {
        id: "demon-slayer",
        name: "Demon Slayer",
        rootSlug: "demon-slayer",
        theme: "demon-slayer",
        copyright: {
            title: "Demon Slayer is not owned by Ton-o-Lore.",
            body:
                "Demon Slayer: Kimetsu no Yaiba, its characters, artwork, logos, and related intellectual property are the property of their respective rights holders, including Koyoharu Gotouge, Shueisha, Aniplex, ufotable, and other credited rights holders. Ton-o-Lore is an independent, unofficial fan and informational project and is not affiliated with or endorsed by those rights holders. Identification logos and thumbnails, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "demon-slayer": ["Kimetsu no Yaiba", "Demon Slayer: Kimetsu no Yaiba", "鬼滅の刃"],
        "koyoharu-gotouge": ["Gotouge", "Gotoge", "Koyoharu Gotoge"],
        ufotable: ["ufotable studio"],
        "mugen-train": ["Infinity Train", "Demon Slayer: Mugen Train", "Mugen Ressha"],
        "tanjiro-kamado": ["Tanjiro", "Kamado Tanjirou"],
        "nezuko-kamado": ["Nezuko"],
        "zenitsu-agatsuma": ["Zenitsu"],
        "inosuke-hashibira": ["Inosuke"],
        "muzan-kibutsuji": ["Muzan", "Kibutsuji Muzan"],
        "kyojuro-rengoku": ["Rengoku", "Flame Hashira", "Kyojurou Rengoku"],
        "shinobu-kocho": ["Shinobu", "Insect Hashira", "Shinobu Kochou"],
        "giyu-tomioka": ["Giyu", "Giyuu", "Water Hashira", "Tomioka Giyu"],
        "tengen-uzui": ["Tengen", "Sound Hashira", "Flashy Hashira"],
        akaza: ["Upper Rank Three", "Hakuji"],
        "sakonji-urokodaki": ["Urokodaki", "Sakonji"],
        "mitsuri-kanroji": ["Mitsuri", "Love Hashira"],
        "sanemi-shinazugawa": ["Sanemi", "Wind Hashira"],
        "kanao-tsuyuri": ["Kanao"],
        enmu: ["Lower Rank One"],
        "demon-slayer-corps": ["Corps", "Demon Slaying Corps"],
        hashira: ["Pillars", "Hashira pillars"],
        "twelve-kizuki": ["Twelve Demon Moons", "Upper Ranks", "Lower Ranks"],
        "infinity-castle": ["Infinity Castle", "Dimensional Infinity Fortress"],
        "nichirin-sword": ["Nichirin Blade", "Color-changing sword"],
        "breathing-styles": ["Breathing Techniques", "Total Concentration Breathing"],
        "water-breathing": ["Water Breath"],
        "sun-breathing": ["Dance of the Fire God", "Hinokami Kagura"],
        "thunder-breathing": ["Lightning Breathing", "Thunder Breath"],
        "taisho-japan": ["Taisho era", "Taishō Japan"]
    },
    parents: {
        "tanjiro-kamado": "demon-slayer-corps",
        "zenitsu-agatsuma": "demon-slayer-corps",
        "inosuke-hashibira": "demon-slayer-corps",
        "kyojuro-rengoku": "hashira",
        "shinobu-kocho": "hashira",
        "giyu-tomioka": "hashira",
        "tengen-uzui": "hashira",
        "mitsuri-kanroji": "hashira",
        "sanemi-shinazugawa": "hashira",
        hashira: "demon-slayer-corps",
        akaza: "twelve-kizuki",
        enmu: "twelve-kizuki",
        "twelve-kizuki": "muzan-kibutsuji",
        "water-breathing": "breathing-styles",
        "sun-breathing": "breathing-styles",
        "thunder-breathing": "breathing-styles",
        "nezuko-kamado": "tanjiro-kamado",
        "kanao-tsuyuri": "shinobu-kocho",
        "sakonji-urokodaki": "mount-sagiri",
        "mount-sagiri": "taisho-japan",
        "infinity-castle": "muzan-kibutsuji"
    }
});
