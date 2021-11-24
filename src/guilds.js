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

/* On Guild Join */
client.on('guildCreate', async guild => {
    //make folder to hold the guild's stuff
    fs.mkdir(`../secrets/guilds/${guild.id}`, function(err) {
        if(err) return console.log("Unable to start config for guild " + guild.id);
    });

    //create config files
    fs.appendFile(`../secrets/guilds/${guild.id}/settings.toaster`, 'false\ntrue\nfalse', function(err) {
        if(err) return console.log(err);
    });
    //Key:
    //1: beta features
    //2: message logging
    //3: nsfw
    //4: 
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

            fs.writeFile('../secrets/guilds/' + msg.guild.id + '/settings.toaster', 'false\ntrue\nfalse', (err) => {
                if(err) return console.error(err + "\n there has been a problem with creating settings file for guild " + msg.guild.id + ".");
            });
        }
    });

    //check if server allows message logging. if it does, log message
    fs.readFile('../secrets/guilds/' + msg.guild.id + '/settings.toaster', 'utf8',(err, data) => {
        if(err) return console.error(err + "\n there has been an error with checking server settings in guild " + msg.guild.id + ".");

        let settings = data.toString();

        settings.split('\n');

        if(settings[1].includes("true"))
        {
            fs.appendFile('../secrets/guilds/' + msg.guild.id + '/log.toaster', msg.content + "\n", (err) => {
                if(err) return console.error(err + "\n there has been an error with logging a user\'s message in guild " + msg.guild.id + ".");
            });
        } else return;
    });

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