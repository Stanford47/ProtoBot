const Discord = require('discord.js');
const client = new Discord.Client()
const botToken = require('../../devtools/json/config.json')
client.on('ready', () =>{
    console.log('a')
});
client.on('message', async msg =>{
    const testsubject01 = new Discord.MessageEmbed()
    .setTitle("test")
    .attachFiles('../../')
    .setFooter("h")
    if(msg.content.includes("testsubject01")) {
        msg.reply(testsubject01)
    }
});
client.login(botToken)