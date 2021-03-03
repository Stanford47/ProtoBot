'use strict';
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('ready', () => {
    console.log(owo('I am ready :)'));
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    function msgRNG() {
        let mrng = Math.floor((Math.random() *7) +1)
        let rngmsg = null
        if(mrng === 5) {
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
    if(msg.content.startsWith("p!horknee" || "p!owoify" || "p!invite" || "p!changelog" || "p!help" || "p!rng"))
    msgRNG();
});
client.login("ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.JImu5Q7CxzJGe5PQllwU5lpFGdc")