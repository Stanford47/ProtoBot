const Command = require('../classes/Command.js');
const fs = require('fs');

module.exports = new Command({
    name: "unblacklist",
    description: "unblacklists a person",

    async run(message, args, client) {
        const devs = fs.readFileSync('./secrets/settings/devs.toaster', 'utf8').split("\n");
        const blacklist = fs.readFileSync('./secrets/settings/blacklist.toaster', 'utf8').split("\n");

        if(!devs.includes(message.author.id)) return message.reply("you aren\'t a developer! you cannot use this command");

        if(!blacklist.includes(args[1])) return message.reply("that person already isn\'t blacklisted!");

        fs.readFile('../secrets/settings/blacklist.toaster', 'utf8', (err, data) => {
            if(err) return message.channel.send(err + "\ntry again...");

            let newData = data.split("\n");

            newData.forEach(user => {
                if(args[1] == user) {
                    newData.splice(newData.indexOf(user), 1);
                }
            });

            fs.writeFileSync('./secrets/settings/blacklist.toaster', newData.join("\n"));

            message.channel.send(`successfully unblacklisted user <@${args[1]}> \nid: ${args[1]}`);
        });
    }
});