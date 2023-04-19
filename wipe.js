const fs = require('fs')

const wipedTimestamp = {"time" : null}

fs.writeFileSync('timestamp.json', JSON.stringify(wipedTimestamp), function writeJSON(err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(file));
    console.log('writing to ' + fileName);
  })