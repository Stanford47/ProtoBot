'use strict'
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    prefix,
    botToken,
} = require('../../config.json');
client.on('ready', () => {
    console.log(owo("I am ready"))
});
client.on('message', async msg => {
    if(!msg.content.startsWith(prefix)) {
    return
    }
    if(msg.author.bot) {
        return
    }
    const songQueue = queue.get(msg.guild.id);
    if(msg.content.startsWith('${prefix}music-play')) {
        execute(msg, songQueue);
        return;
    } else if(msg.content.startsWith('${prefix}music-skip')) {
        skip(msg, songQueue);
    } else if(msg.content.startsWith('${prefix}music-stop')) {
        stop(msg, songQueue)
    }
});
client.login(botToken);