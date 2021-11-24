const { exec } = require('child_process');
const sleep = require('./secrets/sleep');

exec('secrets/cp.cmd', (err, stderr, stdout) => {
    if(err) return console.error(err + "\n there has been an error with opening the cmd file to start the bot");

    console.log(stdout);

    sleep(10000)
}); //read line 8 of start.vbs