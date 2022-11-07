const fs = require('fs');
const path = require('path');
fs.readdir(path.join(__dirname, '/secret-folder'), (err, data) => {
  data.forEach(file => {
    fs.stat(path.join(__dirname, '/secret-folder', file), (error, fileSize) => {
      if(fileSize.isFile()) {
        const name = path.basename(file).split(`${path.extname(file)}`).join('');
        console.log(`${name} - ${path.extname(file)} - ${String(+fileSize.size / 1000)}kb`)
      }
    })
  })
});
