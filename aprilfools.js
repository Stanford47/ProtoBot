const owo = require('@zuzak/owo');
const Discord = require('discord.js');
const {
    botToken,
    prefix,
} = require('./devtools/json/config.json');
const client = new Discord.Client;
client.on('ready', () =>{
    console.log("ready")
});
client.on('message', async msg =>{
    if(msg.author.bot) {
        return
    }
    function die() {
        let dietextrng = Math.floor((Math.random()*1000)+1)
        let dietextrng2 = Math.floor((Math.random()*5) +1)
        if(dietextrng < 1000) {
        if(dietextrng2 === 6) {
            msg.channel.send(":(")
        }else if(dietextrng === 5) {
            msg.channel.send("\\*sad protogen noises\\*")
        } else if(dietextrng === 4) {
            msg.channel.send(owo.translate("thats not nice :("))
        } else if(dietextrng === 3) {
            msg.channel.send(owo.translate("no I won\'t"))
        } else if(dietextrng === 2) {
            msg.channel.send(owo.translate("no u"))
        } else if(dietextrng === 1) {
            msg.channel.send(owo.translate("bad!"))
        }
    } else if(dietextrng === 1000) {
        const rngmessageembed = new Discord.MessageEmbed()
        .setTitle("** **")
        .setDescription("** **")
        .addFields(
            {name:"** **", value:"DiscordAPIError: Cannot send an empty message"},
            {name:"** **", value:"at RequestHandler.execute (C:/Users/user1/ProtoBot/node_modules/discord.js/src/rest/RequestHandler.js:154:18"},
            {name:"** **", value:"at processTicksAndRejections (node:internal/process/task_queues:94:5)"},
            {name:"** **", value:"at async RequestHandler.push (C:/Users/user1/ProtoBot/node_modules/discord.js/src/rest/RequestHandler.js:39:14)"}
        )
        .setTimestamp()
        .setFooter("** **")
        msg.channel.send(owo.translate("no im not goi-"));
        msg.channel.send(rngmessageembed);
        msg.channel.send("")
    }
    }
    if(msg.content.startsWith(prefix+"die")) {
        die();
    }
});
client.login(botToken)
//coolio