const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const url = args[0];
const fileName = args[1];

request(url, (error, response, body) => {
    if (error) {
        throw error;
    }
    fs.writeFile(fileName, body, (error) => {
        if (error) {
            throw error;
        }
        console.log(`Downloaded and saved ${body.length} bytes to ${fileName}`);
    });
});