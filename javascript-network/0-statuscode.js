#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

if (!url) {
    console.error('Usage: node 0-statuscode.js <url>');
    process.exit(1);
}

request(url, (error, response) => {
    if (error) {
        console.error('Error: ${error.message}');
        process.exit(1);
    }

    console.log('code: ${response.statusCode}');
});
