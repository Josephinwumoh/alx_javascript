#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2]; 

if (!movieId) {
  console.error('Usage: node 5-starwars_characters.js <Movie ID>');
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
    const characters = movieData.characters;

    if (characters.length === 0) {
      console.log('No characters found for this movie.');
    } else {
      for (const characterUrl of characters) {
        request(characterUrl, (charError, charResponse, charBody) => {
          if (charError) {
            console.error(`Error fetching character: ${charError.message}`);
          } else if (charResponse.statusCode !== 200) {
            console.error(`Error: Received status code ${charResponse.statusCode}`);
          } else {
            const characterData = JSON.parse(charBody);
            console.log(characterData.name);
          }
        });
      }
    }
  } catch (parseError) {
    console.error(`Error parsing JSON response: ${parseError.message}`);
    process.exit(1);
  }
});
