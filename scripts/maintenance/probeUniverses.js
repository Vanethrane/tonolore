/**
 * Probe Wikidata counts for subject expansion sources.
 *   node scripts/maintenance/probeUniverses.js
 */

const { sparql } = require("../lib/wikiClient");

const probes = [
    {
        id: "hp-universe",
        query: `SELECT (COUNT(DISTINCT ?item) AS ?c) WHERE {
          ?item wdt:P1080 wd:Q201658 .
        }`
    },
    {
        id: "hp-from-work",
        query: `SELECT (COUNT(DISTINCT ?item) AS ?c) WHERE {
          VALUES ?work { wd:Q8337 wd:Q216930 }
          ?item wdt:P1441 ?work .
        }`
    },
    {
        id: "pokemon-pokedex",
        query: `SELECT (COUNT(DISTINCT ?item) AS ?c) WHERE {
          ?item wdt:P5426 ?dex .
        }`
    },
    {
        id: "pokemon-species",
        query: `SELECT (COUNT(DISTINCT ?item) AS ?c) WHERE {
          ?item wdt:P31/wdt:P279* wd:Q3966183 .
        }`
    },
    {
        id: "middle-earth",
        query: `SELECT (COUNT(DISTINCT ?item) AS ?c) WHERE {
          ?item wdt:P1080 wd:Q81767 .
        }`
    },
    {
        id: "tolkien-characters",
        query: `SELECT (COUNT(DISTINCT ?item) AS ?c) WHERE {
          ?item wdt:P31 wd:Q3658341 .
        }`
    },
    {
        id: "lotr-present-in",
        query: `SELECT (COUNT(DISTINCT ?item) AS ?c) WHERE {
          VALUES ?work { wd:Q15228 wd:Q74287 }
          ?item wdt:P1441 ?work .
        }`
    }
];

async function main() {
    for (const probe of probes) {
        try {
            const data = await sparql(probe.query);
            const c = data.results.bindings[0]?.c?.value;
            console.log(probe.id, c);
        } catch (error) {
            console.log(probe.id, "ERR", error.message.slice(0, 120));
        }
    }
}

main();
