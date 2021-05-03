const Discord = require('discord.js');
const owo = require('@zuzak/owo')
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json')
const {
    copypasta1,
    copypasta2,
} = require('../devtools/json/otherschtuff.json')
client.on('ready', () =>{
    console.log('ready')
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    if(msg.content.includes("based on what")) {
        msg.channel.send("https://cdn.discordapp.com/attachments/697110248204533841/836373713733550170/based.mp4");
    }
    function copypastas() {
        let copypastarng = Math.round((Math.random() *1) +1)
        console.log(copypastarng)
        if(copypastarng === 1) {
            msg.channel.send(copypasta1)
        } else if(copypastarng === 2) {
            msg.channel.send(copypasta2)
        }
}
    if(msg.content.startsWith(prefix) && msg.content.endsWith("copypasta")) {
        copypastas();
    }
});
client.login(botToken)