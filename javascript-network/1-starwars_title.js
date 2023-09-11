#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

if (!movieId) {
    console.error('Usage: node 1-starwars_title.js <https://swapi-api.alx-tools.com/api/films/:id>');
    process.exit(1);
}

const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

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
        const movieData = JSON.parse(body);
        const movieTitle = movieData.title;
        console.log(movieTitle);
    }   catch (parseError) {
        console.error(`Error parsing JSON response: ${parseError.message}`);
        process.exit(1);
    }
});
