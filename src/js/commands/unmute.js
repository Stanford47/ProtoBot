const Discord = require('discord.js');
const Command = require('../classes/Command');

module.exports = new Command({
    name: "unmute",
    description: "unmutes a user that has been muted",

    async run(message, args, client) {
        if(!message.member.permissions.has('MANAGE_MEMBERS')) return message.reply("you do not have the permissions to use this command!");
        let notbadman = message.mentions.members.first() ? message.mentions.members.first() : null;
        if(message.member.roles.highest.permission <= notbadman.roles.highest.permission) return message.reply("that person has a higher position than you!");
        if(notbadman === null) return message.reply("you must mention someone to unmute!");

        notbadman.timeout(0).then(() => {
            message.channel.send({ embeds: [new Discord.MessageEmbed()
                .setColor('0x72b377')
                .setTitle(`Unmuted ${notbadman.user.tag}`)
                .setDescription('')
                .setFooter({ text: `Unmuted by ${message.member.user.tag}` })
            ]})
        });
    }
});