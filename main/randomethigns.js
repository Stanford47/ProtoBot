const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json');
client.on('ready', () =>{
    console.log("ready")
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    if(!msg.content.startsWith(prefix)) {
        return
    }
    
});
client.login(botToken);