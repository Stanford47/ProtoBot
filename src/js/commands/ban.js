const Command = require('../classes/Command');
const fs = require('fs');
const Discord = require('discord.js');

module.exports = new Command({
    name: "ban",
    description: "bans a user from your server",

    async run(message, args, client) {
        if (!message.member.permissions.has('BAN_MEMBERS')) return message.reply("you do not have permission to use this command!");

        const badman = message.mentions.members.first() ? message.mentions.members.first() : null;

        if (badman === null) return message.reply("you must mention someone to ban");

        let deez = parseInt(args[2]);
        if (args.indexOf(deez.toString()) === args.length - 1) deez = "none";
        if (isNaN(deez) || !isFinite(deez)) return message.reply("you must give me a finite number");
        const reason = args.slice(3).join(" ") == "" || undefined ? "none" : args.slice(3).join(" ");

        if (badman == message.guild.me) return message.reply("dont ban me .w.");
        if (!badman.bannable) return message.reply("i can\'t ban that person for some reason");

        if (!message.guild.me.permissions.has('BAN_MEMBERS')) {
            return message.reply("i do not have the permissions to do this");
        } else {
            await badman.ban({
                reason: reason,
                days: deez == "none" ? null : deez
            });

            message.channel.send({
                embeds: [new Discord.MessageEmbed()
                    .setColor("RANDOM")
                    .setTitle("User banned")
                    .setDescription(`The user <@${badman.id}> has been banned`)
                    .addFields(
                        {
                            name: "__Reason__",
                            value: reason,
                            inline: true
                        },
                        {
                            name: "__Days__",
                            value: deez.toString(),
                            inline: true
                        },
                        {
                            name: "__ID__",
                            value: badman.id,
                            inline: true
                        }
                    )
                ]
            });
        }
    }
});