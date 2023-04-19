const fs = require('fs')
var data = JSON.parse(fs.readFileSync('timestamp.json', 'utf8'))
console.log(data)