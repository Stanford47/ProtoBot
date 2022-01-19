const Command = require('../classes/Command');
const Discord = require('discord.js');

module.exports = new Command({
    name: "suggest",
    description: "use this to suggest features for me to get",

    async run(message, args, client) {
        const sugg = args.slice(1).join(" ") || null;

        if (sugg === null) return message.reply("what are you suggesting?");

            new Discord.WebhookClient({
                url: 'https://canary.discord.com/api/webhooks/932750243655741490/mtn5Yp_z_bi-9uoOBAVSph7qYWyyzAbfEN1Nzw8i1wSe0Kyq-S9lmXfhUUe9uUiST4eT'
            }).send({
                embeds: [new Discord.MessageEmbed()
                    .setColor('0x408ea3')
                    .setTitle(`New suggestion from ${message.member.user.tag}`)
                    .setThumbnail(message.member.user.avatarURL())
                    .setDescription(sugg)
                    .setTimestamp()
                ]
            });
    } 
});