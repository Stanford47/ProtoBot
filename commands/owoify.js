const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
/*
const botToken = '' //token used to be here
*/
const {
    prefix,
    botToken,
} = require('../devtools/json/config.json')
client.on('ready', () => {
    console.log(owo('I am ready :)'));
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    
    }
    function owoify() {
        if(msg.content.length < 9) {
            msg.reply(owo.translate("I cant owoify nothing! give me something to owoify!"))
        } else {
            let owoification = msg.content
            msg.channel.send(owo.translate(owoification.replace(`${prefix}owoify`, ` `)))
        }
    }
    if(msg.content.startsWith(`${prefix}owoify`)) {
        owoify();
    }
});
client.login(botToken)