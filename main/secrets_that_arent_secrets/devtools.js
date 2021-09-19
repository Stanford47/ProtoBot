//make


//remind me wtf this file is again pls
console.log("ProtoBot Devtools");

//dependencies
const chalk = require('chalk');
const { Intents, MessageEmbed, Client} = require('discord.js');
const { setup } = require('../../secrets/config.json');
const botIntents = require('../../secrets/discordIntents');
const client = new Client({ intents: botIntents });
const { readFile, writeFile } = require('fs');

//on ready
client.on('ready', () => {
    //say ready!
    console.log("ready!");
});
var IsLearning = false;
var WaitingForReply = false;
//MAIN
client.on('messageCreate', async msg => {
    //ignore any normal commands
    if(msg.content.startsWith(setup.prefix)) return;

    //get da tecst
    let msgContentArr = msg.content.split('');

    if(IsLearning)
    {
        if(!WaitingForReply)
        {
            for(var i = 0; i < msg.content.length; i++)
            {
                writeFile('C:/Users/jaelt/Documents/GitHub/ProtoBot/main/secrets_that_arent_secrets/CurrentIn.eim', msgContentArr[i] + "\n", 'utf8', callback)
            }
            WaitingForReply = true;
        }
        else
        {
            for(var i = 0; i < msg.content.length; i++)
            {
                writeFile('C:/Users/jaelt/Documents/GitHub/ProtoBot/main/secrets_that_arent_secrets/CurrentIn.eim', msgContentArr[i] + "\n", (err, data) => {
                    if(err) throw err;

                    console.log(data);
                });
            }
            WaitingForReply = false;
        }
        
        msg.reply(readFile('C:/Users/jaelt/Documents/GitHub/ProtoBot/main/secrets_that_arent_secrets/NetworkAnswer.eom', (err, data) => {
            if(err) throw err;

            console.log(data);
        }));
    }

    //debug embeds below
    function debugEmbeds() 
    {
        if(msg.content === "stop learning")
        {
            IsLearning = false;
            msg.reply("alright, network no longer learning.. saving network");
        }
        if(msg.content === "nn")
        {
            IsLearning = true;
            msg.reply("alright, network now learning");
        }
        //add more later
    }
    if(msg.content === "nn") debugEmbeds();
    if(msg.content === "stop learning") debugEmbeds();

    //get client uptime and such
    let botUptime = Math.round(client.uptime) / 1000; //bot's uptime in seconds


    //yo  m
    if(msg.content.startsWith(setup.prefix + "split"))
    {
        if(msg.content === setup.prefix + "split") return msg.reply("a");

        let mcArr = msg.content.split('');

        console.log(mcArr);
    }

    //how long has this thing been on for??
    
});
client.login(setup.botToken);