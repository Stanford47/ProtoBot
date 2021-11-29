const { setup } = require('../secrets/config.json');
const botIntents = require('../secrets/discordIntents');
const chalk = require('chalk');
const owo = require('@zuzak/owo');
const { Intents, Client, MessageAttachment } = require('discord.js');


//cleint
const client = new Client({ intents: botIntents });

//on file start
console.log(chalk.blueBright("Protobot other"));

//ready
client.on('ready', () => {
    console.log("ready!");
});

//main


client.on('messageCreate', async msg => {
    //time for some cringy commands


    /*
    //tag
    if(msg.content === "tag")
    {
        const tagisforbabies = new MessageAttachment()
        .setFile('../assets/tag.jpg');

        msg.channel.send({ files: tagisforbabies });
    }

    //based
    if(msg.content.includes("based on what"))
    {
        const thehardware = new MessageAttachment()
        .setFile('../assets/based.mp4');

        msg.channel.send({ files: thehardware });
    }
    //fuck messageAttatchment in v13
    */


    //what was that other command that i regretted making

    //fuck it just make a new one

    //h and j stuffs
    if(msg.content === `${setup.prefix}h` || msg.content === `${setup.prefix}j`)
    {
        if(msg.content.includes("h"))
        {
            msg.reply("h");
        }

        if(msg.content.includes("j"))
        {
            function jbad()
            {
                var yom = Math.round(Math.random() * 20 );

                yom < 18 ? msg.reply("j is not as good as h") : msg.reply(`racc says, "j is objectively the best letter"`);
            }

            jbad();
        }
    }

    //uhh what else to make

    //thanks sandium for suggesting ascii fluid dynamics c:
    
});
//login
client.login(setup.botToken);