const Discord = require('discord.js');
const Command = require('../classes/Command');
const fs = require('fs');

module.exports = new Command({
    name: "dev",
    description: "developer commands", //
    
    async run(message, args, client) {
        const devs = fs.readFileSync('./secrets/settings/devs.toaster');

        if(!devs.includes(message.author.id)) return message.reply("this is a dev command! use a different command");

        const sub_c = args[1];

        if(sub_c === "add") {
            fs.appendFileSync('./secrets/settings/devs.toaster', message.mentions.members.first().id + "\n");

            return message.reply("successfully added developer");
        }
    }
});