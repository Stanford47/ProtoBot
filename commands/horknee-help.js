const owo = require('@zuzak/owo')
const Discord = require('discord.js')
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json')
client.on('ready', () => {
    console.log(owo("I am ready"))
});
client.on('message', async msg => {
if(msg.author.bot) {
    return
}
const horkneeHelp = new Discord.MessageEmbed()
.setColor("#ff48df")
.setTitle("nsfw help")
.setDescription("...")
.addFields (
    {name:"**copypasta**", value:owo.translate("I will say a cool copypasta owo"), inline:true},
    {name:"**yoff**", value:owo.translate("lets be honest, its kinda obvious what this does"), inline:true}
)
.setFooter("òwó")
.setTimestamp()
if(msg.content.startsWith(prefix) && msg.content.includes("nsfw") || msg.content.includes("horknee help") || msg.content.includes("nsfw help")) {
    msg.channel.send(horkneeHelp)
}
});
client.login(botToken)