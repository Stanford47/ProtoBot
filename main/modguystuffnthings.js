const { setup, urls } = require('../secrets/config.json');
const chalk = require('chalk');
const { Intents, MessageEmbed, Client, Guild } = require('discord.js');
const replaceString = import('replace-string'); //fuck replaceString
const owo = require('@zuzak/owo')
const sleep = require('../secrets/sleep');

//get intents
const botIntents = require('../secrets/discordIntents');

//create client
const client = new Client({ intents: botIntents });

//redefine the config vars
const botToken = setup.botToken;
const prefix = setup.prefix;
const inviteLink = urls.inviteLink;
const repo = urls.repo;

//on ready
client.on('ready', () => {
    console.log("ready");
});

//main
client.on('messageCreate', async msg => {
    //yo m

    //ban
    if(msg.content.startsWith(`${prefix}ban`))
    {
        //get msg content
        var mc = msg.content.replace(prefix + "ban ", "");
        //get args
        let pp = msg.content.split(' ');
        let ppp = pp.slice(1);

        //check if user has perms
        if(!msg.member.permissions.has('BAN_MEMBERS'))
        {
            return msg.reply("you can\'t use this command!");
        }

        //check if i have perms
        if(!msg.guild.me.permissions.has('BAN_MEMBERS'))
        {
            return msg.reply("I don\'t have the permission `BAN_MEMBERS`");
        }
        
        //check if they mentioned anyone
        if(msg.content.length < 6)
        {
            return msg.reply("you need to mention someone to ban");
        }

        //check if user mentioned themselves for some reason
        if(msg.mentions.members.first() === msg.author)
        {
            return msg.reply("why are you trying to ban yourself...");
        }

        //get user mentioned
        var badman = msg.mentions.members.first();

        //check if user wants to ban proto
        if(badman === msg.guild.me)
        {
            return msg.reply("don\'t ban me ;w;");
        }

        //check for perms
        if(badman.permissions.has('BAN_MEMBERS') && badman != msg.guild.me)
        {
            return msg.reply("i can\'t ban people that also have the ban permission")
        }

        //get reason why they are banning
        let u = ppp.slice(1).join(" ");

        //try to ban guy
        msg.guild.members.cache.get(badman.id).ban({ reason: u });
        
        //send message in chat and say in console as well
        msg.channel.send(`User <@${badman.id}> has been banned for ${u}`);
        console.log(`the user ${badman.id} has been banned from the guild ${msg.guild.id}`);
    }

    //purge
    if(msg.content.startsWith(`${prefix}purge`))
    {
        //get channel id
        var CID = msg.channel.id;

        //check for perms
        if(!msg.member.permissions.has('MANAGE_MESSAGES'))
        {
            return msg.reply("you don\'t have the permissions to use this command!");
        }

        //check if proto has perms
        if(!msg.guild.me.permissions.has('MANAGE_MESSAGES'))
        {
            return msg.reply("i can\'t do this because i dont have the permission `MANAGE_MESSAGES`.");
        }

        //get how many messages to delete
        let MTD = msg.content.replace(prefix + "purge ", "");

        //check if they didnt provide a value
        if(MTD === "")
        {
            return msg.reply("you must give me a value");
        }

        //turn into integer
        MTD = parseInt(MTD);

        //check if they did an oopsie
        if(!Number.isInteger(MTD))
        {
            return msg.reply("you need to give me a number");
        }

        //bulk delete
        msg.channel.bulkDelete(MTD + 1);
    }
});
client.login(botToken); //i stg if this doesnt work