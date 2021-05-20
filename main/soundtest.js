const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json')
client.on('ready', () =>{
    console.log('ready');
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    if(!msg.guild) {
        msg.reply("this is not a guild!")
        return
    }
    if(!msg.content.startsWith(prefix)) {
        return
    }
    if(msg.content.startsWith(prefix) && msg.content.endsWith("join")) {
        if(msg.member.voice.channel) {
            const connection = await msg.member.voice.channel.join()
        } else {
            msg.reply(owo.translate("you have to join a voice channel first!"))
        }
    }
    if(msg.content.startsWith(`${prefix}play amongus`)) {
        const dispatcher = a
    }
    if(msg.content.startsWith(prefix) && msg.content.endsWith("leave")) {
        if(msg.member.voice.channel) {
            const connection = await msg.member.voice.channel.leave()
        }
    }
});
client.login(botToken)