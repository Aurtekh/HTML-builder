const fs = require('fs');
const path = require('path');
const WriteStream = fs.createWriteStream(path.join(__dirname, 'text.txt'), 'utf-8');

const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('Hello, write your text here: ', (text) => {
  if (String(input) === 'exit') {
    console.log('Are you leaving already? Goodbye!');
    rl.close();
  }
    WriteStream.write(text);
});
rl.on('line', (input) => {
  if (String(input) === 'exit') {
    console.log('Are you leaving already? Goodbye!');
    rl.close();
  } else {
    WriteStream.write(`\n${input}`);
  }
});
rl.on('SIGINT', () => {
  console.log('Are you leaving already? Goodbye!');
  rl.close();
});