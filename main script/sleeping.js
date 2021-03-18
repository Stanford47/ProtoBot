'use strict';
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require("./config.json")
client.on('ready', () => {
    console.log(owo('I am ready :)'));
    client.user.setActivity("zzz.js", {
        type:"WATCHING",
    });
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    function msgRNG() {
        let mrng = Math.floor((Math.random() *8) +1)
        let rngmsg = mrng
        if(mrng === 6) {
            rngmsg = "stop poking me uwu am twying to sweep"
        }else if(mrng === 5) {
            rngmsg = "zzz..."
        }else if(mrng === 4) {
            rngmsg = owo.translate("stoooop im trying to recharge my batteries >:(((((((")
        }else if(mrng === 3) {
            rngmsg = "snorig"
        }else if(mrng === 2) {
            rngmsg = "*visible anger*"
        }else if(mrng === 1) {
            rngmsg = "huh? what? why did you wake me up?"
        }     
        msg.channel.send(rngmsg)
    }
    if(msg.content.startsWith(prefix)) {
    msgRNG();
    }
});
client.login(botToken)