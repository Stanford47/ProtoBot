const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const botToken = '' //token used to be here
client.on('ready', () => {
    console.log(owo('I am ready :)'));
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    
    }
    if(msg.content.length < 9 && msg.content.startsWith("p!owoify")) {
        msg.channel.send(owo.translate("give me something to owoify"))
    }else if(msg.content.startsWith("p!owoify" && msg.content)) {
    let owoification = msg.content
    msg.channel.send(owo.translate(owoification.replace("p!owoify", "** **")))
}
});
client.login(botToken)