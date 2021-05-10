const Discord = require('discord.js')
const client = new Discord.Client()
const {
    prefix,
    botToken,
} = require('../devtools/json/config.json')
const dtlist = "specs, uptime"

client.on('ready', () =>{
    console.log("ready")
});
client.on('message', async msg =>{
    let uptime = client.uptime
    if(msg.author.bot) {
        return
    }
    if(msg.content.startsWith(prefix) && msg.content.includes("uptime") && msg.content.endsWith("seconds")) {
        uptime = uptime / 1000
        Math.floor(uptime)
        msg.channel.send(uptime + " seconds")
    } else if (msg.content.startsWith(prefix) && msg.content.includes("uptime") && msg.content.endsWith("minutes")) {
        uptime = uptime / 60000
        Math.floor(uptime)
        msg.channel.send(uptime+" minutes")
    } else if(msg.content.startsWith(prefix) && msg.content.includes("uptime") && msg.content.endsWith("hours")) {
        uptime = uptime / 3600000
        Math.floor(uptime)
        msg.channel.send(uptime+" hours")
    } else if(msg.content.startsWith(prefix) && msg.content.includes("uptime") && msg.content.endsWith("days")) {
        uptime = uptime / 86400000
        Math.floor(uptime)
        msg.channel.send(uptime+" days")
    }
    if(msg.content.startsWith(prefix) && msg.content.endsWith("uptimeh")) {
        msg.channel.send("seconds, minutes, hours, days");
    }
    if(msg.content.startsWith(prefix) && msg.content.includes("devtools list")) {
        msg.channel.send(dtlist)
    }
    const specsembed = new Discord.MessageEmbed()
        .setTitle("Specs")
        .setDescription("current specs")
        .addFields(
            {name:"CPU", value:"Intel Pentium G2030T"},
            {name:"RAM", value:"3.98gb"},
            {name:"Storage", value:"800gb (50gb allocated for bot)"}
        )
        .setFooter("bad specs")
        .setTimestamp()
    if(msg.content.startsWith(prefix) && msg.content.includes("specs")) {
        msg.channel.send(specsembed)
    }
});
client.login(botToken)