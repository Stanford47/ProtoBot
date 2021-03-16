'use strict'
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client()
const {
    botToken,
    prefix,
} = require('../main script/config.json');
client.on('ready', () =>{
    client.user.setActivity("owo", {
        type:"STREAMING",
        url:"https://www.youtube.com/watch?v=rSbiMQ-0Pp4"
    });
    console.log('I am ready')
});
client.login(botToken)