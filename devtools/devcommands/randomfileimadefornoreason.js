const Discord = require('discord.js')
const client = new Discord.Client()
const {
    prefix,
    botToken,
} = require('../json/config.json')
client.on('ready', () =>{
    console.log("ready")
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
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