const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log(owo('I am ready :)'));
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    const changedEmbed = new Discord.MessageEmbed()
    .setTitle("ProtoBot V4")
    .setDescription("Most recent changes")
    .addFields (
        {name:"**New Commands!**", value:"added another secret command ask <@398758748904226836> about it"},
        {name:"**Changes!**", value:"added new command to the help command"}
    )
    .setFooter("OwO")
    .setTimestamp()
    if(msg.content.startsWith("p!changelog")) {
        msg.channel.send(changedEmbed);
    }
});
client.login('ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.JImu5Q7CxzJGe5PQllwU5lpFGdc');