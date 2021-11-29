const { Client, MessageEmbed } = require('discord.js');
const setup = require('../secrets/config.json');
const sleep = require('../secrets/sleep');
const botIntents = require('../secrets/discordIntents');
const chalk = require('chalk');
const fs = require('fs');

/* Client Setup */
const client = new Client({ intents: botIntents });

/* On File Open */
console.log(chalk.blueBright("ProtoBot Guild Settings"));

/* On Ready */
client.on('ready', () => {
    console.log(chalk.greenBright("ready!"));
});

/* On Guild Join/Create */
client.on('guildCreate', async guild => {
    //make folder to hold the guild's stuff
    fs.mkdir(`../secrets/guilds/${guild.id}`, function(err) {
        if(err) return console.log("Unable to start config for guild " + guild.id);
    });

    //create config files
    fs.appendFile(`../secrets/guilds/${guild.id}/settings.toaster`, 'false\nfalse\nfalse', function(err) {
        if(err) return console.log(err);
    });
    //Key:
    //1: beta features
    //2: nsfw
    //3: owo?

    //make folder for audio
    fs.mkdir(`../secrets/guilds/${guild.id}/audio`, (err) => {
        if(err) return console.log(err);
    });
})

/* On Guild Leave/Delete */
client.on('guildDelete', async guild => {
    //delete the guild's folder
    fs.rmdir(`../secrets/guilds/${guild.id}`, function(err) {
        if(err) return console.log(err);
    });
});

/* On New Message */
client.on('messageCreate', async msg => {
    //check if the server has dir
    fs.exists('../secrets/guilds/' + msg.guild.id, (e) => {
        if(!e) {
            fs.mkdir('../secrets/guilds/' + msg.guild.id, (err) => {
                if(err) return console.error(err + "\n there has been a problem with creating new dir for server " + msg.guild.id + ".");
            });

            fs.writeFile('../secrets/guilds/' + msg.guild.id + '/settings.toaster', 'false\nfalse', (err) => {
                if(err) return console.error(err + "\n there has been a problem with creating settings file for guild " + msg.guild.id + ".");
            });
        }
    });

    //check if user used command if yes dont log
    if(!msg.content.startsWith("p!")) {
        fs.appendFile(`../secrets/guilds/${msg.guild.id}/logs.toaster`, msg.content + "\n", (err) => {
            if(err) return console.error(err + "\nthere has been an error with logging messages in guild: " + msg.guild.id + " in channel: " + msg.channel.id + ".")
        });
    }

    if(msg.content.startsWith(setup.setup.prefix + "dev add")) {
        fs.readFile('../secrets/settings/devs.toaster', 'utf8', (err, data) => {
            if(!data.includes(msg.author.id)) return msg.reply("you can\'t use this command!");
            else {
                if(msg.content.endsWith("add")) return msg.reply("you must give me a user\'s id to add!");

                fs.appendFile('../secrets/settings/devs.toaster', msg.content.replace("p!dev add ", "") + "\n", (err) => {
                    if(err) return console.error(err + "\n there has been an error with adding a user to devs");
                });

                msg.reply("added user!");
            }
        });   
    }
});
client.login(setup.setup.botToken);