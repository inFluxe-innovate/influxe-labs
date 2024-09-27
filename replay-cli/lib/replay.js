const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { spawn } = require('child_process');

function replay(filename) {
  const filePath = path.join(process.cwd(), `${filename}.txt`);

  if (!fs.existsSync(filePath)) {
    console.log(`Error: ${filePath} not found.`);
    process.exit(1);
  }

  const commands = fs.readFileSync(filePath, 'utf8').split('\n');

  console.log(`Replaying commands from ${filePath}`);

  // Execute each command one by one
  for (const command of commands) {
    if (command.trim()) {
      console.log(`Executing: ${command}`);
      const [cmd, ...args] = command.split(' ');

      const child = spawn(cmd, args, { stdio: 'inherit', shell: true });

      child.on('error', (err) => {
        console.log(`Failed to execute command: ${command}\nError: ${err.message}`);
      });
    }
  }
}

module.exports = replay;
