const fs = require('fs');
const path = require('path');


fs.rm(path.join(__dirname, '/files-copy'), { recursive: true }, (err) => {
  fs.mkdir('04-copy-directory/files-copy', { recursive: true }, (err) => {
    if (path.join(__dirname, '/files-copy')) {
    } else {throw err};
  })
  fs.readdir(path.join(__dirname, '/files'), (err, data) => {
    if (err) {
      console.log("Error Found:", err);
    }
    data.forEach(file => {
      fs.copyFile(path.join(__dirname, '/files', file), path.join(__dirname, '/files-copy', file), (err) => {
        if (err) {
          console.log("Error Found:", err);
        }
    });
  });
});
});