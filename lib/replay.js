const { exec } = require('child_process');
const fs = require('fs');

function replaySession(filePath) {
  const commands = fs.readFileSync(filePath, 'utf8').split('\n');

  commands.forEach((command, index) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command #${index + 1}: ${command}`);
        console.error(error);
      } else {
        console.log(`Executed: ${command}`);
        console.log(stdout);
      }
    });
  });
}

module.exports = { replaySession };
