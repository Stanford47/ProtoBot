const Command = require('../classes/Command.js');
const sleep = require('../../../secrets/sleep.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: "timer",
    description: "timer", //change later

    async run(message, args, client) {
        if(args.length == 1) return message.channel.send("how long do you want the timer?");

        var timer_time = parseInt(args[1]);
        var timer_length = args[2];

        if(timer_length == "secs" ||
            timer_length == "sec" ||
            timer_length == "s" ||
            timer_length == "seconds") {
                timer_time = timer_time * 1000;
                timer_length = "seconds"
        } 
        else if(timer_length == "min" ||
                timer_length == "mins" ||
                timer_length == "minutes" ||
                timer_length == "m") {
            timer_length = "minutes";
            timer_time = timer_time * 60000;
        }
        else if(timer_length == "hours" ||
                timer_length == "hrs" ||
                timer_length == "h") {
            timer_time = timer_time * 3600000;
            timer_length = "hours";
        }
        else if(timer_length == "days" ||
                timer_length == "d") {
                    timer_time = timer_time * 86400000;
                    timer_length = "days";
        }
        else return message.channel.send("that is not a valid type. \n`secs, mins, hrs`");

        var timer_reason = "";

        if(args.length == 3) timer_reason = "N/A";
        else timer_reason = args.slice(3).join(" ");

        message.channel.send({
            embeds: [new Discord.MessageEmbed()
                .setColor('DARK_GREEN')
                .setDescription(`set a timer for ${args[1]} ${timer_length}.`)
                .addField(
                    "Reason",
                    timer_reason,
                    true
                )
                .setTimestamp()
            ]
        });
        await sleep(timer_time);
        message.reply(`your timer for ${timer_reason} has ended!`);
    }
});