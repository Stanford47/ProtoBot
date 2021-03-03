'use strict'
const owo = require('@zuzak/owo')
const Discord = require('discord.js')
const client = new Discord.Client();
const botToken = 'ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.JImu5Q7CxzJGe5PQllwU5lpFGdc'
client.on('ready', () => {
    console.log(owo("I am ready"))
});
client.on('message', async msg => {
if(msg.author.bot) {
    return
}
function inquiryYG() {
        let iyg = Math.floor(Math.random() *2623476) +12426
        let post = 'https://e621.net/posts/' + iyg + '?q=set%3Abestfavorites'
        if(!msg.channel.nsfw) {
            msg.channel.send(owo.translate("I cannot send nsfw posts in a non-nsfw channel..."))
        } else {
            msg.channel.send(owo.translate("OwO looks like someone is very horny"))
            msg.channel.send(post)
        }
        
    }
if(msg.content.startsWith("p!horknee-yoff")) {
    inquiryYG();
}
});
client.login(botToken)