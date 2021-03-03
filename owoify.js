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
 if(msg.content.startsWith("p!owoify")) {
    let owoification = msg.content
    msg.channel.send(owo.translate(owoification.replace("p!owoify", "")))
} 
    });
client.login(botToken)