'use strict';
const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json')
client.on('ready', () => {
    console.log(owo.translate('I am ready :)'));
});
client.on('message', async msg => {
if(msg.author.bot) {
     return;
}
if(!msg.content.startsWith(prefix)) {
    return
}
const helpEmbed = new Discord.MessageEmbed()
.setColor('#438D80')
.setTitle("Help")
.setDescription(owo.translate("remember that my prefix is " + prefix))
.addFields(
    {name:"help", value:owo.translate("this is the command that you are using right now. shows a general description of most of the commands"), inline:true},
    {name:"changelog", value:owo.translate("this shows the most recent changes to me"), inline:true},
    {name:"invite", value:owo.translate("gives you a link to invite me to your server"), inline:true},
    {name:"fun", value:owo.translate("this shows some fun and cool commands"), inline:true},
    {name:"||nsfw||", value:" ", inline:true}
)
.setFooter(":3")
.setTimestamp()
if(msg.content.startsWith(prefix) && msg.content.endsWith("help")) {
    msg.channel.send(helpEmbed);
}
});
client.login(botToken)