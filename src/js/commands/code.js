const Command = require('../classes/Command');
const Discord = require('discord.js');
const fs = require('fs');

module.exports = new Command({
    name: "code",
    description: "base command for programming related commands",

    async run(message, args, client) {
        //delcaring vars for options
        const language = args[1] || null;
        const opt = args.slice(2).join(" ");
    }
});