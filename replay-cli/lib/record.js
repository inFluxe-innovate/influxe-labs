const fs = require('fs');
const path = require('path');
const readline = require('readline');

function record(filename) {
  const filePath = path.join(process.cwd(), `${filename}.txt`);
  const commands = [];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log('Recording commands... Press Ctrl+D to stop.');

  // Capture user input line by line
  rl.on('line', (input) => {
    commands.push(input);
    console.log(`Logged: ${input}`);
  });

  // When user presses Ctrl+D, stop recording and save the session
  rl.on('close', () => {
    fs.writeFileSync(filePath, commands.join('\n'), 'utf8');
    console.log(`Recording saved to ${filePath}`);
    process.exit(0);
  });
}

module.exports = record;
