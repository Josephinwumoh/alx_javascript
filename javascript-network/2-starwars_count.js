#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
    console.error('Usage: node 2-starwars_count.js <https://swapi-api.alx-tools.com/api/films/>');
    process.exit(1);
}

const characterId = 18;

request(apiUrl, (error, response, body) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error(`Error: Received status code ${response.statusCode}`);
        process.exit(1);
    }

    try {
        const filmsData = JSON.parse(body).results;
        const filmsWithWedgeAntilles = filmsData.filter((film) => {
            const characterIds = film.characters.map((characterUrl) =>
            parseInt(characterUrl.split('/').slice(-2, -1)[0])
            );
            return characterIds.includes(characterId);
        });

        const count = filmsWithWedgeAntilles.length;
        console.log(count);
    }   catch (parseError) {
        console.error(`Error parsing JSON response: ${parseError.message}`);
        process.exit(1);
    }
});
