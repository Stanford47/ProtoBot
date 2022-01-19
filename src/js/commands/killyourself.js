const sleep = require('../../../secrets/sleep');
const Command = require('../classes/Command');
const Discord = require('discord.js');

module.exports = new Command({
    name: "killyourself",
    description: "no",

    async run(message, args, client) {
        const perp = message.member;

        let rand = Math.round(Math.random() * 6);

        if (rand < 5) return message.reply("grr");
        if (!perp.kickable) return message.reply(">:(");
        else {
            perp.kick("they told me to kms :(((");

            message.channel.send({
                embeds: [new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle(`Kicked user ${perp.user.tag}`)
                    .setThumbnail(perp.user.avatarURL)
                    .setFooter({ text: "Meanie >:(" })
                ]
            });
        }
    }
})