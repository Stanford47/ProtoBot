const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json')
client.on('ready', () =>{
    console.log('ready')
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    if(msg.content.includes("based on what")) {
        msg.channel.send("https://cdn.discordapp.com/attachments/697110248204533841/836373713733550170/based.mp4");
    }
});
client.login(botToken)