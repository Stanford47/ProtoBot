const Discord = require('discord.js');
const Command = require('../classes/Command');

module.exports = new Command({
    name: "mute",
    description: "mutes a user for a set time",

    async run(message, args, client) {
        if(!message.member.permissions.has('MODERATE_MEMBERS')) return message.reply("you do not have the permissions to use this command!");
        let kindabadman = message.mentions.members.first() ? message.mentions.members.first() : null;
        if(kindabadman === null) return message.reply("you must mention someone to mute!");
        if(message.member.roles.highest.permission <= kindabadman.roles.highest.permission) return message.reply("that user has a higher position than you!");

        let time_not_conv = parseInt(args[2]);
        var time = 0;
        let time_conv = args[3];
        let reason = args.slice(4).join(" ");

        if(isNaN(time_not_conv) || !isFinite(time_not_conv)) return message.reply("the amount of time must be a finite number! (less than 64 bit integer limit)");

        if(time_conv === "seconds" || "secs" || "s") time = time_not_conv * 1000, time === 1000 ? time_conv = "second" : time_conv = "seconds";
        else if(time_conv === "minutes" || "mins" || "min" || "m") time_not_conv * 1000 * 60, time === 60000 ? time_conv = "minute" : time_conv = "minutes";
        else if(time_conv === "hours" || "hrs" || "h") time = time_not_conv * 1000 * 60 * 60, time === 3600000 ? time_conv = "hour" : time_conv = "hours";
        else if(time_conv === "days" || "d") time = time_not_conv * 1000 * 60 * 60 * 24, time === 86400000 ? time_conv = "day" : time_conv = "days";

        if(time > 1987200000) return message.reply("the maximum amount of time a user can be timed out is 23 days!");

        kindabadman.timeout(time, reason === undefined || null || " " || "" ? reason = "none given" : reason).then(() => {
            message.channel.send({
                embeds: [new Discord.MessageEmbed()
                    .setColor('0x72b377')
                    .setTitle(`Timed out ${kindabadman.user.tag}`)
                    .setDescription(``)
                    .addFields(
                        {name: "length", value: `${args[2]} ${time_conv}`, inline: true},
                        {name: "reason", value: reason, inline: false}
                    )
                    .setFooter({ text: `Timed out by ${message.member.user.tag}` })
                ]
            })
        });
    }
});