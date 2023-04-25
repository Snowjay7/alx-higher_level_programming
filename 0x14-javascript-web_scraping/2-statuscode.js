#!/usr/bin/node
// Script that display the status code of a GET request

const request = require('request');

if (process.argv.length > 2) {
  request
    .get(process.argv[2])
    .on('response', response => {
      console.log(`code: ${response.statusCode}`);
    });
}
