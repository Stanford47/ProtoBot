const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const client = new Discord.Client();
const {
    botToken,
    prefix,
} = require('../devtools/json/config.json');
client.on('ready', () => {
    console.log(owo.translate('I am ready :)'));
});
client.on('message', async msg => {
    if(msg.author.bot) {
        return
    }
    if(!msg.content.startsWith(prefix)) {
        return
    }
    const changedEmbed = new Discord.MessageEmbed()
    .setColor("#34eb67")
    .setTitle("V13")
    .setDescription("most recent changes")
    .addFields(
        {name:"bugfixes", value:"no bugs found :)"},
        {name:"new commands", value:"new secret command"},
        {name:"other additions", value:"remade some of the embeds in certain commands, removed the token from some of the older commands, added response when you only say the bots prefix and no command after"}
    )
    .setFooter("more info can be found in the GitHub repo")
    .setTimestamp()
    if(msg.content.startsWith(prefix) && msg.content.endsWith("changelog")) {
        msg.channel.send(changedEmbed)
    }
});
client.login(botToken)