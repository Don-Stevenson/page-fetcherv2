
// getting the data
const url = process.argv[2];
const path = process.argv[3];


// requiring fs
const fs = require('fs');
const request = require('request');

request(url, (error, response, body) => {
    fs.writeFile(path, body, (err) => {
    if(err) throw err;

    fs.stat(path, (err,stats) => {
      if (err){
        throw err
      } else {
        console.log(`Downloaded and saved ${stats.size} bytes to ${path}`)
      } 
    })
  });
});

