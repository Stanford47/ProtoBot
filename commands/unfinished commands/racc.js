const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../../devtools/json/config.json');
client.on('ready', () => {
    console.log('ready');
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    if(!msg.content.startsWith(prefix)) {
        return
    }
    function raccsays() {
        let raccRNG = Math.round(Math.random()*5);
        if(raccRNG == 0) {
            msg.channel.send("dummy text lol")
        } else if(raccRNG == 1) {
            msg.channel.send("dummy text lol")
        } else if(raccRNG == 2) {
            msg.channel.send("dummy text lol")
        } else if(raccRNG == 3) {
            msg.channel.send("dummy text lol")
        } else if(raccRNG == 4) {
            msg.channel.send("dummy text lol")
        }
    }
    raccsays();
});
client.login(botToken)