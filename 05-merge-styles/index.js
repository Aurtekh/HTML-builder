const fs = require('fs');
const path = require('path');
const WriteStream = fs.createWriteStream(path.join(__dirname, '/project-dist', 'bundle.css'));

fs.readdir(path.join(__dirname, '/styles'), (err, data) => {
  data.forEach(file => {
    fs.stat(path.join(__dirname, '/styles', file), (error, fileSize) => {
      if(String(path.extname(file)) === '.css') {
        fs.readFile(path.join(__dirname, '/styles', file), (err, fileContent) => {
          if(err) {throw err};
          WriteStream.write(fileContent);
       });
        
      }
    })
  })
});
