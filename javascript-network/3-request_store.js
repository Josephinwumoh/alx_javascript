#!/usr/bin/node

const request = require('request');

const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
    console.error('Usage: node 3-request_store.js <http://loripsum.net/api loripsum> <file_path>');
    process.exit(1);
}

request(url, (error, response, body) => {
    if (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error(`Error: Received status code ${response.statusCode}`);
        process.exit(1);
    }

    const fileName = filePath.split('/').pop();

    fs.writeFile(filePath, body, 'utf-8', (writeError) => {
        if (writeError) {
            console.error(`Error writing to file: ${writeError.message}`);
            process.exit(1);
        }       
    });
});
