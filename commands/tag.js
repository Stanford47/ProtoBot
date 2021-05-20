const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client()
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json');
client.on('ready', () =>{
    console.log('ready');
});
client.on('message', async msg =>{
    const tagurit = new Discord.MessageAttachment()
    .setFile('C:/Users/jaelt/funni/tag.jpg')

    if(msg.content.startsWith(prefix) && msg.content.endsWith('tag')) {
        msg.channel.send(tagurit);
    }
});
client.login(botToken)