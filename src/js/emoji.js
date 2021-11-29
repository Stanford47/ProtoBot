const { Client } = require('discord.js');
const botIntents = require('../secrets/discordIntents');
const chalk = require('chalk');
const setup = require('../secrets/config.json');
const fastFolderSize = require('fast-folder-size');
const { promisify } = require('util');
const fastFolderSizeAsync = promisify(fastFolderSize);
const fs = require('fs');
const https = require('https');

const client = new Client({ intents: botIntents });

console.log(chalk.blueBright("ProtoBot Emoji Manager"));

client.on('ready', () => {
    console.log(chalk.greenBright("ready!"));
});

client.on('messageCreate', async msg => {
    //dont care if message doesnt start with prefix
    if(!msg.content.startsWith(setup.setup.prefix)) return;

    //add emoji function(void)
    async function add_emoji() {
        //get args
        const flushed = msg.content.split(" ").slice(1);
        const weary = msg.attachments.first().url;
        const tired = weary.split(".");

        //check if includes url
        if(weary === undefined || weary === null) return msg.reply("i need an image to add!");

        //check if includes name
        if(flushed === undefined) return msg.reply("i need a name for that emoji");

        //check if is jpg, png, or gif
        if(!weary.endsWith(".jpg") || !weary.endsWith(".png") || !weary.endsWith(".gif")) return msg.reply("your attachment must be a jpg, png, or gif!");

        //download then check if > 256kb
        var ftd = fs.createWriteStream('../secrets/temp/tempEm.' + tired[1]);

        const req = https.get(weary, (response) => {
            response.pipe(ftd);
        });

        
    }
});