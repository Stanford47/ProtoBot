'use strict';
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const the = '"random"';
client.on('ready', () => {
    console.log(owo('I am ready :)'));
});
client.on('message', async msg => {
if(msg.author.bot) {
     return;
}
    const coolembed = new Discord.MessageEmbed()
.setTitle(owo.translate("All of my commands in one place"))
.setDescription(owo("**remember my prefix is:**" + "__** p!**__"))
.addFields(
    {name:"**test**", value:owo.translate("use this to test if i am alive")},
    {name:"**help**", value:owo.translate("the command you are using right now. this will give you a list of all of my commands!")},
    {name:"**sweeping** (not working yet)", value:owo.translate("you'll find out when you try it...")},
    {name:"**random text**(not working yet)", value:owo.translate("it gives you " + the + " text!")},
    {name:"**changelog**", value:owo.translate("shows the most recent changes to me")},
    {name:"**owoify**", value:owo.translate("i get to have fun and make your text funky OwO")},
    {name:"**rng**", value:owo.translate("i will give you a random number!")},
    {name:"**invite**", value:owo("i give you my invite link so that you can put me in your server")},
    {name:"||**horknee**||", value:"||**do p!help-horknee for the availiable commands for this**||"}
)
.setFooter(owo.translate("hello there friend!"))
.setAuthor()
.setTimestamp()
if(msg.content.startsWith("p!help")) {
msg.channel.send(owo.translate("help? You want help about me? Ok! here you go!"))
    msg.channel.send(coolembed)
}
});
client.login('ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.JImu5Q7CxzJGe5PQllwU5lpFGdc');