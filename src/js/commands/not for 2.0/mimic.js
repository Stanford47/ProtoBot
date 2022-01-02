const Command = require('../classes/Command');
const Discord = require('discord.js');

module.exports = new Command({
    name: "mimic",
    description: "allows you to mimic a user of your choice",

    async run(message, args, client) {
        const userM = message.mentions.members.first() ? message.mentions.members.first().id : null;
        const msg = args.slice(2).join(" ");
        const mchannel = message.channel;

        if(userM === null) return message.reply("you must mention a user!");
        if(!message.guild.members.cache.has(userM)) return message.reply("you must give me a user from this guild!");

        mchannel.createWebhook(userM.username, { avatar: userM.avatarURL});
    }
});