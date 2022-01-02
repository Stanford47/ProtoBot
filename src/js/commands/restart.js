const Command = require('../classes/Command');
const child_process = require('child_process');
const { readFileSync, writeFileSync, unlinkSync } = require('fs');

module.exports = new Command({
    name: "restart",
    description: "restarts the bot",

    async run(message, args, client) {
        const devs = readFileSync('../secrets/settings/devs.toaster').toString().split("\n");

        if(!devs.includes(message.author.id)) return message.reply("you aren\'t a dev! try a different command");

        process.kill(process.pid, 'SIGTERM');
    }
});