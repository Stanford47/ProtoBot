const { MessageEmbed } = require('discord.js');
const Command = require('../classes/Command.js');
const owo = require('@zuzak/owo');

module.exports = new Command({
    name: "owoify",
    description: "owo",

    async run(message, args, client) {
        message.channel.send(owo.translate(args.slice(1).join(" ")));
    }
});