'use strict'
const owo = require('@zuzak/owo')
const Discord = require('discord.js')
const client = new Discord.Client()
const {
    botToken,
} = require('../../config.json');
client.on('ready', () => {
    console.log(owo("I am ready"))
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    const mischelpEmbed = new Discord.MessageEmbed()
    .setTitle("**Misc. help**")
    .setDescription(owo.translate("Help for other commands"))
    .addFields(
        {name:"**fdetect** (working but not finished)", value:owo.translate("Calculates the amount a person is a furry")},
        {name:"**owoify**", value:owo.translate("i get to have fun and make your text funky OwO")},
        {name:"**rng**", value:owo.translate("I will give you a random number")}
    )
    .setFooter("UwU")
    .setTimestamp()
    if(msg.content.startsWith("p!misc-help")) {
        msg.channel.send(mischelpEmbed)
    }
});
