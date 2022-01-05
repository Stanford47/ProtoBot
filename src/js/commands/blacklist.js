const Command = require('../classes/Command.js');
const fs = require('fs');

module.exports = new Command({
    name: "blacklist",
    description: "blacklists a user",

    async run(message, args, client) {
        const devs = fs.readFileSync('./secrets/settings/devs.toaster', 'utf8').split("\n");

        if(!devs.includes(message.author.id)) return message.reply("you are not a developer! use a differeint command...");

        if(args[1] == undefined) return message.reply("you need the id of someone.. You literally made me...");

        const user_check = fs.readFileSync('./secrets/settings/blacklist.toaster', 'utf8');

        if(user_check.includes(args[1])) return message.reply("that user has already been blacklisted");

        if(message.guild.me.permissions.has('MANAGE_MESSAGES')) message.delete();

        

        fs.appendFile('./secrets/settings/blacklist.toaster', args[1] + "\n", (err) => {
            if(err) return message.reply(err + "\ntry again...");

            message.channel.send(`user <@${args[1]}> has been blacklisted successfully.\nid: ${args[1]}`);
        });
    }
});