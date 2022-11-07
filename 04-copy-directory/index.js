const fs = require('fs');
const path = require('path');

fs.mkdir('04-copy-directory/files-copy', err => {
  if (path.join(__dirname, '/files-copy')) {
  } else {throw err};
})

fs.readdir(path.join(__dirname, '/files'), (err, data) => {
  data.forEach(file => {
    fs.copyFile(path.join(__dirname, '/files', file), path.join(__dirname, '/files-copy', file), (err) => {
      if (err) {
        console.log("Error Found:", err);
      }
  })
  });
});