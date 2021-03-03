'use strict';
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client()
client.on('ready', () => {
    console.log(owo('I am ready!'));
})
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    function RNGfunct() {
    let rng = Math.floor(Math.random() *100000000001);
     msg.channel.send(owo.translate("here is your random number :) " + rng))
    }
    if(msg.content.startsWith('p!rng')) {
          RNGfunct();
    }
});
client.login('ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.JImu5Q7CxzJGe5PQllwU5lpFGdc')