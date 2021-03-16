//this is really cool omg
'use strict'
const owo = require('@zuzak/owo')
const Discord = require('discord.js')
const client = new Discord.Client()
const {
    botToken,
    prefix,
} = require('../main script/config.json')
client.on('ready', () =>{
    console.log('I am ready')
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    function uwuowo() {
        let uwurng = Math.floor((Math.random() *3)+1)
        if(uwurng === 1) {
            msg.channel.send("uwu")
        } else if(uwurng === 2) {
            msg.channel.send("owo")
        } else if(uwurng === 3) {
            msg.channel.send(":3")
        }
    }
    if(msg.content.startsWith(prefix + "owo")) {
        uwuowo();
    }
    if(msg.content.startsWith(prefix+"uwu")) {
        uwuowo();
    }
})
client.login(botToken)