const Discord = require('discord.js');
const Command = require('../classes/Command');
const sleep = require('../../../secrets/sleep');

module.exports = new Command({
    name: "funban",
    description: "same as ban..But fun!",

    async run(message, args, client) {
        var banpleaseuwu = Math.round(Math.random() * 9223372036854775808); // 64bit depth lol
        const badman = message.mentions.members.first() ? message.mentions.members.first() : null;
        const reason = args[2] === undefined || args[2] == "" ? null : args.slice(2).join(" ");

        if(!message.member.permissions.has('BAN_MEMBERS')) return message.reply("you dont have the permissions to do this!");
        if(!message.guild.me.permissions.has('BAN_MEMBERS')) return message.reply("i don\'t have the permissions to do this");
        if(badman === null) return message.reply("you must mention someone to ban");

        const filter = badman;

        console.log(banpleaseuwu);

        message.channel.send(`<@${badman.id}> you have been chosen by <@${message.author.id}> to get banned from ${message.guild.name} for ${reason}! \nThere is a way to evade this! \nYou must guess a number from 0 to 9223372036854775808 to stay.\nGuess the number now!`);

        let collector = await message.channel.awaitMessages(filter);
        let answer = collector.first().content;

        if(!parseInt(answer) === banpleaseuwu) {
            message.reply("aw too bad. you got it wrong! i must ban you now.");

            await sleep(2000);
            
            message.reply("goodbye now!");

            badman.ban({
                reason: reason
            });
        } else {
            message.reply("wow amazing! you somehow got it right! you get to stay :)");
        }
    }
});