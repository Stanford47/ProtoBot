const Command = require('../classes/Command');
const Discord = require('discord.js');
const fs = require('fs');

module.exports = new Command({
    name: "set",
    description: "Use this command to change settings for the bot.",

    async run(message, args, client) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You don't have permission to use this command.");

        if (args[1] == "logging") {
            if (args[2] == true) {
                const config_file = fs.readFileSync(`./secrets/db_t/guilds/${message.guild.id}/guild_settings.toaster`, 'utf8');

                fs.writeFileSync(`./secrets/db_t/guilds/${message.guild.id}/guild_settings.toaster`, config_file.replace("allows_message_logging: false", "allows_message_logging: true"));
            } else if (args[2] == false) {
                const config_file = fs.readFileSync(`./secrets/db_t/guilds/${message.guild.id}/guild_settings.toaster`, 'utf8');

                fs.writeFileSync(`./secrets/db_t/guilds/${message.guild.id}/guild_settings.toaster`, config_file.replace("allows_message_logging: true", "allows_message_logging: false"));
            }
        }
    }
});

// add something to check the config file for something that already exists :>
// test later. i really need to finish this lol