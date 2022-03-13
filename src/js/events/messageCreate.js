const fs = require('fs');
const cbt = require('../../../secrets/db_check');
const check_guild_allows_message_logs = require('../../../secrets/db_check');
const Event = require('../classes/Event.js');

module.exports = new Event('messageCreate', (client, message) => {
    client.user.setActivity({
        name: "Testing rn :>",
        type: 'WATCHING'
    });

    /* Logging */
    
    //check if guild is in db
    if (!fs.existsSync(`./secrets/db_t/guilds/${message.guild.id}`)) {
        cbt(message.guild.id);
    }

    //check if guild allows message logging
    if (!message.content.startsWith("p!")) {
        if (fs.readFileSync(`./secrets/db_t/guilds/${message.guild.id}/guild_settings.toaster`, 'utf8').includes("allows_message_logging: true")) {
            fs.appendFileSync(`./secrets/db_t/guilds/${message.guild.id}/logs/logs-${message.channel.id}.toaster`, `${message.id} - ${message.content}\n`);
        }
    }

    if(!message.content.startsWith("p!")) return;
    if(message.author.bot) return;
    if(message.webhookId) return;
    
    const args = message.content.substring(client.prefix.length).split(/ +/);

    const blacklisted = fs.readFileSync('./secrets/settings/blacklist.toaster', 'utf8').split("\n");

    if(blacklisted.includes(message.author.id)) return message.reply("no, you suck");

    const command = client.commands.find(command => command.name == args[0]);

    try { command.run(message, args, client); } catch(err) { console.log("someone did the wrong command lol") };
});