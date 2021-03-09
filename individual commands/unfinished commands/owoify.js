const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const botToken = 'ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.wdMZSo0q1DYNjnkCszd89qRJ2ng'
client.on('ready', () => {
    console.log(owo('I am ready :)'));
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    
    }
 if(msg.content.startsWith("p!owoify" && !msg.content)) {
     msg.channel.send(owo.translate("what do you want me to owoify for you?"))
 } else if(msg.content.startsWith("p!owoify" && msg.content)) {
    let owoification = msg.content
    msg.channel.send(owo.translate(owoification.replace("p!owoify", "")))
} 
});
client.login(botToken)