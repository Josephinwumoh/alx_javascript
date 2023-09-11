#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
    console.error('Usage: node 4-completed_tasks.js <https://jsonplaceholder.typicode.com/todos>');
    process.exit(1);
}

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
        const tasks = JSON.parse(body);

        const completedTasksCountByUser = {};

        for (const task of tasks) {
            if (task.completed) {
                if (!completedTasksCountByUser[task.userId]) {
                    completedTasksCountByUser[task.userId] = 0;
                }
                completedTasksCountByUser[task.userId]++;
            }
        }

        console.log(completedTasksCountByUser);
    }   catch (parseError) {
        console.error(`Error parsing JSON response: ${parseError.message}`);
        process.exit(1);
    }
});
