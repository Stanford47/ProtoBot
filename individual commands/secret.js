'use strict'
const owo = require("@zuzak/owo");
const Discord = require("discord.js");
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require("../main script/config.json");
client.on('ready', () =>{
    console.log(owo("I am ready"))
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    const secretEmbed = new Discord.MessageEmbed()
    .setTitle("**Secret Commands**")
    .setDescription("this is a secret dont tell anyone!!")
    .addFields(
        {name:"die", value:owo.translate("please don\'t do this :(")}
    )
    .setTimestamp()
    .setFooter("h is best letter!")
        if(msg.content.startsWith(prefix+"secret")) {
            msg.channel.send(secretEmbed)
        }   
});
client.login(botToken)