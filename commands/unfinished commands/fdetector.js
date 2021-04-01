'use strict'
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const {
    botToken,
} = require('../../config.json');
const client = new Discord.Client()
client.on('ready', () => {
    console.log(owo("I am ready"));
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    function fdRNG() {
        let rngF = Math.floor(Math.random() *101);
         let userm = msg.mentions.users
          const fdembed = new Discord.MessageEmbed()
    .setDescription(owo.translate("**furry detector**"))
    .addFields (
        {name:owo.translate("**calculated furry %**"), value:owo.translate(userm + "is " + rngF + "% furry")}
    )
    .setTimestamp()
         if(!userm) {
             msg.channel.send(owo.translate("You need to mention a user when trying this command"))
         } else {
            msg.channel.send(fdembed)
         }
    }
    if(msg.content.startsWith("p!fdetect")) {
        fdRNG();
    }
});
client.login(botToken);