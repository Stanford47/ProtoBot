const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client()
const {
    botToken,
    prefix,
} = require('../../config.json');
client.on('ready', () =>{
    console.log("ready")
    client.user.setActivity("with arm processors", {
    type:"PLAYING",
})
});
client.login(botToken)