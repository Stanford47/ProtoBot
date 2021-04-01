const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client()
const {
    botToken,
    prefix,
} = require('../json/config.json');
client.on('ready', () => {
    console.log("ready");
});
client.on('message', async msg =>{
    let uptime = client.uptime
    if(msg.author.bot) {
        return
    }
    if(msg.content.startsWith(prefix) && msg.content.includes("uptime") && msg.content.endsWith("seconds")) {
        uptime = uptime / 1000
        msg.channel.send(uptime+" seconds")
    } else if(msg.content.startsWith(prefix) && msg.content.includes("uptime") && msg.content.endsWith("minutes") || msg.content.endsWith("mins")) {
        uptime = uptime / 60000
        msg.channel.send(uptime+" minutes")
    } else if(msg.content.startsWith(prefix) && msg.content.includes("uptime") && msg.content.endsWith("hours")) {
        uptime = uptime / 3600000
        msg.channel.send(uptime+" hours")
    } else if(msg.content.startsWith(prefix) && msg.content.includes("uptime") && msg.content.endsWith("days")) {
        uptime = uptime / 86400000
        msg.channel.send(uptime+" days")
    }
    if(msg.content.startsWith(prefix) && msg.content.endsWith("uptimeh")) {
        msg.channel.send("seconds, minutes(or mins), hours, days");
    }
});
client.login(botToken)