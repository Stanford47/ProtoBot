'use strict'
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client()
const {
    botToken,
    prefix,
} = require('../main script/config.json');
client.on('ready', () =>{
    client.user.setActivity("scanning for problems... do not prompt", {
        type:"CUSTOM_STATUS",
    });
    console.log('I am ready')
});
client.login(botToken)