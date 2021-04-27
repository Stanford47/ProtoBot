const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client()
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json');
client.on('ready', () =>{
    console.log("ready")
    client.user.setActivity("mango foxy", {
    type:"WATCHING",
})
});
client.login(botToken)