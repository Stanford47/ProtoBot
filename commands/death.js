'use strict'
const owo = require("@zuzak/owo")
const Discord = require("discord.js");
const client = new Discord.Client()
const {
    prefix,
    botToken,
} = require("../devtools/json/config.json");
client.on('ready', () => {
    console.log(owo("I am ready"))
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    function die() {
        let dietextrng = Math.floor((Math.random()*6) +1)
        if(dietextrng === 6) {
            msg.channel.send(":(")
        }else if(dietextrng === 5) {
            msg.channel.send("\\*sad protogen noises\\*")
        } else if(dietextrng === 4) {
            msg.channel.send(owo.translate("thats not nice :("))
        } else if(dietextrng === 3) {
            msg.channel.send(owo.translate("no I won\'t"))
        } else if(dietextrng === 2) {
            msg.channel.send(owo.translate("no u"))
        } else if(dietextrng === 1) {
            msg.channel.send(owo.translate("bad!"))
        }
    }
    if(msg.content.startsWith(prefix+"die")) {
        die();
    }
});
client.login(botToken)