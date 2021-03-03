'use strict'
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const botToken = 'ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.JImu5Q7CxzJGe5PQllwU5lpFGdc'
client.on('ready', () => {
    console.log(owo('I am ready :)'));
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    if(msg.content.startsWith("p!invite")) {
        msg.channel.send(owo.translate("here\'s the link so you can invite me to your server!"))
        msg.channel.send("https://discord.com/oauth2/authorize?client_id=816003326990221373&scope=bot")
    }
});
client.login(botToken)