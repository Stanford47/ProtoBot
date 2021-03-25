const Discord = require('discord.js')
const owo = require('@zuzak/owo')
const client = new Discord.Client()
const {
    prefix,
    botToken,
} = require('../json/config.json')
const dtlist = "specs, uptime"
client.on('ready', () =>{
   console.log("ready") 
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    if(msg.content.startsWith(prefix) && msg.content.includes("devtools list")) {
        msg.channel.send(dtlist)
    }
});
client.login(botToken)