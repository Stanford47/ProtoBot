const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json');
const client = new Discord.Client;
client.on('ready', () =>{
    console.log("ready")
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
        const rngmessageembed = new Discord.MessageEmbed()
        .setTitle("** **")
        .setDescription("** **")
        .addFields(
            {name:"** **", value:"DiscordAPIError: Cannot send an empty message"},
            {name:"** **", value:"at RequestHandler.execute (C:/Users/user1/ProtoBot/node_modules/discord.js/src/rest/RequestHandler.js:154:18"},
            {name:"** **", value:"at processTicksAndRejections (node:internal/process/task_queues:94:5)"},
            {name:"** **", value:"at async RequestHandler.push (C:/Users/user1/ProtoBot/node_modules/discord.js/src/rest/RequestHandler.js:39:14)"}
        )
        .setTimestamp()
        .setFooter("** **")

    if(msg.content.startsWith(prefix+"kill")) {
        msg.channel.send(owo.translate("no im not goi-"));
        msg.channel.send(rngmessageembed);
        msg.channel.send("")
    }
});
client.login(botToken)
//coolio