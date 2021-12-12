const Command = require('../classes/Command.js');
const Discord = require('discord.js');

module.exports = new Command({
    name: "rng",
    description: "returns a random number with the parameters of your choice",

    async run(message, args, client) {
        message.channel.send(args[1].toString());

	    if(args[1] == undefined || args[2] == undefined) return msg.channel.send("you must give me the min and max values for the rng to work");

	    var no_name = Math.round(Math.random() * (args[2] - args[1]));

	    message.channel.send({
		    embeds: [new Discord.MessageEmbed()
			    .setDescription(no_name.toString())
			    .setTimestamp()
		    ]
	    });
    }
});