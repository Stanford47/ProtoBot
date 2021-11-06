const { Client } = require('discord.js');
const chalk = require('chalk');
const botIntents = require('../secrets/discordIntents');
const setup = require('../secrets/config.json');
const fs = require('fs');

const client = new Client({ intents: botIntents });

console.log(chalk.blueBright("ProtoBot MessageLogger"));

client.on('ready', () => {
    console.log(chalk.greenBright("ready!"));
});

client.on('messageCreate', async msg => {
    if (msg.author.bot) return;

    if (msg.guild === null) {
        fs.appendFile('./main/logs/dm/' + msg.author.id + '.toaster', msg.content, function (err) {
            if (err) return console.log(err);
        });
    } else
    {
        if(!fs.existsSync('./main/logs/guilds/' + msg.guild.id, function(err) { if(err) return console.log(err);}))
        {
            fs.mkdir('./main/logs/guilds/' + msg.guild.id, { recursive: true } , function(err) { if(err) return console.log(err);});
        }

        fs.appendFile('./main/logs/guilds/' + msg.guild.id + '/' + msg.author.id + '.toaster', msg.content + "\n", function(err) {
            if(err) return console.log(err);
        });

        fs.appendFile('./main/logs/data/' + msg.guild.id + '.toaster', msg.content + "\n", function(err) {
            if(err) return console.log(err);
        });
    }
});

client.login(setup.setup.botToken);