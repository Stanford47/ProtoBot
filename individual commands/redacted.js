'use strict'
const owo = require('@zuzak/owo')
const Discord = require('discord.js')
const client = new Discord.Client();
const botToken = "ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.wdMZSo0q1DYNjnkCszd89qRJ2ng"
client.on('ready', () => {
    console.log(owo("I am ready"))
});
client.on('message', async msg => {
if(msg.author.bot) {
    return
}
function inquiryYG() {
    let selectionRNG = Math.round((Math.random() *2))
    let iyg = Math.floor(Math.random() *2623476) +12426
    let post = 'https://e621.net/posts/' + iyg + '?q=set%3Abestfavorites'
    let iygsecondary = Math.floor((Math.random() *1080571) +22)
    let secondarypost = 'https://e621.net/posts/' + iygsecondary + '?tags=set%3Abest_of_e621'
    if(selectionRNG < 1) {
        selectionRNG = selectionRNG + 1
    }
        if(!msg.channel.nsfw) {
            msg.channel.send(owo.translate("I cannot send nsfw posts in a non-nsfw channel..."))
        } else {
            msg.channel.send(owo.translate("OwO looks like someone is very horny"))
           if(selectionRNG === 1) {
               msg.channel.send(post)
           } else if(selectionRNG === 2) {
               msg.channel.send(secondarypost)
           }
        }
        
    }
if(msg.content.startsWith("p!horknee-yoff")) {
    inquiryYG();
}
});
client.login(botToken)