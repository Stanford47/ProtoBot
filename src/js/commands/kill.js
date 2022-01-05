const Command = require('../classes/Command.js');
const fs = require('fs');

module.exports = new Command({
    name: "kill",
    description: "use this to kill the bot",

    async run(message, args, client) {
        const devs = fs.readFileSync('./secrets/settings/devs.toaster').toString().split("\n");

        if(!devs.includes(message.author.id)) return message.reply("you aren\'t a dev! use a different command!");

        await message.channel.send("bye-bye!");

        console.log("process ended..");

        process.kill(process.pid, 'SIGTERM');
    }
});