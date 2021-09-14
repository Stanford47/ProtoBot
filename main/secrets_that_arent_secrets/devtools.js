//make


//remind me wtf this file is again pls
console.log("ProtoBot Devtools");

//dependencies
const chalk = require('chalk');
const { Intents, MessageEmbed, Client} = require('discord.js');
const { config } = require('../../secrets/config.json');
const botIntents = require('../../secrets/discordIntents');
const client = new Client({ intents: botIntents });

//on ready
client.on('ready', () => {
    //say ready!
    console.log("ready!");
});

//MAIN
client.on('messageCreate', async msg => {
    //debug embeds below
    function debugEmbeds() 
    {
        if(msg.content === "nn")
        {
            const nnDebugEmbed = new MessageEmbed()
            .setColor('DARK_AQUA')
            .setTitle("Thinky")
            .setDescription("** **")
            .addFields
            (
                {name: "just pretend this doesnt exist...", value: "ok?"},
                //dear sandium, put your debug stuff here
            )
            .setFooter("Neural Network Debugging Thing")
            .setTimestamp()
        }
        //add more later
    }
    if(msg.content === "nn") debugEmbeds();

    //get client uptime and such
    let botUptime = Math.round(client.uptime) / 1000; //bot's uptime in seconds

    //how long has this thing been on for??
    
});