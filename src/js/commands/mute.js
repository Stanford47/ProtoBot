const Discord = require('discord.js');
const Command = require('../classes/Command');

module.exports = new Command({
    name: "mute",
    description: "mutes a user for a set time",

    async run(message, args, client) {
        message.reply(args.join(" "));

        if(!message.member.permissions.has('MODERATE_MEMBERS')) return message.reply("you do not have the permissions to use this command!");
        const kindabadman = message.mentions.members.first() ? message.mentions.members.first() : null;
        if(kindabadman === null) return message.reply("you must mention someone to mute!");
        if(message.member.roles.highest.permission <= kindabadman.roles.highest.permission) return message.reply("that user has a higher position than you!");

        const time_not_conv = parseInt(args[2]);
        var time = 0;
        const time_conv = args[3];
        const reason = args.slice(3).join(" ");

        if(!isNaN(time_not_conv) || !isFinite(time_not_conv)) return message.reply("the amount of time must be a finite number! (less than 64 bit integer limit)");

        if(time_conv === "seconds" || "secs" || "s") time = time_not_conv * 1000;
        else if(time_conv === "hours" || "hrs" || "h") time = time_not_conv * 1000 * 60 * 60;
        else if(time_conv === "days" || "d") time = time_not_conv * 1000 * 60 * 60 * 24;

        if(time > 1987200000) return message.reply("the maximum amount of time a user can be timed out is 23 days!");

        kindabadman.timeout(time, reason === undefined || null || " " || "" ? "" : reason).then(() => { message.reply(`user ${kindabadman.tag} has been timed out for ${time_not_conv}${time_conv}`) });
    }
});