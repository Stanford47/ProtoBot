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
    if(msg.author.bot) {
        return
    }
    if(msg.content.startsWith(prefix) && msg.content.includes("uptime")) {
        let uptime = client.uptime
        uptime = uptime / 1000
        msg.channel.send(uptime+" seconds")
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