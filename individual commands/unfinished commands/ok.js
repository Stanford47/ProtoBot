'use strict'
const owo = require("@zuzak/owo");
const Discord = require("discord.js");
const {
    botToken,
    botid,
} = require("../../config.json")
const client = new Discord.Client()
client.on('ready', () => {
    console.log(owo("I am ready :)"))
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    function hellothere() {
        let rng1 = Math.floor((Math.random() *6) +1);
        let rngout = rng1;
        if(rngout === 6) {
            msg.channel.send(owo.translate("pong"))
        } else if(rngout === 5) {
            msg.channel.send(owo.translate("hello there friend :D"))
        } else if (rngout === 4) {
            msg.channel.send(owo.translate("owo"))
        } else if (rngout === 3) {
            msg.channel.send(owo.translate("uwu"))
        } else if (rngout === 2) {
            msg.channel.send(owo.translate("hi!"))
        } else if (rngout === 1) {
            msg.channel.send(owo.translate("?"))
        }
    }
if(msg.mentions.client) {
    if(msg.content !== d) {
        return
    } else if(msg.mentions.client) {
    hellothere();
    }
}
});
client.login(botToken)
     