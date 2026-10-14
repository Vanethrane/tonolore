/**
 * World War II — History subject package.
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
        id: "world-war-ii",
        name: "World War II",
        rootSlug: "world-war-ii",
        theme: "world-war-ii",
        categories: ["history"],
        copyright: {
            title: "World War II is not owned by Ton-o-Lore.",
            body:
                "World War II, related names, marks, and materials are the property of Public-domain historical record / respective modern rights holders. Ton-o-Lore is an independent educational encyclopedia project and is not affiliated with or endorsed by those rights holders. Identification marks, when shown, are low-resolution images used under a fair-use rationale for commentary and identification only — not free or redistributable artwork."
        }
    },
    rawEntities,
    rawRelationships,
    aliases: {
        "world-war-ii": ["World War II", "Second World War", "WWII", "WW2"],
        allies: ["the Allies", "Grand Alliance", "United Nations (wartime)"],
        axis: ["the Axis", "Rome-Berlin-Tokyo Axis"],
        "nazi-germany": ["Third Reich", "Hitler Germany"],
        "imperial-japan": ["Empire of Japan", "Japan (WWII)"],
        "adolf-hitler": ["Hitler", "Führer"],
        "winston-churchill": ["Churchill", "Winston S. Churchill"],
        "franklin-d-roosevelt": ["FDR", "Roosevelt", "President Roosevelt"],
        "joseph-stalin": ["Stalin", "Iosif Stalin"],
        "benito-mussolini": ["Mussolini", "Il Duce"],
        "dwight-d-eisenhower": ["Eisenhower", "Ike"],
        "hideki-tojo": ["Tojo"],
        "invasion-of-poland": ["September Campaign", "1939 invasion of Poland"],
        "the-blitz": ["Blitz", "the London Blitz"],
        "battle-of-britain": ["Battle of Britain"],
        "operation-barbarossa": ["Barbarossa", "invasion of the USSR"],
        "pearl-harbor": ["attack on Pearl Harbor", "7 December 1941"],
        "battle-of-stalingrad": ["Stalingrad"],
        "d-day": ["Normandy landings", "Overlord", "6 June 1944"],
        holocaust: ["Shoah", "the Holocaust"],
        auschwitz: ["Auschwitz-Birkenau", "Oswiecim"],
        hiroshima: ["atomic bombing of Hiroshima"],
        nagasaki: ["atomic bombing of Nagasaki"],
        "yalta-conference": ["Yalta", "Crimea Conference"],
        "united-nations": ["UN", "United Nations Organization"],
        "manhattan-project": ["Manhattan Engineer District"],
        "atlantic-charter": ["Atlantic Charter"],
        "dunkirk-evacuation": ["Dunkirk", "Operation Dynamo"],
        "ve-day": ["Victory in Europe Day", "8 May 1945"],
        "battle-of-midway": ["Midway"]
    },
    parents: {
        "nazi-germany": "axis",
        "imperial-japan": "axis",
        "adolf-hitler": "nazi-germany",
        "benito-mussolini": "axis",
        "hideki-tojo": "imperial-japan",
        "winston-churchill": "allies",
        "franklin-d-roosevelt": "allies",
        "joseph-stalin": "allies",
        "dwight-d-eisenhower": "allies",
        holocaust: "nazi-germany",
        auschwitz: "holocaust",
        "the-blitz": "battle-of-britain",
        "battle-of-stalingrad": "operation-barbarossa",
        hiroshima: "manhattan-project",
        nagasaki: "manhattan-project",
        "united-nations": "allies",
        "d-day": "dwight-d-eisenhower"
    }
});
