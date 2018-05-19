const fs = require('fs');
const readline = require('readline');
const cleanData = require('./modules/cleanData');

// Delete cleaned data file on each run.
fs.unlink('./data/clean.json', (err) => {
  if (err) {
    throw err;
  } else {
    const stream = fs.createWriteStream("./data/clean.json", {flags:'a'});
    let seperator = '';

    stream.write('[');

    // import raw js
    const readLines = readline.createInterface({
      input: fs.createReadStream('./data/dirty.txt')
    });
    
    // translate each line of raw js into json
    readLines.on('line', (line) => {
      const jsonLine = JSON.stringify(cleanData.generateJson(line));
      stream.write(seperator + jsonLine);
      if (!seperator) {
        seperator = ',';
      }
    });

    readLines.on('close', () => {
      stream.write(']');
    });
  }
});
