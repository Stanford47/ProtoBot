const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client()
const {
    botToken,
    prefix,
} = require('../../main script/config.json');
client.on('ready', () => {
    console.log("ready");
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    if(msg.content.startsWith(prefix) && msg.content.includes("uptime")) {
        let uptime = client.uptime
        uptime = uptime / 1000
        msg.channel.send(uptime+" seconds")
    }
});
client.login(botToken)