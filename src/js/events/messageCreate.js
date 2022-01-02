const fs = require('fs');
const Event = require('../classes/Event.js');

module.exports = new Event('messageCreate', (client, message) => {
    if(!message.content.startsWith(client.prefix)) return;
    if(message.author.bot) return;
    if(message.webhookId) return;
    
    const args = message.content.substring(client.prefix.length).split(/ +/);

    const blacklisted = fs.readFileSync('../secrets/settings/blacklist.toaster', 'utf8').split("\n");

    if(blacklisted.includes(message.author.id)) return message.reply("no, you suck");

    const command = client.commands.find(command => command.name == args[0]);

    command.run(message, args, client);
});