const fs = require('fs');
const path = require('path');
const ReadStream = fs.createReadStream(path.join(__dirname, 'text.txt'), 'utf-8');
ReadStream.on('data', (event) => {
  console.log(event.toString());
});