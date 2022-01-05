const Discord = require('discord.js');
const moment = require('moment');
const Command = require('../classes/Command');

module.exports = new Command({
    name: "ping",
    description: "shows the ping and current uptime of the bot",

    async run(message, args, client) {
        const dPing = client.ws.ping;
        const rTime = new Date().getTime() - message.createdTimestamp;
        var cbt = "";
        var colour = "";

        if(rTime && dPing < 350) {
            cbt = "That\'s some pretty good ping.";
            colour = 'GREEN';
        } else {
            cbt = "I need better internet .w.";
            colour = 'RED'
        }

        message.channel.send({
            embeds: [new Discord.MessageEmbed()
                .setColor(colour)
                .setTitle("Pong!")
                .setDescription(cbt)
                .addFields(
                    {name: "__Response time__", value: rTime + "ms", inline: true},
                    {name: "__Discord API Latency__", value: dPing + "ms", inline: true}
                )
                .setFooter({ text: "How many packets are bursting?" })
            ]
        });
    }
})