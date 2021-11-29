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
        if(msg.mentions.members.first().id === msg.author.id)
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

        //remove bannee
        ppp.shift();

        //check if provided amount of time to delete
        if(ppp[0] === "1" || ppp[0] === "2" || ppp[0] === "3" || ppp[0] === "4" || ppp[0] === "5" || ppp[0] === "6" || ppp[0] === "7" || ppp[0] === "8" || ppp[0] === "9") var ja = parseInt(ppp[0]); ppp.shift(); //this isnt going to work is it

        //get reason why they are banning
        let u = ppp.slice(1);

        //try to ban guy
        msg.guild.members.cache.get(badman.id).ban({ reason: u, days: ja == "" ? null : ja });
        
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


    /*
    //channel settings
    if(msg.content.startsWith(prefix + "channel"))
    {
        //get args
        var what = msg.content.split(" ").shift();

        //check if nothing
        if(what.length < 1) return msg.reply("dummy text...");

        //types

        //Set Timeout//
        //Set NSFW//
        //Access Perms//

        //set channel timeout
        if(what[0].includes("timeout")) {
            //if no args for timeout
            if(what.length < 2) return msg.reply("how long do you want the timeout length?");

            //get length
            var TL = parseInt(what[1]);

            //get channel id (channel id is optional)
           //if(what.length < 3) return msg.reply("what is the id of the channel?"); //remove if not needed/wanted
            if(what.length == 3){
                var ID = what[2];
            }
            
            //set timeout (but check for perms first)
            if(!msg.guild.me.permissions.has('MANAGE_CHANNELS')) return msg.reply("i do not have the permissions to do that");

            if(!msg.member.permissions.has('MANAGE_CHANNELS')) return msg.reply("you can\'t use this command!");

            //now actually set timeout
            if(what.length == 3) {
                msg.channel
            }// finish later
        }

        if(what[0].includes("")) {

        }
    }
    */
});
client.login(botToken); //i stg if this doesnt work