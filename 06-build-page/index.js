const fs = require('fs');
const path = require('path');
const http = require('http');
const WriteStream = fs.createWriteStream(path.join(__dirname, 'project-dist', 'style.css'));
const WriteIndex = fs.createWriteStream(path.join(__dirname, 'project-dist', 'index.html'));

// copy folder assets

// fs.rm(path.join(__dirname, 'project-dist'), { recursive: true }, (err) => {
  fs.mkdir('06-build-page/project-dist', { recursive: true }, (err) => {
    if (err)  console.log(err);
  }); 


  // styles start
  
  fs.readdir(path.join(__dirname, 'styles'), (err, data) => {
    data.forEach(file => {
      fs.stat(path.join(__dirname, 'styles', file), (error, fileSize) => {
        if(String(path.extname(file)) === '.css') {
          fs.readFile(path.join(__dirname, 'styles', file), (err, fileContent) => {
            if (err)  console.log(err);
            WriteStream.write(fileContent);
          });
        }
      })
    })
  });
  
  // styles end
  
  // index.html start
  
     fs.readFile(path.join(__dirname, 'template.html'), 'utf8', (err, fileContent) => {
        if (!err) {
          fs.readdir(path.join(__dirname, 'components'), (err, data) => {
            if (err)  console.log(err);
            data.forEach(file => {
              fs.readFile(path.join(__dirname, 'components', file), 'utf8', (err, fileContentComponents) => {
                if (err)  console.log(err);
                const fileName = path.basename(file).split(`${path.extname(file)}`).join('')
                const replace = "{{" + fileName + "}}"
                fileContent = fileContent.replace(replace, fileContentComponents);
                fs.writeFile(path.join(__dirname, 'project-dist', 'index.html'), fileContent, err => {
                  if (err)  console.log(err);
                });
             });
            })
          });
        } else {
          if (err)  console.log(err);
        }
     });
  
  // index.html end

// });


  fs.rm(path.join(__dirname, 'project-dist/assets'), { recursive: true }, (err) => {
    fs.mkdir(path.join(__dirname, 'project-dist', 'assets'), { recursive: true }, (err) => {
      fs.readdir(path.join(__dirname, 'assets'), (err, data) => {
        data.forEach(folder => {
          fs.mkdir(path.join(__dirname, '/project-dist/assets', folder), { recursive: true }, (err) => {
          })
          fs.readdir(path.join(__dirname, 'assets', folder), { recursive: true }, (err, files) => {
            files.forEach(fileName => {
            fs.copyFile(path.join(__dirname, 'assets', folder, fileName), path.join(__dirname, '/project-dist/assets', folder, fileName), (err) => {
            });
            });
          });
        });
      });
    });
  });
  
  // copy folder assets
  


