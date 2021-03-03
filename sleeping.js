'use strict';
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
    if(msg.content.startsWith("p!test")) {
        msg.channel.send(owo.translate("stoooop im trying to recharge my batteries >:((((((("));
    }
    if(msg.content.startsWith("p!help")) {
        msg.channel.send("I am trying to get some sleep here >:(")
        }
    if(msg.content.startsWith("p!changelog")) {
        msg.channel.send("zzz...")
    }
    if(msg.content.startsWith("p!random text")) {
        msg.channel.send("snorig...")
    }
});
client.login("ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.JImu5Q7CxzJGe5PQllwU5lpFGdc")