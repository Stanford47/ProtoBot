const owo = require('@zuzak/owo')
const Discord = require('discord.js')
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json')
const client = new Discord.Client()
client.on('ready', () => {
    console.log('ready')
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    if(!msg.content.startsWith(prefix)) {
        return
    }
    function what(msg1, msg2, msg3, msg4, msgrng) {
        msg1 = owo.translate("hello")
        msg2 = owo.translate("huh?")
        msg3 = owo.translate("you need me?")
        msg4 = owo.translate("?")
        msgrng = Math.round((Math.random() *3) +1)
        switch (msgrng) {
            case 4:
                msg.channel.send(msg1)
                break;
            case 3:
                msg.channel.send(msg2)
                break;
            case 2:
                msg.channel.send(msg3)
                break;
            case 1:
                msg.channel.send(msg4)
                break;
        }
    }
    if(msg.content.startsWith(prefix) && msg.content.length === 2) {
        what();
    }
});