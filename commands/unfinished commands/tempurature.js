const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../../devtools/json/config.json');
client.on('ready', () => {
    console.log('ready');
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    if(!msg.content.startsWith(prefix)) {
        return
    }
    function FtoC(ftemp) {
        return(ftemp * (9/5))
    }
    let FtoCunfinished = FtoC()
    if(msg.content.startsWith(prefix) && msg.content.includes("ftoc")) {
    let fui = msg.content
    fui.replace(prefix + "ftoc", " ")
    msg.channel.send(FtoCunfinished);
}
});
client.login(botToken)
//i know i overcomplicated it but im just trying to keep in my head that return exists lol