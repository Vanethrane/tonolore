const { sparql } = require("../lib/wikiClient");

async function main() {
    const probes = [
        {
            id: "find-hp-universe",
            q: `SELECT ?u ?uLabel WHERE {
              ?u rdfs:label "Harry Potter universe"@en .
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            } LIMIT 5`
        },
        {
            id: "find-me-universe",
            q: `SELECT ?u ?uLabel WHERE {
              ?u rdfs:label "Middle-earth"@en .
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            } LIMIT 10`
        },
        {
            id: "find-pokemon-universe",
            q: `SELECT ?u ?uLabel WHERE {
              ?u rdfs:label "Pokémon universe"@en .
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            } LIMIT 5`
        },
        {
            id: "me-via-tolkien",
            q: `SELECT (COUNT(DISTINCT ?item) AS ?c) WHERE {
              ?item wdt:P170 wd:Q892 .
              ?item wdt:P31 ?type .
            }`
        },
        {
            id: "me-characters-fictional",
            q: `SELECT (COUNT(DISTINCT ?item) AS ?c) WHERE {
              ?item wdt:P1080 ?universe .
              ?universe rdfs:label "Tolkien's legendarium"@en .
            }`
        },
        {
            id: "legendarium-label",
            q: `SELECT ?u ?uLabel WHERE {
              ?u rdfs:label "Tolkien's legendarium"@en .
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            } LIMIT 5`
        },
        {
            id: "pokemon-species-sample",
            q: `SELECT ?item ?itemLabel WHERE {
              ?item wdt:P31/wdt:P279* wd:Q3966183 .
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en". }
            } LIMIT 5`
        }
    ];

    for (const probe of probes) {
        try {
            const data = await sparql(probe.q);
            console.log(
                probe.id,
                JSON.stringify(data.results.bindings.slice(0, 5), null, 0).slice(0, 400)
            );
        } catch (error) {
            console.log(probe.id, error.message.slice(0, 120));
        }
    }
}

main();
