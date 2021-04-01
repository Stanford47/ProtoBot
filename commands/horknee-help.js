const owo = require('@zuzak/owo')
const Discord = require('discord.js')
const client = new Discord.Client();
const botToken = 'ODE2MDAzMzI2OTkwMjIxMzcz.YD0oUQ.JImu5Q7CxzJGe5PQllwU5lpFGdc'
client.on('ready', () => {
    console.log(owo("I am ready"))
});
client.on('message', async msg => {
if(msg.author.bot) {
    return
}
const horkneeHelp = new Discord.MessageEmbed()
.setTitle("Horknee Help")
.setDescription("...")
.addFields (
    {name:"**copypasta**", value:owo.translate("I will say a cool copypasta owo")},
    {name:"||**yoff**||", value:owo.translate("||lets be honest, its kinda obvious what this does||")}
)
.setFooter("òwó")
.setTimestamp()
if(msg.content.startsWith("p!horknee")) {
    msg.channel.send(owo.translate("ok then..."))
    msg.channel.send(horkneeHelp)
}
});
client.login(botToken)